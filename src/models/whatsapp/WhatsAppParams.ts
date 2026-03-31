import { WhatsAppPersonalization } from "./WhatsAppPersonalization"

export class WhatsAppParams {
  from: string
  to: string[]
  template_id: string
  personalization?: WhatsAppPersonalization[]

  constructor(config?: any) {
    this.from = config?.from
    this.to = config?.to
    this.template_id = config?.template_id
    if (config?.personalization?.length) {
      this.personalization = config?.personalization
    }
  }

  setFrom(from: string): WhatsAppParams {
    this.from = from
    return this
  }

  setTo(to: string[]): WhatsAppParams {
    this.to = to
    return this
  }

  setTemplateId(templateId: string): WhatsAppParams {
    this.template_id = templateId
    return this
  }

  setPersonalization(personalization: WhatsAppPersonalization[]): WhatsAppParams {
    this.personalization = personalization
    return this
  }
}