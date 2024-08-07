import { SerializedData } from '../serialization/json.js';
export interface UploadPartMini {
    readonly partId?: string;
    readonly offset?: number;
    readonly size?: number;
}
export declare function serializeUploadPartMini(val: UploadPartMini): SerializedData;
export declare function deserializeUploadPartMini(val: SerializedData): UploadPartMini;
