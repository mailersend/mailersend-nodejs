"use strict";
require('dotenv').config()

const Recipient = require("../../src/Recipient");
const EmailParams = require("../../src/EmailParams");
const MailerSend = require("../../src/MailerSend");

const mailersend = new MailerSend({
  api_key: process.env.API_KEY,
});

mailersend.activityByUserAgent({
  date_from: 1443651141,
  date_to: 2443651141
})
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });
