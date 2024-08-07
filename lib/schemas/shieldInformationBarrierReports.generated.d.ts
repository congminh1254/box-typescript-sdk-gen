import { ShieldInformationBarrierReport } from './shieldInformationBarrierReport.generated.js';
import { SerializedData } from '../serialization/json.js';
export interface ShieldInformationBarrierReports {
    readonly limit?: number;
    readonly nextMarker?: string;
    readonly entries?: readonly ShieldInformationBarrierReport[];
}
export declare function serializeShieldInformationBarrierReports(val: ShieldInformationBarrierReports): SerializedData;
export declare function deserializeShieldInformationBarrierReports(val: SerializedData): ShieldInformationBarrierReports;
