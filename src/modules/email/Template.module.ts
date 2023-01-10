import { RequestService, APIResponse } from "../../services/request.service";
import { TemplateQueryParams } from "../../models";

export class TemplateModule extends RequestService {
  constructor(apiKey: string, baseUrl: string) {
    super(apiKey, baseUrl);
  }

  async list(queryParams?: TemplateQueryParams): Promise<APIResponse> {
    return await this.get(`/templates`, queryParams);
  }

  async single(templateId: string): Promise<APIResponse> {
    return await this.get(`/templates/${templateId}`);
  }

  async delete(templateId: string): Promise<APIResponse> {
    return await this.deleteReq(`/templates/${templateId}`);
  }
}
