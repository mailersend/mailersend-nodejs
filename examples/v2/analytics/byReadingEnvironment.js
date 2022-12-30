import 'dotenv/config';
import { MailerSend } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.analytics.byReadingEnvironment({
  date_from: 1443651141,
  date_to: 2443651141,
}).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log(error.body);
});
