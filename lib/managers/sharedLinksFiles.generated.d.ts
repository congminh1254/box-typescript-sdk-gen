import { FileFull } from '../schemas/fileFull.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { CancellationToken } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
import { DateTime } from '../internal/utils.js';
export declare class FindFileForSharedLinkOptionals {
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<FindFileForSharedLinkOptionals, 'cancellationToken'> & Partial<Pick<FindFileForSharedLinkOptionals, 'cancellationToken'>>);
}
export interface FindFileForSharedLinkOptionalsInput {
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetSharedLinkForFileOptionals {
    readonly headers: GetSharedLinkForFileHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetSharedLinkForFileOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<GetSharedLinkForFileOptionals, 'headers' | 'cancellationToken'>>);
}
export interface GetSharedLinkForFileOptionalsInput {
    readonly headers?: GetSharedLinkForFileHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class AddShareLinkToFileOptionals {
    readonly headers: AddShareLinkToFileHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<AddShareLinkToFileOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<AddShareLinkToFileOptionals, 'headers' | 'cancellationToken'>>);
}
export interface AddShareLinkToFileOptionalsInput {
    readonly headers?: AddShareLinkToFileHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class UpdateSharedLinkOnFileOptionals {
    readonly headers: UpdateSharedLinkOnFileHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<UpdateSharedLinkOnFileOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<UpdateSharedLinkOnFileOptionals, 'headers' | 'cancellationToken'>>);
}
export interface UpdateSharedLinkOnFileOptionalsInput {
    readonly headers?: UpdateSharedLinkOnFileHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class RemoveSharedLinkFromFileOptionals {
    readonly headers: RemoveSharedLinkFromFileHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<RemoveSharedLinkFromFileOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<RemoveSharedLinkFromFileOptionals, 'headers' | 'cancellationToken'>>);
}
export interface RemoveSharedLinkFromFileOptionalsInput {
    readonly headers?: RemoveSharedLinkFromFileHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export interface FindFileForSharedLinkQueryParams {
    readonly fields?: readonly string[];
}
export declare class FindFileForSharedLinkHeaders {
    readonly ifNoneMatch?: string;
    readonly boxapi: string;
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<FindFileForSharedLinkHeaders, 'extraHeaders'> & Partial<Pick<FindFileForSharedLinkHeaders, 'extraHeaders'>>);
}
export interface FindFileForSharedLinkHeadersInput {
    readonly ifNoneMatch?: string;
    readonly boxapi: string;
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export interface GetSharedLinkForFileQueryParams {
    readonly fields: string;
}
export declare class GetSharedLinkForFileHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetSharedLinkForFileHeaders, 'extraHeaders'> & Partial<Pick<GetSharedLinkForFileHeaders, 'extraHeaders'>>);
}
export interface GetSharedLinkForFileHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export type AddShareLinkToFileRequestBodySharedLinkAccessField = 'open' | 'company' | 'collaborators';
export interface AddShareLinkToFileRequestBodySharedLinkPermissionsField {
    readonly canDownload?: boolean;
    readonly canPreview?: boolean;
    readonly canEdit?: boolean;
}
export interface AddShareLinkToFileRequestBodySharedLinkField {
    readonly access?: AddShareLinkToFileRequestBodySharedLinkAccessField;
    readonly password?: string;
    readonly vanityName?: string;
    readonly unsharedAt?: DateTime;
    readonly permissions?: AddShareLinkToFileRequestBodySharedLinkPermissionsField;
}
export interface AddShareLinkToFileRequestBody {
    readonly sharedLink?: AddShareLinkToFileRequestBodySharedLinkField;
}
export interface AddShareLinkToFileQueryParams {
    readonly fields: string;
}
export declare class AddShareLinkToFileHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<AddShareLinkToFileHeaders, 'extraHeaders'> & Partial<Pick<AddShareLinkToFileHeaders, 'extraHeaders'>>);
}
export interface AddShareLinkToFileHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export type UpdateSharedLinkOnFileRequestBodySharedLinkAccessField = 'open' | 'company' | 'collaborators';
export interface UpdateSharedLinkOnFileRequestBodySharedLinkPermissionsField {
    readonly canDownload?: boolean;
    readonly canPreview?: boolean;
    readonly canEdit?: boolean;
}
export interface UpdateSharedLinkOnFileRequestBodySharedLinkField {
    readonly access?: UpdateSharedLinkOnFileRequestBodySharedLinkAccessField;
    readonly password?: string;
    readonly vanityName?: string;
    readonly unsharedAt?: DateTime;
    readonly permissions?: UpdateSharedLinkOnFileRequestBodySharedLinkPermissionsField;
}
export interface UpdateSharedLinkOnFileRequestBody {
    readonly sharedLink?: UpdateSharedLinkOnFileRequestBodySharedLinkField;
}
export interface UpdateSharedLinkOnFileQueryParams {
    readonly fields: string;
}
export declare class UpdateSharedLinkOnFileHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<UpdateSharedLinkOnFileHeaders, 'extraHeaders'> & Partial<Pick<UpdateSharedLinkOnFileHeaders, 'extraHeaders'>>);
}
export interface UpdateSharedLinkOnFileHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export interface RemoveSharedLinkFromFileRequestBodySharedLinkField {
}
export interface RemoveSharedLinkFromFileRequestBody {
    readonly sharedLink?: RemoveSharedLinkFromFileRequestBodySharedLinkField;
}
export interface RemoveSharedLinkFromFileQueryParams {
    readonly fields: string;
}
export declare class RemoveSharedLinkFromFileHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<RemoveSharedLinkFromFileHeaders, 'extraHeaders'> & Partial<Pick<RemoveSharedLinkFromFileHeaders, 'extraHeaders'>>);
}
export interface RemoveSharedLinkFromFileHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class SharedLinksFilesManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<SharedLinksFilesManager, 'networkSession' | 'findFileForSharedLink' | 'getSharedLinkForFile' | 'addShareLinkToFile' | 'updateSharedLinkOnFile' | 'removeSharedLinkFromFile'> & Partial<Pick<SharedLinksFilesManager, 'networkSession'>>);
    findFileForSharedLink(queryParams: FindFileForSharedLinkQueryParams | undefined, headersInput: FindFileForSharedLinkHeadersInput, optionalsInput?: FindFileForSharedLinkOptionalsInput): Promise<FileFull>;
    getSharedLinkForFile(fileId: string, queryParams: GetSharedLinkForFileQueryParams, optionalsInput?: GetSharedLinkForFileOptionalsInput): Promise<FileFull>;
    addShareLinkToFile(fileId: string, requestBody: AddShareLinkToFileRequestBody | undefined, queryParams: AddShareLinkToFileQueryParams, optionalsInput?: AddShareLinkToFileOptionalsInput): Promise<FileFull>;
    updateSharedLinkOnFile(fileId: string, requestBody: UpdateSharedLinkOnFileRequestBody | undefined, queryParams: UpdateSharedLinkOnFileQueryParams, optionalsInput?: UpdateSharedLinkOnFileOptionalsInput): Promise<FileFull>;
    removeSharedLinkFromFile(fileId: string, requestBody: RemoveSharedLinkFromFileRequestBody | undefined, queryParams: RemoveSharedLinkFromFileQueryParams, optionalsInput?: RemoveSharedLinkFromFileOptionalsInput): Promise<FileFull>;
}
export interface SharedLinksFilesManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
export declare function serializeAddShareLinkToFileRequestBodySharedLinkAccessField(val: AddShareLinkToFileRequestBodySharedLinkAccessField): SerializedData;
export declare function deserializeAddShareLinkToFileRequestBodySharedLinkAccessField(val: SerializedData): AddShareLinkToFileRequestBodySharedLinkAccessField;
export declare function serializeAddShareLinkToFileRequestBodySharedLinkPermissionsField(val: AddShareLinkToFileRequestBodySharedLinkPermissionsField): SerializedData;
export declare function deserializeAddShareLinkToFileRequestBodySharedLinkPermissionsField(val: SerializedData): AddShareLinkToFileRequestBodySharedLinkPermissionsField;
export declare function serializeAddShareLinkToFileRequestBodySharedLinkField(val: AddShareLinkToFileRequestBodySharedLinkField): SerializedData;
export declare function deserializeAddShareLinkToFileRequestBodySharedLinkField(val: SerializedData): AddShareLinkToFileRequestBodySharedLinkField;
export declare function serializeAddShareLinkToFileRequestBody(val: AddShareLinkToFileRequestBody): SerializedData;
export declare function deserializeAddShareLinkToFileRequestBody(val: SerializedData): AddShareLinkToFileRequestBody;
export declare function serializeUpdateSharedLinkOnFileRequestBodySharedLinkAccessField(val: UpdateSharedLinkOnFileRequestBodySharedLinkAccessField): SerializedData;
export declare function deserializeUpdateSharedLinkOnFileRequestBodySharedLinkAccessField(val: SerializedData): UpdateSharedLinkOnFileRequestBodySharedLinkAccessField;
export declare function serializeUpdateSharedLinkOnFileRequestBodySharedLinkPermissionsField(val: UpdateSharedLinkOnFileRequestBodySharedLinkPermissionsField): SerializedData;
export declare function deserializeUpdateSharedLinkOnFileRequestBodySharedLinkPermissionsField(val: SerializedData): UpdateSharedLinkOnFileRequestBodySharedLinkPermissionsField;
export declare function serializeUpdateSharedLinkOnFileRequestBodySharedLinkField(val: UpdateSharedLinkOnFileRequestBodySharedLinkField): SerializedData;
export declare function deserializeUpdateSharedLinkOnFileRequestBodySharedLinkField(val: SerializedData): UpdateSharedLinkOnFileRequestBodySharedLinkField;
export declare function serializeUpdateSharedLinkOnFileRequestBody(val: UpdateSharedLinkOnFileRequestBody): SerializedData;
export declare function deserializeUpdateSharedLinkOnFileRequestBody(val: SerializedData): UpdateSharedLinkOnFileRequestBody;
export declare function serializeRemoveSharedLinkFromFileRequestBodySharedLinkField(val: RemoveSharedLinkFromFileRequestBodySharedLinkField): SerializedData;
export declare function deserializeRemoveSharedLinkFromFileRequestBodySharedLinkField(val: SerializedData): RemoveSharedLinkFromFileRequestBodySharedLinkField;
export declare function serializeRemoveSharedLinkFromFileRequestBody(val: RemoveSharedLinkFromFileRequestBody): SerializedData;
export declare function deserializeRemoveSharedLinkFromFileRequestBody(val: SerializedData): RemoveSharedLinkFromFileRequestBody;
