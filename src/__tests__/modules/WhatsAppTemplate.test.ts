import nock from "nock"
import { WhatsAppTemplateModule } from "../../modules/whatsapp/Template.module"

describe("WhatsApp Template Module", () => {
  const whatsappTemplateModule = new WhatsAppTemplateModule("test_key", "http://test.com")

  it("list", async () => {
    const params = {
      whatsapp_account_id: "whatsapp_account_id",
      status: "approved" as const,
      category: "UTILITY" as const,
      language: "en_US",
      page: 1,
      limit: 10,
    }
    nock("http://test.com").get("/whatsapp/templates").query(params).reply(200, { key1: "whatsapp_template_list" }, { header1: "test" })
    const result = await whatsappTemplateModule.list(params)
    expect(result.headers).toMatchObject({ header1: "test", "content-type": "application/json" })
    expect(result.body).toMatchObject({ key1: "whatsapp_template_list" })
    expect(result.statusCode).toBe(200)
  })

  it("single", async () => {
    nock("http://test.com").get("/whatsapp/templates/test_whatsapp_template_id").reply(200, { key1: "whatsapp_template_value" }, { header1: "test" })
    const result = await whatsappTemplateModule.single("test_whatsapp_template_id")
    expect(result.headers).toMatchObject({ header1: "test", "content-type": "application/json" })
    expect(result.body).toMatchObject({ key1: "whatsapp_template_value" })
    expect(result.statusCode).toBe(200)
  })
})
