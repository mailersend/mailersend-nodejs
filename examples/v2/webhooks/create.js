import 'dotenv/config';
import { EmailWebhook, EmailWebhookEventType, MailerSend } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

const emailWebhook = new EmailWebhook()
  .setName("Webhook Name")
  .setUrl("https://example.com")
  .setDomainId("domain_id")
  .setEnabled(true)
  .setEvents([EmailWebhookEventType.SENT, EmailWebhookEventType.OPENED]);

mailerSend.email.createWebhook(emailWebhook)
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));
