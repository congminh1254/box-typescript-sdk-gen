import { GroupMemberships } from '../schemas/groupMemberships.generated.js';
import { GroupMembership } from '../schemas/groupMembership.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { CancellationToken } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export declare class GetUserMembershipsOptionals {
    readonly queryParams: GetUserMembershipsQueryParams;
    readonly headers: GetUserMembershipsHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetUserMembershipsOptionals, 'queryParams' | 'headers' | 'cancellationToken'> & Partial<Pick<GetUserMembershipsOptionals, 'queryParams' | 'headers' | 'cancellationToken'>>);
}
export interface GetUserMembershipsOptionalsInput {
    readonly queryParams?: GetUserMembershipsQueryParams;
    readonly headers?: GetUserMembershipsHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetGroupMembershipsOptionals {
    readonly queryParams: GetGroupMembershipsQueryParams;
    readonly headers: GetGroupMembershipsHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetGroupMembershipsOptionals, 'queryParams' | 'headers' | 'cancellationToken'> & Partial<Pick<GetGroupMembershipsOptionals, 'queryParams' | 'headers' | 'cancellationToken'>>);
}
export interface GetGroupMembershipsOptionalsInput {
    readonly queryParams?: GetGroupMembershipsQueryParams;
    readonly headers?: GetGroupMembershipsHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class CreateGroupMembershipOptionals {
    readonly queryParams: CreateGroupMembershipQueryParams;
    readonly headers: CreateGroupMembershipHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<CreateGroupMembershipOptionals, 'queryParams' | 'headers' | 'cancellationToken'> & Partial<Pick<CreateGroupMembershipOptionals, 'queryParams' | 'headers' | 'cancellationToken'>>);
}
export interface CreateGroupMembershipOptionalsInput {
    readonly queryParams?: CreateGroupMembershipQueryParams;
    readonly headers?: CreateGroupMembershipHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetGroupMembershipByIdOptionals {
    readonly queryParams: GetGroupMembershipByIdQueryParams;
    readonly headers: GetGroupMembershipByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetGroupMembershipByIdOptionals, 'queryParams' | 'headers' | 'cancellationToken'> & Partial<Pick<GetGroupMembershipByIdOptionals, 'queryParams' | 'headers' | 'cancellationToken'>>);
}
export interface GetGroupMembershipByIdOptionalsInput {
    readonly queryParams?: GetGroupMembershipByIdQueryParams;
    readonly headers?: GetGroupMembershipByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class UpdateGroupMembershipByIdOptionals {
    readonly requestBody: UpdateGroupMembershipByIdRequestBody;
    readonly queryParams: UpdateGroupMembershipByIdQueryParams;
    readonly headers: UpdateGroupMembershipByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<UpdateGroupMembershipByIdOptionals, 'requestBody' | 'queryParams' | 'headers' | 'cancellationToken'> & Partial<Pick<UpdateGroupMembershipByIdOptionals, 'requestBody' | 'queryParams' | 'headers' | 'cancellationToken'>>);
}
export interface UpdateGroupMembershipByIdOptionalsInput {
    readonly requestBody?: UpdateGroupMembershipByIdRequestBody;
    readonly queryParams?: UpdateGroupMembershipByIdQueryParams;
    readonly headers?: UpdateGroupMembershipByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class DeleteGroupMembershipByIdOptionals {
    readonly headers: DeleteGroupMembershipByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<DeleteGroupMembershipByIdOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<DeleteGroupMembershipByIdOptionals, 'headers' | 'cancellationToken'>>);
}
export interface DeleteGroupMembershipByIdOptionalsInput {
    readonly headers?: DeleteGroupMembershipByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export interface GetUserMembershipsQueryParams {
    readonly limit?: number;
    readonly offset?: number;
}
export declare class GetUserMembershipsHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetUserMembershipsHeaders, 'extraHeaders'> & Partial<Pick<GetUserMembershipsHeaders, 'extraHeaders'>>);
}
export interface GetUserMembershipsHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export interface GetGroupMembershipsQueryParams {
    readonly limit?: number;
    readonly offset?: number;
}
export declare class GetGroupMembershipsHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetGroupMembershipsHeaders, 'extraHeaders'> & Partial<Pick<GetGroupMembershipsHeaders, 'extraHeaders'>>);
}
export interface GetGroupMembershipsHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export interface CreateGroupMembershipRequestBodyUserField {
    readonly id: string;
}
export interface CreateGroupMembershipRequestBodyGroupField {
    readonly id: string;
}
export type CreateGroupMembershipRequestBodyRoleField = 'member' | 'admin';
export interface CreateGroupMembershipRequestBody {
    readonly user: CreateGroupMembershipRequestBodyUserField;
    readonly group: CreateGroupMembershipRequestBodyGroupField;
    readonly role?: CreateGroupMembershipRequestBodyRoleField;
    readonly configurablePermissions?: {
        readonly [key: string]: boolean;
    };
}
export interface CreateGroupMembershipQueryParams {
    readonly fields?: readonly string[];
}
export declare class CreateGroupMembershipHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<CreateGroupMembershipHeaders, 'extraHeaders'> & Partial<Pick<CreateGroupMembershipHeaders, 'extraHeaders'>>);
}
export interface CreateGroupMembershipHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export interface GetGroupMembershipByIdQueryParams {
    readonly fields?: readonly string[];
}
export declare class GetGroupMembershipByIdHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetGroupMembershipByIdHeaders, 'extraHeaders'> & Partial<Pick<GetGroupMembershipByIdHeaders, 'extraHeaders'>>);
}
export interface GetGroupMembershipByIdHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export type UpdateGroupMembershipByIdRequestBodyRoleField = 'member' | 'admin';
export interface UpdateGroupMembershipByIdRequestBody {
    readonly role?: UpdateGroupMembershipByIdRequestBodyRoleField;
    readonly configurablePermissions?: {
        readonly [key: string]: boolean;
    };
}
export interface UpdateGroupMembershipByIdQueryParams {
    readonly fields?: readonly string[];
}
export declare class UpdateGroupMembershipByIdHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<UpdateGroupMembershipByIdHeaders, 'extraHeaders'> & Partial<Pick<UpdateGroupMembershipByIdHeaders, 'extraHeaders'>>);
}
export interface UpdateGroupMembershipByIdHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class DeleteGroupMembershipByIdHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<DeleteGroupMembershipByIdHeaders, 'extraHeaders'> & Partial<Pick<DeleteGroupMembershipByIdHeaders, 'extraHeaders'>>);
}
export interface DeleteGroupMembershipByIdHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class MembershipsManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<MembershipsManager, 'networkSession' | 'getUserMemberships' | 'getGroupMemberships' | 'createGroupMembership' | 'getGroupMembershipById' | 'updateGroupMembershipById' | 'deleteGroupMembershipById'> & Partial<Pick<MembershipsManager, 'networkSession'>>);
    getUserMemberships(userId: string, optionalsInput?: GetUserMembershipsOptionalsInput): Promise<GroupMemberships>;
    getGroupMemberships(groupId: string, optionalsInput?: GetGroupMembershipsOptionalsInput): Promise<GroupMemberships>;
    createGroupMembership(requestBody: CreateGroupMembershipRequestBody, optionalsInput?: CreateGroupMembershipOptionalsInput): Promise<GroupMembership>;
    getGroupMembershipById(groupMembershipId: string, optionalsInput?: GetGroupMembershipByIdOptionalsInput): Promise<GroupMembership>;
    updateGroupMembershipById(groupMembershipId: string, optionalsInput?: UpdateGroupMembershipByIdOptionalsInput): Promise<GroupMembership>;
    deleteGroupMembershipById(groupMembershipId: string, optionalsInput?: DeleteGroupMembershipByIdOptionalsInput): Promise<undefined>;
}
export interface MembershipsManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
export declare function serializeCreateGroupMembershipRequestBodyUserField(val: CreateGroupMembershipRequestBodyUserField): SerializedData;
export declare function deserializeCreateGroupMembershipRequestBodyUserField(val: SerializedData): CreateGroupMembershipRequestBodyUserField;
export declare function serializeCreateGroupMembershipRequestBodyGroupField(val: CreateGroupMembershipRequestBodyGroupField): SerializedData;
export declare function deserializeCreateGroupMembershipRequestBodyGroupField(val: SerializedData): CreateGroupMembershipRequestBodyGroupField;
export declare function serializeCreateGroupMembershipRequestBodyRoleField(val: CreateGroupMembershipRequestBodyRoleField): SerializedData;
export declare function deserializeCreateGroupMembershipRequestBodyRoleField(val: SerializedData): CreateGroupMembershipRequestBodyRoleField;
export declare function serializeCreateGroupMembershipRequestBody(val: CreateGroupMembershipRequestBody): SerializedData;
export declare function deserializeCreateGroupMembershipRequestBody(val: SerializedData): CreateGroupMembershipRequestBody;
export declare function serializeUpdateGroupMembershipByIdRequestBodyRoleField(val: UpdateGroupMembershipByIdRequestBodyRoleField): SerializedData;
export declare function deserializeUpdateGroupMembershipByIdRequestBodyRoleField(val: SerializedData): UpdateGroupMembershipByIdRequestBodyRoleField;
export declare function serializeUpdateGroupMembershipByIdRequestBody(val: UpdateGroupMembershipByIdRequestBody): SerializedData;
export declare function deserializeUpdateGroupMembershipByIdRequestBody(val: SerializedData): UpdateGroupMembershipByIdRequestBody;
