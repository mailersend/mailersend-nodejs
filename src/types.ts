export enum Event {
  processed = 'processed',
  queued = 'queued',
  sent = 'sent',
  delivered = 'delivered',
  soft_bounced = 'soft_bounced',
  hard_bounced = 'hard_bounced',
  junk = 'junk',
  opened = 'opened',
  clicked = 'clicked',
  unsubscribed = 'unsubscribed',
  spam_complaints = 'spam_complaints',
}

export enum GroupBy {
  days = 'days',
  weeks = 'weeks',
  months = 'months',
  years = 'years',
}
