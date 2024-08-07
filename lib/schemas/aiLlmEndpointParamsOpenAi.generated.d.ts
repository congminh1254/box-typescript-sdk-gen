import { SerializedData } from '../serialization/json.js';
export type AiLlmEndpointParamsOpenAiTypeField = 'openai_params';
export declare class AiLlmEndpointParamsOpenAi {
    readonly type: AiLlmEndpointParamsOpenAiTypeField;
    readonly temperature?: number;
    readonly topP?: number;
    readonly frequencyPenalty?: number;
    readonly presencePenalty?: number;
    readonly stop?: string;
    constructor(fields: Omit<AiLlmEndpointParamsOpenAi, 'type'> & Partial<Pick<AiLlmEndpointParamsOpenAi, 'type'>>);
}
export interface AiLlmEndpointParamsOpenAiInput {
    readonly type?: AiLlmEndpointParamsOpenAiTypeField;
    readonly temperature?: number;
    readonly topP?: number;
    readonly frequencyPenalty?: number;
    readonly presencePenalty?: number;
    readonly stop?: string;
}
export declare function serializeAiLlmEndpointParamsOpenAiTypeField(val: AiLlmEndpointParamsOpenAiTypeField): SerializedData;
export declare function deserializeAiLlmEndpointParamsOpenAiTypeField(val: SerializedData): AiLlmEndpointParamsOpenAiTypeField;
export declare function serializeAiLlmEndpointParamsOpenAi(val: AiLlmEndpointParamsOpenAi): SerializedData;
export declare function deserializeAiLlmEndpointParamsOpenAi(val: SerializedData): AiLlmEndpointParamsOpenAi;
export declare function serializeAiLlmEndpointParamsOpenAiInput(val: AiLlmEndpointParamsOpenAiInput): SerializedData;
export declare function deserializeAiLlmEndpointParamsOpenAiInput(val: SerializedData): AiLlmEndpointParamsOpenAiInput;
