import 'dotenv/config';
import { MailerSend, SmsInbound } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

const smsInbound = new SmsInbound()
  .setSmsNumberId("sms_number_id")
  .setEnabled(true)
  .setName("Inbound Name")
  .setForwardUrl("yourapp.com/hook")
  .setFilter({
    comparer: "equal",
    value: "START"
  });

mailerSend.sms.inbound.create(smsInbound)
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));
