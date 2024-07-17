import { LegalHoldPolicyAssignmentBase } from './legalHoldPolicyAssignmentBase.generated.js';
import { LegalHoldPolicyMini } from './legalHoldPolicyMini.generated.js';
import { FileOrFolderOrWebLink } from './fileOrFolderOrWebLink.generated.js';
import { UserMini } from './userMini.generated.js';
import { DateTime } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export type LegalHoldPolicyAssignment = LegalHoldPolicyAssignmentBase & {
    readonly legalHoldPolicy?: LegalHoldPolicyMini;
    readonly assignedTo?: FileOrFolderOrWebLink;
    readonly assignedBy?: UserMini;
    readonly assignedAt?: DateTime;
    readonly deletedAt?: DateTime;
};
export declare function serializeLegalHoldPolicyAssignment(val: LegalHoldPolicyAssignment): SerializedData;
export declare function deserializeLegalHoldPolicyAssignment(val: SerializedData): LegalHoldPolicyAssignment;
