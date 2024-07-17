import { Collection } from './collection.generated.js';
import { SerializedData } from '../serialization/json.js';
export type CollectionsOrderDirectionField = 'ASC' | 'DESC';
export interface CollectionsOrderField {
    readonly by?: string;
    readonly direction?: CollectionsOrderDirectionField;
}
export interface Collections {
    readonly totalCount?: number;
    readonly limit?: number;
    readonly offset?: number;
    readonly order?: readonly CollectionsOrderField[];
    readonly entries?: readonly Collection[];
}
export declare function serializeCollectionsOrderDirectionField(val: CollectionsOrderDirectionField): SerializedData;
export declare function deserializeCollectionsOrderDirectionField(val: SerializedData): CollectionsOrderDirectionField;
export declare function serializeCollectionsOrderField(val: CollectionsOrderField): SerializedData;
export declare function deserializeCollectionsOrderField(val: SerializedData): CollectionsOrderField;
export declare function serializeCollections(val: Collections): SerializedData;
export declare function deserializeCollections(val: SerializedData): Collections;
