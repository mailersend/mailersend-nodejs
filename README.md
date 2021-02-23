<a href="https://www.mailersend.com"><img src="https://www.mailersend.com/images/logo.svg" width="200px"/></a>

MailerSend Node.js SDK

[![MIT licensed](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE.md)

# Table of Contents

- [Installation](#installation)
- [Usage](#usage)
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

Sending a basic email.

```js
const Recipient = require("mailersend").Recipient;
const EmailParams = require("mailersend").EmailParams;
const MailerSend = require("mailersend");

const mailersend = new MailerSend({
  api_key: "key",
});

const recipients = [new Recipient("your@client.com", "Your Client")];

const emailParams = new EmailParams()
  .setFrom("your@domain.com")
  .setFromName("Your Name")
  .setRecipients(recipients)
  .setSubject("Subject")
  .setHtml("This is the HTML content")
  .setText("This is the text content");

mailersend.send(emailParams);
```

Using Templates and variables.

```js
const Recipient = require("mailersend").Recipient;
const EmailParams = require("mailersend").EmailParams;
const MailerSend = require("mailersend");

const mailersend = new MailerSend({
  api_key: "key",
});

const recipients = [new Recipient("your@client.com", "Your Client")];
const templateId = "template_Id";
const variables = [
  {
    email: "your@client.com",
    substitutions: [
      //Each variable should be its own object
      {
        var: "name",
        value: "Your Client",
      },
    ],
  },
];

const emailParams = new EmailParams()
  .setFrom("your@domain.com")
  .setFromName("Your Name")
  .setRecipients(recipients)
  .setSubject("Subject")
  .setTemplateId(templateId)
  .setVariables(variables);

mailersend.send(emailParams);
```

<a name="endpoints"></a>

# Available endpoints

| Feature group | Endpoint    | Available |
| ------------- | ----------- | --------- |
| Email         | `POST send` | ✅        |

_If, at the moment, some endpoint is not available, please use `cURL` and other available tools to access it. [Refer to official API docs for more info](https://developers.mailersend.com/)._

<a name="support-and-feedback"></a>

# Support and Feedback

In case you find any bugs, submit an issue directly here in GitHub.

You are welcome to create SDK for any other programming language.

If you have any troubles using our API or SDK free to contact our support by email [info@mailersend.com](mailto:info@mailersend.com)

The official documentation is at [https://developers.mailersend.com](https://developers.mailersend.com)

<a name="license"></a>

# License

[The MIT License (MIT)](LICENSE)
