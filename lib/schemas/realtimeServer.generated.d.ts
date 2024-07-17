import { SerializedData } from '../serialization/json.js';
export interface RealtimeServer {
    readonly type?: string;
    readonly url?: string;
    readonly ttl?: string;
    readonly maxRetries?: string;
    readonly retryTimeout?: number;
}
export declare function serializeRealtimeServer(val: RealtimeServer): SerializedData;
export declare function deserializeRealtimeServer(val: SerializedData): RealtimeServer;
