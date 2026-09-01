import nock from "nock";
import { OthersModule } from "../../modules/Others.module";

describe("Others Module", () => {
  const othersModule = new OthersModule("test_key", "http://test.com");

  it("getApiQuota", async () => {
    nock("http://test.com").get("/api-quota").reply(200, { quota: 1000, used: 42 }, { header1: "test" });
    const result = await othersModule.getApiQuota();
    expect(result.headers).toMatchObject({ header1: "test", "content-type": "application/json" });
    expect(result.body).toMatchObject({ quota: 1000, used: 42 });
    expect(result.statusCode).toBe(200);
  });
});
