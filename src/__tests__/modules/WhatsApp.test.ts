import { WhatsAppModule } from "../../modules/WhatsApp.module"
import { WhatsAppParams, WhatsAppPersonalization } from "../../models"
import nock from "nock"

describe("WhatsApp Module", () => {
  const whatsappModule = new WhatsAppModule("test_key", "http://test.com")

  it("send posts from, to and template_id to /whatsapp/send", async () => {
    nock("http://test.com")
      .post("/whatsapp/send", {
        from: "12345678901",
        to: ["19191234567", "19199876543"],
        template_id: "template_id_123",
      })
      .reply(202, { id: "msg_id_123" }, { "x-message-id": "msg_id_123" })

    const params = new WhatsAppParams()
      .setFrom("12345678901")
      .setTo(["19191234567", "19199876543"])
      .setTemplateId("template_id_123")

    const response = await whatsappModule.send(params)

    expect(response.statusCode).toBe(202)
    expect(response.body).toMatchObject({ id: "msg_id_123" })
    expect(response.headers).toMatchObject({ "x-message-id": "msg_id_123" })
  })

  it("send with positional personalization posts header, body and buttons arrays", async () => {
    nock("http://test.com")
      .post("/whatsapp/send", {
        from: "12345678901",
        to: ["19191234567", "19199876543"],
        template_id: "template_id_123",
        personalization: [
          {
            to: "19191234567",
            data: { header: ["John"], body: ["order #1234", "tomorrow"], buttons: ["track/1234"] },
          },
          {
            to: "19199876543",
            data: { header: ["Jane"], body: ["order #5678", "Friday"] },
          },
        ],
      })
      .reply(202, { id: "msg_id_456" }, { "x-message-id": "msg_id_456" })

    const personalization = [
      new WhatsAppPersonalization("19191234567")
        .setHeader(["John"])
        .setBody(["order #1234", "tomorrow"])
        .setButtons(["track/1234"]),
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

  it("send with media header posts header.link and header.filename", async () => {
    nock("http://test.com")
      .post("/whatsapp/send", {
        from: "12345678901",
        to: ["19191234567"],
        template_id: "template_id_123",
        personalization: [
          {
            to: "19191234567",
            data: {
              header: { link: "https://www.example.com/invoices/12345.pdf", filename: "invoice-12345.pdf" },
              body: ["John"],
            },
          },
        ],
      })
      .reply(202, { id: "msg_id_789" }, { "x-message-id": "msg_id_789" })

    const params = new WhatsAppParams()
      .setFrom("12345678901")
      .setTo(["19191234567"])
      .setTemplateId("template_id_123")
      .setPersonalization([
        new WhatsAppPersonalization("19191234567")
          .setHeader({ link: "https://www.example.com/invoices/12345.pdf", filename: "invoice-12345.pdf" })
          .setBody(["John"]),
      ])

    const response = await whatsappModule.send(params)

    expect(response.statusCode).toBe(202)
  })

  it("send with named variables posts header and body as objects", async () => {
    nock("http://test.com")
      .post("/whatsapp/send", {
        from: "12345678901",
        to: ["19191234567"],
        template_id: "template_id_123",
        personalization: [
          {
            to: "19191234567",
            data: {
              header: { order_number: "12345" },
              body: { first_name: "John", order_date: "December 31, 2026" },
            },
          },
        ],
      })
      .reply(202, { id: "msg_id_999" }, { "x-message-id": "msg_id_999" })

    const params = new WhatsAppParams()
      .setFrom("12345678901")
      .setTo(["19191234567"])
      .setTemplateId("template_id_123")
      .setPersonalization([
        new WhatsAppPersonalization("19191234567")
          .setHeader({ order_number: "12345" })
          .setBody({ first_name: "John", order_date: "December 31, 2026" }),
      ])

    const response = await whatsappModule.send(params)

    expect(response.statusCode).toBe(202)
  })
})

describe("WhatsAppParams", () => {
  it("constructor config with personalization keeps every field", () => {
    const params = new WhatsAppParams({
      from: "12345678901",
      to: ["19191234567"],
      template_id: "template_id_123",
      personalization: [new WhatsAppPersonalization("19191234567").setBody(["John"])],
    })

    expect(params).toEqual({
      from: "12345678901",
      to: ["19191234567"],
      template_id: "template_id_123",
      personalization: [{ to: "19191234567", data: { body: ["John"] } }],
    })
  })

  it("constructor config with empty personalization omits the key", () => {
    const params = new WhatsAppParams({
      from: "12345678901",
      to: ["19191234567"],
      template_id: "template_id_123",
      personalization: [],
    })

    expect(params).not.toHaveProperty("personalization")
  })
})
