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

const emailParams = new EmailParams()
      .setFrom("your@domain.com")
      .setFromName("Your Name")
      .setRecipients(recipients)
      .setReplyTo("reply@domain.com")
      .setReplyToName("Reply to name")
      .setSubject("Subject")
      .setSendAt(2443651141) //set sendAt is a timestamp - min: now, max: now + 72hours
      .setHtml("This is the HTML content")
      .setText("This is the text content");

mailersend.send(emailParams);
