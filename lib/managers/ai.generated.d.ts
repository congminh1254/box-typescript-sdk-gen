import { AiResponse } from '../schemas/aiResponse.generated.js';
import { AiAsk } from '../schemas/aiAsk.generated.js';
import { AiTextGen } from '../schemas/aiTextGen.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { CancellationToken } from '../internal/utils.js';
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
export declare class AiManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<AiManager, 'networkSession' | 'createAiAsk' | 'createAiTextGen'> & Partial<Pick<AiManager, 'networkSession'>>);
    createAiAsk(requestBody: AiAsk, optionalsInput?: CreateAiAskOptionalsInput): Promise<AiResponse>;
    createAiTextGen(requestBody: AiTextGen, optionalsInput?: CreateAiTextGenOptionalsInput): Promise<AiResponse>;
}
export interface AiManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
