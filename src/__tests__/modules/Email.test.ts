import * as nock from "nock";
import { EmailModule } from "../../modules/Email.module";
import { EmailParams, Recipient, EmailWebhook, EmailWebhookEventType } from "../../models";
import { ActivityModule } from "../../modules/email/Activity.module";
import { AnalyticsModule } from "../../modules/email/Analytics.module";
import { DomainModule } from "../../modules/email/Domain.module";
import { InboundModule } from "../../modules/email/Inbound.module";
import { MessageModule } from "../../modules/email/Message.module";
import { ScheduleModule } from "../../modules/email/Schedule.module";
import { RecipientModule } from "../../modules/email/Recipient.module";
import { TemplateModule } from "../../modules/email/Template.module";
import { EmailWebhookModule } from "../../modules/email/Webhook.module";

describe("Email Module", () => {
  const emailModule = new EmailModule("test_key", "http://test.com");

  it("Constructor", () => {
    expect(emailModule.activity instanceof ActivityModule).toBe(true);
    expect(emailModule.analytics instanceof AnalyticsModule).toBe(true);
    expect(emailModule.domain instanceof DomainModule).toBe(true);
    expect(emailModule.inbound instanceof InboundModule).toBe(true);
    expect(emailModule.message instanceof MessageModule).toBe(true);
    expect(emailModule.schedule instanceof ScheduleModule).toBe(true);
    expect(emailModule.recipient instanceof RecipientModule).toBe(true);
    expect(emailModule.template instanceof TemplateModule).toBe(true);
    expect(emailModule.webhook instanceof EmailWebhookModule).toBe(true);
  });

  it("send email", async () => {
    nock("http://test.com").post("/email").reply(202, { key1: "key1_value" }, { header1: "test" });
    const emailParams = new EmailParams()
      .setFrom({ email: "some@email.com" })
      .setTo([new Recipient("some_recipient@mail.com")])
      .setSubject("Some subject")
      .setText("Some text")
      .setHtml("Some html");
    const sendEmail = await emailModule.send(emailParams);
    expect(sendEmail.headers).toMatchObject({ header1: "test", "content-type": "application/json" });
    expect(sendEmail.body).toMatchObject({ key1: "key1_value" });
    expect(sendEmail.statusCode).toBe(202);
  });

  it("send email with personalization", async () => {
    const personalization = [
      {
        email: "your@client.com",
        data: {
          test: {
            number: 123434,
          } 
        },
      }
    ];
    nock("http://test.com").post("/email").reply(202, { key1: "key1_value" }, { header1: "test" });
    const emailParams = new EmailParams()
      .setFrom({ email: "some@email.com" })
      .setTo([new Recipient("some_recipient@mail.com")])
      .setSubject("Some subject")
      .setPersonalization(personalization)
      .setText("Some text")
      .setHtml("Some html");
    const sendEmail = await emailModule.send(emailParams);
    expect(sendEmail.headers).toMatchObject({ header1: "test", "content-type": "application/json" });
    expect(sendEmail.body).toMatchObject({ key1: "key1_value" });
    expect(sendEmail.statusCode).toBe(202);
  });

  it("send bulk", async () => {
    nock("http://test.com").post("/bulk-email").reply(202, { key1: "key1_value" }, { header1: "test" });
    const emailParams = new EmailParams()
      .setFrom({ email: "some@email.com" })
      .setTo([new Recipient("some_recipient@mail.com")])
      .setSubject("Some subject")
      .setText("Some text")
      .setHtml("Some html");

    const sendEmail = await emailModule.sendBulk([emailParams]);

    expect(sendEmail.headers).toMatchObject({ header1: "test", "content-type": "application/json" });
    expect(sendEmail.body).toMatchObject({ key1: "key1_value" });

    expect(sendEmail.statusCode).toBe(202);
  });

  it("get bulk", async () => {
    nock("http://test.com").get("/bulk-email/test_id_bulk").reply(202, { key1: "key1_value" }, { header1: "test" });

    const sendEmail = await emailModule.getBulkStatus("test_id_bulk");

    expect(sendEmail.headers).toMatchObject({ header1: "test", "content-type": "application/json" });
    expect(sendEmail.body).toMatchObject({ key1: "key1_value" });

    expect(sendEmail.statusCode).toBe(202);
  });
});
