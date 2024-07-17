import { SignRequestPrefillTag } from './signRequestPrefillTag.generated.js';
import { SerializedData } from '../serialization/json.js';
export type SignRequestSignerInputTypeField = 'signature' | 'date' | 'text' | 'checkbox' | 'radio' | 'dropdown';
export type SignRequestSignerInputContentTypeField = 'signature' | 'initial' | 'stamp' | 'date' | 'checkbox' | 'text' | 'full_name' | 'first_name' | 'last_name' | 'company' | 'title' | 'email' | 'attachment' | 'radio' | 'dropdown';
export type SignRequestSignerInput = SignRequestPrefillTag & {
    readonly type?: SignRequestSignerInputTypeField;
    readonly contentType?: SignRequestSignerInputContentTypeField;
    readonly pageIndex: number;
    readonly readOnly?: boolean;
};
export declare function serializeSignRequestSignerInputTypeField(val: SignRequestSignerInputTypeField): SerializedData;
export declare function deserializeSignRequestSignerInputTypeField(val: SerializedData): SignRequestSignerInputTypeField;
export declare function serializeSignRequestSignerInputContentTypeField(val: SignRequestSignerInputContentTypeField): SerializedData;
export declare function deserializeSignRequestSignerInputContentTypeField(val: SerializedData): SignRequestSignerInputContentTypeField;
export declare function serializeSignRequestSignerInput(val: SignRequestSignerInput): SerializedData;
export declare function deserializeSignRequestSignerInput(val: SerializedData): SignRequestSignerInput;
