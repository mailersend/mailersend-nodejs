module.exports = {
  domainList(params) {
    return this.request("/domains", {
      method: "GET",
      params
    });
  },
}
