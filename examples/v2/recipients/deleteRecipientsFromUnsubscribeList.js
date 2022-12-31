import 'dotenv/config';
import { BlockListType, MailerSend } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.recipient.delBlockListRecipients(
  ["recipient_id", "recipient_id"],
  BlockListType.UNSUBSCRIBES_LIST
)
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));
