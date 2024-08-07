import { FolderMini } from './folderMini.generated.js';
import { UserMini } from './userMini.generated.js';
import { Items } from './items.generated.js';
import { DateTime } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export interface FolderPathCollectionField {
    readonly totalCount: number;
    readonly entries: readonly FolderMini[];
}
export type FolderSharedLinkAccessField = 'open' | 'company' | 'collaborators';
export type FolderSharedLinkEffectiveAccessField = 'open' | 'company' | 'collaborators';
export type FolderSharedLinkEffectivePermissionField = 'can_edit' | 'can_download' | 'can_preview' | 'no_access';
export interface FolderSharedLinkPermissionsField {
    readonly canDownload: boolean;
    readonly canPreview: boolean;
    readonly canEdit: boolean;
}
export interface FolderSharedLinkField {
    readonly url: string;
    readonly downloadUrl?: string;
    readonly vanityUrl?: string;
    readonly vanityName?: string;
    readonly access?: FolderSharedLinkAccessField;
    readonly effectiveAccess: FolderSharedLinkEffectiveAccessField;
    readonly effectivePermission: FolderSharedLinkEffectivePermissionField;
    readonly unsharedAt?: DateTime;
    readonly isPasswordEnabled: boolean;
    readonly permissions?: FolderSharedLinkPermissionsField;
    readonly downloadCount: number;
    readonly previewCount: number;
}
export type FolderFolderUploadEmailAccessField = 'open' | 'collaborators';
export interface FolderFolderUploadEmailField {
    readonly access?: FolderFolderUploadEmailAccessField;
    readonly email?: string;
}
export type FolderItemStatusField = 'active' | 'trashed' | 'deleted';
export declare class Folder extends FolderMini {
    readonly createdAt?: DateTime;
    readonly modifiedAt?: DateTime;
    readonly description?: string;
    readonly size?: number;
    readonly pathCollection?: FolderPathCollectionField;
    readonly createdBy?: UserMini;
    readonly modifiedBy?: UserMini;
    readonly trashedAt?: DateTime;
    readonly purgedAt?: DateTime;
    readonly contentCreatedAt?: DateTime;
    readonly contentModifiedAt?: DateTime;
    readonly ownedBy?: UserMini;
    readonly sharedLink?: FolderSharedLinkField;
    readonly folderUploadEmail?: FolderFolderUploadEmailField;
    readonly parent?: FolderMini;
    readonly itemStatus?: FolderItemStatusField;
    readonly itemCollection?: Items;
    constructor(fields: Folder);
}
export declare function serializeFolderPathCollectionField(val: FolderPathCollectionField): SerializedData;
export declare function deserializeFolderPathCollectionField(val: SerializedData): FolderPathCollectionField;
export declare function serializeFolderSharedLinkAccessField(val: FolderSharedLinkAccessField): SerializedData;
export declare function deserializeFolderSharedLinkAccessField(val: SerializedData): FolderSharedLinkAccessField;
export declare function serializeFolderSharedLinkEffectiveAccessField(val: FolderSharedLinkEffectiveAccessField): SerializedData;
export declare function deserializeFolderSharedLinkEffectiveAccessField(val: SerializedData): FolderSharedLinkEffectiveAccessField;
export declare function serializeFolderSharedLinkEffectivePermissionField(val: FolderSharedLinkEffectivePermissionField): SerializedData;
export declare function deserializeFolderSharedLinkEffectivePermissionField(val: SerializedData): FolderSharedLinkEffectivePermissionField;
export declare function serializeFolderSharedLinkPermissionsField(val: FolderSharedLinkPermissionsField): SerializedData;
export declare function deserializeFolderSharedLinkPermissionsField(val: SerializedData): FolderSharedLinkPermissionsField;
export declare function serializeFolderSharedLinkField(val: FolderSharedLinkField): SerializedData;
export declare function deserializeFolderSharedLinkField(val: SerializedData): FolderSharedLinkField;
export declare function serializeFolderFolderUploadEmailAccessField(val: FolderFolderUploadEmailAccessField): SerializedData;
export declare function deserializeFolderFolderUploadEmailAccessField(val: SerializedData): FolderFolderUploadEmailAccessField;
export declare function serializeFolderFolderUploadEmailField(val: FolderFolderUploadEmailField): SerializedData;
export declare function deserializeFolderFolderUploadEmailField(val: SerializedData): FolderFolderUploadEmailField;
export declare function serializeFolderItemStatusField(val: FolderItemStatusField): SerializedData;
export declare function deserializeFolderItemStatusField(val: SerializedData): FolderItemStatusField;
export declare function serializeFolder(val: Folder): SerializedData;
export declare function deserializeFolder(val: SerializedData): Folder;
