import { FileMini } from './fileMini.generated.js';
import { SerializedData } from '../serialization/json.js';
export interface FilesOnHold {
    readonly limit?: number;
    readonly nextMarker?: string;
    readonly prevMarker?: string;
    readonly entries?: readonly FileMini[];
}
export declare function serializeFilesOnHold(val: FilesOnHold): SerializedData;
export declare function deserializeFilesOnHold(val: SerializedData): FilesOnHold;
