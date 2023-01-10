import { RequestService, APIResponse } from "../../services/request.service";
import { MessageQueryParams } from "../../models";

export class MessageModule extends RequestService {
  constructor(apiKey: string, baseUrl: string) {
    super(apiKey, baseUrl);
  }

  async list(queryParams?: MessageQueryParams): Promise<APIResponse> {
    return await this.get(`/messages`, queryParams);
  }

  async single(messageId: string): Promise<APIResponse> {
    return await this.get(`/messages/${messageId}`);
  }
}
