import { WhatsAppParams } from "../models"
import { APIResponse, RequestService } from "../services/request.service"
import { WhatsAppInboundMessageModule } from "./whatsapp/InboundMessage.module"
import { WhatsAppMessageModule } from "./whatsapp/Message.module"
import { WhatsAppRecipientModule } from "./whatsapp/Recipient.module"

export class WhatsAppModule extends RequestService {
  message: WhatsAppMessageModule
  inboundMessage: WhatsAppInboundMessageModule
  recipient: WhatsAppRecipientModule

  constructor(apiKey: string, baseUrl: string) {
    super(apiKey, baseUrl)

    this.message = new WhatsAppMessageModule(apiKey, baseUrl)
    this.inboundMessage = new WhatsAppInboundMessageModule(apiKey, baseUrl)
    this.recipient = new WhatsAppRecipientModule(apiKey, baseUrl)
  }

  async send(params: WhatsAppParams): Promise<APIResponse> {
    return await this.post("/whatsapp/send", params)
  }
}
