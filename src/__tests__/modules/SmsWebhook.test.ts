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

  it("create", async () => {
    nock("http://test.com").post("/sms-webhooks").reply(201, { key1: "sms_webhook_created" }, { header1: "test" });
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

  it("single", async () => {
    nock("http://test.com").get("/sms-webhooks/test_sms_webhook_id").reply(200, { key1: "sms_webhook_value" }, { header1: "test" });
    const result = await smsWebhookModule.single("test_sms_webhook_id");
    expect(result.headers).toMatchObject({ header1: "test", "content-type": "application/json" });
    expect(result.body).toMatchObject({ key1: "sms_webhook_value" });
    expect(result.statusCode).toBe(200);
  });

  it("update", async () => {
    nock("http://test.com").put("/sms-webhooks/test_sms_webhook_id").reply(200, { key1: "sms_webhook_updated" }, { header1: "test" });
    const result = await smsWebhookModule.update("test_sms_webhook_id", { name: "Updated Webhook", enabled: false });
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
