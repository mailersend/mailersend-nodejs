const SmsObject = require("../SmsObject");

module.exports = {
    sendSms(smsParams) {
        let smsObject = new SmsObject(smsParams);

        return this.request("/sms", {
            method: "POST",
            body: smsObject.data
        });
    },
}
