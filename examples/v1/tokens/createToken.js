"use strict";
require('dotenv').config()

const MailerSend = require("../../src/MailerSend");

const mailersend = new MailerSend({
  api_key: process.env.API_KEY,
});

mailersend.createToken({
  name: "Token name",
  domain_id: "xxx",
  scopes: [
    "email_full",
    "domains_read",
    "domains_full",
    "activity_read",
    "activity_full",
    "analytics_read",
    "analytics_full",
    "tokens_full",
  ]
})
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });
