import nock from "nock";
import { SmsWebhookModule } from "../../modules/sms/Webhook.module";
import { SmsWebhook, SmsWebhookEventType } from "../../models";

describe("SMS Webhook Module", () => {
  const smsWebhookModule = new SmsWebhookModule("test_key", "http://test.com");
  const smsWebhook = new SmsWebhook(
    "Test SMS Webhook",
    "https://example.com/sms-webhook",
    [SmsWebhookEventType.SENT, SmsWebhookEventType.DELIVERED],
    "sms_number_id",
    true,
  );

  it("create posts url, name, events, sms_number_id and enabled to /sms-webhooks", async () => {
    nock("http://test.com")
      .post("/sms-webhooks", {
        url: "https://example.com/sms-webhook",
        name: "Test SMS Webhook",
        events: ["sms.sent", "sms.delivered"],
        sms_number_id: "sms_number_id",
        enabled: true,
      })
      .reply(201, { key1: "sms_webhook_created" }, { header1: "test" });
    const result = await smsWebhookModule.create(smsWebhook);
    expect(result.headers).toMatchObject({ header1: "test", "content-type": "application/json" });
    expect(result.body).toMatchObject({ key1: "sms_webhook_created" });
    expect(result.statusCode).toBe(201);
  });

  it("list", async () => {
    nock("http://test.com")
      .get("/sms-webhooks")
      .query({ sms_number_id: "sms_number_id" })
      .reply(200, { key1: "sms_webhook_list" }, { header1: "test" });
    const result = await smsWebhookModule.list({ sms_number_id: "sms_number_id" });
    expect(result.headers).toMatchObject({ header1: "test", "content-type": "application/json" });
    expect(result.body).toMatchObject({ key1: "sms_webhook_list" });
    expect(result.statusCode).toBe(200);
  });

  it("list with page and limit", async () => {
    const params = { sms_number_id: "sms_number_id", page: 2, limit: 25 };
    nock("http://test.com").get("/sms-webhooks").query(params).reply(200, { key1: "sms_webhook_list" }, { header1: "test" });
    const result = await smsWebhookModule.list(params);
    expect(result.statusCode).toBe(200);
  });

  it("single", async () => {
    nock("http://test.com").get("/sms-webhooks/test_sms_webhook_id").reply(200, { key1: "sms_webhook_value" }, { header1: "test" });
    const result = await smsWebhookModule.single("test_sms_webhook_id");
    expect(result.headers).toMatchObject({ header1: "test", "content-type": "application/json" });
    expect(result.body).toMatchObject({ key1: "sms_webhook_value" });
    expect(result.statusCode).toBe(200);
  });

  it("update puts url, name, events and enabled to /sms-webhooks/{id}", async () => {
    nock("http://test.com")
      .put("/sms-webhooks/test_sms_webhook_id", {
        url: "https://example.com/updated-hook",
        name: "Updated Webhook",
        events: ["sms.failed"],
        enabled: false,
      })
      .reply(200, { key1: "sms_webhook_updated" }, { header1: "test" });
    const result = await smsWebhookModule.update("test_sms_webhook_id", {
      url: "https://example.com/updated-hook",
      name: "Updated Webhook",
      events: [SmsWebhookEventType.FAILED],
      enabled: false,
    });
    expect(result.headers).toMatchObject({ header1: "test", "content-type": "application/json" });
    expect(result.body).toMatchObject({ key1: "sms_webhook_updated" });
    expect(result.statusCode).toBe(200);
  });

  it("delete", async () => {
    nock("http://test.com").delete("/sms-webhooks/test_sms_webhook_id").reply(200, { key1: "sms_webhook_deleted" }, { header1: "test" });
    const result = await smsWebhookModule.delete("test_sms_webhook_id");
    expect(result.headers).toMatchObject({ header1: "test", "content-type": "application/json" });
    expect(result.body).toMatchObject({ key1: "sms_webhook_deleted" });
    expect(result.statusCode).toBe(200);
  });
});
