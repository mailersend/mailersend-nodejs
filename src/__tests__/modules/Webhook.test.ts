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

  it("create sends POST to /webhooks with required fields", async () => {
    nock("http://test.com")
      .post("/webhooks", {
        url: "https://example.com/webhook",
        name: "Test Webhook",
        events: [EmailWebhookEventType.SENT, EmailWebhookEventType.DELIVERED],
        domain_id: "test_domain_id",
      })
      .reply(201, { key1: "webhook_created" }, { header1: "test" });
    const result = await webhookModule.create(webhook);
    expect(result.headers).toMatchObject({ header1: "test", "content-type": "application/json" });
    expect(result.body).toMatchObject({ key1: "webhook_created" });
    expect(result.statusCode).toBe(201);
  });

  it("create with enabled field", async () => {
    const webhookWithEnabled = new EmailWebhook({
      url: "https://example.com/webhook",
      name: "Test Webhook",
      events: [EmailWebhookEventType.SENT],
      domain_id: "test_domain_id",
      enabled: false,
    });
    nock("http://test.com")
      .post("/webhooks", (body) => body.enabled === false)
      .reply(201, { key1: "webhook_created" }, {});
    const result = await webhookModule.create(webhookWithEnabled);
    expect(result.statusCode).toBe(201);
  });

  it("create with version field", async () => {
    const webhookWithVersion = new EmailWebhook({
      url: "https://example.com/webhook",
      name: "Test Webhook",
      events: [EmailWebhookEventType.SENT],
      domain_id: "test_domain_id",
      version: 2,
    });
    nock("http://test.com")
      .post("/webhooks", (body) => body.version === 2)
      .reply(201, { key1: "webhook_created" }, {});
    const result = await webhookModule.create(webhookWithVersion);
    expect(result.statusCode).toBe(201);
  });

  it("create with editable field", async () => {
    const webhookWithEditable = new EmailWebhook({
      url: "https://example.com/webhook",
      name: "Test Webhook",
      events: [EmailWebhookEventType.SENT],
      domain_id: "test_domain_id",
      editable: true,
    });
    nock("http://test.com")
      .post("/webhooks", (body) => body.editable === true)
      .reply(201, { key1: "webhook_created" }, {});
    const result = await webhookModule.create(webhookWithEditable);
    expect(result.statusCode).toBe(201);
  });

  it("list sends GET to /webhooks with domain_id and limit", async () => {
    nock("http://test.com")
      .get("/webhooks")
      .query({ domain_id: "test_domain_id", limit: 10 })
      .reply(200, { key1: "webhook_list" }, { header1: "test" });
    const result = await webhookModule.list("test_domain_id", { limit: 10 });
    expect(result.headers).toMatchObject({ header1: "test", "content-type": "application/json" });
    expect(result.body).toMatchObject({ key1: "webhook_list" });
    expect(result.statusCode).toBe(200);
  });

  it("list sends GET to /webhooks with page query param", async () => {
    nock("http://test.com")
      .get("/webhooks")
      .query({ domain_id: "test_domain_id", page: 2 })
      .reply(200, { key1: "webhook_list" }, {});
    const result = await webhookModule.list("test_domain_id", { page: 2 });
    expect(result.statusCode).toBe(200);
  });

  it("single", async () => {
    nock("http://test.com").get("/webhooks/test_webhook_id").reply(200, { key1: "webhook_value" }, { header1: "test" });
    const result = await webhookModule.single("test_webhook_id");
    expect(result.headers).toMatchObject({ header1: "test", "content-type": "application/json" });
    expect(result.body).toMatchObject({ key1: "webhook_value" });
    expect(result.statusCode).toBe(200);
  });

  it("update sends PUT to /webhooks/{id} with body fields", async () => {
    nock("http://test.com")
      .put("/webhooks/test_webhook_id", { name: "Updated Webhook", enabled: false })
      .reply(200, { key1: "webhook_updated" }, { header1: "test" });
    const result = await webhookModule.update("test_webhook_id", { name: "Updated Webhook", enabled: false });
    expect(result.headers).toMatchObject({ header1: "test", "content-type": "application/json" });
    expect(result.body).toMatchObject({ key1: "webhook_updated" });
    expect(result.statusCode).toBe(200);
  });

  it("update with url field", async () => {
    nock("http://test.com")
      .put("/webhooks/test_webhook_id", (body) => body.url === "https://example.com/new-hook")
      .reply(200, { key1: "webhook_updated" }, {});
    const result = await webhookModule.update("test_webhook_id", { url: "https://example.com/new-hook" });
    expect(result.statusCode).toBe(200);
  });

  it("update with events field", async () => {
    nock("http://test.com")
      .put("/webhooks/test_webhook_id", (body) => Array.isArray(body.events) && body.events.includes(EmailWebhookEventType.CLICKED))
      .reply(200, { key1: "webhook_updated" }, {});
    const result = await webhookModule.update("test_webhook_id", { events: [EmailWebhookEventType.CLICKED] });
    expect(result.statusCode).toBe(200);
  });

  it("update with version field", async () => {
    nock("http://test.com")
      .put("/webhooks/test_webhook_id", (body) => body.version === 2)
      .reply(200, { key1: "webhook_updated" }, {});
    const result = await webhookModule.update("test_webhook_id", { version: 2 });
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
