module.exports = {
  recipientsList(params) {
    return this.request(`/recipients`, {
      method: "GET",
      params
    });
  },

  recipient(params) {
    const { recipient_id } = params

    return this.request(`/recipients/${recipient_id}`, {
      method: "GET"
    });
  },

  deleteRecipient(params) {
    const { recipient_id } = params

    return this.request(`/recipients/${recipient_id}`, {
      method: "DELETE"
    });
  },
}
