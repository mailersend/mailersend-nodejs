"use strict";

module.exports = class Attachment {
  constructor(content, filename) {
    this.setContent(content);
    this.setFilename(filename);

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
};
