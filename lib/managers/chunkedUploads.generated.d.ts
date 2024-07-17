import { FileFull } from '../schemas/fileFull.generated.js';
import { UploadSession } from '../schemas/uploadSession.generated.js';
import { UploadedPart } from '../schemas/uploadedPart.generated.js';
import { UploadParts } from '../schemas/uploadParts.generated.js';
import { Files } from '../schemas/files.generated.js';
import { UploadPart } from '../schemas/uploadPart.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { ByteStream } from '../internal/utils.js';
import { CancellationToken } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export declare class CreateFileUploadSessionOptionals {
    readonly headers: CreateFileUploadSessionHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<CreateFileUploadSessionOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<CreateFileUploadSessionOptionals, 'headers' | 'cancellationToken'>>);
}
export interface CreateFileUploadSessionOptionalsInput {
    readonly headers?: CreateFileUploadSessionHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class CreateFileUploadSessionForExistingFileOptionals {
    readonly headers: CreateFileUploadSessionForExistingFileHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<CreateFileUploadSessionForExistingFileOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<CreateFileUploadSessionForExistingFileOptionals, 'headers' | 'cancellationToken'>>);
}
export interface CreateFileUploadSessionForExistingFileOptionalsInput {
    readonly headers?: CreateFileUploadSessionForExistingFileHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetFileUploadSessionByIdOptionals {
    readonly headers: GetFileUploadSessionByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetFileUploadSessionByIdOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<GetFileUploadSessionByIdOptionals, 'headers' | 'cancellationToken'>>);
}
export interface GetFileUploadSessionByIdOptionalsInput {
    readonly headers?: GetFileUploadSessionByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class UploadFilePartOptionals {
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<UploadFilePartOptionals, 'cancellationToken'> & Partial<Pick<UploadFilePartOptionals, 'cancellationToken'>>);
}
export interface UploadFilePartOptionalsInput {
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class DeleteFileUploadSessionByIdOptionals {
    readonly headers: DeleteFileUploadSessionByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<DeleteFileUploadSessionByIdOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<DeleteFileUploadSessionByIdOptionals, 'headers' | 'cancellationToken'>>);
}
export interface DeleteFileUploadSessionByIdOptionalsInput {
    readonly headers?: DeleteFileUploadSessionByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetFileUploadSessionPartsOptionals {
    readonly queryParams: GetFileUploadSessionPartsQueryParams;
    readonly headers: GetFileUploadSessionPartsHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetFileUploadSessionPartsOptionals, 'queryParams' | 'headers' | 'cancellationToken'> & Partial<Pick<GetFileUploadSessionPartsOptionals, 'queryParams' | 'headers' | 'cancellationToken'>>);
}
export interface GetFileUploadSessionPartsOptionalsInput {
    readonly queryParams?: GetFileUploadSessionPartsQueryParams;
    readonly headers?: GetFileUploadSessionPartsHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class CreateFileUploadSessionCommitOptionals {
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<CreateFileUploadSessionCommitOptionals, 'cancellationToken'> & Partial<Pick<CreateFileUploadSessionCommitOptionals, 'cancellationToken'>>);
}
export interface CreateFileUploadSessionCommitOptionalsInput {
    readonly cancellationToken?: undefined | CancellationToken;
}
export interface CreateFileUploadSessionRequestBody {
    readonly folderId: string;
    readonly fileSize: number;
    readonly fileName: string;
}
export declare class CreateFileUploadSessionHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<CreateFileUploadSessionHeaders, 'extraHeaders'> & Partial<Pick<CreateFileUploadSessionHeaders, 'extraHeaders'>>);
}
export interface CreateFileUploadSessionHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export interface CreateFileUploadSessionForExistingFileRequestBody {
    readonly fileSize: number;
    readonly fileName?: string;
}
export declare class CreateFileUploadSessionForExistingFileHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<CreateFileUploadSessionForExistingFileHeaders, 'extraHeaders'> & Partial<Pick<CreateFileUploadSessionForExistingFileHeaders, 'extraHeaders'>>);
}
export interface CreateFileUploadSessionForExistingFileHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class GetFileUploadSessionByIdHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetFileUploadSessionByIdHeaders, 'extraHeaders'> & Partial<Pick<GetFileUploadSessionByIdHeaders, 'extraHeaders'>>);
}
export interface GetFileUploadSessionByIdHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class UploadFilePartHeaders {
    readonly digest: string;
    readonly contentRange: string;
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<UploadFilePartHeaders, 'extraHeaders'> & Partial<Pick<UploadFilePartHeaders, 'extraHeaders'>>);
}
export interface UploadFilePartHeadersInput {
    readonly digest: string;
    readonly contentRange: string;
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class DeleteFileUploadSessionByIdHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<DeleteFileUploadSessionByIdHeaders, 'extraHeaders'> & Partial<Pick<DeleteFileUploadSessionByIdHeaders, 'extraHeaders'>>);
}
export interface DeleteFileUploadSessionByIdHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export interface GetFileUploadSessionPartsQueryParams {
    readonly offset?: number;
    readonly limit?: number;
}
export declare class GetFileUploadSessionPartsHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetFileUploadSessionPartsHeaders, 'extraHeaders'> & Partial<Pick<GetFileUploadSessionPartsHeaders, 'extraHeaders'>>);
}
export interface GetFileUploadSessionPartsHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export interface CreateFileUploadSessionCommitRequestBody {
    readonly parts: readonly UploadPart[];
}
export declare class CreateFileUploadSessionCommitHeaders {
    readonly digest: string;
    readonly ifMatch?: string;
    readonly ifNoneMatch?: string;
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<CreateFileUploadSessionCommitHeaders, 'extraHeaders'> & Partial<Pick<CreateFileUploadSessionCommitHeaders, 'extraHeaders'>>);
}
export interface CreateFileUploadSessionCommitHeadersInput {
    readonly digest: string;
    readonly ifMatch?: string;
    readonly ifNoneMatch?: string;
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class ChunkedUploadsManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<ChunkedUploadsManager, 'networkSession' | 'createFileUploadSession' | 'createFileUploadSessionForExistingFile' | 'getFileUploadSessionById' | 'uploadFilePart' | 'deleteFileUploadSessionById' | 'getFileUploadSessionParts' | 'createFileUploadSessionCommit' | 'reducer' | 'uploadBigFile'> & Partial<Pick<ChunkedUploadsManager, 'networkSession'>>);
    createFileUploadSession(requestBody: CreateFileUploadSessionRequestBody, optionalsInput?: CreateFileUploadSessionOptionalsInput): Promise<UploadSession>;
    createFileUploadSessionForExistingFile(fileId: string, requestBody: CreateFileUploadSessionForExistingFileRequestBody, optionalsInput?: CreateFileUploadSessionForExistingFileOptionalsInput): Promise<UploadSession>;
    getFileUploadSessionById(uploadSessionId: string, optionalsInput?: GetFileUploadSessionByIdOptionalsInput): Promise<UploadSession>;
    uploadFilePart(uploadSessionId: string, requestBody: ByteStream, headersInput: UploadFilePartHeadersInput, optionalsInput?: UploadFilePartOptionalsInput): Promise<UploadedPart>;
    deleteFileUploadSessionById(uploadSessionId: string, optionalsInput?: DeleteFileUploadSessionByIdOptionalsInput): Promise<undefined>;
    getFileUploadSessionParts(uploadSessionId: string, optionalsInput?: GetFileUploadSessionPartsOptionalsInput): Promise<UploadParts>;
    createFileUploadSessionCommit(uploadSessionId: string, requestBody: CreateFileUploadSessionCommitRequestBody, headersInput: CreateFileUploadSessionCommitHeadersInput, optionalsInput?: CreateFileUploadSessionCommitOptionalsInput): Promise<Files>;
    private reducer;
    uploadBigFile(file: ByteStream, fileName: string, fileSize: number, parentFolderId: string, cancellationToken?: CancellationToken): Promise<FileFull>;
}
export interface ChunkedUploadsManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
export declare function serializeCreateFileUploadSessionRequestBody(val: CreateFileUploadSessionRequestBody): SerializedData;
export declare function deserializeCreateFileUploadSessionRequestBody(val: SerializedData): CreateFileUploadSessionRequestBody;
export declare function serializeCreateFileUploadSessionForExistingFileRequestBody(val: CreateFileUploadSessionForExistingFileRequestBody): SerializedData;
export declare function deserializeCreateFileUploadSessionForExistingFileRequestBody(val: SerializedData): CreateFileUploadSessionForExistingFileRequestBody;
export declare function serializeCreateFileUploadSessionCommitRequestBody(val: CreateFileUploadSessionCommitRequestBody): SerializedData;
export declare function deserializeCreateFileUploadSessionCommitRequestBody(val: SerializedData): CreateFileUploadSessionCommitRequestBody;
