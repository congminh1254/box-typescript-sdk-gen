import { Metadata } from './metadata.generated.js';
import { SerializedData } from '../serialization/json.js';
export interface Metadatas {
    readonly entries?: readonly Metadata[];
    readonly limit?: number;
}
export declare function serializeMetadatas(val: Metadatas): SerializedData;
export declare function deserializeMetadatas(val: SerializedData): Metadatas;
