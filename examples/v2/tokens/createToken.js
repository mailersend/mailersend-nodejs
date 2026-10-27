import 'dotenv/config';
import { MailerSend, Token} from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

const token = new Token()
  .setName("Token name")
  .setDomainId("domain_id")
  .setScopes([
    "email_full",
    "domains_read",
    "domains_full",
    "activity_read",
    "activity_full",
    "analytics_read",
    "analytics_full",
    "tokens_full",
  ]);

mailerSend.token.create(token)
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));
