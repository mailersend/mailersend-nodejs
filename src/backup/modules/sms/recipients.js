module.exports = {
    getSmsRecipients(params) {
        return this.request(`/sms-recipients`, {
            method: "GET",
            params
        });
    },

    getSmsRecipient(params) {
        const { sms_recipient_id } = params;

        return this.request(`/sms-recipients/${sms_recipient_id}`, {
            method: "GET"
        });
    },

    updateSmsRecipient(params) {
        const { sms_recipient_id, ...bodyParams } = params;

        return this.request(`/sms-recipients/${sms_recipient_id}`, {
            method: "PUT",
            body: bodyParams
        });
    },
}
