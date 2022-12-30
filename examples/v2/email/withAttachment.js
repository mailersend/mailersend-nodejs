import 'dotenv/config';
import fs from "fs";
import { MailerSend, EmailParams, Sender, Recipient, Attachment } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

const sentFrom = new Sender("you@yourdomain.com", "Your name");

const recipients = [
  new Recipient("your@client.com", "Your Client")
];

const attachments = [
  new Attachment(
    fs.readFileSync('/path/to/file.pdf', { encoding: 'base64' }),
    'file.pdf',
    'attachment'
  )
]

const emailParams = new EmailParams()
  .setFrom(sentFrom)
  .setTo(recipients)
  .setReplyTo(sentFrom)
  .setAttachments(attachments)
  .setSubject("This is a Subject")
  .setHtml("<strong>This is the HTML content</strong>")
  .setText("This is the text content");

await mailerSend.email.send(emailParams);
