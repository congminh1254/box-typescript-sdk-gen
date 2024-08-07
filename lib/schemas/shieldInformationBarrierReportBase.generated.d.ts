import { SerializedData } from '../serialization/json.js';
export type ShieldInformationBarrierReportBaseTypeField = 'shield_information_barrier_report';
export interface ShieldInformationBarrierReportBase {
    readonly id?: string;
    readonly type?: ShieldInformationBarrierReportBaseTypeField;
}
export declare function serializeShieldInformationBarrierReportBaseTypeField(val: ShieldInformationBarrierReportBaseTypeField): SerializedData;
export declare function deserializeShieldInformationBarrierReportBaseTypeField(val: SerializedData): ShieldInformationBarrierReportBaseTypeField;
export declare function serializeShieldInformationBarrierReportBase(val: ShieldInformationBarrierReportBase): SerializedData;
export declare function deserializeShieldInformationBarrierReportBase(val: SerializedData): ShieldInformationBarrierReportBase;
