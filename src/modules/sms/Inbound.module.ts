import { ActivityQueryParams, SmsInbound, SmsInboundQueryParams, SmsInboundUpdate } from "../../models";
import { RequestService, APIResponse } from "../../services/request.service";

export class SmsInboundModule extends RequestService {
  constructor(apiKey: string, baseUrl: string) {
    super(apiKey, baseUrl);
  }

  async create(smsInbound: SmsInbound) {
    return await this.post<SmsInbound>(`/sms-inbounds`, smsInbound);
  }

  async list(queryParams?: SmsInboundQueryParams): Promise<APIResponse> {
    return await this.get(`/sms-inbounds`, queryParams);
  }

  async single(smsInboundId: string): Promise<APIResponse> {
    return await this.get(`/sms-inbounds/${smsInboundId}`);
  }

  async delete(smsInboundId: string): Promise<APIResponse> {
    return await this.deleteReq(`/sms-inbounds/${smsInboundId}`);
  }

  async update(smsInboundId: string, data: SmsInboundUpdate): Promise<APIResponse> {
    return await this.put(`/sms-inbounds/${smsInboundId}`, data);
  }
}
