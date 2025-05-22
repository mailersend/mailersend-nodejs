<a href="https://www.mailersend.com"><img src="https://www.mailersend.com/images/logo.svg" width="200px"/></a>

MailerSend Node.js SDK

[![MIT licensed](https://img.shields.io/npm/l/mailersend)](./LICENSE.md)
![NPM Version](https://img.shields.io/npm/v/mailersend)
![Top language](https://img.shields.io/github/languages/top/IARKI/mailer-send-ts)

<br/>

## Welcome to MailerSend 👋

_Send emails and SMS in minutes_

Developers come for the high deliverability, and stay because our intuitive API and built-in integrations make life easier. 🤝

For more info, you can:

- Visit our [Developers site 💻](https://developers.mailersend.com/) for REST API reference
- Read our [Knowledge base ❓](https://www.mailersend.com/help) for guides on how to use MailerSend
- Contact our [Support team 📨](https://www.mailersend.com/contact-us) if you require more assistance

#### V1 Documentation can be found [here](https://github.com/mailersend/mailersend-nodejs/tree/v1#readme)

<br/>

# Table of Contents

- [Installation](#installation)
  - [Setup](#setup)
- [Usage](#usage)
  - [Email](#email)
    - [Send an email](#send-an-email)
    - [Add CC, BCC recipients](#add-cc-bcc-recipients)
    - [Send a template-based email](#send-a-template-based-email)
    - [Personalization](#advanced-personalization)
    - [Send email with attachment](#send-email-with-attachment)
    - [Send email with inline attachment](#send-email-with-inline-attachment)
    - [Send bulk emails](#send-bulk-emails)
    - [Get bulk request status](#get-bulk-request-status)
  - [Tokens](#tokens)
    - [Create a token](#create-a-token)
    - [Update token](#update-token)
    - [Delete token](#delete-token)
  - [Activity](#activity)
    - [Get activity list](#get-activity-list)
  - [Analytics](#analytics)
    - [Get activity data by date](#get-activity-data-by-date)
    - [Opens by country](#opens-by-country)
    - [Opens by user-agent](#opens-by-user-agent)
    - [Opens by reading environment](#opens-by-reading-environment)
  - [Domains](#domains)
    - [Get a list of domains](#get-a-list-of-domains)
    - [Get domain](#get-domain)
    - [Delete domain](#delete-domain)
    - [Get a list of recipients per domain](#get-a-list-of-recipients-per-domain)
    - [Update domain settings](#update-domain-settings)
    - [Add a domain](#add-a-domain)
    - [Get DNS records](#get-dns-records)
    - [Get verification status](#get-verification-status)
  - [Identity](#identity)
    - [Get identity list](#get-identity-list)
    - [Get identity](#get-identity)
    - [Get identity by email](#get-identity-by-email-address)
    - [Create identity](#create-identity)
    - [Update identity](#update-identity)
    - [Update identity by email](#update-identity-by-email-address)
    - [Delete identity](#delete-identity)
    - [Delete identity by email](#delete-identity-by-email-address)
  - [Inbounds](#inbound)
    - [Get inbound list](#get-inbound-list)
    - [Get inbound](#get-inbound)
    - [Create inbound](#create-inbound)
    - [Update inbound](#update-inbound)
    - [Delete inbound](#delete-inbound)
  - [Messages](#messages)
    - [Get a list of messages](#get-a-list-of-messages)
    - [Get info on a message](#get-info-on-a-message)
  - [Recipients](#recipients)
    - [Get a list of recipients](#get-a-list-of-recipients)
    - [Get single recipient](#get-single-recipient)
    - [Delete recipient](#delete-recipient)
    - [Add recipients to a suppression list](#add-recipients-to-a-suppression-list)
    - [Get recipients from a suppression list](#get-recipients-from-a-suppression-list)
    - [Delete recipients from a suppression list](#delete-recipients-from-a-suppression-list)
  - [Templates](#templates)
    - [Get a list of templates](#get-a-list-of-templates)
    - [Get a single template](#get-a-single-template)
    - [Delete a template](#delete-a-template)
  - [Webhooks](#webhooks)
    - [Get a list of webhooks](#get-a-list-of-webhooks)
    - [Get webhook](#get-webhook)
    - [Create webhook](#create-webhook)
    - [Update webhook](#update-webhook)
    - [Delete webhook](#delete-webhook)
    - [Verify a webhook signature](#verify-webhook-signature)
  - [Others](#others)
    - [Get API Quota](#get-api-quota)
- [Support and Feedback](#support-and-feedback)
- [License](#license)

# Installation

## Setup

```bash
npm install mailersend
```

if you would like to use the env approach as shown in the examples, please run

```bash
npm install dotenv --save
```

# Usage

## Email

### Send an email

```js
import 'dotenv/config';
import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

const sentFrom = new Sender("you@yourdomain.com", "Your name");

const recipients = [
  new Recipient("your@client.com", "Your Client")
];

const emailParams = new EmailParams()
  .setFrom(sentFrom)
  .setTo(recipients)
  .setReplyTo(sentFrom)
  .setSubject("This is a Subject")
  .setHtml("<strong>This is the HTML content</strong>")
  .setText("This is the text content");

await mailerSend.email.send(emailParams);

```

### Add CC, BCC recipients

```js
import 'dotenv/config';
import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

const sentFrom = new Sender("bbbb@yourdomain.com", "Your name");

const recipients = [
  new Recipient("your@client.com", "Your Client")
];
const cc = [
  new Recipient("your_cc@client.com", "Your Client CC")
];
const bcc = [
  new Recipient("your_bcc@client.com", "Your Client BCC")
];

const emailParams = new EmailParams()
  .setFrom(sentFrom)
  .setTo(recipients)
  .setCc(cc)
  .setBcc(bcc)
  .setSubject("This is a Subject")
  .setHtml("<strong>This is the HTML content</strong>")
  .setText("This is the text content");

await mailerSend.email.send(emailParams);
```

### Send a template-based email

```js
import 'dotenv/config';
import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

const sentFrom = new Sender("you@yourdomain.com", "Your name");

const recipients = [
  new Recipient("your@client.com", "Your Client")
];

const emailParams = new EmailParams()
  .setFrom(sentFrom)
  .setTo(recipients)
  .setReplyTo(sentFrom)
  .setSubject("This is a Subject")
  .setTemplateId('templateId');

await mailerSend.email.send(emailParams);

```

### Personalization

```js
import 'dotenv/config';
import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

const sentFrom = new Sender("you@yourdomain.com", "Your name");

const recipients = [
  new Recipient("your@client.com", "Your Client")
];

const personalization = [
  {
    email: "your@client.com",
    data: {
      test: 'Test Value'
    },
  }
];

const emailParams = new EmailParams()
  .setFrom(sentFrom)
  .setTo(recipients)
  .setReplyTo(sentFrom)
  .setPersonalization(personalization)
  .setSubject("Subject, {{ test }}")
  .setHtml("This is the HTML content, {{ test }}")
  .setText("This is the text content, {{ test }}");

await mailerSend.email.send(emailParams);

```

### Send email with attachment

```js
import 'dotenv/config';
import fs from "fs";
import { MailerSend, EmailParams, Sender, Recipient, Attachment } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

const sentFrom = new Sender("you@yourdomain.com", "Your name");

const recipients = [
  new Recipient("your@client.com", "Your Client")
];

const attachments = [
  new Attachment(
    fs.readFileSync('/path/to/file.pdf', { encoding: 'base64' }),
    'file.pdf',
    'attachment'
  )
]

const emailParams = new EmailParams()
  .setFrom(sentFrom)
  .setTo(recipients)
  .setReplyTo(sentFrom)
  .setAttachments(attachments)
  .setSubject("This is a Subject")
  .setHtml("<strong>This is the HTML content</strong>")
  .setText("This is the text content");

await mailerSend.email.send(emailParams);

```

### Send email with inline attachment

```js
import 'dotenv/config';
import fs from "fs";
import { MailerSend, EmailParams, Sender, Recipient, Attachment } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

const sentFrom = new Sender("you@yourdomain.com", "Your name");

const recipients = [
  new Recipient("your@client.com", "Your Client")
];

const attachments = [
  new Attachment(
    fs.readFileSync('/path/to/file.png', { encoding: 'base64' }),
    'file.png',
    'inline',
    '0123456789'
  )
]

const emailParams = new EmailParams()
  .setFrom(sentFrom)
  .setTo(recipients)
  .setReplyTo(sentFrom)
  .setAttachments(attachments)
  .setSubject("This is a Subject")
  .setHtml("<strong>This is the HTML content with an inline image attachment <img src=\"cid:0123456789\"/></strong>")
  .setText("This is the text content");

await mailerSend.email.send(emailParams);

```

### Send a scheduled email

```js
import 'dotenv/config';
import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

const sentFrom = new Sender("you@yourdomain.com", "Your name");

const recipients = [
  new Recipient("your@client.com", "Your Client")
];

const emailParams = new EmailParams()
  .setFrom(sentFrom)
  .setTo(recipients)
  .setReplyTo(sentFrom)
  .setSubject("This is a scheduled Subject")
  .setHtml("<strong>This is a scheduled HTML content</strong>")
  .setText("This is a scheduled text content")
  .setSendAt(Math.floor((new Date(Date.now()+ 30*60*1000)).getTime() / 1000)); //send in 30mins NB:param has to be a Unix timestamp e.g 2443651141

await mailerSend.email.send(emailParams);

```

### Send bulk emails

```js
import 'dotenv/config';
import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

const sentFrom = new Sender("your@yourdomain.com", "Your name");

const bulkEmails = [];

const emailParams = new EmailParams()
  .setFrom(sentFrom)
  .setTo([
    new Recipient("your@client.com", "Your Client")
  ])
  .setSubject("This is a Subject")
  .setHtml("<strong>This is the HTML content</strong>")
  .setText("This is the text content");

bulkEmails.push(emailParams);

const emailParams2 = new EmailParams()
  .setFrom(sentFrom)
  .setTo([
    new Recipient("your_2@client.com", "Your Client 2")
  ])
  .setSubject("This is a Subject 2")
  .setHtml("<strong>This is the HTML content 2</strong>")
  .setText("This is the text content 2");

bulkEmails.push(emailParams2);

await mailerSend.email.sendBulk(bulkEmails);

```

### Get bulk request status

```js
import 'dotenv/config';
import { MailerSend } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.email.getBulkStatus('bulk_email_id') // bulk email Id e.g 63af1fdb790d97105a090001
  .then((response) => {
    console.log(response.body);
  });

```

## Tokens

### Create a token

```js
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

```

### Update token

```js
import 'dotenv/config';
import { MailerSend} from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.token.updateSettings("token_id", {
  status: "pause",
})
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));

```

### Delete token

```js
import 'dotenv/config';
import { MailerSend} from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.token.delete("token_id")
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));

```

## Activity

### Get activity list

```js
import 'dotenv/config';
import { MailerSend, ActivityEventType } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

const queryParams = {
  limit: 10, // Min: 10, Max: 100, Default: 25
  page: 2,
  date_from: 1443651141, // Unix timestamp
  date_to: 1443651141, // Unix timestamp
  event: [ActivityEventType.SENT, ActivityEventType.SOFT_BOUNCED]
}

mailerSend.email.activity.domain("domain_id", queryParams)
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error));

```

## Analytics

### Get activity data by date

```js
import 'dotenv/config';
import { ActivityEventType, MailerSend } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.email.analytics.byDate({
  date_from: 1443651141,
  date_to: 2443651141,
  event: [ActivityEventType.CLICKED, ActivityEventType.OPENED],
}).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log(error.body);
});

```

### Opens by country

```js
import 'dotenv/config';
import { ActivityEventType, MailerSend } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.email.analytics.byCountry({
  date_from: 1443651141,
  date_to: 2443651141,
}).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log(error.body);
});

```

### Opens by user-agent

```js
import 'dotenv/config';
import { ActivityEventType, MailerSend } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.email.analytics.byUserAgent({
  date_from: 1443651141,
  date_to: 2443651141,
}).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log(error.body);
});

```

### Opens by reading environment

```js
import 'dotenv/config';
import { ActivityEventType, MailerSend } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.email.analytics.byReadingEnvironment({
  date_from: 1443651141,
  date_to: 2443651141,
}).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log(error.body);
});

```

## Domains

### Get a list of domains

```js
import 'dotenv/config';
import { MailerSend } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.email.domain.list()
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));

```

### Get domain

```js
import 'dotenv/config';
import { MailerSend } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.email.domain.single("domain_id")
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));

```

### Delete domain

```js
import 'dotenv/config';
import { MailerSend } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.email.domain.delete("domain_id")
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));

```

### Get a list of recipients per domain

```js
import 'dotenv/config';
import { MailerSend } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.email.domain.recipients("domain_id", {
  page: 1,
  limit: 10
})
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));

```

### Update domain settings

```js
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

```

### Add a domain

```js
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

```

### Get DNS records

```js
import 'dotenv/config';
import { MailerSend } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.email.domain.dns("domain_id")
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));

```

### Get verification status

```js
import 'dotenv/config';
import { MailerSend } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.email.domain.verify("domain_id")
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));

```

## Identity

### Get identity list

```js
import 'dotenv/config';
import { MailerSend } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.email.identity.list()
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));

```

### Get identity

```js
import 'dotenv/config';
import { MailerSend } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.email.identity.single("identity_id")
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));

```

### Get identity by email address

```js
import 'dotenv/config';
import { MailerSend } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.email.identity.singleByEmail('email_address')
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));

```

### Create identity

```js
import 'dotenv/config';
import { MailerSend, Inbound, InboundFilterType } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

const identity = new Identity()
  .setDomainId('domain_id')
  .setEmail('identity@yourdomain.com')
  .setName('Name')
  .setReplyToEmail('reply_identity@yourdomain.com')
  .setReplyToName('Reply Name')
  .setAddNote(false);

mailerSend.email.identity.create(identity)
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));

```

### Update identity

```js
import 'dotenv/config';
import { MailerSend, Inbound, InboundFilterType } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

const data = {
  domain_id: 'string',
  email: 'email@yourdomain.com',
  name: 'name',
  personal_note: 'Personal note',
  reply_to_name: 'Reply Name',
  reply_to_email: 'repy@yourdomain.com',
  add_note: true,
};

mailerSend.email.identity.update('identiy_id', data)
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));

```

### Update identity by email address

```js
import 'dotenv/config';
import { MailerSend, Inbound, InboundFilterType } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

const data = {
  domain_id: 'string',
  email: 'email@yourdomain.com',
  name: 'name',
  personal_note: 'Personal note',
  reply_to_name: 'Reply Name',
  reply_to_email: 'repy@yourdomain.com',
  add_note: true,
};

mailerSend.email.identity.updateByEmail('email_address', data)
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));

```

### Delete identity

```js
import 'dotenv/config';
import { MailerSend } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.email.identity.delete("identity_id")
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));

```

### Delete identity by email address

```js
import 'dotenv/config';
import { MailerSend } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.email.identity.deleteByEmail('email_address')
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));

```

## Inbound

### Get inbound list

```js
import 'dotenv/config';
import { MailerSend } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.email.inbound.list()
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));

```

### Get inbound

```js
import 'dotenv/config';
import { MailerSend } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.email.inbound.single("inbound_id")
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));

```

### Create inbound

```js
import 'dotenv/config';
import { MailerSend, Inbound, InboundFilterType } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

const inbound = new Inbound()
  .setDomainId('domain_id')
  .setName('inbound test')
  .setDomainEnabled(true)
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

```

### Update inbound

```js
import 'dotenv/config';
import { MailerSend, Inbound, InboundFilterType } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

const inbound = new Inbound()
  .setDomainId('domain_id')
  .setName('inbound test 2')
  .setDomainEnabled(false)
  .setMatchFilter({
    type: InboundFilterType.MATCH_ALL,
  })
  .setForwards([
    {
      type: "webhook",
      value: "https://www.yourdomain.com/hook"
    }
  ]);

mailerSend.email.inbound.update('inbound_id', inbound)
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));

```

### Delete inbound

```js
import 'dotenv/config';
import { MailerSend } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.email.inbound.delete("inbound_id")
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));

```

## Messages

### Get a list of messages

```js
import 'dotenv/config';
import { MailerSend} from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});


mailerSend.email.message.list()
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));

```

### Get info on a message

```js
import 'dotenv/config';
import { MailerSend} from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.email.message.single("message_id")
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));

```

## Scheduled Messages

### Get scheduled email list

```js
import 'dotenv/config';
import { MailerSend} from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.email.schedule.list()
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));

```

### Get scheduled email

```js
import 'dotenv/config';
import { MailerSend} from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.email.schedule.single("message_id")
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));

```

### Delete scheduled email

```js
import 'dotenv/config';
import { MailerSend} from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.email.schedule.delete("message_id")
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));

```

## Recipients

### Get a list of recipients

```js
import 'dotenv/config';
import { MailerSend } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.email.recipient.list({
  domain_id: "domain_id",
  limit: 10,
})
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));

```

### Get single recipient

```js
import 'dotenv/config';
import { MailerSend} from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.email.recipient.single("recipient_id")
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));

```

### Delete recipient

```js
import 'dotenv/config';
import { MailerSend} from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.email.recipient.delete("recipient_id")
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));

```

### Add recipients to a suppression list

#### Blocklist

```js
import 'dotenv/config';
import { BlockListType, MailerSend } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.email.recipient.blockRecipients({
  domain_id: 'domain_id',
  recipients: [
    "test@example.com"
  ]
}, BlockListType.BLOCK_LIST)
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));

```

#### Hard Bounces

```js
import 'dotenv/config';
import { BlockListType, MailerSend } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.email.recipient.blockRecipients({
  domain_id: 'domain_id',
  recipients: [
    "test@example.com"
  ]
}, BlockListType.HARD_BOUNCES_LIST)
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));

```

#### Spam Complaints

```js
import 'dotenv/config';
import { BlockListType, MailerSend } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.email.recipient.blockRecipients({
  domain_id: 'domain_id',
  recipients: [
    "test@example.com"
  ]
}, BlockListType.SPAM_COMPLAINTS_LIST)
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));

```

#### Unsubscribe

```js
import 'dotenv/config';
import { BlockListType, MailerSend } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.email.recipient.blockRecipients({
  domain_id: 'domain_id',
  recipients: [
    "test@example.com"
  ]
}, BlockListType.UNSUBSCRIBES_LIST)
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));

```

### Get recipients from a suppression list

#### Blocklist

```js
import 'dotenv/config';
import { BlockListType, MailerSend} from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.email.recipient.blockList(
  { domain_id: "domain_id", },
  BlockListType.BLOCK_LIST
)
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));

```

#### Hard Bounce

```js
import 'dotenv/config';
import { BlockListType, MailerSend } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.email.recipient.blockList(
  { domain_id: "domain_id", },
  BlockListType.HARD_BOUNCES_LIST
)
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));

```

#### Spam Complaint

```js
import 'dotenv/config';
import { BlockListType, MailerSend} from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.email.recipient.blockList(
  { domain_id: "domain_id", },
  BlockListType.SPAM_COMPLAINTS_LIST
)
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));

```

#### Unsubscribe

```js
import 'dotenv/config';
import { BlockListType, MailerSend} from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.email.recipient.blockList(
  { domain_id: "domain_id", },
  BlockListType.UNSUBSCRIBES_LIST
)
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));

```

### Delete recipients from a suppression list

#### Blocklist

```js
import 'dotenv/config';
import { BlockListType, MailerSend } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.email.recipient.delBlockListRecipients(
  ["recipient_id", "recipient_id"],
  BlockListType.BLOCK_LIST
)
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));

```

#### Hard Bounce

```js
import 'dotenv/config';
import { BlockListType, MailerSend } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.email.recipient.delBlockListRecipients(
  ["recipient_id", "recipient_id"],
  BlockListType.HARD_BOUNCES_LIST
)
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));

```

#### Spam Complaint

```js
import 'dotenv/config';
import { BlockListType, MailerSend } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.email.recipient.delBlockListRecipients(
  ["recipient_id", "recipient_id"],
  BlockListType.SPAM_COMPLAINTS_LIST
)
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));

```

#### Unsubscribe

```js
import 'dotenv/config';
import { BlockListType, MailerSend } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.email.recipient.delBlockListRecipients(
  ["recipient_id", "recipient_id"],
  BlockListType.UNSUBSCRIBES_LIST
)
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));

```

## Templates

### Get a list of templates

```js
import 'dotenv/config';
import { MailerSend} from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.email.template.list({
    domain_id: "domain_id"
})
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));

```

### Get a single template

```js
import 'dotenv/config';
import { MailerSend} from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.email.template.single("domain_id")
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));

```

### Delete a template

```js
import 'dotenv/config';
import { MailerSend} from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.email.template.single("domain_id")
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));

```

## Webhooks

### Get a list of webhooks

```js
import 'dotenv/config';
import { MailerSend} from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.email.webhook.list("domain_id")
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));

```

### Get webhook

```js
import 'dotenv/config';
import { MailerSend} from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.email.webhook.single("webhook_id")
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));

```

### Create webhook

```js
import 'dotenv/config';
import { EmailWebhook, EmailWebhookEventType, MailerSend } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

const emailWebhook = new EmailWebhook()
  .setName("Webhook Name")
  .setUrl("https://example.com")
  .setDomainId("domain_id")
  .setEnabled(true)
  .setEvents([EmailWebhookEventType.SENT, EmailWebhookEventType.OPENED]);

mailerSend.email.webhook.create(emailWebhook)
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));

```

### Update webhook

```js
import 'dotenv/config';
import { EmailWebhook, EmailWebhookEventType, MailerSend } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

const emailWebhook = new EmailWebhook()
  .setName("Webhook Name 2")
  .setEnabled(false)
  .setEvents([EmailWebhookEventType.SENT, EmailWebhookEventType.OPENED]);

mailerSend.email.webhook.update("webhook_id", emailWebhook)
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));

```

### Delete webhook

```js
import 'dotenv/config';
import { MailerSend} from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.email.webhook.delete("webhook_id")
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));

```

# SMS

### Send SMS

```js
import 'dotenv/config';
import { MailerSend, SMSParams } from "mailersend";

const mailersend = new MailerSend({
  apiKey: process.env.API_KEY,
});

const recipients = [
  "+18332647501"
];

const smsParams = new SMSParams()
  .setFrom("+18332647501")
  .setTo(recipients)
  .setText("This is the text content");

await mailersend.sms.send(smsParams);

```

### SMS personalization

```js
import 'dotenv/config';
import { MailerSend, SMSParams, SMSPersonalization } from "mailersend";

const mailersend = new MailerSend({
  apiKey: process.env.API_KEY,
});

const recipients = [
  "+18332647501",
  "+18332647502"
];

const personalization = [
  new SMSPersonalization("+18332647501", {
    "name": "Dummy"
  }),
  new SMSPersonalization("+18332647502", {
    "name": "Not Dummy"
  }),
];

const smsParams = new SMSParams()
  .setFrom("+18332647501")
  .setTo(recipients)
  .setPersonalization(personalization)
  .setText("Hey {{name}} welcome to our organization");

await mailersend.sms.send(smsParams);

```

## Phone Numbers

### Get phone number list

```js
import 'dotenv/config';
import { MailerSend } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.sms.number.list({
  paused: false,
  limit: 10,
  page: 1
})
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));

```

### Get phone number

```js
import 'dotenv/config';
import { MailerSend } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.sms.number.single("sms_number_id")
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));

```

### Update phone number

```js
import 'dotenv/config';
import { MailerSend } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.sms.number.update("sms_number_id", true)
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));

```

### Delete phone number

```js
import 'dotenv/config';
import { MailerSend } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.sms.number.delete("sms_number_id")
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));

```

## Messages

### Get messages list

```js
import 'dotenv/config';
import { MailerSend } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.sms.message.list({
  limit: 10,
  page: 1
})
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));

```

### Get a message

```js
import 'dotenv/config';
import { MailerSend } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.sms.message.single("sms_message_id")
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));

```

## Activity

### Get activity list

```js
import 'dotenv/config';
import { MailerSend, SmsActivityStatusType } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.sms.activity.list({
  sms_number_id: "number_id",
  status: [SmsActivityStatusType.SENT, SmsActivityStatusType.DELIVERED],
  limit: 10,
  page: 1
})
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));

```

### Get activity of a message

```js
import 'dotenv/config';
import { MailerSend } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.sms.activity.single("sms_message_id")
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));

```

## Recipients

### Get recipient list

```js
import 'dotenv/config';
import { MailerSend } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.sms.recipient.list({
  sms_number_id: "sms_number_id",
  status: "active",
  limit: 10,
  page: 1,
})
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));

```

### Get recipient

```js
import 'dotenv/config';
import { MailerSend } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.sms.recipient.single("sms_recipient_id")
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));

```

### Update recipient

```js
import 'dotenv/config';
import { MailerSend } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.sms.recipient.update("sms_recipient_id", "active")
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));

```

## Webhooks

### Get webhook list for a number

```js
import 'dotenv/config';
import { MailerSend } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.sms.webhook.list("sms_number_id")
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));

```

### Get webhook

```js
import 'dotenv/config';
import { MailerSend } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.sms.webhook.single("sms_webhook_id")
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));

```

### Create webhook

```js
import 'dotenv/config';
import { MailerSend, SmsWebhook, SmsWebhookEventType } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

const smsWebhook = new SmsWebhook()
  .setName("Sms Webhook")
  .setUrl("https:://yourapp.com/hook")
  .setSmsNumberId("sms_number_id")
  .setEnabled(true)
  .setEvents([SmsWebhookEventType.SENT, SmsWebhookEventType.DELIVERED])

mailerSend.sms.webhook.create(smsWebhook)
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));

```

### Update webhook

```js
import 'dotenv/config';
import { MailerSend } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.sms.webhook.update("sms_webhook_id", {
  name: "Webhook",
  url: "https:://yourapp.com/hook",
  enabled: ["sms.sent", "sms.delivered", "sms.failed"],
  enabled: true
})
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));

```

### Delete webhook

```js
import 'dotenv/config';
import { MailerSend } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.sms.webhook.delete("sms_webhook_id")
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));

```

### Verify webhook signature

```js
import crypto from 'crypto'

const requestContent = '{request payload from webhook}';
const receivedSignature = 'signature from webhook header';
const signingSecret = 'your-secret-key';

const computedSignature = crypto
  .createHmac('sha256', signingSecret)
  .update(requestContent, 'utf8')
  .digest('hex');

return crypto.timingSafeEqual(
  Buffer.from(receivedSignature, 'hex'),
  Buffer.from(computedSignature, 'hex')
);
```

## Inbound

### Get inbound list

```js
import 'dotenv/config';
import { MailerSend } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.sms.inbound.list({
  enabled: 1,
  sms_number_id: "sms_number_id",
  limit: 10,
  page: 1,
})
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));

```

### Get inbound

```js
import 'dotenv/config';
import { MailerSend } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.sms.inbound.single("sms_inbound_id")
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));

```

### Add inbound

```js
import 'dotenv/config';
import { MailerSend, SmsInbound } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

const smsInbound = new SmsInbound()
  .setSmsNumberId("sms_number_id")
  .setEnabled(true)
  .setName("Inbound Name")
  .setForwardUrl("yourapp.com/hook")
  .setFilter({
    comparer: "equal",
    value: "START"
  });

mailerSend.sms.inbound.create(smsInbound)
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));

```

### Update inbound

```js
import 'dotenv/config';
import { MailerSend, SmsInbound } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

const smsInbound = new SmsInbound()
  .setSmsNumberId("sms_number_id")
  .setEnabled(true)
  .setName("Inbound Name Update")
  .setForwardUrl("yourapp.com/hook")
  .setFilter({
    comparer: "equal",
    value: "START"
  });

mailerSend.sms.inbound.update("sms_inbound_id", {...smsInbound})
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));

```

### Delete inbound

```js
import 'dotenv/config';
import { MailerSend } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.sms.inbound.delete("sms_inbound_id")
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));

```

## Others

### Get Api Quota

```js
import 'dotenv/config';
import { MailerSend} from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.others.getApiQuota()
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));

```

# Support and Feedback

In case you find any bugs, submit an issue directly here in GitHub.

You are welcome to create SDK for any other programming language.

If you have any troubles using our API or SDK free to contact our support by email [info@mailersend.com](mailto:info@mailersend.com)

The official documentation is at [https://developers.mailersend.com](https://developers.mailersend.com)

# License

[The MIT License (MIT)](LICENSE)
