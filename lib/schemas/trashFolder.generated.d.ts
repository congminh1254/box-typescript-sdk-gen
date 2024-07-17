import { UserMini } from './userMini.generated.js';
import { FolderMini } from './folderMini.generated.js';
import { DateTime } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export type TrashFolderTypeField = 'folder';
export type TrashFolderPathCollectionEntriesTypeField = 'folder';
export interface TrashFolderPathCollectionEntriesField {
    readonly type?: TrashFolderPathCollectionEntriesTypeField;
    readonly id?: string;
    readonly sequenceId?: string;
    readonly etag?: string;
    readonly name?: string;
}
export interface TrashFolderPathCollectionField {
    readonly totalCount: number;
    readonly entries: readonly TrashFolderPathCollectionEntriesField[];
}
export type TrashFolderItemStatusField = 'active' | 'trashed' | 'deleted';
export declare class TrashFolder {
    readonly id: string;
    readonly etag?: string;
    readonly type: TrashFolderTypeField;
    readonly sequenceId?: string;
    readonly name: string;
    readonly createdAt?: DateTime;
    readonly modifiedAt?: DateTime;
    readonly description: string;
    readonly size: number;
    readonly pathCollection: TrashFolderPathCollectionField;
    readonly createdBy: UserMini;
    readonly modifiedBy: UserMini;
    readonly trashedAt?: DateTime;
    readonly purgedAt?: DateTime;
    readonly contentCreatedAt?: DateTime;
    readonly contentModifiedAt?: DateTime;
    readonly ownedBy: UserMini;
    readonly sharedLink?: string;
    readonly folderUploadEmail?: string;
    readonly parent?: FolderMini;
    readonly itemStatus: TrashFolderItemStatusField;
    constructor(fields: Omit<TrashFolder, 'type'> & Partial<Pick<TrashFolder, 'type'>>);
}
export interface TrashFolderInput {
    readonly id: string;
    readonly etag?: string;
    readonly type?: TrashFolderTypeField;
    readonly sequenceId?: string;
    readonly name: string;
    readonly createdAt?: DateTime;
    readonly modifiedAt?: DateTime;
    readonly description: string;
    readonly size: number;
    readonly pathCollection: TrashFolderPathCollectionField;
    readonly createdBy: UserMini;
    readonly modifiedBy: UserMini;
    readonly trashedAt?: DateTime;
    readonly purgedAt?: DateTime;
    readonly contentCreatedAt?: DateTime;
    readonly contentModifiedAt?: DateTime;
    readonly ownedBy: UserMini;
    readonly sharedLink?: string;
    readonly folderUploadEmail?: string;
    readonly parent?: FolderMini;
    readonly itemStatus: TrashFolderItemStatusField;
}
export declare function serializeTrashFolderTypeField(val: TrashFolderTypeField): SerializedData;
export declare function deserializeTrashFolderTypeField(val: SerializedData): TrashFolderTypeField;
export declare function serializeTrashFolderPathCollectionEntriesTypeField(val: TrashFolderPathCollectionEntriesTypeField): SerializedData;
export declare function deserializeTrashFolderPathCollectionEntriesTypeField(val: SerializedData): TrashFolderPathCollectionEntriesTypeField;
export declare function serializeTrashFolderPathCollectionEntriesField(val: TrashFolderPathCollectionEntriesField): SerializedData;
export declare function deserializeTrashFolderPathCollectionEntriesField(val: SerializedData): TrashFolderPathCollectionEntriesField;
export declare function serializeTrashFolderPathCollectionField(val: TrashFolderPathCollectionField): SerializedData;
export declare function deserializeTrashFolderPathCollectionField(val: SerializedData): TrashFolderPathCollectionField;
export declare function serializeTrashFolderItemStatusField(val: TrashFolderItemStatusField): SerializedData;
export declare function deserializeTrashFolderItemStatusField(val: SerializedData): TrashFolderItemStatusField;
export declare function serializeTrashFolder(val: TrashFolder): SerializedData;
export declare function deserializeTrashFolder(val: SerializedData): TrashFolder;
export declare function serializeTrashFolderInput(val: TrashFolderInput): SerializedData;
export declare function deserializeTrashFolderInput(val: SerializedData): TrashFolderInput;
