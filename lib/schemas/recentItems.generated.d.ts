import { RecentItem } from './recentItem.generated.js';
import { SerializedData } from '../serialization/json.js';
export interface RecentItems {
    readonly limit?: number;
    readonly nextMarker?: string;
    readonly prevMarker?: string;
    readonly entries?: readonly RecentItem[];
}
export declare function serializeRecentItems(val: RecentItems): SerializedData;
export declare function deserializeRecentItems(val: SerializedData): RecentItems;
