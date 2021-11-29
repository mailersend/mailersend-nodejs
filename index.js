"use strict";

const Recipient = require("./src/Recipient");
const EmailParams = require("./src/EmailParams");
const MailerSend = require("./src/MailerSend");
const Attachment = require("./src/Attachment");
const EmailObject = require("./src/EmailObject");
const BulkEmails = require("./src/BulkEmails");

module.exports = MailerSend;
module.exports.EmailParams = EmailParams;
module.exports.Recipient = Recipient;
module.exports.Attachment = Attachment;
module.exports.EmailObject = EmailObject;
module.exports.BulkEmails = BulkEmails;
