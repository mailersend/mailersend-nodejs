import nock from "nock";
import { EmailWebhookModule } from "../../modules/email/Webhook.module";
import { EmailWebhook, EmailWebhookEventType } from "../../models";

describe("Email Webhook Module", () => {
  const webhookModule = new EmailWebhookModule("test_key", "http://test.com");
  const webhook = new EmailWebhook({
    url: "https://example.com/webhook",
    name: "Test Webhook",
    events: [EmailWebhookEventType.SENT, EmailWebhookEventType.DELIVERED],
    domain_id: "test_domain_id",
  });

  it("create", async () => {
    nock("http://test.com").post("/webhooks").reply(201, { key1: "webhook_created" }, { header1: "test" });
    const result = await webhookModule.create(webhook);
    expect(result.headers).toMatchObject({ header1: "test", "content-type": "application/json" });
    expect(result.body).toMatchObject({ key1: "webhook_created" });
    expect(result.statusCode).toBe(201);
  });

  it("list", async () => {
    nock("http://test.com")
      .get("/webhooks")
      .query({ domain_id: "test_domain_id", limit: 10 })
      .reply(200, { key1: "webhook_list" }, { header1: "test" });
    const result = await webhookModule.list("test_domain_id", { limit: 10 });
    expect(result.headers).toMatchObject({ header1: "test", "content-type": "application/json" });
    expect(result.body).toMatchObject({ key1: "webhook_list" });
    expect(result.statusCode).toBe(200);
  });

  it("single", async () => {
    nock("http://test.com").get("/webhooks/test_webhook_id").reply(200, { key1: "webhook_value" }, { header1: "test" });
    const result = await webhookModule.single("test_webhook_id");
    expect(result.headers).toMatchObject({ header1: "test", "content-type": "application/json" });
    expect(result.body).toMatchObject({ key1: "webhook_value" });
    expect(result.statusCode).toBe(200);
  });

  it("update", async () => {
    nock("http://test.com").put("/webhooks/test_webhook_id").reply(200, { key1: "webhook_updated" }, { header1: "test" });
    const result = await webhookModule.update("test_webhook_id", { name: "Updated Webhook", enabled: false });
    expect(result.headers).toMatchObject({ header1: "test", "content-type": "application/json" });
    expect(result.body).toMatchObject({ key1: "webhook_updated" });
    expect(result.statusCode).toBe(200);
  });

  it("delete", async () => {
    nock("http://test.com").delete("/webhooks/test_webhook_id").reply(200, { key1: "webhook_deleted" }, { header1: "test" });
    const result = await webhookModule.delete("test_webhook_id");
    expect(result.headers).toMatchObject({ header1: "test", "content-type": "application/json" });
    expect(result.body).toMatchObject({ key1: "webhook_deleted" });
    expect(result.statusCode).toBe(200);
  });
});
