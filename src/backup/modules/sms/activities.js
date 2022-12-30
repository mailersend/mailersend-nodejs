module.exports = {
    getSmsActivities(params) {
        return this.request("/sms-activity", {
            method: "GET",
            params
        });
    },

    getSmsActivity(params) {
        const { sms_message_id } = params;

        return this.request(`/sms-activity/${sms_message_id}`, {
            method: "GET"
        });
    },
}
