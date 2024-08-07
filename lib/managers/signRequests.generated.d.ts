import { SignRequest } from '../schemas/signRequest.generated.js';
import { SignRequests } from '../schemas/signRequests.generated.js';
import { SignRequestCreateRequest } from '../schemas/signRequestCreateRequest.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { CancellationToken } from '../internal/utils.js';
export declare class CancelSignRequestOptionals {
    readonly headers: CancelSignRequestHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<CancelSignRequestOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<CancelSignRequestOptionals, 'headers' | 'cancellationToken'>>);
}
export interface CancelSignRequestOptionalsInput {
    readonly headers?: CancelSignRequestHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class ResendSignRequestOptionals {
    readonly headers: ResendSignRequestHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<ResendSignRequestOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<ResendSignRequestOptionals, 'headers' | 'cancellationToken'>>);
}
export interface ResendSignRequestOptionalsInput {
    readonly headers?: ResendSignRequestHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetSignRequestByIdOptionals {
    readonly headers: GetSignRequestByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetSignRequestByIdOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<GetSignRequestByIdOptionals, 'headers' | 'cancellationToken'>>);
}
export interface GetSignRequestByIdOptionalsInput {
    readonly headers?: GetSignRequestByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class CreateSignRequestOptionals {
    readonly headers: CreateSignRequestHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<CreateSignRequestOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<CreateSignRequestOptionals, 'headers' | 'cancellationToken'>>);
}
export interface CreateSignRequestOptionalsInput {
    readonly headers?: CreateSignRequestHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class CancelSignRequestHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<CancelSignRequestHeaders, 'extraHeaders'> & Partial<Pick<CancelSignRequestHeaders, 'extraHeaders'>>);
}
export interface CancelSignRequestHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class ResendSignRequestHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<ResendSignRequestHeaders, 'extraHeaders'> & Partial<Pick<ResendSignRequestHeaders, 'extraHeaders'>>);
}
export interface ResendSignRequestHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class GetSignRequestByIdHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetSignRequestByIdHeaders, 'extraHeaders'> & Partial<Pick<GetSignRequestByIdHeaders, 'extraHeaders'>>);
}
export interface GetSignRequestByIdHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export interface GetSignRequestsQueryParams {
    readonly marker?: string;
    readonly limit?: number;
}
export declare class GetSignRequestsHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetSignRequestsHeaders, 'extraHeaders'> & Partial<Pick<GetSignRequestsHeaders, 'extraHeaders'>>);
}
export interface GetSignRequestsHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class CreateSignRequestHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<CreateSignRequestHeaders, 'extraHeaders'> & Partial<Pick<CreateSignRequestHeaders, 'extraHeaders'>>);
}
export interface CreateSignRequestHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class SignRequestsManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<SignRequestsManager, 'networkSession' | 'cancelSignRequest' | 'resendSignRequest' | 'getSignRequestById' | 'getSignRequests' | 'createSignRequest'> & Partial<Pick<SignRequestsManager, 'networkSession'>>);
    cancelSignRequest(signRequestId: string, optionalsInput?: CancelSignRequestOptionalsInput): Promise<SignRequest>;
    resendSignRequest(signRequestId: string, optionalsInput?: ResendSignRequestOptionalsInput): Promise<undefined>;
    getSignRequestById(signRequestId: string, optionalsInput?: GetSignRequestByIdOptionalsInput): Promise<SignRequest>;
    getSignRequests(queryParams?: GetSignRequestsQueryParams, headersInput?: GetSignRequestsHeadersInput, cancellationToken?: CancellationToken): Promise<SignRequests>;
    createSignRequest(requestBody: SignRequestCreateRequest, optionalsInput?: CreateSignRequestOptionalsInput): Promise<SignRequest>;
}
export interface SignRequestsManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
