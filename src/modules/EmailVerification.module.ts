import { RequestService, APIResponse } from "../services/request.service";
import { EmailVerification, EmailVerificationQueryParams, EmailVerificationResultQueryParams } from "../models";

export class EmailVerificationModule extends RequestService {
    constructor(apiKey: string, baseUrl: string) {
        super(apiKey, baseUrl);
    }

    async list(queryParams?: EmailVerificationQueryParams): Promise<APIResponse> {
        return await this.get(`/email-verification`, queryParams);
    }

    async single(emailVerificationId: string): Promise<APIResponse> {
        return await this.get(`/email-verification/${emailVerificationId}`);
    }

    async create(emailVerification: EmailVerification): Promise<APIResponse> {
        return await this.post<EmailVerification>(`/email-verification`, emailVerification);
    }

    async verifyList(emailVerificationId: string): Promise<APIResponse> {
        return await this.get(`/email-verification/${emailVerificationId}/verify`);
    }

    async getListResult(emailVerificationId: string, queryParams: EmailVerificationResultQueryParams): Promise<APIResponse> {
        return await this.get(`/email-verification/${emailVerificationId}/results`, queryParams);
    }

    async verifyEmail(email: string): Promise<APIResponse> {
        return await this.post<{ email: string }>(`/email-verification/verify`, { email: email });
    }
}
