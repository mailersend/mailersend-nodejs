import nock from "nock";
import { UserModule } from "../../modules/User.module";

describe("User Module", () => {
  const userModule = new UserModule("test_key", "http://test.com");

  it("list", async () => {
    const params = { page: 1, limit: 10 };
    nock("http://test.com").get("/users").query(params).reply(200, { key1: "user_list" }, { header1: "test" });
    const result = await userModule.list(params);
    expect(result.headers).toMatchObject({ header1: "test", "content-type": "application/json" });
    expect(result.body).toMatchObject({ key1: "user_list" });
    expect(result.statusCode).toBe(200);
  });

  it("single", async () => {
    nock("http://test.com").get("/users/test_user_id").reply(200, { key1: "user_value" }, { header1: "test" });
    const result = await userModule.single("test_user_id");
    expect(result.headers).toMatchObject({ header1: "test", "content-type": "application/json" });
    expect(result.body).toMatchObject({ key1: "user_value" });
    expect(result.statusCode).toBe(200);
  });

  it("create", async () => {
    const data = { email: "user@example.com", role: "admin" };
    nock("http://test.com").post("/users").reply(201, { key1: "user_created" }, { header1: "test" });
    const result = await userModule.create(data);
    expect(result.headers).toMatchObject({ header1: "test", "content-type": "application/json" });
    expect(result.body).toMatchObject({ key1: "user_created" });
    expect(result.statusCode).toBe(201);
  });

  it("update", async () => {
    const data = { role: "manager" };
    nock("http://test.com").put("/users/test_user_id").reply(200, { key1: "user_updated" }, { header1: "test" });
    const result = await userModule.update("test_user_id", data);
    expect(result.headers).toMatchObject({ header1: "test", "content-type": "application/json" });
    expect(result.body).toMatchObject({ key1: "user_updated" });
    expect(result.statusCode).toBe(200);
  });

  it("delete", async () => {
    nock("http://test.com").delete("/users/test_user_id").reply(204, {}, { header1: "test" });
    const result = await userModule.delete("test_user_id");
    expect(result.statusCode).toBe(204);
  });

  it("listInvites", async () => {
    const params = { page: 1, limit: 10 };
    nock("http://test.com").get("/invites").query(params).reply(200, { key1: "invite_list" }, { header1: "test" });
    const result = await userModule.listInvites(params);
    expect(result.headers).toMatchObject({ header1: "test", "content-type": "application/json" });
    expect(result.body).toMatchObject({ key1: "invite_list" });
    expect(result.statusCode).toBe(200);
  });

  it("singleInvite", async () => {
    nock("http://test.com").get("/invites/test_invite_id").reply(200, { key1: "invite_value" }, { header1: "test" });
    const result = await userModule.singleInvite("test_invite_id");
    expect(result.headers).toMatchObject({ header1: "test", "content-type": "application/json" });
    expect(result.body).toMatchObject({ key1: "invite_value" });
    expect(result.statusCode).toBe(200);
  });

  it("resendInvite", async () => {
    nock("http://test.com").post("/invites/test_invite_id/resend").reply(200, { key1: "invite_resent" }, { header1: "test" });
    const result = await userModule.resendInvite("test_invite_id");
    expect(result.headers).toMatchObject({ header1: "test", "content-type": "application/json" });
    expect(result.body).toMatchObject({ key1: "invite_resent" });
    expect(result.statusCode).toBe(200);
  });

  it("deleteInvite", async () => {
    nock("http://test.com").delete("/invites/test_invite_id").reply(204, {}, { header1: "test" });
    const result = await userModule.deleteInvite("test_invite_id");
    expect(result.statusCode).toBe(204);
  });
});
