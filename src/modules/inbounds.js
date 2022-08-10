module.exports = {
    inboundList(params) {
        return this.request(`/inbound`, {
            method: "GET",
            params
        });
    },

    inbound(params) {
        const { inbound_id } = params;

        return this.request(`/inbound/${inbound_id}`, {
            method: "GET"
        });
    },

    createInbound(params) {
        return this.request(`/inbound`, {
            method: "POST",
            body: params
        });
    },

    updateInbound(params) {
        const { inbound_id, ...bodyParams } = params;

        return this.request(`/inbound/${inbound_id}`, {
            method: "PUT",
            body: bodyParams
        });
    },

    deleteInbound(params) {
        const { inbound_id } = params;

        return this.request(`/inbound/${inbound_id}`, {
            method: "DELETE"
        });
    },
}
