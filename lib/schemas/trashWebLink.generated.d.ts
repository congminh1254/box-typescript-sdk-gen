import { FolderMini } from './folderMini.generated.js';
import { UserMini } from './userMini.generated.js';
import { DateTime } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export type TrashWebLinkTypeField = 'web_link';
export type TrashWebLinkPathCollectionEntriesTypeField = 'folder';
export interface TrashWebLinkPathCollectionEntriesField {
    readonly type?: TrashWebLinkPathCollectionEntriesTypeField;
    readonly id?: string;
    readonly sequenceId?: string;
    readonly etag?: string;
    readonly name?: string;
}
export interface TrashWebLinkPathCollectionField {
    readonly totalCount: number;
    readonly entries: readonly TrashWebLinkPathCollectionEntriesField[];
}
export type TrashWebLinkItemStatusField = 'active' | 'trashed' | 'deleted';
export interface TrashWebLink {
    readonly type?: TrashWebLinkTypeField;
    readonly id?: string;
    readonly sequenceId?: string;
    readonly etag?: string;
    readonly name?: string;
    readonly url?: string;
    readonly parent?: FolderMini;
    readonly description?: string;
    readonly pathCollection?: TrashWebLinkPathCollectionField;
    readonly createdAt?: DateTime;
    readonly modifiedAt?: DateTime;
    readonly trashedAt?: DateTime;
    readonly purgedAt?: DateTime;
    readonly createdBy?: UserMini;
    readonly modifiedBy?: UserMini;
    readonly ownedBy?: UserMini;
    readonly sharedLink?: string;
    readonly itemStatus?: TrashWebLinkItemStatusField;
}
export declare function serializeTrashWebLinkTypeField(val: TrashWebLinkTypeField): SerializedData;
export declare function deserializeTrashWebLinkTypeField(val: SerializedData): TrashWebLinkTypeField;
export declare function serializeTrashWebLinkPathCollectionEntriesTypeField(val: TrashWebLinkPathCollectionEntriesTypeField): SerializedData;
export declare function deserializeTrashWebLinkPathCollectionEntriesTypeField(val: SerializedData): TrashWebLinkPathCollectionEntriesTypeField;
export declare function serializeTrashWebLinkPathCollectionEntriesField(val: TrashWebLinkPathCollectionEntriesField): SerializedData;
export declare function deserializeTrashWebLinkPathCollectionEntriesField(val: SerializedData): TrashWebLinkPathCollectionEntriesField;
export declare function serializeTrashWebLinkPathCollectionField(val: TrashWebLinkPathCollectionField): SerializedData;
export declare function deserializeTrashWebLinkPathCollectionField(val: SerializedData): TrashWebLinkPathCollectionField;
export declare function serializeTrashWebLinkItemStatusField(val: TrashWebLinkItemStatusField): SerializedData;
export declare function deserializeTrashWebLinkItemStatusField(val: SerializedData): TrashWebLinkItemStatusField;
export declare function serializeTrashWebLink(val: TrashWebLink): SerializedData;
export declare function deserializeTrashWebLink(val: SerializedData): TrashWebLink;
