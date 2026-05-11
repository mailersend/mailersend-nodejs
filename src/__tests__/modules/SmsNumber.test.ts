import nock from "nock";
import { SmsNumberModule } from "../../modules/sms/Number.module";

describe("SMS Number Module", () => {
  const smsNumberModule = new SmsNumberModule("test_key", "http://test.com");

  it("list", async () => {
    const params = { page: 1, limit: 10 };
    nock("http://test.com").get("/sms-numbers").query(params).reply(200, { key1: "sms_number_list" }, { header1: "test" });
    const result = await smsNumberModule.list(params);
    expect(result.headers).toMatchObject({ header1: "test", "content-type": "application/json" });
    expect(result.body).toMatchObject({ key1: "sms_number_list" });
    expect(result.statusCode).toBe(200);
  });

  it("single", async () => {
    nock("http://test.com").get("/sms-numbers/test_sms_number_id").reply(200, { key1: "sms_number_value" }, { header1: "test" });
    const result = await smsNumberModule.single("test_sms_number_id");
    expect(result.headers).toMatchObject({ header1: "test", "content-type": "application/json" });
    expect(result.body).toMatchObject({ key1: "sms_number_value" });
    expect(result.statusCode).toBe(200);
  });

  it("update", async () => {
    nock("http://test.com").put("/sms-numbers/test_sms_number_id").reply(200, { key1: "sms_number_updated" }, { header1: "test" });
    const result = await smsNumberModule.update("test_sms_number_id", true);
    expect(result.headers).toMatchObject({ header1: "test", "content-type": "application/json" });
    expect(result.body).toMatchObject({ key1: "sms_number_updated" });
    expect(result.statusCode).toBe(200);
  });

  it("delete", async () => {
    nock("http://test.com").delete("/sms-numbers/test_sms_number_id").reply(200, { key1: "sms_number_deleted" }, { header1: "test" });
    const result = await smsNumberModule.delete("test_sms_number_id");
    expect(result.headers).toMatchObject({ header1: "test", "content-type": "application/json" });
    expect(result.body).toMatchObject({ key1: "sms_number_deleted" });
    expect(result.statusCode).toBe(200);
  });
});
