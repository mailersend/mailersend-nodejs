import { RequestService, APIResponse } from "../../services/request.service";
import { SmtpUserParams, SmtpUserQueryParams } from "../../models";

export class SmtpUserModule extends RequestService {
  constructor(apiKey: string, baseUrl: string) {
    super(apiKey, baseUrl);
  }

  async list(domainId: string, queryParams?: SmtpUserQueryParams): Promise<APIResponse> {
    return await this.get(`/domains/${domainId}/smtp-users`, queryParams);
  }

  async single(domainId: string, smtpUserId: string): Promise<APIResponse> {
    return await this.get(`/domains/${domainId}/smtp-users/${smtpUserId}`);
  }

  async create(domainId: string, data: SmtpUserParams): Promise<APIResponse> {
    return await this.post<SmtpUserParams>(`/domains/${domainId}/smtp-users`, data);
  }

  async update(domainId: string, smtpUserId: string, data: Partial<SmtpUserParams>): Promise<APIResponse> {
    return await this.put(`/domains/${domainId}/smtp-users/${smtpUserId}`, data);
  }

  async delete(domainId: string, smtpUserId: string): Promise<APIResponse> {
    return await this.deleteReq(`/domains/${domainId}/smtp-users/${smtpUserId}`);
  }
}
