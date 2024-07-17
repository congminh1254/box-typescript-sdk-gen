import { FileVersions } from '../schemas/fileVersions.generated.js';
import { FileVersionFull } from '../schemas/fileVersionFull.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { CancellationToken } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export declare class GetFileVersionsOptionals {
    readonly queryParams: GetFileVersionsQueryParams;
    readonly headers: GetFileVersionsHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetFileVersionsOptionals, 'queryParams' | 'headers' | 'cancellationToken'> & Partial<Pick<GetFileVersionsOptionals, 'queryParams' | 'headers' | 'cancellationToken'>>);
}
export interface GetFileVersionsOptionalsInput {
    readonly queryParams?: GetFileVersionsQueryParams;
    readonly headers?: GetFileVersionsHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetFileVersionByIdOptionals {
    readonly queryParams: GetFileVersionByIdQueryParams;
    readonly headers: GetFileVersionByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetFileVersionByIdOptionals, 'queryParams' | 'headers' | 'cancellationToken'> & Partial<Pick<GetFileVersionByIdOptionals, 'queryParams' | 'headers' | 'cancellationToken'>>);
}
export interface GetFileVersionByIdOptionalsInput {
    readonly queryParams?: GetFileVersionByIdQueryParams;
    readonly headers?: GetFileVersionByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class UpdateFileVersionByIdOptionals {
    readonly requestBody: UpdateFileVersionByIdRequestBody;
    readonly headers: UpdateFileVersionByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<UpdateFileVersionByIdOptionals, 'requestBody' | 'headers' | 'cancellationToken'> & Partial<Pick<UpdateFileVersionByIdOptionals, 'requestBody' | 'headers' | 'cancellationToken'>>);
}
export interface UpdateFileVersionByIdOptionalsInput {
    readonly requestBody?: UpdateFileVersionByIdRequestBody;
    readonly headers?: UpdateFileVersionByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class DeleteFileVersionByIdOptionals {
    readonly headers: DeleteFileVersionByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<DeleteFileVersionByIdOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<DeleteFileVersionByIdOptionals, 'headers' | 'cancellationToken'>>);
}
export interface DeleteFileVersionByIdOptionalsInput {
    readonly headers?: DeleteFileVersionByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class PromoteFileVersionOptionals {
    readonly requestBody: PromoteFileVersionRequestBody;
    readonly queryParams: PromoteFileVersionQueryParams;
    readonly headers: PromoteFileVersionHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<PromoteFileVersionOptionals, 'requestBody' | 'queryParams' | 'headers' | 'cancellationToken'> & Partial<Pick<PromoteFileVersionOptionals, 'requestBody' | 'queryParams' | 'headers' | 'cancellationToken'>>);
}
export interface PromoteFileVersionOptionalsInput {
    readonly requestBody?: PromoteFileVersionRequestBody;
    readonly queryParams?: PromoteFileVersionQueryParams;
    readonly headers?: PromoteFileVersionHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export interface GetFileVersionsQueryParams {
    readonly fields?: readonly string[];
    readonly limit?: number;
    readonly offset?: number;
}
export declare class GetFileVersionsHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetFileVersionsHeaders, 'extraHeaders'> & Partial<Pick<GetFileVersionsHeaders, 'extraHeaders'>>);
}
export interface GetFileVersionsHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export interface GetFileVersionByIdQueryParams {
    readonly fields?: readonly string[];
}
export declare class GetFileVersionByIdHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetFileVersionByIdHeaders, 'extraHeaders'> & Partial<Pick<GetFileVersionByIdHeaders, 'extraHeaders'>>);
}
export interface GetFileVersionByIdHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export interface UpdateFileVersionByIdRequestBody {
    readonly trashedAt?: string;
}
export declare class UpdateFileVersionByIdHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<UpdateFileVersionByIdHeaders, 'extraHeaders'> & Partial<Pick<UpdateFileVersionByIdHeaders, 'extraHeaders'>>);
}
export interface UpdateFileVersionByIdHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class DeleteFileVersionByIdHeaders {
    readonly ifMatch?: string;
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<DeleteFileVersionByIdHeaders, 'extraHeaders'> & Partial<Pick<DeleteFileVersionByIdHeaders, 'extraHeaders'>>);
}
export interface DeleteFileVersionByIdHeadersInput {
    readonly ifMatch?: string;
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export type PromoteFileVersionRequestBodyTypeField = 'file_version';
export interface PromoteFileVersionRequestBody {
    readonly id?: string;
    readonly type?: PromoteFileVersionRequestBodyTypeField;
}
export interface PromoteFileVersionQueryParams {
    readonly fields?: readonly string[];
}
export declare class PromoteFileVersionHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<PromoteFileVersionHeaders, 'extraHeaders'> & Partial<Pick<PromoteFileVersionHeaders, 'extraHeaders'>>);
}
export interface PromoteFileVersionHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class FileVersionsManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<FileVersionsManager, 'networkSession' | 'getFileVersions' | 'getFileVersionById' | 'updateFileVersionById' | 'deleteFileVersionById' | 'promoteFileVersion'> & Partial<Pick<FileVersionsManager, 'networkSession'>>);
    getFileVersions(fileId: string, optionalsInput?: GetFileVersionsOptionalsInput): Promise<FileVersions>;
    getFileVersionById(fileId: string, fileVersionId: string, optionalsInput?: GetFileVersionByIdOptionalsInput): Promise<FileVersionFull>;
    updateFileVersionById(fileId: string, fileVersionId: string, optionalsInput?: UpdateFileVersionByIdOptionalsInput): Promise<FileVersionFull>;
    deleteFileVersionById(fileId: string, fileVersionId: string, optionalsInput?: DeleteFileVersionByIdOptionalsInput): Promise<undefined>;
    promoteFileVersion(fileId: string, optionalsInput?: PromoteFileVersionOptionalsInput): Promise<FileVersionFull>;
}
export interface FileVersionsManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
export declare function serializeUpdateFileVersionByIdRequestBody(val: UpdateFileVersionByIdRequestBody): SerializedData;
export declare function deserializeUpdateFileVersionByIdRequestBody(val: SerializedData): UpdateFileVersionByIdRequestBody;
export declare function serializePromoteFileVersionRequestBodyTypeField(val: PromoteFileVersionRequestBodyTypeField): SerializedData;
export declare function deserializePromoteFileVersionRequestBodyTypeField(val: SerializedData): PromoteFileVersionRequestBodyTypeField;
export declare function serializePromoteFileVersionRequestBody(val: PromoteFileVersionRequestBody): SerializedData;
export declare function deserializePromoteFileVersionRequestBody(val: SerializedData): PromoteFileVersionRequestBody;
