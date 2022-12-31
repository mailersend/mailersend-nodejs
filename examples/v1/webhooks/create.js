"use strict";
require('dotenv').config()

const MailerSend = require("../../src/MailerSend");

const mailersend = new MailerSend({
  api_key: process.env.API_KEY,
});

mailersend.createWebhook({
  url: "https://example.com",
  name: "Webhook name",
  events: ["activity.sent"],
  domain_id: "xxx"
})
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });
