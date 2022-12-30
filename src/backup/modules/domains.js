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

  deleteDomain(params) {
    const { domain_id } = params

    return this.request(`/domains/${domain_id}`, {
      method: "DELETE"
    });
  },

  domainRecipients(params) {
    const { domain_id, queryParams } = params

    return this.request(`/domains/${domain_id}/recipients`, {
      method: "GET",
      params: queryParams
    });
  },

  domainSettings(params) {
    const { domain_id, queryParams } = params

    return this.request(`/domains/${domain_id}/settings`, {
      method: "PUT",
      params: queryParams
    });
  },

  addDomain(params){
    return this.request(`/domains`,{
      method: "POST",
      params
    })
  },

  getDNS(params){
    const {domain_id} = params
    return this.request(`/domains/${domain_id}/dns-records`,{
      method: "GET"
    })
  },

  verifyDomain(params){
    const {domain_id} = params
    return this.request(`/domains/${domain_id}/verify`,{
      method: "GET"
    })
  }
}
