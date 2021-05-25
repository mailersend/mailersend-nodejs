<a href="https://www.mailersend.com"><img src="https://www.mailersend.com/images/logo.svg" width="200px"/></a>

MailerSend Node.js SDK

[![MIT licensed](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE.md)

# Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Recipients](#recipients)
- [Support and Feedback](#support-and-feedback)
- [License](#license)

<a name="installation"></a>

# Installation

## Setup

```bash
npm install mailersend
```

<a name="usage"></a>

# Usage

## Email

### Send an email

```js
const Recipient = require("../../src/Recipient");
const EmailParams = require("../../src/EmailParams");
const MailerSend = require("../../src/MailerSend");

const mailersend = new MailerSend({
    api_key: process.env.API_KEY,
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
const Recipient = require("../../src/Recipient");
const EmailParams = require("../../src/EmailParams");
const MailerSend = require("../../src/MailerSend");

const mailersend = new MailerSend({
  api_key: process.env.API_KEY,
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

### Send a templated-email

```js
const Recipient = require("../../src/Recipient");
const EmailParams = require("../../src/EmailParams");
const MailerSend = require("../../src/MailerSend");

const mailersend = new MailerSend({
  api_key: process.env.API_KEY,
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
const Recipient = require("../../src/Recipient");
const EmailParams = require("../../src/EmailParams");
const MailerSend = require("../../src/MailerSend");

const mailersend = new MailerSend({
    api_key: process.env.API_KEY,
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
const Recipient = require("../../src/Recipient");
const EmailParams = require("../../src/EmailParams");
const MailerSend = require("../../src/MailerSend");

const mailersend = new MailerSend({
    api_key: process.env.API_KEY,
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

const Recipient = require("../../src/Recipient");
const Attachment = require("../../src/Attachment");
const EmailParams = require("../../src/EmailParams");
const MailerSend = require("../../src/MailerSend");

const mailersend = new MailerSend({
    api_key: process.env.API_KEY,
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

## Tokens

### Create a token

```js
const MailerSend = require("../../src/MailerSend");

const mailersend = new MailerSend({
  api_key: process.env.API_KEY,
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
const MailerSend = require("../../src/MailerSend");

const mailersend = new MailerSend({
  api_key: process.env.API_KEY,
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
const MailerSend = require("../../src/MailerSend");

const mailersend = new MailerSend({
  api_key: process.env.API_KEY,
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
```

### Get activity data by date

```js
```

### Opens by country

```js
```

### Oppens by user-agent

```js
```

### Opens by reading environment

```js
```


## Domains

### Get domain list

```js
```

### Get domain

```js
```

### Delete domain

```js
```

### Get recipients per domain

```js
```

### Update domain settings

```js
```


## Messages

### Get a list of messages

```js
```

### Get info on a message

```js
```


## Recipients

### Get recipients

```js
```

### Get single recipient

```js
```

### Delete recipient

```js
```


## Webhooks

### List webhooks

```js
```

### Get webhook

```js
```

### Create webhook

```js
```

### Update webhook

```js
```

### Delete webhook

```js
```

<a name="support-and-feedback"></a>

# Support and Feedback

In case you find any bugs, submit an issue directly here in GitHub.

You are welcome to create SDK for any other programming language.

If you have any troubles using our API or SDK free to contact our support by email [info@mailersend.com](mailto:info@mailersend.com)

The official documentation is at [https://developers.mailersend.com](https://developers.mailersend.com)

<a name="license"></a>

# License

[The MIT License (MIT)](LICENSE)
