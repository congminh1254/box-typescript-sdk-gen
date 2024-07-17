import { FileRequestUpdateRequest } from './fileRequestUpdateRequest.generated.js';
import { SerializedData } from '../serialization/json.js';
export type FileRequestCopyRequestFolderTypeField = 'folder';
export interface FileRequestCopyRequestFolderField {
    readonly type?: FileRequestCopyRequestFolderTypeField;
    readonly id: string;
}
export type FileRequestCopyRequest = FileRequestUpdateRequest & {
    readonly folder: FileRequestCopyRequestFolderField;
};
export declare function serializeFileRequestCopyRequestFolderTypeField(val: FileRequestCopyRequestFolderTypeField): SerializedData;
export declare function deserializeFileRequestCopyRequestFolderTypeField(val: SerializedData): FileRequestCopyRequestFolderTypeField;
export declare function serializeFileRequestCopyRequestFolderField(val: FileRequestCopyRequestFolderField): SerializedData;
export declare function deserializeFileRequestCopyRequestFolderField(val: SerializedData): FileRequestCopyRequestFolderField;
export declare function serializeFileRequestCopyRequest(val: FileRequestCopyRequest): SerializedData;
export declare function deserializeFileRequestCopyRequest(val: SerializedData): FileRequestCopyRequest;
