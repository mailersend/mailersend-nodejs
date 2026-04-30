import nock from "nock";
import { TokenModule } from "../../modules/Token.module";
import { Token, TokenScopeType } from "../../models";

describe("Token Module", () => {
  const token = new Token("token1", [TokenScopeType.EMAIL_FULL, TokenScopeType.ANALYTICS_FULL], "domain_id_test");
  const tokenModule = new TokenModule("test_key", "http://test.com");

  it("list", async () => {
    const params = { page: 1, limit: 10 };
    nock("http://test.com").get("/token").query(params).reply(200, { key1: "key1_value" }, { header1: "test" });
    const result = await tokenModule.list(params);
    expect(result.headers).toMatchObject({ header1: "test", "content-type": "application/json" });
    expect(result.body).toMatchObject({ key1: "key1_value" });
    expect(result.statusCode).toBe(200);
  });

  it("single", async () => {
    nock("http://test.com").get("/token/test_id").reply(200, { key1: "key1_value" }, { header1: "test" });
    const result = await tokenModule.single("test_id");
    expect(result.headers).toMatchObject({ header1: "test", "content-type": "application/json" });
    expect(result.body).toMatchObject({ key1: "key1_value" });
    expect(result.statusCode).toBe(200);
  });

  it("create", async () => {
    nock("http://test.com").post("/token").reply(200, { key1: "token1_value" }, { header1: "test" });
    const createToken = await tokenModule.create(token);
    expect(createToken.headers).toMatchObject({ header1: "test", "content-type": "application/json" });
    expect(createToken.body).toMatchObject({ key1: "token1_value" });
    expect(createToken.statusCode).toBe(200);
  });

  it("update", async () => {
    nock("http://test.com").put("/token/test_id").reply(200, { key1: "key1_value" }, { header1: "test" });
    const result = await tokenModule.update("test_id", { name: "updated_token" });
    expect(result.headers).toMatchObject({ header1: "test", "content-type": "application/json" });
    expect(result.body).toMatchObject({ key1: "key1_value" });
    expect(result.statusCode).toBe(200);
  });

  it("settings", async () => {
    nock("http://test.com").put("/token/test_id/settings").reply(200, { key1: "key1_value" }, { header1: "test" });
    const updateSettings = await tokenModule.updateSettings("test_id", { status: "pause" });
    expect(updateSettings.headers).toMatchObject({ header1: "test", "content-type": "application/json" });
    expect(updateSettings.body).toMatchObject({ key1: "key1_value" });
    expect(updateSettings.statusCode).toBe(200);
  });

  it("delete", async () => {
    nock("http://test.com").delete("/token/test_id").reply(200, { key1: "key1_value" }, { header1: "test" });
    const deleteDomain = await tokenModule.delete("test_id");
    expect(deleteDomain.headers).toMatchObject({ header1: "test", "content-type": "application/json" });
    expect(deleteDomain.body).toMatchObject({ key1: "key1_value" });
    expect(deleteDomain.statusCode).toBe(200);
  });
});
