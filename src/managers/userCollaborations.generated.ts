import { serializeCollaboration } from '../schemas/collaboration.generated.js';
import { deserializeCollaboration } from '../schemas/collaboration.generated.js';
import { serializeClientError } from '../schemas/clientError.generated.js';
import { deserializeClientError } from '../schemas/clientError.generated.js';
import { serializeDateTime } from '../internal/utils.js';
import { deserializeDateTime } from '../internal/utils.js';
import { Collaboration } from '../schemas/collaboration.generated.js';
import { ClientError } from '../schemas/clientError.generated.js';
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
import { DateTime } from '../internal/utils.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class GetCollaborationByIdOptionals {
  readonly queryParams: GetCollaborationByIdQueryParams =
    {} satisfies GetCollaborationByIdQueryParams;
  readonly headers: GetCollaborationByIdHeaders =
    new GetCollaborationByIdHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      GetCollaborationByIdOptionals,
      'queryParams' | 'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<
          GetCollaborationByIdOptionals,
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
export interface GetCollaborationByIdOptionalsInput {
  readonly queryParams?: GetCollaborationByIdQueryParams;
  readonly headers?: GetCollaborationByIdHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class UpdateCollaborationByIdOptionals {
  readonly headers: UpdateCollaborationByIdHeaders =
    new UpdateCollaborationByIdHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      UpdateCollaborationByIdOptionals,
      'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<UpdateCollaborationByIdOptionals, 'headers' | 'cancellationToken'>
      >
  ) {
    if (fields.headers) {
      this.headers = fields.headers;
    }
    if (fields.cancellationToken) {
      this.cancellationToken = fields.cancellationToken;
    }
  }
}
export interface UpdateCollaborationByIdOptionalsInput {
  readonly headers?: UpdateCollaborationByIdHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class DeleteCollaborationByIdOptionals {
  readonly headers: DeleteCollaborationByIdHeaders =
    new DeleteCollaborationByIdHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      DeleteCollaborationByIdOptionals,
      'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<DeleteCollaborationByIdOptionals, 'headers' | 'cancellationToken'>
      >
  ) {
    if (fields.headers) {
      this.headers = fields.headers;
    }
    if (fields.cancellationToken) {
      this.cancellationToken = fields.cancellationToken;
    }
  }
}
export interface DeleteCollaborationByIdOptionalsInput {
  readonly headers?: DeleteCollaborationByIdHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class CreateCollaborationOptionals {
  readonly queryParams: CreateCollaborationQueryParams =
    {} satisfies CreateCollaborationQueryParams;
  readonly headers: CreateCollaborationHeaders = new CreateCollaborationHeaders(
    {}
  );
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      CreateCollaborationOptionals,
      'queryParams' | 'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<
          CreateCollaborationOptionals,
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
export interface CreateCollaborationOptionalsInput {
  readonly queryParams?: CreateCollaborationQueryParams;
  readonly headers?: CreateCollaborationHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export interface GetCollaborationByIdQueryParams {
  readonly fields?: readonly string[];
}
export class GetCollaborationByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<GetCollaborationByIdHeaders, 'extraHeaders'> &
      Partial<Pick<GetCollaborationByIdHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface GetCollaborationByIdHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export type UpdateCollaborationByIdRequestBodyRoleField =
  | 'editor'
  | 'viewer'
  | 'previewer'
  | 'uploader'
  | 'previewer uploader'
  | 'viewer uploader'
  | 'co-owner'
  | 'owner';
export type UpdateCollaborationByIdRequestBodyStatusField =
  | 'pending'
  | 'accepted'
  | 'rejected';
export interface UpdateCollaborationByIdRequestBody {
  readonly role: UpdateCollaborationByIdRequestBodyRoleField;
  readonly status?: UpdateCollaborationByIdRequestBodyStatusField;
  readonly expiresAt?: DateTime;
  readonly canViewPath?: boolean;
}
export class UpdateCollaborationByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<UpdateCollaborationByIdHeaders, 'extraHeaders'> &
      Partial<Pick<UpdateCollaborationByIdHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface UpdateCollaborationByIdHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export class DeleteCollaborationByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<DeleteCollaborationByIdHeaders, 'extraHeaders'> &
      Partial<Pick<DeleteCollaborationByIdHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface DeleteCollaborationByIdHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export type CreateCollaborationRequestBodyItemTypeField = 'file' | 'folder';
export interface CreateCollaborationRequestBodyItemField {
  readonly type?: CreateCollaborationRequestBodyItemTypeField;
  readonly id?: string;
}
export type CreateCollaborationRequestBodyAccessibleByTypeField =
  | 'user'
  | 'group';
export interface CreateCollaborationRequestBodyAccessibleByField {
  readonly type: CreateCollaborationRequestBodyAccessibleByTypeField;
  readonly id?: string;
  readonly login?: string;
}
export type CreateCollaborationRequestBodyRoleField =
  | 'editor'
  | 'viewer'
  | 'previewer'
  | 'uploader'
  | 'previewer uploader'
  | 'viewer uploader'
  | 'co-owner';
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
export class CreateCollaborationHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<CreateCollaborationHeaders, 'extraHeaders'> &
      Partial<Pick<CreateCollaborationHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface CreateCollaborationHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export class UserCollaborationsManager {
  readonly auth?: Authentication;
  readonly networkSession: NetworkSession = new NetworkSession({});
  constructor(
    fields: Omit<
      UserCollaborationsManager,
      | 'networkSession'
      | 'getCollaborationById'
      | 'updateCollaborationById'
      | 'deleteCollaborationById'
      | 'createCollaboration'
    > &
      Partial<Pick<UserCollaborationsManager, 'networkSession'>>
  ) {
    if (fields.auth) {
      this.auth = fields.auth;
    }
    if (fields.networkSession) {
      this.networkSession = fields.networkSession;
    }
  }
  async getCollaborationById(
    collaborationId: string,
    optionalsInput: GetCollaborationByIdOptionalsInput = {}
  ): Promise<Collaboration> {
    const optionals: GetCollaborationByIdOptionals =
      new GetCollaborationByIdOptionals({
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
        '/2.0/collaborations/',
        toString(collaborationId) as string
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
    return deserializeCollaboration(response.data);
  }
  async updateCollaborationById(
    collaborationId: string,
    requestBody: UpdateCollaborationByIdRequestBody,
    optionalsInput: UpdateCollaborationByIdOptionalsInput = {}
  ): Promise<Collaboration> {
    const optionals: UpdateCollaborationByIdOptionals =
      new UpdateCollaborationByIdOptionals({
        headers: optionalsInput.headers,
        cancellationToken: optionalsInput.cancellationToken,
      });
    const headers: any = optionals.headers;
    const cancellationToken: any = optionals.cancellationToken;
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/2.0/collaborations/',
        toString(collaborationId) as string
      ) as string,
      {
        method: 'PUT',
        headers: headersMap,
        data: serializeUpdateCollaborationByIdRequestBody(requestBody),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeCollaboration(response.data);
  }
  async deleteCollaborationById(
    collaborationId: string,
    optionalsInput: DeleteCollaborationByIdOptionalsInput = {}
  ): Promise<undefined> {
    const optionals: DeleteCollaborationByIdOptionals =
      new DeleteCollaborationByIdOptionals({
        headers: optionalsInput.headers,
        cancellationToken: optionalsInput.cancellationToken,
      });
    const headers: any = optionals.headers;
    const cancellationToken: any = optionals.cancellationToken;
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/2.0/collaborations/',
        toString(collaborationId) as string
      ) as string,
      {
        method: 'DELETE',
        headers: headersMap,
        responseFormat: void 0,
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return void 0;
  }
  async createCollaboration(
    requestBody: CreateCollaborationRequestBody,
    optionalsInput: CreateCollaborationOptionalsInput = {}
  ): Promise<Collaboration> {
    const optionals: CreateCollaborationOptionals =
      new CreateCollaborationOptionals({
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
      ['notify']: toString(queryParams.notify) as string,
    });
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/2.0/collaborations'
      ) as string,
      {
        method: 'POST',
        params: queryParamsMap,
        headers: headersMap,
        data: serializeCreateCollaborationRequestBody(requestBody),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeCollaboration(response.data);
  }
}
export interface UserCollaborationsManagerInput {
  readonly auth?: Authentication;
  readonly networkSession?: NetworkSession;
}
export function serializeUpdateCollaborationByIdRequestBodyRoleField(
  val: UpdateCollaborationByIdRequestBodyRoleField
): SerializedData {
  return val;
}
export function deserializeUpdateCollaborationByIdRequestBodyRoleField(
  val: SerializedData
): UpdateCollaborationByIdRequestBodyRoleField {
  if (val == 'editor') {
    return val;
  }
  if (val == 'viewer') {
    return val;
  }
  if (val == 'previewer') {
    return val;
  }
  if (val == 'uploader') {
    return val;
  }
  if (val == 'previewer uploader') {
    return val;
  }
  if (val == 'viewer uploader') {
    return val;
  }
  if (val == 'co-owner') {
    return val;
  }
  if (val == 'owner') {
    return val;
  }
  throw new BoxSdkError({
    message: "Can't deserialize UpdateCollaborationByIdRequestBodyRoleField",
  });
}
export function serializeUpdateCollaborationByIdRequestBodyStatusField(
  val: UpdateCollaborationByIdRequestBodyStatusField
): SerializedData {
  return val;
}
export function deserializeUpdateCollaborationByIdRequestBodyStatusField(
  val: SerializedData
): UpdateCollaborationByIdRequestBodyStatusField {
  if (val == 'pending') {
    return val;
  }
  if (val == 'accepted') {
    return val;
  }
  if (val == 'rejected') {
    return val;
  }
  throw new BoxSdkError({
    message: "Can't deserialize UpdateCollaborationByIdRequestBodyStatusField",
  });
}
export function serializeUpdateCollaborationByIdRequestBody(
  val: UpdateCollaborationByIdRequestBody
): SerializedData {
  return {
    ['role']: serializeUpdateCollaborationByIdRequestBodyRoleField(val.role),
    ['status']:
      val.status == void 0
        ? void 0
        : serializeUpdateCollaborationByIdRequestBodyStatusField(val.status),
    ['expires_at']:
      val.expiresAt == void 0 ? void 0 : serializeDateTime(val.expiresAt),
    ['can_view_path']: val.canViewPath == void 0 ? void 0 : val.canViewPath,
  };
}
export function deserializeUpdateCollaborationByIdRequestBody(
  val: SerializedData
): UpdateCollaborationByIdRequestBody {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "UpdateCollaborationByIdRequestBody"',
    });
  }
  if (val.role == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "role" of type "UpdateCollaborationByIdRequestBody" to be defined',
    });
  }
  const role: UpdateCollaborationByIdRequestBodyRoleField =
    deserializeUpdateCollaborationByIdRequestBodyRoleField(val.role);
  const status: undefined | UpdateCollaborationByIdRequestBodyStatusField =
    val.status == void 0
      ? void 0
      : deserializeUpdateCollaborationByIdRequestBodyStatusField(val.status);
  if (!(val.expires_at == void 0) && !sdIsString(val.expires_at)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "expires_at" of type "UpdateCollaborationByIdRequestBody"',
    });
  }
  const expiresAt: undefined | DateTime =
    val.expires_at == void 0 ? void 0 : deserializeDateTime(val.expires_at);
  if (!(val.can_view_path == void 0) && !sdIsBoolean(val.can_view_path)) {
    throw new BoxSdkError({
      message:
        'Expecting boolean for "can_view_path" of type "UpdateCollaborationByIdRequestBody"',
    });
  }
  const canViewPath: undefined | boolean =
    val.can_view_path == void 0 ? void 0 : val.can_view_path;
  return {
    role: role,
    status: status,
    expiresAt: expiresAt,
    canViewPath: canViewPath,
  } satisfies UpdateCollaborationByIdRequestBody;
}
export function serializeCreateCollaborationRequestBodyItemTypeField(
  val: CreateCollaborationRequestBodyItemTypeField
): SerializedData {
  return val;
}
export function deserializeCreateCollaborationRequestBodyItemTypeField(
  val: SerializedData
): CreateCollaborationRequestBodyItemTypeField {
  if (val == 'file') {
    return val;
  }
  if (val == 'folder') {
    return val;
  }
  throw new BoxSdkError({
    message: "Can't deserialize CreateCollaborationRequestBodyItemTypeField",
  });
}
export function serializeCreateCollaborationRequestBodyItemField(
  val: CreateCollaborationRequestBodyItemField
): SerializedData {
  return {
    ['type']:
      val.type == void 0
        ? void 0
        : serializeCreateCollaborationRequestBodyItemTypeField(val.type),
    ['id']: val.id == void 0 ? void 0 : val.id,
  };
}
export function deserializeCreateCollaborationRequestBodyItemField(
  val: SerializedData
): CreateCollaborationRequestBodyItemField {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "CreateCollaborationRequestBodyItemField"',
    });
  }
  const type: undefined | CreateCollaborationRequestBodyItemTypeField =
    val.type == void 0
      ? void 0
      : deserializeCreateCollaborationRequestBodyItemTypeField(val.type);
  if (!(val.id == void 0) && !sdIsString(val.id)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "id" of type "CreateCollaborationRequestBodyItemField"',
    });
  }
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  return {
    type: type,
    id: id,
  } satisfies CreateCollaborationRequestBodyItemField;
}
export function serializeCreateCollaborationRequestBodyAccessibleByTypeField(
  val: CreateCollaborationRequestBodyAccessibleByTypeField
): SerializedData {
  return val;
}
export function deserializeCreateCollaborationRequestBodyAccessibleByTypeField(
  val: SerializedData
): CreateCollaborationRequestBodyAccessibleByTypeField {
  if (val == 'user') {
    return val;
  }
  if (val == 'group') {
    return val;
  }
  throw new BoxSdkError({
    message:
      "Can't deserialize CreateCollaborationRequestBodyAccessibleByTypeField",
  });
}
export function serializeCreateCollaborationRequestBodyAccessibleByField(
  val: CreateCollaborationRequestBodyAccessibleByField
): SerializedData {
  return {
    ['type']: serializeCreateCollaborationRequestBodyAccessibleByTypeField(
      val.type
    ),
    ['id']: val.id == void 0 ? void 0 : val.id,
    ['login']: val.login == void 0 ? void 0 : val.login,
  };
}
export function deserializeCreateCollaborationRequestBodyAccessibleByField(
  val: SerializedData
): CreateCollaborationRequestBodyAccessibleByField {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a map for "CreateCollaborationRequestBodyAccessibleByField"',
    });
  }
  if (val.type == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "type" of type "CreateCollaborationRequestBodyAccessibleByField" to be defined',
    });
  }
  const type: CreateCollaborationRequestBodyAccessibleByTypeField =
    deserializeCreateCollaborationRequestBodyAccessibleByTypeField(val.type);
  if (!(val.id == void 0) && !sdIsString(val.id)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "id" of type "CreateCollaborationRequestBodyAccessibleByField"',
    });
  }
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  if (!(val.login == void 0) && !sdIsString(val.login)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "login" of type "CreateCollaborationRequestBodyAccessibleByField"',
    });
  }
  const login: undefined | string = val.login == void 0 ? void 0 : val.login;
  return {
    type: type,
    id: id,
    login: login,
  } satisfies CreateCollaborationRequestBodyAccessibleByField;
}
export function serializeCreateCollaborationRequestBodyRoleField(
  val: CreateCollaborationRequestBodyRoleField
): SerializedData {
  return val;
}
export function deserializeCreateCollaborationRequestBodyRoleField(
  val: SerializedData
): CreateCollaborationRequestBodyRoleField {
  if (val == 'editor') {
    return val;
  }
  if (val == 'viewer') {
    return val;
  }
  if (val == 'previewer') {
    return val;
  }
  if (val == 'uploader') {
    return val;
  }
  if (val == 'previewer uploader') {
    return val;
  }
  if (val == 'viewer uploader') {
    return val;
  }
  if (val == 'co-owner') {
    return val;
  }
  throw new BoxSdkError({
    message: "Can't deserialize CreateCollaborationRequestBodyRoleField",
  });
}
export function serializeCreateCollaborationRequestBody(
  val: CreateCollaborationRequestBody
): SerializedData {
  return {
    ['item']: serializeCreateCollaborationRequestBodyItemField(val.item),
    ['accessible_by']: serializeCreateCollaborationRequestBodyAccessibleByField(
      val.accessibleBy
    ),
    ['role']: serializeCreateCollaborationRequestBodyRoleField(val.role),
    ['is_access_only']: val.isAccessOnly == void 0 ? void 0 : val.isAccessOnly,
    ['can_view_path']: val.canViewPath == void 0 ? void 0 : val.canViewPath,
    ['expires_at']:
      val.expiresAt == void 0 ? void 0 : serializeDateTime(val.expiresAt),
  };
}
export function deserializeCreateCollaborationRequestBody(
  val: SerializedData
): CreateCollaborationRequestBody {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "CreateCollaborationRequestBody"',
    });
  }
  if (val.item == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "item" of type "CreateCollaborationRequestBody" to be defined',
    });
  }
  const item: CreateCollaborationRequestBodyItemField =
    deserializeCreateCollaborationRequestBodyItemField(val.item);
  if (val.accessible_by == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "accessible_by" of type "CreateCollaborationRequestBody" to be defined',
    });
  }
  const accessibleBy: CreateCollaborationRequestBodyAccessibleByField =
    deserializeCreateCollaborationRequestBodyAccessibleByField(
      val.accessible_by
    );
  if (val.role == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "role" of type "CreateCollaborationRequestBody" to be defined',
    });
  }
  const role: CreateCollaborationRequestBodyRoleField =
    deserializeCreateCollaborationRequestBodyRoleField(val.role);
  if (!(val.is_access_only == void 0) && !sdIsBoolean(val.is_access_only)) {
    throw new BoxSdkError({
      message:
        'Expecting boolean for "is_access_only" of type "CreateCollaborationRequestBody"',
    });
  }
  const isAccessOnly: undefined | boolean =
    val.is_access_only == void 0 ? void 0 : val.is_access_only;
  if (!(val.can_view_path == void 0) && !sdIsBoolean(val.can_view_path)) {
    throw new BoxSdkError({
      message:
        'Expecting boolean for "can_view_path" of type "CreateCollaborationRequestBody"',
    });
  }
  const canViewPath: undefined | boolean =
    val.can_view_path == void 0 ? void 0 : val.can_view_path;
  if (!(val.expires_at == void 0) && !sdIsString(val.expires_at)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "expires_at" of type "CreateCollaborationRequestBody"',
    });
  }
  const expiresAt: undefined | DateTime =
    val.expires_at == void 0 ? void 0 : deserializeDateTime(val.expires_at);
  return {
    item: item,
    accessibleBy: accessibleBy,
    role: role,
    isAccessOnly: isAccessOnly,
    canViewPath: canViewPath,
    expiresAt: expiresAt,
  } satisfies CreateCollaborationRequestBody;
}
