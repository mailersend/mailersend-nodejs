import { RequestService, APIResponse } from "../../services/request.service";
import { BlockListQueryParams, BlockListRecipients, BlockListRecipientsPost, BlockListType, OnHoldListQueryParams, RecipientsQueryParams } from "../../models";

const MIN_LIMIT = 10;
const MAX_LIMIT = 100;

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
    if (queryParams?.limit !== undefined) {
      if (queryParams.limit < MIN_LIMIT || queryParams.limit > MAX_LIMIT) {
        throw new Error(`Limit must be between ${MIN_LIMIT} and ${MAX_LIMIT}.`);
      }
    }
    return await this.get(`/suppressions/${type}`, queryParams);
  }

  async blockRecipients(blockRecipients: BlockListRecipients, type?: BlockListType.BLOCK_LIST): Promise<APIResponse>;
  async blockRecipients(blockRecipients: BlockListRecipientsPost, type: BlockListType.HARD_BOUNCES_LIST | BlockListType.SPAM_COMPLAINTS_LIST | BlockListType.UNSUBSCRIBES_LIST): Promise<APIResponse>;
  async blockRecipients(blockRecipients: BlockListRecipients | BlockListRecipientsPost, type: BlockListType = BlockListType.BLOCK_LIST): Promise<APIResponse> {
    if (type === BlockListType.BLOCK_LIST) {
      const params = blockRecipients as BlockListRecipients;
      if (!params.recipients?.length && !params.patterns?.length) {
        throw new Error('Either recipients or patterns must be provided.');
      }
    } else {
      const params = blockRecipients as BlockListRecipientsPost;
      if (!params.recipients.length) {
        throw new Error('Recipients must not be empty.');
      }
    }
    return await this.post<BlockListRecipients | BlockListRecipientsPost>(`/suppressions/${type}`, blockRecipients);
  }

  async delBlockListRecipients(ids: string[], type: BlockListType = BlockListType.BLOCK_LIST, domainId?: string): Promise<APIResponse> {
    return await this.deleteReq<{ ids: string[], domain_id?: string }>(`/suppressions/${type}`, { ids, ...(domainId && { domain_id: domainId }) });
  }

  async delAllBlockListRecipients(type: BlockListType = BlockListType.BLOCK_LIST, domainId?: string): Promise<APIResponse> {
    return await this.deleteReq<{ all: boolean, domain_id?: string }>(`/suppressions/${type}`, { all: true, ...(domainId && { domain_id: domainId }) });
  }
}
