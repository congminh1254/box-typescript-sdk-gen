import { MetadataQueryResults } from '../schemas/metadataQueryResults.generated.js';
import { MetadataQuery } from '../schemas/metadataQuery.generated.js';
import { SearchResultsOrSearchResultsWithSharedLinks } from '../schemas/searchResultsOrSearchResultsWithSharedLinks.generated.js';
import { MetadataFilter } from '../schemas/metadataFilter.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { CancellationToken } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export declare class SearchByMetadataQueryOptionals {
    readonly headers: SearchByMetadataQueryHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<SearchByMetadataQueryOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<SearchByMetadataQueryOptionals, 'headers' | 'cancellationToken'>>);
}
export interface SearchByMetadataQueryOptionalsInput {
    readonly headers?: SearchByMetadataQueryHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class SearchByMetadataQueryHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<SearchByMetadataQueryHeaders, 'extraHeaders'> & Partial<Pick<SearchByMetadataQueryHeaders, 'extraHeaders'>>);
}
export interface SearchByMetadataQueryHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export type SearchForContentQueryParamsScopeField = 'user_content' | 'enterprise_content';
export type SearchForContentQueryParamsContentTypesField = 'name' | 'description' | 'file_content' | 'comments' | 'tag';
export type SearchForContentQueryParamsTypeField = 'file' | 'folder' | 'web_link';
export type SearchForContentQueryParamsTrashContentField = 'non_trashed_only' | 'trashed_only' | 'all_items';
export type SearchForContentQueryParamsSortField = 'modified_at' | 'relevance';
export type SearchForContentQueryParamsDirectionField = 'DESC' | 'ASC';
export interface SearchForContentQueryParams {
    readonly query?: string;
    readonly scope?: SearchForContentQueryParamsScopeField;
    readonly fileExtensions?: readonly string[];
    readonly createdAtRange?: readonly string[];
    readonly updatedAtRange?: readonly string[];
    readonly sizeRange?: readonly number[];
    readonly ownerUserIds?: readonly string[];
    readonly recentUpdaterUserIds?: readonly string[];
    readonly ancestorFolderIds?: readonly string[];
    readonly contentTypes?: readonly SearchForContentQueryParamsContentTypesField[];
    readonly type?: SearchForContentQueryParamsTypeField;
    readonly trashContent?: SearchForContentQueryParamsTrashContentField;
    readonly mdfilters?: readonly MetadataFilter[];
    readonly sort?: SearchForContentQueryParamsSortField;
    readonly direction?: SearchForContentQueryParamsDirectionField;
    readonly limit?: number;
    readonly includeRecentSharedLinks?: boolean;
    readonly fields?: readonly string[];
    readonly offset?: number;
    readonly deletedUserIds?: readonly string[];
    readonly deletedAtRange?: readonly string[];
}
export declare class SearchForContentHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<SearchForContentHeaders, 'extraHeaders'> & Partial<Pick<SearchForContentHeaders, 'extraHeaders'>>);
}
export interface SearchForContentHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class SearchManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<SearchManager, 'networkSession' | 'searchByMetadataQuery' | 'searchForContent'> & Partial<Pick<SearchManager, 'networkSession'>>);
    searchByMetadataQuery(requestBody: MetadataQuery, optionalsInput?: SearchByMetadataQueryOptionalsInput): Promise<MetadataQueryResults>;
    searchForContent(queryParams?: SearchForContentQueryParams, headersInput?: SearchForContentHeadersInput, cancellationToken?: CancellationToken): Promise<SearchResultsOrSearchResultsWithSharedLinks>;
}
export interface SearchManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
export declare function serializeSearchForContentQueryParamsScopeField(val: SearchForContentQueryParamsScopeField): SerializedData;
export declare function deserializeSearchForContentQueryParamsScopeField(val: SerializedData): SearchForContentQueryParamsScopeField;
export declare function serializeSearchForContentQueryParamsContentTypesField(val: SearchForContentQueryParamsContentTypesField): SerializedData;
export declare function deserializeSearchForContentQueryParamsContentTypesField(val: SerializedData): SearchForContentQueryParamsContentTypesField;
export declare function serializeSearchForContentQueryParamsTypeField(val: SearchForContentQueryParamsTypeField): SerializedData;
export declare function deserializeSearchForContentQueryParamsTypeField(val: SerializedData): SearchForContentQueryParamsTypeField;
export declare function serializeSearchForContentQueryParamsTrashContentField(val: SearchForContentQueryParamsTrashContentField): SerializedData;
export declare function deserializeSearchForContentQueryParamsTrashContentField(val: SerializedData): SearchForContentQueryParamsTrashContentField;
export declare function serializeSearchForContentQueryParamsSortField(val: SearchForContentQueryParamsSortField): SerializedData;
export declare function deserializeSearchForContentQueryParamsSortField(val: SerializedData): SearchForContentQueryParamsSortField;
export declare function serializeSearchForContentQueryParamsDirectionField(val: SearchForContentQueryParamsDirectionField): SerializedData;
export declare function deserializeSearchForContentQueryParamsDirectionField(val: SerializedData): SearchForContentQueryParamsDirectionField;
