import { LegalHoldPolicyMini } from './legalHoldPolicyMini.generated.js';
import { UserMini } from './userMini.generated.js';
import { DateTime } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export type LegalHoldPolicyStatusField = 'active' | 'applying' | 'releasing' | 'released';
export interface LegalHoldPolicyAssignmentCountsField {
    readonly user?: number;
    readonly folder?: number;
    readonly file?: number;
    readonly fileVersion?: number;
}
export declare class LegalHoldPolicy extends LegalHoldPolicyMini {
    readonly policyName?: string;
    readonly description?: string;
    readonly status?: LegalHoldPolicyStatusField;
    readonly assignmentCounts?: LegalHoldPolicyAssignmentCountsField;
    readonly createdBy?: UserMini;
    readonly createdAt?: DateTime;
    readonly modifiedAt?: DateTime;
    readonly deletedAt?: DateTime;
    readonly filterStartedAt?: DateTime;
    readonly filterEndedAt?: DateTime;
    readonly releaseNotes?: string;
    constructor(fields: LegalHoldPolicy);
}
export declare function serializeLegalHoldPolicyStatusField(val: LegalHoldPolicyStatusField): SerializedData;
export declare function deserializeLegalHoldPolicyStatusField(val: SerializedData): LegalHoldPolicyStatusField;
export declare function serializeLegalHoldPolicyAssignmentCountsField(val: LegalHoldPolicyAssignmentCountsField): SerializedData;
export declare function deserializeLegalHoldPolicyAssignmentCountsField(val: SerializedData): LegalHoldPolicyAssignmentCountsField;
export declare function serializeLegalHoldPolicy(val: LegalHoldPolicy): SerializedData;
export declare function deserializeLegalHoldPolicy(val: SerializedData): LegalHoldPolicy;
