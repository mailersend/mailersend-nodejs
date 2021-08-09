"use strict";
require('dotenv').config()

const MailerSend = require("mailersend");

const mailersend = new MailerSend({
    api_key: process.env.API_KEY,
});

mailersend.deleteTemplate({
    template_id: 'xxx'
})
.then(response => {
    console.log(response);
});