import { LegalHoldPolicyAssignments } from '../schemas/legalHoldPolicyAssignments.generated.js';
import { LegalHoldPolicyAssignment } from '../schemas/legalHoldPolicyAssignment.generated.js';
import { FilesOnHold } from '../schemas/filesOnHold.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { CancellationToken } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export declare class GetLegalHoldPolicyAssignmentsOptionals {
    readonly headers: GetLegalHoldPolicyAssignmentsHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetLegalHoldPolicyAssignmentsOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<GetLegalHoldPolicyAssignmentsOptionals, 'headers' | 'cancellationToken'>>);
}
export interface GetLegalHoldPolicyAssignmentsOptionalsInput {
    readonly headers?: GetLegalHoldPolicyAssignmentsHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class CreateLegalHoldPolicyAssignmentOptionals {
    readonly headers: CreateLegalHoldPolicyAssignmentHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<CreateLegalHoldPolicyAssignmentOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<CreateLegalHoldPolicyAssignmentOptionals, 'headers' | 'cancellationToken'>>);
}
export interface CreateLegalHoldPolicyAssignmentOptionalsInput {
    readonly headers?: CreateLegalHoldPolicyAssignmentHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetLegalHoldPolicyAssignmentByIdOptionals {
    readonly headers: GetLegalHoldPolicyAssignmentByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetLegalHoldPolicyAssignmentByIdOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<GetLegalHoldPolicyAssignmentByIdOptionals, 'headers' | 'cancellationToken'>>);
}
export interface GetLegalHoldPolicyAssignmentByIdOptionalsInput {
    readonly headers?: GetLegalHoldPolicyAssignmentByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class DeleteLegalHoldPolicyAssignmentByIdOptionals {
    readonly headers: DeleteLegalHoldPolicyAssignmentByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<DeleteLegalHoldPolicyAssignmentByIdOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<DeleteLegalHoldPolicyAssignmentByIdOptionals, 'headers' | 'cancellationToken'>>);
}
export interface DeleteLegalHoldPolicyAssignmentByIdOptionalsInput {
    readonly headers?: DeleteLegalHoldPolicyAssignmentByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetLegalHoldPolicyAssignmentFileOnHoldOptionals {
    readonly queryParams: GetLegalHoldPolicyAssignmentFileOnHoldQueryParams;
    readonly headers: GetLegalHoldPolicyAssignmentFileOnHoldHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetLegalHoldPolicyAssignmentFileOnHoldOptionals, 'queryParams' | 'headers' | 'cancellationToken'> & Partial<Pick<GetLegalHoldPolicyAssignmentFileOnHoldOptionals, 'queryParams' | 'headers' | 'cancellationToken'>>);
}
export interface GetLegalHoldPolicyAssignmentFileOnHoldOptionalsInput {
    readonly queryParams?: GetLegalHoldPolicyAssignmentFileOnHoldQueryParams;
    readonly headers?: GetLegalHoldPolicyAssignmentFileOnHoldHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export type GetLegalHoldPolicyAssignmentsQueryParamsAssignToTypeField = 'file' | 'file_version' | 'folder' | 'user';
export interface GetLegalHoldPolicyAssignmentsQueryParams {
    readonly policyId: string;
    readonly assignToType?: GetLegalHoldPolicyAssignmentsQueryParamsAssignToTypeField;
    readonly assignToId?: string;
    readonly marker?: string;
    readonly limit?: number;
    readonly fields?: readonly string[];
}
export declare class GetLegalHoldPolicyAssignmentsHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetLegalHoldPolicyAssignmentsHeaders, 'extraHeaders'> & Partial<Pick<GetLegalHoldPolicyAssignmentsHeaders, 'extraHeaders'>>);
}
export interface GetLegalHoldPolicyAssignmentsHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export type CreateLegalHoldPolicyAssignmentRequestBodyAssignToTypeField = 'file' | 'file_version' | 'folder' | 'user';
export interface CreateLegalHoldPolicyAssignmentRequestBodyAssignToField {
    readonly type: CreateLegalHoldPolicyAssignmentRequestBodyAssignToTypeField;
    readonly id: string;
}
export interface CreateLegalHoldPolicyAssignmentRequestBody {
    readonly policyId: string;
    readonly assignTo: CreateLegalHoldPolicyAssignmentRequestBodyAssignToField;
}
export declare class CreateLegalHoldPolicyAssignmentHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<CreateLegalHoldPolicyAssignmentHeaders, 'extraHeaders'> & Partial<Pick<CreateLegalHoldPolicyAssignmentHeaders, 'extraHeaders'>>);
}
export interface CreateLegalHoldPolicyAssignmentHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class GetLegalHoldPolicyAssignmentByIdHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetLegalHoldPolicyAssignmentByIdHeaders, 'extraHeaders'> & Partial<Pick<GetLegalHoldPolicyAssignmentByIdHeaders, 'extraHeaders'>>);
}
export interface GetLegalHoldPolicyAssignmentByIdHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class DeleteLegalHoldPolicyAssignmentByIdHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<DeleteLegalHoldPolicyAssignmentByIdHeaders, 'extraHeaders'> & Partial<Pick<DeleteLegalHoldPolicyAssignmentByIdHeaders, 'extraHeaders'>>);
}
export interface DeleteLegalHoldPolicyAssignmentByIdHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export interface GetLegalHoldPolicyAssignmentFileOnHoldQueryParams {
    readonly marker?: string;
    readonly limit?: number;
    readonly fields?: readonly string[];
}
export declare class GetLegalHoldPolicyAssignmentFileOnHoldHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetLegalHoldPolicyAssignmentFileOnHoldHeaders, 'extraHeaders'> & Partial<Pick<GetLegalHoldPolicyAssignmentFileOnHoldHeaders, 'extraHeaders'>>);
}
export interface GetLegalHoldPolicyAssignmentFileOnHoldHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class LegalHoldPolicyAssignmentsManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<LegalHoldPolicyAssignmentsManager, 'networkSession' | 'getLegalHoldPolicyAssignments' | 'createLegalHoldPolicyAssignment' | 'getLegalHoldPolicyAssignmentById' | 'deleteLegalHoldPolicyAssignmentById' | 'getLegalHoldPolicyAssignmentFileOnHold'> & Partial<Pick<LegalHoldPolicyAssignmentsManager, 'networkSession'>>);
    getLegalHoldPolicyAssignments(queryParams: GetLegalHoldPolicyAssignmentsQueryParams, optionalsInput?: GetLegalHoldPolicyAssignmentsOptionalsInput): Promise<LegalHoldPolicyAssignments>;
    createLegalHoldPolicyAssignment(requestBody: CreateLegalHoldPolicyAssignmentRequestBody, optionalsInput?: CreateLegalHoldPolicyAssignmentOptionalsInput): Promise<LegalHoldPolicyAssignment>;
    getLegalHoldPolicyAssignmentById(legalHoldPolicyAssignmentId: string, optionalsInput?: GetLegalHoldPolicyAssignmentByIdOptionalsInput): Promise<LegalHoldPolicyAssignment>;
    deleteLegalHoldPolicyAssignmentById(legalHoldPolicyAssignmentId: string, optionalsInput?: DeleteLegalHoldPolicyAssignmentByIdOptionalsInput): Promise<undefined>;
    getLegalHoldPolicyAssignmentFileOnHold(legalHoldPolicyAssignmentId: string, optionalsInput?: GetLegalHoldPolicyAssignmentFileOnHoldOptionalsInput): Promise<FilesOnHold>;
}
export interface LegalHoldPolicyAssignmentsManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
export declare function serializeGetLegalHoldPolicyAssignmentsQueryParamsAssignToTypeField(val: GetLegalHoldPolicyAssignmentsQueryParamsAssignToTypeField): SerializedData;
export declare function deserializeGetLegalHoldPolicyAssignmentsQueryParamsAssignToTypeField(val: SerializedData): GetLegalHoldPolicyAssignmentsQueryParamsAssignToTypeField;
export declare function serializeCreateLegalHoldPolicyAssignmentRequestBodyAssignToTypeField(val: CreateLegalHoldPolicyAssignmentRequestBodyAssignToTypeField): SerializedData;
export declare function deserializeCreateLegalHoldPolicyAssignmentRequestBodyAssignToTypeField(val: SerializedData): CreateLegalHoldPolicyAssignmentRequestBodyAssignToTypeField;
export declare function serializeCreateLegalHoldPolicyAssignmentRequestBodyAssignToField(val: CreateLegalHoldPolicyAssignmentRequestBodyAssignToField): SerializedData;
export declare function deserializeCreateLegalHoldPolicyAssignmentRequestBodyAssignToField(val: SerializedData): CreateLegalHoldPolicyAssignmentRequestBodyAssignToField;
export declare function serializeCreateLegalHoldPolicyAssignmentRequestBody(val: CreateLegalHoldPolicyAssignmentRequestBody): SerializedData;
export declare function deserializeCreateLegalHoldPolicyAssignmentRequestBody(val: SerializedData): CreateLegalHoldPolicyAssignmentRequestBody;
