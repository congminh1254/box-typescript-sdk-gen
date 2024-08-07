import { ShieldInformationBarrierSegment } from './shieldInformationBarrierSegment.generated.js';
import { SerializedData } from '../serialization/json.js';
export interface ShieldInformationBarrierSegments {
    readonly limit?: number;
    readonly nextMarker?: string;
    readonly entries?: readonly ShieldInformationBarrierSegment[];
}
export declare function serializeShieldInformationBarrierSegments(val: ShieldInformationBarrierSegments): SerializedData;
export declare function deserializeShieldInformationBarrierSegments(val: SerializedData): ShieldInformationBarrierSegments;
