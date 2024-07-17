import { SerializedData } from '../serialization/json.js';
export interface MetadataBase {
    readonly parent?: string;
    readonly template?: string;
    readonly scope?: string;
    readonly version?: number;
}
export declare function serializeMetadataBase(val: MetadataBase): SerializedData;
export declare function deserializeMetadataBase(val: SerializedData): MetadataBase;
