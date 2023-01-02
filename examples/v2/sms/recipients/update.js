import 'dotenv/config';
import { MailerSend } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.sms.recipient.update("sms_recipient_id", "active")
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));
