import { FileVersionLegalHold } from './fileVersionLegalHold.generated.js';
import { SerializedData } from '../serialization/json.js';
export interface FileVersionLegalHolds {
    readonly limit?: number;
    readonly nextMarker?: string;
    readonly prevMarker?: string;
    readonly entries?: readonly FileVersionLegalHold[];
}
export declare function serializeFileVersionLegalHolds(val: FileVersionLegalHolds): SerializedData;
export declare function deserializeFileVersionLegalHolds(val: SerializedData): FileVersionLegalHolds;
