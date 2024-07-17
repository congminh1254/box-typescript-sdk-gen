import { SerializedData } from '../serialization/json.js';
export interface MetadataFieldFilterFloatRange {
    readonly lt?: number;
    readonly gt?: number;
}
export declare function serializeMetadataFieldFilterFloatRange(val: MetadataFieldFilterFloatRange): SerializedData;
export declare function deserializeMetadataFieldFilterFloatRange(val: SerializedData): MetadataFieldFilterFloatRange;
