import 'dotenv/config';
import { BlockListType, MailerSend } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.email.recipient.delBlockListRecipients(
  ["spam_complaint_id", "spam_complaint_id"],
  BlockListType.SPAM_COMPLAINTS_LIST
)
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));
