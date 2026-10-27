import { WhatsAppActivityQueryParams } from "../../models"
import { RequestService, APIResponse } from "../../services/request.service"

export class WhatsAppActivityModule extends RequestService {
  constructor(apiKey: string, baseUrl: string) {
    super(apiKey, baseUrl)
  }

  async list(queryParams?: WhatsAppActivityQueryParams): Promise<APIResponse> {
    return await this.get(`/whatsapp/activities`, queryParams)
  }
}
