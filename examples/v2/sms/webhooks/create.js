import 'dotenv/config';
import { MailerSend, SmsWebhook, SmsWebhookEventType } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

const smsWebhook = new SmsWebhook(
  "Sms Webhook",
  "https://yourapp.com/hook",
  [SmsWebhookEventType.SENT, SmsWebhookEventType.DELIVERED],
  "sms_number_id",
  true,
);

mailerSend.sms.webhook.create(smsWebhook)
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));
