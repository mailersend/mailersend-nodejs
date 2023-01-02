import 'dotenv/config';
import { MailerSend } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.sms.inbound.list({
  enabled: 1,
  sms_number_id: "sms_number_id",
  limit: 10,
  page: 1,
})
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));
