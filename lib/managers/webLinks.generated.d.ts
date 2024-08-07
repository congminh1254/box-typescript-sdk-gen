import { WebLink } from '../schemas/webLink.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { CancellationToken } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
import { DateTime } from '../internal/utils.js';
export declare class CreateWebLinkOptionals {
    readonly headers: CreateWebLinkHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<CreateWebLinkOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<CreateWebLinkOptionals, 'headers' | 'cancellationToken'>>);
}
export interface CreateWebLinkOptionalsInput {
    readonly headers?: CreateWebLinkHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetWebLinkByIdOptionals {
    readonly headers: GetWebLinkByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetWebLinkByIdOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<GetWebLinkByIdOptionals, 'headers' | 'cancellationToken'>>);
}
export interface GetWebLinkByIdOptionalsInput {
    readonly headers?: GetWebLinkByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class UpdateWebLinkByIdOptionals {
    readonly requestBody: UpdateWebLinkByIdRequestBody;
    readonly headers: UpdateWebLinkByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<UpdateWebLinkByIdOptionals, 'requestBody' | 'headers' | 'cancellationToken'> & Partial<Pick<UpdateWebLinkByIdOptionals, 'requestBody' | 'headers' | 'cancellationToken'>>);
}
export interface UpdateWebLinkByIdOptionalsInput {
    readonly requestBody?: UpdateWebLinkByIdRequestBody;
    readonly headers?: UpdateWebLinkByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class DeleteWebLinkByIdOptionals {
    readonly headers: DeleteWebLinkByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<DeleteWebLinkByIdOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<DeleteWebLinkByIdOptionals, 'headers' | 'cancellationToken'>>);
}
export interface DeleteWebLinkByIdOptionalsInput {
    readonly headers?: DeleteWebLinkByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export interface CreateWebLinkRequestBodyParentField {
    readonly id: string;
}
export interface CreateWebLinkRequestBody {
    readonly url: string;
    readonly parent: CreateWebLinkRequestBodyParentField;
    readonly name?: string;
    readonly description?: string;
}
export declare class CreateWebLinkHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<CreateWebLinkHeaders, 'extraHeaders'> & Partial<Pick<CreateWebLinkHeaders, 'extraHeaders'>>);
}
export interface CreateWebLinkHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class GetWebLinkByIdHeaders {
    readonly boxapi?: string;
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetWebLinkByIdHeaders, 'extraHeaders'> & Partial<Pick<GetWebLinkByIdHeaders, 'extraHeaders'>>);
}
export interface GetWebLinkByIdHeadersInput {
    readonly boxapi?: string;
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export interface UpdateWebLinkByIdRequestBodyParentField {
    readonly id?: string;
}
export type UpdateWebLinkByIdRequestBodySharedLinkAccessField = 'open' | 'company' | 'collaborators';
export interface UpdateWebLinkByIdRequestBodySharedLinkField {
    readonly access?: UpdateWebLinkByIdRequestBodySharedLinkAccessField;
    readonly password?: string;
    readonly vanityName?: string;
    readonly unsharedAt?: DateTime;
}
export interface UpdateWebLinkByIdRequestBody {
    readonly url?: string;
    readonly parent?: UpdateWebLinkByIdRequestBodyParentField;
    readonly name?: string;
    readonly description?: string;
    readonly sharedLink?: UpdateWebLinkByIdRequestBodySharedLinkField;
}
export declare class UpdateWebLinkByIdHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<UpdateWebLinkByIdHeaders, 'extraHeaders'> & Partial<Pick<UpdateWebLinkByIdHeaders, 'extraHeaders'>>);
}
export interface UpdateWebLinkByIdHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class DeleteWebLinkByIdHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<DeleteWebLinkByIdHeaders, 'extraHeaders'> & Partial<Pick<DeleteWebLinkByIdHeaders, 'extraHeaders'>>);
}
export interface DeleteWebLinkByIdHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class WebLinksManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<WebLinksManager, 'networkSession' | 'createWebLink' | 'getWebLinkById' | 'updateWebLinkById' | 'deleteWebLinkById'> & Partial<Pick<WebLinksManager, 'networkSession'>>);
    createWebLink(requestBody: CreateWebLinkRequestBody, optionalsInput?: CreateWebLinkOptionalsInput): Promise<WebLink>;
    getWebLinkById(webLinkId: string, optionalsInput?: GetWebLinkByIdOptionalsInput): Promise<WebLink>;
    updateWebLinkById(webLinkId: string, optionalsInput?: UpdateWebLinkByIdOptionalsInput): Promise<WebLink>;
    deleteWebLinkById(webLinkId: string, optionalsInput?: DeleteWebLinkByIdOptionalsInput): Promise<undefined>;
}
export interface WebLinksManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
export declare function serializeCreateWebLinkRequestBodyParentField(val: CreateWebLinkRequestBodyParentField): SerializedData;
export declare function deserializeCreateWebLinkRequestBodyParentField(val: SerializedData): CreateWebLinkRequestBodyParentField;
export declare function serializeCreateWebLinkRequestBody(val: CreateWebLinkRequestBody): SerializedData;
export declare function deserializeCreateWebLinkRequestBody(val: SerializedData): CreateWebLinkRequestBody;
export declare function serializeUpdateWebLinkByIdRequestBodyParentField(val: UpdateWebLinkByIdRequestBodyParentField): SerializedData;
export declare function deserializeUpdateWebLinkByIdRequestBodyParentField(val: SerializedData): UpdateWebLinkByIdRequestBodyParentField;
export declare function serializeUpdateWebLinkByIdRequestBodySharedLinkAccessField(val: UpdateWebLinkByIdRequestBodySharedLinkAccessField): SerializedData;
export declare function deserializeUpdateWebLinkByIdRequestBodySharedLinkAccessField(val: SerializedData): UpdateWebLinkByIdRequestBodySharedLinkAccessField;
export declare function serializeUpdateWebLinkByIdRequestBodySharedLinkField(val: UpdateWebLinkByIdRequestBodySharedLinkField): SerializedData;
export declare function deserializeUpdateWebLinkByIdRequestBodySharedLinkField(val: SerializedData): UpdateWebLinkByIdRequestBodySharedLinkField;
export declare function serializeUpdateWebLinkByIdRequestBody(val: UpdateWebLinkByIdRequestBody): SerializedData;
export declare function deserializeUpdateWebLinkByIdRequestBody(val: SerializedData): UpdateWebLinkByIdRequestBody;
