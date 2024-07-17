import { FileVersionLegalHold } from '../schemas/fileVersionLegalHold.generated.js';
import { FileVersionLegalHolds } from '../schemas/fileVersionLegalHolds.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { CancellationToken } from '../internal/utils.js';
export declare class GetFileVersionLegalHoldByIdOptionals {
    readonly headers: GetFileVersionLegalHoldByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetFileVersionLegalHoldByIdOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<GetFileVersionLegalHoldByIdOptionals, 'headers' | 'cancellationToken'>>);
}
export interface GetFileVersionLegalHoldByIdOptionalsInput {
    readonly headers?: GetFileVersionLegalHoldByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetFileVersionLegalHoldsOptionals {
    readonly headers: GetFileVersionLegalHoldsHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetFileVersionLegalHoldsOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<GetFileVersionLegalHoldsOptionals, 'headers' | 'cancellationToken'>>);
}
export interface GetFileVersionLegalHoldsOptionalsInput {
    readonly headers?: GetFileVersionLegalHoldsHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetFileVersionLegalHoldByIdHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetFileVersionLegalHoldByIdHeaders, 'extraHeaders'> & Partial<Pick<GetFileVersionLegalHoldByIdHeaders, 'extraHeaders'>>);
}
export interface GetFileVersionLegalHoldByIdHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export interface GetFileVersionLegalHoldsQueryParams {
    readonly policyId: string;
    readonly marker?: string;
    readonly limit?: number;
}
export declare class GetFileVersionLegalHoldsHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetFileVersionLegalHoldsHeaders, 'extraHeaders'> & Partial<Pick<GetFileVersionLegalHoldsHeaders, 'extraHeaders'>>);
}
export interface GetFileVersionLegalHoldsHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class FileVersionLegalHoldsManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<FileVersionLegalHoldsManager, 'networkSession' | 'getFileVersionLegalHoldById' | 'getFileVersionLegalHolds'> & Partial<Pick<FileVersionLegalHoldsManager, 'networkSession'>>);
    getFileVersionLegalHoldById(fileVersionLegalHoldId: string, optionalsInput?: GetFileVersionLegalHoldByIdOptionalsInput): Promise<FileVersionLegalHold>;
    getFileVersionLegalHolds(queryParams: GetFileVersionLegalHoldsQueryParams, optionalsInput?: GetFileVersionLegalHoldsOptionalsInput): Promise<FileVersionLegalHolds>;
}
export interface FileVersionLegalHoldsManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
