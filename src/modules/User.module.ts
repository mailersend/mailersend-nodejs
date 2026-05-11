import { RequestService, APIResponse } from "../services/request.service";
import { UserCreate, UserQueryParams, UserUpdate, InviteQueryParams } from "../models";

export class UserModule extends RequestService {
  constructor(apiKey: string, baseUrl: string) {
    super(apiKey, baseUrl);
  }

  async list(queryParams?: UserQueryParams): Promise<APIResponse> {
    return await this.get(`/users`, queryParams);
  }

  async single(userId: string): Promise<APIResponse> {
    return await this.get(`/users/${userId}`);
  }

  async create(data: UserCreate): Promise<APIResponse> {
    return await this.post<UserCreate>(`/users`, data);
  }

  async update(userId: string, data: UserUpdate): Promise<APIResponse> {
    return await this.put(`/users/${userId}`, data);
  }

  async delete(userId: string): Promise<APIResponse> {
    return await this.deleteReq(`/users/${userId}`);
  }

  async listInvites(queryParams?: InviteQueryParams): Promise<APIResponse> {
    return await this.get(`/invites`, queryParams);
  }

  async singleInvite(inviteId: string): Promise<APIResponse> {
    return await this.get(`/invites/${inviteId}`);
  }

  async resendInvite(inviteId: string): Promise<APIResponse> {
    return await this.post(`/invites/${inviteId}/resend`, {});
  }

  async deleteInvite(inviteId: string): Promise<APIResponse> {
    return await this.deleteReq(`/invites/${inviteId}`);
  }
}
