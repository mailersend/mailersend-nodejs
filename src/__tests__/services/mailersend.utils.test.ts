import { MailerSendUtils } from "../../services/mailersend.utils";

describe("utils", () => {
  it("webhook check", async () => {
    const body = Buffer.from(
      '{"type":"activity.sent","domain_id":"test_domain","created_at":"2022-09-08T20:06:12.062074Z","webhook_id":"webhook_test","url":"https:\\/\\/webhook.site\\/test","data":{"object":"activity","id":"631a6250bd4f6bd6844a2307","type":"sent","created_at":"2022-09-08T20:06:12.051000Z","email":{"object":"email","id":"631a6250bd4f6bd6844a2307","created_at":"2022-09-08T20:06:11.887000Z","from":"donotreply@mailsender.com","subject":"Test Message","status":"sent","tags":null,"message":{"object":"message","id":"631a6250bd4f6bd6844a2307","created_at":"2022-09-08T20:06:11.399000Z"},"recipient":{"object":"recipient","id":"631a6250bd4f6bd6844a2307","email":"test@test.com","created_at":"2022-03-31T21:31:37.304000Z"}},"morph":null,"template_id":""}}',
    );
    const secret = "yXdTVu1YewsKiuN2bcILlFHsljmR9kaU";
    const signature = "445e75aab3d8ea9169d134189a2814f06858977bd9cdc69324264e39f47bda2e";
    const isLegit = MailerSendUtils.verifyWebHook(body, signature, secret);
    expect(isLegit).toBeTruthy();
  });

  it("no body", async () => {
    try {
      MailerSendUtils.verifyWebHook(undefined as any, "test", "test");
    } catch (e: any) {
      expect(e?.message).toBe("No raw body provided");
    }
  });

  it("no signature", async () => {
    try {
      MailerSendUtils.verifyWebHook(Buffer.from("test"), undefined as any, "test");
    } catch (e: any) {
      expect(e?.message).toBe("No signature provided");
    }
  });

  it("no secret", async () => {
    try {
      MailerSendUtils.verifyWebHook(Buffer.from("test"), "test", undefined as any);
    } catch (e: any) {
      expect(e?.message).toBe("No secret provided");
    }
  });
});
