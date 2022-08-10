"use strict";

module.exports = class EmailParams {
  constructor(config = {}) {
    this.from = config.from;
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

    return this;
  }

  setFrom(from) {
    this.from = from;

    return this;
  }

  setFromName(fromName) {
    this.fromName = fromName;

    return this;
  }

  setRecipients(recipients) {
    this.recipients = recipients;

    return this;
  }

  setAttachments(attachments) {
    this.attachments = attachments;

    return this;
  }

  setCc(cc) {
    this.cc = cc;

    return this;
  }

  setBcc(bcc) {
    this.bcc = bcc;

    return this;
  }

  setReplyTo(replyTo) {
    this.replyTo = replyTo;

    return this;
  }

  setReplyToName(replyToName) {
    this.replyToName = replyToName;

    return this;
  }

  setSubject(subject) {
    this.subject = subject;

    return this;
  }

  setHtml(html) {
    this.html = html;

    return this;
  }

  setText(text) {
    this.text = text;

    return this;
  }

  setTemplateId(templateId) {
    this.templateId = templateId;

    return this;
  }

  setVariables(variables) {
    this.variables = variables;

    return this;
  }

  setPersonalization(personalization) {
    this.personalization = personalization;

    return this;
  }

  setTags(tags) {
    this.tags = tags;

    return this;
  }

  setSendAt(sendAt) {
    this.sendAt = sendAt;

    return this;
  }
};
