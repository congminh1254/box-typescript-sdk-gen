import { Metadata } from './metadata.generated.js';
import { SerializedData } from '../serialization/json.js';
export type MetadataFull = Metadata & {
    readonly canEdit?: boolean;
    readonly id?: string;
    readonly type?: string;
    readonly typeVersion?: number;
    readonly extraData?: {
        readonly [key: string]: any;
    };
};
export declare function serializeMetadataFull(val: MetadataFull): SerializedData;
export declare function deserializeMetadataFull(val: SerializedData): MetadataFull;
