import nock from "nock";
import { SmsRecipientModule } from "../../modules/sms/Recipient.module";

describe("SMS Recipient Module", () => {
  const smsRecipientModule = new SmsRecipientModule("test_key", "http://test.com");

  it("list", async () => {
    const params = { sms_number_id: "sms_number_id", status: "active" as const, page: 1, limit: 10 };
    nock("http://test.com").get("/sms-recipients").query(params).reply(200, { key1: "sms_recipient_list" }, { header1: "test" });
    const result = await smsRecipientModule.list(params);
    expect(result.headers).toMatchObject({ header1: "test", "content-type": "application/json" });
    expect(result.body).toMatchObject({ key1: "sms_recipient_list" });
    expect(result.statusCode).toBe(200);
  });

  it("single", async () => {
    nock("http://test.com").get("/sms-recipients/test_sms_recipient_id").reply(200, { key1: "sms_recipient_value" }, { header1: "test" });
    const result = await smsRecipientModule.single("test_sms_recipient_id");
    expect(result.headers).toMatchObject({ header1: "test", "content-type": "application/json" });
    expect(result.body).toMatchObject({ key1: "sms_recipient_value" });
    expect(result.statusCode).toBe(200);
  });

  test.each([
    ["opt_out", "opt_out"],
    ["active", "active"],
  ] as const)("update puts status %s to /sms-recipients/{id}", async (_label, status) => {
    nock("http://test.com").put("/sms-recipients/test_sms_recipient_id", { status }).reply(200, { key1: "sms_recipient_updated" }, { header1: "test" });
    const result = await smsRecipientModule.update("test_sms_recipient_id", status);
    expect(result.headers).toMatchObject({ header1: "test", "content-type": "application/json" });
    expect(result.body).toMatchObject({ key1: "sms_recipient_updated" });
    expect(result.statusCode).toBe(200);
  });
});
