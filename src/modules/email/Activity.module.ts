import { ActivityQueryParams } from "../../models";
import { RequestService, APIResponse } from "../../services/request.service";

export class ActivityModule extends RequestService {
  constructor(apiKey: string, baseUrl: string) {
    super(apiKey, baseUrl);
  }

  async domain(domainId: string, queryParams?: ActivityQueryParams): Promise<APIResponse> {
    return await this.get(`/activity/${domainId}`, queryParams);
  }

  async single(activityId: string): Promise<APIResponse> {
    return await this.get(`/activities/${activityId}`);
  }
}
