import { FileMini } from './fileMini.generated.js';
import { SerializedData } from '../serialization/json.js';
export interface FilesUnderRetention {
    readonly limit?: number;
    readonly nextMarker?: string;
    readonly prevMarker?: string;
    readonly entries?: readonly FileMini[];
}
export declare function serializeFilesUnderRetention(val: FilesUnderRetention): SerializedData;
export declare function deserializeFilesUnderRetention(val: SerializedData): FilesUnderRetention;
