import { SerializedData } from '../serialization/json.js';
export type FileBaseTypeField = 'file';
export declare class FileBase {
    readonly id: string;
    readonly etag?: string;
    readonly type: FileBaseTypeField;
    constructor(fields: Omit<FileBase, 'type'> & Partial<Pick<FileBase, 'type'>>);
}
export interface FileBaseInput {
    readonly id: string;
    readonly etag?: string;
    readonly type?: FileBaseTypeField;
}
export declare function serializeFileBaseTypeField(val: FileBaseTypeField): SerializedData;
export declare function deserializeFileBaseTypeField(val: SerializedData): FileBaseTypeField;
export declare function serializeFileBase(val: FileBase): SerializedData;
export declare function deserializeFileBase(val: SerializedData): FileBase;
export declare function serializeFileBaseInput(val: FileBaseInput): SerializedData;
export declare function deserializeFileBaseInput(val: SerializedData): FileBaseInput;
