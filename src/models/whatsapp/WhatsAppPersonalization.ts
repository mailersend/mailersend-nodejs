export interface WhatsAppMediaHeader {
  link: string
  filename?: string
}

export type WhatsAppNamedVariables = { [key: string]: string }

export class WhatsAppPersonalization {
  to: string
  data: {
    header?: string[] | WhatsAppNamedVariables | WhatsAppMediaHeader
    body?: string[] | WhatsAppNamedVariables
    buttons?: string[]
  }

  constructor(to: string) {
    this.to = to
    this.data = {}
  }

  setHeader(header: string[] | WhatsAppNamedVariables | WhatsAppMediaHeader): WhatsAppPersonalization {
    this.data.header = header
    return this
  }

  setBody(body: string[] | WhatsAppNamedVariables): WhatsAppPersonalization {
    this.data.body = body
    return this
  }

  setButtons(buttons: string[]): WhatsAppPersonalization {
    this.data.buttons = buttons
    return this
  }
}
