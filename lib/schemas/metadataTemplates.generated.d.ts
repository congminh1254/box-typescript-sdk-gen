import { MetadataTemplate } from './metadataTemplate.generated.js';
import { SerializedData } from '../serialization/json.js';
export interface MetadataTemplates {
    readonly limit?: number;
    readonly nextMarker?: string;
    readonly prevMarker?: string;
    readonly entries?: readonly MetadataTemplate[];
}
export declare function serializeMetadataTemplates(val: MetadataTemplates): SerializedData;
export declare function deserializeMetadataTemplates(val: SerializedData): MetadataTemplates;
