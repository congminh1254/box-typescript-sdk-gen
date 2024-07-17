import { Collections } from '../schemas/collections.generated.js';
import { Items } from '../schemas/items.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { CancellationToken } from '../internal/utils.js';
export declare class GetCollectionItemsOptionals {
    readonly queryParams: GetCollectionItemsQueryParams;
    readonly headers: GetCollectionItemsHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetCollectionItemsOptionals, 'queryParams' | 'headers' | 'cancellationToken'> & Partial<Pick<GetCollectionItemsOptionals, 'queryParams' | 'headers' | 'cancellationToken'>>);
}
export interface GetCollectionItemsOptionalsInput {
    readonly queryParams?: GetCollectionItemsQueryParams;
    readonly headers?: GetCollectionItemsHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export interface GetCollectionsQueryParams {
    readonly fields?: readonly string[];
    readonly offset?: number;
    readonly limit?: number;
}
export declare class GetCollectionsHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetCollectionsHeaders, 'extraHeaders'> & Partial<Pick<GetCollectionsHeaders, 'extraHeaders'>>);
}
export interface GetCollectionsHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export interface GetCollectionItemsQueryParams {
    readonly fields?: readonly string[];
    readonly offset?: number;
    readonly limit?: number;
}
export declare class GetCollectionItemsHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetCollectionItemsHeaders, 'extraHeaders'> & Partial<Pick<GetCollectionItemsHeaders, 'extraHeaders'>>);
}
export interface GetCollectionItemsHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class CollectionsManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<CollectionsManager, 'networkSession' | 'getCollections' | 'getCollectionItems'> & Partial<Pick<CollectionsManager, 'networkSession'>>);
    getCollections(queryParams?: GetCollectionsQueryParams, headersInput?: GetCollectionsHeadersInput, cancellationToken?: CancellationToken): Promise<Collections>;
    getCollectionItems(collectionId: string, optionalsInput?: GetCollectionItemsOptionalsInput): Promise<Items>;
}
export interface CollectionsManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
