import nock from "nock";
import { ScheduleModule } from "../../modules/email/Schedule.module";

describe("Schedule Module", () => {
  const scheduleModule = new ScheduleModule("test_key", "http://test.com");

  it("list", async () => {
    const params = { domain_id: "domain_id", status: "scheduled" as const, page: 1, limit: 10 };
    nock("http://test.com").get("/message-schedules").query(params).reply(200, { key1: "schedule_list" }, { header1: "test" });
    const result = await scheduleModule.list(params);
    expect(result.headers).toMatchObject({ header1: "test", "content-type": "application/json" });
    expect(result.body).toMatchObject({ key1: "schedule_list" });
    expect(result.statusCode).toBe(200);
  });

  it("single", async () => {
    nock("http://test.com").get("/message-schedules/test_message_id").reply(200, { key1: "schedule_value" }, { header1: "test" });
    const result = await scheduleModule.single("test_message_id");
    expect(result.headers).toMatchObject({ header1: "test", "content-type": "application/json" });
    expect(result.body).toMatchObject({ key1: "schedule_value" });
    expect(result.statusCode).toBe(200);
  });

  it("delete", async () => {
    nock("http://test.com").delete("/message-schedules/test_message_id").reply(204);
    const result = await scheduleModule.delete("test_message_id");
    expect(result.statusCode).toBe(204);
  });
});
