import { EmailParams, EmailWebhook, EmailWebhookUpdateInterface } from "../models";
import { RequestService, APIResponse } from "../services/request.service";

export class EmailModule extends RequestService {
  constructor(apiKey: string, baseUrl: string) {
    super(apiKey, baseUrl);
  }

  async send(params: EmailParams): Promise<APIResponse> {
    return await this.post<EmailParams>("/email", params);
  }

  async sendBulk(params: EmailParams[]): Promise<APIResponse> {
    return await this.post<EmailParams[]>("/bulk-email", params);
  }

  async getBulkStatus(bulkId: string): Promise<APIResponse> {
    return await this.get(`/bulk-email/${bulkId}`);
  }

  async createWebhook(params: EmailWebhook): Promise<APIResponse> {
    return await this.post<EmailWebhook>("/webhooks", params);
  }

  async listWebhook(domainId: string): Promise<APIResponse> {
    return await this.get("/webhooks", { domain_id: domainId });
  }

  async getWebhook(webhookId: string): Promise<APIResponse> {
    return await this.get(`/webhooks/${webhookId}`);
  }

  async updateWebhook(webhookId: string, updates: Partial<EmailWebhookUpdateInterface>): Promise<APIResponse> {
    return await this.put(`/webhooks/${webhookId}`, updates);
  }

  async deleteWebhook(webhookId: string): Promise<APIResponse> {
    return await this.deleteReq(`/webhooks/${webhookId}`);
  }
}

export interface Variable {
  email: string;
  substitutions: VariableSubstitution[];
}

export interface VariableSubstitution {
  var: string;
  value: string;
}

export interface Personalization {
  email: string;
  data: {
    [key: string]: string;
  };
}
