import { serializeLegalHoldPolicyAssignments } from '../schemas/legalHoldPolicyAssignments.generated.js';
import { deserializeLegalHoldPolicyAssignments } from '../schemas/legalHoldPolicyAssignments.generated.js';
import { serializeClientError } from '../schemas/clientError.generated.js';
import { deserializeClientError } from '../schemas/clientError.generated.js';
import { serializeLegalHoldPolicyAssignment } from '../schemas/legalHoldPolicyAssignment.generated.js';
import { deserializeLegalHoldPolicyAssignment } from '../schemas/legalHoldPolicyAssignment.generated.js';
import { serializeFilesOnHold } from '../schemas/filesOnHold.generated.js';
import { deserializeFilesOnHold } from '../schemas/filesOnHold.generated.js';
import { LegalHoldPolicyAssignments } from '../schemas/legalHoldPolicyAssignments.generated.js';
import { ClientError } from '../schemas/clientError.generated.js';
import { LegalHoldPolicyAssignment } from '../schemas/legalHoldPolicyAssignment.generated.js';
import { FilesOnHold } from '../schemas/filesOnHold.generated.js';
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
export class GetLegalHoldPolicyAssignmentsOptionals {
  readonly headers: GetLegalHoldPolicyAssignmentsHeaders =
    new GetLegalHoldPolicyAssignmentsHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      GetLegalHoldPolicyAssignmentsOptionals,
      'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<
          GetLegalHoldPolicyAssignmentsOptionals,
          'headers' | 'cancellationToken'
        >
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
export interface GetLegalHoldPolicyAssignmentsOptionalsInput {
  readonly headers?: GetLegalHoldPolicyAssignmentsHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class CreateLegalHoldPolicyAssignmentOptionals {
  readonly headers: CreateLegalHoldPolicyAssignmentHeaders =
    new CreateLegalHoldPolicyAssignmentHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      CreateLegalHoldPolicyAssignmentOptionals,
      'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<
          CreateLegalHoldPolicyAssignmentOptionals,
          'headers' | 'cancellationToken'
        >
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
export interface CreateLegalHoldPolicyAssignmentOptionalsInput {
  readonly headers?: CreateLegalHoldPolicyAssignmentHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class GetLegalHoldPolicyAssignmentByIdOptionals {
  readonly headers: GetLegalHoldPolicyAssignmentByIdHeaders =
    new GetLegalHoldPolicyAssignmentByIdHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      GetLegalHoldPolicyAssignmentByIdOptionals,
      'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<
          GetLegalHoldPolicyAssignmentByIdOptionals,
          'headers' | 'cancellationToken'
        >
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
export interface GetLegalHoldPolicyAssignmentByIdOptionalsInput {
  readonly headers?: GetLegalHoldPolicyAssignmentByIdHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class DeleteLegalHoldPolicyAssignmentByIdOptionals {
  readonly headers: DeleteLegalHoldPolicyAssignmentByIdHeaders =
    new DeleteLegalHoldPolicyAssignmentByIdHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      DeleteLegalHoldPolicyAssignmentByIdOptionals,
      'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<
          DeleteLegalHoldPolicyAssignmentByIdOptionals,
          'headers' | 'cancellationToken'
        >
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
export interface DeleteLegalHoldPolicyAssignmentByIdOptionalsInput {
  readonly headers?: DeleteLegalHoldPolicyAssignmentByIdHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class GetLegalHoldPolicyAssignmentFileOnHoldOptionals {
  readonly queryParams: GetLegalHoldPolicyAssignmentFileOnHoldQueryParams =
    {} satisfies GetLegalHoldPolicyAssignmentFileOnHoldQueryParams;
  readonly headers: GetLegalHoldPolicyAssignmentFileOnHoldHeaders =
    new GetLegalHoldPolicyAssignmentFileOnHoldHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      GetLegalHoldPolicyAssignmentFileOnHoldOptionals,
      'queryParams' | 'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<
          GetLegalHoldPolicyAssignmentFileOnHoldOptionals,
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
export interface GetLegalHoldPolicyAssignmentFileOnHoldOptionalsInput {
  readonly queryParams?: GetLegalHoldPolicyAssignmentFileOnHoldQueryParams;
  readonly headers?: GetLegalHoldPolicyAssignmentFileOnHoldHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export type GetLegalHoldPolicyAssignmentsQueryParamsAssignToTypeField =
  | 'file'
  | 'file_version'
  | 'folder'
  | 'user';
export interface GetLegalHoldPolicyAssignmentsQueryParams {
  readonly policyId: string;
  readonly assignToType?: GetLegalHoldPolicyAssignmentsQueryParamsAssignToTypeField;
  readonly assignToId?: string;
  readonly marker?: string;
  readonly limit?: number;
  readonly fields?: readonly string[];
}
export class GetLegalHoldPolicyAssignmentsHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<GetLegalHoldPolicyAssignmentsHeaders, 'extraHeaders'> &
      Partial<Pick<GetLegalHoldPolicyAssignmentsHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface GetLegalHoldPolicyAssignmentsHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export type CreateLegalHoldPolicyAssignmentRequestBodyAssignToTypeField =
  | 'file'
  | 'file_version'
  | 'folder'
  | 'user';
export interface CreateLegalHoldPolicyAssignmentRequestBodyAssignToField {
  readonly type: CreateLegalHoldPolicyAssignmentRequestBodyAssignToTypeField;
  readonly id: string;
}
export interface CreateLegalHoldPolicyAssignmentRequestBody {
  readonly policyId: string;
  readonly assignTo: CreateLegalHoldPolicyAssignmentRequestBodyAssignToField;
}
export class CreateLegalHoldPolicyAssignmentHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<CreateLegalHoldPolicyAssignmentHeaders, 'extraHeaders'> &
      Partial<Pick<CreateLegalHoldPolicyAssignmentHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface CreateLegalHoldPolicyAssignmentHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export class GetLegalHoldPolicyAssignmentByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<GetLegalHoldPolicyAssignmentByIdHeaders, 'extraHeaders'> &
      Partial<Pick<GetLegalHoldPolicyAssignmentByIdHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface GetLegalHoldPolicyAssignmentByIdHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export class DeleteLegalHoldPolicyAssignmentByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<DeleteLegalHoldPolicyAssignmentByIdHeaders, 'extraHeaders'> &
      Partial<Pick<DeleteLegalHoldPolicyAssignmentByIdHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface DeleteLegalHoldPolicyAssignmentByIdHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export interface GetLegalHoldPolicyAssignmentFileOnHoldQueryParams {
  readonly marker?: string;
  readonly limit?: number;
  readonly fields?: readonly string[];
}
export class GetLegalHoldPolicyAssignmentFileOnHoldHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<
      GetLegalHoldPolicyAssignmentFileOnHoldHeaders,
      'extraHeaders'
    > &
      Partial<
        Pick<GetLegalHoldPolicyAssignmentFileOnHoldHeaders, 'extraHeaders'>
      >
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface GetLegalHoldPolicyAssignmentFileOnHoldHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export class LegalHoldPolicyAssignmentsManager {
  readonly auth?: Authentication;
  readonly networkSession: NetworkSession = new NetworkSession({});
  constructor(
    fields: Omit<
      LegalHoldPolicyAssignmentsManager,
      | 'networkSession'
      | 'getLegalHoldPolicyAssignments'
      | 'createLegalHoldPolicyAssignment'
      | 'getLegalHoldPolicyAssignmentById'
      | 'deleteLegalHoldPolicyAssignmentById'
      | 'getLegalHoldPolicyAssignmentFileOnHold'
    > &
      Partial<Pick<LegalHoldPolicyAssignmentsManager, 'networkSession'>>
  ) {
    if (fields.auth) {
      this.auth = fields.auth;
    }
    if (fields.networkSession) {
      this.networkSession = fields.networkSession;
    }
  }
  async getLegalHoldPolicyAssignments(
    queryParams: GetLegalHoldPolicyAssignmentsQueryParams,
    optionalsInput: GetLegalHoldPolicyAssignmentsOptionalsInput = {}
  ): Promise<LegalHoldPolicyAssignments> {
    const optionals: GetLegalHoldPolicyAssignmentsOptionals =
      new GetLegalHoldPolicyAssignmentsOptionals({
        headers: optionalsInput.headers,
        cancellationToken: optionalsInput.cancellationToken,
      });
    const headers: any = optionals.headers;
    const cancellationToken: any = optionals.cancellationToken;
    const queryParamsMap: {
      readonly [key: string]: string;
    } = prepareParams({
      ['policy_id']: toString(queryParams.policyId) as string,
      ['assign_to_type']: toString(queryParams.assignToType) as string,
      ['assign_to_id']: toString(queryParams.assignToId) as string,
      ['marker']: toString(queryParams.marker) as string,
      ['limit']: toString(queryParams.limit) as string,
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
        '/2.0/legal_hold_policy_assignments'
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
    return deserializeLegalHoldPolicyAssignments(response.data);
  }
  async createLegalHoldPolicyAssignment(
    requestBody: CreateLegalHoldPolicyAssignmentRequestBody,
    optionalsInput: CreateLegalHoldPolicyAssignmentOptionalsInput = {}
  ): Promise<LegalHoldPolicyAssignment> {
    const optionals: CreateLegalHoldPolicyAssignmentOptionals =
      new CreateLegalHoldPolicyAssignmentOptionals({
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
        '/2.0/legal_hold_policy_assignments'
      ) as string,
      {
        method: 'POST',
        headers: headersMap,
        data: serializeCreateLegalHoldPolicyAssignmentRequestBody(requestBody),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeLegalHoldPolicyAssignment(response.data);
  }
  async getLegalHoldPolicyAssignmentById(
    legalHoldPolicyAssignmentId: string,
    optionalsInput: GetLegalHoldPolicyAssignmentByIdOptionalsInput = {}
  ): Promise<LegalHoldPolicyAssignment> {
    const optionals: GetLegalHoldPolicyAssignmentByIdOptionals =
      new GetLegalHoldPolicyAssignmentByIdOptionals({
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
        '/2.0/legal_hold_policy_assignments/',
        toString(legalHoldPolicyAssignmentId) as string
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
    return deserializeLegalHoldPolicyAssignment(response.data);
  }
  async deleteLegalHoldPolicyAssignmentById(
    legalHoldPolicyAssignmentId: string,
    optionalsInput: DeleteLegalHoldPolicyAssignmentByIdOptionalsInput = {}
  ): Promise<undefined> {
    const optionals: DeleteLegalHoldPolicyAssignmentByIdOptionals =
      new DeleteLegalHoldPolicyAssignmentByIdOptionals({
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
        '/2.0/legal_hold_policy_assignments/',
        toString(legalHoldPolicyAssignmentId) as string
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
  async getLegalHoldPolicyAssignmentFileOnHold(
    legalHoldPolicyAssignmentId: string,
    optionalsInput: GetLegalHoldPolicyAssignmentFileOnHoldOptionalsInput = {}
  ): Promise<FilesOnHold> {
    const optionals: GetLegalHoldPolicyAssignmentFileOnHoldOptionals =
      new GetLegalHoldPolicyAssignmentFileOnHoldOptionals({
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
      ['marker']: toString(queryParams.marker) as string,
      ['limit']: toString(queryParams.limit) as string,
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
        '/2.0/legal_hold_policy_assignments/',
        toString(legalHoldPolicyAssignmentId) as string,
        '/files_on_hold'
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
    return deserializeFilesOnHold(response.data);
  }
}
export interface LegalHoldPolicyAssignmentsManagerInput {
  readonly auth?: Authentication;
  readonly networkSession?: NetworkSession;
}
export function serializeGetLegalHoldPolicyAssignmentsQueryParamsAssignToTypeField(
  val: GetLegalHoldPolicyAssignmentsQueryParamsAssignToTypeField
): SerializedData {
  return val;
}
export function deserializeGetLegalHoldPolicyAssignmentsQueryParamsAssignToTypeField(
  val: SerializedData
): GetLegalHoldPolicyAssignmentsQueryParamsAssignToTypeField {
  if (val == 'file') {
    return val;
  }
  if (val == 'file_version') {
    return val;
  }
  if (val == 'folder') {
    return val;
  }
  if (val == 'user') {
    return val;
  }
  throw new BoxSdkError({
    message:
      "Can't deserialize GetLegalHoldPolicyAssignmentsQueryParamsAssignToTypeField",
  });
}
export function serializeCreateLegalHoldPolicyAssignmentRequestBodyAssignToTypeField(
  val: CreateLegalHoldPolicyAssignmentRequestBodyAssignToTypeField
): SerializedData {
  return val;
}
export function deserializeCreateLegalHoldPolicyAssignmentRequestBodyAssignToTypeField(
  val: SerializedData
): CreateLegalHoldPolicyAssignmentRequestBodyAssignToTypeField {
  if (val == 'file') {
    return val;
  }
  if (val == 'file_version') {
    return val;
  }
  if (val == 'folder') {
    return val;
  }
  if (val == 'user') {
    return val;
  }
  throw new BoxSdkError({
    message:
      "Can't deserialize CreateLegalHoldPolicyAssignmentRequestBodyAssignToTypeField",
  });
}
export function serializeCreateLegalHoldPolicyAssignmentRequestBodyAssignToField(
  val: CreateLegalHoldPolicyAssignmentRequestBodyAssignToField
): SerializedData {
  return {
    ['type']:
      serializeCreateLegalHoldPolicyAssignmentRequestBodyAssignToTypeField(
        val.type
      ),
    ['id']: val.id,
  };
}
export function deserializeCreateLegalHoldPolicyAssignmentRequestBodyAssignToField(
  val: SerializedData
): CreateLegalHoldPolicyAssignmentRequestBodyAssignToField {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a map for "CreateLegalHoldPolicyAssignmentRequestBodyAssignToField"',
    });
  }
  if (val.type == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "type" of type "CreateLegalHoldPolicyAssignmentRequestBodyAssignToField" to be defined',
    });
  }
  const type: CreateLegalHoldPolicyAssignmentRequestBodyAssignToTypeField =
    deserializeCreateLegalHoldPolicyAssignmentRequestBodyAssignToTypeField(
      val.type
    );
  if (val.id == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "id" of type "CreateLegalHoldPolicyAssignmentRequestBodyAssignToField" to be defined',
    });
  }
  if (!sdIsString(val.id)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "id" of type "CreateLegalHoldPolicyAssignmentRequestBodyAssignToField"',
    });
  }
  const id: string = val.id;
  return {
    type: type,
    id: id,
  } satisfies CreateLegalHoldPolicyAssignmentRequestBodyAssignToField;
}
export function serializeCreateLegalHoldPolicyAssignmentRequestBody(
  val: CreateLegalHoldPolicyAssignmentRequestBody
): SerializedData {
  return {
    ['policy_id']: val.policyId,
    ['assign_to']:
      serializeCreateLegalHoldPolicyAssignmentRequestBodyAssignToField(
        val.assignTo
      ),
  };
}
export function deserializeCreateLegalHoldPolicyAssignmentRequestBody(
  val: SerializedData
): CreateLegalHoldPolicyAssignmentRequestBody {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a map for "CreateLegalHoldPolicyAssignmentRequestBody"',
    });
  }
  if (val.policy_id == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "policy_id" of type "CreateLegalHoldPolicyAssignmentRequestBody" to be defined',
    });
  }
  if (!sdIsString(val.policy_id)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "policy_id" of type "CreateLegalHoldPolicyAssignmentRequestBody"',
    });
  }
  const policyId: string = val.policy_id;
  if (val.assign_to == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "assign_to" of type "CreateLegalHoldPolicyAssignmentRequestBody" to be defined',
    });
  }
  const assignTo: CreateLegalHoldPolicyAssignmentRequestBodyAssignToField =
    deserializeCreateLegalHoldPolicyAssignmentRequestBodyAssignToField(
      val.assign_to
    );
  return {
    policyId: policyId,
    assignTo: assignTo,
  } satisfies CreateLegalHoldPolicyAssignmentRequestBody;
}
