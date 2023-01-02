import 'dotenv/config';
import { MailerSend, SmsActivityStatusType } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.sms.activity.list({
  sms_number_id: "number_id",
  status: [SmsActivityStatusType.SENT, SmsActivityStatusType.DELIVERED],
  limit: 10,
  page: 1
})
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));
