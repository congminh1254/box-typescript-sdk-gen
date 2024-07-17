import { SerializedData } from '../serialization/json.js';
export type ZipDownloadStatusStateField = 'in_progress' | 'failed' | 'succeeded';
export interface ZipDownloadStatus {
    readonly totalFileCount?: number;
    readonly downloadedFileCount?: number;
    readonly skippedFileCount?: number;
    readonly skippedFolderCount?: number;
    readonly state?: ZipDownloadStatusStateField;
}
export declare function serializeZipDownloadStatusStateField(val: ZipDownloadStatusStateField): SerializedData;
export declare function deserializeZipDownloadStatusStateField(val: SerializedData): ZipDownloadStatusStateField;
export declare function serializeZipDownloadStatus(val: ZipDownloadStatus): SerializedData;
export declare function deserializeZipDownloadStatus(val: SerializedData): ZipDownloadStatus;
