import 'dotenv/config';
import { MailerSend, Inbound, InboundFilterType } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

const data = {
  domain_id: 'string',
  email: 'email@yourdomain.com',
  name: 'name',
  personal_note: 'Personal note',
  reply_to_name: 'Reply Name',
  reply_to_email: 'repy@yourdomain.com',
  add_note: true,
};

mailerSend.email.identity.updateByEmail('email_address', data)
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));
