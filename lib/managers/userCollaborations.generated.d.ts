import { Collaboration } from '../schemas/collaboration.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { CancellationToken } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
import { DateTime } from '../internal/utils.js';
export declare class GetCollaborationByIdOptionals {
    readonly queryParams: GetCollaborationByIdQueryParams;
    readonly headers: GetCollaborationByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetCollaborationByIdOptionals, 'queryParams' | 'headers' | 'cancellationToken'> & Partial<Pick<GetCollaborationByIdOptionals, 'queryParams' | 'headers' | 'cancellationToken'>>);
}
export interface GetCollaborationByIdOptionalsInput {
    readonly queryParams?: GetCollaborationByIdQueryParams;
    readonly headers?: GetCollaborationByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class UpdateCollaborationByIdOptionals {
    readonly headers: UpdateCollaborationByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<UpdateCollaborationByIdOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<UpdateCollaborationByIdOptionals, 'headers' | 'cancellationToken'>>);
}
export interface UpdateCollaborationByIdOptionalsInput {
    readonly headers?: UpdateCollaborationByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class DeleteCollaborationByIdOptionals {
    readonly headers: DeleteCollaborationByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<DeleteCollaborationByIdOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<DeleteCollaborationByIdOptionals, 'headers' | 'cancellationToken'>>);
}
export interface DeleteCollaborationByIdOptionalsInput {
    readonly headers?: DeleteCollaborationByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class CreateCollaborationOptionals {
    readonly queryParams: CreateCollaborationQueryParams;
    readonly headers: CreateCollaborationHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<CreateCollaborationOptionals, 'queryParams' | 'headers' | 'cancellationToken'> & Partial<Pick<CreateCollaborationOptionals, 'queryParams' | 'headers' | 'cancellationToken'>>);
}
export interface CreateCollaborationOptionalsInput {
    readonly queryParams?: CreateCollaborationQueryParams;
    readonly headers?: CreateCollaborationHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export interface GetCollaborationByIdQueryParams {
    readonly fields?: readonly string[];
}
export declare class GetCollaborationByIdHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetCollaborationByIdHeaders, 'extraHeaders'> & Partial<Pick<GetCollaborationByIdHeaders, 'extraHeaders'>>);
}
export interface GetCollaborationByIdHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export type UpdateCollaborationByIdRequestBodyRoleField = 'editor' | 'viewer' | 'previewer' | 'uploader' | 'previewer uploader' | 'viewer uploader' | 'co-owner' | 'owner';
export type UpdateCollaborationByIdRequestBodyStatusField = 'pending' | 'accepted' | 'rejected';
export interface UpdateCollaborationByIdRequestBody {
    readonly role: UpdateCollaborationByIdRequestBodyRoleField;
    readonly status?: UpdateCollaborationByIdRequestBodyStatusField;
    readonly expiresAt?: DateTime;
    readonly canViewPath?: boolean;
}
export declare class UpdateCollaborationByIdHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<UpdateCollaborationByIdHeaders, 'extraHeaders'> & Partial<Pick<UpdateCollaborationByIdHeaders, 'extraHeaders'>>);
}
export interface UpdateCollaborationByIdHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class DeleteCollaborationByIdHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<DeleteCollaborationByIdHeaders, 'extraHeaders'> & Partial<Pick<DeleteCollaborationByIdHeaders, 'extraHeaders'>>);
}
export interface DeleteCollaborationByIdHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export type CreateCollaborationRequestBodyItemTypeField = 'file' | 'folder';
export interface CreateCollaborationRequestBodyItemField {
    readonly type?: CreateCollaborationRequestBodyItemTypeField;
    readonly id?: string;
}
export type CreateCollaborationRequestBodyAccessibleByTypeField = 'user' | 'group';
export interface CreateCollaborationRequestBodyAccessibleByField {
    readonly type: CreateCollaborationRequestBodyAccessibleByTypeField;
    readonly id?: string;
    readonly login?: string;
}
export type CreateCollaborationRequestBodyRoleField = 'editor' | 'viewer' | 'previewer' | 'uploader' | 'previewer uploader' | 'viewer uploader' | 'co-owner';
export interface CreateCollaborationRequestBody {
    readonly item: CreateCollaborationRequestBodyItemField;
    readonly accessibleBy: CreateCollaborationRequestBodyAccessibleByField;
    readonly role: CreateCollaborationRequestBodyRoleField;
    readonly isAccessOnly?: boolean;
    readonly canViewPath?: boolean;
    readonly expiresAt?: DateTime;
}
export interface CreateCollaborationQueryParams {
    readonly fields?: readonly string[];
    readonly notify?: boolean;
}
export declare class CreateCollaborationHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<CreateCollaborationHeaders, 'extraHeaders'> & Partial<Pick<CreateCollaborationHeaders, 'extraHeaders'>>);
}
export interface CreateCollaborationHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class UserCollaborationsManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<UserCollaborationsManager, 'networkSession' | 'getCollaborationById' | 'updateCollaborationById' | 'deleteCollaborationById' | 'createCollaboration'> & Partial<Pick<UserCollaborationsManager, 'networkSession'>>);
    getCollaborationById(collaborationId: string, optionalsInput?: GetCollaborationByIdOptionalsInput): Promise<Collaboration>;
    updateCollaborationById(collaborationId: string, requestBody: UpdateCollaborationByIdRequestBody, optionalsInput?: UpdateCollaborationByIdOptionalsInput): Promise<Collaboration>;
    deleteCollaborationById(collaborationId: string, optionalsInput?: DeleteCollaborationByIdOptionalsInput): Promise<undefined>;
    createCollaboration(requestBody: CreateCollaborationRequestBody, optionalsInput?: CreateCollaborationOptionalsInput): Promise<Collaboration>;
}
export interface UserCollaborationsManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
export declare function serializeUpdateCollaborationByIdRequestBodyRoleField(val: UpdateCollaborationByIdRequestBodyRoleField): SerializedData;
export declare function deserializeUpdateCollaborationByIdRequestBodyRoleField(val: SerializedData): UpdateCollaborationByIdRequestBodyRoleField;
export declare function serializeUpdateCollaborationByIdRequestBodyStatusField(val: UpdateCollaborationByIdRequestBodyStatusField): SerializedData;
export declare function deserializeUpdateCollaborationByIdRequestBodyStatusField(val: SerializedData): UpdateCollaborationByIdRequestBodyStatusField;
export declare function serializeUpdateCollaborationByIdRequestBody(val: UpdateCollaborationByIdRequestBody): SerializedData;
export declare function deserializeUpdateCollaborationByIdRequestBody(val: SerializedData): UpdateCollaborationByIdRequestBody;
export declare function serializeCreateCollaborationRequestBodyItemTypeField(val: CreateCollaborationRequestBodyItemTypeField): SerializedData;
export declare function deserializeCreateCollaborationRequestBodyItemTypeField(val: SerializedData): CreateCollaborationRequestBodyItemTypeField;
export declare function serializeCreateCollaborationRequestBodyItemField(val: CreateCollaborationRequestBodyItemField): SerializedData;
export declare function deserializeCreateCollaborationRequestBodyItemField(val: SerializedData): CreateCollaborationRequestBodyItemField;
export declare function serializeCreateCollaborationRequestBodyAccessibleByTypeField(val: CreateCollaborationRequestBodyAccessibleByTypeField): SerializedData;
export declare function deserializeCreateCollaborationRequestBodyAccessibleByTypeField(val: SerializedData): CreateCollaborationRequestBodyAccessibleByTypeField;
export declare function serializeCreateCollaborationRequestBodyAccessibleByField(val: CreateCollaborationRequestBodyAccessibleByField): SerializedData;
export declare function deserializeCreateCollaborationRequestBodyAccessibleByField(val: SerializedData): CreateCollaborationRequestBodyAccessibleByField;
export declare function serializeCreateCollaborationRequestBodyRoleField(val: CreateCollaborationRequestBodyRoleField): SerializedData;
export declare function deserializeCreateCollaborationRequestBodyRoleField(val: SerializedData): CreateCollaborationRequestBodyRoleField;
export declare function serializeCreateCollaborationRequestBody(val: CreateCollaborationRequestBody): SerializedData;
export declare function deserializeCreateCollaborationRequestBody(val: SerializedData): CreateCollaborationRequestBody;
