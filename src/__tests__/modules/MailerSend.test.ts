import nock from "nock";
import { MailerSend } from "../../modules/MailerSend.module";
import { EmailModule } from "../../modules/Email.module";
import { SMSModule } from "../../modules/SMS.module";
import { TokenModule } from "../../modules/Token.module";
import { EmailVerificationModule } from "../../modules/EmailVerification.module";

describe("MailerSend module", () => {
  it("Constructor", () => {
    const mailerSend = new MailerSend({ apiKey: "your_api_key" });
    expect(mailerSend.sms instanceof SMSModule).toBe(true);
    expect(mailerSend.email instanceof EmailModule).toBe(true);
    expect(mailerSend.token instanceof TokenModule).toBe(true);
    expect(mailerSend.emailVerification instanceof EmailVerificationModule).toBe(true);
  });

  it.each([
    [undefined, "/2026-10/api-quota"],
    ["v1", "/v1/api-quota"],
    ["2027-01", "/2027-01/api-quota"],
  ])("sends requests to API version %s", async (apiVersion, path) => {
    nock("https://api.mailersend.com").get(path).reply(200, { quota: 1000 });
    const mailerSend = new MailerSend({ apiKey: "your_api_key", apiVersion });

    const result = await mailerSend.others.getApiQuota();

    expect(result.statusCode).toBe(200);
  });

  it.each(["2026-13", "2026-1", "latest"])("rejects the API version %s", (apiVersion) => {
    expect(() => new MailerSend({ apiKey: "your_api_key", apiVersion })).toThrow("apiVersion");
  });
});
