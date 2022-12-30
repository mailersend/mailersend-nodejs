module.exports = {
  emailVerificationLists(params) {
    return this.request("/email-verification", {
      method: "GET",
      params
    });
  },

  emailVerificationList(params) {
    const { email_verification_id } = params

    return this.request(`/email-verification/${email_verification_id}`, {
      method: "GET"
    });
  },

  createEmailVerificationList(params) {
    return this.request(`/email-verification`,{
      method: "POST",
      params
    })
  },

  verifyEmailVerificationList(params) {
    const { email_verification_id } = params

    return this.request(`/email-verification/${email_verification_id}/verify`, {
      method: "GET"
    });
  },

  emailVerificationResults(params) {
    const { email_verification_id } = params

    return this.request(`/email-verification/${email_verification_id}/results`, {
      method: "GET"
    });
  },
}
