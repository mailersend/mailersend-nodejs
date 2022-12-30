import 'dotenv/config';
import { MailerSend, ActivityEventType } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});


const queryParams = {
  limit: 10, // Min: 10, Max: 100, Default: 25
  page: 2,
  date_from: 1443651141, // Unix timestamp
  date_to: 1443651141, // Unix timestamp
  event: [ActivityEventType.SENT, ActivityEventType.SOFT_BOUNCED]
}

mailerSend.activity.domain("domain_id", queryParams)
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error));
