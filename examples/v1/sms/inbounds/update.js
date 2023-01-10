"use strict";
require('dotenv').config()

const MailerSend = require("../../../src/MailerSend");

const mailersend = new MailerSend({
  api_key: process.env.API_KEY,
});

mailersend.updateSmsInbound({
  sms_inbound_id: "xxx",
  name: "Inbound",
  forward_url: "https:://yourapp.com/hook",
  filter: {
    comparer: "equal",
    value: "START"
  },
  enabled: true
})
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });
