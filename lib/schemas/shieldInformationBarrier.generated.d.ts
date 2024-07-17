import { EnterpriseBase } from './enterpriseBase.generated.js';
import { UserBase } from './userBase.generated.js';
import { DateTime } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export type ShieldInformationBarrierTypeField = 'shield_information_barrier';
export type ShieldInformationBarrierStatusField = 'draft' | 'pending' | 'disabled' | 'enabled' | 'invalid';
export interface ShieldInformationBarrier {
    readonly id?: string;
    readonly type?: ShieldInformationBarrierTypeField;
    readonly enterprise?: EnterpriseBase;
    readonly status?: ShieldInformationBarrierStatusField;
    readonly createdAt?: DateTime;
    readonly createdBy?: UserBase;
    readonly updatedAt?: DateTime;
    readonly updatedBy?: UserBase;
    readonly enabledAt?: DateTime;
    readonly enabledBy?: UserBase;
}
export declare function serializeShieldInformationBarrierTypeField(val: ShieldInformationBarrierTypeField): SerializedData;
export declare function deserializeShieldInformationBarrierTypeField(val: SerializedData): ShieldInformationBarrierTypeField;
export declare function serializeShieldInformationBarrierStatusField(val: ShieldInformationBarrierStatusField): SerializedData;
export declare function deserializeShieldInformationBarrierStatusField(val: SerializedData): ShieldInformationBarrierStatusField;
export declare function serializeShieldInformationBarrier(val: ShieldInformationBarrier): SerializedData;
export declare function deserializeShieldInformationBarrier(val: SerializedData): ShieldInformationBarrier;
