import { DateTime } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export interface MetadataFieldFilterDateRange {
    readonly lt?: DateTime;
    readonly gt?: DateTime;
}
export declare function serializeMetadataFieldFilterDateRange(val: MetadataFieldFilterDateRange): SerializedData;
export declare function deserializeMetadataFieldFilterDateRange(val: SerializedData): MetadataFieldFilterDateRange;
