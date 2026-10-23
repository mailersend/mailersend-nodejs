import 'dotenv/config';
import { MailerSend } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

const data = {
  name: 'name',
  reply_to_name: 'Reply Name',
  reply_to_email: 'reply@yourdomain.com',
};

mailerSend.email.identity.update('identity_id', data)
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));
