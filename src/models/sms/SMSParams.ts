import { SMSPersonalization } from "./SMSPersonalization";

export class SMSParams {
  from: string;
  to: string[];
  text: string;
  personalization?: SMSPersonalization[];

  constructor(config?: any) {
    this.from = config?.from;
    this.to = config?.to;
    this.text = config?.text;
    if (config?.personalization?.length) {
      this.personalization = config?.personalization;
    }
  }

  setFrom(from: string): SMSParams {
    this.from = from;
    return this;
  }

  setTo(to: string[]): SMSParams {
    this.to = to;
    return this;
  }

  setText(text: string): SMSParams {
    this.text = text;
    return this;
  }

  setPersonalization(personalization: SMSPersonalization[]): SMSParams {
    this.personalization = personalization;
    return this;
  }
}
