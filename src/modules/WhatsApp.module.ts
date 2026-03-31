import { WhatsAppParams } from "../models"
import { APIResponse, RequestService } from "../services/request.service"

export class WhatsAppModule extends RequestService {
  constructor(apiKey: string, baseUrl: string) {
    super(apiKey, baseUrl)
  }

  async send(params: WhatsAppParams): Promise<APIResponse> {
    return await this.post("/whatsapp/send", params)
  }
}