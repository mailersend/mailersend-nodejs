import { SmsMessageQueryParams } from "../../models";
import { RequestService, APIResponse } from "../../services/request.service";

export class SmsMessageModule extends RequestService {
  constructor(apiKey: string, baseUrl: string) {
    super(apiKey, baseUrl);
  }

  async list(queryParams?: SmsMessageQueryParams): Promise<APIResponse> {
    return await this.get(`/sms-messages`, queryParams);
  }

  async single(smsMessageId: string): Promise<APIResponse> {
    return await this.get(`/sms-messages/${smsMessageId}`);
  }
}
