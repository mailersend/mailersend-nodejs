import { RequestService, APIResponse } from "../services/request.service";
import { Token, TokenUpdates } from "../models";

export class TokenModule extends RequestService {
  constructor(apiKey: string, baseUrl: string) {
    super(apiKey, baseUrl);
  }

  async create(token: Token): Promise<APIResponse> {
    return await this.post<Token>("/token", token);
  }

  async updateSettings(tokenId: string, updates: TokenUpdates): Promise<APIResponse> {
    return await this.put(`/token/${tokenId}/settings`, updates);
  }

  async delete(tokenId: string): Promise<APIResponse> {
    return await this.deleteReq(`/token/${tokenId}`);
  }
}
