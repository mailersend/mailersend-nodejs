import { MailerSendUtils } from "../../services/mailersend.utils";
import { MailerSendUtils as PackageMailerSendUtils } from "../../index";

const SIGNED_BODY = Buffer.from('{"type":"activity.sent"}');
const SIGNED_SECRET = "secret";
const SIGNED_SIGNATURE = "ecbed0658cfb61cfcf17bcd5edcb8cc21b1dc5097c0c8af8c3280f2e14186a37";

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

  it("is exported from the package entry", () => {
    expect(PackageMailerSendUtils).toBe(MailerSendUtils);
  });

  test.each([
    ["no body", undefined as any, "test", "test", "No raw body provided"],
    ["no signature", Buffer.from("test"), undefined as any, "test", "No signature provided"],
    ["headers without a Signature header", Buffer.from("test"), { "content-type": "application/json" }, "test", "No signature provided"],
    ["no secret", Buffer.from("test"), "test", undefined as any, "No secret provided"],
  ])("%s", (_label, rawBody, signature, secret, message) => {
    expect(() => MailerSendUtils.verifyWebHook(rawBody, signature, secret)).toThrow(message);
  });

  test.each([
    ["a lowercase signature key", { signature: SIGNED_SIGNATURE }],
    ["a capitalised Signature key", { Signature: SIGNED_SIGNATURE }],
    ["an array header value", { signature: [SIGNED_SIGNATURE] }],
    ["a fetch Headers instance", new Headers({ Signature: SIGNED_SIGNATURE })],
  ])("reads the Signature header from %s", (_label, headers) => {
    expect(MailerSendUtils.verifyWebHook(SIGNED_BODY, headers, SIGNED_SECRET)).toBe(true);
  });

  it("returns false for a signature that is too short", async () => {
    expect(MailerSendUtils.verifyWebHook(Buffer.from("{}"), "deadbeef", "secret")).toBe(false);
  });

  it("returns false for a signature that is too long", async () => {
    expect(MailerSendUtils.verifyWebHook(Buffer.from("{}"), "a".repeat(65), "secret")).toBe(false);
  });

  it("returns false for a non-hex signature of the expected length", async () => {
    expect(MailerSendUtils.verifyWebHook(Buffer.from("{}"), "z".repeat(64), "secret")).toBe(false);
  });

  it("returns false for a correct signature checked against the wrong secret", async () => {
    const body = Buffer.from(
      '{"type":"activity.sent","domain_id":"test_domain","created_at":"2022-09-08T20:06:12.062074Z","webhook_id":"webhook_test","url":"https:\\/\\/webhook.site\\/test","data":{"object":"activity","id":"631a6250bd4f6bd6844a2307","type":"sent","created_at":"2022-09-08T20:06:12.051000Z","email":{"object":"email","id":"631a6250bd4f6bd6844a2307","created_at":"2022-09-08T20:06:11.887000Z","from":"donotreply@mailsender.com","subject":"Test Message","status":"sent","tags":null,"message":{"object":"message","id":"631a6250bd4f6bd6844a2307","created_at":"2022-09-08T20:06:11.399000Z"},"recipient":{"object":"recipient","id":"631a6250bd4f6bd6844a2307","email":"test@test.com","created_at":"2022-03-31T21:31:37.304000Z"}},"morph":null,"template_id":""}}',
    );
    const signature = "445e75aab3d8ea9169d134189a2814f06858977bd9cdc69324264e39f47bda2e";

    expect(MailerSendUtils.verifyWebHook(body, signature, "wrong_secret")).toBe(false);
  });
});
