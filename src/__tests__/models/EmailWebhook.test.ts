import { EmailWebhook, EmailWebhookEventType } from "../../models";

describe("EmailWebhook Model", () => {
  it("Constructor", () => {
    const config = {
      url: "https://test.com",
      name: "Test Webhook",
      events: [EmailWebhookEventType.DELIVERED],
      domain_id: "test_domain",
      enabled: false,
    };
    const params = new EmailWebhook(config);

    expect(params).toMatchObject(config);
  });
});
