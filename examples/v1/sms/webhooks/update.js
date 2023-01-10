"use strict";
require('dotenv').config()

const MailerSend = require("../../../src/MailerSend");

const mailersend = new MailerSend({
  api_key: process.env.API_KEY,
});

mailersend.updateSmsWebhook({
  sms_webhook_id: "xxx",
  name: "Webhook",
  url: "https:://yourapp.com/hook",
  enabled: ["sms.sent", "sms.delivered", "sms.failed"],
  enabled: true
})
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });
