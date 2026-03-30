import * as nock from "nock";
import { DmarcModule } from "../../modules/Dmarc.module";
import { Dmarc } from "../../models";

describe("Dmarc Module", () => {
  const dmarcModule = new DmarcModule("test_key", "http://test.com");

  it("list", async () => {
    const params = { limit: 20, page: 2 };
    nock("http://test.com").get("/dmarc-monitoring").query(params).reply(200, { key1: "key1_value" }, { header1: "test" });
    const response = await dmarcModule.list(params);
    expect(response.headers).toMatchObject({ header1: "test", "content-type": "application/json" });
    expect(response.body).toMatchObject({ key1: "key1_value" });
    expect(response.statusCode).toBe(200);
  });

  it("create", async () => {
    const dmarc = new Dmarc("domain_id_123");
    nock("http://test.com").post("/dmarc-monitoring").reply(201, { id: "monitor_id_123" }, { header1: "test" });
    const response = await dmarcModule.create(dmarc);
    expect(response.headers).toMatchObject({ header1: "test", "content-type": "application/json" });
    expect(response.body).toMatchObject({ id: "monitor_id_123" });
    expect(response.statusCode).toBe(201);
  });

  it("update", async () => {
    nock("http://test.com").put("/dmarc-monitoring/test_id").reply(200, { key1: "key1_value" }, { header1: "test" });
    const response = await dmarcModule.update("test_id", { wanted_dmarc_record: "v=DMARC1; p=reject;" });
    expect(response.headers).toMatchObject({ header1: "test", "content-type": "application/json" });
    expect(response.body).toMatchObject({ key1: "key1_value" });
    expect(response.statusCode).toBe(200);
  });

  it("delete", async () => {
    nock("http://test.com").delete("/dmarc-monitoring/test_id").reply(204, {}, { header1: "test" });
    const response = await dmarcModule.delete("test_id");
    expect(response.statusCode).toBe(204);
  });

  it("report", async () => {
    const params = { limit: 10, page: 1 };
    nock("http://test.com").get("/dmarc-monitoring/test_id/report").query(params).reply(200, { key1: "key1_value" }, { header1: "test" });
    const response = await dmarcModule.report("test_id", params);
    expect(response.headers).toMatchObject({ header1: "test", "content-type": "application/json" });
    expect(response.body).toMatchObject({ key1: "key1_value" });
    expect(response.statusCode).toBe(200);
  });

  it("reportByIp", async () => {
    const params = { limit: 10, page: 1 };
    nock("http://test.com").get("/dmarc-monitoring/test_id/report/1.2.3.4").query(params).reply(200, { key1: "key1_value" }, { header1: "test" });
    const response = await dmarcModule.reportByIp("test_id", "1.2.3.4", params);
    expect(response.headers).toMatchObject({ header1: "test", "content-type": "application/json" });
    expect(response.body).toMatchObject({ key1: "key1_value" });
    expect(response.statusCode).toBe(200);
  });

  it("reportSources", async () => {
    nock("http://test.com").get("/dmarc-monitoring/test_id/report-sources").reply(200, { key1: "key1_value" }, { header1: "test" });
    const response = await dmarcModule.reportSources("test_id");
    expect(response.headers).toMatchObject({ header1: "test", "content-type": "application/json" });
    expect(response.body).toMatchObject({ key1: "key1_value" });
    expect(response.statusCode).toBe(200);
  });

  it("addFavorite", async () => {
    nock("http://test.com").put("/dmarc-monitoring/test_id/favorite/1.2.3.4").reply(200, {}, { header1: "test" });
    const response = await dmarcModule.addFavorite("test_id", "1.2.3.4");
    expect(response.statusCode).toBe(200);
  });

  it("removeFavorite", async () => {
    nock("http://test.com").delete("/dmarc-monitoring/test_id/favorite/1.2.3.4").reply(200, {}, { header1: "test" });
    const response = await dmarcModule.removeFavorite("test_id", "1.2.3.4");
    expect(response.statusCode).toBe(200);
  });
});
