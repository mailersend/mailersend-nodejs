"use strict";
require("dotenv").config();

const MailerSend = require("../../src/MailerSend");

const mailersend = new MailerSend({
  api_key: process.env.API_KEY,
});

mailersend.addDomain({
    name: "example.com",
    return_path_subdomain: "rp_subdomain",
    custom_tracking_subdomain: "ct_subdomain",
    inbound_routing_subdomain: "ir_subdomain",
  })
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });
