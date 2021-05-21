"use strict";
require('dotenv').config()
const fs = require('fs');

const Recipient = require("../../src/Recipient");
const Attachment = require("../../src/Attachment");
const EmailParams = require("../../src/EmailParams");
const MailerSend = require("../../src/MailerSend");

const mailersend = new MailerSend({
    api_key: process.env.API_KEY,
});

const recipients = [
  new Recipient("your@client.com", "Your Client")
];

const attachments = [
  new Attachment(fs.readFileSync('/path/to/file.pdf', {encoding: 'base64'}), 'file.pdf')
]

const emailParams = new EmailParams()
      .setFrom("your@domain.com")
      .setFromName("Your Name")
      .setRecipients(recipients)
      .setAttachments(attachments)
      .setSubject("Subject")
      .setHtml("This is the HTML content")
      .setText("This is the text content");

mailersend.send(emailParams);
