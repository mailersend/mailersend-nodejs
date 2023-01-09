import * as nock from "nock";
import { EmailVerification } from "../../models";
import { EmailVerificationModule } from "../../modules/EmailVerification.module";

describe("Email Verification Module", () => {
    const emailVerificationModule = new EmailVerificationModule("test_key", "http://test.com");

    it("create", async () => {
        const emailVerification = new EmailVerification("List example", [
            "info@mailersend.com",
            "test@mailersend.com"
        ]);

        nock("http://test.com").post("/email-verification").reply(
            200,
            {
                id: "dle1krod2jvn8gwm",
                name: "Example List"
            },
            { header1: "test" },
        );
        const createEmailVerificationList = await emailVerificationModule.create(emailVerification);
        expect(createEmailVerificationList.headers).toMatchObject({ header1: "test", "content-type": "application/json" });
        expect(createEmailVerificationList.body).toMatchObject({ id: "dle1krod2jvn8gwm", name: "Example List" });
        expect(createEmailVerificationList.statusCode).toBe(200);
    });

    it("list", async () => {
        const params = { limit: 20, page: 2};
        nock("http://test.com").get("/email-verification").query(params).reply(200, { key1: "key1_value" }, { header1: "test" });
        const getEmailVerifications = await emailVerificationModule.list(params);
        expect(getEmailVerifications.headers).toMatchObject({ header1: "test", "content-type": "application/json" });
        expect(getEmailVerifications.body).toMatchObject({ key1: "key1_value" });
        expect(getEmailVerifications.statusCode).toBe(200);
    });

    it("single", async () => {
        nock("http://test.com").get("/email-verification/test_id").reply(200, { key1: "key1_value" }, { header1: "test" });
        const getEmailVerification = await emailVerificationModule.single("test_id");
        expect(getEmailVerification.headers).toMatchObject({ header1: "test", "content-type": "application/json" });
        expect(getEmailVerification.body).toMatchObject({ key1: "key1_value" });
        expect(getEmailVerification.statusCode).toBe(200);
    });

    it("verify list", async () => {
        nock("http://test.com").get("/email-verification/test_id/verify").reply(200, { key1: "key1_value" }, { header1: "test" });
        const verifyEmailVerification = await emailVerificationModule.verifyList("test_id");
        expect(verifyEmailVerification.headers).toMatchObject({ header1: "test", "content-type": "application/json" });
        expect(verifyEmailVerification.body).toMatchObject({ key1: "key1_value" });
        expect(verifyEmailVerification.statusCode).toBe(200);
    });

    it("get list result", async () => {
        const params = { limit: 10, page: 1};
        nock("http://test.com").get("/email-verification/test_id/results").query(params).reply(200, { key1: "key1_value" }, { header1: "test" });
        const getListResult = await emailVerificationModule.getListResult("test_id", params);
        expect(getListResult.headers).toMatchObject({ header1: "test", "content-type": "application/json" });
        expect(getListResult.body).toMatchObject({ key1: "key1_value" });
        expect(getListResult.statusCode).toBe(200);
    });

    it("verify email", async () => {
        nock("http://test.com").post("/email-verification/verify").reply(200, { message: "valid" }, { header1: "test" });
        const verifyEmail = await emailVerificationModule.verifyEmail("email@email.com");
        expect(verifyEmail.headers).toMatchObject({ header1: "test", "content-type": "application/json" });
        expect(verifyEmail.body).toMatchObject({ message: "valid" });
        expect(verifyEmail.statusCode).toBe(200);
    });
});
