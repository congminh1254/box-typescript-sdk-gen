import { FileVersionRetention } from './fileVersionRetention.generated.js';
import { SerializedData } from '../serialization/json.js';
export interface FileVersionRetentions {
    readonly limit?: number;
    readonly nextMarker?: string;
    readonly prevMarker?: string;
    readonly entries?: readonly FileVersionRetention[];
}
export declare function serializeFileVersionRetentions(val: FileVersionRetentions): SerializedData;
export declare function deserializeFileVersionRetentions(val: SerializedData): FileVersionRetentions;
