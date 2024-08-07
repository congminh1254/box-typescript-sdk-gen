import { TrashFileRestored } from '../schemas/trashFileRestored.generated.js';
import { TrashFile } from '../schemas/trashFile.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { CancellationToken } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export declare class RestoreFileFromTrashOptionals {
    readonly requestBody: RestoreFileFromTrashRequestBody;
    readonly queryParams: RestoreFileFromTrashQueryParams;
    readonly headers: RestoreFileFromTrashHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<RestoreFileFromTrashOptionals, 'requestBody' | 'queryParams' | 'headers' | 'cancellationToken'> & Partial<Pick<RestoreFileFromTrashOptionals, 'requestBody' | 'queryParams' | 'headers' | 'cancellationToken'>>);
}
export interface RestoreFileFromTrashOptionalsInput {
    readonly requestBody?: RestoreFileFromTrashRequestBody;
    readonly queryParams?: RestoreFileFromTrashQueryParams;
    readonly headers?: RestoreFileFromTrashHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetTrashedFileByIdOptionals {
    readonly queryParams: GetTrashedFileByIdQueryParams;
    readonly headers: GetTrashedFileByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetTrashedFileByIdOptionals, 'queryParams' | 'headers' | 'cancellationToken'> & Partial<Pick<GetTrashedFileByIdOptionals, 'queryParams' | 'headers' | 'cancellationToken'>>);
}
export interface GetTrashedFileByIdOptionalsInput {
    readonly queryParams?: GetTrashedFileByIdQueryParams;
    readonly headers?: GetTrashedFileByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class DeleteTrashedFileByIdOptionals {
    readonly headers: DeleteTrashedFileByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<DeleteTrashedFileByIdOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<DeleteTrashedFileByIdOptionals, 'headers' | 'cancellationToken'>>);
}
export interface DeleteTrashedFileByIdOptionalsInput {
    readonly headers?: DeleteTrashedFileByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export interface RestoreFileFromTrashRequestBodyParentField {
    readonly id?: string;
}
export interface RestoreFileFromTrashRequestBody {
    readonly name?: string;
    readonly parent?: RestoreFileFromTrashRequestBodyParentField;
}
export interface RestoreFileFromTrashQueryParams {
    readonly fields?: readonly string[];
}
export declare class RestoreFileFromTrashHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<RestoreFileFromTrashHeaders, 'extraHeaders'> & Partial<Pick<RestoreFileFromTrashHeaders, 'extraHeaders'>>);
}
export interface RestoreFileFromTrashHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export interface GetTrashedFileByIdQueryParams {
    readonly fields?: readonly string[];
}
export declare class GetTrashedFileByIdHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetTrashedFileByIdHeaders, 'extraHeaders'> & Partial<Pick<GetTrashedFileByIdHeaders, 'extraHeaders'>>);
}
export interface GetTrashedFileByIdHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class DeleteTrashedFileByIdHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<DeleteTrashedFileByIdHeaders, 'extraHeaders'> & Partial<Pick<DeleteTrashedFileByIdHeaders, 'extraHeaders'>>);
}
export interface DeleteTrashedFileByIdHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class TrashedFilesManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<TrashedFilesManager, 'networkSession' | 'restoreFileFromTrash' | 'getTrashedFileById' | 'deleteTrashedFileById'> & Partial<Pick<TrashedFilesManager, 'networkSession'>>);
    restoreFileFromTrash(fileId: string, optionalsInput?: RestoreFileFromTrashOptionalsInput): Promise<TrashFileRestored>;
    getTrashedFileById(fileId: string, optionalsInput?: GetTrashedFileByIdOptionalsInput): Promise<TrashFile>;
    deleteTrashedFileById(fileId: string, optionalsInput?: DeleteTrashedFileByIdOptionalsInput): Promise<undefined>;
}
export interface TrashedFilesManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
export declare function serializeRestoreFileFromTrashRequestBodyParentField(val: RestoreFileFromTrashRequestBodyParentField): SerializedData;
export declare function deserializeRestoreFileFromTrashRequestBodyParentField(val: SerializedData): RestoreFileFromTrashRequestBodyParentField;
export declare function serializeRestoreFileFromTrashRequestBody(val: RestoreFileFromTrashRequestBody): SerializedData;
export declare function deserializeRestoreFileFromTrashRequestBody(val: SerializedData): RestoreFileFromTrashRequestBody;
