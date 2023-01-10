"use strict";
require('dotenv').config()

const MailerSend = require("../../../src/MailerSend");

const mailersend = new MailerSend({
  api_key: process.env.API_KEY,
});

mailersend.createInbound({
  domain_id: "xxx",
  name: "Test name",
  domain_enabled: true,
  inbound_domain: "test.yourdomain.com",
  inbound_address: "test@inbound.yourdomain.com",
  inbound_subdomain: "inbound",
  match_filter: {
    type: "match_all"
  },
  catch_filter: {
    type: "catch_recipient",
    filters: [
      {
        comparer: "equal",
        value: "test"
        }
    ]
  },
  forwards: [
    {
      type: "webhook",
      value: "https://www.yourdomain.com/hook"
    }
  ]
})
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });
