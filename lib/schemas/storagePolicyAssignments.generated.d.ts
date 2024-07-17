import { StoragePolicyAssignment } from './storagePolicyAssignment.generated.js';
import { SerializedData } from '../serialization/json.js';
export interface StoragePolicyAssignments {
    readonly limit?: number;
    readonly nextMarker?: string;
    readonly prevMarker?: string;
    readonly entries?: readonly StoragePolicyAssignment[];
}
export declare function serializeStoragePolicyAssignments(val: StoragePolicyAssignments): SerializedData;
export declare function deserializeStoragePolicyAssignments(val: SerializedData): StoragePolicyAssignments;
