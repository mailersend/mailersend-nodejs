"use strict";
exports.__esModule = true;
var EmailParams = /** @class */ (function () {
    function EmailParams(config) {
        this.setFrom(config.from);
        this.fromName = config.fromName;
        this.recipients = config.recipients;
        this.cc = config.cc;
        this.bcc = config.bcc;
        this.replyTo = config.replyTo;
        this.replyToName = config.replyToName;
        this.attachments = config.attachments;
        this.subject = config.subject;
        this.html = config.html;
        this.text = config.text;
        this.templateId = config.templateId;
        this.variables = config.variables;
        this.personalization = config.personalization;
        this.tags = config.tags;
        this.sendAt = config.sendAt;
        return this;
    }
    EmailParams.prototype.setFrom = function (from) {
        this.from = from;
        return this;
    };
    EmailParams.prototype.setFromName = function (fromName) {
        this.fromName = fromName;
        return this;
    };
    EmailParams.prototype.setRecipients = function (recipients) {
        this.recipients = recipients;
        return this;
    };
    EmailParams.prototype.setAttachments = function (attachments) {
        this.attachments = attachments;
        return this;
    };
    EmailParams.prototype.setCc = function (cc) {
        this.cc = cc;
        return this;
    };
    EmailParams.prototype.setBcc = function (bcc) {
        this.bcc = bcc;
        return this;
    };
    EmailParams.prototype.setReplyTo = function (replyTo) {
        this.replyTo = replyTo;
        return this;
    };
    EmailParams.prototype.setReplyToName = function (replyToName) {
        this.replyToName = replyToName;
        return this;
    };
    EmailParams.prototype.setSubject = function (subject) {
        this.subject = subject;
        return this;
    };
    EmailParams.prototype.setHtml = function (html) {
        this.html = html;
        return this;
    };
    EmailParams.prototype.setText = function (text) {
        this.text = text;
        return this;
    };
    EmailParams.prototype.setTemplateId = function (templateId) {
        this.templateId = templateId;
        return this;
    };
    EmailParams.prototype.setVariables = function (variables) {
        this.variables = variables;
        return this;
    };
    EmailParams.prototype.setPersonalization = function (personalization) {
        this.personalization = personalization;
        return this;
    };
    EmailParams.prototype.setTags = function (tags) {
        this.tags = tags;
        return this;
    };
    EmailParams.prototype.setSendAt = function (sendAt) {
        this.sendAt = sendAt;
        return this;
    };
    return EmailParams;
}());
;
exports["default"] = EmailParams;
