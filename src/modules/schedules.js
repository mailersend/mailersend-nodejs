module.exports = {
    scheduleList(params) {
        return this.request(`/message-schedules`, {
            method: "GET",
            params
        });
    },

    schedule(params) {
        const { message_id } = params;

        return this.request(`/message-schedules/${message_id}`, {
            method: "GET"
        });
    },

    deleteSchedule(params) {
        const { message_id } = params;

        return this.request(`/message-schedules/${message_id}`, {
            method: "DELETE"
        });
    },
}
