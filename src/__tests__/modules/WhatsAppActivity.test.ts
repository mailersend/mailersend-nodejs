import nock from "nock"
import { WhatsAppActivityModule } from "../../modules/whatsapp/Activity.module"
import { WhatsAppActivityType } from "../../models"

describe("WhatsApp Activity Module", () => {
  const whatsappActivityModule = new WhatsAppActivityModule("test_key", "http://test.com")

  it("list", async () => {
    const params = {
      whatsapp_item_id: "whatsapp_item_id",
      whatsapp_message_id: "whatsapp_message_id",
      recipient: "48600000001",
      type: ["delivered", "read"] as WhatsAppActivityType[],
      date_from: 1790000000,
      date_to: 1790086400,
      page: 1,
      limit: 10,
    }
    nock("http://test.com").get("/whatsapp/activities").query(params).reply(200, { key1: "whatsapp_activity_list" }, { header1: "test" })
    const result = await whatsappActivityModule.list(params)
    expect(result.headers).toMatchObject({ header1: "test", "content-type": "application/json" })
    expect(result.body).toMatchObject({ key1: "whatsapp_activity_list" })
    expect(result.statusCode).toBe(200)
  })
})
