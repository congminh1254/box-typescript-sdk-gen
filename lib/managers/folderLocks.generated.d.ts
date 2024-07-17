import { FolderLocks } from '../schemas/folderLocks.generated.js';
import { FolderLock } from '../schemas/folderLock.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { CancellationToken } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export declare class GetFolderLocksOptionals {
    readonly headers: GetFolderLocksHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetFolderLocksOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<GetFolderLocksOptionals, 'headers' | 'cancellationToken'>>);
}
export interface GetFolderLocksOptionalsInput {
    readonly headers?: GetFolderLocksHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class CreateFolderLockOptionals {
    readonly headers: CreateFolderLockHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<CreateFolderLockOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<CreateFolderLockOptionals, 'headers' | 'cancellationToken'>>);
}
export interface CreateFolderLockOptionalsInput {
    readonly headers?: CreateFolderLockHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class DeleteFolderLockByIdOptionals {
    readonly headers: DeleteFolderLockByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<DeleteFolderLockByIdOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<DeleteFolderLockByIdOptionals, 'headers' | 'cancellationToken'>>);
}
export interface DeleteFolderLockByIdOptionalsInput {
    readonly headers?: DeleteFolderLockByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export interface GetFolderLocksQueryParams {
    readonly folderId: string;
}
export declare class GetFolderLocksHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetFolderLocksHeaders, 'extraHeaders'> & Partial<Pick<GetFolderLocksHeaders, 'extraHeaders'>>);
}
export interface GetFolderLocksHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export interface CreateFolderLockRequestBodyLockedOperationsField {
    readonly move: boolean;
    readonly delete: boolean;
}
export interface CreateFolderLockRequestBodyFolderField {
    readonly type: string;
    readonly id: string;
}
export interface CreateFolderLockRequestBody {
    readonly lockedOperations?: CreateFolderLockRequestBodyLockedOperationsField;
    readonly folder: CreateFolderLockRequestBodyFolderField;
}
export declare class CreateFolderLockHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<CreateFolderLockHeaders, 'extraHeaders'> & Partial<Pick<CreateFolderLockHeaders, 'extraHeaders'>>);
}
export interface CreateFolderLockHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class DeleteFolderLockByIdHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<DeleteFolderLockByIdHeaders, 'extraHeaders'> & Partial<Pick<DeleteFolderLockByIdHeaders, 'extraHeaders'>>);
}
export interface DeleteFolderLockByIdHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class FolderLocksManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<FolderLocksManager, 'networkSession' | 'getFolderLocks' | 'createFolderLock' | 'deleteFolderLockById'> & Partial<Pick<FolderLocksManager, 'networkSession'>>);
    getFolderLocks(queryParams: GetFolderLocksQueryParams, optionalsInput?: GetFolderLocksOptionalsInput): Promise<FolderLocks>;
    createFolderLock(requestBody: CreateFolderLockRequestBody, optionalsInput?: CreateFolderLockOptionalsInput): Promise<FolderLock>;
    deleteFolderLockById(folderLockId: string, optionalsInput?: DeleteFolderLockByIdOptionalsInput): Promise<undefined>;
}
export interface FolderLocksManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
export declare function serializeCreateFolderLockRequestBodyLockedOperationsField(val: CreateFolderLockRequestBodyLockedOperationsField): SerializedData;
export declare function deserializeCreateFolderLockRequestBodyLockedOperationsField(val: SerializedData): CreateFolderLockRequestBodyLockedOperationsField;
export declare function serializeCreateFolderLockRequestBodyFolderField(val: CreateFolderLockRequestBodyFolderField): SerializedData;
export declare function deserializeCreateFolderLockRequestBodyFolderField(val: SerializedData): CreateFolderLockRequestBodyFolderField;
export declare function serializeCreateFolderLockRequestBody(val: CreateFolderLockRequestBody): SerializedData;
export declare function deserializeCreateFolderLockRequestBody(val: SerializedData): CreateFolderLockRequestBody;
