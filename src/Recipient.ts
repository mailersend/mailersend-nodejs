export interface RecipientInterface {
  email: string
  name?: string | null
}

class Recipient implements RecipientInterface {
  email: string
  name?: string | null

  constructor(email: string, name: string | null) {
    this.email = email;
    this.name = name;
  }
};

export default Recipient