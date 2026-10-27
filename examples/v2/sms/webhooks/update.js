import 'dotenv/config';
import { MailerSend } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.sms.webhook.update("sms_webhook_id", {
  name: "Webhook",
  url: "https:://yourapp.com/hook",
  enabled: ["sms.sent", "sms.delivered", "sms.failed"],
  enabled: true
})
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));
