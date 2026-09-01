import nock from "nock";
import { SmsMessageModule } from "../../modules/sms/Message.module";

describe("SMS Message Module", () => {
  const smsMessageModule = new SmsMessageModule("test_key", "http://test.com");

  it("list", async () => {
    const params = { page: 1, limit: 10 };
    nock("http://test.com").get("/sms-messages").query(params).reply(200, { key1: "sms_message_list" }, { header1: "test" });
    const result = await smsMessageModule.list(params);
    expect(result.headers).toMatchObject({ header1: "test", "content-type": "application/json" });
    expect(result.body).toMatchObject({ key1: "sms_message_list" });
    expect(result.statusCode).toBe(200);
  });

  it("single", async () => {
    nock("http://test.com").get("/sms-messages/test_sms_message_id").reply(200, { key1: "sms_message_value" }, { header1: "test" });
    const result = await smsMessageModule.single("test_sms_message_id");
    expect(result.headers).toMatchObject({ header1: "test", "content-type": "application/json" });
    expect(result.body).toMatchObject({ key1: "sms_message_value" });
    expect(result.statusCode).toBe(200);
  });
});
