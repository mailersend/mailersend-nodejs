import 'dotenv/config';
import { MailerSend, SmsWebhookEventType } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.sms.webhook.update("sms_webhook_id", {
  name: "Webhook",
  url: "https://yourapp.com/hook",
  events: [SmsWebhookEventType.SENT, SmsWebhookEventType.DELIVERED, SmsWebhookEventType.FAILED],
  enabled: true
})
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));
