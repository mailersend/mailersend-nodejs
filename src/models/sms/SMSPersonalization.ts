export class SMSPersonalization {
  phone_number: string; 
  data: {
    [key: string]: string;
  };

  constructor(phoneNumber: string, data: { [key: string]: string }) {
    this.phone_number = phoneNumber;
    this.data = data;
  }
}
