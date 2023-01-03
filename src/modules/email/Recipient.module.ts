import { RequestService, APIResponse } from "../../services/request.service";
import { BlockListRecipients, BlockListType, RecipientsQueryParams } from "../../models";

export class RecipientModule extends RequestService {
  constructor(apiKey: string, baseUrl: string) {
    super(apiKey, baseUrl);
  }

  async list(queryParams?: RecipientsQueryParams): Promise<APIResponse> {
    return await this.get(`/recipients`, queryParams);
  }

  async single(recipientId: string): Promise<APIResponse> {
    return await this.get(`/recipients/${recipientId}`);
  }

  async delete(recipientId: string): Promise<APIResponse> {
    return await this.deleteReq(`/recipients/${recipientId}`);
  }

  async blockList(queryParams?: RecipientsQueryParams, type: BlockListType = BlockListType.BLOCK_LIST): Promise<APIResponse> {
    return await this.get(`/suppressions/${type}`, queryParams);
  }

  async blockRecipients(blockRecipients: BlockListRecipients, type: BlockListType = BlockListType.BLOCK_LIST): Promise<APIResponse> {
    return await this.post<BlockListRecipients>(`/suppressions/${type}`, blockRecipients);
  }

  async delBlockListRecipients(ids: string[], type: BlockListType = BlockListType.BLOCK_LIST): Promise<APIResponse> {
    return await this.deleteReq<{ ids: string[] }>(`/suppressions/${type}`, { ids });
  }

  async delAllBlockListRecipients(type: BlockListType = BlockListType.BLOCK_LIST): Promise<APIResponse> {
    return await this.deleteReq<{ all: boolean }>(`/suppressions/${type}`, { all: true });
  }
}
