import { StoragePolicy } from './storagePolicy.generated.js';
import { SerializedData } from '../serialization/json.js';
export interface StoragePolicies {
    readonly limit?: number;
    readonly nextMarker?: string;
    readonly prevMarker?: string;
    readonly entries?: readonly StoragePolicy[];
}
export declare function serializeStoragePolicies(val: StoragePolicies): SerializedData;
export declare function deserializeStoragePolicies(val: SerializedData): StoragePolicies;
