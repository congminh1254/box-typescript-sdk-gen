import { AiAgentBasicGenTool } from './aiAgentBasicGenTool.generated.js';
import { SerializedData } from '../serialization/json.js';
export type AiAgentTextGenTypeField = 'ai_agent_text_gen';
export interface AiAgentTextGen {
    readonly type?: AiAgentTextGenTypeField;
    readonly basicGen?: AiAgentBasicGenTool;
}
export declare function serializeAiAgentTextGenTypeField(val: AiAgentTextGenTypeField): SerializedData;
export declare function deserializeAiAgentTextGenTypeField(val: SerializedData): AiAgentTextGenTypeField;
export declare function serializeAiAgentTextGen(val: AiAgentTextGen): SerializedData;
export declare function deserializeAiAgentTextGen(val: SerializedData): AiAgentTextGen;
