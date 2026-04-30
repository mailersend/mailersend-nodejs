import nock from "nock";
import { SmtpUserModule } from "../../modules/email/SmtpUser.module";

describe("SmtpUser Module", () => {
  const smtpUserModule = new SmtpUserModule("test_key", "http://test.com");

  it("list", async () => {
    const params = { page: 1, limit: 10 };
    nock("http://test.com").get("/domains/test_id/smtp-users").query(params).reply(200, { key1: "smtp_list" }, { header1: "test" });
    const result = await smtpUserModule.list("test_id", params);
    expect(result.headers).toMatchObject({ header1: "test", "content-type": "application/json" });
    expect(result.body).toMatchObject({ key1: "smtp_list" });
    expect(result.statusCode).toBe(200);
  });

  it("single", async () => {
    nock("http://test.com").get("/domains/test_id/smtp-users/smtp_user_id").reply(200, { key1: "smtp_user" }, { header1: "test" });
    const result = await smtpUserModule.single("test_id", "smtp_user_id");
    expect(result.headers).toMatchObject({ header1: "test", "content-type": "application/json" });
    expect(result.body).toMatchObject({ key1: "smtp_user" });
    expect(result.statusCode).toBe(200);
  });

  it("create", async () => {
    nock("http://test.com").post("/domains/test_id/smtp-users").reply(201, { key1: "smtp_created" }, { header1: "test" });
    const result = await smtpUserModule.create("test_id", { name: "smtp_user_name" });
    expect(result.headers).toMatchObject({ header1: "test", "content-type": "application/json" });
    expect(result.body).toMatchObject({ key1: "smtp_created" });
    expect(result.statusCode).toBe(201);
  });

  it("update", async () => {
    nock("http://test.com").put("/domains/test_id/smtp-users/smtp_user_id").reply(200, { key1: "smtp_updated" }, { header1: "test" });
    const result = await smtpUserModule.update("test_id", "smtp_user_id", { name: "new_name" });
    expect(result.headers).toMatchObject({ header1: "test", "content-type": "application/json" });
    expect(result.body).toMatchObject({ key1: "smtp_updated" });
    expect(result.statusCode).toBe(200);
  });

  it("delete", async () => {
    nock("http://test.com").delete("/domains/test_id/smtp-users/smtp_user_id").reply(200, { key1: "smtp_deleted" }, { header1: "test" });
    const result = await smtpUserModule.delete("test_id", "smtp_user_id");
    expect(result.headers).toMatchObject({ header1: "test", "content-type": "application/json" });
    expect(result.body).toMatchObject({ key1: "smtp_deleted" });
    expect(result.statusCode).toBe(200);
  });
});
