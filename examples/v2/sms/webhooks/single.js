import 'dotenv/config';
import { MailerSend } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.sms.webhook.single("sms_webhook_id")
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));
