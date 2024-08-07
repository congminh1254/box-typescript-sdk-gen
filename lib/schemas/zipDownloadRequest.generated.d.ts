import { SerializedData } from '../serialization/json.js';
export type ZipDownloadRequestItemsTypeField = 'file' | 'folder';
export interface ZipDownloadRequestItemsField {
    readonly type: ZipDownloadRequestItemsTypeField;
    readonly id: string;
}
export interface ZipDownloadRequest {
    readonly items: readonly ZipDownloadRequestItemsField[];
    readonly downloadFileName?: string;
}
export declare function serializeZipDownloadRequestItemsTypeField(val: ZipDownloadRequestItemsTypeField): SerializedData;
export declare function deserializeZipDownloadRequestItemsTypeField(val: SerializedData): ZipDownloadRequestItemsTypeField;
export declare function serializeZipDownloadRequestItemsField(val: ZipDownloadRequestItemsField): SerializedData;
export declare function deserializeZipDownloadRequestItemsField(val: SerializedData): ZipDownloadRequestItemsField;
export declare function serializeZipDownloadRequest(val: ZipDownloadRequest): SerializedData;
export declare function deserializeZipDownloadRequest(val: SerializedData): ZipDownloadRequest;
