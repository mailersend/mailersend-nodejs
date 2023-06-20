import 'dotenv/config';
import { MailerSend, Inbound, InboundFilterType } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

const inbound = new Inbound()
  .setDomainId('domain_id')
  .setName('inbound test')
  .setDomainEnabled(true)
  .setInboundPriority(100)
  .setMatchFilter({
    type: InboundFilterType.MATCH_ALL,
  })
  .setForwards([
    {
      type: "webhook",
      value: "https://www.yourdomain.com/hook"
    }
  ]);

mailerSend.email.inbound.create(inbound)
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));
