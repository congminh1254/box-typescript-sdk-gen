import { AiSingleAgentResponse } from './aiSingleAgentResponse.generated.js';
import { AiStudioAgentAsk } from './aiStudioAgentAsk.generated.js';
import { AiStudioAgentTextGen } from './aiStudioAgentTextGen.generated.js';
import { AiStudioAgentExtract } from './aiStudioAgentExtract.generated.js';
import { SerializedData } from '../serialization/json.js';
export type AiSingleAgentResponseFull = AiSingleAgentResponse & {
    readonly ask?: AiStudioAgentAsk;
    readonly textGen?: AiStudioAgentTextGen;
    readonly extract?: AiStudioAgentExtract;
};
export declare function serializeAiSingleAgentResponseFull(val: AiSingleAgentResponseFull): SerializedData;
export declare function deserializeAiSingleAgentResponseFull(val: SerializedData): AiSingleAgentResponseFull;
//# sourceMappingURL=aiSingleAgentResponseFull.generated.d.ts.map