import { RequestService, APIResponse } from "../../services/request.service";
import { TemplateQueryParams, TemplateParams } from "../../models";

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

  async create(params: TemplateParams): Promise<APIResponse> {
    return await this.post<TemplateParams>(`/templates`, params);
  }

  async update(templateId: string, params: Partial<TemplateParams>): Promise<APIResponse> {
    return await this.put(`/templates/${templateId}`, params);
  }
}
