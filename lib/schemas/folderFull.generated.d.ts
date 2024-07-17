import { Folder } from './folder.generated.js';
import { Metadata } from './metadata.generated.js';
import { SerializedData } from '../serialization/json.js';
export type FolderFullSyncStateField = 'synced' | 'not_synced' | 'partially_synced';
export interface FolderFullPermissionsField {
    readonly canDelete: boolean;
    readonly canDownload: boolean;
    readonly canInviteCollaborator: boolean;
    readonly canRename: boolean;
    readonly canSetShareAccess: boolean;
    readonly canShare: boolean;
    readonly canUpload?: boolean;
}
export interface FolderFullMetadataField {
    readonly extraData?: {
        readonly [key: string]: {
            readonly [key: string]: Metadata;
        };
    };
}
export type FolderFullAllowedSharedLinkAccessLevelsField = 'open' | 'company' | 'collaborators';
export type FolderFullAllowedInviteeRolesField = 'editor' | 'viewer' | 'previewer' | 'uploader' | 'previewer uploader' | 'viewer uploader' | 'co-owner';
export interface FolderFullWatermarkInfoField {
    readonly isWatermarked?: boolean;
}
export interface FolderFullClassificationField {
    readonly name?: string;
    readonly definition?: string;
    readonly color?: string;
}
export declare class FolderFull extends Folder {
    readonly syncState?: FolderFullSyncStateField;
    readonly hasCollaborations?: boolean;
    readonly permissions?: FolderFullPermissionsField;
    readonly tags?: readonly string[];
    readonly canNonOwnersInvite?: boolean;
    readonly isExternallyOwned?: boolean;
    readonly metadata?: FolderFullMetadataField;
    readonly isCollaborationRestrictedToEnterprise?: boolean;
    readonly allowedSharedLinkAccessLevels?: readonly FolderFullAllowedSharedLinkAccessLevelsField[];
    readonly allowedInviteeRoles?: readonly FolderFullAllowedInviteeRolesField[];
    readonly watermarkInfo?: FolderFullWatermarkInfoField;
    readonly isAccessibleViaSharedLink?: boolean;
    readonly canNonOwnersViewCollaborators?: boolean;
    readonly classification?: FolderFullClassificationField;
    constructor(fields: FolderFull);
}
export declare function serializeFolderFullSyncStateField(val: FolderFullSyncStateField): SerializedData;
export declare function deserializeFolderFullSyncStateField(val: SerializedData): FolderFullSyncStateField;
export declare function serializeFolderFullPermissionsField(val: FolderFullPermissionsField): SerializedData;
export declare function deserializeFolderFullPermissionsField(val: SerializedData): FolderFullPermissionsField;
export declare function serializeFolderFullMetadataField(val: FolderFullMetadataField): SerializedData;
export declare function deserializeFolderFullMetadataField(val: SerializedData): FolderFullMetadataField;
export declare function serializeFolderFullAllowedSharedLinkAccessLevelsField(val: FolderFullAllowedSharedLinkAccessLevelsField): SerializedData;
export declare function deserializeFolderFullAllowedSharedLinkAccessLevelsField(val: SerializedData): FolderFullAllowedSharedLinkAccessLevelsField;
export declare function serializeFolderFullAllowedInviteeRolesField(val: FolderFullAllowedInviteeRolesField): SerializedData;
export declare function deserializeFolderFullAllowedInviteeRolesField(val: SerializedData): FolderFullAllowedInviteeRolesField;
export declare function serializeFolderFullWatermarkInfoField(val: FolderFullWatermarkInfoField): SerializedData;
export declare function deserializeFolderFullWatermarkInfoField(val: SerializedData): FolderFullWatermarkInfoField;
export declare function serializeFolderFullClassificationField(val: FolderFullClassificationField): SerializedData;
export declare function deserializeFolderFullClassificationField(val: SerializedData): FolderFullClassificationField;
export declare function serializeFolderFull(val: FolderFull): SerializedData;
export declare function deserializeFolderFull(val: SerializedData): FolderFull;
