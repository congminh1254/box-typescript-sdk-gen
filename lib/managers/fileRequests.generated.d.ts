import { FileRequest } from '../schemas/fileRequest.generated.js';
import { FileRequestUpdateRequest } from '../schemas/fileRequestUpdateRequest.generated.js';
import { FileRequestCopyRequest } from '../schemas/fileRequestCopyRequest.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { CancellationToken } from '../internal/utils.js';
export declare class GetFileRequestByIdOptionals {
    readonly headers: GetFileRequestByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetFileRequestByIdOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<GetFileRequestByIdOptionals, 'headers' | 'cancellationToken'>>);
}
export interface GetFileRequestByIdOptionalsInput {
    readonly headers?: GetFileRequestByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class UpdateFileRequestByIdOptionals {
    readonly headers: UpdateFileRequestByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<UpdateFileRequestByIdOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<UpdateFileRequestByIdOptionals, 'headers' | 'cancellationToken'>>);
}
export interface UpdateFileRequestByIdOptionalsInput {
    readonly headers?: UpdateFileRequestByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class DeleteFileRequestByIdOptionals {
    readonly headers: DeleteFileRequestByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<DeleteFileRequestByIdOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<DeleteFileRequestByIdOptionals, 'headers' | 'cancellationToken'>>);
}
export interface DeleteFileRequestByIdOptionalsInput {
    readonly headers?: DeleteFileRequestByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class CreateFileRequestCopyOptionals {
    readonly headers: CreateFileRequestCopyHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<CreateFileRequestCopyOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<CreateFileRequestCopyOptionals, 'headers' | 'cancellationToken'>>);
}
export interface CreateFileRequestCopyOptionalsInput {
    readonly headers?: CreateFileRequestCopyHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetFileRequestByIdHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetFileRequestByIdHeaders, 'extraHeaders'> & Partial<Pick<GetFileRequestByIdHeaders, 'extraHeaders'>>);
}
export interface GetFileRequestByIdHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class UpdateFileRequestByIdHeaders {
    readonly ifMatch?: string;
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<UpdateFileRequestByIdHeaders, 'extraHeaders'> & Partial<Pick<UpdateFileRequestByIdHeaders, 'extraHeaders'>>);
}
export interface UpdateFileRequestByIdHeadersInput {
    readonly ifMatch?: string;
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class DeleteFileRequestByIdHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<DeleteFileRequestByIdHeaders, 'extraHeaders'> & Partial<Pick<DeleteFileRequestByIdHeaders, 'extraHeaders'>>);
}
export interface DeleteFileRequestByIdHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class CreateFileRequestCopyHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<CreateFileRequestCopyHeaders, 'extraHeaders'> & Partial<Pick<CreateFileRequestCopyHeaders, 'extraHeaders'>>);
}
export interface CreateFileRequestCopyHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class FileRequestsManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<FileRequestsManager, 'networkSession' | 'getFileRequestById' | 'updateFileRequestById' | 'deleteFileRequestById' | 'createFileRequestCopy'> & Partial<Pick<FileRequestsManager, 'networkSession'>>);
    getFileRequestById(fileRequestId: string, optionalsInput?: GetFileRequestByIdOptionalsInput): Promise<FileRequest>;
    updateFileRequestById(fileRequestId: string, requestBody: FileRequestUpdateRequest, optionalsInput?: UpdateFileRequestByIdOptionalsInput): Promise<FileRequest>;
    deleteFileRequestById(fileRequestId: string, optionalsInput?: DeleteFileRequestByIdOptionalsInput): Promise<undefined>;
    createFileRequestCopy(fileRequestId: string, requestBody: FileRequestCopyRequest, optionalsInput?: CreateFileRequestCopyOptionalsInput): Promise<FileRequest>;
}
export interface FileRequestsManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
