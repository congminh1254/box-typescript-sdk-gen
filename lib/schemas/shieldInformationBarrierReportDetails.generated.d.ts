import { SerializedData } from '../serialization/json.js';
export interface ShieldInformationBarrierReportDetailsDetailsField {
    readonly folderId?: string;
}
export interface ShieldInformationBarrierReportDetails {
    readonly details?: ShieldInformationBarrierReportDetailsDetailsField;
}
export declare function serializeShieldInformationBarrierReportDetailsDetailsField(val: ShieldInformationBarrierReportDetailsDetailsField): SerializedData;
export declare function deserializeShieldInformationBarrierReportDetailsDetailsField(val: SerializedData): ShieldInformationBarrierReportDetailsDetailsField;
export declare function serializeShieldInformationBarrierReportDetails(val: ShieldInformationBarrierReportDetails): SerializedData;
export declare function deserializeShieldInformationBarrierReportDetails(val: SerializedData): ShieldInformationBarrierReportDetails;
