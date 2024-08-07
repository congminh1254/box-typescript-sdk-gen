import { AiLlmEndpointParamsGoogleOrAiLlmEndpointParamsOpenAi } from './aiLlmEndpointParamsGoogleOrAiLlmEndpointParamsOpenAi.generated.js';
import { SerializedData } from '../serialization/json.js';
export interface AiAgentBasicTextToolTextGen {
    readonly model?: string;
    readonly systemMessage?: string;
    readonly promptTemplate?: string;
    readonly numTokensForCompletion?: number;
    readonly llmEndpointParams?: AiLlmEndpointParamsGoogleOrAiLlmEndpointParamsOpenAi;
}
export declare function serializeAiAgentBasicTextToolTextGen(val: AiAgentBasicTextToolTextGen): SerializedData;
export declare function deserializeAiAgentBasicTextToolTextGen(val: SerializedData): AiAgentBasicTextToolTextGen;
