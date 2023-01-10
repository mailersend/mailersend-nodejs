"use strict";
require('dotenv').config()

const MailerSend = require("../../../src/MailerSend");

const mailersend = new MailerSend({
  api_key: process.env.API_KEY,
});

mailersend.getSmsWebhooks({
  sms_number_id: 'xxx',
  limit: 10
})
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });
