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
    + [Verify a domain](#verify-a-domain)
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

### Verify a domain

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

# Support and Feedback

In case you find any bugs, submit an issue directly here in GitHub.

You are welcome to create SDK for any other programming language.

If you have any troubles using our API or SDK free to contact our support by email [info@mailersend.com](mailto:info@mailersend.com)

The official documentation is at [https://developers.mailersend.com](https://developers.mailersend.com)

# License

[The MIT License (MIT)](LICENSE)
