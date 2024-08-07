import { RetentionPolicy } from './retentionPolicy.generated.js';
import { SerializedData } from '../serialization/json.js';
export interface RetentionPolicies {
    readonly entries?: readonly RetentionPolicy[];
    readonly limit?: number;
    readonly nextMarker?: string;
}
export declare function serializeRetentionPolicies(val: RetentionPolicies): SerializedData;
export declare function deserializeRetentionPolicies(val: SerializedData): RetentionPolicies;
