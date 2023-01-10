import * as nock from "nock";
import { RecipientModule } from "../../modules/email/Recipient.module";
import { BlockListRecipients, BlockListType } from "../../models";

describe("Recipient Module", () => {
  const recipientModule = new RecipientModule("test_key", "http://test.com");
  it("list", async () => {
    const params = { limit: 20, page: 2, domain_id: "domain_id" };
    nock("http://test.com").get("/recipients").query(params).reply(200, { key1: "key1_value" }, { header1: "test" });
    const getRecipients = await recipientModule.list(params);
    expect(getRecipients.headers).toMatchObject({ header1: "test", "content-type": "application/json" });
    expect(getRecipients.body).toMatchObject({ key1: "key1_value" });
    expect(getRecipients.statusCode).toBe(200);
  });
  it("single", async () => {
    nock("http://test.com").get("/recipients/test_id").reply(200, { key1: "key1_value" }, { header1: "test" });
    const getRecipient = await recipientModule.single("test_id");
    expect(getRecipient.headers).toMatchObject({ header1: "test", "content-type": "application/json" });
    expect(getRecipient.body).toMatchObject({ key1: "key1_value" });
    expect(getRecipient.statusCode).toBe(200);
  });
  it("delete", async () => {
    nock("http://test.com").delete("/recipients/test_id").reply(200, { key1: "key1_value" }, { header1: "test" });
    const deleteRecipient = await recipientModule.delete("test_id");
    expect(deleteRecipient.headers).toMatchObject({ header1: "test", "content-type": "application/json" });
    expect(deleteRecipient.body).toMatchObject({ key1: "key1_value" });
    expect(deleteRecipient.statusCode).toBe(200);
  });
  it("block list", async () => {
    const params = { limit: 20, page: 2, domain_id: "domain_id" };
    nock("http://test.com")
      .get("/suppressions/blocklist")
      .query(params)
      .reply(200, { data: [{ id: "id_here" }] }, { header1: "blocklist-header" });
    const blockList = await recipientModule.blockList(params);
    expect(blockList.headers).toMatchObject({ header1: "blocklist-header", "content-type": "application/json" });
    expect(blockList.body).toMatchObject({ data: [{ id: "id_here" }] });
    expect(blockList.statusCode).toBe(200);
  });
  it("block recipients", async () => {
    const recipients: BlockListRecipients = {
      domain_id: "83gwk2j7zqz1nxyd", // not required
      recipients: ["test@example.com"], // If patterns is not defined, this property is required.
      patterns: [".*@example.com"], // If recipients is not defined, this property is required.
    };
    nock("http://test.com")
      .post("/suppressions/blocklist")
      .reply(200, { data: [{ id: "block_id" }] }, { header1: "block-header" });
    const blockedRecipient = await recipientModule.blockRecipients(recipients);
    expect(blockedRecipient.headers).toMatchObject({ header1: "block-header", "content-type": "application/json" });
    expect(blockedRecipient.body).toMatchObject({ data: [{ id: "block_id" }] });
    expect(blockedRecipient.statusCode).toBe(200);
  });
  it("delete block recipients", async () => {
    nock("http://test.com").delete("/suppressions/blocklist").reply(200, {}, { header1: "block-header" });
    const ids = ["60f198790542d97fb66dfe52", "60f198790542d97fb66dfe53"];
    const removed = await recipientModule.delBlockListRecipients(ids);
    expect(removed.headers).toMatchObject({ header1: "block-header", "content-type": "application/json" });
    expect(removed.body).toMatchObject({});
    expect(removed.statusCode).toBe(200);
  });
  it("delete block recipients", async () => {
    nock("http://test.com").delete("/suppressions/blocklist").reply(200, {}, { header1: "block-header" });
    const removed = await recipientModule.delAllBlockListRecipients();
    expect(removed.headers).toMatchObject({ header1: "block-header", "content-type": "application/json" });
    expect(removed.body).toMatchObject({});
    expect(removed.statusCode).toBe(200);
  });
  it("hard bounce list", async () => {
    const params = { limit: 20, page: 2, domain_id: "domain_id" };
    nock("http://test.com")
      .get("/suppressions/hard-bounces")
      .query(params)
      .reply(200, { data: [{ id: "id_here" }] }, { header1: "hard-bounces-header" });
    const hardBouncedList = await recipientModule.blockList(params, BlockListType.HARD_BOUNCES_LIST);
    expect(hardBouncedList.headers).toMatchObject({
      header1: "hard-bounces-header",
      "content-type": "application/json",
    });
    expect(hardBouncedList.body).toMatchObject({ data: [{ id: "id_here" }] });
    expect(hardBouncedList.statusCode).toBe(200);
  });
  it("spam complaints list", async () => {
    const params = { limit: 20, page: 2, domain_id: "domain_id" };
    nock("http://test.com")
      .get("/suppressions/spam-complaints")
      .query(params)
      .reply(200, { data: [{ id: "id_here" }] }, { header1: "spam-complaints-header" });
    const spamComplaintsList = await recipientModule.blockList(params, BlockListType.SPAM_COMPLAINTS_LIST);
    expect(spamComplaintsList.headers).toMatchObject({
      header1: "spam-complaints-header",
      "content-type": "application/json",
    });
    expect(spamComplaintsList.body).toMatchObject({ data: [{ id: "id_here" }] });
    expect(spamComplaintsList.statusCode).toBe(200);
  });
  it("unsubscribes list", async () => {
    const params = { limit: 20, page: 2, domain_id: "domain_id" };
    nock("http://test.com")
      .get("/suppressions/unsubscribes")
      .query(params)
      .reply(200, { data: [{ id: "id_here" }] }, { header1: "unsubscribes-header" });
    const unsubscribesList = await recipientModule.blockList(params, BlockListType.UNSUBSCRIBES_LIST);
    expect(unsubscribesList.headers).toMatchObject({
      header1: "unsubscribes-header",
      "content-type": "application/json",
    });
    expect(unsubscribesList.body).toMatchObject({ data: [{ id: "id_here" }] });
    expect(unsubscribesList.statusCode).toBe(200);
  });
});
