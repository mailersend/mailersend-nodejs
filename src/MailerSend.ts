import fetch from 'isomorphic-unfetch';

import { email } from './modules/email';
import { tokens } from './modules/tokens';
import { activity } from './modules/activity';
import { domains } from './modules/domains';
import { messages } from './modules/messages';
import { recipients } from './modules/recipients';
import { templates } from './modules/templates';
import { webhooks } from './modules/webhooks';

interface MailerSendConfig {
  api_key: string;
}

export class MailerSend {
  private apiKey: string;
  private basePath: string

  private headers: any = {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-type': 'application/json',
  }

  constructor(config: MailerSendConfig) {
    this.apiKey = config.api_key;
    this.basePath = 'https://api.mailersend.com/v1';
    this.headers.Authorization = `Bearer ${this.apiKey}`;

    return Object.assign(
      this,
      email,
      tokens,
      activity,
      domains,
      messages,
      recipients,
      templates,
      webhooks,
    );
  }

  request<T>(endpoint = '', options = {}) {
    const { headers = {}, method = 'GET', body = null, params = {} } = options;

    let queryString = serializeQuery(params);
    queryString = queryString ? `?${queryString}` : '';

    return fetch(this.basePath + endpoint + queryString, {
      method,

      headers: {
        ...this.headers,
        Authorization: `Bearer ${this.apiKey}`,
        'X-Requested-With': 'XMLHttpRequest',
        'Content-type': 'application/json',
      },

      body: body && JSON.stringify(body),
    });
  }
}

function serializeQuery(params, prefix?: string) {
  const query = Object.keys(params).map(key => {
    const value = params[key];

    if (params.constructor === Array) {
      key = `${prefix}[]`;
    } else if (params.constructor === Object) {
      key = prefix ? `${prefix}[${key}]` : key;
    }

    if (typeof value === 'object') {
      return serializeQuery(value, key);
    }

    return `${key}=${encodeURIComponent(value)}`;
  });

  return [].concat.apply([], query).join('&');
}
