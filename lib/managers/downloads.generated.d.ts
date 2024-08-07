import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { ByteStream } from '../internal/utils.js';
import { CancellationToken } from '../internal/utils.js';
export declare class DownloadFileOptionals {
    readonly queryParams: DownloadFileQueryParams;
    readonly headers: DownloadFileHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<DownloadFileOptionals, 'queryParams' | 'headers' | 'cancellationToken'> & Partial<Pick<DownloadFileOptionals, 'queryParams' | 'headers' | 'cancellationToken'>>);
}
export interface DownloadFileOptionalsInput {
    readonly queryParams?: DownloadFileQueryParams;
    readonly headers?: DownloadFileHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export interface DownloadFileQueryParams {
    readonly version?: string;
    readonly accessToken?: string;
}
export declare class DownloadFileHeaders {
    readonly range?: string;
    readonly boxapi?: string;
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<DownloadFileHeaders, 'extraHeaders'> & Partial<Pick<DownloadFileHeaders, 'extraHeaders'>>);
}
export interface DownloadFileHeadersInput {
    readonly range?: string;
    readonly boxapi?: string;
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class DownloadsManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<DownloadsManager, 'networkSession' | 'downloadFile'> & Partial<Pick<DownloadsManager, 'networkSession'>>);
    downloadFile(fileId: string, optionalsInput?: DownloadFileOptionalsInput): Promise<ByteStream>;
}
export interface DownloadsManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
