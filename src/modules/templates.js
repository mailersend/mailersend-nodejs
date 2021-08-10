module.exports = {
    templateList(params = {}) {
      return this.request("/templates", {
        method: "GET",
        params
      });
    },
  
    template(params) {
      const { template_id } = params;
  
      return this.request(`/templates/${template_id}`, {
        method: "GET"
      });
    },
  
    deleteTemplate(params) {
      const { template_id } = params;
  
      return this.request(`/templates/${template_id}`, {
        method: "DELETE"
      });
    },
};