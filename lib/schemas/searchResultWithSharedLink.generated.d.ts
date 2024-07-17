import { FileFullOrFolderFullOrWebLink } from './fileFullOrFolderFullOrWebLink.generated.js';
import { SerializedData } from '../serialization/json.js';
export interface SearchResultWithSharedLink {
    readonly accessibleViaSharedLink?: string;
    readonly item?: FileFullOrFolderFullOrWebLink;
    readonly type?: string;
}
export declare function serializeSearchResultWithSharedLink(val: SearchResultWithSharedLink): SerializedData;
export declare function deserializeSearchResultWithSharedLink(val: SerializedData): SearchResultWithSharedLink;
