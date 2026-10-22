import { WhatsAppItemQueryParams } from "../../models"
import { RequestService, APIResponse } from "../../services/request.service"

export class WhatsAppItemModule extends RequestService {
  constructor(apiKey: string, baseUrl: string) {
    super(apiKey, baseUrl)
  }

  async list(queryParams?: WhatsAppItemQueryParams): Promise<APIResponse> {
    return await this.get(`/whatsapp/items`, queryParams)
  }

  async single(whatsappItemId: string): Promise<APIResponse> {
    return await this.get(`/whatsapp/items/${whatsappItemId}`)
  }
}
