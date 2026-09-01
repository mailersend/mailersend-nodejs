import { AnalyticsDateQueryParams, AnalyticsOpensQueryParams } from "../../models";
import { RequestService, APIResponse } from "../../services/request.service";

export class AnalyticsModule extends RequestService {
  constructor(apiKey: string, baseUrl: string) {
    super(apiKey, baseUrl);
  }

  async byDate(queryParams: AnalyticsDateQueryParams): Promise<APIResponse> {
    return await this.get(`/analytics/date`, queryParams);
  }

  async byCountry(queryParams: AnalyticsOpensQueryParams): Promise<APIResponse> {
    return await this.get(`/analytics/country`, queryParams);
  }

  async byUserAgent(queryParams: AnalyticsOpensQueryParams): Promise<APIResponse> {
    return await this.get(`/analytics/ua-name`, queryParams);
  }

  async byReadingEnvironment(queryParams: AnalyticsOpensQueryParams): Promise<APIResponse> {
    return await this.get(`/analytics/ua-type`, queryParams);
  }
}
