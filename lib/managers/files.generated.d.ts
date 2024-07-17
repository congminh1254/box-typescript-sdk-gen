import { FileFull } from '../schemas/fileFull.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { ByteStream } from '../internal/utils.js';
import { CancellationToken } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
import { DateTime } from '../internal/utils.js';
export declare class GetFileByIdOptionals {
    readonly queryParams: GetFileByIdQueryParams;
    readonly headers: GetFileByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetFileByIdOptionals, 'queryParams' | 'headers' | 'cancellationToken'> & Partial<Pick<GetFileByIdOptionals, 'queryParams' | 'headers' | 'cancellationToken'>>);
}
export interface GetFileByIdOptionalsInput {
    readonly queryParams?: GetFileByIdQueryParams;
    readonly headers?: GetFileByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class UpdateFileByIdOptionals {
    readonly requestBody: UpdateFileByIdRequestBody;
    readonly queryParams: UpdateFileByIdQueryParams;
    readonly headers: UpdateFileByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<UpdateFileByIdOptionals, 'requestBody' | 'queryParams' | 'headers' | 'cancellationToken'> & Partial<Pick<UpdateFileByIdOptionals, 'requestBody' | 'queryParams' | 'headers' | 'cancellationToken'>>);
}
export interface UpdateFileByIdOptionalsInput {
    readonly requestBody?: UpdateFileByIdRequestBody;
    readonly queryParams?: UpdateFileByIdQueryParams;
    readonly headers?: UpdateFileByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class DeleteFileByIdOptionals {
    readonly headers: DeleteFileByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<DeleteFileByIdOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<DeleteFileByIdOptionals, 'headers' | 'cancellationToken'>>);
}
export interface DeleteFileByIdOptionalsInput {
    readonly headers?: DeleteFileByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class CopyFileOptionals {
    readonly queryParams: CopyFileQueryParams;
    readonly headers: CopyFileHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<CopyFileOptionals, 'queryParams' | 'headers' | 'cancellationToken'> & Partial<Pick<CopyFileOptionals, 'queryParams' | 'headers' | 'cancellationToken'>>);
}
export interface CopyFileOptionalsInput {
    readonly queryParams?: CopyFileQueryParams;
    readonly headers?: CopyFileHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetFileThumbnailByIdOptionals {
    readonly queryParams: GetFileThumbnailByIdQueryParams;
    readonly headers: GetFileThumbnailByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetFileThumbnailByIdOptionals, 'queryParams' | 'headers' | 'cancellationToken'> & Partial<Pick<GetFileThumbnailByIdOptionals, 'queryParams' | 'headers' | 'cancellationToken'>>);
}
export interface GetFileThumbnailByIdOptionalsInput {
    readonly queryParams?: GetFileThumbnailByIdQueryParams;
    readonly headers?: GetFileThumbnailByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export interface GetFileByIdQueryParams {
    readonly fields?: readonly string[];
}
export declare class GetFileByIdHeaders {
    readonly ifNoneMatch?: string;
    readonly boxapi?: string;
    readonly xRepHints?: string;
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetFileByIdHeaders, 'extraHeaders'> & Partial<Pick<GetFileByIdHeaders, 'extraHeaders'>>);
}
export interface GetFileByIdHeadersInput {
    readonly ifNoneMatch?: string;
    readonly boxapi?: string;
    readonly xRepHints?: string;
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export interface UpdateFileByIdRequestBodyParentField {
    readonly id?: string;
}
export type UpdateFileByIdRequestBodySharedLinkAccessField = 'open' | 'company' | 'collaborators';
export interface UpdateFileByIdRequestBodySharedLinkPermissionsField {
    readonly canDownload?: boolean;
}
export interface UpdateFileByIdRequestBodySharedLinkField {
    readonly access?: UpdateFileByIdRequestBodySharedLinkAccessField;
    readonly password?: string;
    readonly vanityName?: string;
    readonly unsharedAt?: DateTime;
    readonly permissions?: UpdateFileByIdRequestBodySharedLinkPermissionsField;
}
export type UpdateFileByIdRequestBodyLockAccessField = 'lock';
export interface UpdateFileByIdRequestBodyLockField {
    readonly access?: UpdateFileByIdRequestBodyLockAccessField;
    readonly expiresAt?: DateTime;
    readonly isDownloadPrevented?: boolean;
}
export type UpdateFileByIdRequestBodyPermissionsCanDownloadField = 'open' | 'company';
export interface UpdateFileByIdRequestBodyPermissionsField {
    readonly canDownload?: UpdateFileByIdRequestBodyPermissionsCanDownloadField;
}
export interface UpdateFileByIdRequestBodyCollectionsField {
    readonly id?: string;
    readonly type?: string;
}
export interface UpdateFileByIdRequestBody {
    readonly name?: string;
    readonly description?: string;
    readonly parent?: UpdateFileByIdRequestBodyParentField;
    readonly sharedLink?: UpdateFileByIdRequestBodySharedLinkField;
    readonly lock?: UpdateFileByIdRequestBodyLockField;
    readonly dispositionAt?: DateTime;
    readonly permissions?: UpdateFileByIdRequestBodyPermissionsField;
    readonly collections?: readonly UpdateFileByIdRequestBodyCollectionsField[];
    readonly tags?: readonly string[];
}
export interface UpdateFileByIdQueryParams {
    readonly fields?: readonly string[];
}
export declare class UpdateFileByIdHeaders {
    readonly ifMatch?: string;
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<UpdateFileByIdHeaders, 'extraHeaders'> & Partial<Pick<UpdateFileByIdHeaders, 'extraHeaders'>>);
}
export interface UpdateFileByIdHeadersInput {
    readonly ifMatch?: string;
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class DeleteFileByIdHeaders {
    readonly ifMatch?: string;
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<DeleteFileByIdHeaders, 'extraHeaders'> & Partial<Pick<DeleteFileByIdHeaders, 'extraHeaders'>>);
}
export interface DeleteFileByIdHeadersInput {
    readonly ifMatch?: string;
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export interface CopyFileRequestBodyParentField {
    readonly id: string;
}
export interface CopyFileRequestBody {
    readonly name?: string;
    readonly version?: string;
    readonly parent: CopyFileRequestBodyParentField;
}
export interface CopyFileQueryParams {
    readonly fields?: readonly string[];
}
export declare class CopyFileHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<CopyFileHeaders, 'extraHeaders'> & Partial<Pick<CopyFileHeaders, 'extraHeaders'>>);
}
export interface CopyFileHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export type GetFileThumbnailByIdExtension = 'png' | 'jpg';
export interface GetFileThumbnailByIdQueryParams {
    readonly minHeight?: number;
    readonly minWidth?: number;
    readonly maxHeight?: number;
    readonly maxWidth?: number;
}
export declare class GetFileThumbnailByIdHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetFileThumbnailByIdHeaders, 'extraHeaders'> & Partial<Pick<GetFileThumbnailByIdHeaders, 'extraHeaders'>>);
}
export interface GetFileThumbnailByIdHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class FilesManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<FilesManager, 'networkSession' | 'getFileById' | 'updateFileById' | 'deleteFileById' | 'copyFile' | 'getFileThumbnailById'> & Partial<Pick<FilesManager, 'networkSession'>>);
    getFileById(fileId: string, optionalsInput?: GetFileByIdOptionalsInput): Promise<FileFull>;
    updateFileById(fileId: string, optionalsInput?: UpdateFileByIdOptionalsInput): Promise<FileFull>;
    deleteFileById(fileId: string, optionalsInput?: DeleteFileByIdOptionalsInput): Promise<undefined>;
    copyFile(fileId: string, requestBody: CopyFileRequestBody, optionalsInput?: CopyFileOptionalsInput): Promise<FileFull>;
    getFileThumbnailById(fileId: string, extension: GetFileThumbnailByIdExtension, optionalsInput?: GetFileThumbnailByIdOptionalsInput): Promise<ByteStream>;
}
export interface FilesManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
export declare function serializeUpdateFileByIdRequestBodyParentField(val: UpdateFileByIdRequestBodyParentField): SerializedData;
export declare function deserializeUpdateFileByIdRequestBodyParentField(val: SerializedData): UpdateFileByIdRequestBodyParentField;
export declare function serializeUpdateFileByIdRequestBodySharedLinkAccessField(val: UpdateFileByIdRequestBodySharedLinkAccessField): SerializedData;
export declare function deserializeUpdateFileByIdRequestBodySharedLinkAccessField(val: SerializedData): UpdateFileByIdRequestBodySharedLinkAccessField;
export declare function serializeUpdateFileByIdRequestBodySharedLinkPermissionsField(val: UpdateFileByIdRequestBodySharedLinkPermissionsField): SerializedData;
export declare function deserializeUpdateFileByIdRequestBodySharedLinkPermissionsField(val: SerializedData): UpdateFileByIdRequestBodySharedLinkPermissionsField;
export declare function serializeUpdateFileByIdRequestBodySharedLinkField(val: UpdateFileByIdRequestBodySharedLinkField): SerializedData;
export declare function deserializeUpdateFileByIdRequestBodySharedLinkField(val: SerializedData): UpdateFileByIdRequestBodySharedLinkField;
export declare function serializeUpdateFileByIdRequestBodyLockAccessField(val: UpdateFileByIdRequestBodyLockAccessField): SerializedData;
export declare function deserializeUpdateFileByIdRequestBodyLockAccessField(val: SerializedData): UpdateFileByIdRequestBodyLockAccessField;
export declare function serializeUpdateFileByIdRequestBodyLockField(val: UpdateFileByIdRequestBodyLockField): SerializedData;
export declare function deserializeUpdateFileByIdRequestBodyLockField(val: SerializedData): UpdateFileByIdRequestBodyLockField;
export declare function serializeUpdateFileByIdRequestBodyPermissionsCanDownloadField(val: UpdateFileByIdRequestBodyPermissionsCanDownloadField): SerializedData;
export declare function deserializeUpdateFileByIdRequestBodyPermissionsCanDownloadField(val: SerializedData): UpdateFileByIdRequestBodyPermissionsCanDownloadField;
export declare function serializeUpdateFileByIdRequestBodyPermissionsField(val: UpdateFileByIdRequestBodyPermissionsField): SerializedData;
export declare function deserializeUpdateFileByIdRequestBodyPermissionsField(val: SerializedData): UpdateFileByIdRequestBodyPermissionsField;
export declare function serializeUpdateFileByIdRequestBodyCollectionsField(val: UpdateFileByIdRequestBodyCollectionsField): SerializedData;
export declare function deserializeUpdateFileByIdRequestBodyCollectionsField(val: SerializedData): UpdateFileByIdRequestBodyCollectionsField;
export declare function serializeUpdateFileByIdRequestBody(val: UpdateFileByIdRequestBody): SerializedData;
export declare function deserializeUpdateFileByIdRequestBody(val: SerializedData): UpdateFileByIdRequestBody;
export declare function serializeCopyFileRequestBodyParentField(val: CopyFileRequestBodyParentField): SerializedData;
export declare function deserializeCopyFileRequestBodyParentField(val: SerializedData): CopyFileRequestBodyParentField;
export declare function serializeCopyFileRequestBody(val: CopyFileRequestBody): SerializedData;
export declare function deserializeCopyFileRequestBody(val: SerializedData): CopyFileRequestBody;
export declare function serializeGetFileThumbnailByIdExtension(val: GetFileThumbnailByIdExtension): SerializedData;
export declare function deserializeGetFileThumbnailByIdExtension(val: SerializedData): GetFileThumbnailByIdExtension;
