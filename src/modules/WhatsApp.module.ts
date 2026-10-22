import { WhatsAppParams } from "../models"
import { APIResponse, RequestService } from "../services/request.service"
import { WhatsAppActivityModule } from "./whatsapp/Activity.module"
import { WhatsAppInboundMessageModule } from "./whatsapp/InboundMessage.module"
import { WhatsAppItemModule } from "./whatsapp/Item.module"
import { WhatsAppMessageModule } from "./whatsapp/Message.module"
import { WhatsAppRecipientModule } from "./whatsapp/Recipient.module"
import { WhatsAppTemplateModule } from "./whatsapp/Template.module"

export class WhatsAppModule extends RequestService {
  message: WhatsAppMessageModule
  item: WhatsAppItemModule
  activity: WhatsAppActivityModule
  inboundMessage: WhatsAppInboundMessageModule
  recipient: WhatsAppRecipientModule
  template: WhatsAppTemplateModule

  constructor(apiKey: string, baseUrl: string) {
    super(apiKey, baseUrl)

    this.message = new WhatsAppMessageModule(apiKey, baseUrl)
    this.item = new WhatsAppItemModule(apiKey, baseUrl)
    this.activity = new WhatsAppActivityModule(apiKey, baseUrl)
    this.inboundMessage = new WhatsAppInboundMessageModule(apiKey, baseUrl)
    this.recipient = new WhatsAppRecipientModule(apiKey, baseUrl)
    this.template = new WhatsAppTemplateModule(apiKey, baseUrl)
  }

  async send(params: WhatsAppParams): Promise<APIResponse> {
    return await this.post("/whatsapp/send", params)
  }
}
