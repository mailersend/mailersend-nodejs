import 'dotenv/config';
import { MailerSend, SmsInbound, SmsComparerType } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

const smsInbound = new SmsInbound("Inbound Name", "sms_number_id", "https://yourapp.com/hook")
  .setEnabled(true)
  .setFilter({
    comparer: SmsComparerType.EQUAL,
    value: "START"
  });

mailerSend.sms.inbound.create(smsInbound)
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));
