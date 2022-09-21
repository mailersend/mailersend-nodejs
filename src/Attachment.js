"use strict";

module.exports = class Attachment {
  constructor(content, filename, disposition) {
    this.setContent(content);
    this.setFilename(filename);
    this.setDisposition(disposition);

    return this;
  }

  setContent(content) {
    this.content = content;

    return this;
  }

  setFilename(filename) {
    this.filename = filename;

    return this;
  }

  setDisposition(disposition) {
    this.disposition = disposition;

    return this;
  }
};
