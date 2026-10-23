import nock from "nock";
import { SmsInboundModule } from "../../modules/sms/Inbound.module";
import { SmsComparerType, SmsInbound, SmsInboundQueryParams } from "../../models";

describe("SMS Inbound Module", () => {
  const smsInboundModule = new SmsInboundModule("test_key", "http://test.com");
  const smsInbound = new SmsInbound("Test Inbound", "sms_number_id", "https://example.com/forward", true);

  it("create posts name, sms_number_id, forward_url and enabled to /sms-inbounds", async () => {
    nock("http://test.com")
      .post("/sms-inbounds", {
        name: "Test Inbound",
        sms_number_id: "sms_number_id",
        forward_url: "https://example.com/forward",
        enabled: true,
      })
      .reply(201, { key1: "sms_inbound_created" }, { header1: "test" });
    const result = await smsInboundModule.create(smsInbound);
    expect(result.headers).toMatchObject({ header1: "test", "content-type": "application/json" });
    expect(result.body).toMatchObject({ key1: "sms_inbound_created" });
    expect(result.statusCode).toBe(201);
  });

  it("create with filter posts filter.comparer and filter.value", async () => {
    const filteredInbound = new SmsInbound("Filtered Inbound", "sms_number_id", "https://example.com/forward")
      .setFilter({ comparer: SmsComparerType.STARTS_WITH, value: "START" });
    nock("http://test.com")
      .post("/sms-inbounds", {
        name: "Filtered Inbound",
        sms_number_id: "sms_number_id",
        forward_url: "https://example.com/forward",
        filter: { comparer: "starts-with", value: "START" },
      })
      .reply(201, { key1: "sms_inbound_created" }, { header1: "test" });
    const result = await smsInboundModule.create(filteredInbound);
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

  it("list without params sends no query", async () => {
    nock("http://test.com").get("/sms-inbounds").query({}).reply(200, { key1: "sms_inbound_list" }, { header1: "test" });
    const result = await smsInboundModule.list();
    expect(result.statusCode).toBe(200);
  });

  test.each([
    ["true is sent as 1", true, "1"],
    ["false is sent as 0", false, "0"],
    ["1 is sent unchanged", 1, "1"],
    ["0 is sent unchanged", 0, "0"],
  ] as const)("list enabled %s", async (_label, enabled, expected) => {
    nock("http://test.com")
      .get("/sms-inbounds")
      .query({ sms_number_id: "sms_number_id", enabled: expected })
      .reply(200, { key1: "sms_inbound_list" }, { header1: "test" });
    const result = await smsInboundModule.list({ sms_number_id: "sms_number_id", enabled });
    expect(result.statusCode).toBe(200);
  });

  it("list leaves the caller's enabled value unchanged", async () => {
    nock("http://test.com").get("/sms-inbounds").query({ enabled: "1" }).reply(200, {}, {});
    const params: SmsInboundQueryParams = { enabled: true };
    await smsInboundModule.list(params);
    expect(params.enabled).toBe(true);
  });

  it("single", async () => {
    nock("http://test.com").get("/sms-inbounds/test_sms_inbound_id").reply(200, { key1: "sms_inbound_value" }, { header1: "test" });
    const result = await smsInboundModule.single("test_sms_inbound_id");
    expect(result.headers).toMatchObject({ header1: "test", "content-type": "application/json" });
    expect(result.body).toMatchObject({ key1: "sms_inbound_value" });
    expect(result.statusCode).toBe(200);
  });

  it("update puts every field to /sms-inbounds/{id}", async () => {
    nock("http://test.com")
      .put("/sms-inbounds/test_sms_inbound_id", {
        name: "Updated Inbound",
        enabled: false,
        sms_number_id: "other_sms_number_id",
        forward_url: "https://example.com/updated",
        filter: { comparer: "equal", value: "STOP" },
      })
      .reply(200, { key1: "sms_inbound_updated" }, { header1: "test" });
    const result = await smsInboundModule.update("test_sms_inbound_id", {
      name: "Updated Inbound",
      enabled: false,
      sms_number_id: "other_sms_number_id",
      forward_url: "https://example.com/updated",
      filter: { comparer: SmsComparerType.EQUAL, value: "STOP" },
    });
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
