import { UploadPartMini } from './uploadPartMini.generated.js';
import { SerializedData } from '../serialization/json.js';
export type UploadPart = UploadPartMini & {
    readonly sha1?: string;
};
export declare function serializeUploadPart(val: UploadPart): SerializedData;
export declare function deserializeUploadPart(val: SerializedData): UploadPart;
