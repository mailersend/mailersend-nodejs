import { WhatsAppModule } from "../../modules/WhatsApp.module"
import { WhatsAppParams, WhatsAppPersonalization } from "../../models"
import * as nock from "nock"

describe("WhatsApp Module", () => {
  const whatsappModule = new WhatsAppModule("test_key", "http://test.com")

  it("send", async () => {
    nock("http://test.com").post("/whatsapp/send").reply(202, { id: "msg_id_123" }, { "x-message-id": "msg_id_123" })

    const params = new WhatsAppParams()
      .setFrom("12345678901")
      .setTo(["19191234567", "19199876543"])
      .setTemplateId("template_id_123")

    const response = await whatsappModule.send(params)

    expect(response.statusCode).toBe(202)
    expect(response.body).toMatchObject({ id: "msg_id_123" })
    expect(response.headers).toMatchObject({ "x-message-id": "msg_id_123" })
  })

  it("send with personalization", async () => {
    nock("http://test.com").post("/whatsapp/send").reply(202, { id: "msg_id_456" }, { "x-message-id": "msg_id_456" })

    const personalization = [
      new WhatsAppPersonalization("19191234567")
        .setHeader(["John"])
        .setBody(["order #1234", "tomorrow"])
        .setButtons(["https://example.com/track/1234"]),
      new WhatsAppPersonalization("19199876543")
        .setHeader(["Jane"])
        .setBody(["order #5678", "Friday"]),
    ]

    const params = new WhatsAppParams()
      .setFrom("12345678901")
      .setTo(["19191234567", "19199876543"])
      .setTemplateId("template_id_123")
      .setPersonalization(personalization)

    const response = await whatsappModule.send(params)

    expect(response.statusCode).toBe(202)
  })
})