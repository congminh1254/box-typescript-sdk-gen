import { SerializedData } from '../serialization/json.js';
export type LegalHoldPolicyAssignmentBaseTypeField = 'legal_hold_policy_assignment';
export interface LegalHoldPolicyAssignmentBase {
    readonly id?: string;
    readonly type?: LegalHoldPolicyAssignmentBaseTypeField;
}
export declare function serializeLegalHoldPolicyAssignmentBaseTypeField(val: LegalHoldPolicyAssignmentBaseTypeField): SerializedData;
export declare function deserializeLegalHoldPolicyAssignmentBaseTypeField(val: SerializedData): LegalHoldPolicyAssignmentBaseTypeField;
export declare function serializeLegalHoldPolicyAssignmentBase(val: LegalHoldPolicyAssignmentBase): SerializedData;
export declare function deserializeLegalHoldPolicyAssignmentBase(val: SerializedData): LegalHoldPolicyAssignmentBase;
