import { SignRequestPrefillTag } from './signRequestPrefillTag.generated.js';
import { SerializedData } from '../serialization/json.js';
export type TemplateSignerInputTypeField = 'signature' | 'date' | 'text' | 'checkbox' | 'attachment' | 'radio' | 'dropdown';
export type TemplateSignerInputContentTypeField = 'signature' | 'initial' | 'stamp' | 'date' | 'checkbox' | 'text' | 'full_name' | 'first_name' | 'last_name' | 'company' | 'title' | 'email' | 'attachment' | 'radio' | 'dropdown';
export interface TemplateSignerInputCoordinatesField {
    readonly x?: number;
    readonly y?: number;
}
export interface TemplateSignerInputDimensionsField {
    readonly width?: number;
    readonly height?: number;
}
export type TemplateSignerInput = SignRequestPrefillTag & {
    readonly type?: TemplateSignerInputTypeField;
    readonly contentType?: TemplateSignerInputContentTypeField;
    readonly isRequired?: boolean;
    readonly pageIndex: number;
    readonly documentId?: string;
    readonly dropdownChoices?: readonly string[];
    readonly groupId?: string;
    readonly coordinates?: TemplateSignerInputCoordinatesField;
    readonly dimensions?: TemplateSignerInputDimensionsField;
    readonly label?: string;
    readonly readOnly?: boolean;
};
export declare function serializeTemplateSignerInputTypeField(val: TemplateSignerInputTypeField): SerializedData;
export declare function deserializeTemplateSignerInputTypeField(val: SerializedData): TemplateSignerInputTypeField;
export declare function serializeTemplateSignerInputContentTypeField(val: TemplateSignerInputContentTypeField): SerializedData;
export declare function deserializeTemplateSignerInputContentTypeField(val: SerializedData): TemplateSignerInputContentTypeField;
export declare function serializeTemplateSignerInputCoordinatesField(val: TemplateSignerInputCoordinatesField): SerializedData;
export declare function deserializeTemplateSignerInputCoordinatesField(val: SerializedData): TemplateSignerInputCoordinatesField;
export declare function serializeTemplateSignerInputDimensionsField(val: TemplateSignerInputDimensionsField): SerializedData;
export declare function deserializeTemplateSignerInputDimensionsField(val: SerializedData): TemplateSignerInputDimensionsField;
export declare function serializeTemplateSignerInput(val: TemplateSignerInput): SerializedData;
export declare function deserializeTemplateSignerInput(val: SerializedData): TemplateSignerInput;
