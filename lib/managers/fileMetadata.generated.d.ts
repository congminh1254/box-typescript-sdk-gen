import { Metadatas } from '../schemas/metadatas.generated.js';
import { MetadataFull } from '../schemas/metadataFull.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { CancellationToken } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export declare class GetFileMetadataOptionals {
    readonly headers: GetFileMetadataHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetFileMetadataOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<GetFileMetadataOptionals, 'headers' | 'cancellationToken'>>);
}
export interface GetFileMetadataOptionalsInput {
    readonly headers?: GetFileMetadataHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetFileMetadataByIdOptionals {
    readonly headers: GetFileMetadataByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetFileMetadataByIdOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<GetFileMetadataByIdOptionals, 'headers' | 'cancellationToken'>>);
}
export interface GetFileMetadataByIdOptionalsInput {
    readonly headers?: GetFileMetadataByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class CreateFileMetadataByIdOptionals {
    readonly headers: CreateFileMetadataByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<CreateFileMetadataByIdOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<CreateFileMetadataByIdOptionals, 'headers' | 'cancellationToken'>>);
}
export interface CreateFileMetadataByIdOptionalsInput {
    readonly headers?: CreateFileMetadataByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class UpdateFileMetadataByIdOptionals {
    readonly headers: UpdateFileMetadataByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<UpdateFileMetadataByIdOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<UpdateFileMetadataByIdOptionals, 'headers' | 'cancellationToken'>>);
}
export interface UpdateFileMetadataByIdOptionalsInput {
    readonly headers?: UpdateFileMetadataByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class DeleteFileMetadataByIdOptionals {
    readonly headers: DeleteFileMetadataByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<DeleteFileMetadataByIdOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<DeleteFileMetadataByIdOptionals, 'headers' | 'cancellationToken'>>);
}
export interface DeleteFileMetadataByIdOptionalsInput {
    readonly headers?: DeleteFileMetadataByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetFileMetadataHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetFileMetadataHeaders, 'extraHeaders'> & Partial<Pick<GetFileMetadataHeaders, 'extraHeaders'>>);
}
export interface GetFileMetadataHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export type GetFileMetadataByIdScope = 'global' | 'enterprise';
export declare class GetFileMetadataByIdHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetFileMetadataByIdHeaders, 'extraHeaders'> & Partial<Pick<GetFileMetadataByIdHeaders, 'extraHeaders'>>);
}
export interface GetFileMetadataByIdHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export type CreateFileMetadataByIdScope = 'global' | 'enterprise';
export type CreateFileMetadataByIdRequestBody = {
    readonly [key: string]: any;
};
export declare class CreateFileMetadataByIdHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<CreateFileMetadataByIdHeaders, 'extraHeaders'> & Partial<Pick<CreateFileMetadataByIdHeaders, 'extraHeaders'>>);
}
export interface CreateFileMetadataByIdHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export type UpdateFileMetadataByIdScope = 'global' | 'enterprise';
export type UpdateFileMetadataByIdRequestBodyOpField = 'add' | 'replace' | 'remove' | 'test' | 'move' | 'copy';
export interface UpdateFileMetadataByIdRequestBody {
    readonly op?: UpdateFileMetadataByIdRequestBodyOpField;
    readonly path?: string;
    readonly value?: string;
    readonly from?: string;
}
export declare class UpdateFileMetadataByIdHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<UpdateFileMetadataByIdHeaders, 'extraHeaders'> & Partial<Pick<UpdateFileMetadataByIdHeaders, 'extraHeaders'>>);
}
export interface UpdateFileMetadataByIdHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export type DeleteFileMetadataByIdScope = 'global' | 'enterprise';
export declare class DeleteFileMetadataByIdHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<DeleteFileMetadataByIdHeaders, 'extraHeaders'> & Partial<Pick<DeleteFileMetadataByIdHeaders, 'extraHeaders'>>);
}
export interface DeleteFileMetadataByIdHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class FileMetadataManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<FileMetadataManager, 'networkSession' | 'getFileMetadata' | 'getFileMetadataById' | 'createFileMetadataById' | 'updateFileMetadataById' | 'deleteFileMetadataById'> & Partial<Pick<FileMetadataManager, 'networkSession'>>);
    getFileMetadata(fileId: string, optionalsInput?: GetFileMetadataOptionalsInput): Promise<Metadatas>;
    getFileMetadataById(fileId: string, scope: GetFileMetadataByIdScope, templateKey: string, optionalsInput?: GetFileMetadataByIdOptionalsInput): Promise<MetadataFull>;
    createFileMetadataById(fileId: string, scope: CreateFileMetadataByIdScope, templateKey: string, requestBody: CreateFileMetadataByIdRequestBody, optionalsInput?: CreateFileMetadataByIdOptionalsInput): Promise<MetadataFull>;
    updateFileMetadataById(fileId: string, scope: UpdateFileMetadataByIdScope, templateKey: string, requestBody: readonly UpdateFileMetadataByIdRequestBody[], optionalsInput?: UpdateFileMetadataByIdOptionalsInput): Promise<MetadataFull>;
    deleteFileMetadataById(fileId: string, scope: DeleteFileMetadataByIdScope, templateKey: string, optionalsInput?: DeleteFileMetadataByIdOptionalsInput): Promise<undefined>;
}
export interface FileMetadataManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
export declare function serializeGetFileMetadataByIdScope(val: GetFileMetadataByIdScope): SerializedData;
export declare function deserializeGetFileMetadataByIdScope(val: SerializedData): GetFileMetadataByIdScope;
export declare function serializeCreateFileMetadataByIdScope(val: CreateFileMetadataByIdScope): SerializedData;
export declare function deserializeCreateFileMetadataByIdScope(val: SerializedData): CreateFileMetadataByIdScope;
export declare function serializeCreateFileMetadataByIdRequestBody(val: CreateFileMetadataByIdRequestBody): SerializedData;
export declare function deserializeCreateFileMetadataByIdRequestBody(val: SerializedData): CreateFileMetadataByIdRequestBody;
export declare function serializeUpdateFileMetadataByIdScope(val: UpdateFileMetadataByIdScope): SerializedData;
export declare function deserializeUpdateFileMetadataByIdScope(val: SerializedData): UpdateFileMetadataByIdScope;
export declare function serializeUpdateFileMetadataByIdRequestBodyOpField(val: UpdateFileMetadataByIdRequestBodyOpField): SerializedData;
export declare function deserializeUpdateFileMetadataByIdRequestBodyOpField(val: SerializedData): UpdateFileMetadataByIdRequestBodyOpField;
export declare function serializeUpdateFileMetadataByIdRequestBody(val: UpdateFileMetadataByIdRequestBody): SerializedData;
export declare function deserializeUpdateFileMetadataByIdRequestBody(val: SerializedData): UpdateFileMetadataByIdRequestBody;
export declare function serializeDeleteFileMetadataByIdScope(val: DeleteFileMetadataByIdScope): SerializedData;
export declare function deserializeDeleteFileMetadataByIdScope(val: SerializedData): DeleteFileMetadataByIdScope;
