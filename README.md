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
    - [Send a template-based email in a specific language](#send-a-template-based-email-in-a-specific-language)
    - [Personalization](#personalization)
    - [Send email with attachment](#send-email-with-attachment)
    - [Send email with inline attachment](#send-email-with-inline-attachment)
    - [Send email with references (threading)](#send-email-with-references-threading)
    - [Send email with list-unsubscribe](#send-email-with-list-unsubscribe)
    - [Send a scheduled message](#send-a-scheduled-message)
    - [Send email with precedence bulk header](#send-email-with-precedence-bulk-header)
    - [Send an email with tracking](#send-an-email-with-tracking)
    - [Send email with custom headers](#send-email-with-custom-headers)
  - [Bulk email API](#bulk-email-api)
    - [Send bulk email](#send-bulk-email)
    - [Get bulk email status](#get-bulk-email-status)
  - [Inbound routing](#inbound-routing)
    - [Get a list of inbound routes](#get-a-list-of-inbound-routes)
    - [Get a single inbound route](#get-a-single-inbound-route)
    - [Add an inbound route](#add-an-inbound-route)
    - [Update an inbound route](#update-an-inbound-route)
    - [Delete an inbound route](#delete-an-inbound-route)
  - [Activity](#activity)
    - [Get activity list](#get-activity-list)
    - [Get single activity](#get-single-activity)
  - [Emails](#emails)
    - [Get a list of emails](#get-a-list-of-emails)
    - [Get a single email](#get-a-single-email)
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
    - [Get a list of scheduled messages](#get-a-list-of-scheduled-messages)
    - [Get a single scheduled message](#get-a-single-scheduled-message)
    - [Delete a scheduled message](#delete-a-scheduled-message)
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
    - [Verify webhook signature](#verify-webhook-signature)
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
  - [WhatsApp](#whatsapp)
    - [Send a WhatsApp message](#send-a-whatsapp-message)
    - [WhatsApp personalization](#whatsapp-personalization)
    - [WhatsApp media headers](#whatsapp-media-headers)
    - [WhatsApp named variables](#whatsapp-named-variables)
  - [WhatsApp messages API](#whatsapp-messages-api)
    - [Get a list of WhatsApp messages](#get-a-list-of-whatsapp-messages)
    - [Get a WhatsApp message](#get-a-whatsapp-message)
  - [WhatsApp items API](#whatsapp-items-api)
    - [Get a list of WhatsApp items](#get-a-list-of-whatsapp-items)
    - [Get a WhatsApp item](#get-a-whatsapp-item)
  - [WhatsApp activities API](#whatsapp-activities-api)
    - [Get a list of WhatsApp activities](#get-a-list-of-whatsapp-activities)
  - [WhatsApp inbound messages API](#whatsapp-inbound-messages-api)
    - [Get a list of WhatsApp inbound messages](#get-a-list-of-whatsapp-inbound-messages)
    - [Get a WhatsApp inbound message](#get-a-whatsapp-inbound-message)
  - [WhatsApp recipients API](#whatsapp-recipients-api)
    - [Get a list of WhatsApp recipients](#get-a-list-of-whatsapp-recipients)
    - [Get a WhatsApp recipient](#get-a-whatsapp-recipient)
  - [WhatsApp templates API](#whatsapp-templates-api)
    - [Get a list of WhatsApp templates](#get-a-list-of-whatsapp-templates)
    - [Get a WhatsApp template](#get-a-whatsapp-template)
  - [SMS](#sms)
    - [Send SMS](#send-sms)
    - [SMS personalization](#sms-personalization)
  - [SMS phone numbers](#sms-phone-numbers)
    - [Get phone number list](#get-phone-number-list)
    - [Get phone number](#get-phone-number)
    - [Update phone number](#update-phone-number)
    - [Delete phone number](#delete-phone-number)
  - [SMS messages](#sms-messages)
    - [Get messages list](#get-messages-list)
    - [Get a message](#get-a-message)
  - [SMS activity](#sms-activity)
    - [Get activity list](#get-activity-list-1)
  - [SMS recipients](#sms-recipients)
    - [Get recipient list](#get-recipient-list)
    - [Get recipient](#get-recipient)
    - [Update recipient](#update-recipient)
  - [SMS webhooks](#sms-webhooks)
    - [Get webhook list for a number](#get-webhook-list-for-a-number)
    - [Get webhook](#get-webhook-1)
    - [Create webhook](#create-webhook-1)
    - [Update webhook](#update-webhook-1)
    - [Delete webhook](#delete-webhook-1)
  - [SMS inbound routing](#sms-inbound-routing)
    - [Get inbound list](#get-inbound-list)
    - [Get inbound](#get-inbound)
    - [Add inbound](#add-inbound)
    - [Update inbound](#update-inbound)
    - [Delete inbound](#delete-inbound)
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
    - [Get a list of SMTP users](#get-a-list-of-smtp-users)
    - [Get a single SMTP user](#get-a-single-smtp-user)
    - [Add SMTP user](#add-smtp-user)
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

### Send a template-based email in a specific language

The optional `language` field accepts a language code (for example `de`, `fr`, `pt-BR`). It only applies to template-based sends and is ignored for raw HTML/text emails. Supported values: `de`, `en`, `es`, `fr`, `it`, `lt`, `nl`, `pl`, `pt-BR`.

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
  .setTemplateId('templateId')
  .setLanguage("de");

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

### Get bulk email status

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

Call `setIncludeAttachments(false)` to drop attachments before the message is forwarded. It defaults to `true`. Inline (CID) parts count as attachments, so images embedded in an HTML body are dropped too. Call `setCatchType("one")` to forward when any catch filter matches instead of all of them (only with `catch_recipient`), and `setMatchType("one")` for the same on `match_sender`, `match_domain` or `match_header` filters. Both default to `"all"`.

```js
import 'dotenv/config';
import { MailerSend, Inbound, InboundFilterType, ComparerType } from "mailersend";

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

```

### Update an inbound route

Leaving `setIncludeAttachments()` unset keeps the route's stored value; the API does not reset it to `true`. Pass `false` explicitly to drop attachments. `catch_type` and `match_type` work the other way: leaving `setCatchType()` / `setMatchType()` unset resets the route to `"all"`, so call them on every update of a route that uses `"one"`.

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
  ])
  .setIncludeAttachments(true);

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
  date_to: 1443661141, // Unix timestamp
  event: [ActivityEventType.SENT, ActivityEventType.SOFT_BOUNCED, ActivityEventType.SUPPRESSED]
}

mailerSend.email.activity.domain("domain_id", queryParams)
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error));

```

Activities of type `suppressed` also include a `suppression_reason` field, one of `on_hold`, `hard_bounced`, `unsubscribed`, `spam_complained` or `blocklisted`. Requires the Starter plan or above.

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

## Emails

An email is the record of a message delivered to one recipient. Unlike [activities](#activity), which return one row per *event*, these requests return one row per *email* with its current status and a summary of recipient interaction.

### Get a list of emails

```js
import 'dotenv/config';
import { MailerSend, EmailStatus, EmailInteraction } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

const queryParams = {
  domain_id: "domain_id",
  date_from: 1443651141, // Unix timestamp
  date_to: 1443661141, // Unix timestamp
  page: 1, // Min: 1, Max: 100, Default: 1
  limit: 50, // Min: 10, Max: 1000, Default: 25
  status: [EmailStatus.SENT, EmailStatus.DELIVERED],
  interaction: [EmailInteraction.OPENED]
}

mailerSend.email.list(queryParams)
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));

```

`domain_id`, `date_from` and `date_to` are required — every query is bound to a single domain and a single time window. Emails are returned newest first.

| Query parameter   | Type                            | Required | Details                                                                                                                          |
|-------------------|---------------------------------|----------|----------------------------------------------------------------------------------------------------------------------------------|
| `domain_id`       | `string`                        | yes      | Must be a domain that belongs to your account. An unknown ID returns `404`.                                                      |
| `date_from`       | `number \| string`              | yes      | Unix timestamp (`1443651141`) or datetime (`2015-10-01 00:00:00`), assumed `UTC`. Must be lower than `date_to`.                  |
| `date_to`         | `number \| string`              | yes      | Unix timestamp or datetime, assumed `UTC`. Must be higher than `date_from`.                                                      |
| `page`            | `number`                        | no       | Min: `1`, Max: `100`, Default: `1`. See [Pagination](#emails-pagination).                                                         |
| `limit`           | `number`                        | no       | Min: `10`, Max: `1000`, Default: `25`.                                                                                           |
| `status`          | `EmailStatus[]`                 | no       | Any of `queued`, `sent`, `rejected`, `delivered`. Values are combined with `OR`.                                                  |
| `interaction`     | `EmailInteraction[]`            | no       | Any of `opened`, `clicked`, `unsubscribed`, `complained`, `no_interaction`. Values are combined with `OR`.                         |
| `recipient_email` | `string`                        | no       | Exact, case-insensitive match. An address with no emails returns `200` with an empty `data` array.                                 |
| `message_id`      | `string`                        | no       | Alphanumeric. Exact match.                                                                                                       |
| `template_id`     | `string`                        | no       | Exact match.                                                                                                                     |
| `subject`         | `string`                        | no       | Min: `3` characters. Partial, case-insensitive match.                                                                            |
| `tag`             | `string`                        | no       | Exact match against a value in the email's `tags` array.                                                                          |

`status` and `interaction` must be arrays. The two filters are combined with `AND`, so the example above returns emails that are sent **or** delivered **and** that were opened. `EmailInteraction.NO_INTERACTION` matches emails with none of `opened`, `clicked`, `unsubscribed` or `complained` recorded — it is a filter value only and is never returned in a response.

Requires a token with one of the `activity_read` or `activity_full` scopes. Requests are limited to 10 requests/minute, shared with [Get activity list](#get-activity-list) — requests to either endpoint count against the same per-account budget.

<a name="emails-pagination"></a>

#### Pagination

This endpoint paginates with `page` and `limit`, exactly like [Get activity list](#get-activity-list), so `EmailsQueryParams` extends the shared `Pagination` type. To walk the result set, request the next page until `links.next` is `null`:

```js
import 'dotenv/config';
import { MailerSend } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

const queryParams = {
  domain_id: "domain_id",
  date_from: 1443651141,
  date_to: 1443661141,
  limit: 100,
};

let page = 1;
let hasMore = true;

while (hasMore) {
  const response = await mailerSend.email.list({ ...queryParams, page });

  response.body.data.forEach((email) => console.log(email.id, email.status, email.subject));

  hasMore = response.body.links.next !== null;
  page++;
}

```

Every request has to repeat `domain_id`, `date_from`, `date_to` and any filters alongside `page` — dropping one of them returns `422`. Keep `limit` the same across the whole walk, otherwise page boundaries shift underneath you.

Notes on the response envelope:

- `links.next` and `links.prev` are full URLs with all your query parameters preserved, or `null` at the first and last page.
- `links.last` is **always** `null` — the API does not report a last page for this endpoint.
- `meta` contains `current_page`, `current_page_url`, `from`, `path`, `per_page` and `to`. There is no `total` and no `last_page`, so check `links.next` rather than trying to compute the page count up front.

A filter that matches nothing returns `200` with an empty `data` array, `links.next: null` and `meta.from`/`meta.to` set to `null`.

#### Types

`EmailListResponse` describes the response body, and `EmailsQueryParams` the query parameters:

```ts
import {
  MailerSend,
  EmailsQueryParams,
  EmailListResponse,
  EmailStatus,
  EmailInteraction,
} from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY as string,
});

const queryParams: EmailsQueryParams = {
  domain_id: "domain_id",
  date_from: 1443651141,
  date_to: 1443661141,
  status: [EmailStatus.DELIVERED],
  interaction: [EmailInteraction.CLICKED],
};

const response = await mailerSend.email.list(queryParams);
const emails: EmailListResponse = response.body;

```

Each item in `data` is an `EmailListItem`, with `id`, `from`, `to`, `subject`, `text`, `html`, `template_id`, `domain_id`, `message_id`, `status`, `tags`, `interaction`, `suppression_reason`, `created_at`, `updated_at` and `headers`.

- `text` and `html` are **always** `null` in list rows, whatever the email actually contained — the list query does not project the content columns. Use [Get a single email](#get-a-single-email) to read the body. They are typed `string | null` rather than `null` so one function can handle both a list row and a single email.
- `tags`, `template_id` and `headers` are `null` when unused.
- `headers` is an array of `{ name, value }` objects — the same `EmailHeader` type used when sending — not a flat object.
- `interaction` is an empty array when there was no interaction, and never contains `no_interaction`.
- `suppression_reason` is only set when `status` is `rejected`.
- List rows carry no `recipient` and no `activity` — use [Get a single email](#get-a-single-email) for those.

### Get a single email

```js
import 'dotenv/config';
import { MailerSend } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.email.single("email_id")
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));

```

| URL parameter | Type     | Required | Details                                                    |
|---------------|----------|----------|------------------------------------------------------------|
| `email_id`    | `string` | yes      | The `id` of an email, as returned by [Get a list of emails](#get-a-list-of-emails). |

Requires a token with one of the `email_full`, `activity_read` or `activity_full` scopes. An email that does not exist or belongs to another account returns `404`.

The response carries the full email: `id`, `from`, `to`, `subject`, `text`, `html`, `template_id`, `domain_id`, `message_id`, `status`, `tags`, `interaction`, `suppression_reason`, `created_at`, `updated_at`, `recipient`, `headers` and `activity`. Unlike a list row, `text` and `html` hold the actual content here, and `recipient` and `activity` are present.

Alongside the email's content, `data.activity` holds the activity events recorded for it:

| Response key                         | Type       | Details                                                                                                     |
|--------------------------------------|------------|-------------------------------------------------------------------------------------------------------------|
| `data.activity[].id`                 | `string`   | ID of the event. Pass it to [Get single activity](#get-single-activity) for the full event.                   |
| `data.activity[].type`               | `string`   | The event type.                                                                                             |
| `data.activity[].created_at`         | `string`   |                                                                                                             |
| `data.activity[].suppression_reason`  | `string`   | Only present on `suppressed` events. One of `on_hold`, `hard_bounced`, `unsubscribed`, `spam_complained`, `blocklisted`. |

- Events are returned newest first and are capped at 200 events per email. There is no pagination on this array — use [Get activity list](#get-activity-list) if you need the complete event history for a domain.
- The `junk` event type is reported as `soft_bounced`.
- `deferred` and `suppressed` events are only included if your plan has those features enabled. They are available on the Starter plan and above.
- `activity` is returned even when content tracking is disabled for the domain. In that case `html` and `text` are `null`, but the events are still present.
- `template_id` is `null` when the email was not sent from a template.

`EmailResponse` describes the response body, `Email` the email itself, and `EmailActivityEvent` an entry in `data.activity`:

```ts
import { MailerSend, EmailResponse } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY as string,
});

const response = await mailerSend.email.single("email_id");
const email: EmailResponse = response.body;

email.data.activity.forEach((event) => console.log(event.type, event.created_at));

```

## Analytics

### Get activity data by date

```js
import 'dotenv/config';
import { ActivityEventType, AnalyticsGroupByType, MailerSend } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

const dateTo = Math.floor(Date.now() / 1000); // Unix timestamp; must not be in the future
const dateFrom = dateTo - 30 * 24 * 60 * 60; // no more than 183 days in the past

const queryParams = {
  date_from: dateFrom,
  date_to: dateTo,
  // date_from / date_to also accept ISO 8601 ("YYYY-MM-DDTHH:MM:SSZ") or datetime ("YYYY-MM-DD HH:MM:SS") strings
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

const dateTo = Math.floor(Date.now() / 1000); // Unix timestamp; must not be in the future
const dateFrom = dateTo - 30 * 24 * 60 * 60; // no more than 183 days in the past

mailerSend.email.analytics.byCountry({
  date_from: dateFrom,
  date_to: dateTo,
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

const dateTo = Math.floor(Date.now() / 1000); // Unix timestamp; must not be in the future
const dateFrom = dateTo - 30 * 24 * 60 * 60; // no more than 183 days in the past

mailerSend.email.analytics.byUserAgent({
  date_from: dateFrom,
  date_to: dateTo,
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

const dateTo = Math.floor(Date.now() / 1000); // Unix timestamp; must not be in the future
const dateFrom = dateTo - 30 * 24 * 60 * 60; // no more than 183 days in the past

mailerSend.email.analytics.byReadingEnvironment({
  date_from: dateFrom,
  date_to: dateTo,
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
  "rpsubdomain",
  "ctsubdomain",
  "irsubdomain",
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
  track_unsubscribe_html: '<p>Click here to <a href="{{unsubscribe}}">unsubscribe</a></p>',
  track_unsubscribe_plain: "Click here to unsubscribe: {{unsubscribe}}",
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

### Get a list of scheduled messages

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

### Get a single scheduled message

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

### Delete a scheduled message

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
  ],
  patterns: [
    ".*@example.com"
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
  ["blocklist_entry_id", "blocklist_entry_id"],
  BlockListType.BLOCK_LIST
)
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));

// You can also specify the domain
mailerSend.email.recipient.delBlockListRecipients(
  ["blocklist_entry_id"],
  BlockListType.BLOCK_LIST,
  "domain_id"
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
  ["hard_bounce_id", "hard_bounce_id"],
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
  ["spam_complaint_id", "spam_complaint_id"],
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
  ["unsubscribe_id", "unsubscribe_id"],
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

// You can also specify the domain
mailerSend.email.recipient.delAllBlockListRecipients(BlockListType.BLOCK_LIST, "domain_id")
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
  ["on_hold_entry_id", "on_hold_entry_id"],
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

### Verify webhook signature

See [Utils — Verify a webhook signature](#verify-a-webhook-signature).

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

## WhatsApp

### Send a WhatsApp message

```js
import 'dotenv/config';
import { MailerSend, WhatsAppParams } from "mailersend";

const mailersend = new MailerSend({
  apiKey: process.env.API_KEY,
});

const whatsappParams = new WhatsAppParams()
  .setFrom("12345678901")
  .setTo(["19191234567"])
  .setTemplateId("template_id_123");

await mailersend.whatsapp.send(whatsappParams);

```

### WhatsApp personalization

Values are positional: the first value of each array replaces `{{1}}` in that section of the template, the second replaces `{{2}}`, and so on. `setButtons()` takes the URL parameters appended to the template's URL buttons, not full URLs.

```js
import 'dotenv/config';
import { MailerSend, WhatsAppParams, WhatsAppPersonalization } from "mailersend";

const mailersend = new MailerSend({
  apiKey: process.env.API_KEY,
});

const personalization = [
  new WhatsAppPersonalization("19191234567")
    .setHeader(["John"])
    .setBody(["order #1234", "tomorrow"])
    .setButtons(["track/1234"]),
  new WhatsAppPersonalization("19199876543")
    .setHeader(["Jane"])
    .setBody(["order #5678", "Friday"])
    .setButtons(["track/5678"]),
];

const whatsappParams = new WhatsAppParams()
  .setFrom("12345678901")
  .setTo(["19191234567", "19199876543"])
  .setTemplateId("template_id_123")
  .setPersonalization(personalization);

await mailersend.whatsapp.send(whatsappParams);

```

### WhatsApp media headers

If the template has an image, video or document header, pass an object with the file's public `https` URL to `setHeader()` instead of an array. `filename` is only shown for document headers. Every recipient needs one.

```js
import 'dotenv/config';
import { MailerSend, WhatsAppParams, WhatsAppPersonalization } from "mailersend";

const mailersend = new MailerSend({
  apiKey: process.env.API_KEY,
});

const personalization = [
  new WhatsAppPersonalization("19191234567")
    .setHeader({
      link: "https://www.example.com/invoices/12345.pdf",
      filename: "invoice-12345.pdf",
    })
    .setBody(["John", "December 31, 2026"]),
];

const whatsappParams = new WhatsAppParams()
  .setFrom("12345678901")
  .setTo(["19191234567"])
  .setTemplateId("template_id_123")
  .setPersonalization(personalization);

await mailersend.whatsapp.send(whatsappParams);

```

### WhatsApp named variables

Templates with named variables, such as `{{first_name}}`, take an object keyed by variable name instead of an array. Every variable in the section must have a value.

```js
import 'dotenv/config';
import { MailerSend, WhatsAppParams, WhatsAppPersonalization } from "mailersend";

const mailersend = new MailerSend({
  apiKey: process.env.API_KEY,
});

const personalization = [
  new WhatsAppPersonalization("19191234567")
    .setBody({
      first_name: "John",
      order_date: "December 31, 2026",
    }),
];

const whatsappParams = new WhatsAppParams()
  .setFrom("12345678901")
  .setTo(["19191234567"])
  .setTemplateId("template_id_123")
  .setPersonalization(personalization);

await mailersend.whatsapp.send(whatsappParams);

```

## WhatsApp messages API

A WhatsApp message is the resource created by a single [send request](#send-a-whatsapp-message). The delivery to each recipient is tracked separately as an [item](#whatsapp-items-api), and every status an item moves through is recorded as an [activity](#whatsapp-activities-api). Requires a token with one of the `whatsapp_read` or `whatsapp_full` scopes. Messages are kept for 7 days: an older message is no longer listed, and requesting it returns `404`.

All WhatsApp lists use simple pagination. The response carries no `total` and no `last_page`, and `links.last` is always `null`: request the next page until `links.next` is `null`. `page` can't go beyond `100`, so narrow `date_from` and `date_to` to reach older rows. `date_from` and `date_to` accept a Unix timestamp or a datetime that includes a time, such as `2026-10-14T00:00:00Z`, assumed `UTC` and exclusive. A date without a time returns a `422` error.

### Get a list of WhatsApp messages

```js
import 'dotenv/config';
import { MailerSend } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.whatsapp.message.list({
  whatsapp_account_id: "whatsapp_account_id",
  from: "15550001234", // The sender's phone number
  template_id: "template_id",
  date_from: 1790000000, // Unix timestamp or datetime
  date_to: 1790086400, // Unix timestamp or datetime
  limit: 25, // Min: 1, Max: 100, Default: 25
  page: 1, // Min: 1, Max: 100
})
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));

```

Messages are returned newest first. `WhatsAppMessageListResponse` describes the response body, and each item in `data` is a `WhatsAppMessageListItem` with `id`, `from`, `to`, `whatsapp_account_id`, `template_id` and `created_at`. `from` is the sender's phone number, or its WhatsApp username when the message was sent from the username or the sender has no phone number, and `null` when the sender has neither.

### Get a WhatsApp message

```js
import 'dotenv/config';
import { MailerSend } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.whatsapp.message.single("message_id")
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));

```

`WhatsAppMessageResponse` describes the response body. The message has the same fields as a list item, plus `items`: one `WhatsAppItem` per recipient, with the same fields as [Get a list of WhatsApp items](#get-a-list-of-whatsapp-items). Items are created asynchronously, so `items` can be empty right after the message is sent.

```ts
import { MailerSend, WhatsAppMessageResponse } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY as string,
});

const response = await mailerSend.whatsapp.message.single("message_id");
const message: WhatsAppMessageResponse = response.body;

message.data.items.forEach((item) => console.log(item.to, item.status));

```

## WhatsApp items API

An item is the delivery of a message to one recipient. Requires a token with one of the `whatsapp_read` or `whatsapp_full` scopes.

### Get a list of WhatsApp items

```js
import 'dotenv/config';
import { MailerSend } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.whatsapp.item.list({
  recipient: "48600000001", // Phone number, WhatsApp username or BSUID
  whatsapp_message_id: "whatsapp_message_id",
  status: ["delivered", "read"], // queued, sent, delivered, read or failed
  whatsapp_account_id: "whatsapp_account_id",
  from: "15550001234", // The sender's phone number
  template_id: "template_id",
  date_from: 1790000000, // Unix timestamp or datetime
  date_to: 1790086400, // Unix timestamp or datetime
  limit: 25, // Min: 1, Max: 100, Default: 25
  page: 1, // Min: 1, Max: 100
})
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));

```

Items are returned newest first. `WhatsAppItemListResponse` describes the response body, and each item in `data` is a `WhatsAppItem` with `id`, `whatsapp_message_id`, `whatsapp_account_id`, `from`, `to`, `status`, `template_id`, `template_name`, `error_code`, `error_message` and `created_at`. Multiple `status` values are combined with `OR`.

### Get a WhatsApp item

```js
import 'dotenv/config';
import { MailerSend } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.whatsapp.item.single("item_id")
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));

```

`WhatsAppItemResponse` describes the response body. The item has the same fields as a list item, plus `recipient`, the [recipient](#whatsapp-recipients-api) the message was delivered to, and `activity`: every status the item moved through, each with `type` and `created_at`, in status order (`queued`, `sent`, `delivered`, `read`, `failed`).

## WhatsApp activities API

An activity is a single status event of an item, so a delivered and read message appears once as `queued`, once as `sent`, once as `delivered` and once as `read`. Requires a token with one of the `whatsapp_read` or `whatsapp_full` scopes. Activity is kept for 7 days.

### Get a list of WhatsApp activities

```js
import 'dotenv/config';
import { MailerSend } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.whatsapp.activity.list({
  whatsapp_item_id: "whatsapp_item_id",
  whatsapp_message_id: "whatsapp_message_id",
  recipient: "48600000001", // Phone number, WhatsApp username or BSUID
  type: ["delivered", "read"], // queued, sent, delivered, read or failed
  date_from: 1790000000, // Unix timestamp or datetime
  date_to: 1790086400, // Unix timestamp or datetime
  limit: 25, // Min: 1, Max: 100, Default: 25
  page: 1, // Min: 1, Max: 100
})
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));

```

Activities are returned newest first. `WhatsAppActivityListResponse` describes the response body, and each item in `data` is a `WhatsAppActivity` with `id`, `whatsapp_item_id`, `whatsapp_message_id`, `whatsapp_account_id`, `from`, `to`, `type` and `created_at`. Multiple `type` values are combined with `OR`.

## WhatsApp inbound messages API

Inbound messages are the messages people send to your WhatsApp phone numbers. Requires a token with one of the `whatsapp_read` or `whatsapp_full` scopes. Inbound messages are kept for your plan's inbound retention period: an older message is no longer listed, and requesting it returns `404`.

### Get a list of WhatsApp inbound messages

```js
import 'dotenv/config';
import { MailerSend } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.whatsapp.inboundMessage.list({
  whatsapp_account_id: "whatsapp_account_id",
  from: "48600000001", // The customer's phone number or BSUID
  type: ["text", "image"],
  date_from: 1790000000, // Unix timestamp or datetime
  date_to: 1790086400, // Unix timestamp or datetime
  limit: 25, // Min: 1, Max: 100, Default: 25
  page: 1, // Min: 1, Max: 100
})
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));

```

| Query parameter       | Type                           | Required | Details                                                                                                                                                        |
|-----------------------|--------------------------------|----------|----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `whatsapp_account_id` | `string`                       | no       | The MailerSend sender ID of the phone number that received the messages. Must be one of your WhatsApp phone numbers.                                             |
| `from`                | `string`                       | no       | The customer's phone number in international format, or their BSUID. A WhatsApp username is not accepted. Max: `255` characters.                              |
| `type`                | `WhatsAppInboundMessageType[]` | no       | Any of `text`, `image`, `audio`, `video`, `document`, `sticker`, `location`, `contacts`, `interactive`, `button`, `order`, `reaction`, `system`, `unknown`, `unsupported`. Values are combined with `OR`. |
| `date_from`           | `number \| string`             | no       | Unix timestamp or datetime that includes a time, assumed `UTC`. Exclusive. Must be lower than `date_to`.                                                       |
| `date_to`             | `number \| string`             | no       | Unix timestamp or datetime that includes a time, assumed `UTC`. Exclusive. Must be higher than `date_from`.                                                    |
| `page`                | `number`                       | no       | Min: `1`, Max: `100`.                                                                                                                                          |
| `limit`               | `number`                       | no       | Min: `1`, Max: `100`, Default: `25`.                                                                                                                           |

Inbound messages are returned newest first. `WhatsAppInboundMessageListResponse` describes the response body, and each item in `data` is a `WhatsAppInboundMessage` with `id`, `whatsapp_account_id`, `from`, `to`, `type`, `received_at`, `meta` and `context` when the message is a reply.

`meta` holds the content of the message, and its shape depends on `type`:

| `type`                                           | `meta`                                                                 |
|--------------------------------------------------|------------------------------------------------------------------------|
| `text`                                           | `body`                                                                 |
| `image`, `audio`, `video`, `document`, `sticker` | `url`, `status`, `mime_type`, `size`, `caption`, `filename`, `animated` |
| `location`                                       | `latitude`, `longitude`, `name`, `address`                             |
| `reaction`                                       | `message_id`, `emoji`                                                  |
| `button`                                         | `text`, `payload`                                                      |
| `interactive`                                    | `reply_type` (`button_reply` or `list_reply`), `id`, `title`, `description` |
| `contacts`                                       | `contacts`                                                             |
| `order`, `system`, `unknown`, `unsupported`      | The object WhatsApp sent, as received, or `null`                       |

Fields that WhatsApp did not send can be `null` or missing. For media, `meta.url` is a temporary signed URL, and is `null` once the file is no longer stored. Inbound media is kept for 1 day, so download the file as soon as you can if you need to keep it.

### Get a WhatsApp inbound message

```js
import 'dotenv/config';
import { MailerSend } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.whatsapp.inboundMessage.single("inbound_message_id")
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));

```

`WhatsAppInboundMessageResponse` describes the response body. The inbound message has the same fields as a list item.

```ts
import { MailerSend, WhatsAppInboundMessageResponse } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY as string,
});

const response = await mailerSend.whatsapp.inboundMessage.single("inbound_message_id");
const inboundMessage: WhatsAppInboundMessageResponse = response.body;

if (inboundMessage.data.type === "image" && inboundMessage.data.meta?.status === "stored") {
  console.log(inboundMessage.data.meta.url);
}

```

## WhatsApp recipients API

Requires a token with one of the `whatsapp_read` or `whatsapp_full` scopes.

### Get a list of WhatsApp recipients

```js
import 'dotenv/config';
import { MailerSend } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.whatsapp.recipient.list({
  status: "active", // active, invalid, suppressed or blocked
  phone_number: "48600000001",
  limit: 25, // Min: 1, Max: 100, Default: 25
  page: 1, // Min: 1, Max: 100
})
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));

```

Recipients are returned newest first. `WhatsAppRecipientListResponse` describes the response body, and each item in `data` is a `WhatsAppRecipientListItem` with `id`, `phone_number`, `username`, `status` and `created_at`.

### Get a WhatsApp recipient

```js
import 'dotenv/config';
import { MailerSend } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.whatsapp.recipient.single("recipient_id")
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));

```

`WhatsAppRecipientResponse` describes the response body. The recipient has the same fields as a list item, plus `items`: their latest 25 items, newest first, with the same fields as [Get a list of WhatsApp items](#get-a-list-of-whatsapp-items). Pass an item's `id` to [Get a WhatsApp item](#get-a-whatsapp-item) for its status timeline.

## WhatsApp templates API

Look up your templates and their `id`, which you pass as `template_id` when you [send a WhatsApp message](#send-a-whatsapp-message). Requires a token with one of the `whatsapp_read` or `whatsapp_full` scopes.

### Get a list of WhatsApp templates

```js
import 'dotenv/config';
import { MailerSend } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.whatsapp.template.list({
  whatsapp_account_id: "whatsapp_account_id",
  status: "approved", // draft, pending, approved, rejected, archived, deleted, disabled, flagged, in_appeal, limit_exceeded, locked, paused, reinstated or pending_deletion
  category: "UTILITY", // UTILITY, AUTHENTICATION or MARKETING
  language: "en_US",
  limit: 25, // Min: 1, Max: 100, Default: 25
  page: 1, // Min: 1, Max: 100
})
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));

```

Templates are returned newest first. `WhatsAppTemplateListResponse` describes the response body, and each item in `data` is a `WhatsAppTemplate` with `id`, `whatsapp_account_id`, `name`, `readable_name`, `category`, `language`, `status`, `components`, `created_at` and `updated_at`. `components` has `header` and `body`, each `null` when the template has none, and `buttons`. `header.format` is `TEXT`, `IMAGE`, `VIDEO`, `DOCUMENT` or `LOCATION`. Only `approved` templates can be sent.

### Get a WhatsApp template

```js
import 'dotenv/config';
import { MailerSend } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.whatsapp.template.single("template_id")
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));

```

`WhatsAppTemplateResponse` describes the response body. The template has the same fields as a list item.

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

## SMS phone numbers

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

## SMS messages

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

## SMS activity

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

## SMS recipients

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

## SMS webhooks

### Get webhook list for a number

```js
import 'dotenv/config';
import { MailerSend } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.sms.webhook.list({
  sms_number_id: "sms_number_id",
})
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

const smsWebhook = new SmsWebhook(
  "Sms Webhook",
  "https://yourapp.com/hook",
  [SmsWebhookEventType.SENT, SmsWebhookEventType.DELIVERED],
  "sms_number_id",
  true,
);

mailerSend.sms.webhook.create(smsWebhook)
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));

```

### Update webhook

```js
import 'dotenv/config';
import { MailerSend, SmsWebhookEventType } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.sms.webhook.update("sms_webhook_id", {
  name: "Webhook",
  url: "https://yourapp.com/hook",
  events: [SmsWebhookEventType.SENT, SmsWebhookEventType.DELIVERED, SmsWebhookEventType.FAILED],
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

## SMS inbound routing

### Get inbound list

```js
import 'dotenv/config';
import { MailerSend } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.sms.inbound.list({
  enabled: true,
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
import { MailerSend, SmsInbound, SmsComparerType } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

const smsInbound = new SmsInbound("Inbound Name", "sms_number_id", "https://yourapp.com/hook")
  .setEnabled(true)
  .setFilter({
    comparer: SmsComparerType.EQUAL,
    value: "START"
  });

mailerSend.sms.inbound.create(smsInbound)
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));

```

### Update inbound

```js
import 'dotenv/config';
import { MailerSend, SmsInbound, SmsComparerType } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

const smsInbound = new SmsInbound("Inbound Name Update", "sms_number_id", "https://yourapp.com/hook")
  .setEnabled(true)
  .setFilter({
    comparer: SmsComparerType.EQUAL,
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

mailerSend.email.identity.list({ domain_id: 'domain_id', page: 1, limit: 25 })
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));

// With search and ordering
mailerSend.email.identity.list({
  domain_id: 'domain_id',
  query: 'identity@yourdomain.com',
  order_by: 'created_at',
  order: 'desc',
})
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
import { MailerSend, Identity } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

const identity = new Identity('domain_id', 'identity@yourdomain.com')
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

### Get a list of SMTP users

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

### Get a single SMTP user

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

### Add SMTP user

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

`role` is case-sensitive. `permissions` is required only when `role` is `UserRole.CustomUser`, and `templates` needs `UserPermission.ReadOwnTemplates` in `permissions`; both are ignored for other roles.

```js
import 'dotenv/config';
import { MailerSend, UserRole, UserPermission } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.user.create({
  email: "user@example.com",
  role: UserRole.Manager,
})
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));

// Example using all options
mailerSend.user.create({
  email: "user@example.com",
  role: UserRole.CustomUser,
  permissions: [UserPermission.ReadOwnTemplates, UserPermission.ReadActivity],
  templates: ["template_id"],
  domains: ["domain_id"],
  requires_periodic_password_change: true,
})
  .then((response) => console.log(response.body))
  .catch((error) => console.log(error.body));

```

### Update user

`role` is required on every update.

```js
import 'dotenv/config';
import { MailerSend, UserRole } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

mailerSend.user.update("user_id", {
  role: UserRole.Designer,
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
  date_from: "1700000000",
  date_to: "1700100000",
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

Use `MailerSendUtils.verifyWebHook()` to verify the HMAC signature on incoming webhook requests. This works for email, SMS and WhatsApp webhooks. Pass the request headers (a Node/Express headers object or a fetch `Headers` instance) and it reads the `Signature` header for you, or pass the header value as a string.

It returns `false` when the signature does not match the payload, and throws when one of its
arguments is missing — including when the `Signature` header is absent, which is
usually a sign that the route or the signing secret is misconfigured. Wrap the call so that a
request without a valid signature is rejected instead of crashing the handler.

```js
import { MailerSendUtils } from "mailersend";

try {
  // rawBody must be the raw Buffer from the request (do not parse it as JSON first)
  const isValid = MailerSendUtils.verifyWebHook(
    rawBody,
    request.headers,
    process.env.WEBHOOK_SIGNING_SECRET
  );

  if (!isValid) {
    return response.status(401).send("Invalid signature");
  }

  // handle the webhook payload
} catch (error) {
  // the raw body, the signature header or the signing secret was missing
  console.error("Could not verify webhook signature:", error.message);
  return response.status(401).send("Invalid signature");
}
```

# Support and Feedback

In case you find any bugs, submit an issue directly here in GitHub.

You are welcome to create SDK for any other programming language.

If you have any troubles using our API or SDK free to contact our support by email [info@mailersend.com](mailto:info@mailersend.com)

The official documentation is at [https://developers.mailersend.com](https://developers.mailersend.com)

# License

[The MIT License (MIT)](LICENSE)
