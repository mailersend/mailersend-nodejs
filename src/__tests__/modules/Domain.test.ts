import nock from "nock";
import { DomainModule } from "../../modules/email/Domain.module";
import { Domain } from "../../models";

describe("Domain Module", () => {
  const domainModule = new DomainModule("test_key", "http://test.com");

  it("create", async () => {
    const domain = new Domain("mydomain.com", "rp_subdomain", "ct_subdomain", "ir_subdomain");
    nock("http://test.com")
      .post("/domains", {
        name: "mydomain.com",
        return_path_subdomain: "rp_subdomain",
        custom_tracking_subdomain: "ct_subdomain",
        inbound_routing_subdomain: "ir_subdomain",
      })
      .reply(
        200,
        {
          id: "dle1krod2jvn8gwm",
          name: "mydomain.com",
        },
        { header1: "test" },
      );
    const createDomain = await domainModule.create(domain);
    expect(createDomain.headers).toMatchObject({ header1: "test", "content-type": "application/json" });
    expect(createDomain.body).toMatchObject({ id: "dle1krod2jvn8gwm", name: "mydomain.com" });
    expect(createDomain.statusCode).toBe(200);
  });

  it("create with only name", async () => {
    const domain = new Domain("mydomain.com");
    nock("http://test.com")
      .post("/domains", { name: "mydomain.com" })
      .reply(200, { id: "dle1krod2jvn8gwm", name: "mydomain.com" }, { header1: "test" });
    const createDomain = await domainModule.create(domain);
    expect(createDomain.body).toMatchObject({ id: "dle1krod2jvn8gwm", name: "mydomain.com" });
    expect(createDomain.statusCode).toBe(200);
  });

  it("list", async () => {
    const params = { limit: 20, page: 2, verified: true };
    nock("http://test.com").get("/domains").query(params).reply(200, { key1: "key1_value" }, { header1: "test" });
    const getDomains = await domainModule.list(params);
    expect(getDomains.headers).toMatchObject({ header1: "test", "content-type": "application/json" });
    expect(getDomains.body).toMatchObject({ key1: "key1_value" });
    expect(getDomains.statusCode).toBe(200);
  });

  it("recipients", async () => {
    const params = { limit: 20, page: 2 };
    nock("http://test.com")
      .get("/domains/test_id/recipients")
      .query(params)
      .reply(200, { key1: "key1_value" }, { header1: "test" });
    const getDomains = await domainModule.recipients("test_id", params);
    expect(getDomains.headers).toMatchObject({ header1: "test", "content-type": "application/json" });
    expect(getDomains.body).toMatchObject({ key1: "key1_value" });
    expect(getDomains.statusCode).toBe(200);
  });

  it("single", async () => {
    nock("http://test.com").get("/domains/test_id").reply(200, { key1: "key1_value" }, { header1: "test" });
    const getDomain = await domainModule.single("test_id");
    expect(getDomain.headers).toMatchObject({ header1: "test", "content-type": "application/json" });
    expect(getDomain.body).toMatchObject({ key1: "key1_value" });
    expect(getDomain.statusCode).toBe(200);
  });

  it("settings", async () => {
    nock("http://test.com")
      .put("/domains/test_id/settings", {
        send_paused: true,
        track_clicks: true,
        track_unsubscribe_html: "<b>html here</b>",
      })
      .reply(200, { key1: "key1_value" }, { header1: "test" });
    const updateSettings = await domainModule.updateSettings("test_id", {
      send_paused: true,
      track_clicks: true,
      track_unsubscribe_html: "<b>html here</b>",
    });
    expect(updateSettings.headers).toMatchObject({ header1: "test", "content-type": "application/json" });
    expect(updateSettings.body).toMatchObject({ key1: "key1_value" });
    expect(updateSettings.statusCode).toBe(200);
  });

  it("settings with all remaining fields", async () => {
    nock("http://test.com")
      .put("/domains/test_id/settings", {
        track_opens: true,
        track_unsubscribe: true,
        track_unsubscribe_plain: "Unsubscribe now",
        track_unsubscribe_html_enabled: true,
        track_unsubscribe_plain_enabled: true,
        track_content: true,
        custom_tracking_enabled: true,
        custom_tracking_subdomain: "track_subdomain",
        precedence_bulk: true,
        ignore_duplicated_recipients: true,
      })
      .reply(200, { key1: "key1_value" }, { header1: "test" });
    const updateSettings = await domainModule.updateSettings("test_id", {
      track_opens: true,
      track_unsubscribe: true,
      track_unsubscribe_plain: "Unsubscribe now",
      track_unsubscribe_html_enabled: true,
      track_unsubscribe_plain_enabled: true,
      track_content: true,
      custom_tracking_enabled: true,
      custom_tracking_subdomain: "track_subdomain",
      precedence_bulk: true,
      ignore_duplicated_recipients: true,
    });
    expect(updateSettings.headers).toMatchObject({ header1: "test", "content-type": "application/json" });
    expect(updateSettings.body).toMatchObject({ key1: "key1_value" });
    expect(updateSettings.statusCode).toBe(200);
  });

  it("delete", async () => {
    nock("http://test.com").delete("/domains/test_id").reply(204);
    const deleteDomain = await domainModule.delete("test_id");
    expect(deleteDomain.statusCode).toBe(204);
  });

  it("dns", async () => {
    nock("http://test.com").get("/domains/test_id/dns-records").reply(200, { key1: "dns" }, { header1: "dns-header" });
    const getDNS = await domainModule.dns("test_id");
    expect(getDNS.headers).toMatchObject({ header1: "dns-header", "content-type": "application/json" });
    expect(getDNS.body).toMatchObject({ key1: "dns" });
    expect(getDNS.statusCode).toBe(200);
  });

  it("verify", async () => {
    nock("http://test.com").get("/domains/test_id/verify").reply(200, { key1: "verify" }, { header1: "verify-header" });
    const verifyDomain = await domainModule.verify("test_id");
    expect(verifyDomain.headers).toMatchObject({ header1: "verify-header", "content-type": "application/json" });
    expect(verifyDomain.body).toMatchObject({ key1: "verify" });
    expect(verifyDomain.statusCode).toBe(200);
  });
});
