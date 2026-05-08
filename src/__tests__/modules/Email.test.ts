import nock from "nock";
import { EmailModule } from "../../modules/Email.module";
import { EmailParams, Recipient, EmailWebhook, EmailWebhookEventType } from "../../models";
import { Attachment } from "../../models/email/Attachment";
import { ActivityModule } from "../../modules/email/Activity.module";
import { AnalyticsModule } from "../../modules/email/Analytics.module";
import { DomainModule } from "../../modules/email/Domain.module";
import { InboundModule } from "../../modules/email/Inbound.module";
import { MessageModule } from "../../modules/email/Message.module";
import { ScheduleModule } from "../../modules/email/Schedule.module";
import { RecipientModule } from "../../modules/email/Recipient.module";
import { TemplateModule } from "../../modules/email/Template.module";
import { EmailWebhookModule } from "../../modules/email/Webhook.module";

describe("Email Module", () => {
  const emailModule = new EmailModule("test_key", "http://test.com");

  it("Constructor", () => {
    expect(emailModule.activity instanceof ActivityModule).toBe(true);
    expect(emailModule.analytics instanceof AnalyticsModule).toBe(true);
    expect(emailModule.domain instanceof DomainModule).toBe(true);
    expect(emailModule.inbound instanceof InboundModule).toBe(true);
    expect(emailModule.message instanceof MessageModule).toBe(true);
    expect(emailModule.schedule instanceof ScheduleModule).toBe(true);
    expect(emailModule.recipient instanceof RecipientModule).toBe(true);
    expect(emailModule.template instanceof TemplateModule).toBe(true);
    expect(emailModule.webhook instanceof EmailWebhookModule).toBe(true);
  });

  it("send email", async () => {
    nock("http://test.com").post("/email").reply(202, { key1: "key1_value" }, { header1: "test" });
    const emailParams = new EmailParams()
      .setFrom({ email: "some@email.com" })
      .setTo([new Recipient("some_recipient@mail.com")])
      .setSubject("Some subject")
      .setText("Some text")
      .setHtml("Some html");
    const sendEmail = await emailModule.send(emailParams);
    expect(sendEmail.headers).toMatchObject({ header1: "test", "content-type": "application/json" });
    expect(sendEmail.body).toMatchObject({ key1: "key1_value" });
    expect(sendEmail.statusCode).toBe(202);
  });

  it("send email with personalization", async () => {
    const personalization = [
      {
        email: "your@client.com",
        data: {
          test: {
            number: 123434,
          }
        },
      }
    ];
    nock("http://test.com").post("/email").reply(202, { key1: "key1_value" }, { header1: "test" });
    const emailParams = new EmailParams()
      .setFrom({ email: "some@email.com" })
      .setTo([new Recipient("some_recipient@mail.com")])
      .setSubject("Some subject")
      .setPersonalization(personalization)
      .setText("Some text")
      .setHtml("Some html");
    const sendEmail = await emailModule.send(emailParams);
    expect(sendEmail.headers).toMatchObject({ header1: "test", "content-type": "application/json" });
    expect(sendEmail.body).toMatchObject({ key1: "key1_value" });
    expect(sendEmail.statusCode).toBe(202);
  });

  it("send email with send_at as unix timestamp", async () => {
    const sendAt = 1893456000;
    nock("http://test.com")
      .post("/email", (body: any) => body.send_at === sendAt)
      .reply(202, {}, {});
    const emailParams = new EmailParams()
      .setFrom({ email: "some@email.com" })
      .setTo([new Recipient("some_recipient@mail.com")])
      .setSubject("Some subject")
      .setText("Some text")
      .setSendAt(sendAt);
    const result = await emailModule.send(emailParams);
    expect(result.statusCode).toBe(202);
  });

  it("send email with send_at as ISO string", async () => {
    const sendAt = "2030-01-01T12:00:00Z";
    nock("http://test.com")
      .post("/email", (body: any) => body.send_at === sendAt)
      .reply(202, {}, {});
    const emailParams = new EmailParams()
      .setFrom({ email: "some@email.com" })
      .setTo([new Recipient("some_recipient@mail.com")])
      .setSubject("Some subject")
      .setText("Some text")
      .setSendAt(sendAt);
    const result = await emailModule.send(emailParams);
    expect(result.statusCode).toBe(202);
  });

  it("send email with attachments", async () => {
    const attachment = new Attachment("base64content", "file.pdf", "attachment", "attach_id");
    nock("http://test.com")
      .post("/email", (body: any) => {
        const a = body.attachments[0];
        return a.content === "base64content" && a.filename === "file.pdf" && a.disposition === "attachment" && a.id === "attach_id";
      })
      .reply(202, {}, {});
    const emailParams = new EmailParams()
      .setFrom({ email: "some@email.com" })
      .setTo([new Recipient("some_recipient@mail.com")])
      .setSubject("Some subject")
      .setText("Some text")
      .setAttachments([attachment]);
    const result = await emailModule.send(emailParams);
    expect(result.statusCode).toBe(202);
  });

  it("send email with template_id", async () => {
    nock("http://test.com")
      .post("/email", (body: any) => body.template_id === "tmpl_abc123")
      .reply(202, {}, {});
    const emailParams = new EmailParams()
      .setTo([new Recipient("some_recipient@mail.com")])
      .setTemplateId("tmpl_abc123");
    const result = await emailModule.send(emailParams);
    expect(result.statusCode).toBe(202);
  });

  it("send email with cc", async () => {
    const cc = [new Recipient("cc@example.com", "CC Person")];
    nock("http://test.com")
      .post("/email", (body: any) => body.cc[0].email === "cc@example.com" && body.cc[0].name === "CC Person")
      .reply(202, {}, {});
    const emailParams = new EmailParams()
      .setFrom({ email: "some@email.com" })
      .setTo([new Recipient("some_recipient@mail.com")])
      .setSubject("Some subject")
      .setText("Some text")
      .setCc(cc);
    const result = await emailModule.send(emailParams);
    expect(result.statusCode).toBe(202);
  });

  it("send email with bcc", async () => {
    const bcc = [new Recipient("bcc@example.com", "BCC Person")];
    nock("http://test.com")
      .post("/email", (body: any) => body.bcc[0].email === "bcc@example.com" && body.bcc[0].name === "BCC Person")
      .reply(202, {}, {});
    const emailParams = new EmailParams()
      .setFrom({ email: "some@email.com" })
      .setTo([new Recipient("some_recipient@mail.com")])
      .setSubject("Some subject")
      .setText("Some text")
      .setBcc(bcc);
    const result = await emailModule.send(emailParams);
    expect(result.statusCode).toBe(202);
  });

  it("send email with reply_to", async () => {
    nock("http://test.com")
      .post("/email", (body: any) => body.reply_to.email === "reply@example.com" && body.reply_to.name === "Reply Person")
      .reply(202, {}, {});
    const emailParams = new EmailParams()
      .setFrom({ email: "some@email.com" })
      .setTo([new Recipient("some_recipient@mail.com")])
      .setSubject("Some subject")
      .setText("Some text")
      .setReplyTo(new Recipient("reply@example.com", "Reply Person"));
    const result = await emailModule.send(emailParams);
    expect(result.statusCode).toBe(202);
  });

  it("send email with in_reply_to", async () => {
    nock("http://test.com")
      .post("/email", (body: any) => body.in_reply_to === "<original-message-id@example.com>")
      .reply(202, {}, {});
    const emailParams = new EmailParams()
      .setFrom({ email: "some@email.com" })
      .setTo([new Recipient("some_recipient@mail.com")])
      .setSubject("Some subject")
      .setText("Some text")
      .setInReplyTo("<original-message-id@example.com>");
    const result = await emailModule.send(emailParams);
    expect(result.statusCode).toBe(202);
  });

  it("send email with references", async () => {
    const references = ["<ref1@example.com>", "<ref2@example.com>"];
    nock("http://test.com")
      .post("/email", (body: any) => Array.isArray(body.references) && body.references[0] === "<ref1@example.com>" && body.references[1] === "<ref2@example.com>")
      .reply(202, {}, {});
    const emailParams = new EmailParams()
      .setFrom({ email: "some@email.com" })
      .setTo([new Recipient("some_recipient@mail.com")])
      .setSubject("Some subject")
      .setText("Some text")
      .setReferences(references);
    const result = await emailModule.send(emailParams);
    expect(result.statusCode).toBe(202);
  });

  it("send email with tags", async () => {
    nock("http://test.com")
      .post("/email", (body: any) => Array.isArray(body.tags) && body.tags[0] === "tag1" && body.tags[1] === "tag2")
      .reply(202, {}, {});
    const emailParams = new EmailParams()
      .setFrom({ email: "some@email.com" })
      .setTo([new Recipient("some_recipient@mail.com")])
      .setSubject("Some subject")
      .setText("Some text")
      .setTags(["tag1", "tag2"]);
    const result = await emailModule.send(emailParams);
    expect(result.statusCode).toBe(202);
  });

  it("send email with headers", async () => {
    nock("http://test.com")
      .post("/email", (body: any) => body.headers[0].name === "X-Custom" && body.headers[0].value === "custom-value")
      .reply(202, {}, {});
    const emailParams = new EmailParams()
      .setFrom({ email: "some@email.com" })
      .setTo([new Recipient("some_recipient@mail.com")])
      .setSubject("Some subject")
      .setText("Some text")
      .setHeaders([{ name: "X-Custom", value: "custom-value" }]);
    const result = await emailModule.send(emailParams);
    expect(result.statusCode).toBe(202);
  });

  it("send email with settings", async () => {
    nock("http://test.com")
      .post("/email", (body: any) => body.settings.track_clicks === true && body.settings.track_opens === false && body.settings.track_content === true)
      .reply(202, {}, {});
    const emailParams = new EmailParams()
      .setFrom({ email: "some@email.com" })
      .setTo([new Recipient("some_recipient@mail.com")])
      .setSubject("Some subject")
      .setText("Some text")
      .setSettings({ track_clicks: true, track_opens: false, track_content: true });
    const result = await emailModule.send(emailParams);
    expect(result.statusCode).toBe(202);
  });

  it("send email with precedence_bulk", async () => {
    nock("http://test.com")
      .post("/email", (body: any) => body.precedence_bulk === true)
      .reply(202, {}, {});
    const emailParams = new EmailParams()
      .setFrom({ email: "some@email.com" })
      .setTo([new Recipient("some_recipient@mail.com")])
      .setSubject("Some subject")
      .setText("Some text")
      .setPrecedenceBulk(true);
    const result = await emailModule.send(emailParams);
    expect(result.statusCode).toBe(202);
  });

  it("send email with list_unsubscribe", async () => {
    nock("http://test.com")
      .post("/email", (body: any) => body.list_unsubscribe === "https://www.example.com/unsubscribe")
      .reply(202, {}, {});
    const emailParams = new EmailParams()
      .setFrom({ email: "some@email.com" })
      .setTo([new Recipient("some_recipient@mail.com")])
      .setSubject("Some subject")
      .setText("Some text")
      .setListUnsubscribe("https://www.example.com/unsubscribe");
    const result = await emailModule.send(emailParams);
    expect(result.statusCode).toBe(202);
  });

  it("send email with rcpt_to", async () => {
    nock("http://test.com")
      .post("/email", (body: any) => body.rcpt_to[0].email === "rcpt@example.com")
      .reply(202, {}, {});
    const emailParams = new EmailParams()
      .setFrom({ email: "some@email.com" })
      .setTo([new Recipient("some_recipient@mail.com")])
      .setSubject("Some subject")
      .setText("Some text")
      .setRcptTo([new Recipient("rcpt@example.com")]);
    const result = await emailModule.send(emailParams);
    expect(result.statusCode).toBe(202);
  });

  it("send bulk", async () => {
    nock("http://test.com").post("/bulk-email").reply(202, { key1: "key1_value" }, { header1: "test" });
    const emailParams = new EmailParams()
      .setFrom({ email: "some@email.com" })
      .setTo([new Recipient("some_recipient@mail.com")])
      .setSubject("Some subject")
      .setText("Some text")
      .setHtml("Some html");

    const sendEmail = await emailModule.sendBulk([emailParams]);

    expect(sendEmail.headers).toMatchObject({ header1: "test", "content-type": "application/json" });
    expect(sendEmail.body).toMatchObject({ key1: "key1_value" });

    expect(sendEmail.statusCode).toBe(202);
  });

  it("send bulk email serializes each EmailParams item", async () => {
    const emailParams1 = new EmailParams()
      .setFrom({ email: "sender1@example.com" })
      .setTo([new Recipient("recipient1@example.com", "Recipient One")])
      .setSubject("Subject One")
      .setText("Body One");
    const emailParams2 = new EmailParams()
      .setFrom({ email: "sender2@example.com" })
      .setTo([new Recipient("recipient2@example.com", "Recipient Two")])
      .setSubject("Subject Two")
      .setText("Body Two");

    nock("http://test.com")
      .post("/bulk-email", (body: any) => {
        return (
          Array.isArray(body) &&
          body[0].from.email === "sender1@example.com" &&
          body[0].to[0].email === "recipient1@example.com" &&
          body[0].subject === "Subject One" &&
          body[1].from.email === "sender2@example.com" &&
          body[1].to[0].email === "recipient2@example.com" &&
          body[1].subject === "Subject Two"
        );
      })
      .reply(202, { bulk_email_id: "bulk_123" }, {});

    const result = await emailModule.sendBulk([emailParams1, emailParams2]);
    expect(result.statusCode).toBe(202);
    expect(result.body).toMatchObject({ bulk_email_id: "bulk_123" });
  });

  it("get bulk", async () => {
    nock("http://test.com").get("/bulk-email/test_id_bulk").reply(202, { key1: "key1_value" }, { header1: "test" });

    const sendEmail = await emailModule.getBulkStatus("test_id_bulk");

    expect(sendEmail.headers).toMatchObject({ header1: "test", "content-type": "application/json" });
    expect(sendEmail.body).toMatchObject({ key1: "key1_value" });

    expect(sendEmail.statusCode).toBe(202);
  });
});
