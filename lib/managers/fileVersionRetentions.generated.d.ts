import { FileVersionRetentions } from '../schemas/fileVersionRetentions.generated.js';
import { FileVersionRetention } from '../schemas/fileVersionRetention.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { CancellationToken } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export declare class GetFileVersionRetentionByIdOptionals {
    readonly headers: GetFileVersionRetentionByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetFileVersionRetentionByIdOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<GetFileVersionRetentionByIdOptionals, 'headers' | 'cancellationToken'>>);
}
export interface GetFileVersionRetentionByIdOptionalsInput {
    readonly headers?: GetFileVersionRetentionByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export type GetFileVersionRetentionsQueryParamsDispositionActionField = 'permanently_delete' | 'remove_retention';
export interface GetFileVersionRetentionsQueryParams {
    readonly fileId?: string;
    readonly fileVersionId?: string;
    readonly policyId?: string;
    readonly dispositionAction?: GetFileVersionRetentionsQueryParamsDispositionActionField;
    readonly dispositionBefore?: string;
    readonly dispositionAfter?: string;
    readonly limit?: number;
    readonly marker?: string;
}
export declare class GetFileVersionRetentionsHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetFileVersionRetentionsHeaders, 'extraHeaders'> & Partial<Pick<GetFileVersionRetentionsHeaders, 'extraHeaders'>>);
}
export interface GetFileVersionRetentionsHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class GetFileVersionRetentionByIdHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetFileVersionRetentionByIdHeaders, 'extraHeaders'> & Partial<Pick<GetFileVersionRetentionByIdHeaders, 'extraHeaders'>>);
}
export interface GetFileVersionRetentionByIdHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class FileVersionRetentionsManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<FileVersionRetentionsManager, 'networkSession' | 'getFileVersionRetentions' | 'getFileVersionRetentionById'> & Partial<Pick<FileVersionRetentionsManager, 'networkSession'>>);
    getFileVersionRetentions(queryParams?: GetFileVersionRetentionsQueryParams, headersInput?: GetFileVersionRetentionsHeadersInput, cancellationToken?: CancellationToken): Promise<FileVersionRetentions>;
    getFileVersionRetentionById(fileVersionRetentionId: string, optionalsInput?: GetFileVersionRetentionByIdOptionalsInput): Promise<FileVersionRetention>;
}
export interface FileVersionRetentionsManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
export declare function serializeGetFileVersionRetentionsQueryParamsDispositionActionField(val: GetFileVersionRetentionsQueryParamsDispositionActionField): SerializedData;
export declare function deserializeGetFileVersionRetentionsQueryParamsDispositionActionField(val: SerializedData): GetFileVersionRetentionsQueryParamsDispositionActionField;
