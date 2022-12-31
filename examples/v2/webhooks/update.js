import 'dotenv/config';
import { EmailWebhook, EmailWebhookEventType, MailerSend } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

const emailWebhook = new EmailWebhook()
  .setName("Webhook Name 2")
  .setEnabled(false)
  .setEvents([EmailWebhookEventType.SENT, EmailWebhookEventType.OPENED]);

mailerSend.email.updateWebhook("webhook_id", emailWebhook)
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));
