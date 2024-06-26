import { serializeMetadatas } from '../schemas/metadatas.generated.js';
import { deserializeMetadatas } from '../schemas/metadatas.generated.js';
import { serializeClientError } from '../schemas/clientError.generated.js';
import { deserializeClientError } from '../schemas/clientError.generated.js';
import { serializeMetadataFull } from '../schemas/metadataFull.generated.js';
import { deserializeMetadataFull } from '../schemas/metadataFull.generated.js';
import { Metadatas } from '../schemas/metadatas.generated.js';
import { ClientError } from '../schemas/clientError.generated.js';
import { MetadataFull } from '../schemas/metadataFull.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { prepareParams } from '../internal/utils.js';
import { toString } from '../internal/utils.js';
import { ByteStream } from '../internal/utils.js';
import { CancellationToken } from '../internal/utils.js';
import { FetchOptions } from '../networking/fetch.js';
import { FetchResponse } from '../networking/fetch.js';
import { fetch } from '../networking/fetch.js';
import { sdToJson } from '../serialization/json.js';
import { SerializedData } from '../serialization/json.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class GetFolderMetadataOptionals {
  readonly headers: GetFolderMetadataHeaders = new GetFolderMetadataHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<GetFolderMetadataOptionals, 'headers' | 'cancellationToken'> &
      Partial<Pick<GetFolderMetadataOptionals, 'headers' | 'cancellationToken'>>
  ) {
    if (fields.headers) {
      this.headers = fields.headers;
    }
    if (fields.cancellationToken) {
      this.cancellationToken = fields.cancellationToken;
    }
  }
}
export interface GetFolderMetadataOptionalsInput {
  readonly headers?: GetFolderMetadataHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class GetFolderMetadataByIdOptionals {
  readonly headers: GetFolderMetadataByIdHeaders =
    new GetFolderMetadataByIdHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      GetFolderMetadataByIdOptionals,
      'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<GetFolderMetadataByIdOptionals, 'headers' | 'cancellationToken'>
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
export interface GetFolderMetadataByIdOptionalsInput {
  readonly headers?: GetFolderMetadataByIdHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class CreateFolderMetadataByIdOptionals {
  readonly headers: CreateFolderMetadataByIdHeaders =
    new CreateFolderMetadataByIdHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      CreateFolderMetadataByIdOptionals,
      'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<CreateFolderMetadataByIdOptionals, 'headers' | 'cancellationToken'>
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
export interface CreateFolderMetadataByIdOptionalsInput {
  readonly headers?: CreateFolderMetadataByIdHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class UpdateFolderMetadataByIdOptionals {
  readonly headers: UpdateFolderMetadataByIdHeaders =
    new UpdateFolderMetadataByIdHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      UpdateFolderMetadataByIdOptionals,
      'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<UpdateFolderMetadataByIdOptionals, 'headers' | 'cancellationToken'>
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
export interface UpdateFolderMetadataByIdOptionalsInput {
  readonly headers?: UpdateFolderMetadataByIdHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class DeleteFolderMetadataByIdOptionals {
  readonly headers: DeleteFolderMetadataByIdHeaders =
    new DeleteFolderMetadataByIdHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      DeleteFolderMetadataByIdOptionals,
      'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<DeleteFolderMetadataByIdOptionals, 'headers' | 'cancellationToken'>
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
export interface DeleteFolderMetadataByIdOptionalsInput {
  readonly headers?: DeleteFolderMetadataByIdHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class GetFolderMetadataHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<GetFolderMetadataHeaders, 'extraHeaders'> &
      Partial<Pick<GetFolderMetadataHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface GetFolderMetadataHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export type GetFolderMetadataByIdScope = 'global' | 'enterprise';
export class GetFolderMetadataByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<GetFolderMetadataByIdHeaders, 'extraHeaders'> &
      Partial<Pick<GetFolderMetadataByIdHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface GetFolderMetadataByIdHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export type CreateFolderMetadataByIdScope = 'global' | 'enterprise';
export type CreateFolderMetadataByIdRequestBody = {
  readonly [key: string]: any;
};
export class CreateFolderMetadataByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<CreateFolderMetadataByIdHeaders, 'extraHeaders'> &
      Partial<Pick<CreateFolderMetadataByIdHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface CreateFolderMetadataByIdHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export type UpdateFolderMetadataByIdScope = 'global' | 'enterprise';
export type UpdateFolderMetadataByIdRequestBodyOpField =
  | 'add'
  | 'replace'
  | 'remove'
  | 'test'
  | 'move'
  | 'copy';
export interface UpdateFolderMetadataByIdRequestBody {
  readonly op?: UpdateFolderMetadataByIdRequestBodyOpField;
  readonly path?: string;
  readonly value?: string;
  readonly from?: string;
}
export class UpdateFolderMetadataByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<UpdateFolderMetadataByIdHeaders, 'extraHeaders'> &
      Partial<Pick<UpdateFolderMetadataByIdHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface UpdateFolderMetadataByIdHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export type DeleteFolderMetadataByIdScope = 'global' | 'enterprise';
export class DeleteFolderMetadataByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<DeleteFolderMetadataByIdHeaders, 'extraHeaders'> &
      Partial<Pick<DeleteFolderMetadataByIdHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface DeleteFolderMetadataByIdHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export class FolderMetadataManager {
  readonly auth?: Authentication;
  readonly networkSession: NetworkSession = new NetworkSession({});
  constructor(
    fields: Omit<
      FolderMetadataManager,
      | 'networkSession'
      | 'getFolderMetadata'
      | 'getFolderMetadataById'
      | 'createFolderMetadataById'
      | 'updateFolderMetadataById'
      | 'deleteFolderMetadataById'
    > &
      Partial<Pick<FolderMetadataManager, 'networkSession'>>
  ) {
    if (fields.auth) {
      this.auth = fields.auth;
    }
    if (fields.networkSession) {
      this.networkSession = fields.networkSession;
    }
  }
  async getFolderMetadata(
    folderId: string,
    optionalsInput: GetFolderMetadataOptionalsInput = {}
  ): Promise<Metadatas> {
    const optionals: GetFolderMetadataOptionals =
      new GetFolderMetadataOptionals({
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
        '/2.0/folders/',
        toString(folderId) as string,
        '/metadata'
      ) as string,
      {
        method: 'GET',
        headers: headersMap,
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeMetadatas(response.data);
  }
  async getFolderMetadataById(
    folderId: string,
    scope: GetFolderMetadataByIdScope,
    templateKey: string,
    optionalsInput: GetFolderMetadataByIdOptionalsInput = {}
  ): Promise<MetadataFull> {
    const optionals: GetFolderMetadataByIdOptionals =
      new GetFolderMetadataByIdOptionals({
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
        '/2.0/folders/',
        toString(folderId) as string,
        '/metadata/',
        toString(scope) as string,
        '/',
        toString(templateKey) as string
      ) as string,
      {
        method: 'GET',
        headers: headersMap,
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeMetadataFull(response.data);
  }
  async createFolderMetadataById(
    folderId: string,
    scope: CreateFolderMetadataByIdScope,
    templateKey: string,
    requestBody: CreateFolderMetadataByIdRequestBody,
    optionalsInput: CreateFolderMetadataByIdOptionalsInput = {}
  ): Promise<MetadataFull> {
    const optionals: CreateFolderMetadataByIdOptionals =
      new CreateFolderMetadataByIdOptionals({
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
        '/2.0/folders/',
        toString(folderId) as string,
        '/metadata/',
        toString(scope) as string,
        '/',
        toString(templateKey) as string
      ) as string,
      {
        method: 'POST',
        headers: headersMap,
        data: serializeCreateFolderMetadataByIdRequestBody(requestBody),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeMetadataFull(response.data);
  }
  async updateFolderMetadataById(
    folderId: string,
    scope: UpdateFolderMetadataByIdScope,
    templateKey: string,
    requestBody: readonly UpdateFolderMetadataByIdRequestBody[],
    optionalsInput: UpdateFolderMetadataByIdOptionalsInput = {}
  ): Promise<MetadataFull> {
    const optionals: UpdateFolderMetadataByIdOptionals =
      new UpdateFolderMetadataByIdOptionals({
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
        '/2.0/folders/',
        toString(folderId) as string,
        '/metadata/',
        toString(scope) as string,
        '/',
        toString(templateKey) as string
      ) as string,
      {
        method: 'PUT',
        headers: headersMap,
        data: requestBody.map(
          serializeUpdateFolderMetadataByIdRequestBody
        ) as readonly any[],
        contentType: 'application/json-patch+json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeMetadataFull(response.data);
  }
  async deleteFolderMetadataById(
    folderId: string,
    scope: DeleteFolderMetadataByIdScope,
    templateKey: string,
    optionalsInput: DeleteFolderMetadataByIdOptionalsInput = {}
  ): Promise<undefined> {
    const optionals: DeleteFolderMetadataByIdOptionals =
      new DeleteFolderMetadataByIdOptionals({
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
        '/2.0/folders/',
        toString(folderId) as string,
        '/metadata/',
        toString(scope) as string,
        '/',
        toString(templateKey) as string
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
}
export interface FolderMetadataManagerInput {
  readonly auth?: Authentication;
  readonly networkSession?: NetworkSession;
}
export function serializeGetFolderMetadataByIdScope(
  val: GetFolderMetadataByIdScope
): SerializedData {
  return val;
}
export function deserializeGetFolderMetadataByIdScope(
  val: SerializedData
): GetFolderMetadataByIdScope {
  if (val == 'global') {
    return val;
  }
  if (val == 'enterprise') {
    return val;
  }
  throw new BoxSdkError({
    message: "Can't deserialize GetFolderMetadataByIdScope",
  });
}
export function serializeCreateFolderMetadataByIdScope(
  val: CreateFolderMetadataByIdScope
): SerializedData {
  return val;
}
export function deserializeCreateFolderMetadataByIdScope(
  val: SerializedData
): CreateFolderMetadataByIdScope {
  if (val == 'global') {
    return val;
  }
  if (val == 'enterprise') {
    return val;
  }
  throw new BoxSdkError({
    message: "Can't deserialize CreateFolderMetadataByIdScope",
  });
}
export function serializeCreateFolderMetadataByIdRequestBody(
  val: CreateFolderMetadataByIdRequestBody
): SerializedData {
  return Object.fromEntries(
    Object.entries(val).map(([k, v]: [string, any]) => [
      k,
      (function (v: any): any {
        return v;
      })(v),
    ])
  ) as {
    readonly [key: string]: any;
  };
}
export function deserializeCreateFolderMetadataByIdRequestBody(
  val: SerializedData
): CreateFolderMetadataByIdRequestBody {
  return sdIsMap(val)
    ? (Object.fromEntries(
        Object.entries(val).map(([k, v]: [string, any]) => [
          k,
          (function (v: any): any {
            return v;
          })(v),
        ])
      ) as {
        readonly [key: string]: any;
      })
    : {};
}
export function serializeUpdateFolderMetadataByIdScope(
  val: UpdateFolderMetadataByIdScope
): SerializedData {
  return val;
}
export function deserializeUpdateFolderMetadataByIdScope(
  val: SerializedData
): UpdateFolderMetadataByIdScope {
  if (val == 'global') {
    return val;
  }
  if (val == 'enterprise') {
    return val;
  }
  throw new BoxSdkError({
    message: "Can't deserialize UpdateFolderMetadataByIdScope",
  });
}
export function serializeUpdateFolderMetadataByIdRequestBodyOpField(
  val: UpdateFolderMetadataByIdRequestBodyOpField
): SerializedData {
  return val;
}
export function deserializeUpdateFolderMetadataByIdRequestBodyOpField(
  val: SerializedData
): UpdateFolderMetadataByIdRequestBodyOpField {
  if (val == 'add') {
    return val;
  }
  if (val == 'replace') {
    return val;
  }
  if (val == 'remove') {
    return val;
  }
  if (val == 'test') {
    return val;
  }
  if (val == 'move') {
    return val;
  }
  if (val == 'copy') {
    return val;
  }
  throw new BoxSdkError({
    message: "Can't deserialize UpdateFolderMetadataByIdRequestBodyOpField",
  });
}
export function serializeUpdateFolderMetadataByIdRequestBody(
  val: UpdateFolderMetadataByIdRequestBody
): SerializedData {
  return {
    ['op']:
      val.op == void 0
        ? void 0
        : serializeUpdateFolderMetadataByIdRequestBodyOpField(val.op),
    ['path']: val.path == void 0 ? void 0 : val.path,
    ['value']: val.value == void 0 ? void 0 : val.value,
    ['from']: val.from == void 0 ? void 0 : val.from,
  };
}
export function deserializeUpdateFolderMetadataByIdRequestBody(
  val: SerializedData
): UpdateFolderMetadataByIdRequestBody {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "UpdateFolderMetadataByIdRequestBody"',
    });
  }
  const op: undefined | UpdateFolderMetadataByIdRequestBodyOpField =
    val.op == void 0
      ? void 0
      : deserializeUpdateFolderMetadataByIdRequestBodyOpField(val.op);
  if (!(val.path == void 0) && !sdIsString(val.path)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "path" of type "UpdateFolderMetadataByIdRequestBody"',
    });
  }
  const path: undefined | string = val.path == void 0 ? void 0 : val.path;
  if (!(val.value == void 0) && !sdIsString(val.value)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "value" of type "UpdateFolderMetadataByIdRequestBody"',
    });
  }
  const value: undefined | string = val.value == void 0 ? void 0 : val.value;
  if (!(val.from == void 0) && !sdIsString(val.from)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "from" of type "UpdateFolderMetadataByIdRequestBody"',
    });
  }
  const from: undefined | string = val.from == void 0 ? void 0 : val.from;
  return {
    op: op,
    path: path,
    value: value,
    from: from,
  } satisfies UpdateFolderMetadataByIdRequestBody;
}
export function serializeDeleteFolderMetadataByIdScope(
  val: DeleteFolderMetadataByIdScope
): SerializedData {
  return val;
}
export function deserializeDeleteFolderMetadataByIdScope(
  val: SerializedData
): DeleteFolderMetadataByIdScope {
  if (val == 'global') {
    return val;
  }
  if (val == 'enterprise') {
    return val;
  }
  throw new BoxSdkError({
    message: "Can't deserialize DeleteFolderMetadataByIdScope",
  });
}
