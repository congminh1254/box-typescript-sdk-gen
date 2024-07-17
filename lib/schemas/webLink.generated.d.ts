import { WebLinkMini } from './webLinkMini.generated.js';
import { FolderMini } from './folderMini.generated.js';
import { UserMini } from './userMini.generated.js';
import { DateTime } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export interface WebLinkPathCollectionField {
    readonly totalCount: number;
    readonly entries: readonly FolderMini[];
}
export type WebLinkSharedLinkAccessField = 'open' | 'company' | 'collaborators';
export type WebLinkSharedLinkEffectiveAccessField = 'open' | 'company' | 'collaborators';
export type WebLinkSharedLinkEffectivePermissionField = 'can_edit' | 'can_download' | 'can_preview' | 'no_access';
export interface WebLinkSharedLinkPermissionsField {
    readonly canDownload: boolean;
    readonly canPreview: boolean;
    readonly canEdit: boolean;
}
export interface WebLinkSharedLinkField {
    readonly url: string;
    readonly downloadUrl?: string;
    readonly vanityUrl?: string;
    readonly vanityName?: string;
    readonly access?: WebLinkSharedLinkAccessField;
    readonly effectiveAccess: WebLinkSharedLinkEffectiveAccessField;
    readonly effectivePermission: WebLinkSharedLinkEffectivePermissionField;
    readonly unsharedAt?: DateTime;
    readonly isPasswordEnabled: boolean;
    readonly permissions?: WebLinkSharedLinkPermissionsField;
    readonly downloadCount: number;
    readonly previewCount: number;
}
export type WebLinkItemStatusField = 'active' | 'trashed' | 'deleted';
export declare class WebLink extends WebLinkMini {
    readonly parent?: FolderMini;
    readonly description?: string;
    readonly pathCollection?: WebLinkPathCollectionField;
    readonly createdAt?: DateTime;
    readonly modifiedAt?: DateTime;
    readonly trashedAt?: DateTime;
    readonly purgedAt?: DateTime;
    readonly createdBy?: UserMini;
    readonly modifiedBy?: UserMini;
    readonly ownedBy?: UserMini;
    readonly sharedLink?: WebLinkSharedLinkField;
    readonly itemStatus?: WebLinkItemStatusField;
    constructor(fields: WebLink);
}
export declare function serializeWebLinkPathCollectionField(val: WebLinkPathCollectionField): SerializedData;
export declare function deserializeWebLinkPathCollectionField(val: SerializedData): WebLinkPathCollectionField;
export declare function serializeWebLinkSharedLinkAccessField(val: WebLinkSharedLinkAccessField): SerializedData;
export declare function deserializeWebLinkSharedLinkAccessField(val: SerializedData): WebLinkSharedLinkAccessField;
export declare function serializeWebLinkSharedLinkEffectiveAccessField(val: WebLinkSharedLinkEffectiveAccessField): SerializedData;
export declare function deserializeWebLinkSharedLinkEffectiveAccessField(val: SerializedData): WebLinkSharedLinkEffectiveAccessField;
export declare function serializeWebLinkSharedLinkEffectivePermissionField(val: WebLinkSharedLinkEffectivePermissionField): SerializedData;
export declare function deserializeWebLinkSharedLinkEffectivePermissionField(val: SerializedData): WebLinkSharedLinkEffectivePermissionField;
export declare function serializeWebLinkSharedLinkPermissionsField(val: WebLinkSharedLinkPermissionsField): SerializedData;
export declare function deserializeWebLinkSharedLinkPermissionsField(val: SerializedData): WebLinkSharedLinkPermissionsField;
export declare function serializeWebLinkSharedLinkField(val: WebLinkSharedLinkField): SerializedData;
export declare function deserializeWebLinkSharedLinkField(val: SerializedData): WebLinkSharedLinkField;
export declare function serializeWebLinkItemStatusField(val: WebLinkItemStatusField): SerializedData;
export declare function deserializeWebLinkItemStatusField(val: SerializedData): WebLinkItemStatusField;
export declare function serializeWebLink(val: WebLink): SerializedData;
export declare function deserializeWebLink(val: SerializedData): WebLink;
