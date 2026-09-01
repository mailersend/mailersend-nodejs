export class Attachment {
  content: string;
  filename: string;
  disposition: 'inline' | 'attachment';
  id?: string;

  constructor(content: string, fileName: string, disposition: 'inline' | 'attachment' = "attachment", id?: string) {
    this.content = content;
    this.filename = fileName;
    this.disposition = disposition;
    this.id = id;
  }
}
