module.exports = {
  activityList(params) {
    const { domain_id, ...queryParams } = params
    let queryString = new URLSearchParams(queryParams).toString()
    queryString = queryString ? `?${queryString}` : ''

    return this.request(`/activity/${domain_id}${queryString}`, {
      method: "GET",
    });
  },
}
