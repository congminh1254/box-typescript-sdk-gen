import { serializeStoragePolicies } from '../schemas/storagePolicies.generated.js';
import { deserializeStoragePolicies } from '../schemas/storagePolicies.generated.js';
import { serializeClientError } from '../schemas/clientError.generated.js';
import { deserializeClientError } from '../schemas/clientError.generated.js';
import { serializeStoragePolicy } from '../schemas/storagePolicy.generated.js';
import { deserializeStoragePolicy } from '../schemas/storagePolicy.generated.js';
import { StoragePolicies } from '../schemas/storagePolicies.generated.js';
import { ClientError } from '../schemas/clientError.generated.js';
import { StoragePolicy } from '../schemas/storagePolicy.generated.js';
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
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class GetStoragePolicyByIdOptionals {
  readonly headers: GetStoragePolicyByIdHeaders =
    new GetStoragePolicyByIdHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      GetStoragePolicyByIdOptionals,
      'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<GetStoragePolicyByIdOptionals, 'headers' | 'cancellationToken'>
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
export interface GetStoragePolicyByIdOptionalsInput {
  readonly headers?: GetStoragePolicyByIdHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export interface GetStoragePoliciesQueryParams {
  readonly fields?: readonly string[];
  readonly marker?: string;
  readonly limit?: number;
}
export class GetStoragePoliciesHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<GetStoragePoliciesHeaders, 'extraHeaders'> &
      Partial<Pick<GetStoragePoliciesHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface GetStoragePoliciesHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export class GetStoragePolicyByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<GetStoragePolicyByIdHeaders, 'extraHeaders'> &
      Partial<Pick<GetStoragePolicyByIdHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface GetStoragePolicyByIdHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export class StoragePoliciesManager {
  readonly auth?: Authentication;
  readonly networkSession: NetworkSession = new NetworkSession({});
  constructor(
    fields: Omit<
      StoragePoliciesManager,
      'networkSession' | 'getStoragePolicies' | 'getStoragePolicyById'
    > &
      Partial<Pick<StoragePoliciesManager, 'networkSession'>>
  ) {
    if (fields.auth) {
      this.auth = fields.auth;
    }
    if (fields.networkSession) {
      this.networkSession = fields.networkSession;
    }
  }
  async getStoragePolicies(
    queryParams: GetStoragePoliciesQueryParams = {} satisfies GetStoragePoliciesQueryParams,
    headersInput: GetStoragePoliciesHeadersInput = new GetStoragePoliciesHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<StoragePolicies> {
    const headers: GetStoragePoliciesHeaders = new GetStoragePoliciesHeaders({
      extraHeaders: headersInput.extraHeaders,
    });
    const queryParamsMap: {
      readonly [key: string]: string;
    } = prepareParams({
      ['fields']: queryParams.fields
        ? queryParams.fields.map(toString).join(',')
        : undefined,
      ['marker']: toString(queryParams.marker) as string,
      ['limit']: toString(queryParams.limit) as string,
    });
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/2.0/storage_policies'
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
    return deserializeStoragePolicies(response.data);
  }
  async getStoragePolicyById(
    storagePolicyId: string,
    optionalsInput: GetStoragePolicyByIdOptionalsInput = {}
  ): Promise<StoragePolicy> {
    const optionals: GetStoragePolicyByIdOptionals =
      new GetStoragePolicyByIdOptionals({
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
        '/2.0/storage_policies/',
        toString(storagePolicyId) as string
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
    return deserializeStoragePolicy(response.data);
  }
}
export interface StoragePoliciesManagerInput {
  readonly auth?: Authentication;
  readonly networkSession?: NetworkSession;
}
