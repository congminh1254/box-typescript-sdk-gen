import { FolderMini } from './folderMini.generated.js';
import { UserMini } from './userMini.generated.js';
import { DateTime } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export type TrashWebLinkRestoredTypeField = 'web_link';
export interface TrashWebLinkRestoredPathCollectionField {
    readonly totalCount: number;
    readonly entries: readonly FolderMini[];
}
export type TrashWebLinkRestoredItemStatusField = 'active' | 'trashed' | 'deleted';
export interface TrashWebLinkRestored {
    readonly type?: TrashWebLinkRestoredTypeField;
    readonly id?: string;
    readonly sequenceId: string;
    readonly etag?: string;
    readonly name?: string;
    readonly url?: string;
    readonly parent?: FolderMini;
    readonly description?: string;
    readonly pathCollection: TrashWebLinkRestoredPathCollectionField;
    readonly createdAt?: DateTime;
    readonly modifiedAt?: DateTime;
    readonly trashedAt?: string;
    readonly purgedAt?: string;
    readonly createdBy?: UserMini;
    readonly modifiedBy?: UserMini;
    readonly ownedBy?: UserMini;
    readonly sharedLink?: string;
    readonly itemStatus?: TrashWebLinkRestoredItemStatusField;
}
export declare function serializeTrashWebLinkRestoredTypeField(val: TrashWebLinkRestoredTypeField): SerializedData;
export declare function deserializeTrashWebLinkRestoredTypeField(val: SerializedData): TrashWebLinkRestoredTypeField;
export declare function serializeTrashWebLinkRestoredPathCollectionField(val: TrashWebLinkRestoredPathCollectionField): SerializedData;
export declare function deserializeTrashWebLinkRestoredPathCollectionField(val: SerializedData): TrashWebLinkRestoredPathCollectionField;
export declare function serializeTrashWebLinkRestoredItemStatusField(val: TrashWebLinkRestoredItemStatusField): SerializedData;
export declare function deserializeTrashWebLinkRestoredItemStatusField(val: SerializedData): TrashWebLinkRestoredItemStatusField;
export declare function serializeTrashWebLinkRestored(val: TrashWebLinkRestored): SerializedData;
export declare function deserializeTrashWebLinkRestored(val: SerializedData): TrashWebLinkRestored;
