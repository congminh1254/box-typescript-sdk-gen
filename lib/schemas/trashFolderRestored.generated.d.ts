import { FolderMini } from './folderMini.generated.js';
import { UserMini } from './userMini.generated.js';
import { DateTime } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export type TrashFolderRestoredTypeField = 'folder';
export interface TrashFolderRestoredPathCollectionField {
    readonly totalCount: number;
    readonly entries: readonly FolderMini[];
}
export type TrashFolderRestoredItemStatusField = 'active' | 'trashed' | 'deleted';
export interface TrashFolderRestored {
    readonly id?: string;
    readonly etag?: string;
    readonly type?: TrashFolderRestoredTypeField;
    readonly sequenceId?: string;
    readonly name?: string;
    readonly createdAt?: DateTime;
    readonly modifiedAt?: DateTime;
    readonly description?: string;
    readonly size?: number;
    readonly pathCollection?: TrashFolderRestoredPathCollectionField;
    readonly createdBy?: UserMini;
    readonly modifiedBy?: UserMini;
    readonly trashedAt?: string;
    readonly purgedAt?: string;
    readonly contentCreatedAt?: DateTime;
    readonly contentModifiedAt?: DateTime;
    readonly ownedBy?: UserMini;
    readonly sharedLink?: string;
    readonly folderUploadEmail?: string;
    readonly parent?: FolderMini;
    readonly itemStatus?: TrashFolderRestoredItemStatusField;
}
export declare function serializeTrashFolderRestoredTypeField(val: TrashFolderRestoredTypeField): SerializedData;
export declare function deserializeTrashFolderRestoredTypeField(val: SerializedData): TrashFolderRestoredTypeField;
export declare function serializeTrashFolderRestoredPathCollectionField(val: TrashFolderRestoredPathCollectionField): SerializedData;
export declare function deserializeTrashFolderRestoredPathCollectionField(val: SerializedData): TrashFolderRestoredPathCollectionField;
export declare function serializeTrashFolderRestoredItemStatusField(val: TrashFolderRestoredItemStatusField): SerializedData;
export declare function deserializeTrashFolderRestoredItemStatusField(val: SerializedData): TrashFolderRestoredItemStatusField;
export declare function serializeTrashFolderRestored(val: TrashFolderRestored): SerializedData;
export declare function deserializeTrashFolderRestored(val: SerializedData): TrashFolderRestored;
