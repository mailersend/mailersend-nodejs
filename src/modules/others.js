module.exports = {
    getApiQuota() {
        return this.request(`/api-quota`, {
            method: "GET"
        });
    },
}
