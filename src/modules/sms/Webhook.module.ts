import { SmsWebhook, SmsWebhookQueryParams, SmsWebhookUpdate } from "../../models";
import { RequestService, APIResponse } from "../../services/request.service";

export class SmsWebhookModule extends RequestService {
  constructor(apiKey: string, baseUrl: string) {
    super(apiKey, baseUrl);
  }
  
  async create(params: SmsWebhook): Promise<APIResponse> {
    return await this.post<SmsWebhook>("/sms-webhooks", params);
  }

  async list(queryParams: SmsWebhookQueryParams): Promise<APIResponse> {
    return await this.get("/sms-webhooks", queryParams);
  }

  async single(smsWebhookId: string): Promise<APIResponse> {
    return await this.get(`/sms-webhooks/${smsWebhookId}`);
  }

  async update(smsWebhookId: string, data: SmsWebhookUpdate): Promise<APIResponse> {
    return await this.put(`/sms-webhooks/${smsWebhookId}`, data);
  }

  async delete(smsWebhookId: string): Promise<APIResponse> {
    return await this.deleteReq(`/sms-webhooks/${smsWebhookId}`);
  }
}
