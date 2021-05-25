"use strict";
require('dotenv').config()

const Recipient = require("../../src/Recipient");
const EmailParams = require("../../src/EmailParams");
const MailerSend = require("../../src/MailerSend");

const mailersend = new MailerSend({
  api_key: process.env.API_KEY,
});

mailersend.activityList({
  domain_id: "m0p7kx4x7l9yjre2",
})
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });
