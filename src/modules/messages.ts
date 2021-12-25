export const messages = {
  messagesList(params) {
    return this.request(`/messages`, {
      method: 'GET',
      params,
    });
  },

  message(params) {
    const { message_id } = params;

    return this.request(`/messages/${message_id}`, {
      method: 'GET',
    });
  },
};
