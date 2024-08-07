import { SignTemplates } from '../schemas/signTemplates.generated.js';
import { SignTemplate } from '../schemas/signTemplate.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { CancellationToken } from '../internal/utils.js';
export declare class GetSignTemplateByIdOptionals {
    readonly headers: GetSignTemplateByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetSignTemplateByIdOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<GetSignTemplateByIdOptionals, 'headers' | 'cancellationToken'>>);
}
export interface GetSignTemplateByIdOptionalsInput {
    readonly headers?: GetSignTemplateByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export interface GetSignTemplatesQueryParams {
    readonly marker?: string;
    readonly limit?: number;
}
export declare class GetSignTemplatesHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetSignTemplatesHeaders, 'extraHeaders'> & Partial<Pick<GetSignTemplatesHeaders, 'extraHeaders'>>);
}
export interface GetSignTemplatesHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class GetSignTemplateByIdHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetSignTemplateByIdHeaders, 'extraHeaders'> & Partial<Pick<GetSignTemplateByIdHeaders, 'extraHeaders'>>);
}
export interface GetSignTemplateByIdHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class SignTemplatesManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<SignTemplatesManager, 'networkSession' | 'getSignTemplates' | 'getSignTemplateById'> & Partial<Pick<SignTemplatesManager, 'networkSession'>>);
    getSignTemplates(queryParams?: GetSignTemplatesQueryParams, headersInput?: GetSignTemplatesHeadersInput, cancellationToken?: CancellationToken): Promise<SignTemplates>;
    getSignTemplateById(templateId: string, optionalsInput?: GetSignTemplateByIdOptionalsInput): Promise<SignTemplate>;
}
export interface SignTemplatesManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
