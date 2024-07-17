import { FileFullOrFolderFullOrWebLink } from './fileFullOrFolderFullOrWebLink.generated.js';
import { DateTime } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export type RecentItemInteractionTypeField = 'item_preview' | 'item_upload' | 'item_comment' | 'item_open' | 'item_modify';
export interface RecentItem {
    readonly type?: string;
    readonly item?: FileFullOrFolderFullOrWebLink;
    readonly interactionType?: RecentItemInteractionTypeField;
    readonly interactedAt?: DateTime;
    readonly interactionSharedLink?: string;
}
export declare function serializeRecentItemInteractionTypeField(val: RecentItemInteractionTypeField): SerializedData;
export declare function deserializeRecentItemInteractionTypeField(val: SerializedData): RecentItemInteractionTypeField;
export declare function serializeRecentItem(val: RecentItem): SerializedData;
export declare function deserializeRecentItem(val: SerializedData): RecentItem;
