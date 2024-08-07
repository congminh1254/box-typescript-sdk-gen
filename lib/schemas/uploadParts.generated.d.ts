import { UploadPart } from './uploadPart.generated.js';
import { SerializedData } from '../serialization/json.js';
export type UploadPartsOrderDirectionField = 'ASC' | 'DESC';
export interface UploadPartsOrderField {
    readonly by?: string;
    readonly direction?: UploadPartsOrderDirectionField;
}
export interface UploadParts {
    readonly totalCount?: number;
    readonly limit?: number;
    readonly offset?: number;
    readonly order?: readonly UploadPartsOrderField[];
    readonly entries?: readonly UploadPart[];
}
export declare function serializeUploadPartsOrderDirectionField(val: UploadPartsOrderDirectionField): SerializedData;
export declare function deserializeUploadPartsOrderDirectionField(val: SerializedData): UploadPartsOrderDirectionField;
export declare function serializeUploadPartsOrderField(val: UploadPartsOrderField): SerializedData;
export declare function deserializeUploadPartsOrderField(val: SerializedData): UploadPartsOrderField;
export declare function serializeUploadParts(val: UploadParts): SerializedData;
export declare function deserializeUploadParts(val: SerializedData): UploadParts;
