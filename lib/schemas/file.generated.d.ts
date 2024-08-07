import { FileMini } from './fileMini.generated.js';
import { FolderMini } from './folderMini.generated.js';
import { UserMini } from './userMini.generated.js';
import { DateTime } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export interface FilePathCollectionField {
    readonly totalCount: number;
    readonly entries: readonly FolderMini[];
}
export type FileSharedLinkAccessField = 'open' | 'company' | 'collaborators';
export type FileSharedLinkEffectiveAccessField = 'open' | 'company' | 'collaborators';
export type FileSharedLinkEffectivePermissionField = 'can_edit' | 'can_download' | 'can_preview' | 'no_access';
export interface FileSharedLinkPermissionsField {
    readonly canDownload: boolean;
    readonly canPreview: boolean;
    readonly canEdit: boolean;
}
export interface FileSharedLinkField {
    readonly url: string;
    readonly downloadUrl?: string;
    readonly vanityUrl?: string;
    readonly vanityName?: string;
    readonly access?: FileSharedLinkAccessField;
    readonly effectiveAccess: FileSharedLinkEffectiveAccessField;
    readonly effectivePermission: FileSharedLinkEffectivePermissionField;
    readonly unsharedAt?: DateTime;
    readonly isPasswordEnabled: boolean;
    readonly permissions?: FileSharedLinkPermissionsField;
    readonly downloadCount: number;
    readonly previewCount: number;
}
export type FileItemStatusField = 'active' | 'trashed' | 'deleted';
export declare class File extends FileMini {
    readonly description?: string;
    readonly size?: number;
    readonly pathCollection?: FilePathCollectionField;
    readonly createdAt?: DateTime;
    readonly modifiedAt?: DateTime;
    readonly trashedAt?: DateTime;
    readonly purgedAt?: DateTime;
    readonly contentCreatedAt?: DateTime;
    readonly contentModifiedAt?: DateTime;
    readonly createdBy?: UserMini;
    readonly modifiedBy?: UserMini;
    readonly ownedBy?: UserMini;
    readonly sharedLink?: FileSharedLinkField;
    readonly parent?: FolderMini;
    readonly itemStatus?: FileItemStatusField;
    constructor(fields: File);
}
export declare function serializeFilePathCollectionField(val: FilePathCollectionField): SerializedData;
export declare function deserializeFilePathCollectionField(val: SerializedData): FilePathCollectionField;
export declare function serializeFileSharedLinkAccessField(val: FileSharedLinkAccessField): SerializedData;
export declare function deserializeFileSharedLinkAccessField(val: SerializedData): FileSharedLinkAccessField;
export declare function serializeFileSharedLinkEffectiveAccessField(val: FileSharedLinkEffectiveAccessField): SerializedData;
export declare function deserializeFileSharedLinkEffectiveAccessField(val: SerializedData): FileSharedLinkEffectiveAccessField;
export declare function serializeFileSharedLinkEffectivePermissionField(val: FileSharedLinkEffectivePermissionField): SerializedData;
export declare function deserializeFileSharedLinkEffectivePermissionField(val: SerializedData): FileSharedLinkEffectivePermissionField;
export declare function serializeFileSharedLinkPermissionsField(val: FileSharedLinkPermissionsField): SerializedData;
export declare function deserializeFileSharedLinkPermissionsField(val: SerializedData): FileSharedLinkPermissionsField;
export declare function serializeFileSharedLinkField(val: FileSharedLinkField): SerializedData;
export declare function deserializeFileSharedLinkField(val: SerializedData): FileSharedLinkField;
export declare function serializeFileItemStatusField(val: FileItemStatusField): SerializedData;
export declare function deserializeFileItemStatusField(val: SerializedData): FileItemStatusField;
export declare function serializeFile(val: File): SerializedData;
export declare function deserializeFile(val: SerializedData): File;
