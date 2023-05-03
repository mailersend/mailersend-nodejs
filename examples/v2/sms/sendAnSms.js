"use strict";
require('dotenv').config()

const MailerSend = require("../../src/MailerSend");
const SmsParams = require("../../src/SmsParams");

const mailersend = new MailerSend({
  api_key: process.env.API_KEY,
});

const to = [
  "+18332647501"
];

const smsParams = new SmsParams()
  .setFrom("+18332647501")
  .setTo(to)
  .setText("This is the text content");

mailersend.sendSms(smsParams);
