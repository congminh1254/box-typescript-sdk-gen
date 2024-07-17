import { TrashFolderRestored } from '../schemas/trashFolderRestored.generated.js';
import { TrashFolder } from '../schemas/trashFolder.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { CancellationToken } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export declare class RestoreFolderFromTrashOptionals {
    readonly requestBody: RestoreFolderFromTrashRequestBody;
    readonly queryParams: RestoreFolderFromTrashQueryParams;
    readonly headers: RestoreFolderFromTrashHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<RestoreFolderFromTrashOptionals, 'requestBody' | 'queryParams' | 'headers' | 'cancellationToken'> & Partial<Pick<RestoreFolderFromTrashOptionals, 'requestBody' | 'queryParams' | 'headers' | 'cancellationToken'>>);
}
export interface RestoreFolderFromTrashOptionalsInput {
    readonly requestBody?: RestoreFolderFromTrashRequestBody;
    readonly queryParams?: RestoreFolderFromTrashQueryParams;
    readonly headers?: RestoreFolderFromTrashHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetTrashedFolderByIdOptionals {
    readonly queryParams: GetTrashedFolderByIdQueryParams;
    readonly headers: GetTrashedFolderByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetTrashedFolderByIdOptionals, 'queryParams' | 'headers' | 'cancellationToken'> & Partial<Pick<GetTrashedFolderByIdOptionals, 'queryParams' | 'headers' | 'cancellationToken'>>);
}
export interface GetTrashedFolderByIdOptionalsInput {
    readonly queryParams?: GetTrashedFolderByIdQueryParams;
    readonly headers?: GetTrashedFolderByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class DeleteTrashedFolderByIdOptionals {
    readonly headers: DeleteTrashedFolderByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<DeleteTrashedFolderByIdOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<DeleteTrashedFolderByIdOptionals, 'headers' | 'cancellationToken'>>);
}
export interface DeleteTrashedFolderByIdOptionalsInput {
    readonly headers?: DeleteTrashedFolderByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export interface RestoreFolderFromTrashRequestBodyParentField {
    readonly id?: string;
}
export interface RestoreFolderFromTrashRequestBody {
    readonly name?: string;
    readonly parent?: RestoreFolderFromTrashRequestBodyParentField;
}
export interface RestoreFolderFromTrashQueryParams {
    readonly fields?: readonly string[];
}
export declare class RestoreFolderFromTrashHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<RestoreFolderFromTrashHeaders, 'extraHeaders'> & Partial<Pick<RestoreFolderFromTrashHeaders, 'extraHeaders'>>);
}
export interface RestoreFolderFromTrashHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export interface GetTrashedFolderByIdQueryParams {
    readonly fields?: readonly string[];
}
export declare class GetTrashedFolderByIdHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetTrashedFolderByIdHeaders, 'extraHeaders'> & Partial<Pick<GetTrashedFolderByIdHeaders, 'extraHeaders'>>);
}
export interface GetTrashedFolderByIdHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class DeleteTrashedFolderByIdHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<DeleteTrashedFolderByIdHeaders, 'extraHeaders'> & Partial<Pick<DeleteTrashedFolderByIdHeaders, 'extraHeaders'>>);
}
export interface DeleteTrashedFolderByIdHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class TrashedFoldersManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<TrashedFoldersManager, 'networkSession' | 'restoreFolderFromTrash' | 'getTrashedFolderById' | 'deleteTrashedFolderById'> & Partial<Pick<TrashedFoldersManager, 'networkSession'>>);
    restoreFolderFromTrash(folderId: string, optionalsInput?: RestoreFolderFromTrashOptionalsInput): Promise<TrashFolderRestored>;
    getTrashedFolderById(folderId: string, optionalsInput?: GetTrashedFolderByIdOptionalsInput): Promise<TrashFolder>;
    deleteTrashedFolderById(folderId: string, optionalsInput?: DeleteTrashedFolderByIdOptionalsInput): Promise<undefined>;
}
export interface TrashedFoldersManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
export declare function serializeRestoreFolderFromTrashRequestBodyParentField(val: RestoreFolderFromTrashRequestBodyParentField): SerializedData;
export declare function deserializeRestoreFolderFromTrashRequestBodyParentField(val: SerializedData): RestoreFolderFromTrashRequestBodyParentField;
export declare function serializeRestoreFolderFromTrashRequestBody(val: RestoreFolderFromTrashRequestBody): SerializedData;
export declare function deserializeRestoreFolderFromTrashRequestBody(val: SerializedData): RestoreFolderFromTrashRequestBody;
