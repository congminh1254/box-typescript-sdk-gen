import { RetentionPolicies } from '../schemas/retentionPolicies.generated.js';
import { RetentionPolicy } from '../schemas/retentionPolicy.generated.js';
import { UserMini } from '../schemas/userMini.generated.js';
import { UserBase } from '../schemas/userBase.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { CancellationToken } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export declare class CreateRetentionPolicyOptionals {
    readonly headers: CreateRetentionPolicyHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<CreateRetentionPolicyOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<CreateRetentionPolicyOptionals, 'headers' | 'cancellationToken'>>);
}
export interface CreateRetentionPolicyOptionalsInput {
    readonly headers?: CreateRetentionPolicyHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetRetentionPolicyByIdOptionals {
    readonly queryParams: GetRetentionPolicyByIdQueryParams;
    readonly headers: GetRetentionPolicyByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetRetentionPolicyByIdOptionals, 'queryParams' | 'headers' | 'cancellationToken'> & Partial<Pick<GetRetentionPolicyByIdOptionals, 'queryParams' | 'headers' | 'cancellationToken'>>);
}
export interface GetRetentionPolicyByIdOptionalsInput {
    readonly queryParams?: GetRetentionPolicyByIdQueryParams;
    readonly headers?: GetRetentionPolicyByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class UpdateRetentionPolicyByIdOptionals {
    readonly requestBody: UpdateRetentionPolicyByIdRequestBody;
    readonly headers: UpdateRetentionPolicyByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<UpdateRetentionPolicyByIdOptionals, 'requestBody' | 'headers' | 'cancellationToken'> & Partial<Pick<UpdateRetentionPolicyByIdOptionals, 'requestBody' | 'headers' | 'cancellationToken'>>);
}
export interface UpdateRetentionPolicyByIdOptionalsInput {
    readonly requestBody?: UpdateRetentionPolicyByIdRequestBody;
    readonly headers?: UpdateRetentionPolicyByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class DeleteRetentionPolicyByIdOptionals {
    readonly headers: DeleteRetentionPolicyByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<DeleteRetentionPolicyByIdOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<DeleteRetentionPolicyByIdOptionals, 'headers' | 'cancellationToken'>>);
}
export interface DeleteRetentionPolicyByIdOptionalsInput {
    readonly headers?: DeleteRetentionPolicyByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export type GetRetentionPoliciesQueryParamsPolicyTypeField = 'finite' | 'indefinite';
export interface GetRetentionPoliciesQueryParams {
    readonly policyName?: string;
    readonly policyType?: GetRetentionPoliciesQueryParamsPolicyTypeField;
    readonly createdByUserId?: string;
    readonly fields?: readonly string[];
    readonly limit?: number;
    readonly marker?: string;
}
export declare class GetRetentionPoliciesHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetRetentionPoliciesHeaders, 'extraHeaders'> & Partial<Pick<GetRetentionPoliciesHeaders, 'extraHeaders'>>);
}
export interface GetRetentionPoliciesHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export type CreateRetentionPolicyRequestBodyPolicyTypeField = 'finite' | 'indefinite';
export type CreateRetentionPolicyRequestBodyDispositionActionField = 'permanently_delete' | 'remove_retention';
export type CreateRetentionPolicyRequestBodyRetentionTypeField = 'modifiable' | 'non_modifiable';
export interface CreateRetentionPolicyRequestBody {
    readonly policyName: string;
    readonly description?: string;
    readonly policyType: CreateRetentionPolicyRequestBodyPolicyTypeField;
    readonly dispositionAction: CreateRetentionPolicyRequestBodyDispositionActionField;
    readonly retentionLength?: string;
    readonly retentionType?: CreateRetentionPolicyRequestBodyRetentionTypeField;
    readonly canOwnerExtendRetention?: boolean;
    readonly areOwnersNotified?: boolean;
    readonly customNotificationRecipients?: readonly UserMini[];
}
export declare class CreateRetentionPolicyHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<CreateRetentionPolicyHeaders, 'extraHeaders'> & Partial<Pick<CreateRetentionPolicyHeaders, 'extraHeaders'>>);
}
export interface CreateRetentionPolicyHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export interface GetRetentionPolicyByIdQueryParams {
    readonly fields?: readonly string[];
}
export declare class GetRetentionPolicyByIdHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetRetentionPolicyByIdHeaders, 'extraHeaders'> & Partial<Pick<GetRetentionPolicyByIdHeaders, 'extraHeaders'>>);
}
export interface GetRetentionPolicyByIdHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export interface UpdateRetentionPolicyByIdRequestBody {
    readonly policyName?: string;
    readonly description?: string;
    readonly dispositionAction?: string;
    readonly retentionType?: string;
    readonly retentionLength?: string;
    readonly status?: string;
    readonly canOwnerExtendRetention?: boolean;
    readonly areOwnersNotified?: boolean;
    readonly customNotificationRecipients?: readonly UserBase[];
}
export declare class UpdateRetentionPolicyByIdHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<UpdateRetentionPolicyByIdHeaders, 'extraHeaders'> & Partial<Pick<UpdateRetentionPolicyByIdHeaders, 'extraHeaders'>>);
}
export interface UpdateRetentionPolicyByIdHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class DeleteRetentionPolicyByIdHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<DeleteRetentionPolicyByIdHeaders, 'extraHeaders'> & Partial<Pick<DeleteRetentionPolicyByIdHeaders, 'extraHeaders'>>);
}
export interface DeleteRetentionPolicyByIdHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class RetentionPoliciesManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<RetentionPoliciesManager, 'networkSession' | 'getRetentionPolicies' | 'createRetentionPolicy' | 'getRetentionPolicyById' | 'updateRetentionPolicyById' | 'deleteRetentionPolicyById'> & Partial<Pick<RetentionPoliciesManager, 'networkSession'>>);
    getRetentionPolicies(queryParams?: GetRetentionPoliciesQueryParams, headersInput?: GetRetentionPoliciesHeadersInput, cancellationToken?: CancellationToken): Promise<RetentionPolicies>;
    createRetentionPolicy(requestBody: CreateRetentionPolicyRequestBody, optionalsInput?: CreateRetentionPolicyOptionalsInput): Promise<RetentionPolicy>;
    getRetentionPolicyById(retentionPolicyId: string, optionalsInput?: GetRetentionPolicyByIdOptionalsInput): Promise<RetentionPolicy>;
    updateRetentionPolicyById(retentionPolicyId: string, optionalsInput?: UpdateRetentionPolicyByIdOptionalsInput): Promise<RetentionPolicy>;
    deleteRetentionPolicyById(retentionPolicyId: string, optionalsInput?: DeleteRetentionPolicyByIdOptionalsInput): Promise<undefined>;
}
export interface RetentionPoliciesManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
export declare function serializeGetRetentionPoliciesQueryParamsPolicyTypeField(val: GetRetentionPoliciesQueryParamsPolicyTypeField): SerializedData;
export declare function deserializeGetRetentionPoliciesQueryParamsPolicyTypeField(val: SerializedData): GetRetentionPoliciesQueryParamsPolicyTypeField;
export declare function serializeCreateRetentionPolicyRequestBodyPolicyTypeField(val: CreateRetentionPolicyRequestBodyPolicyTypeField): SerializedData;
export declare function deserializeCreateRetentionPolicyRequestBodyPolicyTypeField(val: SerializedData): CreateRetentionPolicyRequestBodyPolicyTypeField;
export declare function serializeCreateRetentionPolicyRequestBodyDispositionActionField(val: CreateRetentionPolicyRequestBodyDispositionActionField): SerializedData;
export declare function deserializeCreateRetentionPolicyRequestBodyDispositionActionField(val: SerializedData): CreateRetentionPolicyRequestBodyDispositionActionField;
export declare function serializeCreateRetentionPolicyRequestBodyRetentionTypeField(val: CreateRetentionPolicyRequestBodyRetentionTypeField): SerializedData;
export declare function deserializeCreateRetentionPolicyRequestBodyRetentionTypeField(val: SerializedData): CreateRetentionPolicyRequestBodyRetentionTypeField;
export declare function serializeCreateRetentionPolicyRequestBody(val: CreateRetentionPolicyRequestBody): SerializedData;
export declare function deserializeCreateRetentionPolicyRequestBody(val: SerializedData): CreateRetentionPolicyRequestBody;
export declare function serializeUpdateRetentionPolicyByIdRequestBody(val: UpdateRetentionPolicyByIdRequestBody): SerializedData;
export declare function deserializeUpdateRetentionPolicyByIdRequestBody(val: SerializedData): UpdateRetentionPolicyByIdRequestBody;
