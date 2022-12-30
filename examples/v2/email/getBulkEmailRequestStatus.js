import 'dotenv/config';
import { MailerSend } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.email.getBulkStatus('bulk_email_id') // bulk email Id e.g 63af1fdb790d97105a090001
  .then((response) => {
    console.log(response.body);
  });


