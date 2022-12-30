export interface AttachmentInterface {
  content: string
  filename: string
  disposition?: string
}

class Attachment implements AttachmentInterface {
  content: string
  filename: string
  disposition?: string

  constructor(content: string, filename: string, disposition: string = 'attachment') {
    this.setContent(content);
    this.setFilename(filename);
    this.setDisposition(disposition);

    return this;
  }

  setContent(content: string): this {
    this.content = content;

    return this;
  }

  setFilename(filename: string): this {
    this.filename = filename;

    return this;
  }

  setDisposition(disposition: string): this {
    this.disposition = disposition;

    return this;
  }
};

export default Attachment
