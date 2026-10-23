import 'dotenv/config';
import { MailerSend, Identity } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

const identity = new Identity('domain_id', 'identity@yourdomain.com')
  .setName('Name')
  .setReplyToEmail('reply_identity@yourdomain.com')
  .setReplyToName('Reply Name')
  .setAddNote(false);

mailerSend.email.identity.create(identity)
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));
