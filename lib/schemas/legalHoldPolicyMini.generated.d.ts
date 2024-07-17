import { SerializedData } from '../serialization/json.js';
export type LegalHoldPolicyMiniTypeField = 'legal_hold_policy';
export declare class LegalHoldPolicyMini {
    readonly id: string;
    readonly type: LegalHoldPolicyMiniTypeField;
    constructor(fields: Omit<LegalHoldPolicyMini, 'type'> & Partial<Pick<LegalHoldPolicyMini, 'type'>>);
}
export interface LegalHoldPolicyMiniInput {
    readonly id: string;
    readonly type?: LegalHoldPolicyMiniTypeField;
}
export declare function serializeLegalHoldPolicyMiniTypeField(val: LegalHoldPolicyMiniTypeField): SerializedData;
export declare function deserializeLegalHoldPolicyMiniTypeField(val: SerializedData): LegalHoldPolicyMiniTypeField;
export declare function serializeLegalHoldPolicyMini(val: LegalHoldPolicyMini): SerializedData;
export declare function deserializeLegalHoldPolicyMini(val: SerializedData): LegalHoldPolicyMini;
export declare function serializeLegalHoldPolicyMiniInput(val: LegalHoldPolicyMiniInput): SerializedData;
export declare function deserializeLegalHoldPolicyMiniInput(val: SerializedData): LegalHoldPolicyMiniInput;
