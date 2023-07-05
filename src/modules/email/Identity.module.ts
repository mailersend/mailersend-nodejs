import { RequestService, APIResponse } from "../../services/request.service";
import { Identity, IdentityQueryParams, IdentityUpdate } from "../../models";

export class IdentityModule extends RequestService {
  constructor(apiKey: string, baseUrl: string) {
    super(apiKey, baseUrl);
  }

  async create(identity: Identity) {
    return await this.post<Identity>(`/identities`, identity);
  }

  async list(queryParams?: IdentityQueryParams): Promise<APIResponse> {
    return await this.get(`/identities`, queryParams);
  }

  async single(identityId: string): Promise<APIResponse> {
    return await this.get(`/identities/${identityId}`);
  }

  async singleByEmail(email: string): Promise<APIResponse> {
    return await this.get(`/identities/email/${email}`);
  }

  async update(identityId: string, data: IdentityUpdate): Promise<APIResponse> {
    return await this.put(`/identities/${identityId}`, data);
  }

  async updateByEMail(email: string, data: IdentityUpdate): Promise<APIResponse> {
    return await this.put(`/identities/email/${email}`, data);
  }

  async delete(identityId: string): Promise<APIResponse> {
    return await this.deleteReq(`/identities/${identityId}`);
  }

  async deleteByEmail(email: string): Promise<APIResponse> {
    return await this.deleteReq(`/identities/email/${email}`);
  }
}
