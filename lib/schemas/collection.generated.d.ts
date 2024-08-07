import { SerializedData } from '../serialization/json.js';
export type CollectionTypeField = 'collection';
export type CollectionNameField = 'Favorites';
export type CollectionCollectionTypeField = 'favorites';
export interface Collection {
    readonly id?: string;
    readonly type?: CollectionTypeField;
    readonly name?: CollectionNameField;
    readonly collectionType?: CollectionCollectionTypeField;
}
export declare function serializeCollectionTypeField(val: CollectionTypeField): SerializedData;
export declare function deserializeCollectionTypeField(val: SerializedData): CollectionTypeField;
export declare function serializeCollectionNameField(val: CollectionNameField): SerializedData;
export declare function deserializeCollectionNameField(val: SerializedData): CollectionNameField;
export declare function serializeCollectionCollectionTypeField(val: CollectionCollectionTypeField): SerializedData;
export declare function deserializeCollectionCollectionTypeField(val: SerializedData): CollectionCollectionTypeField;
export declare function serializeCollection(val: Collection): SerializedData;
export declare function deserializeCollection(val: SerializedData): Collection;
