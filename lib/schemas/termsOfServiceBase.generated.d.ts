import { SerializedData } from '../serialization/json.js';
export type TermsOfServiceBaseTypeField = 'terms_of_service';
export declare class TermsOfServiceBase {
    readonly id: string;
    readonly type: TermsOfServiceBaseTypeField;
    constructor(fields: Omit<TermsOfServiceBase, 'type'> & Partial<Pick<TermsOfServiceBase, 'type'>>);
}
export interface TermsOfServiceBaseInput {
    readonly id: string;
    readonly type?: TermsOfServiceBaseTypeField;
}
export declare function serializeTermsOfServiceBaseTypeField(val: TermsOfServiceBaseTypeField): SerializedData;
export declare function deserializeTermsOfServiceBaseTypeField(val: SerializedData): TermsOfServiceBaseTypeField;
export declare function serializeTermsOfServiceBase(val: TermsOfServiceBase): SerializedData;
export declare function deserializeTermsOfServiceBase(val: SerializedData): TermsOfServiceBase;
export declare function serializeTermsOfServiceBaseInput(val: TermsOfServiceBaseInput): SerializedData;
export declare function deserializeTermsOfServiceBaseInput(val: SerializedData): TermsOfServiceBaseInput;
