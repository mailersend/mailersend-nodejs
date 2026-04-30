import nock from "nock";
import { TemplateModule } from "../../modules/email/Template.module";

describe("Template Module", () => {
  const templateModule = new TemplateModule("test_key", "http://test.com");
  const templateParams = { name: "Test Template", text: "Hello {{name}}", html: "<p>Hello {{name}}</p>" };

  it("list", async () => {
    const params = { domain_id: "domain_id", page: 1, limit: 10 };
    nock("http://test.com").get("/templates").query(params).reply(200, { key1: "template_list" }, { header1: "test" });
    const result = await templateModule.list(params);
    expect(result.headers).toMatchObject({ header1: "test", "content-type": "application/json" });
    expect(result.body).toMatchObject({ key1: "template_list" });
    expect(result.statusCode).toBe(200);
  });

  it("single", async () => {
    nock("http://test.com").get("/templates/test_template_id").reply(200, { key1: "template_value" }, { header1: "test" });
    const result = await templateModule.single("test_template_id");
    expect(result.headers).toMatchObject({ header1: "test", "content-type": "application/json" });
    expect(result.body).toMatchObject({ key1: "template_value" });
    expect(result.statusCode).toBe(200);
  });

  it("create", async () => {
    nock("http://test.com").post("/templates").reply(201, { key1: "template_created" }, { header1: "test" });
    const result = await templateModule.create(templateParams);
    expect(result.headers).toMatchObject({ header1: "test", "content-type": "application/json" });
    expect(result.body).toMatchObject({ key1: "template_created" });
    expect(result.statusCode).toBe(201);
  });

  it("update", async () => {
    nock("http://test.com").put("/templates/test_template_id").reply(200, { key1: "template_updated" }, { header1: "test" });
    const result = await templateModule.update("test_template_id", { name: "Updated Template" });
    expect(result.headers).toMatchObject({ header1: "test", "content-type": "application/json" });
    expect(result.body).toMatchObject({ key1: "template_updated" });
    expect(result.statusCode).toBe(200);
  });

  it("delete", async () => {
    nock("http://test.com").delete("/templates/test_template_id").reply(200, { key1: "template_deleted" }, { header1: "test" });
    const result = await templateModule.delete("test_template_id");
    expect(result.headers).toMatchObject({ header1: "test", "content-type": "application/json" });
    expect(result.body).toMatchObject({ key1: "template_deleted" });
    expect(result.statusCode).toBe(200);
  });
});
