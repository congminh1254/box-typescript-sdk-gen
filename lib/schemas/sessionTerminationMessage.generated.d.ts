import { SerializedData } from '../serialization/json.js';
export interface SessionTerminationMessage {
    readonly message?: string;
}
export declare function serializeSessionTerminationMessage(val: SessionTerminationMessage): SerializedData;
export declare function deserializeSessionTerminationMessage(val: SerializedData): SessionTerminationMessage;
