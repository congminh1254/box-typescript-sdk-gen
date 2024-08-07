import { StoragePolicyAssignments } from '../schemas/storagePolicyAssignments.generated.js';
import { StoragePolicyAssignment } from '../schemas/storagePolicyAssignment.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { CancellationToken } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export declare class GetStoragePolicyAssignmentsOptionals {
    readonly headers: GetStoragePolicyAssignmentsHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetStoragePolicyAssignmentsOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<GetStoragePolicyAssignmentsOptionals, 'headers' | 'cancellationToken'>>);
}
export interface GetStoragePolicyAssignmentsOptionalsInput {
    readonly headers?: GetStoragePolicyAssignmentsHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class CreateStoragePolicyAssignmentOptionals {
    readonly headers: CreateStoragePolicyAssignmentHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<CreateStoragePolicyAssignmentOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<CreateStoragePolicyAssignmentOptionals, 'headers' | 'cancellationToken'>>);
}
export interface CreateStoragePolicyAssignmentOptionalsInput {
    readonly headers?: CreateStoragePolicyAssignmentHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetStoragePolicyAssignmentByIdOptionals {
    readonly headers: GetStoragePolicyAssignmentByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetStoragePolicyAssignmentByIdOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<GetStoragePolicyAssignmentByIdOptionals, 'headers' | 'cancellationToken'>>);
}
export interface GetStoragePolicyAssignmentByIdOptionalsInput {
    readonly headers?: GetStoragePolicyAssignmentByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class UpdateStoragePolicyAssignmentByIdOptionals {
    readonly headers: UpdateStoragePolicyAssignmentByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<UpdateStoragePolicyAssignmentByIdOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<UpdateStoragePolicyAssignmentByIdOptionals, 'headers' | 'cancellationToken'>>);
}
export interface UpdateStoragePolicyAssignmentByIdOptionalsInput {
    readonly headers?: UpdateStoragePolicyAssignmentByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class DeleteStoragePolicyAssignmentByIdOptionals {
    readonly headers: DeleteStoragePolicyAssignmentByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<DeleteStoragePolicyAssignmentByIdOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<DeleteStoragePolicyAssignmentByIdOptionals, 'headers' | 'cancellationToken'>>);
}
export interface DeleteStoragePolicyAssignmentByIdOptionalsInput {
    readonly headers?: DeleteStoragePolicyAssignmentByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export type GetStoragePolicyAssignmentsQueryParamsResolvedForTypeField = 'user' | 'enterprise';
export interface GetStoragePolicyAssignmentsQueryParams {
    readonly marker?: string;
    readonly resolvedForType: GetStoragePolicyAssignmentsQueryParamsResolvedForTypeField;
    readonly resolvedForId: string;
}
export declare class GetStoragePolicyAssignmentsHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetStoragePolicyAssignmentsHeaders, 'extraHeaders'> & Partial<Pick<GetStoragePolicyAssignmentsHeaders, 'extraHeaders'>>);
}
export interface GetStoragePolicyAssignmentsHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export type CreateStoragePolicyAssignmentRequestBodyStoragePolicyTypeField = 'storage_policy';
export declare class CreateStoragePolicyAssignmentRequestBodyStoragePolicyField {
    readonly type: CreateStoragePolicyAssignmentRequestBodyStoragePolicyTypeField;
    readonly id: string;
    constructor(fields: Omit<CreateStoragePolicyAssignmentRequestBodyStoragePolicyField, 'type'> & Partial<Pick<CreateStoragePolicyAssignmentRequestBodyStoragePolicyField, 'type'>>);
}
export interface CreateStoragePolicyAssignmentRequestBodyStoragePolicyFieldInput {
    readonly type?: CreateStoragePolicyAssignmentRequestBodyStoragePolicyTypeField;
    readonly id: string;
}
export type CreateStoragePolicyAssignmentRequestBodyAssignedToTypeField = 'user' | 'enterprise';
export interface CreateStoragePolicyAssignmentRequestBodyAssignedToField {
    readonly type: CreateStoragePolicyAssignmentRequestBodyAssignedToTypeField;
    readonly id: string;
}
export interface CreateStoragePolicyAssignmentRequestBody {
    readonly storagePolicy: CreateStoragePolicyAssignmentRequestBodyStoragePolicyField;
    readonly assignedTo: CreateStoragePolicyAssignmentRequestBodyAssignedToField;
}
export declare class CreateStoragePolicyAssignmentHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<CreateStoragePolicyAssignmentHeaders, 'extraHeaders'> & Partial<Pick<CreateStoragePolicyAssignmentHeaders, 'extraHeaders'>>);
}
export interface CreateStoragePolicyAssignmentHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class GetStoragePolicyAssignmentByIdHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetStoragePolicyAssignmentByIdHeaders, 'extraHeaders'> & Partial<Pick<GetStoragePolicyAssignmentByIdHeaders, 'extraHeaders'>>);
}
export interface GetStoragePolicyAssignmentByIdHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export type UpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyTypeField = 'storage_policy';
export declare class UpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyField {
    readonly type: UpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyTypeField;
    readonly id: string;
    constructor(fields: Omit<UpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyField, 'type'> & Partial<Pick<UpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyField, 'type'>>);
}
export interface UpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyFieldInput {
    readonly type?: UpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyTypeField;
    readonly id: string;
}
export interface UpdateStoragePolicyAssignmentByIdRequestBody {
    readonly storagePolicy: UpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyField;
}
export declare class UpdateStoragePolicyAssignmentByIdHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<UpdateStoragePolicyAssignmentByIdHeaders, 'extraHeaders'> & Partial<Pick<UpdateStoragePolicyAssignmentByIdHeaders, 'extraHeaders'>>);
}
export interface UpdateStoragePolicyAssignmentByIdHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class DeleteStoragePolicyAssignmentByIdHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<DeleteStoragePolicyAssignmentByIdHeaders, 'extraHeaders'> & Partial<Pick<DeleteStoragePolicyAssignmentByIdHeaders, 'extraHeaders'>>);
}
export interface DeleteStoragePolicyAssignmentByIdHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class StoragePolicyAssignmentsManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<StoragePolicyAssignmentsManager, 'networkSession' | 'getStoragePolicyAssignments' | 'createStoragePolicyAssignment' | 'getStoragePolicyAssignmentById' | 'updateStoragePolicyAssignmentById' | 'deleteStoragePolicyAssignmentById'> & Partial<Pick<StoragePolicyAssignmentsManager, 'networkSession'>>);
    getStoragePolicyAssignments(queryParams: GetStoragePolicyAssignmentsQueryParams, optionalsInput?: GetStoragePolicyAssignmentsOptionalsInput): Promise<StoragePolicyAssignments>;
    createStoragePolicyAssignment(requestBody: CreateStoragePolicyAssignmentRequestBody, optionalsInput?: CreateStoragePolicyAssignmentOptionalsInput): Promise<StoragePolicyAssignment>;
    getStoragePolicyAssignmentById(storagePolicyAssignmentId: string, optionalsInput?: GetStoragePolicyAssignmentByIdOptionalsInput): Promise<StoragePolicyAssignment>;
    updateStoragePolicyAssignmentById(storagePolicyAssignmentId: string, requestBody: UpdateStoragePolicyAssignmentByIdRequestBody, optionalsInput?: UpdateStoragePolicyAssignmentByIdOptionalsInput): Promise<StoragePolicyAssignment>;
    deleteStoragePolicyAssignmentById(storagePolicyAssignmentId: string, optionalsInput?: DeleteStoragePolicyAssignmentByIdOptionalsInput): Promise<undefined>;
}
export interface StoragePolicyAssignmentsManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
export declare function serializeGetStoragePolicyAssignmentsQueryParamsResolvedForTypeField(val: GetStoragePolicyAssignmentsQueryParamsResolvedForTypeField): SerializedData;
export declare function deserializeGetStoragePolicyAssignmentsQueryParamsResolvedForTypeField(val: SerializedData): GetStoragePolicyAssignmentsQueryParamsResolvedForTypeField;
export declare function serializeCreateStoragePolicyAssignmentRequestBodyStoragePolicyTypeField(val: CreateStoragePolicyAssignmentRequestBodyStoragePolicyTypeField): SerializedData;
export declare function deserializeCreateStoragePolicyAssignmentRequestBodyStoragePolicyTypeField(val: SerializedData): CreateStoragePolicyAssignmentRequestBodyStoragePolicyTypeField;
export declare function serializeCreateStoragePolicyAssignmentRequestBodyStoragePolicyField(val: CreateStoragePolicyAssignmentRequestBodyStoragePolicyField): SerializedData;
export declare function deserializeCreateStoragePolicyAssignmentRequestBodyStoragePolicyField(val: SerializedData): CreateStoragePolicyAssignmentRequestBodyStoragePolicyField;
export declare function serializeCreateStoragePolicyAssignmentRequestBodyStoragePolicyFieldInput(val: CreateStoragePolicyAssignmentRequestBodyStoragePolicyFieldInput): SerializedData;
export declare function deserializeCreateStoragePolicyAssignmentRequestBodyStoragePolicyFieldInput(val: SerializedData): CreateStoragePolicyAssignmentRequestBodyStoragePolicyFieldInput;
export declare function serializeCreateStoragePolicyAssignmentRequestBodyAssignedToTypeField(val: CreateStoragePolicyAssignmentRequestBodyAssignedToTypeField): SerializedData;
export declare function deserializeCreateStoragePolicyAssignmentRequestBodyAssignedToTypeField(val: SerializedData): CreateStoragePolicyAssignmentRequestBodyAssignedToTypeField;
export declare function serializeCreateStoragePolicyAssignmentRequestBodyAssignedToField(val: CreateStoragePolicyAssignmentRequestBodyAssignedToField): SerializedData;
export declare function deserializeCreateStoragePolicyAssignmentRequestBodyAssignedToField(val: SerializedData): CreateStoragePolicyAssignmentRequestBodyAssignedToField;
export declare function serializeCreateStoragePolicyAssignmentRequestBody(val: CreateStoragePolicyAssignmentRequestBody): SerializedData;
export declare function deserializeCreateStoragePolicyAssignmentRequestBody(val: SerializedData): CreateStoragePolicyAssignmentRequestBody;
export declare function serializeUpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyTypeField(val: UpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyTypeField): SerializedData;
export declare function deserializeUpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyTypeField(val: SerializedData): UpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyTypeField;
export declare function serializeUpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyField(val: UpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyField): SerializedData;
export declare function deserializeUpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyField(val: SerializedData): UpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyField;
export declare function serializeUpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyFieldInput(val: UpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyFieldInput): SerializedData;
export declare function deserializeUpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyFieldInput(val: SerializedData): UpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyFieldInput;
export declare function serializeUpdateStoragePolicyAssignmentByIdRequestBody(val: UpdateStoragePolicyAssignmentByIdRequestBody): SerializedData;
export declare function deserializeUpdateStoragePolicyAssignmentByIdRequestBody(val: SerializedData): UpdateStoragePolicyAssignmentByIdRequestBody;
