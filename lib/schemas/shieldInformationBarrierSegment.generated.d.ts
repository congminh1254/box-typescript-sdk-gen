import { ShieldInformationBarrierBase } from './shieldInformationBarrierBase.generated.js';
import { UserBase } from './userBase.generated.js';
import { DateTime } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export type ShieldInformationBarrierSegmentTypeField = 'shield_information_barrier_segment';
export interface ShieldInformationBarrierSegment {
    readonly id?: string;
    readonly type?: ShieldInformationBarrierSegmentTypeField;
    readonly shieldInformationBarrier?: ShieldInformationBarrierBase;
    readonly name?: string;
    readonly description?: string;
    readonly createdAt?: DateTime;
    readonly createdBy?: UserBase;
    readonly updatedAt?: DateTime;
    readonly updatedBy?: UserBase;
}
export declare function serializeShieldInformationBarrierSegmentTypeField(val: ShieldInformationBarrierSegmentTypeField): SerializedData;
export declare function deserializeShieldInformationBarrierSegmentTypeField(val: SerializedData): ShieldInformationBarrierSegmentTypeField;
export declare function serializeShieldInformationBarrierSegment(val: ShieldInformationBarrierSegment): SerializedData;
export declare function deserializeShieldInformationBarrierSegment(val: SerializedData): ShieldInformationBarrierSegment;
