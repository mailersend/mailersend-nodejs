import { SMSModule } from "../../modules/SMS.module";
import { SMSPersonalization, SMSParams } from "../../models";
import nock from "nock";
import { SmsActivityModule } from "../../modules/sms/Activity.module";
import { SmsNumberModule } from "../../modules/sms/Number.module";
import { SmsInboundModule } from "../../modules/sms/Inbound.module";
import { SmsMessageModule } from "../../modules/sms/Message.module";
import { SmsRecipientModule } from "../../modules/sms/Recipient.module";
import { SmsWebhookModule } from "../../modules/sms/Webhook.module";

describe("SMS Module", () => {
  const smsModule = new SMSModule("test_key", "http://test.com");

  it("Constructor", () => {
    expect(smsModule.activity instanceof SmsActivityModule).toBe(true);
    expect(smsModule.number instanceof SmsNumberModule).toBe(true);
    expect(smsModule.inbound instanceof SmsInboundModule).toBe(true);
    expect(smsModule.message instanceof SmsMessageModule).toBe(true);
    expect(smsModule.recipient instanceof SmsRecipientModule).toBe(true);
    expect(smsModule.webhook instanceof SmsWebhookModule).toBe(true);
  });

  it("send posts from, to, text and personalization to /sms", async () => {
    nock("http://test.com")
      .post("/sms", {
        from: "+19191234567",
        to: ["+19191234567", "+19199876543"],
        text: "Hey {{name}}! This is just a friendly hello :D",
        personalization: [
          { phone_number: "+19191234567", data: { name: "Dummy" } },
          { phone_number: "+19199876543", data: { name: "Not Dummy" } },
        ],
      })
      .reply(202, { key1: "key1_value" }, { "x-sms-message-id": "test" });
    const personalization: SMSPersonalization[] = [];

    personalization.push(new SMSPersonalization("+19191234567", { name: "Dummy" }));
    personalization.push(new SMSPersonalization("+19199876543", { name: "Not Dummy" }));

    const params = new SMSParams()
      .setFrom("+19191234567")
      .setTo(["+19191234567", "+19199876543"])
      .setText("Hey {{name}}! This is just a friendly hello :D")
      .setPersonalization(personalization);

    const sendEmail = await smsModule.send(params);

    expect(sendEmail.headers).toMatchObject({ "x-sms-message-id": "test", "content-type": "application/json" });
    expect(sendEmail.body).toMatchObject({ key1: "key1_value" });

    expect(sendEmail.statusCode).toBe(202);
  });
});

describe("SMSParams", () => {
  it("constructor config with personalization keeps every field", () => {
    const params = new SMSParams({
      from: "+19191234567",
      to: ["+19191234567"],
      text: "Hey {{name}}",
      personalization: [new SMSPersonalization("+19191234567", { name: "Dummy" })],
    });

    expect(params).toEqual({
      from: "+19191234567",
      to: ["+19191234567"],
      text: "Hey {{name}}",
      personalization: [{ phone_number: "+19191234567", data: { name: "Dummy" } }],
    });
  });

  it("constructor config with empty personalization omits the key", () => {
    const params = new SMSParams({
      from: "+19191234567",
      to: ["+19191234567"],
      text: "Hello",
      personalization: [],
    });

    expect(params).not.toHaveProperty("personalization");
  });
});
