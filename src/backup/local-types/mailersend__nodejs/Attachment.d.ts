export interface AttachmentInterface {
    content: string;
    filename: string;
    disposition?: string;
}

declare class Attachment implements AttachmentInterface {
    content: string;
    filename: string;
    disposition?: string;
    constructor(content: string, filename: string, disposition?: string);
    setContent(content: string): this;
    setFilename(filename: string): this;
    setDisposition(disposition: string): this;
}
export default Attachment;
