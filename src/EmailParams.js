"use strict";

module.exports = class EmailParams {
  constructor(config = {}) {
    this.from = config.from;
    this.fromName = config.fromName;
    this.recipients = config.recipients;
    this.subject = config.subject;
    this.html = config.html;
    this.text = config.text;

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
};
