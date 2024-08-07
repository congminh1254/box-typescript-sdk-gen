import { SerializedData } from '../serialization/json.js';
export type MetadataQueryIndexStatusField = 'building' | 'active' | 'disabled';
export type MetadataQueryIndexFieldsSortDirectionField = 'asc' | 'desc';
export interface MetadataQueryIndexFieldsField {
    readonly key?: string;
    readonly sortDirection?: MetadataQueryIndexFieldsSortDirectionField;
}
export interface MetadataQueryIndex {
    readonly id?: string;
    readonly type: string;
    readonly status: MetadataQueryIndexStatusField;
    readonly fields?: readonly MetadataQueryIndexFieldsField[];
}
export declare function serializeMetadataQueryIndexStatusField(val: MetadataQueryIndexStatusField): SerializedData;
export declare function deserializeMetadataQueryIndexStatusField(val: SerializedData): MetadataQueryIndexStatusField;
export declare function serializeMetadataQueryIndexFieldsSortDirectionField(val: MetadataQueryIndexFieldsSortDirectionField): SerializedData;
export declare function deserializeMetadataQueryIndexFieldsSortDirectionField(val: SerializedData): MetadataQueryIndexFieldsSortDirectionField;
export declare function serializeMetadataQueryIndexFieldsField(val: MetadataQueryIndexFieldsField): SerializedData;
export declare function deserializeMetadataQueryIndexFieldsField(val: SerializedData): MetadataQueryIndexFieldsField;
export declare function serializeMetadataQueryIndex(val: MetadataQueryIndex): SerializedData;
export declare function deserializeMetadataQueryIndex(val: SerializedData): MetadataQueryIndex;
