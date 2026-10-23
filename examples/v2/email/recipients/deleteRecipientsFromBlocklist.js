import 'dotenv/config';
import { BlockListType, MailerSend } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.email.recipient.delBlockListRecipients(
  ["blocklist_entry_id", "blocklist_entry_id"],
  BlockListType.BLOCK_LIST
)
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));
