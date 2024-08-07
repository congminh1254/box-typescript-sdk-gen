import { FileVersionMini } from './fileVersionMini.generated.js';
import { FileMini } from './fileMini.generated.js';
import { RetentionPolicyMini } from './retentionPolicyMini.generated.js';
import { DateTime } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export type FileVersionRetentionTypeField = 'file_version_retention';
export interface FileVersionRetention {
    readonly id?: string;
    readonly type?: FileVersionRetentionTypeField;
    readonly fileVersion?: FileVersionMini;
    readonly file?: FileMini;
    readonly appliedAt?: DateTime;
    readonly dispositionAt?: DateTime;
    readonly winningRetentionPolicy?: RetentionPolicyMini;
}
export declare function serializeFileVersionRetentionTypeField(val: FileVersionRetentionTypeField): SerializedData;
export declare function deserializeFileVersionRetentionTypeField(val: SerializedData): FileVersionRetentionTypeField;
export declare function serializeFileVersionRetention(val: FileVersionRetention): SerializedData;
export declare function deserializeFileVersionRetention(val: SerializedData): FileVersionRetention;
