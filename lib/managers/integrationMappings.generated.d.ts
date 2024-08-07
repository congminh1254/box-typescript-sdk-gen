import { IntegrationMappings } from '../schemas/integrationMappings.generated.js';
import { IntegrationMapping } from '../schemas/integrationMapping.generated.js';
import { IntegrationMappingSlackCreateRequest } from '../schemas/integrationMappingSlackCreateRequest.generated.js';
import { IntegrationMappingBoxItemSlack } from '../schemas/integrationMappingBoxItemSlack.generated.js';
import { IntegrationMappingSlackOptions } from '../schemas/integrationMappingSlackOptions.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { CancellationToken } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export declare class CreateSlackIntegrationMappingOptionals {
    readonly headers: CreateSlackIntegrationMappingHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<CreateSlackIntegrationMappingOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<CreateSlackIntegrationMappingOptionals, 'headers' | 'cancellationToken'>>);
}
export interface CreateSlackIntegrationMappingOptionalsInput {
    readonly headers?: CreateSlackIntegrationMappingHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class UpdateSlackIntegrationMappingByIdOptionals {
    readonly requestBody: UpdateSlackIntegrationMappingByIdRequestBody;
    readonly headers: UpdateSlackIntegrationMappingByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<UpdateSlackIntegrationMappingByIdOptionals, 'requestBody' | 'headers' | 'cancellationToken'> & Partial<Pick<UpdateSlackIntegrationMappingByIdOptionals, 'requestBody' | 'headers' | 'cancellationToken'>>);
}
export interface UpdateSlackIntegrationMappingByIdOptionalsInput {
    readonly requestBody?: UpdateSlackIntegrationMappingByIdRequestBody;
    readonly headers?: UpdateSlackIntegrationMappingByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class DeleteSlackIntegrationMappingByIdOptionals {
    readonly headers: DeleteSlackIntegrationMappingByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<DeleteSlackIntegrationMappingByIdOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<DeleteSlackIntegrationMappingByIdOptionals, 'headers' | 'cancellationToken'>>);
}
export interface DeleteSlackIntegrationMappingByIdOptionalsInput {
    readonly headers?: DeleteSlackIntegrationMappingByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export type GetSlackIntegrationMappingQueryParamsPartnerItemTypeField = 'channel';
export type GetSlackIntegrationMappingQueryParamsBoxItemTypeField = 'folder';
export interface GetSlackIntegrationMappingQueryParams {
    readonly marker?: string;
    readonly limit?: number;
    readonly partnerItemType?: GetSlackIntegrationMappingQueryParamsPartnerItemTypeField;
    readonly partnerItemId?: string;
    readonly boxItemId?: string;
    readonly boxItemType?: GetSlackIntegrationMappingQueryParamsBoxItemTypeField;
    readonly isManuallyCreated?: boolean;
}
export declare class GetSlackIntegrationMappingHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetSlackIntegrationMappingHeaders, 'extraHeaders'> & Partial<Pick<GetSlackIntegrationMappingHeaders, 'extraHeaders'>>);
}
export interface GetSlackIntegrationMappingHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class CreateSlackIntegrationMappingHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<CreateSlackIntegrationMappingHeaders, 'extraHeaders'> & Partial<Pick<CreateSlackIntegrationMappingHeaders, 'extraHeaders'>>);
}
export interface CreateSlackIntegrationMappingHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export interface UpdateSlackIntegrationMappingByIdRequestBody {
    readonly boxItem?: IntegrationMappingBoxItemSlack;
    readonly options?: IntegrationMappingSlackOptions;
}
export declare class UpdateSlackIntegrationMappingByIdHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<UpdateSlackIntegrationMappingByIdHeaders, 'extraHeaders'> & Partial<Pick<UpdateSlackIntegrationMappingByIdHeaders, 'extraHeaders'>>);
}
export interface UpdateSlackIntegrationMappingByIdHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class DeleteSlackIntegrationMappingByIdHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<DeleteSlackIntegrationMappingByIdHeaders, 'extraHeaders'> & Partial<Pick<DeleteSlackIntegrationMappingByIdHeaders, 'extraHeaders'>>);
}
export interface DeleteSlackIntegrationMappingByIdHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class IntegrationMappingsManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<IntegrationMappingsManager, 'networkSession' | 'getSlackIntegrationMapping' | 'createSlackIntegrationMapping' | 'updateSlackIntegrationMappingById' | 'deleteSlackIntegrationMappingById'> & Partial<Pick<IntegrationMappingsManager, 'networkSession'>>);
    getSlackIntegrationMapping(queryParams?: GetSlackIntegrationMappingQueryParams, headersInput?: GetSlackIntegrationMappingHeadersInput, cancellationToken?: CancellationToken): Promise<IntegrationMappings>;
    createSlackIntegrationMapping(requestBody: IntegrationMappingSlackCreateRequest, optionalsInput?: CreateSlackIntegrationMappingOptionalsInput): Promise<IntegrationMapping>;
    updateSlackIntegrationMappingById(integrationMappingId: string, optionalsInput?: UpdateSlackIntegrationMappingByIdOptionalsInput): Promise<IntegrationMapping>;
    deleteSlackIntegrationMappingById(integrationMappingId: string, optionalsInput?: DeleteSlackIntegrationMappingByIdOptionalsInput): Promise<undefined>;
}
export interface IntegrationMappingsManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
export declare function serializeGetSlackIntegrationMappingQueryParamsPartnerItemTypeField(val: GetSlackIntegrationMappingQueryParamsPartnerItemTypeField): SerializedData;
export declare function deserializeGetSlackIntegrationMappingQueryParamsPartnerItemTypeField(val: SerializedData): GetSlackIntegrationMappingQueryParamsPartnerItemTypeField;
export declare function serializeGetSlackIntegrationMappingQueryParamsBoxItemTypeField(val: GetSlackIntegrationMappingQueryParamsBoxItemTypeField): SerializedData;
export declare function deserializeGetSlackIntegrationMappingQueryParamsBoxItemTypeField(val: SerializedData): GetSlackIntegrationMappingQueryParamsBoxItemTypeField;
export declare function serializeUpdateSlackIntegrationMappingByIdRequestBody(val: UpdateSlackIntegrationMappingByIdRequestBody): SerializedData;
export declare function deserializeUpdateSlackIntegrationMappingByIdRequestBody(val: SerializedData): UpdateSlackIntegrationMappingByIdRequestBody;
