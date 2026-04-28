import { RequestService, APIResponse } from "../../services/request.service";
import { Domain, DomainQueryParams, DomainRecipientsQueryParams, DomainSettings, SmtpUserParams, SmtpUserQueryParams } from "../../models";

export class DomainModule extends RequestService {
  constructor(apiKey: string, baseUrl: string) {
    super(apiKey, baseUrl);
  }

  async create(domain: Domain) {
    return await this.post<Domain>(`/domains`, domain);
  }

  async list(queryParams?: DomainQueryParams): Promise<APIResponse> {
    return await this.get(`/domains`, queryParams);
  }

  async single(domainId: string): Promise<APIResponse> {
    return await this.get(`/domains/${domainId}`);
  }

  async delete(domainId: string): Promise<APIResponse> {
    return await this.deleteReq(`/domains/${domainId}`);
  }

  async updateSettings(domainId: string, data: DomainSettings): Promise<APIResponse> {
    return await this.put(`/domains/${domainId}/settings`, data);
  }

  async recipients(domainId: string, queryParams?: DomainRecipientsQueryParams): Promise<APIResponse> {
    return await this.get(`/domains/${domainId}/recipients`, queryParams);
  }

  async dns(domainId: string): Promise<APIResponse> {
    return await this.get(`/domains/${domainId}/dns-records`);
  }

  async verify(domainId: string): Promise<APIResponse> {
    return await this.get(`/domains/${domainId}/verify`);
  }

  async listSmtpUsers(domainId: string, queryParams?: SmtpUserQueryParams): Promise<APIResponse> {
    return await this.get(`/domains/${domainId}/smtp-users`, queryParams);
  }

  async getSmtpUser(domainId: string, smtpUserId: string): Promise<APIResponse> {
    return await this.get(`/domains/${domainId}/smtp-users/${smtpUserId}`);
  }

  async createSmtpUser(domainId: string, data: SmtpUserParams): Promise<APIResponse> {
    return await this.post<SmtpUserParams>(`/domains/${domainId}/smtp-users`, data);
  }

  async updateSmtpUser(domainId: string, smtpUserId: string, data: Partial<SmtpUserParams>): Promise<APIResponse> {
    return await this.put(`/domains/${domainId}/smtp-users/${smtpUserId}`, data);
  }

  async deleteSmtpUser(domainId: string, smtpUserId: string): Promise<APIResponse> {
    return await this.deleteReq(`/domains/${domainId}/smtp-users/${smtpUserId}`);
  }
}
