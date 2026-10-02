import { WhatsAppMessageQueryParams } from "../../models"
import { RequestService, APIResponse } from "../../services/request.service"

export class WhatsAppMessageModule extends RequestService {
  constructor(apiKey: string, baseUrl: string) {
    super(apiKey, baseUrl)
  }

  async list(queryParams?: WhatsAppMessageQueryParams): Promise<APIResponse> {
    return await this.get(`/whatsapp/messages`, queryParams)
  }

  async single(whatsappMessageId: string): Promise<APIResponse> {
    return await this.get(`/whatsapp/messages/${whatsappMessageId}`)
  }
}
