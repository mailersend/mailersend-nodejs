"use strict";
require('dotenv').config()

const MailerSend = require("../../src/MailerSend");
const SmsParams = require("../../src/SmsParams");

const mailersend = new MailerSend({
  api_key: process.env.API_KEY,
});

const recipients = [
  "+18332647501",
  "+18332647502"
];

const personalization = [
  {
    "phone_number": "+18332647501",
    "data": {
      "name": "Dummy"
    }
  },
  {
    "phone_number": "+18332647502",
    "data": {
      "name": "Not Dummy"
    }
  }
];

const smsParams = new SmsParams()
  .setFrom("+18332647501")
  .setRecipients(recipients)
  .setPersonalization(personalization)
  .setText("Hey {{name}} welcome to our organization");

mailersend.sendSms(smsParams);
