import { Items } from '../schemas/items.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { CancellationToken } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export type GetTrashedItemsQueryParamsDirectionField = 'ASC' | 'DESC';
export type GetTrashedItemsQueryParamsSortField = 'name' | 'date' | 'size';
export interface GetTrashedItemsQueryParams {
    readonly fields?: readonly string[];
    readonly limit?: number;
    readonly offset?: number;
    readonly usemarker?: boolean;
    readonly marker?: string;
    readonly direction?: GetTrashedItemsQueryParamsDirectionField;
    readonly sort?: GetTrashedItemsQueryParamsSortField;
}
export declare class GetTrashedItemsHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetTrashedItemsHeaders, 'extraHeaders'> & Partial<Pick<GetTrashedItemsHeaders, 'extraHeaders'>>);
}
export interface GetTrashedItemsHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class TrashedItemsManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<TrashedItemsManager, 'networkSession' | 'getTrashedItems'> & Partial<Pick<TrashedItemsManager, 'networkSession'>>);
    getTrashedItems(queryParams?: GetTrashedItemsQueryParams, headersInput?: GetTrashedItemsHeadersInput, cancellationToken?: CancellationToken): Promise<Items>;
}
export interface TrashedItemsManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
export declare function serializeGetTrashedItemsQueryParamsDirectionField(val: GetTrashedItemsQueryParamsDirectionField): SerializedData;
export declare function deserializeGetTrashedItemsQueryParamsDirectionField(val: SerializedData): GetTrashedItemsQueryParamsDirectionField;
export declare function serializeGetTrashedItemsQueryParamsSortField(val: GetTrashedItemsQueryParamsSortField): SerializedData;
export declare function deserializeGetTrashedItemsQueryParamsSortField(val: SerializedData): GetTrashedItemsQueryParamsSortField;
