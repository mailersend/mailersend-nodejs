import { Event } from '../types'

interface ActivityListParams {
  domain_id: string;
  page?: number
  /**
   * Min: `10`, Max: `100`
   * @default 25
   */
  limit?: number;
  /**
   * Timestamp is assumed to be UTC. Must be lower than `date_to`
   */
  date_from?: number
  /**
   * Timestamp is assumed to be UTC. Must be higher than `date_from`
   */
  date_to?: number
  event?: Event[]
}

export const activity = {
  activityList(params: ActivityListParams) {
    const { domain_id, ...queryParams } = params;

    return this.request(`/activity/${domain_id}`, {
      method: 'GET',
      params: queryParams,
    });
  },
};
