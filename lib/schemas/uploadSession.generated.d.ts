import { DateTime } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export type UploadSessionTypeField = 'upload_session';
export interface UploadSessionSessionEndpointsField {
    readonly uploadPart?: string;
    readonly commit?: string;
    readonly abort?: string;
    readonly listParts?: string;
    readonly status?: string;
    readonly logEvent?: string;
}
export interface UploadSession {
    readonly id?: string;
    readonly type?: UploadSessionTypeField;
    readonly sessionExpiresAt?: DateTime;
    readonly partSize?: number;
    readonly totalParts?: number;
    readonly numPartsProcessed?: number;
    readonly sessionEndpoints?: UploadSessionSessionEndpointsField;
}
export declare function serializeUploadSessionTypeField(val: UploadSessionTypeField): SerializedData;
export declare function deserializeUploadSessionTypeField(val: SerializedData): UploadSessionTypeField;
export declare function serializeUploadSessionSessionEndpointsField(val: UploadSessionSessionEndpointsField): SerializedData;
export declare function deserializeUploadSessionSessionEndpointsField(val: SerializedData): UploadSessionSessionEndpointsField;
export declare function serializeUploadSession(val: UploadSession): SerializedData;
export declare function deserializeUploadSession(val: SerializedData): UploadSession;
