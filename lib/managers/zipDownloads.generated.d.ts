import { ZipDownload } from '../schemas/zipDownload.generated.js';
import { ZipDownloadRequest } from '../schemas/zipDownloadRequest.generated.js';
import { ZipDownloadStatus } from '../schemas/zipDownloadStatus.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { ByteStream } from '../internal/utils.js';
import { CancellationToken } from '../internal/utils.js';
export declare class CreateZipDownloadOptionals {
    readonly headers: CreateZipDownloadHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<CreateZipDownloadOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<CreateZipDownloadOptionals, 'headers' | 'cancellationToken'>>);
}
export interface CreateZipDownloadOptionalsInput {
    readonly headers?: CreateZipDownloadHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetZipDownloadContentOptionals {
    readonly headers: GetZipDownloadContentHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetZipDownloadContentOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<GetZipDownloadContentOptionals, 'headers' | 'cancellationToken'>>);
}
export interface GetZipDownloadContentOptionalsInput {
    readonly headers?: GetZipDownloadContentHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetZipDownloadStatusOptionals {
    readonly headers: GetZipDownloadStatusHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetZipDownloadStatusOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<GetZipDownloadStatusOptionals, 'headers' | 'cancellationToken'>>);
}
export interface GetZipDownloadStatusOptionalsInput {
    readonly headers?: GetZipDownloadStatusHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class DownloadZipOptionals {
    readonly headers: DownloadZipHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<DownloadZipOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<DownloadZipOptionals, 'headers' | 'cancellationToken'>>);
}
export interface DownloadZipOptionalsInput {
    readonly headers?: DownloadZipHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class CreateZipDownloadHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<CreateZipDownloadHeaders, 'extraHeaders'> & Partial<Pick<CreateZipDownloadHeaders, 'extraHeaders'>>);
}
export interface CreateZipDownloadHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class GetZipDownloadContentHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetZipDownloadContentHeaders, 'extraHeaders'> & Partial<Pick<GetZipDownloadContentHeaders, 'extraHeaders'>>);
}
export interface GetZipDownloadContentHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class GetZipDownloadStatusHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetZipDownloadStatusHeaders, 'extraHeaders'> & Partial<Pick<GetZipDownloadStatusHeaders, 'extraHeaders'>>);
}
export interface GetZipDownloadStatusHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class DownloadZipHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<DownloadZipHeaders, 'extraHeaders'> & Partial<Pick<DownloadZipHeaders, 'extraHeaders'>>);
}
export interface DownloadZipHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class ZipDownloadsManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<ZipDownloadsManager, 'networkSession' | 'createZipDownload' | 'getZipDownloadContent' | 'getZipDownloadStatus' | 'downloadZip'> & Partial<Pick<ZipDownloadsManager, 'networkSession'>>);
    createZipDownload(requestBody: ZipDownloadRequest, optionalsInput?: CreateZipDownloadOptionalsInput): Promise<ZipDownload>;
    getZipDownloadContent(downloadUrl: string, optionalsInput?: GetZipDownloadContentOptionalsInput): Promise<ByteStream>;
    getZipDownloadStatus(statusUrl: string, optionalsInput?: GetZipDownloadStatusOptionalsInput): Promise<ZipDownloadStatus>;
    downloadZip(requestBody: ZipDownloadRequest, optionalsInput?: DownloadZipOptionalsInput): Promise<ByteStream>;
}
export interface ZipDownloadsManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
