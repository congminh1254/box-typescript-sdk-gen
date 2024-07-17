import { RecentItems } from '../schemas/recentItems.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { CancellationToken } from '../internal/utils.js';
export interface GetRecentItemsQueryParams {
    readonly fields?: readonly string[];
    readonly limit?: number;
    readonly marker?: string;
}
export declare class GetRecentItemsHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetRecentItemsHeaders, 'extraHeaders'> & Partial<Pick<GetRecentItemsHeaders, 'extraHeaders'>>);
}
export interface GetRecentItemsHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class RecentItemsManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<RecentItemsManager, 'networkSession' | 'getRecentItems'> & Partial<Pick<RecentItemsManager, 'networkSession'>>);
    getRecentItems(queryParams?: GetRecentItemsQueryParams, headersInput?: GetRecentItemsHeadersInput, cancellationToken?: CancellationToken): Promise<RecentItems>;
}
export interface RecentItemsManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
