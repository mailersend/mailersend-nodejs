import 'dotenv/config';
import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

const sentFrom = new Sender("you@yourdomain.com", "Your name");

const recipients = [
  new Recipient("your@client.com", "Your Client")
];

const emailParams = new EmailParams()
  .setFrom(sentFrom)
  .setTo(recipients)
  .setReplyTo(sentFrom)
  .setSubject("This is a scheduled Subject")
  .setHtml("<strong>This is a scheduled HTML content</strong>")
  .setText("This is a scheduled text content")
  .setSendAt(Math.floor((new Date(Date.now()+ 30*60*1000)).getTime() / 1000)); //send in 30mins NB:param has to be a Unix timestamp e.g 2443651141

await mailerSend.email.send(emailParams);