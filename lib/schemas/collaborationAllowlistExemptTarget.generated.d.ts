import { UserMini } from './userMini.generated.js';
import { DateTime } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export type CollaborationAllowlistExemptTargetTypeField = 'collaboration_whitelist_exempt_target';
export type CollaborationAllowlistExemptTargetEnterpriseTypeField = 'enterprise';
export interface CollaborationAllowlistExemptTargetEnterpriseField {
    readonly id?: string;
    readonly type?: CollaborationAllowlistExemptTargetEnterpriseTypeField;
    readonly name?: string;
}
export interface CollaborationAllowlistExemptTarget {
    readonly id?: string;
    readonly type?: CollaborationAllowlistExemptTargetTypeField;
    readonly enterprise?: CollaborationAllowlistExemptTargetEnterpriseField;
    readonly user?: UserMini;
    readonly createdAt?: DateTime;
    readonly modifiedAt?: DateTime;
}
export declare function serializeCollaborationAllowlistExemptTargetTypeField(val: CollaborationAllowlistExemptTargetTypeField): SerializedData;
export declare function deserializeCollaborationAllowlistExemptTargetTypeField(val: SerializedData): CollaborationAllowlistExemptTargetTypeField;
export declare function serializeCollaborationAllowlistExemptTargetEnterpriseTypeField(val: CollaborationAllowlistExemptTargetEnterpriseTypeField): SerializedData;
export declare function deserializeCollaborationAllowlistExemptTargetEnterpriseTypeField(val: SerializedData): CollaborationAllowlistExemptTargetEnterpriseTypeField;
export declare function serializeCollaborationAllowlistExemptTargetEnterpriseField(val: CollaborationAllowlistExemptTargetEnterpriseField): SerializedData;
export declare function deserializeCollaborationAllowlistExemptTargetEnterpriseField(val: SerializedData): CollaborationAllowlistExemptTargetEnterpriseField;
export declare function serializeCollaborationAllowlistExemptTarget(val: CollaborationAllowlistExemptTarget): SerializedData;
export declare function deserializeCollaborationAllowlistExemptTarget(val: SerializedData): CollaborationAllowlistExemptTarget;
