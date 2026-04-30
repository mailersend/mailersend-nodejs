import nock from "nock";
import { SmsActivityModule } from "../../modules/sms/Activity.module";

describe("SMS Activity Module", () => {
  const smsActivityModule = new SmsActivityModule("test_key", "http://test.com");

  it("list", async () => {
    const params = { sms_number_id: "sms_number_id", page: 1, limit: 10 };
    nock("http://test.com").get("/sms-activity").query(params).reply(200, { key1: "sms_activity_list" }, { header1: "test" });
    const result = await smsActivityModule.list(params);
    expect(result.headers).toMatchObject({ header1: "test", "content-type": "application/json" });
    expect(result.body).toMatchObject({ key1: "sms_activity_list" });
    expect(result.statusCode).toBe(200);
  });

  it("single", async () => {
    nock("http://test.com").get("/sms-activity/test_sms_message_id").reply(200, { key1: "sms_activity_value" }, { header1: "test" });
    const result = await smsActivityModule.single("test_sms_message_id");
    expect(result.headers).toMatchObject({ header1: "test", "content-type": "application/json" });
    expect(result.body).toMatchObject({ key1: "sms_activity_value" });
    expect(result.statusCode).toBe(200);
  });
});
