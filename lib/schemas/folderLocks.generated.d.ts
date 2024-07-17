import { FolderLock } from './folderLock.generated.js';
import { SerializedData } from '../serialization/json.js';
export interface FolderLocks {
    readonly entries?: readonly FolderLock[];
    readonly limit?: string;
    readonly nextMarker?: string;
}
export declare function serializeFolderLocks(val: FolderLocks): SerializedData;
export declare function deserializeFolderLocks(val: SerializedData): FolderLocks;
