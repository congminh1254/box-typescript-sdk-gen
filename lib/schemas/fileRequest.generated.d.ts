import { FolderMini } from './folderMini.generated.js';
import { UserMini } from './userMini.generated.js';
import { DateTime } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export type FileRequestTypeField = 'file_request';
export type FileRequestStatusField = 'active' | 'inactive';
export declare class FileRequest {
    readonly id: string;
    readonly type: FileRequestTypeField;
    readonly title?: string;
    readonly description?: string;
    readonly status?: FileRequestStatusField;
    readonly isEmailRequired?: boolean;
    readonly isDescriptionRequired?: boolean;
    readonly expiresAt?: DateTime;
    readonly folder: FolderMini;
    readonly url?: string;
    readonly etag?: string;
    readonly createdBy?: UserMini;
    readonly createdAt: DateTime;
    readonly updatedBy?: UserMini;
    readonly updatedAt: DateTime;
    constructor(fields: Omit<FileRequest, 'type'> & Partial<Pick<FileRequest, 'type'>>);
}
export interface FileRequestInput {
    readonly id: string;
    readonly type?: FileRequestTypeField;
    readonly title?: string;
    readonly description?: string;
    readonly status?: FileRequestStatusField;
    readonly isEmailRequired?: boolean;
    readonly isDescriptionRequired?: boolean;
    readonly expiresAt?: DateTime;
    readonly folder: FolderMini;
    readonly url?: string;
    readonly etag?: string;
    readonly createdBy?: UserMini;
    readonly createdAt: DateTime;
    readonly updatedBy?: UserMini;
    readonly updatedAt: DateTime;
}
export declare function serializeFileRequestTypeField(val: FileRequestTypeField): SerializedData;
export declare function deserializeFileRequestTypeField(val: SerializedData): FileRequestTypeField;
export declare function serializeFileRequestStatusField(val: FileRequestStatusField): SerializedData;
export declare function deserializeFileRequestStatusField(val: SerializedData): FileRequestStatusField;
export declare function serializeFileRequest(val: FileRequest): SerializedData;
export declare function deserializeFileRequest(val: SerializedData): FileRequest;
export declare function serializeFileRequestInput(val: FileRequestInput): SerializedData;
export declare function deserializeFileRequestInput(val: SerializedData): FileRequestInput;
