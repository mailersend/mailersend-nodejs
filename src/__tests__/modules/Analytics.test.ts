import nock from "nock";
import { AnalyticsModule } from "../../modules/email/Analytics.module";
import { ActivityEventType } from "../../models/email/Activity";
import { AnalyticsGroupByType } from "../../models";

describe("Analytics Module", () => {
  const analyticsModule = new AnalyticsModule("test_key", "http://test.com");
  const baseParams = { date_from: 1672531200, date_to: 1675209600, domain_id: "test_domain_id" };

  it("byDate", async () => {
    nock("http://test.com").get("/analytics/date").query(baseParams).reply(200, { key1: "date_value" }, { header1: "test" });
    const result = await analyticsModule.byDate(baseParams);
    expect(result.headers).toMatchObject({ header1: "test", "content-type": "application/json" });
    expect(result.body).toMatchObject({ key1: "date_value" });
    expect(result.statusCode).toBe(200);
  });

  it("byCountry", async () => {
    nock("http://test.com").get("/analytics/country").query(baseParams).reply(200, { key1: "country_value" }, { header1: "test" });
    const result = await analyticsModule.byCountry(baseParams);
    expect(result.headers).toMatchObject({ header1: "test", "content-type": "application/json" });
    expect(result.body).toMatchObject({ key1: "country_value" });
    expect(result.statusCode).toBe(200);
  });

  it("byUserAgent", async () => {
    nock("http://test.com").get("/analytics/ua-name").query(baseParams).reply(200, { key1: "ua_value" }, { header1: "test" });
    const result = await analyticsModule.byUserAgent(baseParams);
    expect(result.headers).toMatchObject({ header1: "test", "content-type": "application/json" });
    expect(result.body).toMatchObject({ key1: "ua_value" });
    expect(result.statusCode).toBe(200);
  });

  it("byReadingEnvironment", async () => {
    nock("http://test.com").get("/analytics/ua-type").query(baseParams).reply(200, { key1: "ua_type_value" }, { header1: "test" });
    const result = await analyticsModule.byReadingEnvironment(baseParams);
    expect(result.headers).toMatchObject({ header1: "test", "content-type": "application/json" });
    expect(result.body).toMatchObject({ key1: "ua_type_value" });
    expect(result.statusCode).toBe(200);
  });

  it("byDate with event and group_by", async () => {
    const dateParams = { ...baseParams, group_by: AnalyticsGroupByType.DAYS, event: [ActivityEventType.CLICKED, ActivityEventType.OPENED] };
    nock("http://test.com").get("/analytics/date").query(dateParams).reply(200, { key1: "date_grouped_value" }, { header1: "test" });
    const result = await analyticsModule.byDate(dateParams);
    expect(result.headers).toMatchObject({ header1: "test", "content-type": "application/json" });
    expect(result.body).toMatchObject({ key1: "date_grouped_value" });
    expect(result.statusCode).toBe(200);
  });

  it("byDate with tags and recipient_id", async () => {
    const params = { ...baseParams, tags: ["tag1", "tag2"], recipient_id: ["rcpt_id_1"] };
    nock("http://test.com").get("/analytics/date").query(params).reply(200, { key1: "date_value" }, { header1: "test" });
    const result = await analyticsModule.byDate(params);
    expect(result.statusCode).toBe(200);
  });

  it("byCountry with tags and recipient_id", async () => {
    const params = { ...baseParams, tags: ["tag1"], recipient_id: ["rcpt_id_1"] };
    nock("http://test.com").get("/analytics/country").query(params).reply(200, { key1: "country_value" }, { header1: "test" });
    const result = await analyticsModule.byCountry(params);
    expect(result.statusCode).toBe(200);
  });

  it("byUserAgent with tags and recipient_id", async () => {
    const params = { ...baseParams, tags: ["tag1"], recipient_id: ["rcpt_id_1"] };
    nock("http://test.com").get("/analytics/ua-name").query(params).reply(200, { key1: "ua_value" }, { header1: "test" });
    const result = await analyticsModule.byUserAgent(params);
    expect(result.statusCode).toBe(200);
  });

  it("byReadingEnvironment with tags and recipient_id", async () => {
    const params = { ...baseParams, tags: ["tag1"], recipient_id: ["rcpt_id_1"] };
    nock("http://test.com").get("/analytics/ua-type").query(params).reply(200, { key1: "ua_type_value" }, { header1: "test" });
    const result = await analyticsModule.byReadingEnvironment(params);
    expect(result.statusCode).toBe(200);
  });
});
