"use strict";

module.exports = class SmsObject {
  constructor(smsParams) {
    this.data = {
      from: smsParams.from,
      to: smsParams.recipients,
      text: smsParams.text,
      personalization: smsParams.personalization,
    };
  }
};
