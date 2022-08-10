module.exports = {
    getSmsWebhooks(params) {
        return this.request(`/sms-webhooks`, {
            method: "GET",
            params: params
        });
    },

    getSmsWebhook(params) {
        const { sms_webhook_id } = params;

        return this.request(`/sms-webhooks/${sms_webhook_id}`, {
            method: "GET"
        });
    },

    createSmsWebhook(params) {
        return this.request(`/sms-webhooks`, {
            method: "POST",
            body: params
        });
    },

    updateSmsWebhook(params) {
        const { sms_webhook_id, ...bodyParams } = params;

        return this.request(`/sms-webhooks/${sms_webhook_id}`, {
            method: "PUT",
            body: bodyParams
        });
    },

    deleteSmsWebhook(params) {
        const { sms_webhook_id } = params;

        return this.request(`/sms-webhooks/${sms_webhook_id}`, {
            method: "DELETE"
        });
    },
}
