import { SerializedData } from '../serialization/json.js';
export type FileVersionBaseTypeField = 'file_version';
export declare class FileVersionBase {
    readonly id: string;
    readonly type: FileVersionBaseTypeField;
    constructor(fields: Omit<FileVersionBase, 'type'> & Partial<Pick<FileVersionBase, 'type'>>);
}
export interface FileVersionBaseInput {
    readonly id: string;
    readonly type?: FileVersionBaseTypeField;
}
export declare function serializeFileVersionBaseTypeField(val: FileVersionBaseTypeField): SerializedData;
export declare function deserializeFileVersionBaseTypeField(val: SerializedData): FileVersionBaseTypeField;
export declare function serializeFileVersionBase(val: FileVersionBase): SerializedData;
export declare function deserializeFileVersionBase(val: SerializedData): FileVersionBase;
export declare function serializeFileVersionBaseInput(val: FileVersionBaseInput): SerializedData;
export declare function deserializeFileVersionBaseInput(val: SerializedData): FileVersionBaseInput;
