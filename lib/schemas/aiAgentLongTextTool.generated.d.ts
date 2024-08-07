import { AiAgentBasicTextToolTextGen } from './aiAgentBasicTextToolTextGen.generated.js';
import { SerializedData } from '../serialization/json.js';
export interface AiAgentLongTextToolEmbeddingsStrategyField {
    readonly id?: string;
    readonly numTokensPerChunk?: number;
}
export interface AiAgentLongTextToolEmbeddingsField {
    readonly model?: string;
    readonly strategy?: AiAgentLongTextToolEmbeddingsStrategyField;
}
export type AiAgentLongTextTool = AiAgentBasicTextToolTextGen & {
    readonly embeddings?: AiAgentLongTextToolEmbeddingsField;
};
export declare function serializeAiAgentLongTextToolEmbeddingsStrategyField(val: AiAgentLongTextToolEmbeddingsStrategyField): SerializedData;
export declare function deserializeAiAgentLongTextToolEmbeddingsStrategyField(val: SerializedData): AiAgentLongTextToolEmbeddingsStrategyField;
export declare function serializeAiAgentLongTextToolEmbeddingsField(val: AiAgentLongTextToolEmbeddingsField): SerializedData;
export declare function deserializeAiAgentLongTextToolEmbeddingsField(val: SerializedData): AiAgentLongTextToolEmbeddingsField;
export declare function serializeAiAgentLongTextTool(val: AiAgentLongTextTool): SerializedData;
export declare function deserializeAiAgentLongTextTool(val: SerializedData): AiAgentLongTextTool;
