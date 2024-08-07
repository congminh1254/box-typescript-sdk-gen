import { AiAgentLongTextTool } from './aiAgentLongTextTool.generated.js';
import { SerializedData } from '../serialization/json.js';
export type AiAgentBasicGenTool = AiAgentLongTextTool & {
    readonly contentTemplate?: string;
};
export declare function serializeAiAgentBasicGenTool(val: AiAgentBasicGenTool): SerializedData;
export declare function deserializeAiAgentBasicGenTool(val: SerializedData): AiAgentBasicGenTool;
