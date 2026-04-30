import nock from "nock";
import { ActivityModule } from "../../modules/email/Activity.module";

describe("Activity Module", () => {
  const activityModule = new ActivityModule("test_key", "http://test.com");

  it("domain", async () => {
    nock("http://test.com")
      .get("/activity/test_id")
      .query({ limit: 20, page: 2, date_from: 1672531200, date_to: 1675209600 })
      .reply(200, { key1: "key1_value" }, { header1: "test" });
    const getActivities = await activityModule.domain("test_id", { limit: 20, page: 2, date_from: 1672531200, date_to: 1675209600 });
    expect(getActivities.headers).toMatchObject({ header1: "test", "content-type": "application/json" });
    expect(getActivities.body).toMatchObject({ key1: "key1_value" });
    expect(getActivities.statusCode).toBe(200);
  });

  it("single", async () => {
    nock("http://test.com").get("/activities/test_activity_id").reply(200, { key1: "activity_value" }, { header1: "test" });
    const result = await activityModule.single("test_activity_id");
    expect(result.headers).toMatchObject({ header1: "test", "content-type": "application/json" });
    expect(result.body).toMatchObject({ key1: "activity_value" });
    expect(result.statusCode).toBe(200);
  });
});
