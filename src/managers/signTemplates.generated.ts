import { serializeSignTemplates } from '../schemas/signTemplates.generated.js';
import { deserializeSignTemplates } from '../schemas/signTemplates.generated.js';
import { serializeClientError } from '../schemas/clientError.generated.js';
import { deserializeClientError } from '../schemas/clientError.generated.js';
import { serializeSignTemplate } from '../schemas/signTemplate.generated.js';
import { deserializeSignTemplate } from '../schemas/signTemplate.generated.js';
import { SignTemplates } from '../schemas/signTemplates.generated.js';
import { ClientError } from '../schemas/clientError.generated.js';
import { SignTemplate } from '../schemas/signTemplate.generated.js';
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
export class GetSignTemplateByIdOptionals {
  readonly headers: GetSignTemplateByIdHeaders = new GetSignTemplateByIdHeaders(
    {}
  );
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      GetSignTemplateByIdOptionals,
      'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<GetSignTemplateByIdOptionals, 'headers' | 'cancellationToken'>
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
export interface GetSignTemplateByIdOptionalsInput {
  readonly headers?: GetSignTemplateByIdHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export interface GetSignTemplatesQueryParams {
  readonly marker?: string;
  readonly limit?: number;
}
export class GetSignTemplatesHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<GetSignTemplatesHeaders, 'extraHeaders'> &
      Partial<Pick<GetSignTemplatesHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface GetSignTemplatesHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export class GetSignTemplateByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<GetSignTemplateByIdHeaders, 'extraHeaders'> &
      Partial<Pick<GetSignTemplateByIdHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface GetSignTemplateByIdHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export class SignTemplatesManager {
  readonly auth?: Authentication;
  readonly networkSession: NetworkSession = new NetworkSession({});
  constructor(
    fields: Omit<
      SignTemplatesManager,
      'networkSession' | 'getSignTemplates' | 'getSignTemplateById'
    > &
      Partial<Pick<SignTemplatesManager, 'networkSession'>>
  ) {
    if (fields.auth) {
      this.auth = fields.auth;
    }
    if (fields.networkSession) {
      this.networkSession = fields.networkSession;
    }
  }
  async getSignTemplates(
    queryParams: GetSignTemplatesQueryParams = {} satisfies GetSignTemplatesQueryParams,
    headersInput: GetSignTemplatesHeadersInput = new GetSignTemplatesHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<SignTemplates> {
    const headers: GetSignTemplatesHeaders = new GetSignTemplatesHeaders({
      extraHeaders: headersInput.extraHeaders,
    });
    const queryParamsMap: {
      readonly [key: string]: string;
    } = prepareParams({
      ['marker']: toString(queryParams.marker) as string,
      ['limit']: toString(queryParams.limit) as string,
    });
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/2.0/sign_templates'
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
    return deserializeSignTemplates(response.data);
  }
  async getSignTemplateById(
    templateId: string,
    optionalsInput: GetSignTemplateByIdOptionalsInput = {}
  ): Promise<SignTemplate> {
    const optionals: GetSignTemplateByIdOptionals =
      new GetSignTemplateByIdOptionals({
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
        '/2.0/sign_templates/',
        toString(templateId) as string
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
    return deserializeSignTemplate(response.data);
  }
}
export interface SignTemplatesManagerInput {
  readonly auth?: Authentication;
  readonly networkSession?: NetworkSession;
}
