import { SmsNumberQueryParams } from "../../models";
import { RequestService, APIResponse } from "../../services/request.service";

export class SmsNumberModule extends RequestService {
  constructor(apiKey: string, baseUrl: string) {
    super(apiKey, baseUrl);
  }

  async list(queryParams?: SmsNumberQueryParams): Promise<APIResponse> {
    return await this.get(`/sms-numbers`, queryParams);
  }

  async single(smsNumberId: string): Promise<APIResponse> {
    return await this.get(`/sms-numbers/${smsNumberId}`);
  }

  async update(smsNumberId: string, paused: boolean): Promise<APIResponse> {
    return await this.put(`/sms-numbers/${smsNumberId}`, { paused });
  }

  async delete(smsNumberId: string): Promise<APIResponse> {
    return await this.deleteReq(`/sms-numbers/${smsNumberId}`);
  }
}
