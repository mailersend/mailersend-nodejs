"use strict";
require('dotenv').config()

const Recipient = require("../../src/Recipient");
const EmailParams = require("../../src/EmailParams");
const MailerSend = require("../../src/MailerSend");

const mailersend = new MailerSend({
    api_key: process.env.API_KEY,
});

const recipients = [
  new Recipient("arunas@smala.lt", "Your Client")
];

const emailParams = new EmailParams()
      .setFrom("arunas@smala.lt")
      .setFromName("Your Name")
      .setRecipients(recipients)
      .setSubject("Subject")
      .setHtml("This is the HTML content")
      .setText("This is the text content");

mailersend.send(emailParams);
