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

const variables = [
  {
    email: "your@client.com",
    substitutions: [
      {
        var: 'test',
        value: 'Test Value'
      }
    ],
  }
];

const emailParams = new EmailParams()
      .setFrom("your@domain.com")
      .setFromName("Your Name")
      .setRecipients(recipients)
      .setVariables(variables)
      .setSubject("Subject, {$test}")
      .setHtml("This is the HTML content, {$test}")
      .setText("This is the text content, {$test}");

mailersend.send(emailParams);
