"use strict";

module.exports = class SmsParams {
  constructor(config = {}) {
    this.from = config.from;
    this.recipients = config.recipients;
    this.text = config.text;
    this.personalization = config.personalization;

    return this;
  }

  setFrom(from) {
    this.from = from;

    return this;
  }

  setRecipients(recipients) {
    this.recipients = recipients;

    return this;
  }

  setText(text) {
    this.text = text;

    return this;
  }

  setPersonalization(personalization) {
    this.personalization = personalization;

    return this;
  }
};
