import nock from "nock";
import { BlocklistMonitorModule } from "../../modules/BlocklistMonitor.module";
import { BlocklistMonitor } from "../../models";

describe("Blocklist Monitor Module", () => {
  const blocklistMonitorModule = new BlocklistMonitorModule("test_key", "http://test.com");

  it("list", async () => {
    const params = { page: 1, limit: 10 };
    nock("http://test.com").get("/blocklist-monitoring").query(params).reply(200, { key1: "monitor_list" }, { header1: "test" });
    const result = await blocklistMonitorModule.list(params);
    expect(result.headers).toMatchObject({ header1: "test", "content-type": "application/json" });
    expect(result.body).toMatchObject({ key1: "monitor_list" });
    expect(result.statusCode).toBe(200);
  });

  it("single", async () => {
    nock("http://test.com").get("/blocklist-monitoring/test_monitor_id").reply(200, { key1: "monitor_value" }, { header1: "test" });
    const result = await blocklistMonitorModule.single("test_monitor_id");
    expect(result.headers).toMatchObject({ header1: "test", "content-type": "application/json" });
    expect(result.body).toMatchObject({ key1: "monitor_value" });
    expect(result.statusCode).toBe(200);
  });

  it("create", async () => {
    const monitor = new BlocklistMonitor("example.com");
    nock("http://test.com").post("/blocklist-monitoring").reply(201, { key1: "monitor_created" }, { header1: "test" });
    const result = await blocklistMonitorModule.create(monitor);
    expect(result.headers).toMatchObject({ header1: "test", "content-type": "application/json" });
    expect(result.body).toMatchObject({ key1: "monitor_created" });
    expect(result.statusCode).toBe(201);
  });

  it("update", async () => {
    const data = { name: "Updated Monitor" };
    nock("http://test.com").put("/blocklist-monitoring/test_monitor_id").reply(200, { key1: "monitor_updated" }, { header1: "test" });
    const result = await blocklistMonitorModule.update("test_monitor_id", data);
    expect(result.headers).toMatchObject({ header1: "test", "content-type": "application/json" });
    expect(result.body).toMatchObject({ key1: "monitor_updated" });
    expect(result.statusCode).toBe(200);
  });

  it("delete", async () => {
    nock("http://test.com").delete("/blocklist-monitoring/test_monitor_id").reply(204, {}, { header1: "test" });
    const result = await blocklistMonitorModule.delete("test_monitor_id");
    expect(result.statusCode).toBe(204);
  });
});
