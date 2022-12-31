import 'dotenv/config';
import { BlockListType, MailerSend } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.recipient.blockRecipients({
  domain_id: 'domain_id',
  recipients: [
    "test@example.com"
  ]
}, BlockListType.SPAM_COMPLAINTS_LIST)
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));
