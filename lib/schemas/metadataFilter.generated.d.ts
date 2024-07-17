import { MetadataFieldFilterDateRangeOrMetadataFieldFilterFloatRangeOrArrayOfStringOrNumberOrString } from './metadataFieldFilterDateRangeOrMetadataFieldFilterFloatRangeOrArrayOfStringOrNumberOrString.generated.js';
import { SerializedData } from '../serialization/json.js';
export type MetadataFilterScopeField = 'global' | 'enterprise' | 'enterprise_{enterprise_id}';
export interface MetadataFilter {
    readonly scope?: MetadataFilterScopeField;
    readonly templateKey?: string;
    readonly filters?: {
        readonly [key: string]: MetadataFieldFilterDateRangeOrMetadataFieldFilterFloatRangeOrArrayOfStringOrNumberOrString;
    };
}
export declare function serializeMetadataFilterScopeField(val: MetadataFilterScopeField): SerializedData;
export declare function deserializeMetadataFilterScopeField(val: SerializedData): MetadataFilterScopeField;
export declare function serializeMetadataFilter(val: MetadataFilter): SerializedData;
export declare function deserializeMetadataFilter(val: SerializedData): MetadataFilter;
