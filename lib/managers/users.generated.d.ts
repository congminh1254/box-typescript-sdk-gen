import { Users } from '../schemas/users.generated.js';
import { UserFull } from '../schemas/userFull.generated.js';
import { TrackingCode } from '../schemas/trackingCode.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { CancellationToken } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export declare class CreateUserOptionals {
    readonly queryParams: CreateUserQueryParams;
    readonly headers: CreateUserHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<CreateUserOptionals, 'queryParams' | 'headers' | 'cancellationToken'> & Partial<Pick<CreateUserOptionals, 'queryParams' | 'headers' | 'cancellationToken'>>);
}
export interface CreateUserOptionalsInput {
    readonly queryParams?: CreateUserQueryParams;
    readonly headers?: CreateUserHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetUserByIdOptionals {
    readonly queryParams: GetUserByIdQueryParams;
    readonly headers: GetUserByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetUserByIdOptionals, 'queryParams' | 'headers' | 'cancellationToken'> & Partial<Pick<GetUserByIdOptionals, 'queryParams' | 'headers' | 'cancellationToken'>>);
}
export interface GetUserByIdOptionalsInput {
    readonly queryParams?: GetUserByIdQueryParams;
    readonly headers?: GetUserByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class UpdateUserByIdOptionals {
    readonly requestBody: UpdateUserByIdRequestBody;
    readonly queryParams: UpdateUserByIdQueryParams;
    readonly headers: UpdateUserByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<UpdateUserByIdOptionals, 'requestBody' | 'queryParams' | 'headers' | 'cancellationToken'> & Partial<Pick<UpdateUserByIdOptionals, 'requestBody' | 'queryParams' | 'headers' | 'cancellationToken'>>);
}
export interface UpdateUserByIdOptionalsInput {
    readonly requestBody?: UpdateUserByIdRequestBody;
    readonly queryParams?: UpdateUserByIdQueryParams;
    readonly headers?: UpdateUserByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class DeleteUserByIdOptionals {
    readonly queryParams: DeleteUserByIdQueryParams;
    readonly headers: DeleteUserByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<DeleteUserByIdOptionals, 'queryParams' | 'headers' | 'cancellationToken'> & Partial<Pick<DeleteUserByIdOptionals, 'queryParams' | 'headers' | 'cancellationToken'>>);
}
export interface DeleteUserByIdOptionalsInput {
    readonly queryParams?: DeleteUserByIdQueryParams;
    readonly headers?: DeleteUserByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export type GetUsersQueryParamsUserTypeField = 'all' | 'managed' | 'external';
export interface GetUsersQueryParams {
    readonly filterTerm?: string;
    readonly userType?: GetUsersQueryParamsUserTypeField;
    readonly externalAppUserId?: string;
    readonly fields?: readonly string[];
    readonly offset?: number;
    readonly limit?: number;
    readonly usemarker?: boolean;
    readonly marker?: string;
}
export declare class GetUsersHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetUsersHeaders, 'extraHeaders'> & Partial<Pick<GetUsersHeaders, 'extraHeaders'>>);
}
export interface GetUsersHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export type CreateUserRequestBodyRoleField = 'coadmin' | 'user';
export type CreateUserRequestBodyStatusField = 'active' | 'inactive' | 'cannot_delete_edit' | 'cannot_delete_edit_upload';
export interface CreateUserRequestBody {
    readonly name: string;
    readonly login?: string;
    readonly isPlatformAccessOnly?: boolean;
    readonly role?: CreateUserRequestBodyRoleField;
    readonly language?: string;
    readonly isSyncEnabled?: boolean;
    readonly jobTitle?: string;
    readonly phone?: string;
    readonly address?: string;
    readonly spaceAmount?: number;
    readonly trackingCodes?: readonly TrackingCode[];
    readonly canSeeManagedUsers?: boolean;
    readonly timezone?: string;
    readonly isExternalCollabRestricted?: boolean;
    readonly isExemptFromDeviceLimits?: boolean;
    readonly isExemptFromLoginVerification?: boolean;
    readonly status?: CreateUserRequestBodyStatusField;
    readonly externalAppUserId?: string;
}
export interface CreateUserQueryParams {
    readonly fields?: readonly string[];
}
export declare class CreateUserHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<CreateUserHeaders, 'extraHeaders'> & Partial<Pick<CreateUserHeaders, 'extraHeaders'>>);
}
export interface CreateUserHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export interface GetUserMeQueryParams {
    readonly fields?: readonly string[];
}
export declare class GetUserMeHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetUserMeHeaders, 'extraHeaders'> & Partial<Pick<GetUserMeHeaders, 'extraHeaders'>>);
}
export interface GetUserMeHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export interface GetUserByIdQueryParams {
    readonly fields?: readonly string[];
}
export declare class GetUserByIdHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetUserByIdHeaders, 'extraHeaders'> & Partial<Pick<GetUserByIdHeaders, 'extraHeaders'>>);
}
export interface GetUserByIdHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export type UpdateUserByIdRequestBodyRoleField = 'coadmin' | 'user';
export type UpdateUserByIdRequestBodyStatusField = 'active' | 'inactive' | 'cannot_delete_edit' | 'cannot_delete_edit_upload';
export interface UpdateUserByIdRequestBodyNotificationEmailField {
    readonly email?: string;
}
export interface UpdateUserByIdRequestBody {
    readonly enterprise?: string;
    readonly notify?: boolean;
    readonly name?: string;
    readonly login?: string;
    readonly role?: UpdateUserByIdRequestBodyRoleField;
    readonly language?: string;
    readonly isSyncEnabled?: boolean;
    readonly jobTitle?: string;
    readonly phone?: string;
    readonly address?: string;
    readonly trackingCodes?: readonly TrackingCode[];
    readonly canSeeManagedUsers?: boolean;
    readonly timezone?: string;
    readonly isExternalCollabRestricted?: boolean;
    readonly isExemptFromDeviceLimits?: boolean;
    readonly isExemptFromLoginVerification?: boolean;
    readonly isPasswordResetRequired?: boolean;
    readonly status?: UpdateUserByIdRequestBodyStatusField;
    readonly spaceAmount?: number;
    readonly notificationEmail?: UpdateUserByIdRequestBodyNotificationEmailField;
    readonly externalAppUserId?: string;
}
export interface UpdateUserByIdQueryParams {
    readonly fields?: readonly string[];
}
export declare class UpdateUserByIdHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<UpdateUserByIdHeaders, 'extraHeaders'> & Partial<Pick<UpdateUserByIdHeaders, 'extraHeaders'>>);
}
export interface UpdateUserByIdHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export interface DeleteUserByIdQueryParams {
    readonly notify?: boolean;
    readonly force?: boolean;
}
export declare class DeleteUserByIdHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<DeleteUserByIdHeaders, 'extraHeaders'> & Partial<Pick<DeleteUserByIdHeaders, 'extraHeaders'>>);
}
export interface DeleteUserByIdHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class UsersManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<UsersManager, 'networkSession' | 'getUsers' | 'createUser' | 'getUserMe' | 'getUserById' | 'updateUserById' | 'deleteUserById'> & Partial<Pick<UsersManager, 'networkSession'>>);
    getUsers(queryParams?: GetUsersQueryParams, headersInput?: GetUsersHeadersInput, cancellationToken?: CancellationToken): Promise<Users>;
    createUser(requestBody: CreateUserRequestBody, optionalsInput?: CreateUserOptionalsInput): Promise<UserFull>;
    getUserMe(queryParams?: GetUserMeQueryParams, headersInput?: GetUserMeHeadersInput, cancellationToken?: CancellationToken): Promise<UserFull>;
    getUserById(userId: string, optionalsInput?: GetUserByIdOptionalsInput): Promise<UserFull>;
    updateUserById(userId: string, optionalsInput?: UpdateUserByIdOptionalsInput): Promise<UserFull>;
    deleteUserById(userId: string, optionalsInput?: DeleteUserByIdOptionalsInput): Promise<undefined>;
}
export interface UsersManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
export declare function serializeGetUsersQueryParamsUserTypeField(val: GetUsersQueryParamsUserTypeField): SerializedData;
export declare function deserializeGetUsersQueryParamsUserTypeField(val: SerializedData): GetUsersQueryParamsUserTypeField;
export declare function serializeCreateUserRequestBodyRoleField(val: CreateUserRequestBodyRoleField): SerializedData;
export declare function deserializeCreateUserRequestBodyRoleField(val: SerializedData): CreateUserRequestBodyRoleField;
export declare function serializeCreateUserRequestBodyStatusField(val: CreateUserRequestBodyStatusField): SerializedData;
export declare function deserializeCreateUserRequestBodyStatusField(val: SerializedData): CreateUserRequestBodyStatusField;
export declare function serializeCreateUserRequestBody(val: CreateUserRequestBody): SerializedData;
export declare function deserializeCreateUserRequestBody(val: SerializedData): CreateUserRequestBody;
export declare function serializeUpdateUserByIdRequestBodyRoleField(val: UpdateUserByIdRequestBodyRoleField): SerializedData;
export declare function deserializeUpdateUserByIdRequestBodyRoleField(val: SerializedData): UpdateUserByIdRequestBodyRoleField;
export declare function serializeUpdateUserByIdRequestBodyStatusField(val: UpdateUserByIdRequestBodyStatusField): SerializedData;
export declare function deserializeUpdateUserByIdRequestBodyStatusField(val: SerializedData): UpdateUserByIdRequestBodyStatusField;
export declare function serializeUpdateUserByIdRequestBodyNotificationEmailField(val: UpdateUserByIdRequestBodyNotificationEmailField): SerializedData;
export declare function deserializeUpdateUserByIdRequestBodyNotificationEmailField(val: SerializedData): UpdateUserByIdRequestBodyNotificationEmailField;
export declare function serializeUpdateUserByIdRequestBody(val: UpdateUserByIdRequestBody): SerializedData;
export declare function deserializeUpdateUserByIdRequestBody(val: SerializedData): UpdateUserByIdRequestBody;
