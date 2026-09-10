import nock from "nock";
import { EmailModule } from "../../modules/Email.module";
import { ActivityEventType } from "../../models/email/Activity";
import { EmailHeader } from "../../models/email/EmailParams";
import {
  Email,
  EmailActivityEvent,
  EmailInteraction,
  EmailListItem,
  EmailListResponse,
  EmailRecordedInteraction,
  EmailResponse,
  EmailStatus,
  EmailSuppressionReason,
  EmailsQueryParams,
} from "../../models/email/Emails";

const listResponse = {
  data: [
    {
      id: "6a8fa9b1902fab56e0ce50dd",
      from: "sender@example.com",
      to: "rcpt@example.org",
      subject: "Welcome",
      text: null,
      html: null,
      template_id: "7nxe3yjmeq28vp0k",
      domain_id: "7nxe3yjmeq28vp0k",
      message_id: "6a8fa9b1902fab56e0ce50aa",
      status: "sent",
      tags: ["newsletter"],
      interaction: ["opened"],
      suppression_reason: null,
      created_at: "2026-08-27T03:06:25.000000Z",
      updated_at: "2026-08-27T03:06:25.000000Z",
      headers: [{ name: "X-Custom", value: "foo" }],
    },
  ],
  links: { first: "https://api.mailersend.com/v1/emails?page=1", last: null, prev: null, next: null },
  meta: {
    current_page: 1,
    current_page_url: "https://api.mailersend.com/v1/emails?page=1",
    from: 1,
    path: "https://api.mailersend.com/v1/emails",
    per_page: 10,
    to: 3,
  },
};

const emptyListResponse = {
  data: [],
  links: {
    first: "https://api.mailersend.com/v1/emails?page=1",
    last: null,
    prev: "https://api.mailersend.com/v1/emails?page=1",
    next: null,
  },
  meta: {
    current_page: 2,
    current_page_url: "https://api.mailersend.com/v1/emails?page=2",
    from: null,
    path: "https://api.mailersend.com/v1/emails",
    per_page: 10,
    to: null,
  },
};

const singleResponse = {
  data: {
    id: "6a8fa9b1902fab56e0ce50dd",
    from: "sender@example.com",
    to: "rcpt@example.org",
    subject: "Welcome",
    text: "Welcome to our newsletter",
    html: "<p>Welcome to our newsletter</p>",
    template_id: "7nxe3yjmeq28vp0k",
    domain_id: "7nxe3yjmeq28vp0k",
    message_id: "6a8fa9b1902fab56e0ce50aa",
    status: "sent",
    tags: ["newsletter"],
    interaction: ["opened"],
    suppression_reason: null,
    created_at: "2026-08-27T03:06:25.000000Z",
    updated_at: "2026-08-27T03:06:25.000000Z",
    recipient: {
      id: "6a8fa9b1902fab56e0ce50bb",
      email: "rcpt@example.org",
      created_at: "2026-08-27T03:06:25.000000Z",
      updated_at: "2026-08-27T03:06:25.000000Z",
      deleted_at: null,
    },
    headers: [{ name: "X-Custom", value: "foo" }],
    activity: [
      { id: "6a8fa9b1902fab56e0ce50f1", type: "opened", created_at: "2026-08-27T03:07:10.000000Z" },
      { id: "6a8fa9b1902fab56e0ce50f0", type: "delivered", created_at: "2026-08-27T03:06:40.000000Z" },
      { id: "6a8fa9b1902fab56e0ce50ef", type: "sent", created_at: "2026-08-27T03:06:25.000000Z" },
    ],
  },
};

