import nock from "nock"
import { WhatsAppItemModule } from "../../modules/whatsapp/Item.module"
import { WhatsAppItemStatus } from "../../models"

describe("WhatsApp Item Module", () => {
  const whatsappItemModule = new WhatsAppItemModule("test_key", "http://test.com")

  it("list", async () => {
    const params = {
      recipient: "48600000001",
      whatsapp_message_id: "whatsapp_message_id",
      status: ["delivered", "read"] as WhatsAppItemStatus[],
      whatsapp_account_id: "whatsapp_account_id",
      from: "15550001234",
      template_id: "template_id",
      date_from: 1790000000,
      date_to: 1790086400,
      page: 1,
      limit: 10,
    }
    nock("http://test.com").get("/whatsapp/items").query(params).reply(200, { key1: "whatsapp_item_list" }, { header1: "test" })
    const result = await whatsappItemModule.list(params)
    expect(result.headers).toMatchObject({ header1: "test", "content-type": "application/json" })
    expect(result.body).toMatchObject({ key1: "whatsapp_item_list" })
    expect(result.statusCode).toBe(200)
  })

  it("single", async () => {
    nock("http://test.com").get("/whatsapp/items/test_whatsapp_item_id").reply(200, { key1: "whatsapp_item_value" }, { header1: "test" })
    const result = await whatsappItemModule.single("test_whatsapp_item_id")
    expect(result.headers).toMatchObject({ header1: "test", "content-type": "application/json" })
    expect(result.body).toMatchObject({ key1: "whatsapp_item_value" })
    expect(result.statusCode).toBe(200)
  })
})
