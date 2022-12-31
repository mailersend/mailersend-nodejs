import 'dotenv/config';
import { MailerSend } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.inbound.delete("inbound_id")
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));
  