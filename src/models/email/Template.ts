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
}
