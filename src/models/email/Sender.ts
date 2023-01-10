export class Sender {
  email: string;
  name?: string;

  constructor(email: string, name?: string) {
    this.email = email;
    this.name = name;
  }
}
