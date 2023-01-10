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
});
