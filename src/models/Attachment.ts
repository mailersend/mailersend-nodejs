export class Attachment {
  content: string;
  filename: string;
  disposition: string;

  constructor(content: string, fileName: string, disposition: string = "attachment") {
    this.content = content;
    this.filename = fileName;
    this.disposition = disposition;
  }

  setContent(content: string): Attachment {
    this.content = content;
    return this;
  }

  setFilename(filename: string): Attachment {
    this.filename = filename;
    return this;
  }

  setDisposition(disposition: string): Attachment {
    this.disposition = disposition;
    return this;
  }
}
