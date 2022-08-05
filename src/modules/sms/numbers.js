module.exports = {
    getSmsNumbers(params) {
        return this.request("/sms-numbers", {
            method: "GET",
            params
        });
    },

    getSmsNumber(params) {
        const { sms_number_id } = params;

        return this.request(`/sms-numbers/${sms_number_id}`, {
            method: "GET"
        });
    },

    updateSmsNumber(params) {
        const { sms_number_id, ...bodyParams } = params;

        return this.request(`/sms-numbers/${sms_number_id}`, {
            method: "PUT",
            body: bodyParams
        });
    },

    deleteSmsNumber(params) {
        const { sms_number_id } = params;

        return this.request(`/sms-numbers/${sms_number_id}`, {
            method: "DELETE"
        });
    },
}
