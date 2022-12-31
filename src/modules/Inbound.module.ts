import { RequestService, APIResponse } from "../services/request.service";
import { Inbound, InboundQueryParams } from "../models";

export class InboundModule extends RequestService {
  constructor(apiKey: string, baseUrl: string) {
    super(apiKey, baseUrl);
  }

  async create(inbound: Inbound) {
    return await this.post<Inbound>(`/inbound`, inbound);
  }

  async list(queryParams?: InboundQueryParams): Promise<APIResponse> {
    return await this.get(`/inbound`, queryParams);
  }

  async single(inboundId: string): Promise<APIResponse> {
    return await this.get(`/inbound/${inboundId}`);
  }

  async delete(inboundId: string): Promise<APIResponse> {
    return await this.deleteReq(`/inbound/${inboundId}`);
  }

  async update(inboundId: string, data: Inbound): Promise<APIResponse> {
    return await this.put(`/inbound/${inboundId}`, data);
  }
}
