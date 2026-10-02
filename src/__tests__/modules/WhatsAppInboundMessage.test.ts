import nock from "nock"
import { WhatsAppInboundMessageModule } from "../../modules/whatsapp/InboundMessage.module"
import { WhatsAppInboundMessageType } from "../../models"

describe("WhatsApp Inbound Message Module", () => {
  const whatsappInboundMessageModule = new WhatsAppInboundMessageModule("test_key", "http://test.com")

  it("list", async () => {
    const params = {
      whatsapp_account_id: "whatsapp_account_id",
      type: ["text", "image"] as WhatsAppInboundMessageType[],
      date_from: 1790000000,
      date_to: 1790086400,
      page: 1,
      limit: 10,
    }
    nock("http://test.com").get("/whatsapp/inbound-messages").query(params).reply(200, { key1: "whatsapp_inbound_message_list" }, { header1: "test" })
    const result = await whatsappInboundMessageModule.list(params)
    expect(result.headers).toMatchObject({ header1: "test", "content-type": "application/json" })
    expect(result.body).toMatchObject({ key1: "whatsapp_inbound_message_list" })
    expect(result.statusCode).toBe(200)
  })

  it("single", async () => {
    nock("http://test.com").get("/whatsapp/inbound-messages/test_inbound_message_id").reply(200, { key1: "whatsapp_inbound_message_value" }, { header1: "test" })
    const result = await whatsappInboundMessageModule.single("test_inbound_message_id")
    expect(result.headers).toMatchObject({ header1: "test", "content-type": "application/json" })
    expect(result.body).toMatchObject({ key1: "whatsapp_inbound_message_value" })
    expect(result.statusCode).toBe(200)
  })
})
