import { Event, GroupBy } from "../types"

interface ActivityByDateParams {
  domain_id?: string
  /**
   * Max number of recipients: `50`
   * @warning Not yet implemented
   */
  recipient_id?: string[]
  /**
   * Timestamp is assumed to be UTC. Must be lower than `date_to`
   * @required
   */
  date_from: number
  /**
   * Timestamp is assumed to be UTC. Must be higher than `date_from`
   * @required
   */
  date_to: number
  /**
   * @default GroupBy.days
   */
  group_by?: GroupBy;
  tags?: string[];
  /**
   * @required
   */
  event: Event[]
}

interface ActivityByCountryParams {

}

interface ActivityByReadingEnvironmentParams {

}

export const activity = {
  activityByDate(params: ActivityByDateParams) {
    return this.request('/analytics/date', {
      method: 'GET',
      params,
    });
  },

  activityByCountry(params) {
    return this.request('/analytics/country', {
      method: 'GET',
      params,
    });
  },

  activityByReadingEnvironment(params) {
    return this.request('/analytics/ua-type', {
      method: 'GET',
      params,
    });
  },
};
