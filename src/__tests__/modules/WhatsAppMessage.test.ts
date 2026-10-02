import nock from "nock"
import { WhatsAppMessageModule } from "../../modules/whatsapp/Message.module"

describe("WhatsApp Message Module", () => {
  const whatsappMessageModule = new WhatsAppMessageModule("test_key", "http://test.com")

  it("list", async () => {
    const params = { page: 1, limit: 10 }
    nock("http://test.com").get("/whatsapp/messages").query(params).reply(200, { key1: "whatsapp_message_list" }, { header1: "test" })
    const result = await whatsappMessageModule.list(params)
    expect(result.headers).toMatchObject({ header1: "test", "content-type": "application/json" })
    expect(result.body).toMatchObject({ key1: "whatsapp_message_list" })
    expect(result.statusCode).toBe(200)
  })

  it("single", async () => {
    nock("http://test.com").get("/whatsapp/messages/test_whatsapp_message_id").reply(200, { key1: "whatsapp_message_value" }, { header1: "test" })
    const result = await whatsappMessageModule.single("test_whatsapp_message_id")
    expect(result.headers).toMatchObject({ header1: "test", "content-type": "application/json" })
    expect(result.body).toMatchObject({ key1: "whatsapp_message_value" })
    expect(result.statusCode).toBe(200)
  })
})
