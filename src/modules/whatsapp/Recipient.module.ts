import { WhatsAppRecipientQueryParams } from "../../models"
import { RequestService, APIResponse } from "../../services/request.service"

export class WhatsAppRecipientModule extends RequestService {
  constructor(apiKey: string, baseUrl: string) {
    super(apiKey, baseUrl)
  }

  async list(queryParams?: WhatsAppRecipientQueryParams): Promise<APIResponse> {
    return await this.get(`/whatsapp/recipients`, queryParams)
  }

  async single(whatsappRecipientId: string): Promise<APIResponse> {
    return await this.get(`/whatsapp/recipients/${whatsappRecipientId}`)
  }
}
