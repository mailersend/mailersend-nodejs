import 'dotenv/config';
import { MailerSend } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.email.recipient.list({
  domain_id: "domain_id",
  limit: 10,
})
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));
