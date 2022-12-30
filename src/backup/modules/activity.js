module.exports = {
  activityList(params) {
    const { domain_id, ...queryParams } = params

    return this.request(`/activity/${domain_id}`, {
      method: "GET",
      params: queryParams
    });
  },

  activityByDate(params) {
    return this.request("/analytics/date", {
      method: "GET",
      params
    });
  },

  activityByCountry(params) {
    return this.request("/analytics/country", {
      method: "GET",
      params
    });
  },

  activityByReadingEnvironment(params) {
    return this.request("/analytics/ua-type", {
      method: "GET",
      params
    });
  },
}
