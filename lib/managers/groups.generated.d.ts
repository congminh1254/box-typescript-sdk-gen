import { Groups } from '../schemas/groups.generated.js';
import { GroupFull } from '../schemas/groupFull.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { CancellationToken } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export declare class CreateGroupOptionals {
    readonly queryParams: CreateGroupQueryParams;
    readonly headers: CreateGroupHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<CreateGroupOptionals, 'queryParams' | 'headers' | 'cancellationToken'> & Partial<Pick<CreateGroupOptionals, 'queryParams' | 'headers' | 'cancellationToken'>>);
}
export interface CreateGroupOptionalsInput {
    readonly queryParams?: CreateGroupQueryParams;
    readonly headers?: CreateGroupHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetGroupByIdOptionals {
    readonly queryParams: GetGroupByIdQueryParams;
    readonly headers: GetGroupByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetGroupByIdOptionals, 'queryParams' | 'headers' | 'cancellationToken'> & Partial<Pick<GetGroupByIdOptionals, 'queryParams' | 'headers' | 'cancellationToken'>>);
}
export interface GetGroupByIdOptionalsInput {
    readonly queryParams?: GetGroupByIdQueryParams;
    readonly headers?: GetGroupByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class UpdateGroupByIdOptionals {
    readonly requestBody: UpdateGroupByIdRequestBody;
    readonly queryParams: UpdateGroupByIdQueryParams;
    readonly headers: UpdateGroupByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<UpdateGroupByIdOptionals, 'requestBody' | 'queryParams' | 'headers' | 'cancellationToken'> & Partial<Pick<UpdateGroupByIdOptionals, 'requestBody' | 'queryParams' | 'headers' | 'cancellationToken'>>);
}
export interface UpdateGroupByIdOptionalsInput {
    readonly requestBody?: UpdateGroupByIdRequestBody;
    readonly queryParams?: UpdateGroupByIdQueryParams;
    readonly headers?: UpdateGroupByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class DeleteGroupByIdOptionals {
    readonly headers: DeleteGroupByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<DeleteGroupByIdOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<DeleteGroupByIdOptionals, 'headers' | 'cancellationToken'>>);
}
export interface DeleteGroupByIdOptionalsInput {
    readonly headers?: DeleteGroupByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export interface GetGroupsQueryParams {
    readonly filterTerm?: string;
    readonly fields?: readonly string[];
    readonly limit?: number;
    readonly offset?: number;
}
export declare class GetGroupsHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetGroupsHeaders, 'extraHeaders'> & Partial<Pick<GetGroupsHeaders, 'extraHeaders'>>);
}
export interface GetGroupsHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export type CreateGroupRequestBodyInvitabilityLevelField = 'admins_only' | 'admins_and_members' | 'all_managed_users';
export type CreateGroupRequestBodyMemberViewabilityLevelField = 'admins_only' | 'admins_and_members' | 'all_managed_users';
export interface CreateGroupRequestBody {
    readonly name: string;
    readonly provenance?: string;
    readonly externalSyncIdentifier?: string;
    readonly description?: string;
    readonly invitabilityLevel?: CreateGroupRequestBodyInvitabilityLevelField;
    readonly memberViewabilityLevel?: CreateGroupRequestBodyMemberViewabilityLevelField;
}
export interface CreateGroupQueryParams {
    readonly fields?: readonly string[];
}
export declare class CreateGroupHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<CreateGroupHeaders, 'extraHeaders'> & Partial<Pick<CreateGroupHeaders, 'extraHeaders'>>);
}
export interface CreateGroupHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export interface GetGroupByIdQueryParams {
    readonly fields?: readonly string[];
}
export declare class GetGroupByIdHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetGroupByIdHeaders, 'extraHeaders'> & Partial<Pick<GetGroupByIdHeaders, 'extraHeaders'>>);
}
export interface GetGroupByIdHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export type UpdateGroupByIdRequestBodyInvitabilityLevelField = 'admins_only' | 'admins_and_members' | 'all_managed_users';
export type UpdateGroupByIdRequestBodyMemberViewabilityLevelField = 'admins_only' | 'admins_and_members' | 'all_managed_users';
export interface UpdateGroupByIdRequestBody {
    readonly name?: string;
    readonly provenance?: string;
    readonly externalSyncIdentifier?: string;
    readonly description?: string;
    readonly invitabilityLevel?: UpdateGroupByIdRequestBodyInvitabilityLevelField;
    readonly memberViewabilityLevel?: UpdateGroupByIdRequestBodyMemberViewabilityLevelField;
}
export interface UpdateGroupByIdQueryParams {
    readonly fields?: readonly string[];
}
export declare class UpdateGroupByIdHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<UpdateGroupByIdHeaders, 'extraHeaders'> & Partial<Pick<UpdateGroupByIdHeaders, 'extraHeaders'>>);
}
export interface UpdateGroupByIdHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class DeleteGroupByIdHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<DeleteGroupByIdHeaders, 'extraHeaders'> & Partial<Pick<DeleteGroupByIdHeaders, 'extraHeaders'>>);
}
export interface DeleteGroupByIdHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class GroupsManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<GroupsManager, 'networkSession' | 'getGroups' | 'createGroup' | 'getGroupById' | 'updateGroupById' | 'deleteGroupById'> & Partial<Pick<GroupsManager, 'networkSession'>>);
    getGroups(queryParams?: GetGroupsQueryParams, headersInput?: GetGroupsHeadersInput, cancellationToken?: CancellationToken): Promise<Groups>;
    createGroup(requestBody: CreateGroupRequestBody, optionalsInput?: CreateGroupOptionalsInput): Promise<GroupFull>;
    getGroupById(groupId: string, optionalsInput?: GetGroupByIdOptionalsInput): Promise<GroupFull>;
    updateGroupById(groupId: string, optionalsInput?: UpdateGroupByIdOptionalsInput): Promise<GroupFull>;
    deleteGroupById(groupId: string, optionalsInput?: DeleteGroupByIdOptionalsInput): Promise<undefined>;
}
export interface GroupsManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
export declare function serializeCreateGroupRequestBodyInvitabilityLevelField(val: CreateGroupRequestBodyInvitabilityLevelField): SerializedData;
export declare function deserializeCreateGroupRequestBodyInvitabilityLevelField(val: SerializedData): CreateGroupRequestBodyInvitabilityLevelField;
export declare function serializeCreateGroupRequestBodyMemberViewabilityLevelField(val: CreateGroupRequestBodyMemberViewabilityLevelField): SerializedData;
export declare function deserializeCreateGroupRequestBodyMemberViewabilityLevelField(val: SerializedData): CreateGroupRequestBodyMemberViewabilityLevelField;
export declare function serializeCreateGroupRequestBody(val: CreateGroupRequestBody): SerializedData;
export declare function deserializeCreateGroupRequestBody(val: SerializedData): CreateGroupRequestBody;
export declare function serializeUpdateGroupByIdRequestBodyInvitabilityLevelField(val: UpdateGroupByIdRequestBodyInvitabilityLevelField): SerializedData;
export declare function deserializeUpdateGroupByIdRequestBodyInvitabilityLevelField(val: SerializedData): UpdateGroupByIdRequestBodyInvitabilityLevelField;
export declare function serializeUpdateGroupByIdRequestBodyMemberViewabilityLevelField(val: UpdateGroupByIdRequestBodyMemberViewabilityLevelField): SerializedData;
export declare function deserializeUpdateGroupByIdRequestBodyMemberViewabilityLevelField(val: SerializedData): UpdateGroupByIdRequestBodyMemberViewabilityLevelField;
export declare function serializeUpdateGroupByIdRequestBody(val: UpdateGroupByIdRequestBody): SerializedData;
export declare function deserializeUpdateGroupByIdRequestBody(val: SerializedData): UpdateGroupByIdRequestBody;
