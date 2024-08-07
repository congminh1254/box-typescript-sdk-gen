import { serializeAiResponse } from '../schemas/aiResponse.generated.js';
import { deserializeAiResponse } from '../schemas/aiResponse.generated.js';
import { serializeClientError } from '../schemas/clientError.generated.js';
import { deserializeClientError } from '../schemas/clientError.generated.js';
import { serializeAiAsk } from '../schemas/aiAsk.generated.js';
import { deserializeAiAsk } from '../schemas/aiAsk.generated.js';
import { serializeAiTextGen } from '../schemas/aiTextGen.generated.js';
import { deserializeAiTextGen } from '../schemas/aiTextGen.generated.js';
import { serializeAiAgentAskOrAiAgentTextGen } from '../schemas/aiAgentAskOrAiAgentTextGen.generated.js';
import { deserializeAiAgentAskOrAiAgentTextGen } from '../schemas/aiAgentAskOrAiAgentTextGen.generated.js';
import { AiResponse } from '../schemas/aiResponse.generated.js';
import { ClientError } from '../schemas/clientError.generated.js';
import { AiAsk } from '../schemas/aiAsk.generated.js';
import { AiTextGen } from '../schemas/aiTextGen.generated.js';
import { AiAgentAskOrAiAgentTextGen } from '../schemas/aiAgentAskOrAiAgentTextGen.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { prepareParams } from '../internal/utils.js';
import { toString } from '../internal/utils.js';
import { ByteStream } from '../internal/utils.js';
import { CancellationToken } from '../internal/utils.js';
import { FetchOptions } from '../networking/fetch.js';
import { FetchResponse } from '../networking/fetch.js';
import { fetch } from '../networking/fetch.js';
import { SerializedData } from '../serialization/json.js';
import { sdToJson } from '../serialization/json.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class CreateAiAskOptionals {
  readonly headers: CreateAiAskHeaders = new CreateAiAskHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<CreateAiAskOptionals, 'headers' | 'cancellationToken'> &
      Partial<Pick<CreateAiAskOptionals, 'headers' | 'cancellationToken'>>
  ) {
    if (fields.headers) {
      this.headers = fields.headers;
    }
    if (fields.cancellationToken) {
      this.cancellationToken = fields.cancellationToken;
    }
  }
}
export interface CreateAiAskOptionalsInput {
  readonly headers?: CreateAiAskHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class CreateAiTextGenOptionals {
  readonly headers: CreateAiTextGenHeaders = new CreateAiTextGenHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<CreateAiTextGenOptionals, 'headers' | 'cancellationToken'> &
      Partial<Pick<CreateAiTextGenOptionals, 'headers' | 'cancellationToken'>>
  ) {
    if (fields.headers) {
      this.headers = fields.headers;
    }
    if (fields.cancellationToken) {
      this.cancellationToken = fields.cancellationToken;
    }
  }
}
export interface CreateAiTextGenOptionalsInput {
  readonly headers?: CreateAiTextGenHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class GetAiAgentDefaultConfigOptionals {
  readonly headers: GetAiAgentDefaultConfigHeaders =
    new GetAiAgentDefaultConfigHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      GetAiAgentDefaultConfigOptionals,
      'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<GetAiAgentDefaultConfigOptionals, 'headers' | 'cancellationToken'>
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
export interface GetAiAgentDefaultConfigOptionalsInput {
  readonly headers?: GetAiAgentDefaultConfigHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class CreateAiAskHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<CreateAiAskHeaders, 'extraHeaders'> &
      Partial<Pick<CreateAiAskHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface CreateAiAskHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export class CreateAiTextGenHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<CreateAiTextGenHeaders, 'extraHeaders'> &
      Partial<Pick<CreateAiTextGenHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface CreateAiTextGenHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export type GetAiAgentDefaultConfigQueryParamsModeField = 'ask' | 'text_gen';
export interface GetAiAgentDefaultConfigQueryParams {
  readonly mode: GetAiAgentDefaultConfigQueryParamsModeField;
  readonly language?: string;
  readonly model?: string;
}
export class GetAiAgentDefaultConfigHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<GetAiAgentDefaultConfigHeaders, 'extraHeaders'> &
      Partial<Pick<GetAiAgentDefaultConfigHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface GetAiAgentDefaultConfigHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export class AiManager {
  readonly auth?: Authentication;
  readonly networkSession: NetworkSession = new NetworkSession({});
  constructor(
    fields: Omit<
      AiManager,
      | 'networkSession'
      | 'createAiAsk'
      | 'createAiTextGen'
      | 'getAiAgentDefaultConfig'
    > &
      Partial<Pick<AiManager, 'networkSession'>>
  ) {
    if (fields.auth) {
      this.auth = fields.auth;
    }
    if (fields.networkSession) {
      this.networkSession = fields.networkSession;
    }
  }
  async createAiAsk(
    requestBody: AiAsk,
    optionalsInput: CreateAiAskOptionalsInput = {}
  ): Promise<AiResponse> {
    const optionals: CreateAiAskOptionals = new CreateAiAskOptionals({
      headers: optionalsInput.headers,
      cancellationToken: optionalsInput.cancellationToken,
    });
    const headers: any = optionals.headers;
    const cancellationToken: any = optionals.cancellationToken;
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/ai/ask') as string,
      {
        method: 'POST',
        headers: headersMap,
        data: serializeAiAsk(requestBody),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeAiResponse(response.data);
  }
  async createAiTextGen(
    requestBody: AiTextGen,
    optionalsInput: CreateAiTextGenOptionalsInput = {}
  ): Promise<AiResponse> {
    const optionals: CreateAiTextGenOptionals = new CreateAiTextGenOptionals({
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
        '/2.0/ai/text_gen'
      ) as string,
      {
        method: 'POST',
        headers: headersMap,
        data: serializeAiTextGen(requestBody),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeAiResponse(response.data);
  }
  async getAiAgentDefaultConfig(
    queryParams: GetAiAgentDefaultConfigQueryParams,
    optionalsInput: GetAiAgentDefaultConfigOptionalsInput = {}
  ): Promise<AiAgentAskOrAiAgentTextGen> {
    const optionals: GetAiAgentDefaultConfigOptionals =
      new GetAiAgentDefaultConfigOptionals({
        headers: optionalsInput.headers,
        cancellationToken: optionalsInput.cancellationToken,
      });
    const headers: any = optionals.headers;
    const cancellationToken: any = optionals.cancellationToken;
    const queryParamsMap: {
      readonly [key: string]: string;
    } = prepareParams({
      ['mode']: toString(queryParams.mode) as string,
      ['language']: toString(queryParams.language) as string,
      ['model']: toString(queryParams.model) as string,
    });
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/2.0/ai_agent_default'
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
    return deserializeAiAgentAskOrAiAgentTextGen(response.data);
  }
}
export interface AiManagerInput {
  readonly auth?: Authentication;
  readonly networkSession?: NetworkSession;
}
export function serializeGetAiAgentDefaultConfigQueryParamsModeField(
  val: GetAiAgentDefaultConfigQueryParamsModeField
): SerializedData {
  return val;
}
export function deserializeGetAiAgentDefaultConfigQueryParamsModeField(
  val: SerializedData
): GetAiAgentDefaultConfigQueryParamsModeField {
  if (val == 'ask') {
    return val;
  }
  if (val == 'text_gen') {
    return val;
  }
  throw new BoxSdkError({
    message: "Can't deserialize GetAiAgentDefaultConfigQueryParamsModeField",
  });
}
