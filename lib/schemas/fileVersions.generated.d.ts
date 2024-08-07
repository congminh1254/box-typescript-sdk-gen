import { FileVersionFull } from './fileVersionFull.generated.js';
import { SerializedData } from '../serialization/json.js';
export type FileVersionsOrderDirectionField = 'ASC' | 'DESC';
export interface FileVersionsOrderField {
    readonly by?: string;
    readonly direction?: FileVersionsOrderDirectionField;
}
export interface FileVersions {
    readonly totalCount?: number;
    readonly limit?: number;
    readonly offset?: number;
    readonly order?: readonly FileVersionsOrderField[];
    readonly entries?: readonly FileVersionFull[];
}
export declare function serializeFileVersionsOrderDirectionField(val: FileVersionsOrderDirectionField): SerializedData;
export declare function deserializeFileVersionsOrderDirectionField(val: SerializedData): FileVersionsOrderDirectionField;
export declare function serializeFileVersionsOrderField(val: FileVersionsOrderField): SerializedData;
export declare function deserializeFileVersionsOrderField(val: SerializedData): FileVersionsOrderField;
export declare function serializeFileVersions(val: FileVersions): SerializedData;
export declare function deserializeFileVersions(val: SerializedData): FileVersions;
