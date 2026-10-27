import { WhatsAppInboundMessageQueryParams } from "../../models"
import { RequestService, APIResponse } from "../../services/request.service"

export class WhatsAppInboundMessageModule extends RequestService {
  constructor(apiKey: string, baseUrl: string) {
    super(apiKey, baseUrl)
  }

  async list(queryParams?: WhatsAppInboundMessageQueryParams): Promise<APIResponse> {
    return await this.get(`/whatsapp/inbound-messages`, queryParams)
  }

  async single(inboundMessageId: string): Promise<APIResponse> {
    return await this.get(`/whatsapp/inbound-messages/${inboundMessageId}`)
  }
}
