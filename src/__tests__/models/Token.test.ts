import { Token, TokenScopeType } from "../../models";

describe("Token Model", () => {
  it("Constructor", () => {
    const token = new Token("token1", [TokenScopeType.EMAIL_FULL, TokenScopeType.ANALYTICS_FULL], "domain_id_test");
    expect(token.name).toBe("token1");
    expect(token.domain_id).toBe("domain_id_test");
    expect(token.scopes).toStrictEqual([TokenScopeType.EMAIL_FULL, TokenScopeType.ANALYTICS_FULL]);
  });
});
