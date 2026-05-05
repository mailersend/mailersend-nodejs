import { RequestService, APIResponse } from "../../services/request.service";
import { BlockListQueryParams, BlockListRecipients, BlockListRecipientsPost, BlockListType, OnHoldListQueryParams, RecipientsQueryParams } from "../../models";

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

  async blockList(queryParams?: BlockListQueryParams, type?: BlockListType.BLOCK_LIST | BlockListType.HARD_BOUNCES_LIST | BlockListType.SPAM_COMPLAINTS_LIST | BlockListType.UNSUBSCRIBES_LIST): Promise<APIResponse>;
  async blockList(queryParams?: OnHoldListQueryParams, type?: BlockListType.ON_HOLD_LIST): Promise<APIResponse>;
  async blockList(queryParams?: BlockListQueryParams | OnHoldListQueryParams, type: BlockListType = BlockListType.BLOCK_LIST): Promise<APIResponse> {
    return await this.get(`/suppressions/${type}`, queryParams);
  }

  async blockRecipients(blockRecipients: BlockListRecipients, type?: BlockListType.BLOCK_LIST): Promise<APIResponse>;
  async blockRecipients(blockRecipients: BlockListRecipientsPost, type: BlockListType.HARD_BOUNCES_LIST | BlockListType.SPAM_COMPLAINTS_LIST | BlockListType.UNSUBSCRIBES_LIST): Promise<APIResponse>;
  async blockRecipients(blockRecipients: BlockListRecipients | BlockListRecipientsPost, type: BlockListType = BlockListType.BLOCK_LIST): Promise<APIResponse> {
    return await this.post<BlockListRecipients | BlockListRecipientsPost>(`/suppressions/${type}`, blockRecipients);
  }

  async delBlockListRecipients(ids: string[], type: BlockListType = BlockListType.BLOCK_LIST): Promise<APIResponse> {
    return await this.deleteReq<{ ids: string[] }>(`/suppressions/${type}`, { ids });
  }

  async delAllBlockListRecipients(type: BlockListType = BlockListType.BLOCK_LIST): Promise<APIResponse> {
    return await this.deleteReq<{ all: boolean }>(`/suppressions/${type}`, { all: true });
  }
}
