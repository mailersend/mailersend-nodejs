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

Using Simple Personalization (Variables in templates).

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
  .setSubject("Subject")
  .setRecipients(recipients)
  .setTemplateId(templateId)
  .setVariables(variables);

mailersend.send(emailParams);

//setFrom, setFromName & setSubject are not neccessary if you added default settings to your template
```

Using Advanced Personalization:

```js
const Recipient = require("mailersend").Recipient;
const EmailParams = require("mailersend").EmailParams;
const MailerSend = require("mailersend");

const mailersend = new MailerSend({
  api_key: "key",
});

const recipients = [new Recipient("your@client.com", "Your Client")];
const templateId = "template_Id";
const personalization = [
  {
    email: "test@mailersend.com",
    data: {
      var: "value",
      boolean: true,
      object: {
        key: "object-value",
      },
      number: 2,
      array: [1, 2, 3],
    },
  },
];

const emailParams = new EmailParams()
  .setFrom("your@domain.com")
  .setFromName("Your Name")
  .setSubject("Subject")
  .setRecipients(recipients)
  .setTemplateId(templateId)
  .setPersonalization(personalization);

mailersend.send(emailParams);

//setFrom, setFromName & setSubject are not neccessary if you added default settings to your template
```

<a name="recipients"></a>

# Recipients

getRecipients (returns all recipients from domain)

```js
mailersend
  .getRecipients({
    limit: 11,
    page: 1, //Limit: default = 25, min = 10, max = 100
  })
  .then((response) => {
    console.log(response.data);
  })
  .catch((err) => {
    console.log(err);
  });
```

response:

```
Response Code: 200 OK
Response Headers:
Content-Type: application/json
```

```json
{
  "data": [
    {
      "id": "5ee0b174b251345e407c92dc",
      "email": "dsanford@example.net",
      "created_at": "2020-06-10 10:09:56",
      "updated_at": "2020-06-10 10:09:56",
      "deleted_at": ""
    },
    {
      "id": "5ee0b174b251345e407c92dd",
      "email": "konopelski.nina@example.com",
      "created_at": "2020-06-10 10:09:56",
      "updated_at": "2020-06-10 10:09:56",
      "deleted_at": ""
    },
    {
      "id": "5ee0b174b251345e407c92de",
      "email": "hester.howe@example.net",
      "created_at": "2020-06-10 10:09:56",
      "updated_at": "2020-06-10 10:09:56",
      "deleted_at": ""
    }
  ],
  "links": {
    "first": "https://www.mailersend.io/api/v1/recipients?page=1",
    "last": "https://www.mailersend.io/api/v1/recipients?page=1",
    "prev": null,
    "next": null
  },
  "meta": {
    "current_page": 1,
    "from": 1,
    "last_page": 1,
    "path": "https://www.mailersend.io/api/v1/recipients",
    "per_page": 25,
    "to": 3,
    "total": 3
  }
}
```

getRecipient (returns recipient using the recipient Id)

```js
mailersend
  .getRecipient("recipient_id")
  .then((response) => {
    console.log(response.data);
  })
  .catch((err) => {
    console.log(err);
  });
```

response:

```
Response Code: 200 OK
Response Headers:
Content-Type: application/json
```

```json
{
  "data": {
    "id": "5ee0b185b251345e407c938e",
    "email": "hauck.sincere@example.net",
    "created_at": "2020-06-10 10:10:13",
    "updated_at": "2020-06-10 10:10:13",
    "deleted_at": "",
    "emails": [],
    "domain": {
      "id": "2j6xej",
      "name": "example.org",
      "dkim": true,
      "spf": true,
      "mx": false,
      "tracking": false,
      "is_verified": true,
      "is_cname_verified": false,
      "is_dns_active": true,
      "is_cname_active": false,
      "is_tracking_allowed": false,
      "has_not_queued_messages": false,
      "not_queued_messages_count": 0,
      "domain_settings": {
        "send_paused": false,
        "track_clicks": true,
        "track_opens": true,
        "track_unsubscribe": true,
        "track_unsubscribe_html": "<p>Click here to <a href=\"{$unsubscribe}\">unsubscribe</a></p>",
        "track_unsubscribe_plain": "Click here to unsubscribe: {$unsubscribe}",
        "track_content": true,
        "custom_tracking_enabled": false,
        "custom_tracking_subdomain": "email"
      },
      "created_at": "2020-06-10 10:10:13",
      "updated_at": "2020-06-10 10:10:13"
    }
  }
}
```

deleteRecipient (deletes a recipient)

```js
mailersend
  .deleteRecipient("recipient_id")
  .then((response) => {
    //if successfull, response will be empty
    console.log(response);
  })
  .catch((err) => {
    console.log(err.message);
  });
```

Response

```
Response Code: 200 OK
Response Body: [EMPTY]
```

<a name="tokens"></a>

# Tokens

createToken (Creates a token for the domain you specify)

```js
mailersend
  .createToken({
    name: "Token Name",
    scopes: ["email_full"],
    domain_id: "domain_id",
  })
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.log(err);
  });
```

Possible Scopes:

```json
[
  "email_full",
  "domains_read",
  "domains_full",
  "activity_read",
  "activity_full",
  "analytics_read",
  "analytics_full",
  "tokens_full"
]
```

response:

```
Response Code: 200 OK
Response Headers:
Content-Type: application/json
```

```json
{
  "id": "token_id",
  "accessToken": "[redacted]",
  "name": "Token Name",
  "created_at": "2020-06-10 10:10:14"
}
```

pauseToken (Sets token status to "pause" to prevent sendings)

```js
mailersend
  .pauseToken("token_id")
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.log(err.message);
  });
```

response:

```
Response Code: 200 OK
Response Headers:
Content-Type: application/json
```

```json
{
  "id": "token_id",
  "name": "Token",
  "status": "pause",
  "created_at": "2020-06-10 10:10:15"
}
```

<a name="endpoints"></a>

# Available endpoints

| Feature group | Endpoint                 | Available |
| ------------- | ------------------------ | --------- |
| Email         | `POST send`              | ✅        |
| Recipients    | `GET getRecipients`      | ✅        |
| Recipients    | `GET getRecipient`       | ✅        |
| Recipients    | `DELETE deleteRecipient` | ✅        |
| Tokens        | `POST createToken`       | ✅        |
| Tokens        | `PUT pauseToken`         | ✅        |
| Tokens        | `PUT unpauseToken`       | ✅        |
| Tokens        | `DELETE deleteToken`     | ✅        |

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
