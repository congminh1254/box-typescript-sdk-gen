import { FolderMini } from './folderMini.generated.js';
import { FileMini } from './fileMini.generated.js';
import { TemplateSigner } from './templateSigner.generated.js';
import { SerializedData } from '../serialization/json.js';
export type SignTemplateTypeField = 'sign-template';
export type SignTemplateAdditionalInfoNonEditableField = 'email_subject' | 'email_message' | 'name' | 'days_valid' | 'signers' | 'source_files';
export type SignTemplateAdditionalInfoRequiredSignersField = 'email';
export interface SignTemplateAdditionalInfoRequiredField {
    readonly signers?: readonly (readonly SignTemplateAdditionalInfoRequiredSignersField[])[];
}
export interface SignTemplateAdditionalInfoField {
    readonly nonEditable?: readonly SignTemplateAdditionalInfoNonEditableField[];
    readonly required?: SignTemplateAdditionalInfoRequiredField;
}
export interface SignTemplateReadySignLinkField {
    readonly url?: string;
    readonly name?: string;
    readonly instructions?: string;
    readonly folderId?: string;
    readonly isNotificationDisabled?: boolean;
    readonly isActive?: boolean;
}
export interface SignTemplateCustomBrandingField {
    readonly companyName?: string;
    readonly logoUri?: string;
    readonly brandingColor?: string;
    readonly emailFooterText?: string;
}
export interface SignTemplate {
    readonly type?: SignTemplateTypeField;
    readonly id?: string;
    readonly name?: string;
    readonly emailSubject?: string;
    readonly emailMessage?: string;
    readonly daysValid?: number;
    readonly parentFolder?: FolderMini;
    readonly sourceFiles?: readonly FileMini[];
    readonly areFieldsLocked?: boolean;
    readonly areOptionsLocked?: boolean;
    readonly areRecipientsLocked?: boolean;
    readonly areEmailSettingsLocked?: boolean;
    readonly areFilesLocked?: boolean;
    readonly signers?: readonly TemplateSigner[];
    readonly additionalInfo?: SignTemplateAdditionalInfoField;
    readonly readySignLink?: SignTemplateReadySignLinkField;
    readonly customBranding?: SignTemplateCustomBrandingField;
}
export declare function serializeSignTemplateTypeField(val: SignTemplateTypeField): SerializedData;
export declare function deserializeSignTemplateTypeField(val: SerializedData): SignTemplateTypeField;
export declare function serializeSignTemplateAdditionalInfoNonEditableField(val: SignTemplateAdditionalInfoNonEditableField): SerializedData;
export declare function deserializeSignTemplateAdditionalInfoNonEditableField(val: SerializedData): SignTemplateAdditionalInfoNonEditableField;
export declare function serializeSignTemplateAdditionalInfoRequiredSignersField(val: SignTemplateAdditionalInfoRequiredSignersField): SerializedData;
export declare function deserializeSignTemplateAdditionalInfoRequiredSignersField(val: SerializedData): SignTemplateAdditionalInfoRequiredSignersField;
export declare function serializeSignTemplateAdditionalInfoRequiredField(val: SignTemplateAdditionalInfoRequiredField): SerializedData;
export declare function deserializeSignTemplateAdditionalInfoRequiredField(val: SerializedData): SignTemplateAdditionalInfoRequiredField;
export declare function serializeSignTemplateAdditionalInfoField(val: SignTemplateAdditionalInfoField): SerializedData;
export declare function deserializeSignTemplateAdditionalInfoField(val: SerializedData): SignTemplateAdditionalInfoField;
export declare function serializeSignTemplateReadySignLinkField(val: SignTemplateReadySignLinkField): SerializedData;
export declare function deserializeSignTemplateReadySignLinkField(val: SerializedData): SignTemplateReadySignLinkField;
export declare function serializeSignTemplateCustomBrandingField(val: SignTemplateCustomBrandingField): SerializedData;
export declare function deserializeSignTemplateCustomBrandingField(val: SerializedData): SignTemplateCustomBrandingField;
export declare function serializeSignTemplate(val: SignTemplate): SerializedData;
export declare function deserializeSignTemplate(val: SerializedData): SignTemplate;
