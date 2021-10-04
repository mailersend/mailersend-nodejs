export = MailerSend;
declare class MailerSend {
    constructor(config: any);
    api_key: any;
    basePath: string;
    request(endpoint?: string, options?: {}): any;
}
