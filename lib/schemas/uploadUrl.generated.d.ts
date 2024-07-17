import { SerializedData } from '../serialization/json.js';
export interface UploadUrl {
    readonly uploadUrl?: string;
    readonly uploadToken?: string;
}
export declare function serializeUploadUrl(val: UploadUrl): SerializedData;
export declare function deserializeUploadUrl(val: SerializedData): UploadUrl;
