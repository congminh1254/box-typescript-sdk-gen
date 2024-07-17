import { DateTime } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export type FileRequestUpdateRequestStatusField = 'active' | 'inactive';
export interface FileRequestUpdateRequest {
    readonly title?: string;
    readonly description?: string;
    readonly status?: FileRequestUpdateRequestStatusField;
    readonly isEmailRequired?: boolean;
    readonly isDescriptionRequired?: boolean;
    readonly expiresAt?: DateTime;
}
export declare function serializeFileRequestUpdateRequestStatusField(val: FileRequestUpdateRequestStatusField): SerializedData;
export declare function deserializeFileRequestUpdateRequestStatusField(val: SerializedData): FileRequestUpdateRequestStatusField;
export declare function serializeFileRequestUpdateRequest(val: FileRequestUpdateRequest): SerializedData;
export declare function deserializeFileRequestUpdateRequest(val: SerializedData): FileRequestUpdateRequest;
