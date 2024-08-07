import { FileOrFolder } from './fileOrFolder.generated.js';
import { SerializedData } from '../serialization/json.js';
export interface MetadataQueryResults {
    readonly entries?: readonly FileOrFolder[];
    readonly limit?: number;
    readonly nextMarker?: string;
}
export declare function serializeMetadataQueryResults(val: MetadataQueryResults): SerializedData;
export declare function deserializeMetadataQueryResults(val: SerializedData): MetadataQueryResults;
