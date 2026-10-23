import nock from "nock";
import { InboundModule } from "../../modules/email/Inbound.module";
import { Inbound, InboundUpdateParams, InboundFilterType, ComparerType } from "../../models";

describe("Inbound Module", () => {
  const inboundModule = new InboundModule("test_key", "http://test.com");
  const inbound = new Inbound("test inbound", true, "domain_id");

  it("create sends POST to /inbound with required fields", async () => {
    nock("http://test.com")
      .post("/inbound", (body) => {
        return body.name === "test inbound" &&
          body.domain_enabled === true &&
          body.domain_id === "domain_id";
      })
      .reply(201, { key1: "inbound_created" }, { header1: "test" });
    const result = await inboundModule.create(inbound);
    expect(result.headers).toMatchObject({ header1: "test", "content-type": "application/json" });
    expect(result.body).toMatchObject({ key1: "inbound_created" });
    expect(result.statusCode).toBe(201);
  });

  it("create sends POST to /inbound with all optional fields", async () => {
    const fullInbound = new Inbound("full inbound", true, "domain_id_full")
      .setInboundDomain("inbound.example.com")
      .setInboundPriority(50)
      .setForwards([{ type: "webhook", value: "https://example.com/hook" }])
      .setMatchFilter({
        type: InboundFilterType.MATCH_SENDER,
        filters: [{ comparer: ComparerType.EQUAL, value: "sender@example.com" }],
      })
      .setCatchFilter({
        type: InboundFilterType.CATCH_RECIPIENT,
        filters: [{ comparer: ComparerType.EQUAL, value: "recipient@example.com" }],
      })
      .setCatchType("one")
      .setMatchType("one")
      .setIncludeAttachments(false);

    nock("http://test.com")
      .post("/inbound", {
        name: "full inbound",
        domain_enabled: true,
        domain_id: "domain_id_full",
        inbound_domain: "inbound.example.com",
        inbound_priority: 50,
        forwards: [{ type: "webhook", value: "https://example.com/hook" }],
        match_filter: {
          type: "match_sender",
          filters: [{ comparer: "equal", value: "sender@example.com" }],
        },
        catch_filter: {
          type: "catch_recipient",
          filters: [{ comparer: "equal", value: "recipient@example.com" }],
        },
        catch_type: "one",
        match_type: "one",
        include_attachments: false,
      })
      .reply(201, { key1: "inbound_created_full" }, { header1: "test" });

    const result = await inboundModule.create(fullInbound);
    expect(result.statusCode).toBe(201);
    expect(result.body).toMatchObject({ key1: "inbound_created_full" });
  });

  it("list sends GET to /inbound with query params", async () => {
    const params = { domain_id: "domain_id", page: 1, limit: 10 };
    nock("http://test.com").get("/inbound").query(params).reply(200, { key1: "inbound_list" }, { header1: "test" });
    const result = await inboundModule.list(params);
    expect(result.headers).toMatchObject({ header1: "test", "content-type": "application/json" });
    expect(result.body).toMatchObject({ key1: "inbound_list" });
    expect(result.statusCode).toBe(200);
  });

  it("list sends GET to /inbound with no arguments", async () => {
    nock("http://test.com").get("/inbound").reply(200, { key1: "inbound_list_all" }, { header1: "test" });
    const result = await inboundModule.list();
    expect(result.statusCode).toBe(200);
    expect(result.body).toMatchObject({ key1: "inbound_list_all" });
  });

  it("single sends GET to /inbound/{id}", async () => {
    nock("http://test.com").get("/inbound/test_inbound_id").reply(200, { key1: "inbound_value" }, { header1: "test" });
    const result = await inboundModule.single("test_inbound_id");
    expect(result.headers).toMatchObject({ header1: "test", "content-type": "application/json" });
    expect(result.body).toMatchObject({ key1: "inbound_value" });
    expect(result.statusCode).toBe(200);
  });

  it("update sends PUT to /inbound/{id} with required fields and no domain_id", async () => {
    const updateParams = new InboundUpdateParams("test inbound", true);

    nock("http://test.com")
      .put("/inbound/test_inbound_id", (body) => {
        return body.name === "test inbound" &&
          body.domain_enabled === true &&
          !Object.prototype.hasOwnProperty.call(body, "domain_id");
      })
      .reply(200, { key1: "inbound_updated" }, { header1: "test" });

    const result = await inboundModule.update("test_inbound_id", updateParams);
    expect(result.headers).toMatchObject({ header1: "test", "content-type": "application/json" });
    expect(result.body).toMatchObject({ key1: "inbound_updated" });
    expect(result.statusCode).toBe(200);
  });

  it("update sends PUT to /inbound/{id} with all optional fields", async () => {
    const updateParams = new InboundUpdateParams("full inbound", true)
      .setInboundDomain("inbound.example.com")
      .setInboundPriority(25)
      .setForwards([{ type: "email", value: "forward@example.com" }])
      .setMatchFilter({
        type: InboundFilterType.MATCH_HEADER,
        filters: [{ comparer: ComparerType.CONTAINS, value: "urgent", key: "X-Priority" }],
      })
      .setCatchFilter({
        type: InboundFilterType.CATCH_RECIPIENT,
        filters: [{ comparer: ComparerType.STARTS_WITH, value: "support" }],
      })
      .setCatchType("one")
      .setMatchType("one")
      .setIncludeAttachments(true);

    nock("http://test.com")
      .put("/inbound/test_inbound_id", {
        name: "full inbound",
        domain_enabled: true,
        inbound_domain: "inbound.example.com",
        inbound_priority: 25,
        forwards: [{ type: "email", value: "forward@example.com" }],
        match_filter: {
          type: "match_header",
          filters: [{ comparer: "contains", value: "urgent", key: "X-Priority" }],
        },
        catch_filter: {
          type: "catch_recipient",
          filters: [{ comparer: "starts-with", value: "support" }],
        },
        catch_type: "one",
        match_type: "one",
        include_attachments: true,
      })
      .reply(200, { key1: "inbound_updated_full" }, { header1: "test" });

    const result = await inboundModule.update("test_inbound_id", updateParams);
    expect(result.statusCode).toBe(200);
    expect(result.body).toMatchObject({ key1: "inbound_updated_full" });
  });

  it("delete sends DELETE to /inbound/{id} and returns 204", async () => {
    nock("http://test.com").delete("/inbound/test_inbound_id").reply(204, {}, { header1: "test" });
    const result = await inboundModule.delete("test_inbound_id");
    expect(result.statusCode).toBe(204);
  });
});
