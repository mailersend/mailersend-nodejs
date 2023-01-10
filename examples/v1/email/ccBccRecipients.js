"use strict";
require('dotenv').config()

const Recipient = require("../../src/Recipient");
const EmailParams = require("../../src/EmailParams");
const MailerSend = require("../../src/MailerSend");

const mailersend = new MailerSend({
  api_key: process.env.API_KEY,
});

const recipients = [
  new Recipient("your@client.com", "Your Client")
];
const cc = [
  new Recipient("your_cc@client.com", "Your CC Client")
];
const bcc = [
  new Recipient("your_bcc@client.com", "Your BCC Client")
];

const emailParams = new EmailParams()
      .setFrom("your@domain.com")
      .setFromName("Your Name")
      .setRecipients(recipients)
      .setCc(cc)
      .setBcc(bcc)
      .setSubject("Subject")
      .setHtml("This is the HTML content")
      .setText("This is the text content");

mailersend.send(emailParams);
