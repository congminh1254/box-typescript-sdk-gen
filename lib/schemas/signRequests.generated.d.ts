import { SignRequest } from './signRequest.generated.js';
import { SerializedData } from '../serialization/json.js';
export interface SignRequests {
    readonly limit?: number;
    readonly nextMarker?: string;
    readonly entries?: readonly SignRequest[];
}
export declare function serializeSignRequests(val: SignRequests): SerializedData;
export declare function deserializeSignRequests(val: SerializedData): SignRequests;
