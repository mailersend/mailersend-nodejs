export class Attachment {
  content: string;
  filename: string;
  disposition: string;

  constructor(content: string, fileName: string, disposition: string = "attachment") {
    this.content = content;
    this.filename = fileName;
    this.disposition = disposition;
  }
}
