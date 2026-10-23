import 'dotenv/config';
import { ActivityEventType, MailerSend } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

const dateTo = Math.floor(Date.now() / 1000); // Unix timestamp; must not be in the future
const dateFrom = dateTo - 30 * 24 * 60 * 60; // no more than 183 days in the past

mailerSend.email.analytics.byDate({
  date_from: dateFrom,
  date_to: dateTo,
  event: [ActivityEventType.CLICKED, ActivityEventType.OPENED],
}).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log(error.body);
});
