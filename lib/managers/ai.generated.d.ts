import { AiResponse } from '../schemas/aiResponse.generated.js';
import { AiAsk } from '../schemas/aiAsk.generated.js';
import { AiTextGen } from '../schemas/aiTextGen.generated.js';
import { AiAgentAskOrAiAgentTextGen } from '../schemas/aiAgentAskOrAiAgentTextGen.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { CancellationToken } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export declare class CreateAiAskOptionals {
    readonly headers: CreateAiAskHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<CreateAiAskOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<CreateAiAskOptionals, 'headers' | 'cancellationToken'>>);
}
export interface CreateAiAskOptionalsInput {
    readonly headers?: CreateAiAskHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class CreateAiTextGenOptionals {
    readonly headers: CreateAiTextGenHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<CreateAiTextGenOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<CreateAiTextGenOptionals, 'headers' | 'cancellationToken'>>);
}
export interface CreateAiTextGenOptionalsInput {
    readonly headers?: CreateAiTextGenHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetAiAgentDefaultConfigOptionals {
    readonly headers: GetAiAgentDefaultConfigHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetAiAgentDefaultConfigOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<GetAiAgentDefaultConfigOptionals, 'headers' | 'cancellationToken'>>);
}
export interface GetAiAgentDefaultConfigOptionalsInput {
    readonly headers?: GetAiAgentDefaultConfigHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class CreateAiAskHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<CreateAiAskHeaders, 'extraHeaders'> & Partial<Pick<CreateAiAskHeaders, 'extraHeaders'>>);
}
export interface CreateAiAskHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class CreateAiTextGenHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<CreateAiTextGenHeaders, 'extraHeaders'> & Partial<Pick<CreateAiTextGenHeaders, 'extraHeaders'>>);
}
export interface CreateAiTextGenHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export type GetAiAgentDefaultConfigQueryParamsModeField = 'ask' | 'text_gen';
export interface GetAiAgentDefaultConfigQueryParams {
    readonly mode: GetAiAgentDefaultConfigQueryParamsModeField;
    readonly language?: string;
    readonly model?: string;
}
export declare class GetAiAgentDefaultConfigHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetAiAgentDefaultConfigHeaders, 'extraHeaders'> & Partial<Pick<GetAiAgentDefaultConfigHeaders, 'extraHeaders'>>);
}
export interface GetAiAgentDefaultConfigHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class AiManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<AiManager, 'networkSession' | 'createAiAsk' | 'createAiTextGen' | 'getAiAgentDefaultConfig'> & Partial<Pick<AiManager, 'networkSession'>>);
    createAiAsk(requestBody: AiAsk, optionalsInput?: CreateAiAskOptionalsInput): Promise<AiResponse>;
    createAiTextGen(requestBody: AiTextGen, optionalsInput?: CreateAiTextGenOptionalsInput): Promise<AiResponse>;
    getAiAgentDefaultConfig(queryParams: GetAiAgentDefaultConfigQueryParams, optionalsInput?: GetAiAgentDefaultConfigOptionalsInput): Promise<AiAgentAskOrAiAgentTextGen>;
}
export interface AiManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
export declare function serializeGetAiAgentDefaultConfigQueryParamsModeField(val: GetAiAgentDefaultConfigQueryParamsModeField): SerializedData;
export declare function deserializeGetAiAgentDefaultConfigQueryParamsModeField(val: SerializedData): GetAiAgentDefaultConfigQueryParamsModeField;
