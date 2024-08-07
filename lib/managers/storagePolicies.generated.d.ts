import { StoragePolicies } from '../schemas/storagePolicies.generated.js';
import { StoragePolicy } from '../schemas/storagePolicy.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { CancellationToken } from '../internal/utils.js';
export declare class GetStoragePolicyByIdOptionals {
    readonly headers: GetStoragePolicyByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetStoragePolicyByIdOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<GetStoragePolicyByIdOptionals, 'headers' | 'cancellationToken'>>);
}
export interface GetStoragePolicyByIdOptionalsInput {
    readonly headers?: GetStoragePolicyByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export interface GetStoragePoliciesQueryParams {
    readonly fields?: readonly string[];
    readonly marker?: string;
    readonly limit?: number;
}
export declare class GetStoragePoliciesHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetStoragePoliciesHeaders, 'extraHeaders'> & Partial<Pick<GetStoragePoliciesHeaders, 'extraHeaders'>>);
}
export interface GetStoragePoliciesHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class GetStoragePolicyByIdHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetStoragePolicyByIdHeaders, 'extraHeaders'> & Partial<Pick<GetStoragePolicyByIdHeaders, 'extraHeaders'>>);
}
export interface GetStoragePolicyByIdHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class StoragePoliciesManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<StoragePoliciesManager, 'networkSession' | 'getStoragePolicies' | 'getStoragePolicyById'> & Partial<Pick<StoragePoliciesManager, 'networkSession'>>);
    getStoragePolicies(queryParams?: GetStoragePoliciesQueryParams, headersInput?: GetStoragePoliciesHeadersInput, cancellationToken?: CancellationToken): Promise<StoragePolicies>;
    getStoragePolicyById(storagePolicyId: string, optionalsInput?: GetStoragePolicyByIdOptionalsInput): Promise<StoragePolicy>;
}
export interface StoragePoliciesManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
