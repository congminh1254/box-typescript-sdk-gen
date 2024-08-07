import { FileVersionMini } from './fileVersionMini.generated.js';
import { FileMini } from './fileMini.generated.js';
import { LegalHoldPolicyAssignment } from './legalHoldPolicyAssignment.generated.js';
import { DateTime } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export type FileVersionLegalHoldTypeField = 'file_version_legal_hold';
export interface FileVersionLegalHold {
    readonly id?: string;
    readonly type?: FileVersionLegalHoldTypeField;
    readonly fileVersion?: FileVersionMini;
    readonly file?: FileMini;
    readonly legalHoldPolicyAssignments?: readonly LegalHoldPolicyAssignment[];
    readonly deletedAt?: DateTime;
}
export declare function serializeFileVersionLegalHoldTypeField(val: FileVersionLegalHoldTypeField): SerializedData;
export declare function deserializeFileVersionLegalHoldTypeField(val: SerializedData): FileVersionLegalHoldTypeField;
export declare function serializeFileVersionLegalHold(val: FileVersionLegalHold): SerializedData;
export declare function deserializeFileVersionLegalHold(val: SerializedData): FileVersionLegalHold;
