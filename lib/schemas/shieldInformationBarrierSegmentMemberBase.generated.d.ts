import { SerializedData } from '../serialization/json.js';
export type ShieldInformationBarrierSegmentMemberBaseTypeField = 'shield_information_barrier_segment_member';
export interface ShieldInformationBarrierSegmentMemberBase {
    readonly id?: string;
    readonly type?: ShieldInformationBarrierSegmentMemberBaseTypeField;
}
export declare function serializeShieldInformationBarrierSegmentMemberBaseTypeField(val: ShieldInformationBarrierSegmentMemberBaseTypeField): SerializedData;
export declare function deserializeShieldInformationBarrierSegmentMemberBaseTypeField(val: SerializedData): ShieldInformationBarrierSegmentMemberBaseTypeField;
export declare function serializeShieldInformationBarrierSegmentMemberBase(val: ShieldInformationBarrierSegmentMemberBase): SerializedData;
export declare function deserializeShieldInformationBarrierSegmentMemberBase(val: SerializedData): ShieldInformationBarrierSegmentMemberBase;
