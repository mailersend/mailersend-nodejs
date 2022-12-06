import Attachment from "../../Attachment";
import EmailParams from "../../EmailParams";
import Recipient from "../../Recipient";
type EmailObjectType = {
    from: {
        email: string;
        name: string;
    };
    to: Recipient[];
    cc?: Recipient[];
    bcc?: Recipient[];
    reply_to: {
        email: string;
        name?: string;
    };
    attachments: Attachment[];
    subject: string;
    text: string;
    html: string;
    template_id: number | string;
    variables: any;
    personalization: any;
    tags: string[];
    sendAt: number;
};
declare class EmailObject {
    data: EmailObjectType;
    constructor(emailParams: EmailParams);
}
export default EmailObject;
