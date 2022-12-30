import 'dotenv/config';
import { ActivityEventType, MailerSend } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.analytics.byDate({
  date_from: 1443651141,
  date_to: 2443651141,
  event: [ActivityEventType.CLICKED, ActivityEventType.OPENED],
}).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log(error.body);
});
