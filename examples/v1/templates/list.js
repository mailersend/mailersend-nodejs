"use strict";
require('dotenv').config()

const MailerSend = require("../../src/MailerSend");

const mailersend = new MailerSend({
    api_key: process.env.API_KEY,
});

mailersend.templateList()
.then(response => response.json())
.then(data => {
    console.log(data);
});