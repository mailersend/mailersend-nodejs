import { SmsRecipientQueryParams } from "../../models";
import { RequestService, APIResponse } from "../../services/request.service";

export class SmsRecipientModule extends RequestService {
  constructor(apiKey: string, baseUrl: string) {
    super(apiKey, baseUrl);
  }

  async list(queryParams?: SmsRecipientQueryParams): Promise<APIResponse> {
    return await this.get(`/sms-recipients`, queryParams);
  }

  async single(smsRecipientId: string): Promise<APIResponse> {
    return await this.get(`/sms-recipients/${smsRecipientId}`);
  }

  async update(smsRecipientId: string, status: "active" | "opt_out"): Promise<APIResponse> {
    return await this.put(`/sms-recipients/${smsRecipientId}`, { status });
  }
}
