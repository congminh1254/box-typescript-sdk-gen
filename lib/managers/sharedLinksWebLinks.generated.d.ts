import { WebLink } from '../schemas/webLink.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { CancellationToken } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
import { DateTime } from '../internal/utils.js';
export declare class FindWebLinkForSharedLinkOptionals {
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<FindWebLinkForSharedLinkOptionals, 'cancellationToken'> & Partial<Pick<FindWebLinkForSharedLinkOptionals, 'cancellationToken'>>);
}
export interface FindWebLinkForSharedLinkOptionalsInput {
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetSharedLinkForWebLinkOptionals {
    readonly headers: GetSharedLinkForWebLinkHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetSharedLinkForWebLinkOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<GetSharedLinkForWebLinkOptionals, 'headers' | 'cancellationToken'>>);
}
export interface GetSharedLinkForWebLinkOptionalsInput {
    readonly headers?: GetSharedLinkForWebLinkHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class AddShareLinkToWebLinkOptionals {
    readonly headers: AddShareLinkToWebLinkHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<AddShareLinkToWebLinkOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<AddShareLinkToWebLinkOptionals, 'headers' | 'cancellationToken'>>);
}
export interface AddShareLinkToWebLinkOptionalsInput {
    readonly headers?: AddShareLinkToWebLinkHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class UpdateSharedLinkOnWebLinkOptionals {
    readonly headers: UpdateSharedLinkOnWebLinkHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<UpdateSharedLinkOnWebLinkOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<UpdateSharedLinkOnWebLinkOptionals, 'headers' | 'cancellationToken'>>);
}
export interface UpdateSharedLinkOnWebLinkOptionalsInput {
    readonly headers?: UpdateSharedLinkOnWebLinkHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class RemoveSharedLinkFromWebLinkOptionals {
    readonly headers: RemoveSharedLinkFromWebLinkHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<RemoveSharedLinkFromWebLinkOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<RemoveSharedLinkFromWebLinkOptionals, 'headers' | 'cancellationToken'>>);
}
export interface RemoveSharedLinkFromWebLinkOptionalsInput {
    readonly headers?: RemoveSharedLinkFromWebLinkHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export interface FindWebLinkForSharedLinkQueryParams {
    readonly fields?: readonly string[];
}
export declare class FindWebLinkForSharedLinkHeaders {
    readonly ifNoneMatch?: string;
    readonly boxapi: string;
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<FindWebLinkForSharedLinkHeaders, 'extraHeaders'> & Partial<Pick<FindWebLinkForSharedLinkHeaders, 'extraHeaders'>>);
}
export interface FindWebLinkForSharedLinkHeadersInput {
    readonly ifNoneMatch?: string;
    readonly boxapi: string;
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export interface GetSharedLinkForWebLinkQueryParams {
    readonly fields: string;
}
export declare class GetSharedLinkForWebLinkHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetSharedLinkForWebLinkHeaders, 'extraHeaders'> & Partial<Pick<GetSharedLinkForWebLinkHeaders, 'extraHeaders'>>);
}
export interface GetSharedLinkForWebLinkHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export type AddShareLinkToWebLinkRequestBodySharedLinkAccessField = 'open' | 'company' | 'collaborators';
export interface AddShareLinkToWebLinkRequestBodySharedLinkPermissionsField {
    readonly canDownload?: boolean;
    readonly canPreview?: boolean;
    readonly canEdit?: boolean;
}
export interface AddShareLinkToWebLinkRequestBodySharedLinkField {
    readonly access?: AddShareLinkToWebLinkRequestBodySharedLinkAccessField;
    readonly password?: string;
    readonly vanityName?: string;
    readonly unsharedAt?: DateTime;
    readonly permissions?: AddShareLinkToWebLinkRequestBodySharedLinkPermissionsField;
}
export interface AddShareLinkToWebLinkRequestBody {
    readonly sharedLink?: AddShareLinkToWebLinkRequestBodySharedLinkField;
}
export interface AddShareLinkToWebLinkQueryParams {
    readonly fields: string;
}
export declare class AddShareLinkToWebLinkHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<AddShareLinkToWebLinkHeaders, 'extraHeaders'> & Partial<Pick<AddShareLinkToWebLinkHeaders, 'extraHeaders'>>);
}
export interface AddShareLinkToWebLinkHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export type UpdateSharedLinkOnWebLinkRequestBodySharedLinkAccessField = 'open' | 'company' | 'collaborators';
export interface UpdateSharedLinkOnWebLinkRequestBodySharedLinkPermissionsField {
    readonly canDownload?: boolean;
    readonly canPreview?: boolean;
    readonly canEdit?: boolean;
}
export interface UpdateSharedLinkOnWebLinkRequestBodySharedLinkField {
    readonly access?: UpdateSharedLinkOnWebLinkRequestBodySharedLinkAccessField;
    readonly password?: string;
    readonly vanityName?: string;
    readonly unsharedAt?: DateTime;
    readonly permissions?: UpdateSharedLinkOnWebLinkRequestBodySharedLinkPermissionsField;
}
export interface UpdateSharedLinkOnWebLinkRequestBody {
    readonly sharedLink?: UpdateSharedLinkOnWebLinkRequestBodySharedLinkField;
}
export interface UpdateSharedLinkOnWebLinkQueryParams {
    readonly fields: string;
}
export declare class UpdateSharedLinkOnWebLinkHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<UpdateSharedLinkOnWebLinkHeaders, 'extraHeaders'> & Partial<Pick<UpdateSharedLinkOnWebLinkHeaders, 'extraHeaders'>>);
}
export interface UpdateSharedLinkOnWebLinkHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export interface RemoveSharedLinkFromWebLinkRequestBodySharedLinkField {
}
export interface RemoveSharedLinkFromWebLinkRequestBody {
    readonly sharedLink?: RemoveSharedLinkFromWebLinkRequestBodySharedLinkField;
}
export interface RemoveSharedLinkFromWebLinkQueryParams {
    readonly fields: string;
}
export declare class RemoveSharedLinkFromWebLinkHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<RemoveSharedLinkFromWebLinkHeaders, 'extraHeaders'> & Partial<Pick<RemoveSharedLinkFromWebLinkHeaders, 'extraHeaders'>>);
}
export interface RemoveSharedLinkFromWebLinkHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class SharedLinksWebLinksManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<SharedLinksWebLinksManager, 'networkSession' | 'findWebLinkForSharedLink' | 'getSharedLinkForWebLink' | 'addShareLinkToWebLink' | 'updateSharedLinkOnWebLink' | 'removeSharedLinkFromWebLink'> & Partial<Pick<SharedLinksWebLinksManager, 'networkSession'>>);
    findWebLinkForSharedLink(queryParams: FindWebLinkForSharedLinkQueryParams | undefined, headersInput: FindWebLinkForSharedLinkHeadersInput, optionalsInput?: FindWebLinkForSharedLinkOptionalsInput): Promise<WebLink>;
    getSharedLinkForWebLink(webLinkId: string, queryParams: GetSharedLinkForWebLinkQueryParams, optionalsInput?: GetSharedLinkForWebLinkOptionalsInput): Promise<WebLink>;
    addShareLinkToWebLink(webLinkId: string, requestBody: AddShareLinkToWebLinkRequestBody | undefined, queryParams: AddShareLinkToWebLinkQueryParams, optionalsInput?: AddShareLinkToWebLinkOptionalsInput): Promise<WebLink>;
    updateSharedLinkOnWebLink(webLinkId: string, requestBody: UpdateSharedLinkOnWebLinkRequestBody | undefined, queryParams: UpdateSharedLinkOnWebLinkQueryParams, optionalsInput?: UpdateSharedLinkOnWebLinkOptionalsInput): Promise<WebLink>;
    removeSharedLinkFromWebLink(webLinkId: string, requestBody: RemoveSharedLinkFromWebLinkRequestBody | undefined, queryParams: RemoveSharedLinkFromWebLinkQueryParams, optionalsInput?: RemoveSharedLinkFromWebLinkOptionalsInput): Promise<WebLink>;
}
export interface SharedLinksWebLinksManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
export declare function serializeAddShareLinkToWebLinkRequestBodySharedLinkAccessField(val: AddShareLinkToWebLinkRequestBodySharedLinkAccessField): SerializedData;
export declare function deserializeAddShareLinkToWebLinkRequestBodySharedLinkAccessField(val: SerializedData): AddShareLinkToWebLinkRequestBodySharedLinkAccessField;
export declare function serializeAddShareLinkToWebLinkRequestBodySharedLinkPermissionsField(val: AddShareLinkToWebLinkRequestBodySharedLinkPermissionsField): SerializedData;
export declare function deserializeAddShareLinkToWebLinkRequestBodySharedLinkPermissionsField(val: SerializedData): AddShareLinkToWebLinkRequestBodySharedLinkPermissionsField;
export declare function serializeAddShareLinkToWebLinkRequestBodySharedLinkField(val: AddShareLinkToWebLinkRequestBodySharedLinkField): SerializedData;
export declare function deserializeAddShareLinkToWebLinkRequestBodySharedLinkField(val: SerializedData): AddShareLinkToWebLinkRequestBodySharedLinkField;
export declare function serializeAddShareLinkToWebLinkRequestBody(val: AddShareLinkToWebLinkRequestBody): SerializedData;
export declare function deserializeAddShareLinkToWebLinkRequestBody(val: SerializedData): AddShareLinkToWebLinkRequestBody;
export declare function serializeUpdateSharedLinkOnWebLinkRequestBodySharedLinkAccessField(val: UpdateSharedLinkOnWebLinkRequestBodySharedLinkAccessField): SerializedData;
export declare function deserializeUpdateSharedLinkOnWebLinkRequestBodySharedLinkAccessField(val: SerializedData): UpdateSharedLinkOnWebLinkRequestBodySharedLinkAccessField;
export declare function serializeUpdateSharedLinkOnWebLinkRequestBodySharedLinkPermissionsField(val: UpdateSharedLinkOnWebLinkRequestBodySharedLinkPermissionsField): SerializedData;
export declare function deserializeUpdateSharedLinkOnWebLinkRequestBodySharedLinkPermissionsField(val: SerializedData): UpdateSharedLinkOnWebLinkRequestBodySharedLinkPermissionsField;
export declare function serializeUpdateSharedLinkOnWebLinkRequestBodySharedLinkField(val: UpdateSharedLinkOnWebLinkRequestBodySharedLinkField): SerializedData;
export declare function deserializeUpdateSharedLinkOnWebLinkRequestBodySharedLinkField(val: SerializedData): UpdateSharedLinkOnWebLinkRequestBodySharedLinkField;
export declare function serializeUpdateSharedLinkOnWebLinkRequestBody(val: UpdateSharedLinkOnWebLinkRequestBody): SerializedData;
export declare function deserializeUpdateSharedLinkOnWebLinkRequestBody(val: SerializedData): UpdateSharedLinkOnWebLinkRequestBody;
export declare function serializeRemoveSharedLinkFromWebLinkRequestBodySharedLinkField(val: RemoveSharedLinkFromWebLinkRequestBodySharedLinkField): SerializedData;
export declare function deserializeRemoveSharedLinkFromWebLinkRequestBodySharedLinkField(val: SerializedData): RemoveSharedLinkFromWebLinkRequestBodySharedLinkField;
export declare function serializeRemoveSharedLinkFromWebLinkRequestBody(val: RemoveSharedLinkFromWebLinkRequestBody): SerializedData;
export declare function deserializeRemoveSharedLinkFromWebLinkRequestBody(val: SerializedData): RemoveSharedLinkFromWebLinkRequestBody;
