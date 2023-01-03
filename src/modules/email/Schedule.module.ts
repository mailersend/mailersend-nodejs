import { RequestService, APIResponse } from "../../services/request.service";
import { ScheduleQueryParams } from "../../models";

export class ScheduleModule extends RequestService {
  constructor(apiKey: string, baseUrl: string) {
    super(apiKey, baseUrl);
  }

  async list(queryParams?: ScheduleQueryParams): Promise<APIResponse> {
    return await this.get(`/message-schedules`, queryParams);
  }

  async single(messageId: string): Promise<APIResponse> {
    return await this.get(`/message-schedules/${messageId}`);
  }

  async delete(messageId: string): Promise<APIResponse> {
    return await this.deleteReq(`/message-schedules/${messageId}`);
  }
}
