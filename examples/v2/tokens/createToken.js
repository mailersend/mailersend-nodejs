import 'dotenv/config';
import { MailerSend, Token, TokenScopeType } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

const token = new Token("Token name", [
  TokenScopeType.EMAIL_FULL,
  TokenScopeType.DOMAINS_READ,
  TokenScopeType.DOMAINS_FULL,
  TokenScopeType.ACTIVITY_READ,
  TokenScopeType.ACTIVITY_FULL,
  TokenScopeType.ANALYTICS_READ,
  TokenScopeType.ANALYTICS_FULL,
  TokenScopeType.TOKENS_FULL,
], "domain_id");

mailerSend.token.create(token)
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));
