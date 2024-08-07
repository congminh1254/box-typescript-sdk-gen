import { SerializedData } from '../serialization/json.js';
export type ShieldInformationBarrierBaseTypeField = 'shield_information_barrier';
export interface ShieldInformationBarrierBase {
    readonly id?: string;
    readonly type?: ShieldInformationBarrierBaseTypeField;
}
export declare function serializeShieldInformationBarrierBaseTypeField(val: ShieldInformationBarrierBaseTypeField): SerializedData;
export declare function deserializeShieldInformationBarrierBaseTypeField(val: SerializedData): ShieldInformationBarrierBaseTypeField;
export declare function serializeShieldInformationBarrierBase(val: ShieldInformationBarrierBase): SerializedData;
export declare function deserializeShieldInformationBarrierBase(val: SerializedData): ShieldInformationBarrierBase;
