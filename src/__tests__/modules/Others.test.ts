import nock from "nock";
import { OthersModule } from "../../modules/Others.module";
import { Account, AccountResponse } from "../../models";

const accountResponse: AccountResponse = {
  data: {
    name: "Acme Inc",
    status: "approved",
    plan_type: "starter",
    data_retention_days: 7,
    emails: { sent: 12000, received: 430, limit: -1 },
    rate_limits: { general: 60, email: 120, bulk_email: 10, activity: 10 },
    resources: {
      domains: { used: 3, limit: 10 },
      users: { used: 2, limit: 5 },
      free_accountant_seat: { used: 0, limit: 0 },
      templates: { used: 41, limit: 250 },
      smtp_users: { used: 1, limit: 50 },
      api_tokens: { used: 4, limit: 50 },
      webhooks: { used: 2, limit: 50 },
    },
    addons: {
      sms: { sent: 120, received: 30, limit: -1 },
      whatsapp: { sent: 800, limit: 1000 },
      phone_numbers: 1,
      domain_spaces: 2,
      data_retention_days: 30,
      dedicated_ips: 0,
    },
  },
};

describe("Others Module", () => {
  const othersModule = new OthersModule("test_key", "http://test.com");

  afterEach(() => {
    nock.cleanAll();
  });

  it("getApiQuota", async () => {
    nock("http://test.com").get("/api-quota").reply(200, { quota: 1000, used: 42 }, { header1: "test" });
    const result = await othersModule.getApiQuota();
    expect(result.headers).toMatchObject({ header1: "test", "content-type": "application/json" });
    expect(result.body).toMatchObject({ quota: 1000, used: 42 });
    expect(result.statusCode).toBe(200);
  });

  it("getAccount", async () => {
    const scope = nock("http://test.com")
      .get("/account")
      .matchHeader("authorization", "Bearer test_key")
      .reply(200, accountResponse, { header1: "test" });
    const result = await othersModule.getAccount();
    expect(scope.isDone()).toBe(true);
    expect(result.headers).toMatchObject({ header1: "test", "content-type": "application/json" });
    expect(result.statusCode).toBe(200);

    const account: Account = (result.body as AccountResponse).data;
    expect(account).toEqual(accountResponse.data);
    expect(account.status).toBe("approved");
    expect(account.emails.limit).toBe(-1);
    expect(account.resources.free_accountant_seat).toEqual({ used: 0, limit: 0 });
    expect(account.addons.whatsapp).toEqual({ sent: 800, limit: 1000 });
  });

  it("getAccount with null WhatsApp add-on and webhooks limit", async () => {
    const response: AccountResponse = {
      data: {
        ...accountResponse.data,
        resources: {
          ...accountResponse.data.resources,
          free_accountant_seat: { used: 1, limit: 1 },
          webhooks: { used: 2, limit: null },
        },
        addons: { ...accountResponse.data.addons, whatsapp: null },
      },
    };
    nock("http://test.com").get("/account").reply(200, response);
    const result = await othersModule.getAccount();

    const account: Account = (result.body as AccountResponse).data;
    expect(account.addons.whatsapp).toBeNull();
    expect(account.resources.webhooks.limit).toBeNull();
    expect(account.resources.free_accountant_seat).toEqual({ used: 1, limit: 1 });
  });

  it("getAccount rejects with the API error", async () => {
    nock("http://test.com").get("/account").reply(401, { message: "Unauthenticated." });
    await expect(othersModule.getAccount()).rejects.toMatchObject({
      statusCode: 401,
      body: { message: "Unauthenticated." },
    });
  });
});
