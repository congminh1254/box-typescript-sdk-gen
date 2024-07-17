import { RetentionPolicyAssignment } from './retentionPolicyAssignment.generated.js';
import { SerializedData } from '../serialization/json.js';
export interface RetentionPolicyAssignments {
    readonly entries?: readonly RetentionPolicyAssignment[];
    readonly limit?: number;
    readonly nextMarker?: string;
}
export declare function serializeRetentionPolicyAssignments(val: RetentionPolicyAssignments): SerializedData;
export declare function deserializeRetentionPolicyAssignments(val: SerializedData): RetentionPolicyAssignments;
