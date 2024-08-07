import { SerializedData } from '../serialization/json.js';
export type AiLlmEndpointParamsGoogleTypeField = 'google_params';
export declare class AiLlmEndpointParamsGoogle {
    readonly type: AiLlmEndpointParamsGoogleTypeField;
    readonly temperature?: number;
    readonly topP?: number;
    readonly topK?: number;
    constructor(fields: Omit<AiLlmEndpointParamsGoogle, 'type'> & Partial<Pick<AiLlmEndpointParamsGoogle, 'type'>>);
}
export interface AiLlmEndpointParamsGoogleInput {
    readonly type?: AiLlmEndpointParamsGoogleTypeField;
    readonly temperature?: number;
    readonly topP?: number;
    readonly topK?: number;
}
export declare function serializeAiLlmEndpointParamsGoogleTypeField(val: AiLlmEndpointParamsGoogleTypeField): SerializedData;
export declare function deserializeAiLlmEndpointParamsGoogleTypeField(val: SerializedData): AiLlmEndpointParamsGoogleTypeField;
export declare function serializeAiLlmEndpointParamsGoogle(val: AiLlmEndpointParamsGoogle): SerializedData;
export declare function deserializeAiLlmEndpointParamsGoogle(val: SerializedData): AiLlmEndpointParamsGoogle;
export declare function serializeAiLlmEndpointParamsGoogleInput(val: AiLlmEndpointParamsGoogleInput): SerializedData;
export declare function deserializeAiLlmEndpointParamsGoogleInput(val: SerializedData): AiLlmEndpointParamsGoogleInput;
