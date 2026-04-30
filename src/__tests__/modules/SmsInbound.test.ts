import nock from "nock";
import { SmsInboundModule } from "../../modules/sms/Inbound.module";
import { SmsInbound } from "../../models";

describe("SMS Inbound Module", () => {
  const smsInboundModule = new SmsInboundModule("test_key", "http://test.com");
  const smsInbound = new SmsInbound("Test Inbound", "sms_number_id", "https://example.com/forward", true);

  it("create", async () => {
    nock("http://test.com").post("/sms-inbounds").reply(201, { key1: "sms_inbound_created" }, { header1: "test" });
    const result = await smsInboundModule.create(smsInbound);
    expect(result.headers).toMatchObject({ header1: "test", "content-type": "application/json" });
    expect(result.body).toMatchObject({ key1: "sms_inbound_created" });
    expect(result.statusCode).toBe(201);
  });

  it("list", async () => {
    const params = { sms_number_id: "sms_number_id", page: 1, limit: 10 };
    nock("http://test.com").get("/sms-inbounds").query(params).reply(200, { key1: "sms_inbound_list" }, { header1: "test" });
    const result = await smsInboundModule.list(params);
    expect(result.headers).toMatchObject({ header1: "test", "content-type": "application/json" });
    expect(result.body).toMatchObject({ key1: "sms_inbound_list" });
    expect(result.statusCode).toBe(200);
  });

  it("single", async () => {
    nock("http://test.com").get("/sms-inbounds/test_sms_inbound_id").reply(200, { key1: "sms_inbound_value" }, { header1: "test" });
    const result = await smsInboundModule.single("test_sms_inbound_id");
    expect(result.headers).toMatchObject({ header1: "test", "content-type": "application/json" });
    expect(result.body).toMatchObject({ key1: "sms_inbound_value" });
    expect(result.statusCode).toBe(200);
  });

  it("update", async () => {
    nock("http://test.com").put("/sms-inbounds/test_sms_inbound_id").reply(200, { key1: "sms_inbound_updated" }, { header1: "test" });
    const result = await smsInboundModule.update("test_sms_inbound_id", { name: "Updated Inbound", enabled: false });
    expect(result.headers).toMatchObject({ header1: "test", "content-type": "application/json" });
    expect(result.body).toMatchObject({ key1: "sms_inbound_updated" });
    expect(result.statusCode).toBe(200);
  });

  it("delete", async () => {
    nock("http://test.com").delete("/sms-inbounds/test_sms_inbound_id").reply(200, { key1: "sms_inbound_deleted" }, { header1: "test" });
    const result = await smsInboundModule.delete("test_sms_inbound_id");
    expect(result.headers).toMatchObject({ header1: "test", "content-type": "application/json" });
    expect(result.body).toMatchObject({ key1: "sms_inbound_deleted" });
    expect(result.statusCode).toBe(200);
  });
});
