import { RetentionPolicyAssignments } from '../schemas/retentionPolicyAssignments.generated.js';
import { RetentionPolicyAssignment } from '../schemas/retentionPolicyAssignment.generated.js';
import { FilesUnderRetention } from '../schemas/filesUnderRetention.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { CancellationToken } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export declare class GetRetentionPolicyAssignmentsOptionals {
    readonly queryParams: GetRetentionPolicyAssignmentsQueryParams;
    readonly headers: GetRetentionPolicyAssignmentsHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetRetentionPolicyAssignmentsOptionals, 'queryParams' | 'headers' | 'cancellationToken'> & Partial<Pick<GetRetentionPolicyAssignmentsOptionals, 'queryParams' | 'headers' | 'cancellationToken'>>);
}
export interface GetRetentionPolicyAssignmentsOptionalsInput {
    readonly queryParams?: GetRetentionPolicyAssignmentsQueryParams;
    readonly headers?: GetRetentionPolicyAssignmentsHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class CreateRetentionPolicyAssignmentOptionals {
    readonly headers: CreateRetentionPolicyAssignmentHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<CreateRetentionPolicyAssignmentOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<CreateRetentionPolicyAssignmentOptionals, 'headers' | 'cancellationToken'>>);
}
export interface CreateRetentionPolicyAssignmentOptionalsInput {
    readonly headers?: CreateRetentionPolicyAssignmentHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetRetentionPolicyAssignmentByIdOptionals {
    readonly queryParams: GetRetentionPolicyAssignmentByIdQueryParams;
    readonly headers: GetRetentionPolicyAssignmentByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetRetentionPolicyAssignmentByIdOptionals, 'queryParams' | 'headers' | 'cancellationToken'> & Partial<Pick<GetRetentionPolicyAssignmentByIdOptionals, 'queryParams' | 'headers' | 'cancellationToken'>>);
}
export interface GetRetentionPolicyAssignmentByIdOptionalsInput {
    readonly queryParams?: GetRetentionPolicyAssignmentByIdQueryParams;
    readonly headers?: GetRetentionPolicyAssignmentByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class DeleteRetentionPolicyAssignmentByIdOptionals {
    readonly headers: DeleteRetentionPolicyAssignmentByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<DeleteRetentionPolicyAssignmentByIdOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<DeleteRetentionPolicyAssignmentByIdOptionals, 'headers' | 'cancellationToken'>>);
}
export interface DeleteRetentionPolicyAssignmentByIdOptionalsInput {
    readonly headers?: DeleteRetentionPolicyAssignmentByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetFilesUnderRetentionPolicyAssignmentOptionals {
    readonly queryParams: GetFilesUnderRetentionPolicyAssignmentQueryParams;
    readonly headers: GetFilesUnderRetentionPolicyAssignmentHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetFilesUnderRetentionPolicyAssignmentOptionals, 'queryParams' | 'headers' | 'cancellationToken'> & Partial<Pick<GetFilesUnderRetentionPolicyAssignmentOptionals, 'queryParams' | 'headers' | 'cancellationToken'>>);
}
export interface GetFilesUnderRetentionPolicyAssignmentOptionalsInput {
    readonly queryParams?: GetFilesUnderRetentionPolicyAssignmentQueryParams;
    readonly headers?: GetFilesUnderRetentionPolicyAssignmentHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export type GetRetentionPolicyAssignmentsQueryParamsTypeField = 'folder' | 'enterprise' | 'metadata_template';
export interface GetRetentionPolicyAssignmentsQueryParams {
    readonly type?: GetRetentionPolicyAssignmentsQueryParamsTypeField;
    readonly fields?: readonly string[];
    readonly marker?: string;
    readonly limit?: number;
}
export declare class GetRetentionPolicyAssignmentsHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetRetentionPolicyAssignmentsHeaders, 'extraHeaders'> & Partial<Pick<GetRetentionPolicyAssignmentsHeaders, 'extraHeaders'>>);
}
export interface GetRetentionPolicyAssignmentsHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export type CreateRetentionPolicyAssignmentRequestBodyAssignToTypeField = 'enterprise' | 'folder' | 'metadata_template';
export interface CreateRetentionPolicyAssignmentRequestBodyAssignToField {
    readonly type: CreateRetentionPolicyAssignmentRequestBodyAssignToTypeField;
    readonly id?: string;
}
export interface CreateRetentionPolicyAssignmentRequestBodyFilterFieldsField {
    readonly field?: string;
    readonly value?: string;
}
export interface CreateRetentionPolicyAssignmentRequestBody {
    readonly policyId: string;
    readonly assignTo: CreateRetentionPolicyAssignmentRequestBodyAssignToField;
    readonly filterFields?: readonly CreateRetentionPolicyAssignmentRequestBodyFilterFieldsField[];
    readonly startDateField?: string;
}
export declare class CreateRetentionPolicyAssignmentHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<CreateRetentionPolicyAssignmentHeaders, 'extraHeaders'> & Partial<Pick<CreateRetentionPolicyAssignmentHeaders, 'extraHeaders'>>);
}
export interface CreateRetentionPolicyAssignmentHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export interface GetRetentionPolicyAssignmentByIdQueryParams {
    readonly fields?: readonly string[];
}
export declare class GetRetentionPolicyAssignmentByIdHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetRetentionPolicyAssignmentByIdHeaders, 'extraHeaders'> & Partial<Pick<GetRetentionPolicyAssignmentByIdHeaders, 'extraHeaders'>>);
}
export interface GetRetentionPolicyAssignmentByIdHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class DeleteRetentionPolicyAssignmentByIdHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<DeleteRetentionPolicyAssignmentByIdHeaders, 'extraHeaders'> & Partial<Pick<DeleteRetentionPolicyAssignmentByIdHeaders, 'extraHeaders'>>);
}
export interface DeleteRetentionPolicyAssignmentByIdHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export interface GetFilesUnderRetentionPolicyAssignmentQueryParams {
    readonly marker?: string;
    readonly limit?: number;
}
export declare class GetFilesUnderRetentionPolicyAssignmentHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetFilesUnderRetentionPolicyAssignmentHeaders, 'extraHeaders'> & Partial<Pick<GetFilesUnderRetentionPolicyAssignmentHeaders, 'extraHeaders'>>);
}
export interface GetFilesUnderRetentionPolicyAssignmentHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class RetentionPolicyAssignmentsManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<RetentionPolicyAssignmentsManager, 'networkSession' | 'getRetentionPolicyAssignments' | 'createRetentionPolicyAssignment' | 'getRetentionPolicyAssignmentById' | 'deleteRetentionPolicyAssignmentById' | 'getFilesUnderRetentionPolicyAssignment'> & Partial<Pick<RetentionPolicyAssignmentsManager, 'networkSession'>>);
    getRetentionPolicyAssignments(retentionPolicyId: string, optionalsInput?: GetRetentionPolicyAssignmentsOptionalsInput): Promise<RetentionPolicyAssignments>;
    createRetentionPolicyAssignment(requestBody: CreateRetentionPolicyAssignmentRequestBody, optionalsInput?: CreateRetentionPolicyAssignmentOptionalsInput): Promise<RetentionPolicyAssignment>;
    getRetentionPolicyAssignmentById(retentionPolicyAssignmentId: string, optionalsInput?: GetRetentionPolicyAssignmentByIdOptionalsInput): Promise<RetentionPolicyAssignment>;
    deleteRetentionPolicyAssignmentById(retentionPolicyAssignmentId: string, optionalsInput?: DeleteRetentionPolicyAssignmentByIdOptionalsInput): Promise<undefined>;
    getFilesUnderRetentionPolicyAssignment(retentionPolicyAssignmentId: string, optionalsInput?: GetFilesUnderRetentionPolicyAssignmentOptionalsInput): Promise<FilesUnderRetention>;
}
export interface RetentionPolicyAssignmentsManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
export declare function serializeGetRetentionPolicyAssignmentsQueryParamsTypeField(val: GetRetentionPolicyAssignmentsQueryParamsTypeField): SerializedData;
export declare function deserializeGetRetentionPolicyAssignmentsQueryParamsTypeField(val: SerializedData): GetRetentionPolicyAssignmentsQueryParamsTypeField;
export declare function serializeCreateRetentionPolicyAssignmentRequestBodyAssignToTypeField(val: CreateRetentionPolicyAssignmentRequestBodyAssignToTypeField): SerializedData;
export declare function deserializeCreateRetentionPolicyAssignmentRequestBodyAssignToTypeField(val: SerializedData): CreateRetentionPolicyAssignmentRequestBodyAssignToTypeField;
export declare function serializeCreateRetentionPolicyAssignmentRequestBodyAssignToField(val: CreateRetentionPolicyAssignmentRequestBodyAssignToField): SerializedData;
export declare function deserializeCreateRetentionPolicyAssignmentRequestBodyAssignToField(val: SerializedData): CreateRetentionPolicyAssignmentRequestBodyAssignToField;
export declare function serializeCreateRetentionPolicyAssignmentRequestBodyFilterFieldsField(val: CreateRetentionPolicyAssignmentRequestBodyFilterFieldsField): SerializedData;
export declare function deserializeCreateRetentionPolicyAssignmentRequestBodyFilterFieldsField(val: SerializedData): CreateRetentionPolicyAssignmentRequestBodyFilterFieldsField;
export declare function serializeCreateRetentionPolicyAssignmentRequestBody(val: CreateRetentionPolicyAssignmentRequestBody): SerializedData;
export declare function deserializeCreateRetentionPolicyAssignmentRequestBody(val: SerializedData): CreateRetentionPolicyAssignmentRequestBody;
