import 'dotenv/config';
import { EmailVerification, MailerSend } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

const emailVerification = new EmailVerification()
  .setName("List example")
  .setEmails([
    "info@mailersend.com",
    "test@mailersend.com"
  ]);

mailerSend.emailVerification.create(emailVerification)
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));
