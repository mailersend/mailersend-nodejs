module.exports = {
  webhooksList(params) {
    return this.request(`/webhooks`, {
      method: "GET",
      params
    });
  },

  webhook(params) {
    const { webhook_id } = params

    return this.request(`/webhooks/${webhook_id}`, {
      method: "GET"
    });
  },

  createWebhook(params) {
    return this.request(`/webhooks`, {
      method: "POST",
      params
    });
  },

  updateWebhook(params) {
    const { webhook_id, ...queryParams } = params

    return this.request(`/webhooks/${webhook_id}`, {
      method: "PUT",
      params: queryParams
    });
  },

  deleteWebhook(params) {
    const { webhook_id } = params

    return this.request(`/webhooks/${webhook_id}`, {
      method: "DELETE"
    });
  },
}
