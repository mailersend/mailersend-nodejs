import 'dotenv/config';
import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

const sentFrom = new Sender("you@yourdomain.com", "Your name");

const recipients = [
  new Recipient("your@client.com", "Your Client")
];

const personalization = [
  {
    email: "your@client.com",
    data: {
      test: 'Test Value'
    },
  }
];

const emailParams = new EmailParams()
  .setFrom(sentFrom)
  .setTo(recipients)
  .setReplyTo(sentFrom)
  .setPersonalization(personalization)
  .setSubject("Subject, {{ test }}")
  .setHtml("This is the HTML content, {{ test }}")
  .setText("This is the text content, {{ test }}");

await mailerSend.email.send(emailParams);
