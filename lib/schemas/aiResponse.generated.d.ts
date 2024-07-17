import { DateTime } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export interface AiResponse {
    readonly answer: string;
    readonly createdAt: DateTime;
    readonly completionReason?: string;
}
export declare function serializeAiResponse(val: AiResponse): SerializedData;
export declare function deserializeAiResponse(val: SerializedData): AiResponse;
