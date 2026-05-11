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
    - [Send email with references (threading)](#send-email-with-references-threading)
    - [Send email with list-unsubscribe](#send-email-with-list-unsubscribe)
    - [Send a scheduled email](#send-a-scheduled-email)
    - [Send email with precedence bulk header](#send-email-with-precedence-bulk-header)
    - [Send an email with tracking](#send-an-email-with-tracking)
    - [Send email with custom headers](#send-email-with-custom-headers)
    - [Send an email with RCPT TO recipients](#send-an-email-with-rcpt-to-recipients)
  - [Bulk email API](#bulk-email-api)
    - [Send bulk emails](#send-bulk-emails)
    - [Get bulk request status](#get-bulk-request-status)
  - [Inbound Routing](#inbound)
    - [Get inbound list](#get-inbound-list)
    - [Get inbound](#get-inbound)
    - [Create inbound](#create-inbound)
    - [Update inbound](#update-inbound)
    - [Delete inbound](#delete-inbound)
  - [Activity](#activity)
    - [Get activity list](#get-activity-list)
    - [Get single activity](#get-single-activity)
  - [Analytics](#analytics)
    - [Get activity data by date](#get-activity-data-by-date)
    - [Opens by country](#opens-by-country)
    - [Opens by user-agent](#opens-by-user-agent)
    - [Opens by reading environment](#opens-by-reading-environment)
  - [Domains](#domains)
    - [Get a list of domains](#get-a-list-of-domains)
    - [Get domain](#get-domain)
    - [Add a domain](#add-a-domain)
    - [Delete domain](#delete-domain)
    - [Get a list of recipients per domain](#get-a-list-of-recipients-per-domain)
    - [Update domain settings](#update-domain-settings)
    - [Verify a domain](#verify-a-domain)
    - [Get DNS records](#get-dns-records)
  - [Messages](#messages)
    - [Get a list of messages](#get-a-list-of-messages)
    - [Get info on a message](#get-info-on-a-message)
  - [Scheduled Messages](#scheduled-messages)
    - [Get scheduled email list](#get-scheduled-email-list)
    - [Get scheduled email](#get-scheduled-email)
    - [Delete scheduled email](#delete-scheduled-email)
  - [Tokens](#tokens)
    - [List tokens](#list-tokens)
    - [Get token](#get-token)
    - [Create a token](#create-a-token)
    - [Update token name](#update-token-name)
    - [Update token status](#update-token-status)
    - [Delete token](#delete-token)
  - [Recipients](#recipients)
    - [Get a list of recipients](#get-a-list-of-recipients)
    - [Get single recipient](#get-single-recipient)
    - [Delete recipient](#delete-recipient)
    - [Add recipients to a suppression list](#add-recipients-to-a-suppression-list)
    - [Delete recipients from a suppression list](#delete-recipients-from-a-suppression-list)
    - [Get recipients from a suppression list](#get-recipients-from-a-suppression-list)
    - [Delete all recipients from a suppression list](#delete-all-recipients-from-a-suppression-list)
    - [Get recipients from the on-hold list](#get-recipients-from-the-on-hold-list)
    - [Delete recipients from the on-hold list](#delete-recipients-from-the-on-hold-list)
  - [Webhooks](#webhooks)
    - [Get a list of webhooks](#get-a-list-of-webhooks)
    - [Get webhook](#get-webhook)
    - [Create webhook](#create-webhook)
    - [Update webhook](#update-webhook)
    - [Delete webhook](#delete-webhook)
  - [Templates](#templates)
    - [Get a list of templates](#get-a-list-of-templates)
    - [Get a single template](#get-a-single-template)
    - [Create a template](#create-a-template)
    - [Update a template](#update-a-template)
    - [Delete a template](#delete-a-template)
  - [Email Verification](#email-verification)
    - [Get all email verification lists](#get-all-email-verification-lists)
    - [Get an email verification list](#get-an-email-verification-list)
    - [Create an email verification list](#create-an-email-verification-list)
    - [Verify an email list](#verify-an-email-list)
    - [Get email verification list results](#get-email-verification-list-results)
    - [Verify a single email](#verify-a-single-email)
    - [Verify a single email asynchronously](#verify-a-single-email-asynchronously)
    - [Get async email verification status](#get-async-email-verification-status)
  - [SMS](#sms)
    - [Send SMS](#send-sms)
    - [SMS personalization](#sms-personalization)
  - [Phone Numbers](#phone-numbers)
    - [Get phone number list](#get-phone-number-list)
    - [Get phone number](#get-phone-number)
    - [Update phone number](#update-phone-number)
    - [Delete phone number](#delete-phone-number)
  - [SMS Messages](#messages-1)
    - [Get messages list](#get-messages-list)
    - [Get a message](#get-a-message)
  - [SMS Activity](#activity-1)
    - [Get activity list](#get-activity-list-1)
  - [SMS Recipients](#recipients-1)
    - [Get recipient list](#get-recipient-list)
    - [Get recipient](#get-recipient)
    - [Update recipient](#update-recipient)
  - [SMS Webhooks](#webhooks-1)
    - [Get webhook list for a number](#get-webhook-list-for-a-number)
    - [Get webhook](#get-webhook-1)
    - [Create webhook](#create-webhook-1)
    - [Update webhook](#update-webhook-1)
    - [Delete webhook](#delete-webhook-1)
  - [SMS Inbound](#inbound-1)
    - [Get inbound list](#get-inbound-list-1)
    - [Get inbound](#get-inbound-1)
    - [Add inbound](#add-inbound)
    - [Update inbound](#update-inbound-1)
    - [Delete inbound](#delete-inbound-1)
  - [Identity](#identity)
    - [Get identity list](#get-identity-list)
    - [Get identity](#get-identity)
    - [Get identity by email](#get-identity-by-email-address)
    - [Create identity](#create-identity)
    - [Update identity](#update-identity)
    - [Update identity by email](#update-identity-by-email-address)
    - [Delete identity](#delete-identity)
    - [Delete identity by email](#delete-identity-by-email-address)
    - [Resend identity verification](#resend-identity-verification)
  - [SMTP Users](#smtp-users)
    - [List SMTP users](#list-smtp-users)
    - [Get SMTP user](#get-smtp-user)
    - [Create SMTP user](#create-smtp-user)
    - [Update SMTP user](#update-smtp-user)
    - [Delete SMTP user](#delete-smtp-user)
  - [Users](#users)
    - [Get user list](#get-user-list)
    - [Get single user](#get-single-user)
    - [Invite a user](#invite-a-user)
    - [Update user](#update-user)
    - [Delete user](#delete-user)
    - [Get invite list](#get-invite-list)
    - [Get single invite](#get-single-invite)
    - [Resend invite](#resend-invite)
    - [Cancel invite](#cancel-invite)
  - [DMARC Monitoring](#dmarc-monitoring)
    - [List monitors](#list-monitors)
    - [Create monitor](#create-monitor)
    - [Update monitor](#update-monitor)
    - [Delete monitor](#delete-monitor)
    - [Get aggregated reports](#get-aggregated-reports)
    - [Get IP-specific reports](#get-ip-specific-reports)
    - [Get report sources](#get-report-sources)
    - [Mark IP as favorite](#mark-ip-as-favorite)
    - [Remove IP from favorites](#remove-ip-from-favorites)
  - [Blocklist Monitoring](#blocklist-monitoring)
    - [List blocklist monitors](#list-blocklist-monitors)
    - [Get single blocklist monitor](#get-single-blocklist-monitor)
    - [Create blocklist monitor](#create-blocklist-monitor)
    - [Update blocklist monitor](#update-blocklist-monitor)
    - [Delete blocklist monitor](#delete-blocklist-monitor)
  - [Other endpoints](#other-endpoints)
    - [Get API quota](#get-api-quota)
- [Utils](#utils)
  - [Verify a webhook signature](#verify-a-webhook-signature)
- [Support and Feedback](#support-and-feedback)
- [License](#license)

## Installation

### Setup

```bash
npm install mailersend
```

if you would like to use the env approach as shown in the examples, please run

```bash
npm install dotenv --save
```

## Usage

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

### Send email with references (threading)

> **Note:** The `references` field is available on paid plan accounts only.

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
  .setSubject("Re: This is a Subject")
  .setHtml("<strong>This is the HTML content</strong>")
  .setText("This is the text content")
  .setInReplyTo("<original-message-id@yourdomain.com>")
  .setReferences([
    "<original-message-id@yourdomain.com>",
    "<another-message-id@yourdomain.com>",
  ]);

await mailerSend.email.send(emailParams);

```

### Send email with list-unsubscribe

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
  .setText("This is the text content")
  .setListUnsubscribe("https://www.yourdomain.com/unsubscribe");

await mailerSend.email.send(emailParams);

```

### Send a scheduled message

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
  // Accepts a Unix timestamp (integer) or an ISO 8601 date string
  .setSendAt(Math.floor((new Date(Date.now() + 30 * 60 * 1000)).getTime() / 1000)); // Unix timestamp – send in 30 mins
  // .setSendAt("2040-11-21T14:00:00+00:00"); // ISO 8601 alternative

await mailerSend.email.send(emailParams);

```

### Send email with precedence bulk header

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
  .setText("This is the text content")
  .setPrecedenceBulk(true);

await mailerSend.email.send(emailParams);

```

### Send an email with tracking

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
  .setText("This is the text content")
  .setSettings({
    track_clicks: true,
    track_opens: true,
    track_content: true,
  });

await mailerSend.email.send(emailParams);

```

### Send email with custom headers

> **Note:** Custom headers are available on Professional and Enterprise accounts only.

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

const headers = [
  { name: "X-Custom-Header", value: "custom-value" },
  { name: "X-Another-Header", value: "another-value" },
];

const emailParams = new EmailParams()
  .setFrom(sentFrom)
  .setTo(recipients)
  .setReplyTo(sentFrom)
  .setSubject("This is a Subject")
  .setHtml("<strong>This is the HTML content</strong>")
  .setText("This is the text content")
  .setHeaders(headers);

await mailerSend.email.send(emailParams);

```

### Send an email with RCPT TO recipients

> `rcptTo` is intended for SMTP source delivery and accepts a list of recipients.
> When `to` is empty and `rcptTo` is provided, the addresses are forwarded as BCC.

```js
import 'dotenv/config';
import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

const sentFrom = new Sender("you@yourdomain.com", "Your name");

const rcptTo = [
  new Recipient("rcpt@client.com")
];

const emailParams = new EmailParams()
  .setFrom(sentFrom)
  .setSubject("This is a Subject")
  .setHtml("<strong>This is the HTML content</strong>")
  .setText("This is the text content")
  .setRcptTo(rcptTo);

await mailerSend.email.send(emailParams);

```

## Bulk email API

### Send bulk email

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

## Inbound routing

### Get a list of inbound routes

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

With query parameters:

```js
import 'dotenv/config';
import { MailerSend } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.email.inbound.list({
  domain_id: "domain_id",
  page: 1,
  limit: 25,
})
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));

```

### Get a single inbound route

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

### Add an inbound route

```js
import 'dotenv/config';
import { MailerSend, Inbound, InboundFilterType } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

const inbound = new Inbound('inbound test', true, 'domain_id')
  .setInboundDomain('inbound.yourdomain.com')
  .setInboundPriority(50)
  .setMatchFilter({
    type: InboundFilterType.MATCH_ALL,
  })
  .setCatchFilter({
    type: InboundFilterType.CATCH_RECIPIENT,
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

### Update an inbound route

```js
import 'dotenv/config';
import { MailerSend, InboundUpdateParams, InboundFilterType } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

const inbound = new InboundUpdateParams('inbound test 2', false)
  .setInboundDomain('inbound.yourdomain.com')
  .setInboundPriority(25)
  .setMatchFilter({
    type: InboundFilterType.MATCH_ALL,
  })
  .setCatchFilter({
    type: InboundFilterType.CATCH_ALL,
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

### Delete an inbound route

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

### Get single activity

```js
import 'dotenv/config';
import { MailerSend } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.email.activity.single("activity_id")
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));

```

## Analytics

### Get activity data by date

```js
import 'dotenv/config';
import { ActivityEventType, AnalyticsDateQueryParams, AnalyticsGroupByType, MailerSend } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

const queryParams: AnalyticsDateQueryParams = {
  date_from: 1443651141,
  date_to: 2443651141,
  event: [ActivityEventType.CLICKED, ActivityEventType.OPENED],
  // group_by: AnalyticsGroupByType.DAYS, // optional: days, weeks, months, years
};

mailerSend.email.analytics.byDate(queryParams).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log(error.body);
});

```

### Opens by country

```js
import 'dotenv/config';
import { MailerSend } from "mailersend";

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
import { MailerSend } from "mailersend";

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
import { MailerSend } from "mailersend";

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

```js
import 'dotenv/config';
import { MailerSend } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.email.domain.list({ page: 1, limit: 10, verified: true })
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

### Add a domain

```js
import 'dotenv/config';
import { MailerSend, Domain } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

const domain = new Domain(
  "example.com",
  "rp_subdomain",
  "ct_subdomain",
  "ir_subdomain",
)

mailerSend.email.domain.create(domain)
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
  send_paused: true,
  track_clicks: true,
  track_opens: true,
  track_unsubscribe: true,
  track_unsubscribe_html: "<strong> Unsubscribe now </strong>",
  track_unsubscribe_plain: "Unsubscribe now",
  track_unsubscribe_html_enabled: true,
  track_unsubscribe_plain_enabled: true,
  track_content: true,
  custom_tracking_enabled: true,
  custom_tracking_subdomain: "subdomain",
  precedence_bulk: true,
  ignore_duplicated_recipients: true,
})
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));

```

### Verify a domain

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

mailerSend.email.schedule.list({
  domain_id: "domain_id",
  status: "scheduled",  // "scheduled" | "sent" | "error"
  limit: 10,
  page: 1,
})
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

## Tokens

### List tokens

```js
import 'dotenv/config';
import { MailerSend } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.token.list({ page: 1, limit: 25 })
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));

```

### Get token

```js
import 'dotenv/config';
import { MailerSend } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.token.single("token_id")
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));

```

### Create a token

```js
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

```

### Update token name

```js
import 'dotenv/config';
import { MailerSend } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.token.update("token_id", { name: "New token name" })
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));

```

### Update token status

```js
import 'dotenv/config';
import { MailerSend } from "mailersend";

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
import { MailerSend } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.token.delete("token_id")
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

### Delete all recipients from a suppression list

```js
import 'dotenv/config';
import { BlockListType, MailerSend } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.email.recipient.delAllBlockListRecipients(BlockListType.BLOCK_LIST)
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));

```

### Get recipients from the on-hold list

```js
import 'dotenv/config';
import { BlockListType, MailerSend } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.email.recipient.blockList(
  { page: 1, limit: 25 },
  BlockListType.ON_HOLD_LIST
)
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));

```

### Delete recipients from the on-hold list

```js
import 'dotenv/config';
import { BlockListType, MailerSend } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.email.recipient.delBlockListRecipients(
  ["recipient_id", "recipient_id"],
  BlockListType.ON_HOLD_LIST
)
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

```js
import 'dotenv/config';
import { MailerSend} from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.email.webhook.list("domain_id", { limit: 25, page: 2 })
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
  .setVersion(2)
  .setEditable(true)
  .setEvents([EmailWebhookEventType.SENT, EmailWebhookEventType.OPENED]);

mailerSend.email.webhook.create(emailWebhook)
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));

```

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
  .setEnabled(false)
  .setEvents([EmailWebhookEventType.SENT, EmailWebhookEventType.OPENED]);

mailerSend.email.webhook.create(emailWebhook)
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));

```

### Update webhook

```js
import 'dotenv/config';
import { EmailWebhookEventType, MailerSend } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.email.webhook.update("webhook_id", {
  name: "Webhook Name 2",
  url: "https://example.com/updated-hook",
  enabled: false,
  events: [EmailWebhookEventType.SENT, EmailWebhookEventType.OPENED],
  version: 2,
})
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

```js
import 'dotenv/config';
import { MailerSend} from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.email.template.list({
    domain_id: "domain_id",
    page: 1,
    limit: 25,
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

mailerSend.email.template.single("template_id")
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));

```

### Create a template

```js
import 'dotenv/config';
import { MailerSend } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.email.template.create({
  name: "My Template",
  html: "<p>Hello, {{name}}!</p>",
  text: "Hello, {{name}}!",
  domain_id: "domain_id",
  categories: ["welcome"],
  tags: ["welcome"],
  auto_generate: false,
})
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));

```

### Update a template

```js
import 'dotenv/config';
import { MailerSend } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.email.template.update("template_id", {
  name: "Updated Template Name",
  html: "<p>Hello, {{name}}! Updated.</p>",
  text: "Hello, {{name}}! Updated.",
  auto_generate: true,
})
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

mailerSend.email.template.delete("template_id")
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));

```

## Email Verification

### Get all email verification lists

```js
import 'dotenv/config';
import { MailerSend } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.emailVerification.list({ page: 1, limit: 25 })
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));

```

### Get an email verification list

```js
import 'dotenv/config';
import { MailerSend } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.emailVerification.single("email_verification_id", {
  detailed: true,
  page: 1,
  limit: 25,
})
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));

```

### Create an email verification list

```js
import 'dotenv/config';
import { MailerSend, EmailVerification } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

const emailVerification = new EmailVerification("My List", [
  "test1@example.com",
  "test2@example.com",
]);

// Optional: link to an existing list and trigger verification automatically
// emailVerification.setListId("existing_list_id");
// emailVerification.setVerify(true);

mailerSend.emailVerification.create(emailVerification)
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));

```

### Verify an email list

```js
import 'dotenv/config';
import { MailerSend } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.emailVerification.verifyList("email_verification_id")
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));

```

### Get email verification list results

```js
import 'dotenv/config';
import { MailerSend, EmailVerificationResultType } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.emailVerification.getListResult("email_verification_id", {
  page: 1,
  limit: 25,
  results: [EmailVerificationResultType.VALID, EmailVerificationResultType.CATCH_ALL],
})
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));

```

### Verify a single email

```js
import 'dotenv/config';
import { MailerSend } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.emailVerification.verifyEmail("test@example.com")
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));

```

### Verify a single email asynchronously

```js
import 'dotenv/config';
import { MailerSend } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.emailVerification.verifyEmailAsync("test@example.com")
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));

```

### Get async email verification status

```js
import 'dotenv/config';
import { MailerSend } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.emailVerification.getVerifyEmailAsyncStatus("verification_job_id")
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));

```

## SMS

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

See [Utils — Verify a webhook signature](#verify-a-webhook-signature).

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
import { MailerSend } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

const data = {
  name: 'name',
  reply_to_name: 'Reply Name',
  reply_to_email: 'reply@yourdomain.com',
};

mailerSend.email.identity.update('identity_id', data)
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));

```

### Update identity by email address

```js
import 'dotenv/config';
import { MailerSend } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

const data = {
  name: 'name',
  reply_to_name: 'Reply Name',
  reply_to_email: 'reply@yourdomain.com',
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

### Resend identity verification

```js
import 'dotenv/config';
import { MailerSend } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.email.identity.resend("identity_id")
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));

```

## SMTP Users

### List SMTP users

```js
import 'dotenv/config';
import { MailerSend } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.email.smtpUser.list("domain_id", { page: 1, limit: 25 })
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));

```

### Get SMTP user

```js
import 'dotenv/config';
import { MailerSend } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.email.smtpUser.single("domain_id", "smtp_user_id")
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));

```

### Create SMTP user

```js
import 'dotenv/config';
import { MailerSend } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.email.smtpUser.create("domain_id", {
  name: "My SMTP User",
  enabled: true,
})
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));

```

### Update SMTP user

```js
import 'dotenv/config';
import { MailerSend } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.email.smtpUser.update("domain_id", "smtp_user_id", {
  name: "Updated SMTP User",
  enabled: false,
})
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));

```

### Delete SMTP user

```js
import 'dotenv/config';
import { MailerSend } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.email.smtpUser.delete("domain_id", "smtp_user_id")
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));

```

## Users

### Get user list

```js
import 'dotenv/config';
import { MailerSend } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.user.list({ page: 1, limit: 25 })
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));

```

### Get single user

```js
import 'dotenv/config';
import { MailerSend } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.user.single("user_id")
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));

```

### Invite a user

```js
import 'dotenv/config';
import { MailerSend } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.user.create({
  email: "user@example.com",
  role: "manager",
  // For role "custom", permissions is required:
  // permissions: ["read-activity", "read-analytics"],
  // templates: ["template_id"],
  // domains: ["domain_id"],
})
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));

```

### Update user

```js
import 'dotenv/config';
import { MailerSend } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.user.update("user_id", {
  role: "designer",
})
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));

```

### Delete user

```js
import 'dotenv/config';
import { MailerSend } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.user.delete("user_id")
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));

```

### Get invite list

```js
import 'dotenv/config';
import { MailerSend } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.user.listInvites({ page: 1, limit: 25 })
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));

```

### Get single invite

```js
import 'dotenv/config';
import { MailerSend } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.user.singleInvite("invite_id")
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));

```

### Resend invite

```js
import 'dotenv/config';
import { MailerSend } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.user.resendInvite("invite_id")
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));

```

### Cancel invite

```js
import 'dotenv/config';
import { MailerSend } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.user.deleteInvite("invite_id")
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));

```

## DMARC Monitoring

### List monitors

```js
import 'dotenv/config';
import { MailerSend } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.dmarc.list({ page: 1, limit: 25 })
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));
```

### Create monitor

```js
import 'dotenv/config';
import { MailerSend, Dmarc } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

const dmarc = new Dmarc("domain_id");

mailerSend.dmarc.create(dmarc)
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));
```

### Update monitor

```js
import 'dotenv/config';
import { MailerSend } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.dmarc.update("monitor_id", { wanted_dmarc_record: "v=DMARC1; p=reject;" })
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));
```

### Delete monitor

```js
import 'dotenv/config';
import { MailerSend } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.dmarc.delete("monitor_id")
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));
```

### Get aggregated reports

```js
import 'dotenv/config';
import { MailerSend } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.dmarc.report("monitor_id", { page: 1, limit: 25 })
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));
```

### Get IP-specific reports

```js
import 'dotenv/config';
import { MailerSend } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.dmarc.reportByIp("monitor_id", "1.2.3.4", { page: 1, limit: 25 })
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));
```

### Get report sources

```js
import 'dotenv/config';
import { MailerSend } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.dmarc.reportSources("monitor_id", {
  date_from: 1700000000,
  date_to: 1700100000,
  status: "accepted", // optional: "accepted" | "rejected" | "quarantined"
})
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));
```

### Mark IP as favorite

```js
import 'dotenv/config';
import { MailerSend } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.dmarc.addFavorite("monitor_id", "1.2.3.4")
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));
```

### Remove IP from favorites

```js
import 'dotenv/config';
import { MailerSend } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.dmarc.removeFavorite("monitor_id", "1.2.3.4")
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));
```

## Blocklist Monitoring

### List blocklist monitors

```js
import 'dotenv/config';
import { MailerSend } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.blocklistMonitor.list({ page: 1, limit: 25 })
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));

```

### Get single blocklist monitor

```js
import 'dotenv/config';
import { MailerSend } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.blocklistMonitor.single("monitor_id")
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));

```

### Create blocklist monitor

```js
import 'dotenv/config';
import { MailerSend, BlocklistMonitor } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

const monitor = new BlocklistMonitor("example.com")
  .setName("My Domain Monitor")
  .setNotify(true)
  .setNotifyEmail("alerts@example.com");

mailerSend.blocklistMonitor.create(monitor)
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));

```

### Update blocklist monitor

```js
import 'dotenv/config';
import { MailerSend } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.blocklistMonitor.update("monitor_id", {
  name: "Updated Monitor Name",
  notify: true,
  notify_email: "alerts@example.com",
})
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));

```

### Delete blocklist monitor

```js
import 'dotenv/config';
import { MailerSend } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.blocklistMonitor.delete("monitor_id")
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));

```

## Other endpoints

### Get API quota

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

## Utils

### Verify a webhook signature

Use `MailerSendUtils.verifyWebHook()` to verify the HMAC signature on incoming webhook requests. This works for both email and SMS webhooks.

```js
import { MailerSendUtils } from "mailersend";

// rawBody must be the raw Buffer from the request (do not parse it as JSON first)
const isValid = MailerSendUtils.verifyWebHook(
  rawBody,
  request.headers['x-mailersend-signature'],
  process.env.WEBHOOK_SIGNING_SECRET
);
```

# Support and Feedback

In case you find any bugs, submit an issue directly here in GitHub.

You are welcome to create SDK for any other programming language.

If you have any troubles using our API or SDK free to contact our support by email [info@mailersend.com](mailto:info@mailersend.com)

The official documentation is at [https://developers.mailersend.com](https://developers.mailersend.com)

# License

[The MIT License (MIT)](LICENSE)
