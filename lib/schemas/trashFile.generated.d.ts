import { FileVersionMini } from './fileVersionMini.generated.js';
import { UserMini } from './userMini.generated.js';
import { FolderMini } from './folderMini.generated.js';
import { DateTime } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export type TrashFileTypeField = 'file';
export type TrashFilePathCollectionEntriesTypeField = 'folder';
export interface TrashFilePathCollectionEntriesField {
    readonly type?: TrashFilePathCollectionEntriesTypeField;
    readonly id?: string;
    readonly sequenceId?: string;
    readonly etag?: string;
    readonly name?: string;
}
export interface TrashFilePathCollectionField {
    readonly totalCount: number;
    readonly entries: readonly TrashFilePathCollectionEntriesField[];
}
export type TrashFileItemStatusField = 'active' | 'trashed' | 'deleted';
export declare class TrashFile {
    readonly id: string;
    readonly etag?: string;
    readonly type: TrashFileTypeField;
    readonly sequenceId: string;
    readonly name?: string;
    readonly sha1: string;
    readonly fileVersion?: FileVersionMini;
    readonly description: string;
    readonly size: number;
    readonly pathCollection: TrashFilePathCollectionField;
    readonly createdAt: DateTime;
    readonly modifiedAt: DateTime;
    readonly trashedAt?: DateTime;
    readonly purgedAt?: DateTime;
    readonly contentCreatedAt?: DateTime;
    readonly contentModifiedAt?: DateTime;
    readonly createdBy?: UserMini;
    readonly modifiedBy: UserMini;
    readonly ownedBy: UserMini;
    readonly sharedLink?: string;
    readonly parent?: FolderMini;
    readonly itemStatus: TrashFileItemStatusField;
    constructor(fields: Omit<TrashFile, 'type'> & Partial<Pick<TrashFile, 'type'>>);
}
export interface TrashFileInput {
    readonly id: string;
    readonly etag?: string;
    readonly type?: TrashFileTypeField;
    readonly sequenceId: string;
    readonly name?: string;
    readonly sha1: string;
    readonly fileVersion?: FileVersionMini;
    readonly description: string;
    readonly size: number;
    readonly pathCollection: TrashFilePathCollectionField;
    readonly createdAt: DateTime;
    readonly modifiedAt: DateTime;
    readonly trashedAt?: DateTime;
    readonly purgedAt?: DateTime;
    readonly contentCreatedAt?: DateTime;
    readonly contentModifiedAt?: DateTime;
    readonly createdBy?: UserMini;
    readonly modifiedBy: UserMini;
    readonly ownedBy: UserMini;
    readonly sharedLink?: string;
    readonly parent?: FolderMini;
    readonly itemStatus: TrashFileItemStatusField;
}
export declare function serializeTrashFileTypeField(val: TrashFileTypeField): SerializedData;
export declare function deserializeTrashFileTypeField(val: SerializedData): TrashFileTypeField;
export declare function serializeTrashFilePathCollectionEntriesTypeField(val: TrashFilePathCollectionEntriesTypeField): SerializedData;
export declare function deserializeTrashFilePathCollectionEntriesTypeField(val: SerializedData): TrashFilePathCollectionEntriesTypeField;
export declare function serializeTrashFilePathCollectionEntriesField(val: TrashFilePathCollectionEntriesField): SerializedData;
export declare function deserializeTrashFilePathCollectionEntriesField(val: SerializedData): TrashFilePathCollectionEntriesField;
export declare function serializeTrashFilePathCollectionField(val: TrashFilePathCollectionField): SerializedData;
export declare function deserializeTrashFilePathCollectionField(val: SerializedData): TrashFilePathCollectionField;
export declare function serializeTrashFileItemStatusField(val: TrashFileItemStatusField): SerializedData;
export declare function deserializeTrashFileItemStatusField(val: SerializedData): TrashFileItemStatusField;
export declare function serializeTrashFile(val: TrashFile): SerializedData;
export declare function deserializeTrashFile(val: SerializedData): TrashFile;
export declare function serializeTrashFileInput(val: TrashFileInput): SerializedData;
export declare function deserializeTrashFileInput(val: SerializedData): TrashFileInput;
