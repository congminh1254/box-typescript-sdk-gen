import { serializeUsers } from '../schemas/users.generated.js';
import { deserializeUsers } from '../schemas/users.generated.js';
import { serializeClientError } from '../schemas/clientError.generated.js';
import { deserializeClientError } from '../schemas/clientError.generated.js';
import { serializeUserFull } from '../schemas/userFull.generated.js';
import { deserializeUserFull } from '../schemas/userFull.generated.js';
import { serializeTrackingCode } from '../schemas/trackingCode.generated.js';
import { deserializeTrackingCode } from '../schemas/trackingCode.generated.js';
import { Users } from '../schemas/users.generated.js';
import { ClientError } from '../schemas/clientError.generated.js';
import { UserFull } from '../schemas/userFull.generated.js';
import { TrackingCode } from '../schemas/trackingCode.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { prepareParams } from '../internal/utils.js';
import { toString } from '../internal/utils.js';
import { ByteStream } from '../internal/utils.js';
import { CancellationToken } from '../internal/utils.js';
import { sdToJson } from '../serialization/json.js';
import { FetchOptions } from '../networking/fetch.js';
import { FetchResponse } from '../networking/fetch.js';
import { fetch } from '../networking/fetch.js';
import { SerializedData } from '../serialization/json.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class CreateUserOptionals {
  readonly queryParams: CreateUserQueryParams =
    {} satisfies CreateUserQueryParams;
  readonly headers: CreateUserHeaders = new CreateUserHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      CreateUserOptionals,
      'queryParams' | 'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<
          CreateUserOptionals,
          'queryParams' | 'headers' | 'cancellationToken'
        >
      >
  ) {
    if (fields.queryParams) {
      this.queryParams = fields.queryParams;
    }
    if (fields.headers) {
      this.headers = fields.headers;
    }
    if (fields.cancellationToken) {
      this.cancellationToken = fields.cancellationToken;
    }
  }
}
export interface CreateUserOptionalsInput {
  readonly queryParams?: CreateUserQueryParams;
  readonly headers?: CreateUserHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class GetUserByIdOptionals {
  readonly queryParams: GetUserByIdQueryParams =
    {} satisfies GetUserByIdQueryParams;
  readonly headers: GetUserByIdHeaders = new GetUserByIdHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      GetUserByIdOptionals,
      'queryParams' | 'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<
          GetUserByIdOptionals,
          'queryParams' | 'headers' | 'cancellationToken'
        >
      >
  ) {
    if (fields.queryParams) {
      this.queryParams = fields.queryParams;
    }
    if (fields.headers) {
      this.headers = fields.headers;
    }
    if (fields.cancellationToken) {
      this.cancellationToken = fields.cancellationToken;
    }
  }
}
export interface GetUserByIdOptionalsInput {
  readonly queryParams?: GetUserByIdQueryParams;
  readonly headers?: GetUserByIdHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class UpdateUserByIdOptionals {
  readonly requestBody: UpdateUserByIdRequestBody =
    {} satisfies UpdateUserByIdRequestBody;
  readonly queryParams: UpdateUserByIdQueryParams =
    {} satisfies UpdateUserByIdQueryParams;
  readonly headers: UpdateUserByIdHeaders = new UpdateUserByIdHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      UpdateUserByIdOptionals,
      'requestBody' | 'queryParams' | 'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<
          UpdateUserByIdOptionals,
          'requestBody' | 'queryParams' | 'headers' | 'cancellationToken'
        >
      >
  ) {
    if (fields.requestBody) {
      this.requestBody = fields.requestBody;
    }
    if (fields.queryParams) {
      this.queryParams = fields.queryParams;
    }
    if (fields.headers) {
      this.headers = fields.headers;
    }
    if (fields.cancellationToken) {
      this.cancellationToken = fields.cancellationToken;
    }
  }
}
export interface UpdateUserByIdOptionalsInput {
  readonly requestBody?: UpdateUserByIdRequestBody;
  readonly queryParams?: UpdateUserByIdQueryParams;
  readonly headers?: UpdateUserByIdHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class DeleteUserByIdOptionals {
  readonly queryParams: DeleteUserByIdQueryParams =
    {} satisfies DeleteUserByIdQueryParams;
  readonly headers: DeleteUserByIdHeaders = new DeleteUserByIdHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      DeleteUserByIdOptionals,
      'queryParams' | 'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<
          DeleteUserByIdOptionals,
          'queryParams' | 'headers' | 'cancellationToken'
        >
      >
  ) {
    if (fields.queryParams) {
      this.queryParams = fields.queryParams;
    }
    if (fields.headers) {
      this.headers = fields.headers;
    }
    if (fields.cancellationToken) {
      this.cancellationToken = fields.cancellationToken;
    }
  }
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
export class GetUsersHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<GetUsersHeaders, 'extraHeaders'> &
      Partial<Pick<GetUsersHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface GetUsersHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export type CreateUserRequestBodyRoleField = 'coadmin' | 'user';
export type CreateUserRequestBodyStatusField =
  | 'active'
  | 'inactive'
  | 'cannot_delete_edit'
  | 'cannot_delete_edit_upload';
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
export class CreateUserHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<CreateUserHeaders, 'extraHeaders'> &
      Partial<Pick<CreateUserHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface CreateUserHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export interface GetUserMeQueryParams {
  readonly fields?: readonly string[];
}
export class GetUserMeHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<GetUserMeHeaders, 'extraHeaders'> &
      Partial<Pick<GetUserMeHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface GetUserMeHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export interface GetUserByIdQueryParams {
  readonly fields?: readonly string[];
}
export class GetUserByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<GetUserByIdHeaders, 'extraHeaders'> &
      Partial<Pick<GetUserByIdHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface GetUserByIdHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export type UpdateUserByIdRequestBodyRoleField = 'coadmin' | 'user';
export type UpdateUserByIdRequestBodyStatusField =
  | 'active'
  | 'inactive'
  | 'cannot_delete_edit'
  | 'cannot_delete_edit_upload';
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
export class UpdateUserByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<UpdateUserByIdHeaders, 'extraHeaders'> &
      Partial<Pick<UpdateUserByIdHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface UpdateUserByIdHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export interface DeleteUserByIdQueryParams {
  readonly notify?: boolean;
  readonly force?: boolean;
}
export class DeleteUserByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<DeleteUserByIdHeaders, 'extraHeaders'> &
      Partial<Pick<DeleteUserByIdHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface DeleteUserByIdHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export class UsersManager {
  readonly auth?: Authentication;
  readonly networkSession: NetworkSession = new NetworkSession({});
  constructor(
    fields: Omit<
      UsersManager,
      | 'networkSession'
      | 'getUsers'
      | 'createUser'
      | 'getUserMe'
      | 'getUserById'
      | 'updateUserById'
      | 'deleteUserById'
    > &
      Partial<Pick<UsersManager, 'networkSession'>>
  ) {
    if (fields.auth) {
      this.auth = fields.auth;
    }
    if (fields.networkSession) {
      this.networkSession = fields.networkSession;
    }
  }
  async getUsers(
    queryParams: GetUsersQueryParams = {} satisfies GetUsersQueryParams,
    headersInput: GetUsersHeadersInput = new GetUsersHeaders({}),
    cancellationToken?: CancellationToken
  ): Promise<Users> {
    const headers: GetUsersHeaders = new GetUsersHeaders({
      extraHeaders: headersInput.extraHeaders,
    });
    const queryParamsMap: {
      readonly [key: string]: string;
    } = prepareParams({
      ['filter_term']: toString(queryParams.filterTerm) as string,
      ['user_type']: toString(queryParams.userType) as string,
      ['external_app_user_id']: toString(
        queryParams.externalAppUserId
      ) as string,
      ['fields']: queryParams.fields
        ? queryParams.fields.map(toString).join(',')
        : undefined,
      ['offset']: toString(queryParams.offset) as string,
      ['limit']: toString(queryParams.limit) as string,
      ['usemarker']: toString(queryParams.usemarker) as string,
      ['marker']: toString(queryParams.marker) as string,
    });
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/users') as string,
      {
        method: 'GET',
        params: queryParamsMap,
        headers: headersMap,
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeUsers(response.data);
  }
  async createUser(
    requestBody: CreateUserRequestBody,
    optionalsInput: CreateUserOptionalsInput = {}
  ): Promise<UserFull> {
    const optionals: CreateUserOptionals = new CreateUserOptionals({
      queryParams: optionalsInput.queryParams,
      headers: optionalsInput.headers,
      cancellationToken: optionalsInput.cancellationToken,
    });
    const queryParams: any = optionals.queryParams;
    const headers: any = optionals.headers;
    const cancellationToken: any = optionals.cancellationToken;
    const queryParamsMap: {
      readonly [key: string]: string;
    } = prepareParams({
      ['fields']: queryParams.fields
        ? queryParams.fields.map(toString).join(',')
        : undefined,
    });
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/users') as string,
      {
        method: 'POST',
        params: queryParamsMap,
        headers: headersMap,
        data: serializeCreateUserRequestBody(requestBody),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeUserFull(response.data);
  }
  async getUserMe(
    queryParams: GetUserMeQueryParams = {} satisfies GetUserMeQueryParams,
    headersInput: GetUserMeHeadersInput = new GetUserMeHeaders({}),
    cancellationToken?: CancellationToken
  ): Promise<UserFull> {
    const headers: GetUserMeHeaders = new GetUserMeHeaders({
      extraHeaders: headersInput.extraHeaders,
    });
    const queryParamsMap: {
      readonly [key: string]: string;
    } = prepareParams({
      ['fields']: queryParams.fields
        ? queryParams.fields.map(toString).join(',')
        : undefined,
    });
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/2.0/users/me'
      ) as string,
      {
        method: 'GET',
        params: queryParamsMap,
        headers: headersMap,
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeUserFull(response.data);
  }
  async getUserById(
    userId: string,
    optionalsInput: GetUserByIdOptionalsInput = {}
  ): Promise<UserFull> {
    const optionals: GetUserByIdOptionals = new GetUserByIdOptionals({
      queryParams: optionalsInput.queryParams,
      headers: optionalsInput.headers,
      cancellationToken: optionalsInput.cancellationToken,
    });
    const queryParams: any = optionals.queryParams;
    const headers: any = optionals.headers;
    const cancellationToken: any = optionals.cancellationToken;
    const queryParamsMap: {
      readonly [key: string]: string;
    } = prepareParams({
      ['fields']: queryParams.fields
        ? queryParams.fields.map(toString).join(',')
        : undefined,
    });
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/2.0/users/',
        toString(userId) as string
      ) as string,
      {
        method: 'GET',
        params: queryParamsMap,
        headers: headersMap,
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeUserFull(response.data);
  }
  async updateUserById(
    userId: string,
    optionalsInput: UpdateUserByIdOptionalsInput = {}
  ): Promise<UserFull> {
    const optionals: UpdateUserByIdOptionals = new UpdateUserByIdOptionals({
      requestBody: optionalsInput.requestBody,
      queryParams: optionalsInput.queryParams,
      headers: optionalsInput.headers,
      cancellationToken: optionalsInput.cancellationToken,
    });
    const requestBody: any = optionals.requestBody;
    const queryParams: any = optionals.queryParams;
    const headers: any = optionals.headers;
    const cancellationToken: any = optionals.cancellationToken;
    const queryParamsMap: {
      readonly [key: string]: string;
    } = prepareParams({
      ['fields']: queryParams.fields
        ? queryParams.fields.map(toString).join(',')
        : undefined,
    });
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/2.0/users/',
        toString(userId) as string
      ) as string,
      {
        method: 'PUT',
        params: queryParamsMap,
        headers: headersMap,
        data: serializeUpdateUserByIdRequestBody(requestBody),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeUserFull(response.data);
  }
  async deleteUserById(
    userId: string,
    optionalsInput: DeleteUserByIdOptionalsInput = {}
  ): Promise<undefined> {
    const optionals: DeleteUserByIdOptionals = new DeleteUserByIdOptionals({
      queryParams: optionalsInput.queryParams,
      headers: optionalsInput.headers,
      cancellationToken: optionalsInput.cancellationToken,
    });
    const queryParams: any = optionals.queryParams;
    const headers: any = optionals.headers;
    const cancellationToken: any = optionals.cancellationToken;
    const queryParamsMap: {
      readonly [key: string]: string;
    } = prepareParams({
      ['notify']: toString(queryParams.notify) as string,
      ['force']: toString(queryParams.force) as string,
    });
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/2.0/users/',
        toString(userId) as string
      ) as string,
      {
        method: 'DELETE',
        params: queryParamsMap,
        headers: headersMap,
        responseFormat: void 0,
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return void 0;
  }
}
export interface UsersManagerInput {
  readonly auth?: Authentication;
  readonly networkSession?: NetworkSession;
}
export function serializeGetUsersQueryParamsUserTypeField(
  val: GetUsersQueryParamsUserTypeField
): SerializedData {
  return val;
}
export function deserializeGetUsersQueryParamsUserTypeField(
  val: SerializedData
): GetUsersQueryParamsUserTypeField {
  if (val == 'all') {
    return val;
  }
  if (val == 'managed') {
    return val;
  }
  if (val == 'external') {
    return val;
  }
  throw new BoxSdkError({
    message: "Can't deserialize GetUsersQueryParamsUserTypeField",
  });
}
export function serializeCreateUserRequestBodyRoleField(
  val: CreateUserRequestBodyRoleField
): SerializedData {
  return val;
}
export function deserializeCreateUserRequestBodyRoleField(
  val: SerializedData
): CreateUserRequestBodyRoleField {
  if (val == 'coadmin') {
    return val;
  }
  if (val == 'user') {
    return val;
  }
  throw new BoxSdkError({
    message: "Can't deserialize CreateUserRequestBodyRoleField",
  });
}
export function serializeCreateUserRequestBodyStatusField(
  val: CreateUserRequestBodyStatusField
): SerializedData {
  return val;
}
export function deserializeCreateUserRequestBodyStatusField(
  val: SerializedData
): CreateUserRequestBodyStatusField {
  if (val == 'active') {
    return val;
  }
  if (val == 'inactive') {
    return val;
  }
  if (val == 'cannot_delete_edit') {
    return val;
  }
  if (val == 'cannot_delete_edit_upload') {
    return val;
  }
  throw new BoxSdkError({
    message: "Can't deserialize CreateUserRequestBodyStatusField",
  });
}
export function serializeCreateUserRequestBody(
  val: CreateUserRequestBody
): SerializedData {
  return {
    ['name']: val.name,
    ['login']: val.login == void 0 ? void 0 : val.login,
    ['is_platform_access_only']:
      val.isPlatformAccessOnly == void 0 ? void 0 : val.isPlatformAccessOnly,
    ['role']:
      val.role == void 0
        ? void 0
        : serializeCreateUserRequestBodyRoleField(val.role),
    ['language']: val.language == void 0 ? void 0 : val.language,
    ['is_sync_enabled']:
      val.isSyncEnabled == void 0 ? void 0 : val.isSyncEnabled,
    ['job_title']: val.jobTitle == void 0 ? void 0 : val.jobTitle,
    ['phone']: val.phone == void 0 ? void 0 : val.phone,
    ['address']: val.address == void 0 ? void 0 : val.address,
    ['space_amount']: val.spaceAmount == void 0 ? void 0 : val.spaceAmount,
    ['tracking_codes']:
      val.trackingCodes == void 0
        ? void 0
        : (val.trackingCodes.map(function (item: TrackingCode): SerializedData {
            return serializeTrackingCode(item);
          }) as readonly any[]),
    ['can_see_managed_users']:
      val.canSeeManagedUsers == void 0 ? void 0 : val.canSeeManagedUsers,
    ['timezone']: val.timezone == void 0 ? void 0 : val.timezone,
    ['is_external_collab_restricted']:
      val.isExternalCollabRestricted == void 0
        ? void 0
        : val.isExternalCollabRestricted,
    ['is_exempt_from_device_limits']:
      val.isExemptFromDeviceLimits == void 0
        ? void 0
        : val.isExemptFromDeviceLimits,
    ['is_exempt_from_login_verification']:
      val.isExemptFromLoginVerification == void 0
        ? void 0
        : val.isExemptFromLoginVerification,
    ['status']:
      val.status == void 0
        ? void 0
        : serializeCreateUserRequestBodyStatusField(val.status),
    ['external_app_user_id']:
      val.externalAppUserId == void 0 ? void 0 : val.externalAppUserId,
  };
}
export function deserializeCreateUserRequestBody(
  val: SerializedData
): CreateUserRequestBody {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "CreateUserRequestBody"',
    });
  }
  if (val.name == void 0) {
    throw new BoxSdkError({
      message: 'Expecting "name" of type "CreateUserRequestBody" to be defined',
    });
  }
  if (!sdIsString(val.name)) {
    throw new BoxSdkError({
      message: 'Expecting string for "name" of type "CreateUserRequestBody"',
    });
  }
  const name: string = val.name;
  if (!(val.login == void 0) && !sdIsString(val.login)) {
    throw new BoxSdkError({
      message: 'Expecting string for "login" of type "CreateUserRequestBody"',
    });
  }
  const login: undefined | string = val.login == void 0 ? void 0 : val.login;
  if (
    !(val.is_platform_access_only == void 0) &&
    !sdIsBoolean(val.is_platform_access_only)
  ) {
    throw new BoxSdkError({
      message:
        'Expecting boolean for "is_platform_access_only" of type "CreateUserRequestBody"',
    });
  }
  const isPlatformAccessOnly: undefined | boolean =
    val.is_platform_access_only == void 0
      ? void 0
      : val.is_platform_access_only;
  const role: undefined | CreateUserRequestBodyRoleField =
    val.role == void 0
      ? void 0
      : deserializeCreateUserRequestBodyRoleField(val.role);
  if (!(val.language == void 0) && !sdIsString(val.language)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "language" of type "CreateUserRequestBody"',
    });
  }
  const language: undefined | string =
    val.language == void 0 ? void 0 : val.language;
  if (!(val.is_sync_enabled == void 0) && !sdIsBoolean(val.is_sync_enabled)) {
    throw new BoxSdkError({
      message:
        'Expecting boolean for "is_sync_enabled" of type "CreateUserRequestBody"',
    });
  }
  const isSyncEnabled: undefined | boolean =
    val.is_sync_enabled == void 0 ? void 0 : val.is_sync_enabled;
  if (!(val.job_title == void 0) && !sdIsString(val.job_title)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "job_title" of type "CreateUserRequestBody"',
    });
  }
  const jobTitle: undefined | string =
    val.job_title == void 0 ? void 0 : val.job_title;
  if (!(val.phone == void 0) && !sdIsString(val.phone)) {
    throw new BoxSdkError({
      message: 'Expecting string for "phone" of type "CreateUserRequestBody"',
    });
  }
  const phone: undefined | string = val.phone == void 0 ? void 0 : val.phone;
  if (!(val.address == void 0) && !sdIsString(val.address)) {
    throw new BoxSdkError({
      message: 'Expecting string for "address" of type "CreateUserRequestBody"',
    });
  }
  const address: undefined | string =
    val.address == void 0 ? void 0 : val.address;
  if (!(val.space_amount == void 0) && !sdIsNumber(val.space_amount)) {
    throw new BoxSdkError({
      message:
        'Expecting number for "space_amount" of type "CreateUserRequestBody"',
    });
  }
  const spaceAmount: undefined | number =
    val.space_amount == void 0 ? void 0 : val.space_amount;
  if (!(val.tracking_codes == void 0) && !sdIsList(val.tracking_codes)) {
    throw new BoxSdkError({
      message:
        'Expecting array for "tracking_codes" of type "CreateUserRequestBody"',
    });
  }
  const trackingCodes: undefined | readonly TrackingCode[] =
    val.tracking_codes == void 0
      ? void 0
      : sdIsList(val.tracking_codes)
      ? (val.tracking_codes.map(function (itm: SerializedData): TrackingCode {
          return deserializeTrackingCode(itm);
        }) as readonly any[])
      : [];
  if (
    !(val.can_see_managed_users == void 0) &&
    !sdIsBoolean(val.can_see_managed_users)
  ) {
    throw new BoxSdkError({
      message:
        'Expecting boolean for "can_see_managed_users" of type "CreateUserRequestBody"',
    });
  }
  const canSeeManagedUsers: undefined | boolean =
    val.can_see_managed_users == void 0 ? void 0 : val.can_see_managed_users;
  if (!(val.timezone == void 0) && !sdIsString(val.timezone)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "timezone" of type "CreateUserRequestBody"',
    });
  }
  const timezone: undefined | string =
    val.timezone == void 0 ? void 0 : val.timezone;
  if (
    !(val.is_external_collab_restricted == void 0) &&
    !sdIsBoolean(val.is_external_collab_restricted)
  ) {
    throw new BoxSdkError({
      message:
        'Expecting boolean for "is_external_collab_restricted" of type "CreateUserRequestBody"',
    });
  }
  const isExternalCollabRestricted: undefined | boolean =
    val.is_external_collab_restricted == void 0
      ? void 0
      : val.is_external_collab_restricted;
  if (
    !(val.is_exempt_from_device_limits == void 0) &&
    !sdIsBoolean(val.is_exempt_from_device_limits)
  ) {
    throw new BoxSdkError({
      message:
        'Expecting boolean for "is_exempt_from_device_limits" of type "CreateUserRequestBody"',
    });
  }
  const isExemptFromDeviceLimits: undefined | boolean =
    val.is_exempt_from_device_limits == void 0
      ? void 0
      : val.is_exempt_from_device_limits;
  if (
    !(val.is_exempt_from_login_verification == void 0) &&
    !sdIsBoolean(val.is_exempt_from_login_verification)
  ) {
    throw new BoxSdkError({
      message:
        'Expecting boolean for "is_exempt_from_login_verification" of type "CreateUserRequestBody"',
    });
  }
  const isExemptFromLoginVerification: undefined | boolean =
    val.is_exempt_from_login_verification == void 0
      ? void 0
      : val.is_exempt_from_login_verification;
  const status: undefined | CreateUserRequestBodyStatusField =
    val.status == void 0
      ? void 0
      : deserializeCreateUserRequestBodyStatusField(val.status);
  if (
    !(val.external_app_user_id == void 0) &&
    !sdIsString(val.external_app_user_id)
  ) {
    throw new BoxSdkError({
      message:
        'Expecting string for "external_app_user_id" of type "CreateUserRequestBody"',
    });
  }
  const externalAppUserId: undefined | string =
    val.external_app_user_id == void 0 ? void 0 : val.external_app_user_id;
  return {
    name: name,
    login: login,
    isPlatformAccessOnly: isPlatformAccessOnly,
    role: role,
    language: language,
    isSyncEnabled: isSyncEnabled,
    jobTitle: jobTitle,
    phone: phone,
    address: address,
    spaceAmount: spaceAmount,
    trackingCodes: trackingCodes,
    canSeeManagedUsers: canSeeManagedUsers,
    timezone: timezone,
    isExternalCollabRestricted: isExternalCollabRestricted,
    isExemptFromDeviceLimits: isExemptFromDeviceLimits,
    isExemptFromLoginVerification: isExemptFromLoginVerification,
    status: status,
    externalAppUserId: externalAppUserId,
  } satisfies CreateUserRequestBody;
}
export function serializeUpdateUserByIdRequestBodyRoleField(
  val: UpdateUserByIdRequestBodyRoleField
): SerializedData {
  return val;
}
export function deserializeUpdateUserByIdRequestBodyRoleField(
  val: SerializedData
): UpdateUserByIdRequestBodyRoleField {
  if (val == 'coadmin') {
    return val;
  }
  if (val == 'user') {
    return val;
  }
  throw new BoxSdkError({
    message: "Can't deserialize UpdateUserByIdRequestBodyRoleField",
  });
}
export function serializeUpdateUserByIdRequestBodyStatusField(
  val: UpdateUserByIdRequestBodyStatusField
): SerializedData {
  return val;
}
export function deserializeUpdateUserByIdRequestBodyStatusField(
  val: SerializedData
): UpdateUserByIdRequestBodyStatusField {
  if (val == 'active') {
    return val;
  }
  if (val == 'inactive') {
    return val;
  }
  if (val == 'cannot_delete_edit') {
    return val;
  }
  if (val == 'cannot_delete_edit_upload') {
    return val;
  }
  throw new BoxSdkError({
    message: "Can't deserialize UpdateUserByIdRequestBodyStatusField",
  });
}
export function serializeUpdateUserByIdRequestBodyNotificationEmailField(
  val: UpdateUserByIdRequestBodyNotificationEmailField
): SerializedData {
  return { ['email']: val.email == void 0 ? void 0 : val.email };
}
export function deserializeUpdateUserByIdRequestBodyNotificationEmailField(
  val: SerializedData
): UpdateUserByIdRequestBodyNotificationEmailField {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a map for "UpdateUserByIdRequestBodyNotificationEmailField"',
    });
  }
  if (!(val.email == void 0) && !sdIsString(val.email)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "email" of type "UpdateUserByIdRequestBodyNotificationEmailField"',
    });
  }
  const email: undefined | string = val.email == void 0 ? void 0 : val.email;
  return {
    email: email,
  } satisfies UpdateUserByIdRequestBodyNotificationEmailField;
}
export function serializeUpdateUserByIdRequestBody(
  val: UpdateUserByIdRequestBody
): SerializedData {
  return {
    ['enterprise']: val.enterprise == void 0 ? void 0 : val.enterprise,
    ['notify']: val.notify == void 0 ? void 0 : val.notify,
    ['name']: val.name == void 0 ? void 0 : val.name,
    ['login']: val.login == void 0 ? void 0 : val.login,
    ['role']:
      val.role == void 0
        ? void 0
        : serializeUpdateUserByIdRequestBodyRoleField(val.role),
    ['language']: val.language == void 0 ? void 0 : val.language,
    ['is_sync_enabled']:
      val.isSyncEnabled == void 0 ? void 0 : val.isSyncEnabled,
    ['job_title']: val.jobTitle == void 0 ? void 0 : val.jobTitle,
    ['phone']: val.phone == void 0 ? void 0 : val.phone,
    ['address']: val.address == void 0 ? void 0 : val.address,
    ['tracking_codes']:
      val.trackingCodes == void 0
        ? void 0
        : (val.trackingCodes.map(function (item: TrackingCode): SerializedData {
            return serializeTrackingCode(item);
          }) as readonly any[]),
    ['can_see_managed_users']:
      val.canSeeManagedUsers == void 0 ? void 0 : val.canSeeManagedUsers,
    ['timezone']: val.timezone == void 0 ? void 0 : val.timezone,
    ['is_external_collab_restricted']:
      val.isExternalCollabRestricted == void 0
        ? void 0
        : val.isExternalCollabRestricted,
    ['is_exempt_from_device_limits']:
      val.isExemptFromDeviceLimits == void 0
        ? void 0
        : val.isExemptFromDeviceLimits,
    ['is_exempt_from_login_verification']:
      val.isExemptFromLoginVerification == void 0
        ? void 0
        : val.isExemptFromLoginVerification,
    ['is_password_reset_required']:
      val.isPasswordResetRequired == void 0
        ? void 0
        : val.isPasswordResetRequired,
    ['status']:
      val.status == void 0
        ? void 0
        : serializeUpdateUserByIdRequestBodyStatusField(val.status),
    ['space_amount']: val.spaceAmount == void 0 ? void 0 : val.spaceAmount,
    ['notification_email']:
      val.notificationEmail == void 0
        ? void 0
        : serializeUpdateUserByIdRequestBodyNotificationEmailField(
            val.notificationEmail
          ),
    ['external_app_user_id']:
      val.externalAppUserId == void 0 ? void 0 : val.externalAppUserId,
  };
}
export function deserializeUpdateUserByIdRequestBody(
  val: SerializedData
): UpdateUserByIdRequestBody {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "UpdateUserByIdRequestBody"',
    });
  }
  if (!(val.enterprise == void 0) && !sdIsString(val.enterprise)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "enterprise" of type "UpdateUserByIdRequestBody"',
    });
  }
  const enterprise: undefined | string =
    val.enterprise == void 0 ? void 0 : val.enterprise;
  if (!(val.notify == void 0) && !sdIsBoolean(val.notify)) {
    throw new BoxSdkError({
      message:
        'Expecting boolean for "notify" of type "UpdateUserByIdRequestBody"',
    });
  }
  const notify: undefined | boolean =
    val.notify == void 0 ? void 0 : val.notify;
  if (!(val.name == void 0) && !sdIsString(val.name)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "name" of type "UpdateUserByIdRequestBody"',
    });
  }
  const name: undefined | string = val.name == void 0 ? void 0 : val.name;
  if (!(val.login == void 0) && !sdIsString(val.login)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "login" of type "UpdateUserByIdRequestBody"',
    });
  }
  const login: undefined | string = val.login == void 0 ? void 0 : val.login;
  const role: undefined | UpdateUserByIdRequestBodyRoleField =
    val.role == void 0
      ? void 0
      : deserializeUpdateUserByIdRequestBodyRoleField(val.role);
  if (!(val.language == void 0) && !sdIsString(val.language)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "language" of type "UpdateUserByIdRequestBody"',
    });
  }
  const language: undefined | string =
    val.language == void 0 ? void 0 : val.language;
  if (!(val.is_sync_enabled == void 0) && !sdIsBoolean(val.is_sync_enabled)) {
    throw new BoxSdkError({
      message:
        'Expecting boolean for "is_sync_enabled" of type "UpdateUserByIdRequestBody"',
    });
  }
  const isSyncEnabled: undefined | boolean =
    val.is_sync_enabled == void 0 ? void 0 : val.is_sync_enabled;
  if (!(val.job_title == void 0) && !sdIsString(val.job_title)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "job_title" of type "UpdateUserByIdRequestBody"',
    });
  }
  const jobTitle: undefined | string =
    val.job_title == void 0 ? void 0 : val.job_title;
  if (!(val.phone == void 0) && !sdIsString(val.phone)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "phone" of type "UpdateUserByIdRequestBody"',
    });
  }
  const phone: undefined | string = val.phone == void 0 ? void 0 : val.phone;
  if (!(val.address == void 0) && !sdIsString(val.address)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "address" of type "UpdateUserByIdRequestBody"',
    });
  }
  const address: undefined | string =
    val.address == void 0 ? void 0 : val.address;
  if (!(val.tracking_codes == void 0) && !sdIsList(val.tracking_codes)) {
    throw new BoxSdkError({
      message:
        'Expecting array for "tracking_codes" of type "UpdateUserByIdRequestBody"',
    });
  }
  const trackingCodes: undefined | readonly TrackingCode[] =
    val.tracking_codes == void 0
      ? void 0
      : sdIsList(val.tracking_codes)
      ? (val.tracking_codes.map(function (itm: SerializedData): TrackingCode {
          return deserializeTrackingCode(itm);
        }) as readonly any[])
      : [];
  if (
    !(val.can_see_managed_users == void 0) &&
    !sdIsBoolean(val.can_see_managed_users)
  ) {
    throw new BoxSdkError({
      message:
        'Expecting boolean for "can_see_managed_users" of type "UpdateUserByIdRequestBody"',
    });
  }
  const canSeeManagedUsers: undefined | boolean =
    val.can_see_managed_users == void 0 ? void 0 : val.can_see_managed_users;
  if (!(val.timezone == void 0) && !sdIsString(val.timezone)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "timezone" of type "UpdateUserByIdRequestBody"',
    });
  }
  const timezone: undefined | string =
    val.timezone == void 0 ? void 0 : val.timezone;
  if (
    !(val.is_external_collab_restricted == void 0) &&
    !sdIsBoolean(val.is_external_collab_restricted)
  ) {
    throw new BoxSdkError({
      message:
        'Expecting boolean for "is_external_collab_restricted" of type "UpdateUserByIdRequestBody"',
    });
  }
  const isExternalCollabRestricted: undefined | boolean =
    val.is_external_collab_restricted == void 0
      ? void 0
      : val.is_external_collab_restricted;
  if (
    !(val.is_exempt_from_device_limits == void 0) &&
    !sdIsBoolean(val.is_exempt_from_device_limits)
  ) {
    throw new BoxSdkError({
      message:
        'Expecting boolean for "is_exempt_from_device_limits" of type "UpdateUserByIdRequestBody"',
    });
  }
  const isExemptFromDeviceLimits: undefined | boolean =
    val.is_exempt_from_device_limits == void 0
      ? void 0
      : val.is_exempt_from_device_limits;
  if (
    !(val.is_exempt_from_login_verification == void 0) &&
    !sdIsBoolean(val.is_exempt_from_login_verification)
  ) {
    throw new BoxSdkError({
      message:
        'Expecting boolean for "is_exempt_from_login_verification" of type "UpdateUserByIdRequestBody"',
    });
  }
  const isExemptFromLoginVerification: undefined | boolean =
    val.is_exempt_from_login_verification == void 0
      ? void 0
      : val.is_exempt_from_login_verification;
  if (
    !(val.is_password_reset_required == void 0) &&
    !sdIsBoolean(val.is_password_reset_required)
  ) {
    throw new BoxSdkError({
      message:
        'Expecting boolean for "is_password_reset_required" of type "UpdateUserByIdRequestBody"',
    });
  }
  const isPasswordResetRequired: undefined | boolean =
    val.is_password_reset_required == void 0
      ? void 0
      : val.is_password_reset_required;
  const status: undefined | UpdateUserByIdRequestBodyStatusField =
    val.status == void 0
      ? void 0
      : deserializeUpdateUserByIdRequestBodyStatusField(val.status);
  if (!(val.space_amount == void 0) && !sdIsNumber(val.space_amount)) {
    throw new BoxSdkError({
      message:
        'Expecting number for "space_amount" of type "UpdateUserByIdRequestBody"',
    });
  }
  const spaceAmount: undefined | number =
    val.space_amount == void 0 ? void 0 : val.space_amount;
  const notificationEmail:
    | undefined
    | UpdateUserByIdRequestBodyNotificationEmailField =
    val.notification_email == void 0
      ? void 0
      : deserializeUpdateUserByIdRequestBodyNotificationEmailField(
          val.notification_email
        );
  if (
    !(val.external_app_user_id == void 0) &&
    !sdIsString(val.external_app_user_id)
  ) {
    throw new BoxSdkError({
      message:
        'Expecting string for "external_app_user_id" of type "UpdateUserByIdRequestBody"',
    });
  }
  const externalAppUserId: undefined | string =
    val.external_app_user_id == void 0 ? void 0 : val.external_app_user_id;
  return {
    enterprise: enterprise,
    notify: notify,
    name: name,
    login: login,
    role: role,
    language: language,
    isSyncEnabled: isSyncEnabled,
    jobTitle: jobTitle,
    phone: phone,
    address: address,
    trackingCodes: trackingCodes,
    canSeeManagedUsers: canSeeManagedUsers,
    timezone: timezone,
    isExternalCollabRestricted: isExternalCollabRestricted,
    isExemptFromDeviceLimits: isExemptFromDeviceLimits,
    isExemptFromLoginVerification: isExemptFromLoginVerification,
    isPasswordResetRequired: isPasswordResetRequired,
    status: status,
    spaceAmount: spaceAmount,
    notificationEmail: notificationEmail,
    externalAppUserId: externalAppUserId,
  } satisfies UpdateUserByIdRequestBody;
}
