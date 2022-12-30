export class Attachment {
  content: string;
  filename: string;
  // id?: string;

  constructor(content: string, fileName: string) {
    this.content = content;
    this.filename = fileName;
    // this.id = id;
  }
}
