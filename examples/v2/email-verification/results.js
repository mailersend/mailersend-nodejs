import 'dotenv/config';
import { EmailVerificationResultType, MailerSend } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.emailVerification.getListResult("email_verification_id",{
  limit: 10,
  page: 1,
  result: [EmailVerificationResultType.CATCH_ALL, EmailVerificationResultType.DISPOSABLE]
})
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));
