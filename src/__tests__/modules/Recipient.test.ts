import nock from "nock";
import { RecipientModule } from "../../modules/email/Recipient.module";
import { BlockListRecipients, BlockListRecipientsPost, BlockListType } from "../../models";

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
      .post("/suppressions/blocklist", (body: any) => body.domain_id === "83gwk2j7zqz1nxyd" && body.recipients[0] === "test@example.com" && body.patterns[0] === ".*@example.com")
      .reply(200, { data: [{ id: "block_id" }] }, { header1: "block-header" });
    const blockedRecipient = await recipientModule.blockRecipients(recipients);
    expect(blockedRecipient.headers).toMatchObject({ header1: "block-header", "content-type": "application/json" });
    expect(blockedRecipient.body).toMatchObject({ data: [{ id: "block_id" }] });
    expect(blockedRecipient.statusCode).toBe(200);
  });
  it("delete block recipients by ids", async () => {
    nock("http://test.com").delete("/suppressions/blocklist", (body: any) => Array.isArray(body.ids) && body.ids[0] === "60f198790542d97fb66dfe52").reply(200, {}, { header1: "block-header" });
    const ids = ["60f198790542d97fb66dfe52", "60f198790542d97fb66dfe53"];
    const removed = await recipientModule.delBlockListRecipients(ids);
    expect(removed.headers).toMatchObject({ header1: "block-header", "content-type": "application/json" });
    expect(removed.body).toMatchObject({});
    expect(removed.statusCode).toBe(200);
  });
  it("delete all block recipients", async () => {
    nock("http://test.com").delete("/suppressions/blocklist", (body: any) => body.all === true).reply(200, {}, { header1: "block-header" });
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
  it("on-hold-list", async () => {
    const params = { limit: 20, page: 2 };
    nock("http://test.com")
      .get("/suppressions/on-hold-list")
      .query(params)
      .reply(200, { data: [{ id: "id_here" }] }, { header1: "on-hold-header" });
    const onHoldList = await recipientModule.blockList(params, BlockListType.ON_HOLD_LIST);
    expect(onHoldList.headers).toMatchObject({ header1: "on-hold-header", "content-type": "application/json" });
    expect(onHoldList.body).toMatchObject({ data: [{ id: "id_here" }] });
    expect(onHoldList.statusCode).toBe(200);
  });
  it("block hard bounces", async () => {
    const data: BlockListRecipientsPost = { domain_id: "test_domain_id", recipients: ["bounce@example.com"] };
    nock("http://test.com")
      .post("/suppressions/hard-bounces", (body: any) => body.domain_id === "test_domain_id" && body.recipients[0] === "bounce@example.com")
      .reply(200, { data: [{ id: "block_id" }] }, { header1: "hard-bounces-header" });
    const result = await recipientModule.blockRecipients(data, BlockListType.HARD_BOUNCES_LIST);
    expect(result.statusCode).toBe(200);
  });
  it("block spam complaints", async () => {
    const data: BlockListRecipientsPost = { domain_id: "test_domain_id", recipients: ["spam@example.com"] };
    nock("http://test.com")
      .post("/suppressions/spam-complaints", (body: any) => body.domain_id === "test_domain_id" && body.recipients[0] === "spam@example.com")
      .reply(200, { data: [{ id: "block_id" }] }, { header1: "spam-complaints-header" });
    const result = await recipientModule.blockRecipients(data, BlockListType.SPAM_COMPLAINTS_LIST);
    expect(result.statusCode).toBe(200);
  });
  it("block unsubscribes", async () => {
    const data: BlockListRecipientsPost = { domain_id: "test_domain_id", recipients: ["unsub@example.com"] };
    nock("http://test.com")
      .post("/suppressions/unsubscribes", (body: any) => body.domain_id === "test_domain_id" && body.recipients[0] === "unsub@example.com")
      .reply(200, { data: [{ id: "block_id" }] }, { header1: "unsubscribes-header" });
    const result = await recipientModule.blockRecipients(data, BlockListType.UNSUBSCRIBES_LIST);
    expect(result.statusCode).toBe(200);
  });
  it("delete hard bounces by ids", async () => {
    const ids = ["hb_id_1", "hb_id_2"];
    nock("http://test.com")
      .delete("/suppressions/hard-bounces", (body: any) => Array.isArray(body.ids) && body.ids[0] === "hb_id_1")
      .reply(204, {}, { header1: "hard-bounces-header" });
    const result = await recipientModule.delBlockListRecipients(ids, BlockListType.HARD_BOUNCES_LIST);
    expect(result.statusCode).toBe(204);
  });
  it("delete all hard bounces", async () => {
    nock("http://test.com")
      .delete("/suppressions/hard-bounces", (body: any) => body.all === true)
      .reply(204, {}, { header1: "hard-bounces-header" });
    const result = await recipientModule.delAllBlockListRecipients(BlockListType.HARD_BOUNCES_LIST);
    expect(result.statusCode).toBe(204);
  });
  it("delete spam complaints by ids", async () => {
    const ids = ["sc_id_1", "sc_id_2"];
    nock("http://test.com")
      .delete("/suppressions/spam-complaints", (body: any) => Array.isArray(body.ids) && body.ids[0] === "sc_id_1")
      .reply(204, {}, { header1: "spam-complaints-header" });
    const result = await recipientModule.delBlockListRecipients(ids, BlockListType.SPAM_COMPLAINTS_LIST);
    expect(result.statusCode).toBe(204);
  });
  it("delete all spam complaints", async () => {
    nock("http://test.com")
      .delete("/suppressions/spam-complaints", (body: any) => body.all === true)
      .reply(204, {}, { header1: "spam-complaints-header" });
    const result = await recipientModule.delAllBlockListRecipients(BlockListType.SPAM_COMPLAINTS_LIST);
    expect(result.statusCode).toBe(204);
  });
  it("delete unsubscribes by ids", async () => {
    const ids = ["unsub_id_1", "unsub_id_2"];
    nock("http://test.com")
      .delete("/suppressions/unsubscribes", (body: any) => Array.isArray(body.ids) && body.ids[0] === "unsub_id_1")
      .reply(204, {}, { header1: "unsubscribes-header" });
    const result = await recipientModule.delBlockListRecipients(ids, BlockListType.UNSUBSCRIBES_LIST);
    expect(result.statusCode).toBe(204);
  });
  it("delete all unsubscribes", async () => {
    nock("http://test.com")
      .delete("/suppressions/unsubscribes", (body: any) => body.all === true)
      .reply(204, {}, { header1: "unsubscribes-header" });
    const result = await recipientModule.delAllBlockListRecipients(BlockListType.UNSUBSCRIBES_LIST);
    expect(result.statusCode).toBe(204);
  });
  it("delete on-hold-list by ids", async () => {
    const ids = ["oh_id_1", "oh_id_2"];
    nock("http://test.com")
      .delete("/suppressions/on-hold-list", (body: any) => Array.isArray(body.ids) && body.ids[0] === "oh_id_1")
      .reply(204, {}, { header1: "on-hold-header" });
    const result = await recipientModule.delBlockListRecipients(ids, BlockListType.ON_HOLD_LIST);
    expect(result.statusCode).toBe(204);
  });
  it("delete all on-hold-list", async () => {
    nock("http://test.com")
      .delete("/suppressions/on-hold-list", (body: any) => body.all === true)
      .reply(204, {}, { header1: "on-hold-header" });
    const result = await recipientModule.delAllBlockListRecipients(BlockListType.ON_HOLD_LIST);
    expect(result.statusCode).toBe(204);
  });

  describe("limit validation", () => {
    test.each([
      ["blocklist limit below minimum", 9],
      ["blocklist limit above maximum", 101],
    ])("%s", async (_label, limit) => {
      await expect(recipientModule.blockList({ limit }, BlockListType.BLOCK_LIST)).rejects.toThrow("Limit must be between 10 and 100.");
    });

    test.each([
      ["hard-bounces limit below minimum", 9],
      ["hard-bounces limit above maximum", 101],
    ])("%s", async (_label, limit) => {
      await expect(recipientModule.blockList({ limit }, BlockListType.HARD_BOUNCES_LIST)).rejects.toThrow("Limit must be between 10 and 100.");
    });

    test.each([
      ["spam-complaints limit below minimum", 9],
      ["spam-complaints limit above maximum", 101],
    ])("%s", async (_label, limit) => {
      await expect(recipientModule.blockList({ limit }, BlockListType.SPAM_COMPLAINTS_LIST)).rejects.toThrow("Limit must be between 10 and 100.");
    });

    test.each([
      ["unsubscribes limit below minimum", 9],
      ["unsubscribes limit above maximum", 101],
    ])("%s", async (_label, limit) => {
      await expect(recipientModule.blockList({ limit }, BlockListType.UNSUBSCRIBES_LIST)).rejects.toThrow("Limit must be between 10 and 100.");
    });

    test.each([
      ["on-hold-list limit below minimum", 9],
      ["on-hold-list limit above maximum", 101],
    ])("%s", async (_label, limit) => {
      await expect(recipientModule.blockList({ limit }, BlockListType.ON_HOLD_LIST)).rejects.toThrow("Limit must be between 10 and 100.");
    });
  });

  describe("blockRecipients blocklist — mutual requirement", () => {
    it("throws when neither recipients nor patterns are provided", async () => {
      await expect(recipientModule.blockRecipients({})).rejects.toThrow("Either recipients or patterns must be provided.");
    });

    it("throws when recipients is empty and patterns is absent", async () => {
      await expect(recipientModule.blockRecipients({ recipients: [] })).rejects.toThrow("Either recipients or patterns must be provided.");
    });

    it("throws when patterns is empty and recipients is absent", async () => {
      await expect(recipientModule.blockRecipients({ patterns: [] })).rejects.toThrow("Either recipients or patterns must be provided.");
    });

    it("succeeds with only recipients", async () => {
      nock("http://test.com")
        .post("/suppressions/blocklist", (body: any) => Array.isArray(body.recipients) && body.recipients[0] === "only@example.com")
        .reply(200, { data: [] }, {});
      const result = await recipientModule.blockRecipients({ recipients: ["only@example.com"] });
      expect(result.statusCode).toBe(200);
    });

    it("succeeds with only patterns", async () => {
      nock("http://test.com")
        .post("/suppressions/blocklist", (body: any) => Array.isArray(body.patterns) && body.patterns[0] === ".*@example.com")
        .reply(200, { data: [] }, {});
      const result = await recipientModule.blockRecipients({ patterns: [".*@example.com"] });
      expect(result.statusCode).toBe(200);
    });
  });

  describe("blockRecipients — empty recipients validation", () => {
    test.each([
      ["hard-bounces", BlockListType.HARD_BOUNCES_LIST],
      ["spam-complaints", BlockListType.SPAM_COMPLAINTS_LIST],
      ["unsubscribes", BlockListType.UNSUBSCRIBES_LIST],
    ])("throws when recipients is empty for %s", async (_label, type) => {
      await expect(
        recipientModule.blockRecipients({ domain_id: "test_domain_id", recipients: [] }, type as BlockListType.HARD_BOUNCES_LIST | BlockListType.SPAM_COMPLAINTS_LIST | BlockListType.UNSUBSCRIBES_LIST)
      ).rejects.toThrow("Recipients must not be empty.");
    });
  });
});
