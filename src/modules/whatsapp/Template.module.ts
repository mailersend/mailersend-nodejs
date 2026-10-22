import { WhatsAppTemplateQueryParams } from "../../models"
import { RequestService, APIResponse } from "../../services/request.service"

export class WhatsAppTemplateModule extends RequestService {
  constructor(apiKey: string, baseUrl: string) {
    super(apiKey, baseUrl)
  }

  async list(queryParams?: WhatsAppTemplateQueryParams): Promise<APIResponse> {
    return await this.get(`/whatsapp/templates`, queryParams)
  }

  async single(whatsappTemplateId: string): Promise<APIResponse> {
    return await this.get(`/whatsapp/templates/${whatsappTemplateId}`)
  }
}
