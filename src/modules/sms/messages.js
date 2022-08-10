module.exports = {
    getSmsMessages(params) {
        return this.request("/sms-messages", {
            method: "GET",
            params
        });
    },

    getSmsMessage(params) {
        const { sms_message_id } = params;

        return this.request(`/sms-numbers/${sms_message_id}`, {
            method: "GET"
        });
    },
}
