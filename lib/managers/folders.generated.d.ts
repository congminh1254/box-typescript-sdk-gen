import { FolderFull } from '../schemas/folderFull.generated.js';
import { Items } from '../schemas/items.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { CancellationToken } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
import { DateTime } from '../internal/utils.js';
export declare class GetFolderByIdOptionals {
    readonly queryParams: GetFolderByIdQueryParams;
    readonly headers: GetFolderByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetFolderByIdOptionals, 'queryParams' | 'headers' | 'cancellationToken'> & Partial<Pick<GetFolderByIdOptionals, 'queryParams' | 'headers' | 'cancellationToken'>>);
}
export interface GetFolderByIdOptionalsInput {
    readonly queryParams?: GetFolderByIdQueryParams;
    readonly headers?: GetFolderByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class UpdateFolderByIdOptionals {
    readonly requestBody: UpdateFolderByIdRequestBody;
    readonly queryParams: UpdateFolderByIdQueryParams;
    readonly headers: UpdateFolderByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<UpdateFolderByIdOptionals, 'requestBody' | 'queryParams' | 'headers' | 'cancellationToken'> & Partial<Pick<UpdateFolderByIdOptionals, 'requestBody' | 'queryParams' | 'headers' | 'cancellationToken'>>);
}
export interface UpdateFolderByIdOptionalsInput {
    readonly requestBody?: UpdateFolderByIdRequestBody;
    readonly queryParams?: UpdateFolderByIdQueryParams;
    readonly headers?: UpdateFolderByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class DeleteFolderByIdOptionals {
    readonly queryParams: DeleteFolderByIdQueryParams;
    readonly headers: DeleteFolderByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<DeleteFolderByIdOptionals, 'queryParams' | 'headers' | 'cancellationToken'> & Partial<Pick<DeleteFolderByIdOptionals, 'queryParams' | 'headers' | 'cancellationToken'>>);
}
export interface DeleteFolderByIdOptionalsInput {
    readonly queryParams?: DeleteFolderByIdQueryParams;
    readonly headers?: DeleteFolderByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetFolderItemsOptionals {
    readonly queryParams: GetFolderItemsQueryParams;
    readonly headers: GetFolderItemsHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetFolderItemsOptionals, 'queryParams' | 'headers' | 'cancellationToken'> & Partial<Pick<GetFolderItemsOptionals, 'queryParams' | 'headers' | 'cancellationToken'>>);
}
export interface GetFolderItemsOptionalsInput {
    readonly queryParams?: GetFolderItemsQueryParams;
    readonly headers?: GetFolderItemsHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class CreateFolderOptionals {
    readonly queryParams: CreateFolderQueryParams;
    readonly headers: CreateFolderHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<CreateFolderOptionals, 'queryParams' | 'headers' | 'cancellationToken'> & Partial<Pick<CreateFolderOptionals, 'queryParams' | 'headers' | 'cancellationToken'>>);
}
export interface CreateFolderOptionalsInput {
    readonly queryParams?: CreateFolderQueryParams;
    readonly headers?: CreateFolderHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class CopyFolderOptionals {
    readonly queryParams: CopyFolderQueryParams;
    readonly headers: CopyFolderHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<CopyFolderOptionals, 'queryParams' | 'headers' | 'cancellationToken'> & Partial<Pick<CopyFolderOptionals, 'queryParams' | 'headers' | 'cancellationToken'>>);
}
export interface CopyFolderOptionalsInput {
    readonly queryParams?: CopyFolderQueryParams;
    readonly headers?: CopyFolderHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export type GetFolderByIdQueryParamsSortField = 'id' | 'name' | 'date' | 'size';
export type GetFolderByIdQueryParamsDirectionField = 'ASC' | 'DESC';
export interface GetFolderByIdQueryParams {
    readonly fields?: readonly string[];
    readonly sort?: GetFolderByIdQueryParamsSortField;
    readonly direction?: GetFolderByIdQueryParamsDirectionField;
    readonly offset?: number;
    readonly limit?: number;
}
export declare class GetFolderByIdHeaders {
    readonly ifNoneMatch?: string;
    readonly boxapi?: string;
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetFolderByIdHeaders, 'extraHeaders'> & Partial<Pick<GetFolderByIdHeaders, 'extraHeaders'>>);
}
export interface GetFolderByIdHeadersInput {
    readonly ifNoneMatch?: string;
    readonly boxapi?: string;
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export type UpdateFolderByIdRequestBodySyncStateField = 'synced' | 'not_synced' | 'partially_synced';
export interface UpdateFolderByIdRequestBodyParentField {
    readonly id?: string;
}
export type UpdateFolderByIdRequestBodySharedLinkAccessField = 'open' | 'company' | 'collaborators';
export interface UpdateFolderByIdRequestBodySharedLinkPermissionsField {
    readonly canDownload?: boolean;
}
export interface UpdateFolderByIdRequestBodySharedLinkField {
    readonly access?: UpdateFolderByIdRequestBodySharedLinkAccessField;
    readonly password?: string;
    readonly vanityName?: string;
    readonly unsharedAt?: DateTime;
    readonly permissions?: UpdateFolderByIdRequestBodySharedLinkPermissionsField;
}
export type UpdateFolderByIdRequestBodyFolderUploadEmailAccessField = 'open' | 'collaborators';
export interface UpdateFolderByIdRequestBodyFolderUploadEmailField {
    readonly access?: UpdateFolderByIdRequestBodyFolderUploadEmailAccessField;
}
export interface UpdateFolderByIdRequestBodyCollectionsField {
    readonly id?: string;
    readonly type?: string;
}
export interface UpdateFolderByIdRequestBody {
    readonly name?: string;
    readonly description?: string;
    readonly syncState?: UpdateFolderByIdRequestBodySyncStateField;
    readonly canNonOwnersInvite?: boolean;
    readonly parent?: UpdateFolderByIdRequestBodyParentField;
    readonly sharedLink?: UpdateFolderByIdRequestBodySharedLinkField;
    readonly folderUploadEmail?: UpdateFolderByIdRequestBodyFolderUploadEmailField;
    readonly tags?: readonly string[];
    readonly isCollaborationRestrictedToEnterprise?: boolean;
    readonly collections?: readonly UpdateFolderByIdRequestBodyCollectionsField[];
    readonly canNonOwnersViewCollaborators?: boolean;
}
export interface UpdateFolderByIdQueryParams {
    readonly fields?: readonly string[];
}
export declare class UpdateFolderByIdHeaders {
    readonly ifMatch?: string;
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<UpdateFolderByIdHeaders, 'extraHeaders'> & Partial<Pick<UpdateFolderByIdHeaders, 'extraHeaders'>>);
}
export interface UpdateFolderByIdHeadersInput {
    readonly ifMatch?: string;
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export interface DeleteFolderByIdQueryParams {
    readonly recursive?: boolean;
}
export declare class DeleteFolderByIdHeaders {
    readonly ifMatch?: string;
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<DeleteFolderByIdHeaders, 'extraHeaders'> & Partial<Pick<DeleteFolderByIdHeaders, 'extraHeaders'>>);
}
export interface DeleteFolderByIdHeadersInput {
    readonly ifMatch?: string;
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export type GetFolderItemsQueryParamsSortField = 'id' | 'name' | 'date' | 'size';
export type GetFolderItemsQueryParamsDirectionField = 'ASC' | 'DESC';
export interface GetFolderItemsQueryParams {
    readonly fields?: readonly string[];
    readonly usemarker?: boolean;
    readonly marker?: string;
    readonly offset?: number;
    readonly limit?: number;
    readonly sort?: GetFolderItemsQueryParamsSortField;
    readonly direction?: GetFolderItemsQueryParamsDirectionField;
}
export declare class GetFolderItemsHeaders {
    readonly boxapi?: string;
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetFolderItemsHeaders, 'extraHeaders'> & Partial<Pick<GetFolderItemsHeaders, 'extraHeaders'>>);
}
export interface GetFolderItemsHeadersInput {
    readonly boxapi?: string;
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export interface CreateFolderRequestBodyParentField {
    readonly id: string;
}
export type CreateFolderRequestBodyFolderUploadEmailAccessField = 'open' | 'collaborators';
export interface CreateFolderRequestBodyFolderUploadEmailField {
    readonly access?: CreateFolderRequestBodyFolderUploadEmailAccessField;
}
export type CreateFolderRequestBodySyncStateField = 'synced' | 'not_synced' | 'partially_synced';
export interface CreateFolderRequestBody {
    readonly name: string;
    readonly parent: CreateFolderRequestBodyParentField;
    readonly folderUploadEmail?: CreateFolderRequestBodyFolderUploadEmailField;
    readonly syncState?: CreateFolderRequestBodySyncStateField;
}
export interface CreateFolderQueryParams {
    readonly fields?: readonly string[];
}
export declare class CreateFolderHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<CreateFolderHeaders, 'extraHeaders'> & Partial<Pick<CreateFolderHeaders, 'extraHeaders'>>);
}
export interface CreateFolderHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export interface CopyFolderRequestBodyParentField {
    readonly id: string;
}
export interface CopyFolderRequestBody {
    readonly name?: string;
    readonly parent: CopyFolderRequestBodyParentField;
}
export interface CopyFolderQueryParams {
    readonly fields?: readonly string[];
}
export declare class CopyFolderHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<CopyFolderHeaders, 'extraHeaders'> & Partial<Pick<CopyFolderHeaders, 'extraHeaders'>>);
}
export interface CopyFolderHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class FoldersManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<FoldersManager, 'networkSession' | 'getFolderById' | 'updateFolderById' | 'deleteFolderById' | 'getFolderItems' | 'createFolder' | 'copyFolder'> & Partial<Pick<FoldersManager, 'networkSession'>>);
    getFolderById(folderId: string, optionalsInput?: GetFolderByIdOptionalsInput): Promise<FolderFull>;
    updateFolderById(folderId: string, optionalsInput?: UpdateFolderByIdOptionalsInput): Promise<FolderFull>;
    deleteFolderById(folderId: string, optionalsInput?: DeleteFolderByIdOptionalsInput): Promise<undefined>;
    getFolderItems(folderId: string, optionalsInput?: GetFolderItemsOptionalsInput): Promise<Items>;
    createFolder(requestBody: CreateFolderRequestBody, optionalsInput?: CreateFolderOptionalsInput): Promise<FolderFull>;
    copyFolder(folderId: string, requestBody: CopyFolderRequestBody, optionalsInput?: CopyFolderOptionalsInput): Promise<FolderFull>;
}
export interface FoldersManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
export declare function serializeGetFolderByIdQueryParamsSortField(val: GetFolderByIdQueryParamsSortField): SerializedData;
export declare function deserializeGetFolderByIdQueryParamsSortField(val: SerializedData): GetFolderByIdQueryParamsSortField;
export declare function serializeGetFolderByIdQueryParamsDirectionField(val: GetFolderByIdQueryParamsDirectionField): SerializedData;
export declare function deserializeGetFolderByIdQueryParamsDirectionField(val: SerializedData): GetFolderByIdQueryParamsDirectionField;
export declare function serializeUpdateFolderByIdRequestBodySyncStateField(val: UpdateFolderByIdRequestBodySyncStateField): SerializedData;
export declare function deserializeUpdateFolderByIdRequestBodySyncStateField(val: SerializedData): UpdateFolderByIdRequestBodySyncStateField;
export declare function serializeUpdateFolderByIdRequestBodyParentField(val: UpdateFolderByIdRequestBodyParentField): SerializedData;
export declare function deserializeUpdateFolderByIdRequestBodyParentField(val: SerializedData): UpdateFolderByIdRequestBodyParentField;
export declare function serializeUpdateFolderByIdRequestBodySharedLinkAccessField(val: UpdateFolderByIdRequestBodySharedLinkAccessField): SerializedData;
export declare function deserializeUpdateFolderByIdRequestBodySharedLinkAccessField(val: SerializedData): UpdateFolderByIdRequestBodySharedLinkAccessField;
export declare function serializeUpdateFolderByIdRequestBodySharedLinkPermissionsField(val: UpdateFolderByIdRequestBodySharedLinkPermissionsField): SerializedData;
export declare function deserializeUpdateFolderByIdRequestBodySharedLinkPermissionsField(val: SerializedData): UpdateFolderByIdRequestBodySharedLinkPermissionsField;
export declare function serializeUpdateFolderByIdRequestBodySharedLinkField(val: UpdateFolderByIdRequestBodySharedLinkField): SerializedData;
export declare function deserializeUpdateFolderByIdRequestBodySharedLinkField(val: SerializedData): UpdateFolderByIdRequestBodySharedLinkField;
export declare function serializeUpdateFolderByIdRequestBodyFolderUploadEmailAccessField(val: UpdateFolderByIdRequestBodyFolderUploadEmailAccessField): SerializedData;
export declare function deserializeUpdateFolderByIdRequestBodyFolderUploadEmailAccessField(val: SerializedData): UpdateFolderByIdRequestBodyFolderUploadEmailAccessField;
export declare function serializeUpdateFolderByIdRequestBodyFolderUploadEmailField(val: UpdateFolderByIdRequestBodyFolderUploadEmailField): SerializedData;
export declare function deserializeUpdateFolderByIdRequestBodyFolderUploadEmailField(val: SerializedData): UpdateFolderByIdRequestBodyFolderUploadEmailField;
export declare function serializeUpdateFolderByIdRequestBodyCollectionsField(val: UpdateFolderByIdRequestBodyCollectionsField): SerializedData;
export declare function deserializeUpdateFolderByIdRequestBodyCollectionsField(val: SerializedData): UpdateFolderByIdRequestBodyCollectionsField;
export declare function serializeUpdateFolderByIdRequestBody(val: UpdateFolderByIdRequestBody): SerializedData;
export declare function deserializeUpdateFolderByIdRequestBody(val: SerializedData): UpdateFolderByIdRequestBody;
export declare function serializeGetFolderItemsQueryParamsSortField(val: GetFolderItemsQueryParamsSortField): SerializedData;
export declare function deserializeGetFolderItemsQueryParamsSortField(val: SerializedData): GetFolderItemsQueryParamsSortField;
export declare function serializeGetFolderItemsQueryParamsDirectionField(val: GetFolderItemsQueryParamsDirectionField): SerializedData;
export declare function deserializeGetFolderItemsQueryParamsDirectionField(val: SerializedData): GetFolderItemsQueryParamsDirectionField;
export declare function serializeCreateFolderRequestBodyParentField(val: CreateFolderRequestBodyParentField): SerializedData;
export declare function deserializeCreateFolderRequestBodyParentField(val: SerializedData): CreateFolderRequestBodyParentField;
export declare function serializeCreateFolderRequestBodyFolderUploadEmailAccessField(val: CreateFolderRequestBodyFolderUploadEmailAccessField): SerializedData;
export declare function deserializeCreateFolderRequestBodyFolderUploadEmailAccessField(val: SerializedData): CreateFolderRequestBodyFolderUploadEmailAccessField;
export declare function serializeCreateFolderRequestBodyFolderUploadEmailField(val: CreateFolderRequestBodyFolderUploadEmailField): SerializedData;
export declare function deserializeCreateFolderRequestBodyFolderUploadEmailField(val: SerializedData): CreateFolderRequestBodyFolderUploadEmailField;
export declare function serializeCreateFolderRequestBodySyncStateField(val: CreateFolderRequestBodySyncStateField): SerializedData;
export declare function deserializeCreateFolderRequestBodySyncStateField(val: SerializedData): CreateFolderRequestBodySyncStateField;
export declare function serializeCreateFolderRequestBody(val: CreateFolderRequestBody): SerializedData;
export declare function deserializeCreateFolderRequestBody(val: SerializedData): CreateFolderRequestBody;
export declare function serializeCopyFolderRequestBodyParentField(val: CopyFolderRequestBodyParentField): SerializedData;
export declare function deserializeCopyFolderRequestBodyParentField(val: SerializedData): CopyFolderRequestBodyParentField;
export declare function serializeCopyFolderRequestBody(val: CopyFolderRequestBody): SerializedData;
export declare function deserializeCopyFolderRequestBody(val: SerializedData): CopyFolderRequestBody;
