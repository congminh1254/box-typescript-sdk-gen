import { DateTime } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export type CollaborationAllowlistEntryTypeField = 'collaboration_whitelist_entry';
export type CollaborationAllowlistEntryDirectionField = 'inbound' | 'outbound' | 'both';
export type CollaborationAllowlistEntryEnterpriseTypeField = 'enterprise';
export interface CollaborationAllowlistEntryEnterpriseField {
    readonly id?: string;
    readonly type?: CollaborationAllowlistEntryEnterpriseTypeField;
    readonly name?: string;
}
export interface CollaborationAllowlistEntry {
    readonly id?: string;
    readonly type?: CollaborationAllowlistEntryTypeField;
    readonly domain?: string;
    readonly direction?: CollaborationAllowlistEntryDirectionField;
    readonly enterprise?: CollaborationAllowlistEntryEnterpriseField;
    readonly createdAt?: DateTime;
}
export declare function serializeCollaborationAllowlistEntryTypeField(val: CollaborationAllowlistEntryTypeField): SerializedData;
export declare function deserializeCollaborationAllowlistEntryTypeField(val: SerializedData): CollaborationAllowlistEntryTypeField;
export declare function serializeCollaborationAllowlistEntryDirectionField(val: CollaborationAllowlistEntryDirectionField): SerializedData;
export declare function deserializeCollaborationAllowlistEntryDirectionField(val: SerializedData): CollaborationAllowlistEntryDirectionField;
export declare function serializeCollaborationAllowlistEntryEnterpriseTypeField(val: CollaborationAllowlistEntryEnterpriseTypeField): SerializedData;
export declare function deserializeCollaborationAllowlistEntryEnterpriseTypeField(val: SerializedData): CollaborationAllowlistEntryEnterpriseTypeField;
export declare function serializeCollaborationAllowlistEntryEnterpriseField(val: CollaborationAllowlistEntryEnterpriseField): SerializedData;
export declare function deserializeCollaborationAllowlistEntryEnterpriseField(val: SerializedData): CollaborationAllowlistEntryEnterpriseField;
export declare function serializeCollaborationAllowlistEntry(val: CollaborationAllowlistEntry): SerializedData;
export declare function deserializeCollaborationAllowlistEntry(val: SerializedData): CollaborationAllowlistEntry;
