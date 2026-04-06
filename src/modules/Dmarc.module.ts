import { RequestService, APIResponse } from "../services/request.service";
import { Dmarc, DmarcQueryParams, DmarcUpdate } from "../models";

export class DmarcModule extends RequestService {
  constructor(apiKey: string, baseUrl: string) {
    super(apiKey, baseUrl);
  }

  async list(queryParams?: DmarcQueryParams): Promise<APIResponse> {
    return await this.get(`/dmarc-monitoring`, queryParams);
  }

  async create(data: Dmarc): Promise<APIResponse> {
    return await this.post<Dmarc>(`/dmarc-monitoring`, data);
  }

  async update(monitorId: string, data: DmarcUpdate): Promise<APIResponse> {
    return await this.put(`/dmarc-monitoring/${monitorId}`, data);
  }

  async delete(monitorId: string): Promise<APIResponse> {
    return await this.deleteReq(`/dmarc-monitoring/${monitorId}`);
  }

  async report(monitorId: string, queryParams?: DmarcQueryParams): Promise<APIResponse> {
    return await this.get(`/dmarc-monitoring/${monitorId}/report`, queryParams);
  }

  async reportByIp(monitorId: string, ip: string, queryParams?: DmarcQueryParams): Promise<APIResponse> {
    return await this.get(`/dmarc-monitoring/${monitorId}/report/${ip}`, queryParams);
  }

  async reportSources(monitorId: string): Promise<APIResponse> {
    return await this.get(`/dmarc-monitoring/${monitorId}/report-sources`);
  }

  async addFavorite(monitorId: string, ip: string): Promise<APIResponse> {
    return await this.put(`/dmarc-monitoring/${monitorId}/favorite/${ip}`, {});
  }

  async removeFavorite(monitorId: string, ip: string): Promise<APIResponse> {
    return await this.deleteReq(`/dmarc-monitoring/${monitorId}/favorite/${ip}`);
  }
}
