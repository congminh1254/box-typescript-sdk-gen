import { RealtimeServer } from './realtimeServer.generated.js';
import { SerializedData } from '../serialization/json.js';
export interface RealtimeServers {
    readonly chunkSize?: number;
    readonly entries?: readonly RealtimeServer[];
}
export declare function serializeRealtimeServers(val: RealtimeServers): SerializedData;
export declare function deserializeRealtimeServers(val: SerializedData): RealtimeServers;
