import { SerializedData } from '../serialization/json.js';
export type MetadataTemplateTypeField = 'metadata_template';
export type MetadataTemplateFieldsTypeField = 'string' | 'float' | 'date' | 'enum' | 'multiSelect' | 'integer';
export interface MetadataTemplateFieldsOptionsField {
    readonly key: string;
    readonly id?: string;
}
export interface MetadataTemplateFieldsField {
    readonly type: MetadataTemplateFieldsTypeField;
    readonly key: string;
    readonly displayName: string;
    readonly description?: string;
    readonly hidden?: boolean;
    readonly options?: readonly MetadataTemplateFieldsOptionsField[];
    readonly id?: string;
}
export declare class MetadataTemplate {
    readonly id: string;
    readonly type: MetadataTemplateTypeField;
    readonly scope?: string;
    readonly templateKey?: string;
    readonly displayName?: string;
    readonly hidden?: boolean;
    readonly fields?: readonly MetadataTemplateFieldsField[];
    readonly copyInstanceOnItemCopy?: boolean;
    constructor(fields: Omit<MetadataTemplate, 'type'> & Partial<Pick<MetadataTemplate, 'type'>>);
}
export interface MetadataTemplateInput {
    readonly id: string;
    readonly type?: MetadataTemplateTypeField;
    readonly scope?: string;
    readonly templateKey?: string;
    readonly displayName?: string;
    readonly hidden?: boolean;
    readonly fields?: readonly MetadataTemplateFieldsField[];
    readonly copyInstanceOnItemCopy?: boolean;
}
export declare function serializeMetadataTemplateTypeField(val: MetadataTemplateTypeField): SerializedData;
export declare function deserializeMetadataTemplateTypeField(val: SerializedData): MetadataTemplateTypeField;
export declare function serializeMetadataTemplateFieldsTypeField(val: MetadataTemplateFieldsTypeField): SerializedData;
export declare function deserializeMetadataTemplateFieldsTypeField(val: SerializedData): MetadataTemplateFieldsTypeField;
export declare function serializeMetadataTemplateFieldsOptionsField(val: MetadataTemplateFieldsOptionsField): SerializedData;
export declare function deserializeMetadataTemplateFieldsOptionsField(val: SerializedData): MetadataTemplateFieldsOptionsField;
export declare function serializeMetadataTemplateFieldsField(val: MetadataTemplateFieldsField): SerializedData;
export declare function deserializeMetadataTemplateFieldsField(val: SerializedData): MetadataTemplateFieldsField;
export declare function serializeMetadataTemplate(val: MetadataTemplate): SerializedData;
export declare function deserializeMetadataTemplate(val: SerializedData): MetadataTemplate;
export declare function serializeMetadataTemplateInput(val: MetadataTemplateInput): SerializedData;
export declare function deserializeMetadataTemplateInput(val: SerializedData): MetadataTemplateInput;
