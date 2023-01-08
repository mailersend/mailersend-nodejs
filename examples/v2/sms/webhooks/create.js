import 'dotenv/config';
import { MailerSend, SmsWebhook, SmsWebhookEventType } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

const smsWebhook = new SmsWebhook()
  .setName("Sms Webhook")
  .setUrl("https:://yourapp.com/hook")
  .setSmsNumberId("sms_number_id")
  .setEnabled(true)
  .setEvents([SmsWebhookEventType.SENT, SmsWebhookEventType.DELIVERED])

mailerSend.sms.webhook.create(smsWebhook)
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));
