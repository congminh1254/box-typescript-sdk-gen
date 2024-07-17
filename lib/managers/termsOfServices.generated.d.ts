import { TermsOfServices } from '../schemas/termsOfServices.generated.js';
import { TermsOfService } from '../schemas/termsOfService.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { CancellationToken } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export declare class CreateTermsOfServiceOptionals {
    readonly headers: CreateTermsOfServiceHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<CreateTermsOfServiceOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<CreateTermsOfServiceOptionals, 'headers' | 'cancellationToken'>>);
}
export interface CreateTermsOfServiceOptionalsInput {
    readonly headers?: CreateTermsOfServiceHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetTermsOfServiceByIdOptionals {
    readonly headers: GetTermsOfServiceByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetTermsOfServiceByIdOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<GetTermsOfServiceByIdOptionals, 'headers' | 'cancellationToken'>>);
}
export interface GetTermsOfServiceByIdOptionalsInput {
    readonly headers?: GetTermsOfServiceByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class UpdateTermsOfServiceByIdOptionals {
    readonly headers: UpdateTermsOfServiceByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<UpdateTermsOfServiceByIdOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<UpdateTermsOfServiceByIdOptionals, 'headers' | 'cancellationToken'>>);
}
export interface UpdateTermsOfServiceByIdOptionalsInput {
    readonly headers?: UpdateTermsOfServiceByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export type GetTermsOfServiceQueryParamsTosTypeField = 'external' | 'managed';
export interface GetTermsOfServiceQueryParams {
    readonly tosType?: GetTermsOfServiceQueryParamsTosTypeField;
}
export declare class GetTermsOfServiceHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetTermsOfServiceHeaders, 'extraHeaders'> & Partial<Pick<GetTermsOfServiceHeaders, 'extraHeaders'>>);
}
export interface GetTermsOfServiceHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export type CreateTermsOfServiceRequestBodyStatusField = 'enabled' | 'disabled';
export type CreateTermsOfServiceRequestBodyTosTypeField = 'external' | 'managed';
export interface CreateTermsOfServiceRequestBody {
    readonly status: CreateTermsOfServiceRequestBodyStatusField;
    readonly tosType?: CreateTermsOfServiceRequestBodyTosTypeField;
    readonly text: string;
}
export declare class CreateTermsOfServiceHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<CreateTermsOfServiceHeaders, 'extraHeaders'> & Partial<Pick<CreateTermsOfServiceHeaders, 'extraHeaders'>>);
}
export interface CreateTermsOfServiceHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class GetTermsOfServiceByIdHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetTermsOfServiceByIdHeaders, 'extraHeaders'> & Partial<Pick<GetTermsOfServiceByIdHeaders, 'extraHeaders'>>);
}
export interface GetTermsOfServiceByIdHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export type UpdateTermsOfServiceByIdRequestBodyStatusField = 'enabled' | 'disabled';
export interface UpdateTermsOfServiceByIdRequestBody {
    readonly status: UpdateTermsOfServiceByIdRequestBodyStatusField;
    readonly text: string;
}
export declare class UpdateTermsOfServiceByIdHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<UpdateTermsOfServiceByIdHeaders, 'extraHeaders'> & Partial<Pick<UpdateTermsOfServiceByIdHeaders, 'extraHeaders'>>);
}
export interface UpdateTermsOfServiceByIdHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class TermsOfServicesManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<TermsOfServicesManager, 'networkSession' | 'getTermsOfService' | 'createTermsOfService' | 'getTermsOfServiceById' | 'updateTermsOfServiceById'> & Partial<Pick<TermsOfServicesManager, 'networkSession'>>);
    getTermsOfService(queryParams?: GetTermsOfServiceQueryParams, headersInput?: GetTermsOfServiceHeadersInput, cancellationToken?: CancellationToken): Promise<TermsOfServices>;
    createTermsOfService(requestBody: CreateTermsOfServiceRequestBody, optionalsInput?: CreateTermsOfServiceOptionalsInput): Promise<TermsOfService>;
    getTermsOfServiceById(termsOfServiceId: string, optionalsInput?: GetTermsOfServiceByIdOptionalsInput): Promise<TermsOfService>;
    updateTermsOfServiceById(termsOfServiceId: string, requestBody: UpdateTermsOfServiceByIdRequestBody, optionalsInput?: UpdateTermsOfServiceByIdOptionalsInput): Promise<TermsOfService>;
}
export interface TermsOfServicesManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
export declare function serializeGetTermsOfServiceQueryParamsTosTypeField(val: GetTermsOfServiceQueryParamsTosTypeField): SerializedData;
export declare function deserializeGetTermsOfServiceQueryParamsTosTypeField(val: SerializedData): GetTermsOfServiceQueryParamsTosTypeField;
export declare function serializeCreateTermsOfServiceRequestBodyStatusField(val: CreateTermsOfServiceRequestBodyStatusField): SerializedData;
export declare function deserializeCreateTermsOfServiceRequestBodyStatusField(val: SerializedData): CreateTermsOfServiceRequestBodyStatusField;
export declare function serializeCreateTermsOfServiceRequestBodyTosTypeField(val: CreateTermsOfServiceRequestBodyTosTypeField): SerializedData;
export declare function deserializeCreateTermsOfServiceRequestBodyTosTypeField(val: SerializedData): CreateTermsOfServiceRequestBodyTosTypeField;
export declare function serializeCreateTermsOfServiceRequestBody(val: CreateTermsOfServiceRequestBody): SerializedData;
export declare function deserializeCreateTermsOfServiceRequestBody(val: SerializedData): CreateTermsOfServiceRequestBody;
export declare function serializeUpdateTermsOfServiceByIdRequestBodyStatusField(val: UpdateTermsOfServiceByIdRequestBodyStatusField): SerializedData;
export declare function deserializeUpdateTermsOfServiceByIdRequestBodyStatusField(val: SerializedData): UpdateTermsOfServiceByIdRequestBodyStatusField;
export declare function serializeUpdateTermsOfServiceByIdRequestBody(val: UpdateTermsOfServiceByIdRequestBody): SerializedData;
export declare function deserializeUpdateTermsOfServiceByIdRequestBody(val: SerializedData): UpdateTermsOfServiceByIdRequestBody;
