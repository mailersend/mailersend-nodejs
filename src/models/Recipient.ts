import { Sender } from "./Sender";

export class Recipient extends Sender {
  constructor(email: string, name?: string) {
    super(email, name);
  }
}
