"use strict";
require('dotenv').config()

const MailerSend = require("../../src/MailerSend");

const mailersend = new MailerSend({
  api_key: process.env.API_KEY,
});

mailersend.updateToken({
  token_id: "xxx",
  status: "pause"
})
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });
