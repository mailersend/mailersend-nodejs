export class Attachment {
  content: string;
  filename: string;
  disposition: string;
  id?: string;

  constructor(content: string, fileName: string, disposition: string = "attachment", id?: string) {
    this.content = content;
    this.filename = fileName;
    this.disposition = disposition;
    this.id = id;
  }
}
