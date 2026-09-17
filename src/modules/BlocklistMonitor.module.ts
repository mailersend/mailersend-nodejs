import { RequestService, APIResponse } from "../services/request.service";
import { BlocklistMonitor, BlocklistMonitorQueryParams, BlocklistMonitorUpdate } from "../models";

export class BlocklistMonitorModule extends RequestService {
  constructor(apiKey: string, baseUrl: string) {
    super(apiKey, baseUrl);
  }

  async list(queryParams?: BlocklistMonitorQueryParams): Promise<APIResponse> {
    return await this.get(`/blocklist-monitoring`, queryParams);
  }

  async single(monitorId: string): Promise<APIResponse> {
    return await this.get(`/blocklist-monitoring/${monitorId}`);
  }

  async create(data: BlocklistMonitor): Promise<APIResponse> {
    return await this.post<BlocklistMonitor>(`/blocklist-monitoring`, data);
  }

  async update(monitorId: string, data: BlocklistMonitorUpdate): Promise<APIResponse> {
    return await this.put(`/blocklist-monitoring/${monitorId}`, data);
  }

  async delete(monitorId: string): Promise<APIResponse> {
    return await this.deleteReq(`/blocklist-monitoring/${monitorId}`);
  }
}
