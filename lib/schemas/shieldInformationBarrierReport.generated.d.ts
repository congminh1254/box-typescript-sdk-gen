import { ShieldInformationBarrierReportBase } from './shieldInformationBarrierReportBase.generated.js';
import { ShieldInformationBarrierReference } from './shieldInformationBarrierReference.generated.js';
import { ShieldInformationBarrierReportDetails } from './shieldInformationBarrierReportDetails.generated.js';
import { UserBase } from './userBase.generated.js';
import { DateTime } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export type ShieldInformationBarrierReportStatusField = 'pending' | 'error' | 'done' | 'cancelled';
export type ShieldInformationBarrierReport = ShieldInformationBarrierReportBase & {
    readonly shieldInformationBarrier?: ShieldInformationBarrierReference;
    readonly status?: ShieldInformationBarrierReportStatusField;
    readonly details?: ShieldInformationBarrierReportDetails;
    readonly createdAt?: DateTime;
    readonly createdBy?: UserBase;
    readonly updatedAt?: DateTime;
};
export declare function serializeShieldInformationBarrierReportStatusField(val: ShieldInformationBarrierReportStatusField): SerializedData;
export declare function deserializeShieldInformationBarrierReportStatusField(val: SerializedData): ShieldInformationBarrierReportStatusField;
export declare function serializeShieldInformationBarrierReport(val: ShieldInformationBarrierReport): SerializedData;
export declare function deserializeShieldInformationBarrierReport(val: SerializedData): ShieldInformationBarrierReport;
