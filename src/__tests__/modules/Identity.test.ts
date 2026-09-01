import nock from "nock";
import { IdentityModule } from "../../modules/email/Identity.module";
import { Identity } from "../../models";

describe("Identity Module", () => {
  const identityModule = new IdentityModule("test_key", "http://test.com");
  const identity = new Identity("domain_id", "sender@example.com", "Sender Name");

  it("create", async () => {
    nock("http://test.com").post("/identities").reply(201, { key1: "identity_created" }, { header1: "test" });
    const result = await identityModule.create(identity);
    expect(result.headers).toMatchObject({ header1: "test", "content-type": "application/json" });
    expect(result.body).toMatchObject({ key1: "identity_created" });
    expect(result.statusCode).toBe(201);
  });

  it("list", async () => {
    const params = { domain_id: "domain_id", page: 1, limit: 10 };
    nock("http://test.com").get("/identities").query(params).reply(200, { key1: "identity_list" }, { header1: "test" });
    const result = await identityModule.list(params);
    expect(result.headers).toMatchObject({ header1: "test", "content-type": "application/json" });
    expect(result.body).toMatchObject({ key1: "identity_list" });
    expect(result.statusCode).toBe(200);
  });

  it("list with query and ordering", async () => {
    const params = { query: "sender", order_by: "email" as const, order: "asc" as const };
    nock("http://test.com").get("/identities").query(params).reply(200, { key1: "identity_list" }, { header1: "test" });
    const result = await identityModule.list(params);
    expect(result.statusCode).toBe(200);
  });

  it("single", async () => {
    nock("http://test.com").get("/identities/test_identity_id").reply(200, { key1: "identity_value" }, { header1: "test" });
    const result = await identityModule.single("test_identity_id");
    expect(result.headers).toMatchObject({ header1: "test", "content-type": "application/json" });
    expect(result.body).toMatchObject({ key1: "identity_value" });
    expect(result.statusCode).toBe(200);
  });

  it("singleByEmail", async () => {
    nock("http://test.com").get("/identities/email/sender@example.com").reply(200, { key1: "identity_by_email" }, { header1: "test" });
    const result = await identityModule.singleByEmail("sender@example.com");
    expect(result.headers).toMatchObject({ header1: "test", "content-type": "application/json" });
    expect(result.body).toMatchObject({ key1: "identity_by_email" });
    expect(result.statusCode).toBe(200);
  });

  it("update", async () => {
    nock("http://test.com").put("/identities/test_identity_id").reply(200, { key1: "identity_updated" }, { header1: "test" });
    const result = await identityModule.update("test_identity_id", { name: "New Name" });
    expect(result.headers).toMatchObject({ header1: "test", "content-type": "application/json" });
    expect(result.body).toMatchObject({ key1: "identity_updated" });
    expect(result.statusCode).toBe(200);
  });

  it("updateByEMail", async () => {
    nock("http://test.com").put("/identities/email/sender@example.com").reply(200, { key1: "identity_updated_by_email" }, { header1: "test" });
    const result = await identityModule.updateByEMail("sender@example.com", { name: "New Name" });
    expect(result.headers).toMatchObject({ header1: "test", "content-type": "application/json" });
    expect(result.body).toMatchObject({ key1: "identity_updated_by_email" });
    expect(result.statusCode).toBe(200);
  });

  it("delete", async () => {
    nock("http://test.com").delete("/identities/test_identity_id").reply(204, {}, { header1: "test" });
    const result = await identityModule.delete("test_identity_id");
    expect(result.statusCode).toBe(204);
  });

  it("deleteByEmail", async () => {
    nock("http://test.com").delete("/identities/email/sender@example.com").reply(202, {}, { header1: "test" });
    const result = await identityModule.deleteByEmail("sender@example.com");
    expect(result.statusCode).toBe(202);
  });

  it("resend", async () => {
    nock("http://test.com").post("/identities/test_identity_id/resend").reply(200, { key1: "identity_resent" }, { header1: "test" });
    const result = await identityModule.resend("test_identity_id");
    expect(result.headers).toMatchObject({ header1: "test", "content-type": "application/json" });
    expect(result.body).toMatchObject({ key1: "identity_resent" });
    expect(result.statusCode).toBe(200);
  });
});
