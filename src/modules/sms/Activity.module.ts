import { SmsActivityQueryParams } from "../../models";
import { RequestService, APIResponse } from "../../services/request.service";

export class SmsActivityModule extends RequestService {
  constructor(apiKey: string, baseUrl: string) {
    super(apiKey, baseUrl);
  }

  async list(queryParams?: SmsActivityQueryParams): Promise<APIResponse> {
    return await this.get(`/sms-activity`, queryParams);
  }

  async single(smsMessageId: string): Promise<APIResponse> {
    return await this.get(`/sms-activity/${smsMessageId}`);
  }
}
