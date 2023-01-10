import 'dotenv/config';
import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

const sentFrom = new Sender("bbbb@yourdomain.com", "Your name");

const recipients = [
  new Recipient("your@client.com", "Your Client")
];
const cc = [
  new Recipient("your_cc@client.com", "Your Client CC")
];
const bcc = [
  new Recipient("your_bcc@client.com", "Your Client BCC")
];

const emailParams = new EmailParams()
  .setFrom(sentFrom)
  .setTo(recipients)
  .setCc(cc)
  .setBcc(bcc)
  .setSubject("This is a Subject")
  .setHtml("<strong>This is the HTML content</strong>")
  .setText("This is the text content");

await mailerSend.email.send(emailParams);