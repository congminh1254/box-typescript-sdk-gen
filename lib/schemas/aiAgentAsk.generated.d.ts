import { AiAgentLongTextTool } from './aiAgentLongTextTool.generated.js';
import { AiAgentBasicTextToolAsk } from './aiAgentBasicTextToolAsk.generated.js';
import { SerializedData } from '../serialization/json.js';
export type AiAgentAskTypeField = 'ai_agent_ask';
export interface AiAgentAsk {
    readonly type?: AiAgentAskTypeField;
    readonly longText?: AiAgentLongTextTool;
    readonly basicText?: AiAgentBasicTextToolAsk;
    readonly longTextMulti?: AiAgentLongTextTool;
    readonly basicTextMulti?: AiAgentBasicTextToolAsk;
}
export declare function serializeAiAgentAskTypeField(val: AiAgentAskTypeField): SerializedData;
export declare function deserializeAiAgentAskTypeField(val: SerializedData): AiAgentAskTypeField;
export declare function serializeAiAgentAsk(val: AiAgentAsk): SerializedData;
export declare function deserializeAiAgentAsk(val: SerializedData): AiAgentAsk;
