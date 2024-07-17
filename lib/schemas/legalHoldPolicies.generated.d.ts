import { LegalHoldPolicy } from './legalHoldPolicy.generated.js';
import { SerializedData } from '../serialization/json.js';
export interface LegalHoldPolicies {
    readonly limit?: number;
    readonly nextMarker?: string;
    readonly prevMarker?: string;
    readonly entries?: readonly LegalHoldPolicy[];
}
export declare function serializeLegalHoldPolicies(val: LegalHoldPolicies): SerializedData;
export declare function deserializeLegalHoldPolicies(val: SerializedData): LegalHoldPolicies;
