<a href="https://www.mailersend.com"><img src="https://www.mailersend.com/images/logo.svg" width="200px"/></a>

MailerSend Node.js SDK

[![MIT licensed](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE.md)

# Table of Contents

- [Installation](#installation)
  * [Setup](#setup)
- [Usage](#usage)
  * [Email](#email)
    + [Send an email](#send-an-email)
    + [Add CC, BCC recipients](#add-cc--bcc-recipients)
    + [Send a template-based email](#send-a-template-based-email)
    + [Advanced personalization](#advanced-personalization)
    + [Simple personalization](#simple-personalization)
    + [Send email with attachment](#send-email-with-attachment)
    + [Send bulk emails](#send-bulk-emails)
    + [Get bulk request status](#get-bulk-request-status)
  * [Tokens](#tokens)
    + [Create a token](#create-a-token)
    + [Update token](#update-token)
    + [Delete token](#delete-token)
  * [Activity](#activity)
    + [Get activity list](#get-activity-list)
  * [Analytics](#analytics)
    + [Get activity data by date](#get-activity-data-by-date)
    + [Opens by country](#opens-by-country)
    + [Opens by user-agent](#opens-by-user-agent)
    + [Opens by reading environment](#opens-by-reading-environment)
  * [Domains](#domains)
    + [Get a list of domains](#get-a-list-of-domains)
    + [Get domain](#get-domain)
    + [Delete domain](#delete-domain)
    + [Get a list of recipients per domain](#get-a-list-of-recipients-per-domain)
    + [Update domain settings](#update-domain-settings)
    + [Add a domain](#add-a-domain)
    + [Get DNS records](#get-dns-records)
    + [Get verification status](#get-verification-status)
  * [Messages](#messages)
    + [Get a list of messages](#get-a-list-of-messages)
    + [Get info on a message](#get-info-on-a-message)
  * [Recipients](#recipients)
    + [Get a list of recipients](#get-a-list-of-recipients)
    + [Get single recipient](#get-single-recipient)
    + [Delete recipient](#delete-recipient)
    + [Add recipients to a suppression list](#add-recipients-to-a-suppression-list)
    + [Get recipients from a suppression list](#get-recipients-from-a-suppression-list)
    + [Delete recipients from a suppression list](#delete-recipients-from-a-suppression-list)
  * [Templates](#templates)
    + [Get a list of templates](#get-a-list-of-templates)
    + [Get a single template](#get-a-single-template)
    + [Delete a template](#delete-a-template)
  * [Webhooks](#webhooks)
    + [Get a list of webhooks](#get-a-list-of-webhooks)
    + [Get webhook](#get-webhook)
    + [Create webhook](#create-webhook)
    + [Update webhook](#update-webhook)
    + [Delete webhook](#delete-webhook)
- [Support and Feedback](#support-and-feedback)
- [License](#license)


# Installation

## Setup

```bash
npm install mailersend
```

# Usage

## Email

### Send an email

```js
const Recipient = require("mailersend").Recipient;
const EmailParams = require("mailersend").EmailParams;
const MailerSend = require("mailersend");

const mailersend = new MailerSend({
    api_key: "key",
});

const recipients = [
  new Recipient("your@client.com", "Your Client")
];

const emailParams = new EmailParams()
      .setFrom("your@domain.com")
      .setFromName("Your Name")
      .setRecipients(recipients)
      .setReplyTo("reply@domain.com")
      .setReplyToName("Reply to name")
      .setSubject("Subject")
      .setHtml("This is the HTML content")
      .setText("This is the text content");

mailersend.send(emailParams);
```

### Add CC, BCC recipients

```js
const Recipient = require("mailersend").Recipient;
const EmailParams = require("mailersend").EmailParams;
const MailerSend = require("mailersend");

const mailersend = new MailerSend({
    api_key: "key",
});

const recipients = [
  new Recipient("your@client.com", "Your Client")
];
const cc = [
  new Recipient("your_cc@client.com", "Your CC Client")
];
const bcc = [
  new Recipient("your_bcc@client.com", "Your BCC Client")
];

const emailParams = new EmailParams()
      .setFrom("your@domain.com")
      .setFromName("Your Name")
      .setRecipients(recipients)
      .setCc(cc)
      .setBcc(bcc)
      .setSubject("Subject")
      .setHtml("This is the HTML content")
      .setText("This is the text content");

mailersend.send(emailParams);
```

### Send a template-based email

```js
const Recipient = require("mailersend").Recipient;
const EmailParams = require("mailersend").EmailParams;
const MailerSend = require("mailersend");

const mailersend = new MailerSend({
    api_key: "key",
});

const recipients = [
  new Recipient("your@client.com", "Your Client")
];

const emailParams = new EmailParams()
      .setFrom("your@domain.com")
      .setFromName("Your Name")
      .setRecipients(recipients)
      .setTemplateId('templateId')
      .setSubject("Subject")

mailersend.send(emailParams);
```

### Advanced personalization

```js
const Recipient = require("mailersend").Recipient;
const EmailParams = require("mailersend").EmailParams;
const MailerSend = require("mailersend");

const mailersend = new MailerSend({
    api_key: "key",
});

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
      .setFrom("your@domain.com")
      .setFromName("Your Name")
      .setRecipients(recipients)
      .setPersonalization(personalization)
      .setSubject("Subject, {{ test }}")
      .setHtml("This is the HTML content, {{ test }}")
      .setText("This is the text content, {{ test }}");

mailersend.send(emailParams);
```

### Simple personalization

```js
const Recipient = require("mailersend").Recipient;
const EmailParams = require("mailersend").EmailParams;
const MailerSend = require("mailersend");

const mailersend = new MailerSend({
    api_key: "key",
});

const recipients = [
  new Recipient("your@client.com", "Your Client")
];

const variables = [
  {
    email: "your@client.com",
    substitutions: [
      {
        var: 'test',
        value: 'Test Value'
      }
    ],
  }
];

const emailParams = new EmailParams()
      .setFrom("your@domain.com")
      .setFromName("Your Name")
      .setRecipients(recipients)
      .setVariables(variables)
      .setSubject("Subject, {$test}")
      .setHtml("This is the HTML content, {$test}")
      .setText("This is the text content, {$test}");

mailersend.send(emailParams);
```

### Send email with attachment

```js
const fs = require('fs');

const Recipient = require("mailersend").Recipient;
const EmailParams = require("mailersend").EmailParams;
const Attachment = require("mailersend").Attachment;
const MailerSend = require("mailersend");

const mailersend = new MailerSend({
    api_key: "key",
});

const recipients = [
  new Recipient("your@client.com", "Your Client")
];

const attachments = [
  new Attachment(fs.readFileSync('/path/to/file.pdf', {encoding: 'base64'}), 'file.pdf')
]

const emailParams = new EmailParams()
      .setFrom("your@domain.com")
      .setFromName("Your Name")
      .setRecipients(recipients)
      .setAttachments(attachments)
      .setSubject("Subject")
      .setHtml("This is the HTML content")
      .setText("This is the text content");

mailersend.send(emailParams);
```

### Send a scheduled email

```js
const fs = require('fs');

const Recipient = require("mailersend").Recipient;
const EmailParams = require("mailersend").EmailParams;
const MailerSend = require("mailersend");

const mailersend = new MailerSend({
    api_key: "key",
});

const recipients = [
  new Recipient("your@client.com", "Your Client")
];

const emailParams = new EmailParams()
      .setFrom("your@domain.com")
      .setFromName("Your Name")
      .setRecipients(recipients)
      .setAttachments(attachments)
      .setSubject("Subject")
      .setSendAt(2443651141) //set sentAt is a timestamp - min: now, max: now + 72hours
      .setHtml("This is the HTML content")
      .setText("This is the text content");

mailersend.send(emailParams);
```

### Send bulk emails
```js
const Recipient = require("mailersend").Recipient;
const EmailParams = require("mailersend").EmailParams;
const BulkEmails = require("mailersend").BulkEmails;
const MailerSend = require("mailersend");

const mailersend = new MailerSend({
  api_key: "key",
});

const bulkEmails = new BulkEmails();

const recipients = [
  new Recipient("your@client.com", "Your Client")
];

const emailParams = new EmailParams()
  .setFrom("your@domain.com")
  .setFromName("Your Name")
  .setRecipients(recipients)
  .setSubject("Subject")
  .setHtml("This is the HTML content")
  .setText("This is the text content");


bulkEmails.addEmail(emailParams)
bulkEmails.addEmails([
  emailParams,
  emailParams
])

mailersend.sendBulk(bulkEmails)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });
```

### Get bulk request status
```js
const MailerSend = require("mailersend");

const mailersend = new MailerSend({
  api_key: "key",
});

mailersend.getBulkEmailRequestStatus({
  bulk_email_id: 'xxx'
})
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });
```

## Tokens

### Create a token

```js
const MailerSend = require("mailersend");

const mailersend = new MailerSend({
    api_key: "key",
});

mailersend.createToken({
  name: "Token name",
  domain_id: "xxx",
  scopes: [
    "email_full",
    "domains_read",
    "domains_full",
    "activity_read",
    "activity_full",
    "analytics_read",
    "analytics_full",
    "tokens_full",
  ]
})
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });
```

### Update token

```js
const MailerSend = require("mailersend");

const mailersend = new MailerSend({
    api_key: "key",
});

mailersend.updateToken({
  token_id: "xxx",
  status: "pause"
})
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });
```

### Delete token

```js
const MailerSend = require("mailersend");

const mailersend = new MailerSend({
    api_key: "key",
});

mailersend.deleteToken({
  token_id: "xxx"
})
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });
```

## Activity

### Get activity list

```js
const MailerSend = require("mailersend");

const mailersend = new MailerSend({
    api_key: "key",
});

mailersend.activityList({
  domain_id: "xxx",
})
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });
```

## Analytics

### Get activity data by date

```js
const MailerSend = require("mailersend");

const mailersend = new MailerSend({
    api_key: "key",
});

mailersend.activityByDate({
  date_from: 1443651141,
  date_to: 2443651141,
  event: ["processed"]
})
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });
```

### Opens by country

```js
const MailerSend = require("mailersend");

const mailersend = new MailerSend({
    api_key: "key",
});

mailersend.activityByCountry({
  date_from: 1443651141,
  date_to: 2443651141
})
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });
```

### Opens by user-agent

```js
const MailerSend = require("mailersend");

const mailersend = new MailerSend({
    api_key: "key",
});

mailersend.activityByUserAgent({
  date_from: 1443651141,
  date_to: 2443651141
})
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });
```

### Opens by reading environment

```js
const MailerSend = require("mailersend");

const mailersend = new MailerSend({
    api_key: "key",
});

mailersend.activityByReadingEnvironment({
  date_from: 1443651141,
  date_to: 2443651141
})
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });
```


## Domains

### Get a list of domains

```js
const MailerSend = require("mailersend");

const mailersend = new MailerSend({
    api_key: "key",
});

mailersend.domainList({
})
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });
```

### Get domain

```js
const MailerSend = require("mailersend");

const mailersend = new MailerSend({
    api_key: "key",
});

mailersend.domain({
  domain_id: 'xxx'
})
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });
```

### Delete domain

```js
const MailerSend = require("mailersend");

const mailersend = new MailerSend({
    api_key: "key",
});

mailersend.deleteDomain({
  domain_id: 'xxx'
})
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });
```

### Get a list of recipients per domain

```js
const MailerSend = require("mailersend");

const mailersend = new MailerSend({
    api_key: "key",
});

mailersend.domainRecipients({
  domain_id: 'xxx'
})
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });
```

### Update domain settings

```js
const MailerSend = require("mailersend");

const mailersend = new MailerSend({
    api_key: "key",
});

mailersend.domainSettings({
  domain_id: 'xxx',
  send_paused: false
})
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });
```
### Add a domain

```js
const MailerSend = require("mailersend");

const mailersend = new MailerSend({
    api_key: "key",
});

mailersend.addDomain({
    name: "example.com",
    return_path_subdomain: "rp_subdomain",
    custom_tracking_subdomain: "ct_subdomain",
    inbound_routing_subdomain: "ir_subdomain",
  })
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });
```

### Get DNS records

```js
const MailerSend = require("mailersend");

const mailersend = new MailerSend({
    api_key: "key",
});

mailersend.getDNS({
    domain_id: "xxx",
  })
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });
```

### Get verification status

```js
const MailerSend = require("mailersend");

const mailersend = new MailerSend({
    api_key: "key",
});

mailersend.verifyDomain({
    domain_id: "xxx",
  })
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });
```

## Inbound

### Get inbound list
```js
const MailerSend = require("mailersend");

const mailersend = new MailerSend({
    api_key: "key",
});

mailersend.inboundList()
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });
```

### Get inbound
```js
const MailerSend = require("mailersend");

const mailersend = new MailerSend({
    api_key: "key",
});

mailersend.inbound({
  inbound_id: 'xxx'
})
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });
```

### Create inbound
```js
const MailerSend = require("mailersend");

const mailersend = new MailerSend({
    api_key: "key",
});

mailersend.createInbound({
  domain_id: "xxx",
  name: "Test name",
  domain_enabled: true,
  inbound_domain: "test.yourdomain.com",
  inbound_address: "test@inbound.yourdomain.com",
  inbound_subdomain: "inbound",
  match_filter: {
    type: "match_all"
  },
  catch_filter: {
    type: "catch_recipient",
    filters: [
      {
        comparer: "equal",
        value: "test"
        }
    ]
  },
  forwards: [
    {
      type: "webhook",
      value: "https://www.yourdomain.com/hook"
    }
  ]
})
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });
```

### Update inbound
```js
const MailerSend = require("mailersend");

const mailersend = new MailerSend({
    api_key: "key",
});

mailersend.updateInbound({
  inbound_id: "xxx",
  domain_id: "xxx",
  name: "Test name",
  domain_enabled: true,
  inbound_domain: "test.yourdomain.com",
  inbound_address: "test@inbound.yourdomain.com",
  inbound_subdomain: "inbound",
  match_filter: {
    type: "match_all"
  },
  catch_filter: {
    type: "catch_recipient",
    filters: [
      {
        comparer: "equal",
        value: "test"
        }
    ]
  },
  forwards: [
    {
      type: "webhook",
      value: "https://www.yourdomain.com/hook"
    }
  ]
})
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });
```

### Delete inbound
```js
const MailerSend = require("mailersend");

const mailersend = new MailerSend({
    api_key: "key",
});

mailersend.deleteInbound({
  inbound_id: 'xxx'
});
```

## Messages

### Get a list of messages

```js
const MailerSend = require("mailersend");

const mailersend = new MailerSend({
    api_key: "key",
});

mailersend.messagesList()
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });
```

### Get info on a message

```js
const MailerSend = require("mailersend");

const mailersend = new MailerSend({
    api_key: "key",
});

mailersend.message({
  message_id: 'xxx'
})
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });
```

## Scheduled Messages

### Get scheduled email list
```js
const MailerSend = require("mailersend");

const mailersend = new MailerSend({
    api_key: "key",
});

mailersend.scheduleList()
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });
```

### Get scheduled email
```js
const MailerSend = require("mailersend");

const mailersend = new MailerSend({
    api_key: "key",
});

mailersend.schedule({
  message_id: 'xxx'
})
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });
```

### Delete scheduled email
```js
const MailerSend = require("mailersend");

const mailersend = new MailerSend({
    api_key: "key",
});

mailersend.deleteSchedule({
  message_id: 'xxx'
});
```

## Recipients

### Get a list of recipients

```js
const MailerSend = require("mailersend");

const mailersend = new MailerSend({
    api_key: "key",
});

mailersend.recipientsList()
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });
```

### Get single recipient

```js
const MailerSend = require("mailersend");

const mailersend = new MailerSend({
    api_key: "key",
});

mailersend.recipient({
  recipient_id: 'xxx'
})
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });
```

### Delete recipient

```js
const MailerSend = require("mailersend");

const mailersend = new MailerSend({
    api_key: "key",
});

mailersend.deleteRecipient({
  recipient_id: 'xxx'
});
```

### Add recipients to a suppression list

#### Blocklist
```js
const MailerSend = require("mailersend");

const mailersend = new MailerSend({
    api_key: "key",
});

mailersend.addRecipientsToBlocklist({
  domain_id: 'xxx',
  recipients: [
    "test@example.com"
  ]
})
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });
```

#### Hard Bounces
```js
const MailerSend = require("mailersend");

const mailersend = new MailerSend({
    api_key: "key",
});

mailersend.addRecipientsToHardBounceList({
  domain_id: 'xxx',
  recipients: [
    "test@example.com"
  ]
})
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });
```

#### Spam Complaints
```js
const MailerSend = require("mailersend");

const mailersend = new MailerSend({
    api_key: "key",
});

mailersend.addRecipientsToSpamComplaintList({
  domain_id: 'xxx',
  recipients: [
    "test@example.com"
  ]
})
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });
```

#### Unsubscribe
```js
const MailerSend = require("mailersend");

const mailersend = new MailerSend({
    api_key: "key",
});

mailersend.addRecipientsToUnsubscribeList({
  domain_id: 'xxx',
  recipients: [
    "test@example.com"
  ]
})
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });
```

### Get recipients from a suppression list

#### Blocklist
```js
const MailerSend = require("mailersend");

const mailersend = new MailerSend({
    api_key: "key",
});

mailersend.getRecipientsFromBlocklist({
  domain_id: 'xxx'
})
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });
```

#### Hard Bounce
```js
const MailerSend = require("mailersend");

const mailersend = new MailerSend({
    api_key: "key",
});

mailersend.getRecipientsFromHardBounceList({
  domain_id: 'xxx'
})
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });
```

#### Spam Complaint
```js
const MailerSend = require("mailersend");

const mailersend = new MailerSend({
    api_key: "key",
});

mailersend.getRecipientsFromSpamComplaintList({
  domain_id: 'xxx'
})
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });
```

#### Unsubscribe
```js
const MailerSend = require("mailersend");

const mailersend = new MailerSend({
    api_key: "key",
});

mailersend.getRecipientsFromUnsubscribeList({
  domain_id: 'xxx'
})
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });
```

### Delete recipients from a suppression list

#### Blocklist
```js
const MailerSend = require("mailersend");

const mailersend = new MailerSend({
    api_key: "key",
});

mailersend.deleteRecipientsFromBlocklist({
  ids: [
    "xxxxxxxxxxx",
    "yyyyyyyyyyy"
  ]
});
```

#### Hard Bounce
```js
const MailerSend = require("mailersend");

const mailersend = new MailerSend({
    api_key: "key",
});

mailersend.deleteRecipientsFromHardBounceList({
  ids: [
    "xxxxxxxxxxx",
    "yyyyyyyyyyy"
  ]
});
```

#### Spam Complaint
```js
const MailerSend = require("mailersend");

const mailersend = new MailerSend({
    api_key: "key",
});

mailersend.deleteRecipientsFromSpamComplaintList({
  ids: [
    "xxxxxxxxxxx",
    "yyyyyyyyyyy"
  ]
});
```

#### Unsubscribe
```js
const MailerSend = require("mailersend");

const mailersend = new MailerSend({
    api_key: "key",
});

mailersend.deleteRecipientsFromUnsubscribeList({
  ids: [
    "xxxxxxxxxxx",
    "yyyyyyyyyyy"
  ]
});
```

## Templates

### Get a list of templates

```js
const MailerSend = require("mailersend");

const mailersend = new MailerSend({
    api_key: "key",
});

mailersend.templateList()
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });
```

### Get a single template

```js
const MailerSend = require("mailersend");

const mailersend = new MailerSend({
    api_key: "key",
});

mailersend.template({
  template_id: 'xxx'
})
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });
```

### Delete a template

```js
const MailerSend = require("mailersend");

const mailersend = new MailerSend({
    api_key: "key",
});

mailersend.deleteTemplate({
  template_id: 'xxx'
});
```

## Webhooks

### Get a list of webhooks

```js
const MailerSend = require("mailersend");

const mailersend = new MailerSend({
    api_key: "key",
});

mailersend.webhooksList({
  domain_id: "xxx"
})
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });
```

### Get webhook

```js
const MailerSend = require("mailersend");

const mailersend = new MailerSend({
    api_key: "key",
});

mailersend.webhook({
  webhook_id: 'xxx'
})
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });
```

### Create webhook

```js
const MailerSend = require("mailersend");

const mailersend = new MailerSend({
    api_key: "key",
});

mailersend.createWebhook({
  url: "https://example.com",
  name: "Webhook name",
  events: ["activity.sent"],
  domain_id: "xxx"
})
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });
```

### Update webhook

```js
const MailerSend = require("mailersend");

const mailersend = new MailerSend({
    api_key: "key",
});

mailersend.updateWebhook({
  webhook_id: "xxx",
  name: "New name"
})
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });
```

### Delete webhook

```js
const MailerSend = require("mailersend");

const mailersend = new MailerSend({
    api_key: "key",
});

mailersend.deleteWebhook({
  webhook_id: 'xxx'
});
```

# SMS

### Send SMS
```js
const MailerSend = require("mailersend");
const SmsParams  = require("mailersend").SmsParams;

const mailersend = new MailerSend({
  api_key: "key",
});

const recipients = [
  "+18332647501",
  "+18332647500",
];

const smsParams = new SmsParams()
      .setFrom("+18332647501")
      .setRecipients(recipients)
      .setText("This is the text content");

mailersend.sendSms(smsParams);
```

### SMS personalization
```js
const MailerSend = require("mailersend");
const SmsParams  = require("mailersend").SmsParams;

const mailersend = new MailerSend({
  api_key: "key",
});

const personalization = [
  {
    "phone_number": "+18332647501",
    "data": {
      "name": "Dummy"
    }
  },
  {
    "phone_number": "+18332647502",
    "data": {
      "name": "Not Dummy"
    }
  }
];

const smsParams = new SmsParams()
  .setFrom("+18332647501")
  .setRecipients(recipients)
  .setPersonalization(personalization)
  .setText("Hey {{name}} welcome to our organization");

mailersend.sendSms(smsParams);
```

## Phone Numbers

### Get phone number list
```js
const MailerSend = require("mailersend");

const mailersend = new MailerSend({
  api_key: "key",
});

mailersend.getSmsNumbers()
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });
```

### Get phone number
```js
const MailerSend = require("mailersend");

const mailersend = new MailerSend({
  api_key: "key",
});

mailersend.getSmsNumber({
  sms_number_id: 'xxx'
})
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });
```

### Update phone number
```js
const MailerSend = require("mailersend");

const mailersend = new MailerSend({
  api_key: "key",
});

mailersend.updateSmsNumber({
  sms_number_id: 'xxx',
  paused: false
})
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });
```

### Delete phone number
```js
const MailerSend = require("mailersend");

const mailersend = new MailerSend({
  api_key: "key",
});

mailersend.deleteSmsNumber({
  sms_number_id: 'xxx'
});
```

## Messages

### Get messages list
```js
const MailerSend = require("mailersend");

const mailersend = new MailerSend({
  api_key: "key",
});

mailersend.getSmsMessages()
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });
```

### Get a message
```js
const MailerSend = require("mailersend");

const mailersend = new MailerSend({
  api_key: "key",
});

mailersend.getSmsMessage({
  sms_message_id: 'xxx'
})
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });
```

## Activity

### Get activity list
```js
const MailerSend = require("mailersend");

const mailersend = new MailerSend({
  api_key: "key",
});

mailersend.getSmsActivities()
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });
```

### Get activity of a message
```js
const MailerSend = require("mailersend");

const mailersend = new MailerSend({
  api_key: "key",
});

mailersend.getSmsActivity({
  sms_message_id: 'xxx'
})
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });
```

## Recipients

### Get recipient list
```js
const MailerSend = require("mailersend");

const mailersend = new MailerSend({
  api_key: "key",
});

mailersend.getSmsRecipients()
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });
```

### Get recipient
```js
const MailerSend = require("mailersend");

const mailersend = new MailerSend({
  api_key: "key",
});

mailersend.getSmsRecipient({
  sms_recipient_id: 'xxx'
})
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });
```

### Update recipient
```js
const MailerSend = require("mailersend");

const mailersend = new MailerSend({
  api_key: "key",
});

mailersend.updateSmsRecipient({
  sms_recipient_id: "xxx",
  status: "active"
})
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });
```

## Webhooks

### Get webhook list for a number
```js
const MailerSend = require("mailersend");

const mailersend = new MailerSend({
  api_key: "key",
});

mailersend.getSmsWebhooks({
  sms_number_id: 'xxx',
  limit: 10
})
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });
```

### Get webhook
```js
const MailerSend = require("mailersend");

const mailersend = new MailerSend({
  api_key: "key",
});

mailersend.getSmsWebhook({
  sms_webhook_id: 'xxx'
})
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });
```

### Create webhook
```js
const MailerSend = require("mailersend");

const mailersend = new MailerSend({
  api_key: "key",
});

mailersend.createSmsWebhook({
  sms_number_id: "xxx",
  name: "Webhook",
  url: "https:://yourapp.com/hook",
  enabled: ["sms.sent", "sms.delivered", "sms.failed"],
  enabled: true
})
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });
```

### Update webhook
```js
const MailerSend = require("mailersend");

const mailersend = new MailerSend({
  api_key: "key",
});

mailersend.updateSmsWebhook({
  sms_webhook_id: "xxx",
  name: "Webhook",
  url: "https:://yourapp.com/hook",
  enabled: ["sms.sent", "sms.delivered", "sms.failed"],
  enabled: true
})
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });
```

### Delete webhook
```js
const MailerSend = require("mailersend");

const mailersend = new MailerSend({
  api_key: "key",
});

mailersend.deleteSmsWebhook({
  sms_webhook_id: 'xxx'
});
```

## Inbound

### Get inbound list
```js
const MailerSend = require("mailersend");

const mailersend = new MailerSend({
  api_key: "key",
});

mailersend.getSmsInbounds()
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });
```

### Get inbound
```js
const MailerSend = require("mailersend");

const mailersend = new MailerSend({
  api_key: "key",
});

mailersend.getSmsInbound({
  sms_inbound_id: 'xxx'
})
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });
```

### Add inbound
```js
const MailerSend = require("mailersend");

const mailersend = new MailerSend({
  api_key: "key",
});

mailersend.createSmsInbound({
  sms_number_id: "xxx",
  name: "Inbound",
  forward_url: "https:://yourapp.com/hook",
  filter: {
    comparer: "equal",
    value: "START"
  },
  enabled: true
})
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });
```

### Update inbound
```js
const MailerSend = require("mailersend");

const mailersend = new MailerSend({
  api_key: "key",
});

mailersend.updateSmsInbound({
  sms_inbound_id: "xxx",
  name: "Inbound",
  forward_url: "https:://yourapp.com/hook",
  filter: {
    comparer: "equal",
    value: "START"
  },
  enabled: true
})
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });
```

### Delete inbound
```js
const MailerSend = require("mailersend");

const mailersend = new MailerSend({
  api_key: "key",
});

mailersend.deleteSmsInbound({
  sms_inbound_id: 'xxx'
});
```

# Support and Feedback

In case you find any bugs, submit an issue directly here in GitHub.

You are welcome to create SDK for any other programming language.

If you have any troubles using our API or SDK free to contact our support by email [info@mailersend.com](mailto:info@mailersend.com)

The official documentation is at [https://developers.mailersend.com](https://developers.mailersend.com)

# License

[The MIT License (MIT)](LICENSE)
