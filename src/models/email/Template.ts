import { Pagination } from "../Pagination";

export interface TemplateQueryParams extends Pagination {
    domain_id?: string;
}

export interface TemplateParams {
    name?: string;
    categories?: string[];
    domain_id?: string;
    tags?: string[];
    text: string;
    html: string;
    /** @deprecated Not accepted when creating a template and not sent. Pass it to update() instead. */
    auto_generate?: boolean;
}

export interface TemplateUpdateParams {
    name?: string;
    categories?: string[];
    domain_id?: string;
    tags?: string[];
    text?: string;
    html?: string;
    auto_generate?: boolean;
}
