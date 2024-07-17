import { FileFullOrFolderMiniOrWebLink } from './fileFullOrFolderMiniOrWebLink.generated.js';
import { SerializedData } from '../serialization/json.js';
export type ItemsOrderDirectionField = 'ASC' | 'DESC';
export interface ItemsOrderField {
    readonly by?: string;
    readonly direction?: ItemsOrderDirectionField;
}
export interface Items {
    readonly limit?: number;
    readonly nextMarker?: string;
    readonly prevMarker?: string;
    readonly totalCount?: number;
    readonly offset?: number;
    readonly order?: readonly ItemsOrderField[];
    readonly entries?: readonly FileFullOrFolderMiniOrWebLink[];
}
export declare function serializeItemsOrderDirectionField(val: ItemsOrderDirectionField): SerializedData;
export declare function deserializeItemsOrderDirectionField(val: SerializedData): ItemsOrderDirectionField;
export declare function serializeItemsOrderField(val: ItemsOrderField): SerializedData;
export declare function deserializeItemsOrderField(val: SerializedData): ItemsOrderField;
export declare function serializeItems(val: Items): SerializedData;
export declare function deserializeItems(val: SerializedData): Items;
