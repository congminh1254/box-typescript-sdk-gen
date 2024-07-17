import { MetadataTemplates } from '../schemas/metadataTemplates.generated.js';
import { MetadataTemplate } from '../schemas/metadataTemplate.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { CancellationToken } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export declare class GetMetadataTemplatesByInstanceIdOptionals {
    readonly headers: GetMetadataTemplatesByInstanceIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetMetadataTemplatesByInstanceIdOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<GetMetadataTemplatesByInstanceIdOptionals, 'headers' | 'cancellationToken'>>);
}
export interface GetMetadataTemplatesByInstanceIdOptionalsInput {
    readonly headers?: GetMetadataTemplatesByInstanceIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetMetadataTemplateOptionals {
    readonly headers: GetMetadataTemplateHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetMetadataTemplateOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<GetMetadataTemplateOptionals, 'headers' | 'cancellationToken'>>);
}
export interface GetMetadataTemplateOptionalsInput {
    readonly headers?: GetMetadataTemplateHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class UpdateMetadataTemplateOptionals {
    readonly headers: UpdateMetadataTemplateHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<UpdateMetadataTemplateOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<UpdateMetadataTemplateOptionals, 'headers' | 'cancellationToken'>>);
}
export interface UpdateMetadataTemplateOptionalsInput {
    readonly headers?: UpdateMetadataTemplateHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class DeleteMetadataTemplateOptionals {
    readonly headers: DeleteMetadataTemplateHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<DeleteMetadataTemplateOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<DeleteMetadataTemplateOptionals, 'headers' | 'cancellationToken'>>);
}
export interface DeleteMetadataTemplateOptionalsInput {
    readonly headers?: DeleteMetadataTemplateHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetMetadataTemplateByIdOptionals {
    readonly headers: GetMetadataTemplateByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetMetadataTemplateByIdOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<GetMetadataTemplateByIdOptionals, 'headers' | 'cancellationToken'>>);
}
export interface GetMetadataTemplateByIdOptionalsInput {
    readonly headers?: GetMetadataTemplateByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class CreateMetadataTemplateOptionals {
    readonly headers: CreateMetadataTemplateHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<CreateMetadataTemplateOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<CreateMetadataTemplateOptionals, 'headers' | 'cancellationToken'>>);
}
export interface CreateMetadataTemplateOptionalsInput {
    readonly headers?: CreateMetadataTemplateHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export interface GetMetadataTemplatesByInstanceIdQueryParams {
    readonly metadataInstanceId: string;
}
export declare class GetMetadataTemplatesByInstanceIdHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetMetadataTemplatesByInstanceIdHeaders, 'extraHeaders'> & Partial<Pick<GetMetadataTemplatesByInstanceIdHeaders, 'extraHeaders'>>);
}
export interface GetMetadataTemplatesByInstanceIdHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export type GetMetadataTemplateScope = 'global' | 'enterprise';
export declare class GetMetadataTemplateHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetMetadataTemplateHeaders, 'extraHeaders'> & Partial<Pick<GetMetadataTemplateHeaders, 'extraHeaders'>>);
}
export interface GetMetadataTemplateHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export type UpdateMetadataTemplateScope = 'global' | 'enterprise';
export type UpdateMetadataTemplateRequestBodyOpField = 'editTemplate' | 'addField' | 'reorderFields' | 'addEnumOption' | 'reorderEnumOptions' | 'reorderMultiSelectOptions' | 'addMultiSelectOption' | 'editField' | 'removeField' | 'editEnumOption' | 'removeEnumOption' | 'editMultiSelectOption' | 'removeMultiSelectOption';
export interface UpdateMetadataTemplateRequestBody {
    readonly op: UpdateMetadataTemplateRequestBodyOpField;
    readonly data?: {
        readonly [key: string]: any;
    };
    readonly fieldKey?: string;
    readonly fieldKeys?: readonly string[];
    readonly enumOptionKey?: string;
    readonly enumOptionKeys?: readonly string[];
    readonly multiSelectOptionKey?: string;
    readonly multiSelectOptionKeys?: readonly string[];
}
export declare class UpdateMetadataTemplateHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<UpdateMetadataTemplateHeaders, 'extraHeaders'> & Partial<Pick<UpdateMetadataTemplateHeaders, 'extraHeaders'>>);
}
export interface UpdateMetadataTemplateHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export type DeleteMetadataTemplateScope = 'global' | 'enterprise';
export declare class DeleteMetadataTemplateHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<DeleteMetadataTemplateHeaders, 'extraHeaders'> & Partial<Pick<DeleteMetadataTemplateHeaders, 'extraHeaders'>>);
}
export interface DeleteMetadataTemplateHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class GetMetadataTemplateByIdHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetMetadataTemplateByIdHeaders, 'extraHeaders'> & Partial<Pick<GetMetadataTemplateByIdHeaders, 'extraHeaders'>>);
}
export interface GetMetadataTemplateByIdHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export interface GetGlobalMetadataTemplatesQueryParams {
    readonly marker?: string;
    readonly limit?: number;
}
export declare class GetGlobalMetadataTemplatesHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetGlobalMetadataTemplatesHeaders, 'extraHeaders'> & Partial<Pick<GetGlobalMetadataTemplatesHeaders, 'extraHeaders'>>);
}
export interface GetGlobalMetadataTemplatesHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export interface GetEnterpriseMetadataTemplatesQueryParams {
    readonly marker?: string;
    readonly limit?: number;
}
export declare class GetEnterpriseMetadataTemplatesHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetEnterpriseMetadataTemplatesHeaders, 'extraHeaders'> & Partial<Pick<GetEnterpriseMetadataTemplatesHeaders, 'extraHeaders'>>);
}
export interface GetEnterpriseMetadataTemplatesHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export type CreateMetadataTemplateRequestBodyFieldsTypeField = 'string' | 'float' | 'date' | 'enum' | 'multiSelect';
export interface CreateMetadataTemplateRequestBodyFieldsOptionsField {
    readonly key: string;
}
export interface CreateMetadataTemplateRequestBodyFieldsField {
    readonly type: CreateMetadataTemplateRequestBodyFieldsTypeField;
    readonly key: string;
    readonly displayName: string;
    readonly description?: string;
    readonly hidden?: boolean;
    readonly options?: readonly CreateMetadataTemplateRequestBodyFieldsOptionsField[];
}
export interface CreateMetadataTemplateRequestBody {
    readonly scope: string;
    readonly templateKey?: string;
    readonly displayName: string;
    readonly hidden?: boolean;
    readonly fields?: readonly CreateMetadataTemplateRequestBodyFieldsField[];
    readonly copyInstanceOnItemCopy?: boolean;
}
export declare class CreateMetadataTemplateHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<CreateMetadataTemplateHeaders, 'extraHeaders'> & Partial<Pick<CreateMetadataTemplateHeaders, 'extraHeaders'>>);
}
export interface CreateMetadataTemplateHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class MetadataTemplatesManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<MetadataTemplatesManager, 'networkSession' | 'getMetadataTemplatesByInstanceId' | 'getMetadataTemplate' | 'updateMetadataTemplate' | 'deleteMetadataTemplate' | 'getMetadataTemplateById' | 'getGlobalMetadataTemplates' | 'getEnterpriseMetadataTemplates' | 'createMetadataTemplate'> & Partial<Pick<MetadataTemplatesManager, 'networkSession'>>);
    getMetadataTemplatesByInstanceId(queryParams: GetMetadataTemplatesByInstanceIdQueryParams, optionalsInput?: GetMetadataTemplatesByInstanceIdOptionalsInput): Promise<MetadataTemplates>;
    getMetadataTemplate(scope: GetMetadataTemplateScope, templateKey: string, optionalsInput?: GetMetadataTemplateOptionalsInput): Promise<MetadataTemplate>;
    updateMetadataTemplate(scope: UpdateMetadataTemplateScope, templateKey: string, requestBody: readonly UpdateMetadataTemplateRequestBody[], optionalsInput?: UpdateMetadataTemplateOptionalsInput): Promise<MetadataTemplate>;
    deleteMetadataTemplate(scope: DeleteMetadataTemplateScope, templateKey: string, optionalsInput?: DeleteMetadataTemplateOptionalsInput): Promise<undefined>;
    getMetadataTemplateById(templateId: string, optionalsInput?: GetMetadataTemplateByIdOptionalsInput): Promise<MetadataTemplate>;
    getGlobalMetadataTemplates(queryParams?: GetGlobalMetadataTemplatesQueryParams, headersInput?: GetGlobalMetadataTemplatesHeadersInput, cancellationToken?: CancellationToken): Promise<MetadataTemplates>;
    getEnterpriseMetadataTemplates(queryParams?: GetEnterpriseMetadataTemplatesQueryParams, headersInput?: GetEnterpriseMetadataTemplatesHeadersInput, cancellationToken?: CancellationToken): Promise<MetadataTemplates>;
    createMetadataTemplate(requestBody: CreateMetadataTemplateRequestBody, optionalsInput?: CreateMetadataTemplateOptionalsInput): Promise<MetadataTemplate>;
}
export interface MetadataTemplatesManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
export declare function serializeGetMetadataTemplateScope(val: GetMetadataTemplateScope): SerializedData;
export declare function deserializeGetMetadataTemplateScope(val: SerializedData): GetMetadataTemplateScope;
export declare function serializeUpdateMetadataTemplateScope(val: UpdateMetadataTemplateScope): SerializedData;
export declare function deserializeUpdateMetadataTemplateScope(val: SerializedData): UpdateMetadataTemplateScope;
export declare function serializeUpdateMetadataTemplateRequestBodyOpField(val: UpdateMetadataTemplateRequestBodyOpField): SerializedData;
export declare function deserializeUpdateMetadataTemplateRequestBodyOpField(val: SerializedData): UpdateMetadataTemplateRequestBodyOpField;
export declare function serializeUpdateMetadataTemplateRequestBody(val: UpdateMetadataTemplateRequestBody): SerializedData;
export declare function deserializeUpdateMetadataTemplateRequestBody(val: SerializedData): UpdateMetadataTemplateRequestBody;
export declare function serializeDeleteMetadataTemplateScope(val: DeleteMetadataTemplateScope): SerializedData;
export declare function deserializeDeleteMetadataTemplateScope(val: SerializedData): DeleteMetadataTemplateScope;
export declare function serializeCreateMetadataTemplateRequestBodyFieldsTypeField(val: CreateMetadataTemplateRequestBodyFieldsTypeField): SerializedData;
export declare function deserializeCreateMetadataTemplateRequestBodyFieldsTypeField(val: SerializedData): CreateMetadataTemplateRequestBodyFieldsTypeField;
export declare function serializeCreateMetadataTemplateRequestBodyFieldsOptionsField(val: CreateMetadataTemplateRequestBodyFieldsOptionsField): SerializedData;
export declare function deserializeCreateMetadataTemplateRequestBodyFieldsOptionsField(val: SerializedData): CreateMetadataTemplateRequestBodyFieldsOptionsField;
export declare function serializeCreateMetadataTemplateRequestBodyFieldsField(val: CreateMetadataTemplateRequestBodyFieldsField): SerializedData;
export declare function deserializeCreateMetadataTemplateRequestBodyFieldsField(val: SerializedData): CreateMetadataTemplateRequestBodyFieldsField;
export declare function serializeCreateMetadataTemplateRequestBody(val: CreateMetadataTemplateRequestBody): SerializedData;
export declare function deserializeCreateMetadataTemplateRequestBody(val: SerializedData): CreateMetadataTemplateRequestBody;
