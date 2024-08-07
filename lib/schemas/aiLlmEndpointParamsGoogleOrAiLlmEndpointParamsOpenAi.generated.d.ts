import { AiLlmEndpointParamsGoogle } from './aiLlmEndpointParamsGoogle.generated.js';
import { AiLlmEndpointParamsOpenAi } from './aiLlmEndpointParamsOpenAi.generated.js';
import { SerializedData } from '../serialization/json.js';
export type AiLlmEndpointParamsGoogleOrAiLlmEndpointParamsOpenAi = AiLlmEndpointParamsGoogle | AiLlmEndpointParamsOpenAi;
export declare function serializeAiLlmEndpointParamsGoogleOrAiLlmEndpointParamsOpenAi(val: any): SerializedData;
export declare function deserializeAiLlmEndpointParamsGoogleOrAiLlmEndpointParamsOpenAi(val: SerializedData): AiLlmEndpointParamsGoogleOrAiLlmEndpointParamsOpenAi;
