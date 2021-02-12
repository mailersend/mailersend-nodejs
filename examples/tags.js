"use strict";

const Recipient = require("../src/Recipient");
const EmailParams = require("../src/EmailParams");
const MailerSend = require("../src/MailerSend");

const mailersend = new MailerSend({
  api_key: "key",
});

const recipients = [new Recipient("your@client.com", "Your Client")];

const emailParams = new EmailParams()
  .setFrom("your@domain.com")
  .setFromName("Your Name")
  .setRecipients(recipients)
  .setSubject("Subject")
  .setHtml("This is the HTML content")
  .setText("This is the text content")
  .setTags([
    'foo', 'bar'
  ]);

mailersend.send(emailParams);
