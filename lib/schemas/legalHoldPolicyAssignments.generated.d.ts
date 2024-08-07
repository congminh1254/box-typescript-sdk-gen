import { LegalHoldPolicyAssignment } from './legalHoldPolicyAssignment.generated.js';
import { SerializedData } from '../serialization/json.js';
export interface LegalHoldPolicyAssignments {
    readonly limit?: number;
    readonly nextMarker?: string;
    readonly prevMarker?: string;
    readonly entries?: readonly LegalHoldPolicyAssignment[];
}
export declare function serializeLegalHoldPolicyAssignments(val: LegalHoldPolicyAssignments): SerializedData;
export declare function deserializeLegalHoldPolicyAssignments(val: SerializedData): LegalHoldPolicyAssignments;
