import 'dotenv/config';
import { MailerSend, Inbound, InboundFilterType, ComparerType } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

const inbound = new Inbound('inbound test', true, 'domain_id')
  .setInboundDomain('inbound.yourdomain.com')
  .setInboundPriority(100)
  .setMatchFilter({
    type: InboundFilterType.MATCH_ALL,
  })
  .setCatchFilter({
    type: InboundFilterType.CATCH_RECIPIENT,
    filters: [
      {
        comparer: ComparerType.EQUAL,
        value: "support",
      },
    ],
  })
  .setCatchType("one")
  .setForwards([
    {
      type: "webhook",
      value: "https://www.yourdomain.com/hook"
    }
  ])
  .setIncludeAttachments(false);

mailerSend.email.inbound.create(inbound)
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));
