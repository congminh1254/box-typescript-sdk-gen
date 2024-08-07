import { FileOrFolderOrWebLink } from './fileOrFolderOrWebLink.generated.js';
import { GroupMiniOrUserCollaborations } from './groupMiniOrUserCollaborations.generated.js';
import { UserCollaborations } from './userCollaborations.generated.js';
import { TermsOfServiceBase } from './termsOfServiceBase.generated.js';
import { DateTime } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export type CollaborationTypeField = 'collaboration';
export type CollaborationRoleField = 'editor' | 'viewer' | 'previewer' | 'uploader' | 'previewer uploader' | 'viewer uploader' | 'co-owner' | 'owner';
export type CollaborationStatusField = 'accepted' | 'pending' | 'rejected';
export interface CollaborationAcceptanceRequirementsStatusTermsOfServiceRequirementField {
    readonly isAccepted?: boolean;
    readonly termsOfService?: TermsOfServiceBase;
}
export interface CollaborationAcceptanceRequirementsStatusStrongPasswordRequirementField {
    readonly enterpriseHasStrongPasswordRequiredForExternalUsers?: boolean;
    readonly userHasStrongPassword?: boolean;
}
export interface CollaborationAcceptanceRequirementsStatusTwoFactorAuthenticationRequirementField {
    readonly enterpriseHasTwoFactorAuthEnabled?: boolean;
    readonly userHasTwoFactorAuthenticationEnabled?: boolean;
}
export interface CollaborationAcceptanceRequirementsStatusField {
    readonly termsOfServiceRequirement?: CollaborationAcceptanceRequirementsStatusTermsOfServiceRequirementField;
    readonly strongPasswordRequirement?: CollaborationAcceptanceRequirementsStatusStrongPasswordRequirementField;
    readonly twoFactorAuthenticationRequirement?: CollaborationAcceptanceRequirementsStatusTwoFactorAuthenticationRequirementField;
}
export declare class Collaboration {
    readonly id: string;
    readonly type: CollaborationTypeField;
    readonly item?: FileOrFolderOrWebLink;
    readonly accessibleBy?: GroupMiniOrUserCollaborations;
    readonly inviteEmail?: string;
    readonly role?: CollaborationRoleField;
    readonly expiresAt?: DateTime;
    readonly isAccessOnly?: boolean;
    readonly status?: CollaborationStatusField;
    readonly acknowledgedAt?: DateTime;
    readonly createdBy?: UserCollaborations;
    readonly createdAt?: DateTime;
    readonly modifiedAt?: DateTime;
    readonly acceptanceRequirementsStatus?: CollaborationAcceptanceRequirementsStatusField;
    constructor(fields: Omit<Collaboration, 'type'> & Partial<Pick<Collaboration, 'type'>>);
}
export interface CollaborationInput {
    readonly id: string;
    readonly type?: CollaborationTypeField;
    readonly item?: FileOrFolderOrWebLink;
    readonly accessibleBy?: GroupMiniOrUserCollaborations;
    readonly inviteEmail?: string;
    readonly role?: CollaborationRoleField;
    readonly expiresAt?: DateTime;
    readonly isAccessOnly?: boolean;
    readonly status?: CollaborationStatusField;
    readonly acknowledgedAt?: DateTime;
    readonly createdBy?: UserCollaborations;
    readonly createdAt?: DateTime;
    readonly modifiedAt?: DateTime;
    readonly acceptanceRequirementsStatus?: CollaborationAcceptanceRequirementsStatusField;
}
export declare function serializeCollaborationTypeField(val: CollaborationTypeField): SerializedData;
export declare function deserializeCollaborationTypeField(val: SerializedData): CollaborationTypeField;
export declare function serializeCollaborationRoleField(val: CollaborationRoleField): SerializedData;
export declare function deserializeCollaborationRoleField(val: SerializedData): CollaborationRoleField;
export declare function serializeCollaborationStatusField(val: CollaborationStatusField): SerializedData;
export declare function deserializeCollaborationStatusField(val: SerializedData): CollaborationStatusField;
export declare function serializeCollaborationAcceptanceRequirementsStatusTermsOfServiceRequirementField(val: CollaborationAcceptanceRequirementsStatusTermsOfServiceRequirementField): SerializedData;
export declare function deserializeCollaborationAcceptanceRequirementsStatusTermsOfServiceRequirementField(val: SerializedData): CollaborationAcceptanceRequirementsStatusTermsOfServiceRequirementField;
export declare function serializeCollaborationAcceptanceRequirementsStatusStrongPasswordRequirementField(val: CollaborationAcceptanceRequirementsStatusStrongPasswordRequirementField): SerializedData;
export declare function deserializeCollaborationAcceptanceRequirementsStatusStrongPasswordRequirementField(val: SerializedData): CollaborationAcceptanceRequirementsStatusStrongPasswordRequirementField;
export declare function serializeCollaborationAcceptanceRequirementsStatusTwoFactorAuthenticationRequirementField(val: CollaborationAcceptanceRequirementsStatusTwoFactorAuthenticationRequirementField): SerializedData;
export declare function deserializeCollaborationAcceptanceRequirementsStatusTwoFactorAuthenticationRequirementField(val: SerializedData): CollaborationAcceptanceRequirementsStatusTwoFactorAuthenticationRequirementField;
export declare function serializeCollaborationAcceptanceRequirementsStatusField(val: CollaborationAcceptanceRequirementsStatusField): SerializedData;
export declare function deserializeCollaborationAcceptanceRequirementsStatusField(val: SerializedData): CollaborationAcceptanceRequirementsStatusField;
export declare function serializeCollaboration(val: Collaboration): SerializedData;
export declare function deserializeCollaboration(val: SerializedData): Collaboration;
export declare function serializeCollaborationInput(val: CollaborationInput): SerializedData;
export declare function deserializeCollaborationInput(val: SerializedData): CollaborationInput;
