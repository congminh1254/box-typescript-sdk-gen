import { SerializedData } from '../serialization/json.js';
export type FolderBaseTypeField = 'folder';
export declare class FolderBase {
    readonly id: string;
    readonly etag?: string;
    readonly type: FolderBaseTypeField;
    constructor(fields: Omit<FolderBase, 'type'> & Partial<Pick<FolderBase, 'type'>>);
}
export interface FolderBaseInput {
    readonly id: string;
    readonly etag?: string;
    readonly type?: FolderBaseTypeField;
}
export declare function serializeFolderBaseTypeField(val: FolderBaseTypeField): SerializedData;
export declare function deserializeFolderBaseTypeField(val: SerializedData): FolderBaseTypeField;
export declare function serializeFolderBase(val: FolderBase): SerializedData;
export declare function deserializeFolderBase(val: SerializedData): FolderBase;
export declare function serializeFolderBaseInput(val: FolderBaseInput): SerializedData;
export declare function deserializeFolderBaseInput(val: SerializedData): FolderBaseInput;
