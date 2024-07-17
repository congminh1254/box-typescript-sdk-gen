import { MetadataCascadePolicy } from './metadataCascadePolicy.generated.js';
import { SerializedData } from '../serialization/json.js';
export interface MetadataCascadePolicies {
    readonly limit?: number;
    readonly nextMarker?: string;
    readonly prevMarker?: string;
    readonly entries?: readonly MetadataCascadePolicy[];
}
export declare function serializeMetadataCascadePolicies(val: MetadataCascadePolicies): SerializedData;
export declare function deserializeMetadataCascadePolicies(val: SerializedData): MetadataCascadePolicies;
