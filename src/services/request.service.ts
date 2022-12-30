import { request as gRequest } from "gaxios";
import { GaxiosOptions } from "gaxios/build/src/common";
var qs = require('qs');

export class RequestService {
  private readonly apiKey: string;
  private readonly baseUrl: string;

  constructor(apiKey: string, baseUrl: string) {
    this.apiKey = apiKey;
    this.baseUrl = baseUrl;
  }

  protected async post<T>(path: string, data: T): Promise<APIResponse> {
    return this.request("POST", path, data);
  }

  protected async get(path: string, queryParams?: any): Promise<APIResponse> {
    return this.request("GET", path, null, queryParams);
  }

  protected async deleteReq<T>(path: string, data?: T): Promise<APIResponse> {
    return this.request("DELETE", path, data);
  }

  protected async put(path: string, data: any): Promise<APIResponse> {
    return this.request("PUT", path, data);
  }

  private async request(method: "POST" | "GET" | "DELETE" | "PUT", path: string, body?: any, queryParams?: any) {
    try {
      const requestParams: GaxiosOptions = {
        url: path,
        baseURL: this.baseUrl,
        method,
        headers: { Authorization: `Bearer ${this.apiKey}` },
        responseType: "json",
      } as any;

      if (body) {
        requestParams.data = body;
      }
      if (queryParams) {
        requestParams.params = queryParams;
        requestParams.paramsSerializer = (params) => {
          return qs.stringify(params);
        }
      }

      const { headers, data, status } = await gRequest<APIResponse>(requestParams);

      return { headers, body: data, statusCode: status };
    } catch (e: any) {
      if (e?.response) {
        const { headers, data, status } = e.response;
        throw { headers, body: data, statusCode: status };
      } else {
        throw e;
      }
    }
  }
}

export interface APIResponse {
  headers: any;
  body: any;
  statusCode: number;
}
