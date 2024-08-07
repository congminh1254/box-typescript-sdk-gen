import { ShieldInformationBarrierSegmentMemberMini } from './shieldInformationBarrierSegmentMemberMini.generated.js';
import { ShieldInformationBarrierBase } from './shieldInformationBarrierBase.generated.js';
import { UserBase } from './userBase.generated.js';
import { DateTime } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export type ShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentTypeField = 'shield_information_barrier_segment';
export interface ShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentField {
    readonly id?: string;
    readonly type?: ShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentTypeField;
}
export type ShieldInformationBarrierSegmentMember = ShieldInformationBarrierSegmentMemberMini & {
    readonly shieldInformationBarrier?: ShieldInformationBarrierBase;
    readonly shieldInformationBarrierSegment?: ShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentField;
    readonly createdAt?: DateTime;
    readonly createdBy?: UserBase;
    readonly updatedAt?: DateTime;
    readonly updatedBy?: UserBase;
};
export declare function serializeShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentTypeField(val: ShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentTypeField): SerializedData;
export declare function deserializeShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentTypeField(val: SerializedData): ShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentTypeField;
export declare function serializeShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentField(val: ShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentField): SerializedData;
export declare function deserializeShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentField(val: SerializedData): ShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentField;
export declare function serializeShieldInformationBarrierSegmentMember(val: ShieldInformationBarrierSegmentMember): SerializedData;
export declare function deserializeShieldInformationBarrierSegmentMember(val: SerializedData): ShieldInformationBarrierSegmentMember;
