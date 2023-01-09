import * as nock from "nock";
import { TokenModule } from "../../modules/Token.module";
import { Token, TokenScopeType } from "../../models";

describe("Token Module", () => {
  const token = new Token("token1", "domain_id_test", [TokenScopeType.EMAIL_FULL, TokenScopeType.ANALYTICS_FULL]);
  const tokenModule = new TokenModule("test_key", "http://test.com");

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

  it("create", async () => {
    nock("http://test.com").post("/token").reply(200, { key1: "token1_value" }, { header1: "test" });
    const createToken = await tokenModule.create(token);
    expect(createToken.headers).toMatchObject({ header1: "test", "content-type": "application/json" });
    expect(createToken.body).toMatchObject({ key1: "token1_value" });
    expect(createToken.statusCode).toBe(200);
  });
});
