import { SerializedData } from '../serialization/json.js';
export type MetadataQueryOrderByDirectionField = 'ASC' | 'DESC';
export interface MetadataQueryOrderByField {
    readonly fieldKey?: string;
    readonly direction?: MetadataQueryOrderByDirectionField;
}
export interface MetadataQuery {
    readonly from: string;
    readonly query?: string;
    readonly queryParams?: {
        readonly [key: string]: string;
    };
    readonly ancestorFolderId: string;
    readonly orderBy?: readonly MetadataQueryOrderByField[];
    readonly limit?: number;
    readonly marker?: string;
    readonly fields?: readonly string[];
}
export declare function serializeMetadataQueryOrderByDirectionField(val: MetadataQueryOrderByDirectionField): SerializedData;
export declare function deserializeMetadataQueryOrderByDirectionField(val: SerializedData): MetadataQueryOrderByDirectionField;
export declare function serializeMetadataQueryOrderByField(val: MetadataQueryOrderByField): SerializedData;
export declare function deserializeMetadataQueryOrderByField(val: SerializedData): MetadataQueryOrderByField;
export declare function serializeMetadataQuery(val: MetadataQuery): SerializedData;
export declare function deserializeMetadataQuery(val: SerializedData): MetadataQuery;
