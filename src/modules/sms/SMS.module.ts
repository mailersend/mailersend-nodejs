import { SMSParams } from "../../models";
import { APIResponse, RequestService } from "../../services/request.service";
import { SmsActivityModule } from "./Activity.module";
import { SmsInboundModule } from "./Inbound.module";
import { SmsMessageModule } from "./Message.module";
import { SmsNumberModule } from "./Number.module";

export class SMSModule extends RequestService  {
  activity: SmsActivityModule;
  number: SmsNumberModule;
  message: SmsMessageModule;
  inbound: SmsInboundModule;

  constructor(apiKey: string, baseUrl: string) {
    super(apiKey, baseUrl);

    this.activity = new SmsActivityModule(apiKey, baseUrl);
    this.number = new SmsNumberModule(apiKey, baseUrl);
    this.message = new SmsMessageModule(apiKey, baseUrl);
    this.inbound = new SmsInboundModule(apiKey, baseUrl);
  }

  async send(params: SMSParams): Promise<APIResponse> {
    return await this.post("/sms", params);
  }
}
