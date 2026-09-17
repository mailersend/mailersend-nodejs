export class WhatsAppPersonalization {
  to: string
  data: {
    header?: string[]
    body?: string[]
    buttons?: string[]
  }

  constructor(to: string) {
    this.to = to
    this.data = {}
  }

  setHeader(header: string[]): WhatsAppPersonalization {
    this.data.header = header
    return this
  }

  setBody(body: string[]): WhatsAppPersonalization {
    this.data.body = body
    return this
  }

  setButtons(buttons: string[]): WhatsAppPersonalization {
    this.data.buttons = buttons
    return this
  }
}
