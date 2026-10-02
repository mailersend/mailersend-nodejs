import nock from "nock"
import { WhatsAppRecipientModule } from "../../modules/whatsapp/Recipient.module"

describe("WhatsApp Recipient Module", () => {
  const whatsappRecipientModule = new WhatsAppRecipientModule("test_key", "http://test.com")

  it("list", async () => {
    const params = { status: "active" as const, page: 1, limit: 10 }
    nock("http://test.com").get("/whatsapp/recipients").query(params).reply(200, { key1: "whatsapp_recipient_list" }, { header1: "test" })
    const result = await whatsappRecipientModule.list(params)
    expect(result.headers).toMatchObject({ header1: "test", "content-type": "application/json" })
    expect(result.body).toMatchObject({ key1: "whatsapp_recipient_list" })
    expect(result.statusCode).toBe(200)
  })

  it("single", async () => {
    nock("http://test.com").get("/whatsapp/recipients/test_whatsapp_recipient_id").reply(200, { key1: "whatsapp_recipient_value" }, { header1: "test" })
    const result = await whatsappRecipientModule.single("test_whatsapp_recipient_id")
    expect(result.headers).toMatchObject({ header1: "test", "content-type": "application/json" })
    expect(result.body).toMatchObject({ key1: "whatsapp_recipient_value" })
    expect(result.statusCode).toBe(200)
  })
})