describe("Emails Module", () => {
  const emailModule = new EmailModule("test_key", "http://test.com");

  it("list", async () => {
    nock("http://test.com")
      .get("/emails")
      .query({ domain_id: "test_domain_id", date_from: 1672531200, date_to: 1675209600, page: 2, limit: 50 })
      .reply(200, listResponse, { header1: "test" });
    const getEmails = await emailModule.list({
      domain_id: "test_domain_id",
      date_from: 1672531200,
      date_to: 1675209600,
      page: 2,
      limit: 50,
    });
    expect(getEmails.headers).toMatchObject({ header1: "test", "content-type": "application/json" });
    expect(getEmails.body).toMatchObject({ data: [{ id: "6a8fa9b1902fab56e0ce50dd" }] });
    expect(getEmails.statusCode).toBe(200);
  });

  it("list with datetime strings for date_from and date_to", async () => {
    nock("http://test.com")
      .get("/emails")
      .query({ domain_id: "test_domain_id", date_from: "2026-08-01 00:00:00", date_to: "2026-08-27 00:00:00" })
      .reply(200, listResponse, { header1: "test" });
    const getEmails = await emailModule.list({
      domain_id: "test_domain_id",
      date_from: "2026-08-01 00:00:00",
      date_to: "2026-08-27 00:00:00",
    });
    expect(getEmails.statusCode).toBe(200);
  });

  it("list with status and interaction filters", async () => {
    nock("http://test.com")
      .get("/emails")
      .query({
        domain_id: "test_domain_id",
        date_from: 1672531200,
        date_to: 1675209600,
        "status[0]": EmailStatus.SENT,
        "status[1]": EmailStatus.DELIVERED,
        "interaction[0]": EmailInteraction.OPENED,
      })
      .reply(200, listResponse, { header1: "test" });
    const getEmails = await emailModule.list({
      domain_id: "test_domain_id",
      date_from: 1672531200,
      date_to: 1675209600,
      status: [EmailStatus.SENT, EmailStatus.DELIVERED],
      interaction: [EmailInteraction.OPENED],
    });
    expect(getEmails.statusCode).toBe(200);
  });

  // The API rejects a scalar `status`/`interaction` with a 422, so the indexed
  // array form has to be asserted against the query string nock actually saw.
  it("list serializes status and interaction as array params, not comma-joined", async () => {
    let requestUri = "";
    nock("http://test.com")
      .get("/emails")
      .query(() => true)
      .reply(200, function (uri: string) {
        requestUri = uri;
        return listResponse;
      });
    const getEmails = await emailModule.list({
      domain_id: "test_domain_id",
      date_from: 1672531200,
      date_to: 1675209600,
      status: [EmailStatus.SENT, EmailStatus.DELIVERED],
      interaction: [EmailInteraction.OPENED, EmailInteraction.CLICKED],
    });
    expect(getEmails.statusCode).toBe(200);

    const queryString = requestUri.slice(requestUri.indexOf("?") + 1);
    const params = new URLSearchParams(queryString);

    expect(params.get("status[0]")).toBe("sent");
    expect(params.get("status[1]")).toBe("delivered");
    expect(params.get("interaction[0]")).toBe("opened");
    expect(params.get("interaction[1]")).toBe("clicked");

    expect(params.get("status")).toBeNull();
    expect(params.get("interaction")).toBeNull();
    expect(queryString).toContain("status%5B0%5D=sent");
    expect(queryString).toContain("status%5B1%5D=delivered");
    expect(queryString).toContain("interaction%5B0%5D=opened");
    expect(queryString).toContain("interaction%5B1%5D=clicked");
    expect(queryString).not.toContain("sent%2Cdelivered");
    expect(queryString).not.toContain("sent,delivered");
  });

  it("list with a single-value status filter still serializes as an array param", async () => {
    let requestUri = "";
    nock("http://test.com")
      .get("/emails")
      .query(() => true)
      .reply(200, function (uri: string) {
        requestUri = uri;
        return listResponse;
      });
    await emailModule.list({
      domain_id: "test_domain_id",
      date_from: 1672531200,
      date_to: 1675209600,
      status: [EmailStatus.REJECTED],
    });
    const params = new URLSearchParams(requestUri.slice(requestUri.indexOf("?") + 1));
    expect(params.get("status[0]")).toBe("rejected");
    expect(params.get("status")).toBeNull();
  });

  it("list with all optional filters", async () => {
    nock("http://test.com")
      .get("/emails")
      .query({
        domain_id: "test_domain_id",
        date_from: 1672531200,
        date_to: 1675209600,
        page: 1,
        limit: 100,
        "status[0]": EmailStatus.QUEUED,
        "interaction[0]": EmailInteraction.NO_INTERACTION,
        recipient_email: "rcpt@example.org",
        message_id: "6a8fa9b1902fab56e0ce50aa",
        template_id: "7nxe3yjmeq28vp0k",
        subject: "Welcome",
        tag: "newsletter",
      })
      .reply(200, listResponse, { header1: "test" });
    const getEmails = await emailModule.list({
      domain_id: "test_domain_id",
      date_from: 1672531200,
      date_to: 1675209600,
      page: 1,
      limit: 100,
      status: [EmailStatus.QUEUED],
      interaction: [EmailInteraction.NO_INTERACTION],
      recipient_email: "rcpt@example.org",
      message_id: "6a8fa9b1902fab56e0ce50aa",
      template_id: "7nxe3yjmeq28vp0k",
      subject: "Welcome",
      tag: "newsletter",
    });
    expect(getEmails.statusCode).toBe(200);
  });

  it("list omits optional filters when unset", async () => {
    let requestUri = "";
    nock("http://test.com")
      .get("/emails")
      .query(() => true)
      .reply(200, function (uri: string) {
        requestUri = uri;
        return listResponse;
      });
    await emailModule.list({ domain_id: "test_domain_id", date_from: 1672531200, date_to: 1675209600 });
    const params = new URLSearchParams(requestUri.slice(requestUri.indexOf("?") + 1));

    expect(params.get("domain_id")).toBe("test_domain_id");
    expect(params.get("date_from")).toBe("1672531200");
    expect(params.get("date_to")).toBe("1675209600");
    for (const key of ["page", "limit", "status[0]", "interaction[0]", "recipient_email", "message_id", "template_id", "subject", "tag"]) {
      expect(params.has(key)).toBe(false);
    }
    expect([...params.keys()]).toHaveLength(3);
  });

  it("list requests v1/emails under a versioned base url", async () => {
    const versionedModule = new EmailModule("test_key", "http://test.com/v1");
    nock("http://test.com")
      .get("/v1/emails")
      .query({ domain_id: "test_domain_id", date_from: 1672531200, date_to: 1675209600 })
      .reply(200, listResponse, { header1: "test" });
    const getEmails = await versionedModule.list({
      domain_id: "test_domain_id",
      date_from: 1672531200,
      date_to: 1675209600,
    });
    expect(getEmails.statusCode).toBe(200);
  });

  it("list parses the response envelope", async () => {
    nock("http://test.com")
      .get("/emails")
      .query(() => true)
      .reply(200, listResponse, { header1: "test" });
    const getEmails = await emailModule.list({
      domain_id: "test_domain_id",
      date_from: 1672531200,
      date_to: 1675209600,
    });

    const body: EmailListResponse = getEmails.body;
    expect(body.data).toHaveLength(1);

    const email: EmailListItem = body.data[0];
    expect(email.id).toBe("6a8fa9b1902fab56e0ce50dd");
    expect(email.from).toBe("sender@example.com");
    expect(email.to).toBe("rcpt@example.org");
    expect(email.subject).toBe("Welcome");
    expect(email.text).toBeNull();
    expect(email.html).toBeNull();
    expect(email.template_id).toBe("7nxe3yjmeq28vp0k");
    expect(email.domain_id).toBe("7nxe3yjmeq28vp0k");
    expect(email.message_id).toBe("6a8fa9b1902fab56e0ce50aa");
    expect(email.status).toBe(EmailStatus.SENT);
    expect(email.tags).toEqual(["newsletter"]);
    expect(email.interaction).toEqual([EmailInteraction.OPENED]);
    expect(email.suppression_reason).toBeNull();
    expect(email.created_at).toBe("2026-08-27T03:06:25.000000Z");
    expect(email.updated_at).toBe("2026-08-27T03:06:25.000000Z");

    const headers: EmailHeader[] = email.headers as EmailHeader[];
    expect(headers).toEqual([{ name: "X-Custom", value: "foo" }]);
    expect(headers[0].name).toBe("X-Custom");
    expect(headers[0].value).toBe("foo");

    // `links.last` is always null and `meta` carries no `total`/`last_page`,
    // so pagination has to be driven off `links.next`.
    expect(body.links.first).toBe("https://api.mailersend.com/v1/emails?page=1");
    expect(body.links.last).toBeNull();
    expect(body.links.prev).toBeNull();
    expect(body.links.next).toBeNull();

    expect(body.meta.current_page).toBe(1);
    expect(body.meta.current_page_url).toBe("https://api.mailersend.com/v1/emails?page=1");
    expect(body.meta.from).toBe(1);
    expect(body.meta.path).toBe("https://api.mailersend.com/v1/emails");
    expect(body.meta.per_page).toBe(10);
    expect(body.meta.to).toBe(3);
    expect("total" in body.meta).toBe(false);
    expect("last_page" in body.meta).toBe(false);
    expect(Object.keys(body.meta).sort()).toEqual(["current_page", "current_page_url", "from", "path", "per_page", "to"]);

    // List rows never carry `recipient` or `activity`.
    expect("recipient" in email).toBe(false);
    expect("activity" in email).toBe(false);
  });

  it("list parses a row with no interaction, no tags and no headers", async () => {
    const row = {
      ...listResponse.data[0],
      tags: null,
      interaction: [],
      headers: null,
      template_id: null,
      status: "rejected",
      suppression_reason: "hard_bounced",
    };
    nock("http://test.com")
      .get("/emails")
      .query(() => true)
      .reply(200, { ...listResponse, data: [row] }, { header1: "test" });
    const getEmails = await emailModule.list({
      domain_id: "test_domain_id",
      date_from: 1672531200,
      date_to: 1675209600,
    });

    const email: EmailListItem = (getEmails.body as EmailListResponse).data[0];
    expect(email.interaction).toEqual([]);
    expect(email.tags).toBeNull();
    expect(email.headers).toBeNull();
    expect(email.template_id).toBeNull();
    expect(email.status).toBe(EmailStatus.REJECTED);
    expect(email.suppression_reason).toBe(EmailSuppressionReason.HARD_BOUNCED);
  });

  it("list parses an empty page", async () => {
    nock("http://test.com")
      .get("/emails")
      .query({ domain_id: "test_domain_id", date_from: 1672531200, date_to: 1675209600, page: 2 })
      .reply(200, emptyListResponse, { header1: "test" });
    const getEmails = await emailModule.list({
      domain_id: "test_domain_id",
      date_from: 1672531200,
      date_to: 1675209600,
      page: 2,
    });
    expect(getEmails.statusCode).toBe(200);

    const body: EmailListResponse = getEmails.body;
    expect(body.data).toEqual([]);
    expect(body.links.prev).toBe("https://api.mailersend.com/v1/emails?page=1");
    expect(body.links.next).toBeNull();
    expect(body.links.last).toBeNull();
    expect(body.meta.current_page).toBe(2);
    expect(body.meta.from).toBeNull();
    expect(body.meta.to).toBeNull();
    expect(body.meta.per_page).toBe(10);
  });

  it("single", async () => {
    nock("http://test.com").get("/email/6a8fa9b1902fab56e0ce50dd").reply(200, singleResponse, { header1: "test" });
    const getEmail = await emailModule.single("6a8fa9b1902fab56e0ce50dd");
    expect(getEmail.headers).toMatchObject({ header1: "test", "content-type": "application/json" });
    expect(getEmail.body).toMatchObject({ data: { id: "6a8fa9b1902fab56e0ce50dd" } });
    expect(getEmail.statusCode).toBe(200);
  });

  it("single parses the email, recipient and activity", async () => {
    nock("http://test.com").get("/email/6a8fa9b1902fab56e0ce50dd").reply(200, singleResponse, { header1: "test" });
    const getEmail = await emailModule.single("6a8fa9b1902fab56e0ce50dd");

    const body: EmailResponse = getEmail.body;
    const email: Email = body.data;

    expect(email.id).toBe("6a8fa9b1902fab56e0ce50dd");
    expect(email.status).toBe(EmailStatus.SENT);
    expect(email.text).toBe("Welcome to our newsletter");
    expect(email.html).toBe("<p>Welcome to our newsletter</p>");
    expect(email.interaction).toEqual([EmailInteraction.OPENED]);
    expect(email.suppression_reason).toBeNull();

    expect(email.recipient.id).toBe("6a8fa9b1902fab56e0ce50bb");
    expect(email.recipient.email).toBe("rcpt@example.org");
    expect(email.recipient.deleted_at).toBeNull();

    expect(email.activity).toHaveLength(3);
    const newest: EmailActivityEvent = email.activity[0];
    expect(newest.id).toBe("6a8fa9b1902fab56e0ce50f1");
    expect(newest.type).toBe(ActivityEventType.OPENED);
    expect(newest.created_at).toBe("2026-08-27T03:07:10.000000Z");
    expect(email.activity.map((event) => event.type)).toEqual([
      ActivityEventType.OPENED,
      ActivityEventType.DELIVERED,
      ActivityEventType.SENT,
    ]);
  });

  it("single parses a suppressed activity event with a suppression_reason", async () => {
    const response = {
      data: {
        ...singleResponse.data,
        status: "rejected",
        suppression_reason: "blocklisted",
        activity: [{ id: "6a8fa9b1902fab56e0ce50f2", type: "suppressed", created_at: "2026-08-27T03:06:26.000000Z", suppression_reason: "blocklisted" }],
      },
    };
    nock("http://test.com").get("/email/6a8fa9b1902fab56e0ce50dd").reply(200, response, { header1: "test" });
    const getEmail = await emailModule.single("6a8fa9b1902fab56e0ce50dd");

    const email: Email = (getEmail.body as EmailResponse).data;
    expect(email.status).toBe(EmailStatus.REJECTED);
    expect(email.suppression_reason).toBe(EmailSuppressionReason.BLOCKLISTED);
    expect(email.activity[0].type).toBe(ActivityEventType.SUPPRESSED);
    expect(email.activity[0].suppression_reason).toBe(EmailSuppressionReason.BLOCKLISTED);
  });

  it("single returns null text and html with content tracking off, but keeps activity", async () => {
    const response = { data: { ...singleResponse.data, text: null, html: null } };
    nock("http://test.com").get("/email/6a8fa9b1902fab56e0ce50dd").reply(200, response, { header1: "test" });
    const getEmail = await emailModule.single("6a8fa9b1902fab56e0ce50dd");

    const email: Email = (getEmail.body as EmailResponse).data;
    expect(email.text).toBeNull();
    expect(email.html).toBeNull();
    expect(email.activity).toHaveLength(3);
  });

  it("single propagates a 404", async () => {
    nock("http://test.com").get("/email/unknown_id").reply(404, { message: "Not Found" }, { header1: "test" });
    await expect(emailModule.single("unknown_id")).rejects.toMatchObject({
      statusCode: 404,
      body: { message: "Not Found" },
    });
  });

  it("EmailsQueryParams does not accept cursor", () => {
    const queryParams: EmailsQueryParams = {
      domain_id: "test_domain_id",
      date_from: 1672531200,
      date_to: 1675209600,
      // @ts-expect-error this endpoint paginates with page/limit — `cursor` is not a supported query parameter
      cursor: "some_cursor",
    };
    expect(queryParams.domain_id).toBe("test_domain_id");
  });

  it("EmailRecordedInteraction excludes no_interaction", () => {
    const recorded: EmailRecordedInteraction[] = [
      EmailInteraction.OPENED,
      EmailInteraction.CLICKED,
      EmailInteraction.UNSUBSCRIBED,
      EmailInteraction.COMPLAINED,
    ];
    // @ts-expect-error `no_interaction` is a filter value only and is never returned in a response
    const notReturned: EmailRecordedInteraction[] = [EmailInteraction.NO_INTERACTION];

    expect(recorded).toHaveLength(4);
    expect(notReturned).toHaveLength(1);
  });
});
