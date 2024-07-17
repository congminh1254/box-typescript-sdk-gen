import { ShieldInformationBarrierSegmentRestriction } from './shieldInformationBarrierSegmentRestriction.generated.js';
import { SerializedData } from '../serialization/json.js';
export interface ShieldInformationBarrierSegmentRestrictions {
    readonly limit?: number;
    readonly nextMarker?: string;
    readonly entries?: readonly ShieldInformationBarrierSegmentRestriction[];
}
export declare function serializeShieldInformationBarrierSegmentRestrictions(val: ShieldInformationBarrierSegmentRestrictions): SerializedData;
export declare function deserializeShieldInformationBarrierSegmentRestrictions(val: SerializedData): ShieldInformationBarrierSegmentRestrictions;
