import { RequestService, APIResponse } from "../services/request.service";

export class OthersModule extends RequestService {
  constructor(apiKey: string, baseUrl: string) {
    super(apiKey, baseUrl);
  }

  async getApiQuota(): Promise<APIResponse> {
    return await this.get("/api-quota");
  }
}
