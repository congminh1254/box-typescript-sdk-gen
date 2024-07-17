import { ShieldInformationBarrierSegmentMember } from './shieldInformationBarrierSegmentMember.generated.js';
import { SerializedData } from '../serialization/json.js';
export interface ShieldInformationBarrierSegmentMembers {
    readonly limit?: number;
    readonly nextMarker?: string;
    readonly entries?: readonly ShieldInformationBarrierSegmentMember[];
}
export declare function serializeShieldInformationBarrierSegmentMembers(val: ShieldInformationBarrierSegmentMembers): SerializedData;
export declare function deserializeShieldInformationBarrierSegmentMembers(val: SerializedData): ShieldInformationBarrierSegmentMembers;
