import { SignRequestCreateSigner } from './signRequestCreateSigner.generated.js';
import { SignRequestSignerInput } from './signRequestSignerInput.generated.js';
import { DateTime } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export type SignRequestSignerSignerDecisionTypeField = 'signed' | 'declined';
export interface SignRequestSignerSignerDecisionField {
    readonly type?: SignRequestSignerSignerDecisionTypeField;
    readonly finalizedAt?: DateTime;
    readonly additionalInfo?: string;
}
export type SignRequestSigner = SignRequestCreateSigner & {
    readonly hasViewedDocument?: boolean;
    readonly signerDecision?: SignRequestSignerSignerDecisionField;
    readonly inputs?: readonly SignRequestSignerInput[];
    readonly embedUrl?: string;
    readonly iframeableEmbedUrl?: string;
};
export declare function serializeSignRequestSignerSignerDecisionTypeField(val: SignRequestSignerSignerDecisionTypeField): SerializedData;
export declare function deserializeSignRequestSignerSignerDecisionTypeField(val: SerializedData): SignRequestSignerSignerDecisionTypeField;
export declare function serializeSignRequestSignerSignerDecisionField(val: SignRequestSignerSignerDecisionField): SerializedData;
export declare function deserializeSignRequestSignerSignerDecisionField(val: SerializedData): SignRequestSignerSignerDecisionField;
export declare function serializeSignRequestSigner(val: SignRequestSigner): SerializedData;
export declare function deserializeSignRequestSigner(val: SerializedData): SignRequestSigner;
