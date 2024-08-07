import { TrashWebLinkRestored } from '../schemas/trashWebLinkRestored.generated.js';
import { TrashWebLink } from '../schemas/trashWebLink.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { CancellationToken } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export declare class RestoreWeblinkFromTrashOptionals {
    readonly requestBody: RestoreWeblinkFromTrashRequestBody;
    readonly queryParams: RestoreWeblinkFromTrashQueryParams;
    readonly headers: RestoreWeblinkFromTrashHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<RestoreWeblinkFromTrashOptionals, 'requestBody' | 'queryParams' | 'headers' | 'cancellationToken'> & Partial<Pick<RestoreWeblinkFromTrashOptionals, 'requestBody' | 'queryParams' | 'headers' | 'cancellationToken'>>);
}
export interface RestoreWeblinkFromTrashOptionalsInput {
    readonly requestBody?: RestoreWeblinkFromTrashRequestBody;
    readonly queryParams?: RestoreWeblinkFromTrashQueryParams;
    readonly headers?: RestoreWeblinkFromTrashHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetTrashedWebLinkByIdOptionals {
    readonly queryParams: GetTrashedWebLinkByIdQueryParams;
    readonly headers: GetTrashedWebLinkByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetTrashedWebLinkByIdOptionals, 'queryParams' | 'headers' | 'cancellationToken'> & Partial<Pick<GetTrashedWebLinkByIdOptionals, 'queryParams' | 'headers' | 'cancellationToken'>>);
}
export interface GetTrashedWebLinkByIdOptionalsInput {
    readonly queryParams?: GetTrashedWebLinkByIdQueryParams;
    readonly headers?: GetTrashedWebLinkByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class DeleteTrashedWebLinkByIdOptionals {
    readonly headers: DeleteTrashedWebLinkByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<DeleteTrashedWebLinkByIdOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<DeleteTrashedWebLinkByIdOptionals, 'headers' | 'cancellationToken'>>);
}
export interface DeleteTrashedWebLinkByIdOptionalsInput {
    readonly headers?: DeleteTrashedWebLinkByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export interface RestoreWeblinkFromTrashRequestBodyParentField {
    readonly id?: string;
}
export interface RestoreWeblinkFromTrashRequestBody {
    readonly name?: string;
    readonly parent?: RestoreWeblinkFromTrashRequestBodyParentField;
}
export interface RestoreWeblinkFromTrashQueryParams {
    readonly fields?: readonly string[];
}
export declare class RestoreWeblinkFromTrashHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<RestoreWeblinkFromTrashHeaders, 'extraHeaders'> & Partial<Pick<RestoreWeblinkFromTrashHeaders, 'extraHeaders'>>);
}
export interface RestoreWeblinkFromTrashHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export interface GetTrashedWebLinkByIdQueryParams {
    readonly fields?: readonly string[];
}
export declare class GetTrashedWebLinkByIdHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetTrashedWebLinkByIdHeaders, 'extraHeaders'> & Partial<Pick<GetTrashedWebLinkByIdHeaders, 'extraHeaders'>>);
}
export interface GetTrashedWebLinkByIdHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class DeleteTrashedWebLinkByIdHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<DeleteTrashedWebLinkByIdHeaders, 'extraHeaders'> & Partial<Pick<DeleteTrashedWebLinkByIdHeaders, 'extraHeaders'>>);
}
export interface DeleteTrashedWebLinkByIdHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class TrashedWebLinksManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<TrashedWebLinksManager, 'networkSession' | 'restoreWeblinkFromTrash' | 'getTrashedWebLinkById' | 'deleteTrashedWebLinkById'> & Partial<Pick<TrashedWebLinksManager, 'networkSession'>>);
    restoreWeblinkFromTrash(webLinkId: string, optionalsInput?: RestoreWeblinkFromTrashOptionalsInput): Promise<TrashWebLinkRestored>;
    getTrashedWebLinkById(webLinkId: string, optionalsInput?: GetTrashedWebLinkByIdOptionalsInput): Promise<TrashWebLink>;
    deleteTrashedWebLinkById(webLinkId: string, optionalsInput?: DeleteTrashedWebLinkByIdOptionalsInput): Promise<undefined>;
}
export interface TrashedWebLinksManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
export declare function serializeRestoreWeblinkFromTrashRequestBodyParentField(val: RestoreWeblinkFromTrashRequestBodyParentField): SerializedData;
export declare function deserializeRestoreWeblinkFromTrashRequestBodyParentField(val: SerializedData): RestoreWeblinkFromTrashRequestBodyParentField;
export declare function serializeRestoreWeblinkFromTrashRequestBody(val: RestoreWeblinkFromTrashRequestBody): SerializedData;
export declare function deserializeRestoreWeblinkFromTrashRequestBody(val: SerializedData): RestoreWeblinkFromTrashRequestBody;
