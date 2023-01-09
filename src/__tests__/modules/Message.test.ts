import * as nock from "nock";
import { MessageModule } from "../../modules/email/Message.module";

describe("Message Module", () => {
  const messageModule = new MessageModule("test_key", "http://test.com");

  it("list", async () => {
    nock("http://test.com")
      .get("/messages")
      .query({ limit: 20, page: 2 })
      .reply(200, { key1: "key1_value" }, { header1: "test" });
    const getMessages = await messageModule.list({ limit: 20, page: 2 });
    expect(getMessages.headers).toMatchObject({ header1: "test", "content-type": "application/json" });
    expect(getMessages.body).toMatchObject({ key1: "key1_value" });
    expect(getMessages.statusCode).toBe(200);
  });

  it("single", async () => {
    nock("http://test.com").get("/messages/test_id").reply(200, { key1: "key1_value" }, { header1: "test" });
    const getMessage = await messageModule.single("test_id");
    expect(getMessage.headers).toMatchObject({ header1: "test", "content-type": "application/json" });
    expect(getMessage.body).toMatchObject({ key1: "key1_value" });
    expect(getMessage.statusCode).toBe(200);
  });
});
