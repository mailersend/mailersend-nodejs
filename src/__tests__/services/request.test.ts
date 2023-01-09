import * as nock from "nock";
import { TokenModule } from "../../modules/Token.module";
import { Token, TokenScopeType } from "../../models";

describe("Request service test", () => {
  const token = new Token("token1", "domain_id_test", [TokenScopeType.EMAIL_FULL, TokenScopeType.ANALYTICS_FULL]);
  const tokenModule = new TokenModule("test_key", "http://test.com");

  it("exception", async () => {
    nock("http://test.com").post("/token").reply(500, { key1: "test_exception" }, { header1: "test_exp" });
    try {
      await tokenModule.create(token);
      expect(true).toBeFalsy();
    } catch (e) {
      const exception = e as any;
      expect(exception.headers).toMatchObject({ header1: "test_exp", "content-type": "application/json" });
      expect(exception.body).toMatchObject({ key1: "test_exception" });
      expect(exception.statusCode).toBe(500);
    }
  });
});
