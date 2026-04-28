import { RequestService, APIResponse } from "../../services/request.service";
import { EmailWebhook, IEmailWebhookUpdateParams } from "../../models";

export class EmailWebhookModule extends RequestService {
    constructor(apiKey: string, baseUrl: string) {
        super(apiKey, baseUrl);
    }

    async create(params: EmailWebhook): Promise<APIResponse> {
        return await this.post<EmailWebhook>("/webhooks", params);
    }

    async list(domainId: string, queryParams?: { limit?: number }): Promise<APIResponse> {
        return await this.get("/webhooks", { domain_id: domainId, ...queryParams });
    }

    async single(webhookId: string): Promise<APIResponse> {
        return await this.get(`/webhooks/${webhookId}`);
    }

    async update(webhookId: string, updates: IEmailWebhookUpdateParams): Promise<APIResponse> {
        return await this.put(`/webhooks/${webhookId}`, updates);
    }

    async delete(webhookId: string): Promise<APIResponse> {
        return await this.deleteReq(`/webhooks/${webhookId}`);
    }
}
