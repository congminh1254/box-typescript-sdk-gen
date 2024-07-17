import { DateTime } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export type ZipDownloadNameConflictsTypeField = 'file' | 'folder';
export interface ZipDownloadNameConflictsField {
    readonly id?: string;
    readonly type?: ZipDownloadNameConflictsTypeField;
    readonly originalName?: string;
    readonly downloadName?: string;
}
export interface ZipDownload {
    readonly downloadUrl?: string;
    readonly statusUrl?: string;
    readonly expiresAt?: DateTime;
    readonly nameConflicts?: readonly (readonly ZipDownloadNameConflictsField[])[];
}
export declare function serializeZipDownloadNameConflictsTypeField(val: ZipDownloadNameConflictsTypeField): SerializedData;
export declare function deserializeZipDownloadNameConflictsTypeField(val: SerializedData): ZipDownloadNameConflictsTypeField;
export declare function serializeZipDownloadNameConflictsField(val: ZipDownloadNameConflictsField): SerializedData;
export declare function deserializeZipDownloadNameConflictsField(val: SerializedData): ZipDownloadNameConflictsField;
export declare function serializeZipDownload(val: ZipDownload): SerializedData;
export declare function deserializeZipDownload(val: SerializedData): ZipDownload;
