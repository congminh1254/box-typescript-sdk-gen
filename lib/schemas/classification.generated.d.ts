import { SerializedData } from '../serialization/json.js';
export type ClassificationTemplateField = 'securityClassification-6VMVochwUWo';
export interface Classification {
    readonly boxSecurityClassificationKey?: string;
    readonly parent?: string;
    readonly template?: ClassificationTemplateField;
    readonly scope?: string;
    readonly version?: number;
    readonly type?: string;
    readonly typeVersion?: number;
    readonly canEdit?: boolean;
}
export declare function serializeClassificationTemplateField(val: ClassificationTemplateField): SerializedData;
export declare function deserializeClassificationTemplateField(val: SerializedData): ClassificationTemplateField;
export declare function serializeClassification(val: Classification): SerializedData;
export declare function deserializeClassification(val: SerializedData): Classification;
