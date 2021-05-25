module.exports = {
  domainList(params) {
    return this.request("/domains", {
      method: "GET",
      params
    });
  },

  domain(params) {
    const { domain_id } = params

    return this.request(`/domains/${domain_id}`, {
      method: "GET"
    });
  },
}
