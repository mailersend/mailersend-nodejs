import nock from "nock";
import { SmsActivityModule } from "../../modules/sms/Activity.module";
import { SmsActivityStatusType } from "../../models";

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

  it("list sends date_from, date_to and status", async () => {
    nock("http://test.com")
      .get("/sms-activity")
      .query({
        date_from: "1443651141",
        date_to: "2015-09-30T22:12:21Z",
        status: ["sent", "delivered"],
      })
      .reply(200, { key1: "sms_activity_list" }, { header1: "test" });
    const result = await smsActivityModule.list({
      date_from: 1443651141,
      date_to: "2015-09-30T22:12:21Z",
      status: [SmsActivityStatusType.SENT, SmsActivityStatusType.DELIVERED],
    });
    expect(result.statusCode).toBe(200);
  });
});
