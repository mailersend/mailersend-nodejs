import 'dotenv/config';
import { MailerSend, Domain } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

const domain = new Domain({
  name: "example.com",
  returnPathSubdomain: "rp_subdomain",
  customTrackingSubdomain: "ct_subdomain",
  inboundRoutingSubdomain: "ir_subdomain",
})

mailerSend.email.domain.create(domain)
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));
