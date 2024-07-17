import { FileFullOrFolderFullOrWebLink } from './fileFullOrFolderFullOrWebLink.generated.js';
import { SerializedData } from '../serialization/json.js';
export type SearchResultsTypeField = 'search_results_items';
export declare class SearchResults {
    readonly totalCount?: number;
    readonly limit?: number;
    readonly offset?: number;
    readonly type: SearchResultsTypeField;
    readonly entries?: readonly FileFullOrFolderFullOrWebLink[];
    constructor(fields: Omit<SearchResults, 'type'> & Partial<Pick<SearchResults, 'type'>>);
}
export interface SearchResultsInput {
    readonly totalCount?: number;
    readonly limit?: number;
    readonly offset?: number;
    readonly type?: SearchResultsTypeField;
    readonly entries?: readonly FileFullOrFolderFullOrWebLink[];
}
export declare function serializeSearchResultsTypeField(val: SearchResultsTypeField): SerializedData;
export declare function deserializeSearchResultsTypeField(val: SerializedData): SearchResultsTypeField;
export declare function serializeSearchResults(val: SearchResults): SerializedData;
export declare function deserializeSearchResults(val: SerializedData): SearchResults;
export declare function serializeSearchResultsInput(val: SearchResultsInput): SerializedData;
export declare function deserializeSearchResultsInput(val: SerializedData): SearchResultsInput;
