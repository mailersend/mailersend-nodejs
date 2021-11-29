"use strict";
require('dotenv').config()

const Recipient = require("../../src/Recipient");
const EmailParams = require("../../src/EmailParams");
const MailerSend = require("../../src/MailerSend");
const BulkEmails = require("../../src/BulkEmails");

const mailersend = new MailerSend({
  api_key: process.env.API_KEY,
});

const bulkEmails = new BulkEmails();

const recipients = [
  new Recipient("your@client.com", "Your Client")
];

const emailParams = new EmailParams()
  .setFrom("your@domain.com")
  .setFromName("Your Name")
  .setRecipients(recipients)
  .setSubject("Subject")
  .setHtml("This is the HTML content")
  .setText("This is the text content");


bulkEmails.addEmail(emailParams)
bulkEmails.addEmails([
  emailParams,
  emailParams
])

mailersend.sendBulk(bulkEmails)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });
