"use strict";
require('dotenv').config()

const MailerSend = require("../../src/MailerSend");

const mailersend = new MailerSend({
  api_key: process.env.API_KEY,
});

mailersend.activityByDate({
  date_from: 1443651141,
  date_to: 2443651141,
  event: ["processed"]
})
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });
