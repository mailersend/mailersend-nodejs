export interface RecipientInterface {
    email: string;
    name?: string | null;
}
declare class Recipient implements RecipientInterface {
    email: string;
    name?: string | null;
    constructor(email: string, name: string | null);
}
export default Recipient;
