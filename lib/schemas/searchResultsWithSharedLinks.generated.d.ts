import { SearchResultWithSharedLink } from './searchResultWithSharedLink.generated.js';
import { SerializedData } from '../serialization/json.js';
export type SearchResultsWithSharedLinksTypeField = 'search_results_with_shared_links';
export declare class SearchResultsWithSharedLinks {
    readonly totalCount?: number;
    readonly limit?: number;
    readonly offset?: number;
    readonly type: SearchResultsWithSharedLinksTypeField;
    readonly entries?: readonly SearchResultWithSharedLink[];
    constructor(fields: Omit<SearchResultsWithSharedLinks, 'type'> & Partial<Pick<SearchResultsWithSharedLinks, 'type'>>);
}
export interface SearchResultsWithSharedLinksInput {
    readonly totalCount?: number;
    readonly limit?: number;
    readonly offset?: number;
    readonly type?: SearchResultsWithSharedLinksTypeField;
    readonly entries?: readonly SearchResultWithSharedLink[];
}
export declare function serializeSearchResultsWithSharedLinksTypeField(val: SearchResultsWithSharedLinksTypeField): SerializedData;
export declare function deserializeSearchResultsWithSharedLinksTypeField(val: SerializedData): SearchResultsWithSharedLinksTypeField;
export declare function serializeSearchResultsWithSharedLinks(val: SearchResultsWithSharedLinks): SerializedData;
export declare function deserializeSearchResultsWithSharedLinks(val: SerializedData): SearchResultsWithSharedLinks;
export declare function serializeSearchResultsWithSharedLinksInput(val: SearchResultsWithSharedLinksInput): SerializedData;
export declare function deserializeSearchResultsWithSharedLinksInput(val: SerializedData): SearchResultsWithSharedLinksInput;
