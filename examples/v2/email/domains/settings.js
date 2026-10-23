import 'dotenv/config';
import { MailerSend } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.email.domain.updateSettings("domain_id", {
  send_paused: true,
  track_clicks: true,
  track_opens: true,
  track_unsubscribe: true,
  track_unsubscribe_html: '<p>Click here to <a href="{{unsubscribe}}">unsubscribe</a></p>',
  track_unsubscribe_plain: "Click here to unsubscribe: {{unsubscribe}}",
  track_content: true,
  custom_tracking_enabled: true,
  custom_tracking_subdomain: "subdomain",
  precedence_bulk: true,
  ignore_duplicated_recipients: true,
})
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));
