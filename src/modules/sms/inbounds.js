module.exports = {
    getSmsInbounds(params) {
        return this.request(`/sms-inbounds`, {
            method: "GET",
            params
        });
    },

    getSmsInbound(params) {
        const { sms_inbound_id } = params;

        return this.request(`/sms-inbounds/${sms_inbound_id}`, {
            method: "GET"
        });
    },

    createSmsInbound(params) {
        return this.request(`/sms-inbounds`, {
            method: "POST",
            body: params
        });
    },

    updateSmsInbound(params) {
        const { sms_inbound_id, ...bodyParams } = params;

        return this.request(`/sms-inbounds/${sms_inbound_id}`, {
            method: "PUT",
            body: bodyParams
        });
    },

    deleteSmsInbound(params) {
        const { sms_inbound_id } = params;

        return this.request(`/sms-inbounds/${sms_inbound_id}`, {
            method: "DELETE"
        });
    },
}
