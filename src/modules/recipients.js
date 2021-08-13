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

  addRecipientsToBlocklist(params) {
    return this.request(`/suppressions/blocklist`, {
      method: "POST",
      params
    });
  },

  addRecipientsToHardBounceList(params) {
    return this.request(`/suppressions/hard-bounces`, {
      method: "POST",
      params
    });
  },

  addRecipientsToSpamComplaintList(params) {
    return this.request(`/suppressions/spam-complaints`, {
      method: "POST",
      params
    });
  },

  addRecipientsToUnsubscribeList(params) {
    return this.request(`/suppressions/unsubscribes`, {
      method: "POST",
      params
    });
  },
}
