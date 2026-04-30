import nock from "nock";
import { InboundModule } from "../../modules/email/Inbound.module";
import { Inbound } from "../../models";

describe("Inbound Module", () => {
  const inboundModule = new InboundModule("test_key", "http://test.com");
  const inbound = new Inbound("test inbound", true, "domain_id");

  it("create", async () => {
    nock("http://test.com").post("/inbound").reply(201, { key1: "inbound_created" }, { header1: "test" });
    const result = await inboundModule.create(inbound);
    expect(result.headers).toMatchObject({ header1: "test", "content-type": "application/json" });
    expect(result.body).toMatchObject({ key1: "inbound_created" });
    expect(result.statusCode).toBe(201);
  });

  it("list", async () => {
    const params = { domain_id: "domain_id", page: 1, limit: 10 };
    nock("http://test.com").get("/inbound").query(params).reply(200, { key1: "inbound_list" }, { header1: "test" });
    const result = await inboundModule.list(params);
    expect(result.headers).toMatchObject({ header1: "test", "content-type": "application/json" });
    expect(result.body).toMatchObject({ key1: "inbound_list" });
    expect(result.statusCode).toBe(200);
  });

  it("single", async () => {
    nock("http://test.com").get("/inbound/test_inbound_id").reply(200, { key1: "inbound_value" }, { header1: "test" });
    const result = await inboundModule.single("test_inbound_id");
    expect(result.headers).toMatchObject({ header1: "test", "content-type": "application/json" });
    expect(result.body).toMatchObject({ key1: "inbound_value" });
    expect(result.statusCode).toBe(200);
  });

  it("update", async () => {
    nock("http://test.com").put("/inbound/test_inbound_id").reply(200, { key1: "inbound_updated" }, { header1: "test" });
    const result = await inboundModule.update("test_inbound_id", inbound);
    expect(result.headers).toMatchObject({ header1: "test", "content-type": "application/json" });
    expect(result.body).toMatchObject({ key1: "inbound_updated" });
    expect(result.statusCode).toBe(200);
  });

  it("delete", async () => {
    nock("http://test.com").delete("/inbound/test_inbound_id").reply(200, { key1: "inbound_deleted" }, { header1: "test" });
    const result = await inboundModule.delete("test_inbound_id");
    expect(result.headers).toMatchObject({ header1: "test", "content-type": "application/json" });
    expect(result.body).toMatchObject({ key1: "inbound_deleted" });
    expect(result.statusCode).toBe(200);
  });
});
