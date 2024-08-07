import { SerializedData } from '../serialization/json.js';
export type EnterpriseBaseTypeField = 'enterprise';
export interface EnterpriseBase {
    readonly id?: string;
    readonly type?: EnterpriseBaseTypeField;
}
export declare function serializeEnterpriseBaseTypeField(val: EnterpriseBaseTypeField): SerializedData;
export declare function deserializeEnterpriseBaseTypeField(val: SerializedData): EnterpriseBaseTypeField;
export declare function serializeEnterpriseBase(val: EnterpriseBase): SerializedData;
export declare function deserializeEnterpriseBase(val: SerializedData): EnterpriseBase;
