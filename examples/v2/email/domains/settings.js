import 'dotenv/config';
import { MailerSend } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.email.domain.updateSettings("domain_id", {
  send_paused: 1,
  track_clicks: 1,
  track_opens: 1,
  track_unsubscribe: 1,
  track_unsubscribe_html: "<strong> Unsubscribe now </strong>",
  track_unsubscribe_plain: "Unsubscribe now",
  track_content: 1,
  custom_tracking_enabled: 1,
  custom_tracking_subdomain: "subdomain",
  precedence_bulk: 1,
  ignore_duplicated_recipients: 1,
})
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));
