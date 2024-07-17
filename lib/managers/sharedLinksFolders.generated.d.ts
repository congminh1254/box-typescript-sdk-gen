import { FolderFull } from '../schemas/folderFull.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { CancellationToken } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
import { DateTime } from '../internal/utils.js';
export declare class FindFolderForSharedLinkOptionals {
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<FindFolderForSharedLinkOptionals, 'cancellationToken'> & Partial<Pick<FindFolderForSharedLinkOptionals, 'cancellationToken'>>);
}
export interface FindFolderForSharedLinkOptionalsInput {
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetSharedLinkForFolderOptionals {
    readonly headers: GetSharedLinkForFolderHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetSharedLinkForFolderOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<GetSharedLinkForFolderOptionals, 'headers' | 'cancellationToken'>>);
}
export interface GetSharedLinkForFolderOptionalsInput {
    readonly headers?: GetSharedLinkForFolderHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class AddShareLinkToFolderOptionals {
    readonly headers: AddShareLinkToFolderHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<AddShareLinkToFolderOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<AddShareLinkToFolderOptionals, 'headers' | 'cancellationToken'>>);
}
export interface AddShareLinkToFolderOptionalsInput {
    readonly headers?: AddShareLinkToFolderHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class UpdateSharedLinkOnFolderOptionals {
    readonly headers: UpdateSharedLinkOnFolderHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<UpdateSharedLinkOnFolderOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<UpdateSharedLinkOnFolderOptionals, 'headers' | 'cancellationToken'>>);
}
export interface UpdateSharedLinkOnFolderOptionalsInput {
    readonly headers?: UpdateSharedLinkOnFolderHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class RemoveSharedLinkFromFolderOptionals {
    readonly headers: RemoveSharedLinkFromFolderHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<RemoveSharedLinkFromFolderOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<RemoveSharedLinkFromFolderOptionals, 'headers' | 'cancellationToken'>>);
}
export interface RemoveSharedLinkFromFolderOptionalsInput {
    readonly headers?: RemoveSharedLinkFromFolderHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export interface FindFolderForSharedLinkQueryParams {
    readonly fields?: readonly string[];
}
export declare class FindFolderForSharedLinkHeaders {
    readonly ifNoneMatch?: string;
    readonly boxapi: string;
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<FindFolderForSharedLinkHeaders, 'extraHeaders'> & Partial<Pick<FindFolderForSharedLinkHeaders, 'extraHeaders'>>);
}
export interface FindFolderForSharedLinkHeadersInput {
    readonly ifNoneMatch?: string;
    readonly boxapi: string;
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export interface GetSharedLinkForFolderQueryParams {
    readonly fields: string;
}
export declare class GetSharedLinkForFolderHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetSharedLinkForFolderHeaders, 'extraHeaders'> & Partial<Pick<GetSharedLinkForFolderHeaders, 'extraHeaders'>>);
}
export interface GetSharedLinkForFolderHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export type AddShareLinkToFolderRequestBodySharedLinkAccessField = 'open' | 'company' | 'collaborators';
export interface AddShareLinkToFolderRequestBodySharedLinkPermissionsField {
    readonly canDownload?: boolean;
    readonly canPreview?: boolean;
    readonly canEdit?: boolean;
}
export interface AddShareLinkToFolderRequestBodySharedLinkField {
    readonly access?: AddShareLinkToFolderRequestBodySharedLinkAccessField;
    readonly password?: string;
    readonly vanityName?: string;
    readonly unsharedAt?: DateTime;
    readonly permissions?: AddShareLinkToFolderRequestBodySharedLinkPermissionsField;
}
export interface AddShareLinkToFolderRequestBody {
    readonly sharedLink?: AddShareLinkToFolderRequestBodySharedLinkField;
}
export interface AddShareLinkToFolderQueryParams {
    readonly fields: string;
}
export declare class AddShareLinkToFolderHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<AddShareLinkToFolderHeaders, 'extraHeaders'> & Partial<Pick<AddShareLinkToFolderHeaders, 'extraHeaders'>>);
}
export interface AddShareLinkToFolderHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export type UpdateSharedLinkOnFolderRequestBodySharedLinkAccessField = 'open' | 'company' | 'collaborators';
export interface UpdateSharedLinkOnFolderRequestBodySharedLinkPermissionsField {
    readonly canDownload?: boolean;
    readonly canPreview?: boolean;
    readonly canEdit?: boolean;
}
export interface UpdateSharedLinkOnFolderRequestBodySharedLinkField {
    readonly access?: UpdateSharedLinkOnFolderRequestBodySharedLinkAccessField;
    readonly password?: string;
    readonly vanityName?: string;
    readonly unsharedAt?: DateTime;
    readonly permissions?: UpdateSharedLinkOnFolderRequestBodySharedLinkPermissionsField;
}
export interface UpdateSharedLinkOnFolderRequestBody {
    readonly sharedLink?: UpdateSharedLinkOnFolderRequestBodySharedLinkField;
}
export interface UpdateSharedLinkOnFolderQueryParams {
    readonly fields: string;
}
export declare class UpdateSharedLinkOnFolderHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<UpdateSharedLinkOnFolderHeaders, 'extraHeaders'> & Partial<Pick<UpdateSharedLinkOnFolderHeaders, 'extraHeaders'>>);
}
export interface UpdateSharedLinkOnFolderHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export interface RemoveSharedLinkFromFolderRequestBodySharedLinkField {
}
export interface RemoveSharedLinkFromFolderRequestBody {
    readonly sharedLink?: RemoveSharedLinkFromFolderRequestBodySharedLinkField;
}
export interface RemoveSharedLinkFromFolderQueryParams {
    readonly fields: string;
}
export declare class RemoveSharedLinkFromFolderHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<RemoveSharedLinkFromFolderHeaders, 'extraHeaders'> & Partial<Pick<RemoveSharedLinkFromFolderHeaders, 'extraHeaders'>>);
}
export interface RemoveSharedLinkFromFolderHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class SharedLinksFoldersManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<SharedLinksFoldersManager, 'networkSession' | 'findFolderForSharedLink' | 'getSharedLinkForFolder' | 'addShareLinkToFolder' | 'updateSharedLinkOnFolder' | 'removeSharedLinkFromFolder'> & Partial<Pick<SharedLinksFoldersManager, 'networkSession'>>);
    findFolderForSharedLink(queryParams: FindFolderForSharedLinkQueryParams | undefined, headersInput: FindFolderForSharedLinkHeadersInput, optionalsInput?: FindFolderForSharedLinkOptionalsInput): Promise<FolderFull>;
    getSharedLinkForFolder(folderId: string, queryParams: GetSharedLinkForFolderQueryParams, optionalsInput?: GetSharedLinkForFolderOptionalsInput): Promise<FolderFull>;
    addShareLinkToFolder(folderId: string, requestBody: AddShareLinkToFolderRequestBody | undefined, queryParams: AddShareLinkToFolderQueryParams, optionalsInput?: AddShareLinkToFolderOptionalsInput): Promise<FolderFull>;
    updateSharedLinkOnFolder(folderId: string, requestBody: UpdateSharedLinkOnFolderRequestBody | undefined, queryParams: UpdateSharedLinkOnFolderQueryParams, optionalsInput?: UpdateSharedLinkOnFolderOptionalsInput): Promise<FolderFull>;
    removeSharedLinkFromFolder(folderId: string, requestBody: RemoveSharedLinkFromFolderRequestBody | undefined, queryParams: RemoveSharedLinkFromFolderQueryParams, optionalsInput?: RemoveSharedLinkFromFolderOptionalsInput): Promise<FolderFull>;
}
export interface SharedLinksFoldersManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
export declare function serializeAddShareLinkToFolderRequestBodySharedLinkAccessField(val: AddShareLinkToFolderRequestBodySharedLinkAccessField): SerializedData;
export declare function deserializeAddShareLinkToFolderRequestBodySharedLinkAccessField(val: SerializedData): AddShareLinkToFolderRequestBodySharedLinkAccessField;
export declare function serializeAddShareLinkToFolderRequestBodySharedLinkPermissionsField(val: AddShareLinkToFolderRequestBodySharedLinkPermissionsField): SerializedData;
export declare function deserializeAddShareLinkToFolderRequestBodySharedLinkPermissionsField(val: SerializedData): AddShareLinkToFolderRequestBodySharedLinkPermissionsField;
export declare function serializeAddShareLinkToFolderRequestBodySharedLinkField(val: AddShareLinkToFolderRequestBodySharedLinkField): SerializedData;
export declare function deserializeAddShareLinkToFolderRequestBodySharedLinkField(val: SerializedData): AddShareLinkToFolderRequestBodySharedLinkField;
export declare function serializeAddShareLinkToFolderRequestBody(val: AddShareLinkToFolderRequestBody): SerializedData;
export declare function deserializeAddShareLinkToFolderRequestBody(val: SerializedData): AddShareLinkToFolderRequestBody;
export declare function serializeUpdateSharedLinkOnFolderRequestBodySharedLinkAccessField(val: UpdateSharedLinkOnFolderRequestBodySharedLinkAccessField): SerializedData;
export declare function deserializeUpdateSharedLinkOnFolderRequestBodySharedLinkAccessField(val: SerializedData): UpdateSharedLinkOnFolderRequestBodySharedLinkAccessField;
export declare function serializeUpdateSharedLinkOnFolderRequestBodySharedLinkPermissionsField(val: UpdateSharedLinkOnFolderRequestBodySharedLinkPermissionsField): SerializedData;
export declare function deserializeUpdateSharedLinkOnFolderRequestBodySharedLinkPermissionsField(val: SerializedData): UpdateSharedLinkOnFolderRequestBodySharedLinkPermissionsField;
export declare function serializeUpdateSharedLinkOnFolderRequestBodySharedLinkField(val: UpdateSharedLinkOnFolderRequestBodySharedLinkField): SerializedData;
export declare function deserializeUpdateSharedLinkOnFolderRequestBodySharedLinkField(val: SerializedData): UpdateSharedLinkOnFolderRequestBodySharedLinkField;
export declare function serializeUpdateSharedLinkOnFolderRequestBody(val: UpdateSharedLinkOnFolderRequestBody): SerializedData;
export declare function deserializeUpdateSharedLinkOnFolderRequestBody(val: SerializedData): UpdateSharedLinkOnFolderRequestBody;
export declare function serializeRemoveSharedLinkFromFolderRequestBodySharedLinkField(val: RemoveSharedLinkFromFolderRequestBodySharedLinkField): SerializedData;
export declare function deserializeRemoveSharedLinkFromFolderRequestBodySharedLinkField(val: SerializedData): RemoveSharedLinkFromFolderRequestBodySharedLinkField;
export declare function serializeRemoveSharedLinkFromFolderRequestBody(val: RemoveSharedLinkFromFolderRequestBody): SerializedData;
export declare function deserializeRemoveSharedLinkFromFolderRequestBody(val: SerializedData): RemoveSharedLinkFromFolderRequestBody;
