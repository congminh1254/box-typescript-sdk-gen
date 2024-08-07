import { File } from './file.generated.js';
import { UserMini } from './userMini.generated.js';
import { FileOrFolderScope } from './fileOrFolderScope.generated.js';
import { Metadata } from './metadata.generated.js';
import { DateTime } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export interface FileFullPermissionsField {
    readonly canDelete: boolean;
    readonly canDownload: boolean;
    readonly canInviteCollaborator: boolean;
    readonly canRename: boolean;
    readonly canSetShareAccess: boolean;
    readonly canShare: boolean;
    readonly canAnnotate?: boolean;
    readonly canComment?: boolean;
    readonly canPreview?: boolean;
    readonly canUpload?: boolean;
    readonly canViewAnnotationsAll?: boolean;
    readonly canViewAnnotationsSelf?: boolean;
}
export type FileFullLockTypeField = 'lock';
export type FileFullLockAppTypeField = 'gsuite' | 'office_wopi' | 'office_wopiplus' | 'other';
export interface FileFullLockField {
    readonly id?: string;
    readonly type?: FileFullLockTypeField;
    readonly createdBy?: UserMini;
    readonly createdAt?: DateTime;
    readonly expiredAt?: DateTime;
    readonly isDownloadPrevented?: boolean;
    readonly appType?: FileFullLockAppTypeField;
}
export type FileFullExpiringEmbedLinkTokenTypeField = 'bearer';
export interface FileFullExpiringEmbedLinkField {
    readonly accessToken?: string;
    readonly expiresIn?: number;
    readonly tokenType?: FileFullExpiringEmbedLinkTokenTypeField;
    readonly restrictedTo?: readonly FileOrFolderScope[];
    readonly url?: string;
}
export interface FileFullWatermarkInfoField {
    readonly isWatermarked?: boolean;
}
export type FileFullAllowedInviteeRolesField = 'editor' | 'viewer' | 'previewer' | 'uploader' | 'previewer uploader' | 'viewer uploader' | 'co-owner';
export interface FileFullMetadataField {
    readonly extraData?: {
        readonly [key: string]: {
            readonly [key: string]: Metadata;
        };
    };
}
export interface FileFullRepresentationsEntriesContentField {
    readonly urlTemplate?: string;
}
export interface FileFullRepresentationsEntriesInfoField {
    readonly url?: string;
}
export interface FileFullRepresentationsEntriesPropertiesField {
    readonly dimensions?: string;
    readonly paged?: boolean;
    readonly thumb?: boolean;
}
export type FileFullRepresentationsEntriesStatusStateField = 'success' | 'viewable' | 'pending' | 'none';
export interface FileFullRepresentationsEntriesStatusField {
    readonly state?: FileFullRepresentationsEntriesStatusStateField;
}
export interface FileFullRepresentationsEntriesField {
    readonly content?: FileFullRepresentationsEntriesContentField;
    readonly info?: FileFullRepresentationsEntriesInfoField;
    readonly properties?: FileFullRepresentationsEntriesPropertiesField;
    readonly representation?: string;
    readonly status?: FileFullRepresentationsEntriesStatusField;
}
export interface FileFullRepresentationsField {
    readonly entries?: readonly FileFullRepresentationsEntriesField[];
}
export interface FileFullClassificationField {
    readonly name?: string;
    readonly definition?: string;
    readonly color?: string;
}
export type FileFullSharedLinkPermissionOptionsField = 'can_preview' | 'can_download' | 'can_edit';
export declare class FileFull extends File {
    readonly versionNumber?: string;
    readonly commentCount?: number;
    readonly permissions?: FileFullPermissionsField;
    readonly tags?: readonly string[];
    readonly lock?: FileFullLockField;
    readonly extension?: string;
    readonly isPackage?: boolean;
    readonly expiringEmbedLink?: FileFullExpiringEmbedLinkField;
    readonly watermarkInfo?: FileFullWatermarkInfoField;
    readonly isAccessibleViaSharedLink?: boolean;
    readonly allowedInviteeRoles?: readonly FileFullAllowedInviteeRolesField[];
    readonly isExternallyOwned?: boolean;
    readonly hasCollaborations?: boolean;
    readonly metadata?: FileFullMetadataField;
    readonly expiresAt?: DateTime;
    readonly representations?: FileFullRepresentationsField;
    readonly classification?: FileFullClassificationField;
    readonly uploaderDisplayName?: string;
    readonly dispositionAt?: DateTime;
    readonly sharedLinkPermissionOptions?: readonly FileFullSharedLinkPermissionOptionsField[];
    constructor(fields: FileFull);
}
export declare function serializeFileFullPermissionsField(val: FileFullPermissionsField): SerializedData;
export declare function deserializeFileFullPermissionsField(val: SerializedData): FileFullPermissionsField;
export declare function serializeFileFullLockTypeField(val: FileFullLockTypeField): SerializedData;
export declare function deserializeFileFullLockTypeField(val: SerializedData): FileFullLockTypeField;
export declare function serializeFileFullLockAppTypeField(val: FileFullLockAppTypeField): SerializedData;
export declare function deserializeFileFullLockAppTypeField(val: SerializedData): FileFullLockAppTypeField;
export declare function serializeFileFullLockField(val: FileFullLockField): SerializedData;
export declare function deserializeFileFullLockField(val: SerializedData): FileFullLockField;
export declare function serializeFileFullExpiringEmbedLinkTokenTypeField(val: FileFullExpiringEmbedLinkTokenTypeField): SerializedData;
export declare function deserializeFileFullExpiringEmbedLinkTokenTypeField(val: SerializedData): FileFullExpiringEmbedLinkTokenTypeField;
export declare function serializeFileFullExpiringEmbedLinkField(val: FileFullExpiringEmbedLinkField): SerializedData;
export declare function deserializeFileFullExpiringEmbedLinkField(val: SerializedData): FileFullExpiringEmbedLinkField;
export declare function serializeFileFullWatermarkInfoField(val: FileFullWatermarkInfoField): SerializedData;
export declare function deserializeFileFullWatermarkInfoField(val: SerializedData): FileFullWatermarkInfoField;
export declare function serializeFileFullAllowedInviteeRolesField(val: FileFullAllowedInviteeRolesField): SerializedData;
export declare function deserializeFileFullAllowedInviteeRolesField(val: SerializedData): FileFullAllowedInviteeRolesField;
export declare function serializeFileFullMetadataField(val: FileFullMetadataField): SerializedData;
export declare function deserializeFileFullMetadataField(val: SerializedData): FileFullMetadataField;
export declare function serializeFileFullRepresentationsEntriesContentField(val: FileFullRepresentationsEntriesContentField): SerializedData;
export declare function deserializeFileFullRepresentationsEntriesContentField(val: SerializedData): FileFullRepresentationsEntriesContentField;
export declare function serializeFileFullRepresentationsEntriesInfoField(val: FileFullRepresentationsEntriesInfoField): SerializedData;
export declare function deserializeFileFullRepresentationsEntriesInfoField(val: SerializedData): FileFullRepresentationsEntriesInfoField;
export declare function serializeFileFullRepresentationsEntriesPropertiesField(val: FileFullRepresentationsEntriesPropertiesField): SerializedData;
export declare function deserializeFileFullRepresentationsEntriesPropertiesField(val: SerializedData): FileFullRepresentationsEntriesPropertiesField;
export declare function serializeFileFullRepresentationsEntriesStatusStateField(val: FileFullRepresentationsEntriesStatusStateField): SerializedData;
export declare function deserializeFileFullRepresentationsEntriesStatusStateField(val: SerializedData): FileFullRepresentationsEntriesStatusStateField;
export declare function serializeFileFullRepresentationsEntriesStatusField(val: FileFullRepresentationsEntriesStatusField): SerializedData;
export declare function deserializeFileFullRepresentationsEntriesStatusField(val: SerializedData): FileFullRepresentationsEntriesStatusField;
export declare function serializeFileFullRepresentationsEntriesField(val: FileFullRepresentationsEntriesField): SerializedData;
export declare function deserializeFileFullRepresentationsEntriesField(val: SerializedData): FileFullRepresentationsEntriesField;
export declare function serializeFileFullRepresentationsField(val: FileFullRepresentationsField): SerializedData;
export declare function deserializeFileFullRepresentationsField(val: SerializedData): FileFullRepresentationsField;
export declare function serializeFileFullClassificationField(val: FileFullClassificationField): SerializedData;
export declare function deserializeFileFullClassificationField(val: SerializedData): FileFullClassificationField;
export declare function serializeFileFullSharedLinkPermissionOptionsField(val: FileFullSharedLinkPermissionOptionsField): SerializedData;
export declare function deserializeFileFullSharedLinkPermissionOptionsField(val: SerializedData): FileFullSharedLinkPermissionOptionsField;
export declare function serializeFileFull(val: FileFull): SerializedData;
export declare function deserializeFileFull(val: SerializedData): FileFull;
