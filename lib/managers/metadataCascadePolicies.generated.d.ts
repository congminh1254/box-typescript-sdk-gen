import { MetadataCascadePolicies } from '../schemas/metadataCascadePolicies.generated.js';
import { MetadataCascadePolicy } from '../schemas/metadataCascadePolicy.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { CancellationToken } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export declare class GetMetadataCascadePoliciesOptionals {
    readonly headers: GetMetadataCascadePoliciesHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetMetadataCascadePoliciesOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<GetMetadataCascadePoliciesOptionals, 'headers' | 'cancellationToken'>>);
}
export interface GetMetadataCascadePoliciesOptionalsInput {
    readonly headers?: GetMetadataCascadePoliciesHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class CreateMetadataCascadePolicyOptionals {
    readonly headers: CreateMetadataCascadePolicyHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<CreateMetadataCascadePolicyOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<CreateMetadataCascadePolicyOptionals, 'headers' | 'cancellationToken'>>);
}
export interface CreateMetadataCascadePolicyOptionalsInput {
    readonly headers?: CreateMetadataCascadePolicyHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetMetadataCascadePolicyByIdOptionals {
    readonly headers: GetMetadataCascadePolicyByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetMetadataCascadePolicyByIdOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<GetMetadataCascadePolicyByIdOptionals, 'headers' | 'cancellationToken'>>);
}
export interface GetMetadataCascadePolicyByIdOptionalsInput {
    readonly headers?: GetMetadataCascadePolicyByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class DeleteMetadataCascadePolicyByIdOptionals {
    readonly headers: DeleteMetadataCascadePolicyByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<DeleteMetadataCascadePolicyByIdOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<DeleteMetadataCascadePolicyByIdOptionals, 'headers' | 'cancellationToken'>>);
}
export interface DeleteMetadataCascadePolicyByIdOptionalsInput {
    readonly headers?: DeleteMetadataCascadePolicyByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class ApplyMetadataCascadePolicyOptionals {
    readonly headers: ApplyMetadataCascadePolicyHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<ApplyMetadataCascadePolicyOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<ApplyMetadataCascadePolicyOptionals, 'headers' | 'cancellationToken'>>);
}
export interface ApplyMetadataCascadePolicyOptionalsInput {
    readonly headers?: ApplyMetadataCascadePolicyHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export interface GetMetadataCascadePoliciesQueryParams {
    readonly folderId: string;
    readonly ownerEnterpriseId?: string;
    readonly marker?: string;
    readonly offset?: number;
}
export declare class GetMetadataCascadePoliciesHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetMetadataCascadePoliciesHeaders, 'extraHeaders'> & Partial<Pick<GetMetadataCascadePoliciesHeaders, 'extraHeaders'>>);
}
export interface GetMetadataCascadePoliciesHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export type CreateMetadataCascadePolicyRequestBodyScopeField = 'global' | 'enterprise';
export interface CreateMetadataCascadePolicyRequestBody {
    readonly folderId: string;
    readonly scope: CreateMetadataCascadePolicyRequestBodyScopeField;
    readonly templateKey: string;
}
export declare class CreateMetadataCascadePolicyHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<CreateMetadataCascadePolicyHeaders, 'extraHeaders'> & Partial<Pick<CreateMetadataCascadePolicyHeaders, 'extraHeaders'>>);
}
export interface CreateMetadataCascadePolicyHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class GetMetadataCascadePolicyByIdHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetMetadataCascadePolicyByIdHeaders, 'extraHeaders'> & Partial<Pick<GetMetadataCascadePolicyByIdHeaders, 'extraHeaders'>>);
}
export interface GetMetadataCascadePolicyByIdHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class DeleteMetadataCascadePolicyByIdHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<DeleteMetadataCascadePolicyByIdHeaders, 'extraHeaders'> & Partial<Pick<DeleteMetadataCascadePolicyByIdHeaders, 'extraHeaders'>>);
}
export interface DeleteMetadataCascadePolicyByIdHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export type ApplyMetadataCascadePolicyRequestBodyConflictResolutionField = 'none' | 'overwrite';
export interface ApplyMetadataCascadePolicyRequestBody {
    readonly conflictResolution: ApplyMetadataCascadePolicyRequestBodyConflictResolutionField;
}
export declare class ApplyMetadataCascadePolicyHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<ApplyMetadataCascadePolicyHeaders, 'extraHeaders'> & Partial<Pick<ApplyMetadataCascadePolicyHeaders, 'extraHeaders'>>);
}
export interface ApplyMetadataCascadePolicyHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class MetadataCascadePoliciesManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<MetadataCascadePoliciesManager, 'networkSession' | 'getMetadataCascadePolicies' | 'createMetadataCascadePolicy' | 'getMetadataCascadePolicyById' | 'deleteMetadataCascadePolicyById' | 'applyMetadataCascadePolicy'> & Partial<Pick<MetadataCascadePoliciesManager, 'networkSession'>>);
    getMetadataCascadePolicies(queryParams: GetMetadataCascadePoliciesQueryParams, optionalsInput?: GetMetadataCascadePoliciesOptionalsInput): Promise<MetadataCascadePolicies>;
    createMetadataCascadePolicy(requestBody: CreateMetadataCascadePolicyRequestBody, optionalsInput?: CreateMetadataCascadePolicyOptionalsInput): Promise<MetadataCascadePolicy>;
    getMetadataCascadePolicyById(metadataCascadePolicyId: string, optionalsInput?: GetMetadataCascadePolicyByIdOptionalsInput): Promise<MetadataCascadePolicy>;
    deleteMetadataCascadePolicyById(metadataCascadePolicyId: string, optionalsInput?: DeleteMetadataCascadePolicyByIdOptionalsInput): Promise<undefined>;
    applyMetadataCascadePolicy(metadataCascadePolicyId: string, requestBody: ApplyMetadataCascadePolicyRequestBody, optionalsInput?: ApplyMetadataCascadePolicyOptionalsInput): Promise<undefined>;
}
export interface MetadataCascadePoliciesManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
export declare function serializeCreateMetadataCascadePolicyRequestBodyScopeField(val: CreateMetadataCascadePolicyRequestBodyScopeField): SerializedData;
export declare function deserializeCreateMetadataCascadePolicyRequestBodyScopeField(val: SerializedData): CreateMetadataCascadePolicyRequestBodyScopeField;
export declare function serializeCreateMetadataCascadePolicyRequestBody(val: CreateMetadataCascadePolicyRequestBody): SerializedData;
export declare function deserializeCreateMetadataCascadePolicyRequestBody(val: SerializedData): CreateMetadataCascadePolicyRequestBody;
export declare function serializeApplyMetadataCascadePolicyRequestBodyConflictResolutionField(val: ApplyMetadataCascadePolicyRequestBodyConflictResolutionField): SerializedData;
export declare function deserializeApplyMetadataCascadePolicyRequestBodyConflictResolutionField(val: SerializedData): ApplyMetadataCascadePolicyRequestBodyConflictResolutionField;
export declare function serializeApplyMetadataCascadePolicyRequestBody(val: ApplyMetadataCascadePolicyRequestBody): SerializedData;
export declare function deserializeApplyMetadataCascadePolicyRequestBody(val: SerializedData): ApplyMetadataCascadePolicyRequestBody;
