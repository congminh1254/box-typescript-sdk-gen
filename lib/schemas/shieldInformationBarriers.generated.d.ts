import { ShieldInformationBarrier } from './shieldInformationBarrier.generated.js';
import { SerializedData } from '../serialization/json.js';
export interface ShieldInformationBarriers {
    readonly limit?: number;
    readonly nextMarker?: string;
    readonly entries?: readonly ShieldInformationBarrier[];
}
export declare function serializeShieldInformationBarriers(val: ShieldInformationBarriers): SerializedData;
export declare function deserializeShieldInformationBarriers(val: SerializedData): ShieldInformationBarriers;
