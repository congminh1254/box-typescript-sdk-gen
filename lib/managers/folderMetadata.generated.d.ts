import { Metadatas } from '../schemas/metadatas.generated.js';
import { MetadataFull } from '../schemas/metadataFull.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { CancellationToken } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export declare class GetFolderMetadataOptionals {
    readonly headers: GetFolderMetadataHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetFolderMetadataOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<GetFolderMetadataOptionals, 'headers' | 'cancellationToken'>>);
}
export interface GetFolderMetadataOptionalsInput {
    readonly headers?: GetFolderMetadataHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetFolderMetadataByIdOptionals {
    readonly headers: GetFolderMetadataByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetFolderMetadataByIdOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<GetFolderMetadataByIdOptionals, 'headers' | 'cancellationToken'>>);
}
export interface GetFolderMetadataByIdOptionalsInput {
    readonly headers?: GetFolderMetadataByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class CreateFolderMetadataByIdOptionals {
    readonly headers: CreateFolderMetadataByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<CreateFolderMetadataByIdOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<CreateFolderMetadataByIdOptionals, 'headers' | 'cancellationToken'>>);
}
export interface CreateFolderMetadataByIdOptionalsInput {
    readonly headers?: CreateFolderMetadataByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class UpdateFolderMetadataByIdOptionals {
    readonly headers: UpdateFolderMetadataByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<UpdateFolderMetadataByIdOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<UpdateFolderMetadataByIdOptionals, 'headers' | 'cancellationToken'>>);
}
export interface UpdateFolderMetadataByIdOptionalsInput {
    readonly headers?: UpdateFolderMetadataByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class DeleteFolderMetadataByIdOptionals {
    readonly headers: DeleteFolderMetadataByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<DeleteFolderMetadataByIdOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<DeleteFolderMetadataByIdOptionals, 'headers' | 'cancellationToken'>>);
}
export interface DeleteFolderMetadataByIdOptionalsInput {
    readonly headers?: DeleteFolderMetadataByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetFolderMetadataHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetFolderMetadataHeaders, 'extraHeaders'> & Partial<Pick<GetFolderMetadataHeaders, 'extraHeaders'>>);
}
export interface GetFolderMetadataHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export type GetFolderMetadataByIdScope = 'global' | 'enterprise';
export declare class GetFolderMetadataByIdHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetFolderMetadataByIdHeaders, 'extraHeaders'> & Partial<Pick<GetFolderMetadataByIdHeaders, 'extraHeaders'>>);
}
export interface GetFolderMetadataByIdHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export type CreateFolderMetadataByIdScope = 'global' | 'enterprise';
export type CreateFolderMetadataByIdRequestBody = {
    readonly [key: string]: any;
};
export declare class CreateFolderMetadataByIdHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<CreateFolderMetadataByIdHeaders, 'extraHeaders'> & Partial<Pick<CreateFolderMetadataByIdHeaders, 'extraHeaders'>>);
}
export interface CreateFolderMetadataByIdHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export type UpdateFolderMetadataByIdScope = 'global' | 'enterprise';
export type UpdateFolderMetadataByIdRequestBodyOpField = 'add' | 'replace' | 'remove' | 'test' | 'move' | 'copy';
export interface UpdateFolderMetadataByIdRequestBody {
    readonly op?: UpdateFolderMetadataByIdRequestBodyOpField;
    readonly path?: string;
    readonly value?: string;
    readonly from?: string;
}
export declare class UpdateFolderMetadataByIdHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<UpdateFolderMetadataByIdHeaders, 'extraHeaders'> & Partial<Pick<UpdateFolderMetadataByIdHeaders, 'extraHeaders'>>);
}
export interface UpdateFolderMetadataByIdHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export type DeleteFolderMetadataByIdScope = 'global' | 'enterprise';
export declare class DeleteFolderMetadataByIdHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<DeleteFolderMetadataByIdHeaders, 'extraHeaders'> & Partial<Pick<DeleteFolderMetadataByIdHeaders, 'extraHeaders'>>);
}
export interface DeleteFolderMetadataByIdHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class FolderMetadataManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<FolderMetadataManager, 'networkSession' | 'getFolderMetadata' | 'getFolderMetadataById' | 'createFolderMetadataById' | 'updateFolderMetadataById' | 'deleteFolderMetadataById'> & Partial<Pick<FolderMetadataManager, 'networkSession'>>);
    getFolderMetadata(folderId: string, optionalsInput?: GetFolderMetadataOptionalsInput): Promise<Metadatas>;
    getFolderMetadataById(folderId: string, scope: GetFolderMetadataByIdScope, templateKey: string, optionalsInput?: GetFolderMetadataByIdOptionalsInput): Promise<MetadataFull>;
    createFolderMetadataById(folderId: string, scope: CreateFolderMetadataByIdScope, templateKey: string, requestBody: CreateFolderMetadataByIdRequestBody, optionalsInput?: CreateFolderMetadataByIdOptionalsInput): Promise<MetadataFull>;
    updateFolderMetadataById(folderId: string, scope: UpdateFolderMetadataByIdScope, templateKey: string, requestBody: readonly UpdateFolderMetadataByIdRequestBody[], optionalsInput?: UpdateFolderMetadataByIdOptionalsInput): Promise<MetadataFull>;
    deleteFolderMetadataById(folderId: string, scope: DeleteFolderMetadataByIdScope, templateKey: string, optionalsInput?: DeleteFolderMetadataByIdOptionalsInput): Promise<undefined>;
}
export interface FolderMetadataManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
export declare function serializeGetFolderMetadataByIdScope(val: GetFolderMetadataByIdScope): SerializedData;
export declare function deserializeGetFolderMetadataByIdScope(val: SerializedData): GetFolderMetadataByIdScope;
export declare function serializeCreateFolderMetadataByIdScope(val: CreateFolderMetadataByIdScope): SerializedData;
export declare function deserializeCreateFolderMetadataByIdScope(val: SerializedData): CreateFolderMetadataByIdScope;
export declare function serializeCreateFolderMetadataByIdRequestBody(val: CreateFolderMetadataByIdRequestBody): SerializedData;
export declare function deserializeCreateFolderMetadataByIdRequestBody(val: SerializedData): CreateFolderMetadataByIdRequestBody;
export declare function serializeUpdateFolderMetadataByIdScope(val: UpdateFolderMetadataByIdScope): SerializedData;
export declare function deserializeUpdateFolderMetadataByIdScope(val: SerializedData): UpdateFolderMetadataByIdScope;
export declare function serializeUpdateFolderMetadataByIdRequestBodyOpField(val: UpdateFolderMetadataByIdRequestBodyOpField): SerializedData;
export declare function deserializeUpdateFolderMetadataByIdRequestBodyOpField(val: SerializedData): UpdateFolderMetadataByIdRequestBodyOpField;
export declare function serializeUpdateFolderMetadataByIdRequestBody(val: UpdateFolderMetadataByIdRequestBody): SerializedData;
export declare function deserializeUpdateFolderMetadataByIdRequestBody(val: SerializedData): UpdateFolderMetadataByIdRequestBody;
export declare function serializeDeleteFolderMetadataByIdScope(val: DeleteFolderMetadataByIdScope): SerializedData;
export declare function deserializeDeleteFolderMetadataByIdScope(val: SerializedData): DeleteFolderMetadataByIdScope;
