import { AiAgentAsk } from './aiAgentAsk.generated.js';
import { AiAgentTextGen } from './aiAgentTextGen.generated.js';
import { SerializedData } from '../serialization/json.js';
export type AiAgentAskOrAiAgentTextGen = AiAgentAsk | AiAgentTextGen;
export declare function serializeAiAgentAskOrAiAgentTextGen(val: any): SerializedData;
export declare function deserializeAiAgentAskOrAiAgentTextGen(val: SerializedData): AiAgentAskOrAiAgentTextGen;
