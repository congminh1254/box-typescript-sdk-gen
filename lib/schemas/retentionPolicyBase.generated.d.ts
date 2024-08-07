import { SerializedData } from '../serialization/json.js';
export type RetentionPolicyBaseTypeField = 'retention_policy';
export declare class RetentionPolicyBase {
    readonly id: string;
    readonly type: RetentionPolicyBaseTypeField;
    constructor(fields: Omit<RetentionPolicyBase, 'type'> & Partial<Pick<RetentionPolicyBase, 'type'>>);
}
export interface RetentionPolicyBaseInput {
    readonly id: string;
    readonly type?: RetentionPolicyBaseTypeField;
}
export declare function serializeRetentionPolicyBaseTypeField(val: RetentionPolicyBaseTypeField): SerializedData;
export declare function deserializeRetentionPolicyBaseTypeField(val: SerializedData): RetentionPolicyBaseTypeField;
export declare function serializeRetentionPolicyBase(val: RetentionPolicyBase): SerializedData;
export declare function deserializeRetentionPolicyBase(val: SerializedData): RetentionPolicyBase;
export declare function serializeRetentionPolicyBaseInput(val: RetentionPolicyBaseInput): SerializedData;
export declare function deserializeRetentionPolicyBaseInput(val: SerializedData): RetentionPolicyBaseInput;
