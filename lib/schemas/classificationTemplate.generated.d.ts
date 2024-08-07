import { SerializedData } from '../serialization/json.js';
export type ClassificationTemplateTypeField = 'metadata_template';
export type ClassificationTemplateTemplateKeyField = 'securityClassification-6VMVochwUWo';
export type ClassificationTemplateDisplayNameField = 'Classification';
export type ClassificationTemplateFieldsTypeField = 'enum';
export type ClassificationTemplateFieldsKeyField = 'Box__Security__Classification__Key';
export type ClassificationTemplateFieldsDisplayNameField = 'Classification';
export interface ClassificationTemplateFieldsOptionsStaticConfigClassificationField {
    readonly classificationDefinition?: string;
    readonly colorId?: number;
}
export interface ClassificationTemplateFieldsOptionsStaticConfigField {
    readonly classification?: ClassificationTemplateFieldsOptionsStaticConfigClassificationField;
}
export interface ClassificationTemplateFieldsOptionsField {
    readonly id: string;
    readonly key: string;
    readonly staticConfig?: ClassificationTemplateFieldsOptionsStaticConfigField;
}
export declare class ClassificationTemplateFieldsField {
    readonly id: string;
    readonly type: ClassificationTemplateFieldsTypeField;
    readonly key: ClassificationTemplateFieldsKeyField;
    readonly displayName: ClassificationTemplateFieldsDisplayNameField;
    readonly hidden?: boolean;
    readonly options: readonly ClassificationTemplateFieldsOptionsField[];
    constructor(fields: Omit<ClassificationTemplateFieldsField, 'type' | 'key' | 'displayName'> & Partial<Pick<ClassificationTemplateFieldsField, 'type' | 'key' | 'displayName'>>);
}
export interface ClassificationTemplateFieldsFieldInput {
    readonly id: string;
    readonly type?: ClassificationTemplateFieldsTypeField;
    readonly key?: ClassificationTemplateFieldsKeyField;
    readonly displayName?: ClassificationTemplateFieldsDisplayNameField;
    readonly hidden?: boolean;
    readonly options: readonly ClassificationTemplateFieldsOptionsField[];
}
export declare class ClassificationTemplate {
    readonly id: string;
    readonly type: ClassificationTemplateTypeField;
    readonly scope: string;
    readonly templateKey: ClassificationTemplateTemplateKeyField;
    readonly displayName: ClassificationTemplateDisplayNameField;
    readonly hidden?: boolean;
    readonly copyInstanceOnItemCopy?: boolean;
    readonly fields: readonly ClassificationTemplateFieldsField[];
    constructor(fields: Omit<ClassificationTemplate, 'type' | 'templateKey' | 'displayName'> & Partial<Pick<ClassificationTemplate, 'type' | 'templateKey' | 'displayName'>>);
}
export interface ClassificationTemplateInput {
    readonly id: string;
    readonly type?: ClassificationTemplateTypeField;
    readonly scope: string;
    readonly templateKey?: ClassificationTemplateTemplateKeyField;
    readonly displayName?: ClassificationTemplateDisplayNameField;
    readonly hidden?: boolean;
    readonly copyInstanceOnItemCopy?: boolean;
    readonly fields: readonly ClassificationTemplateFieldsField[];
}
export declare function serializeClassificationTemplateTypeField(val: ClassificationTemplateTypeField): SerializedData;
export declare function deserializeClassificationTemplateTypeField(val: SerializedData): ClassificationTemplateTypeField;
export declare function serializeClassificationTemplateTemplateKeyField(val: ClassificationTemplateTemplateKeyField): SerializedData;
export declare function deserializeClassificationTemplateTemplateKeyField(val: SerializedData): ClassificationTemplateTemplateKeyField;
export declare function serializeClassificationTemplateDisplayNameField(val: ClassificationTemplateDisplayNameField): SerializedData;
export declare function deserializeClassificationTemplateDisplayNameField(val: SerializedData): ClassificationTemplateDisplayNameField;
export declare function serializeClassificationTemplateFieldsTypeField(val: ClassificationTemplateFieldsTypeField): SerializedData;
export declare function deserializeClassificationTemplateFieldsTypeField(val: SerializedData): ClassificationTemplateFieldsTypeField;
export declare function serializeClassificationTemplateFieldsKeyField(val: ClassificationTemplateFieldsKeyField): SerializedData;
export declare function deserializeClassificationTemplateFieldsKeyField(val: SerializedData): ClassificationTemplateFieldsKeyField;
export declare function serializeClassificationTemplateFieldsDisplayNameField(val: ClassificationTemplateFieldsDisplayNameField): SerializedData;
export declare function deserializeClassificationTemplateFieldsDisplayNameField(val: SerializedData): ClassificationTemplateFieldsDisplayNameField;
export declare function serializeClassificationTemplateFieldsOptionsStaticConfigClassificationField(val: ClassificationTemplateFieldsOptionsStaticConfigClassificationField): SerializedData;
export declare function deserializeClassificationTemplateFieldsOptionsStaticConfigClassificationField(val: SerializedData): ClassificationTemplateFieldsOptionsStaticConfigClassificationField;
export declare function serializeClassificationTemplateFieldsOptionsStaticConfigField(val: ClassificationTemplateFieldsOptionsStaticConfigField): SerializedData;
export declare function deserializeClassificationTemplateFieldsOptionsStaticConfigField(val: SerializedData): ClassificationTemplateFieldsOptionsStaticConfigField;
export declare function serializeClassificationTemplateFieldsOptionsField(val: ClassificationTemplateFieldsOptionsField): SerializedData;
export declare function deserializeClassificationTemplateFieldsOptionsField(val: SerializedData): ClassificationTemplateFieldsOptionsField;
export declare function serializeClassificationTemplateFieldsField(val: ClassificationTemplateFieldsField): SerializedData;
export declare function deserializeClassificationTemplateFieldsField(val: SerializedData): ClassificationTemplateFieldsField;
export declare function serializeClassificationTemplateFieldsFieldInput(val: ClassificationTemplateFieldsFieldInput): SerializedData;
export declare function deserializeClassificationTemplateFieldsFieldInput(val: SerializedData): ClassificationTemplateFieldsFieldInput;
export declare function serializeClassificationTemplate(val: ClassificationTemplate): SerializedData;
export declare function deserializeClassificationTemplate(val: SerializedData): ClassificationTemplate;
export declare function serializeClassificationTemplateInput(val: ClassificationTemplateInput): SerializedData;
export declare function deserializeClassificationTemplateInput(val: SerializedData): ClassificationTemplateInput;
