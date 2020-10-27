"use strict";

const Recipient = require("./src/Recipient");
const EmailParams = require("./src/EmailParams");
const MailerSend = require("./src/MailerSend");

module.exports = MailerSend;
module.exports.EmailParams = EmailParams;
module.exports.Recipient = Recipient;
