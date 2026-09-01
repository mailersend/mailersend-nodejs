import { RequestService, APIResponse } from "../services/request.service";
import { Token, TokenUpdates } from "../models";

export class TokenModule extends RequestService {
  constructor(apiKey: string, baseUrl: string) {
    super(apiKey, baseUrl);
  }

  async list(params?: { page?: number; limit?: number }): Promise<APIResponse> {
    return await this.get(`/token`, params);
  }

  async single(tokenId: string): Promise<APIResponse> {
    return await this.get(`/token/${tokenId}`);
  }

  async create(token: Token): Promise<APIResponse> {
    return await this.post<Token>("/token", token);
  }

  async update(tokenId: string, data: { name?: string; status?: "pause" | "unpause" }): Promise<APIResponse> {
    return await this.put(`/token/${tokenId}`, data);
  }

  async updateSettings(tokenId: string, updates: TokenUpdates): Promise<APIResponse> {
    return await this.put(`/token/${tokenId}`, updates);
  }

  async delete(tokenId: string): Promise<APIResponse> {
    return await this.deleteReq(`/token/${tokenId}`);
  }
}
