import { FolderMini } from './folderMini.generated.js';
import { UserBase } from './userBase.generated.js';
import { DateTime } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export interface FolderLockLockedOperationsField {
    readonly move: boolean;
    readonly delete: boolean;
}
export interface FolderLock {
    readonly folder?: FolderMini;
    readonly id?: string;
    readonly type?: string;
    readonly createdBy?: UserBase;
    readonly createdAt?: DateTime;
    readonly lockedOperations?: FolderLockLockedOperationsField;
    readonly lockType?: string;
}
export declare function serializeFolderLockLockedOperationsField(val: FolderLockLockedOperationsField): SerializedData;
export declare function deserializeFolderLockLockedOperationsField(val: SerializedData): FolderLockLockedOperationsField;
export declare function serializeFolderLock(val: FolderLock): SerializedData;
export declare function deserializeFolderLock(val: SerializedData): FolderLock;
