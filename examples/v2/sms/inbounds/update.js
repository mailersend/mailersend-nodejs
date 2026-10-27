import 'dotenv/config';
import { MailerSend, SmsInbound } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

const smsInbound = new SmsInbound()
  .setSmsNumberId("sms_number_id")
  .setEnabled(true)
  .setName("Inbound Name Update")
  .setForwardUrl("yourapp.com/hook")
  .setFilter({
    comparer: "equal",
    value: "START"
  });

mailerSend.sms.inbound.update("sms_inbound_id", {...smsInbound})
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));
