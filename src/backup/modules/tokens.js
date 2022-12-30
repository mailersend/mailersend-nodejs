module.exports = {
  //TOKENS
  createToken(createTokenParams) {
    const { name, scopes, domain_id } = createTokenParams;

    const scopesArray = [
      "email_full",
      "domains_read",
      "domains_full",
      "activity_read",
      "activity_full",
      "analytics_read",
      "analytics_full",
      "tokens_full",
    ];

    //Check for required values name and scopes
    if (!name || !scopes || !domain_id) {
      err = new Error(
        "Please include a name, domain_id and scopes in your request"
      );
      throw err;
    }

    //Check if scopes have values
    if (scopes.length < 1) {
      throw new Error("You need to add at least 1 scope");
    }

    //Check if all values in scopes array are valid.
    for (let i = 0; i < scopes.length; i++) {
      const scope = scopes[i];
      if (!scopesArray.includes(scope)) {
        throw new Error(`"${scope}" is not a valid value for scopes`);
      }
    }

    //Check if name value is not bigger than 191 characters
    if (name.length > 191) {
      throw new Error("Token name has to be less than 191 characters");
    }

    return this.request("/token", {
      method: "POST",
      body: createTokenParams
    });
  },

  updateToken(updateTokenParams) {
    const { token_id, status } = updateTokenParams;

    if (!token_id) {
      throw new Error("Please provide a valid token_id");
    }

    if (!['pause', 'unpause'].includes(status)) {
      throw new Error("Please provide a valid status");
    }

    return this.request(`/token/${token_id}/settings`, {
      method: "PUT",
      body: {
        status: status,
      }
    });
  },

  deleteToken(deleteTokenParams) {
    const { token_id } = deleteTokenParams;

    //Check if token_id was provided
    if (!token_id) {
      throw new Error("Please provide a valid token_id");
    }

    return this.request(`/token/${token_id}`, {
      method: "DELETE"
    });
  }
}
