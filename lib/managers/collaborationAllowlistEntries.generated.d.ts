import { CollaborationAllowlistEntries } from '../schemas/collaborationAllowlistEntries.generated.js';
import { CollaborationAllowlistEntry } from '../schemas/collaborationAllowlistEntry.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { CancellationToken } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export declare class CreateCollaborationWhitelistEntryOptionals {
    readonly headers: CreateCollaborationWhitelistEntryHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<CreateCollaborationWhitelistEntryOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<CreateCollaborationWhitelistEntryOptionals, 'headers' | 'cancellationToken'>>);
}
export interface CreateCollaborationWhitelistEntryOptionalsInput {
    readonly headers?: CreateCollaborationWhitelistEntryHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetCollaborationWhitelistEntryByIdOptionals {
    readonly headers: GetCollaborationWhitelistEntryByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetCollaborationWhitelistEntryByIdOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<GetCollaborationWhitelistEntryByIdOptionals, 'headers' | 'cancellationToken'>>);
}
export interface GetCollaborationWhitelistEntryByIdOptionalsInput {
    readonly headers?: GetCollaborationWhitelistEntryByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class DeleteCollaborationWhitelistEntryByIdOptionals {
    readonly headers: DeleteCollaborationWhitelistEntryByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<DeleteCollaborationWhitelistEntryByIdOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<DeleteCollaborationWhitelistEntryByIdOptionals, 'headers' | 'cancellationToken'>>);
}
export interface DeleteCollaborationWhitelistEntryByIdOptionalsInput {
    readonly headers?: DeleteCollaborationWhitelistEntryByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export interface GetCollaborationWhitelistEntriesQueryParams {
    readonly marker?: string;
    readonly limit?: number;
}
export declare class GetCollaborationWhitelistEntriesHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetCollaborationWhitelistEntriesHeaders, 'extraHeaders'> & Partial<Pick<GetCollaborationWhitelistEntriesHeaders, 'extraHeaders'>>);
}
export interface GetCollaborationWhitelistEntriesHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export type CreateCollaborationWhitelistEntryRequestBodyDirectionField = 'inbound' | 'outbound' | 'both';
export interface CreateCollaborationWhitelistEntryRequestBody {
    readonly domain: string;
    readonly direction: CreateCollaborationWhitelistEntryRequestBodyDirectionField;
}
export declare class CreateCollaborationWhitelistEntryHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<CreateCollaborationWhitelistEntryHeaders, 'extraHeaders'> & Partial<Pick<CreateCollaborationWhitelistEntryHeaders, 'extraHeaders'>>);
}
export interface CreateCollaborationWhitelistEntryHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class GetCollaborationWhitelistEntryByIdHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetCollaborationWhitelistEntryByIdHeaders, 'extraHeaders'> & Partial<Pick<GetCollaborationWhitelistEntryByIdHeaders, 'extraHeaders'>>);
}
export interface GetCollaborationWhitelistEntryByIdHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class DeleteCollaborationWhitelistEntryByIdHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<DeleteCollaborationWhitelistEntryByIdHeaders, 'extraHeaders'> & Partial<Pick<DeleteCollaborationWhitelistEntryByIdHeaders, 'extraHeaders'>>);
}
export interface DeleteCollaborationWhitelistEntryByIdHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class CollaborationAllowlistEntriesManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<CollaborationAllowlistEntriesManager, 'networkSession' | 'getCollaborationWhitelistEntries' | 'createCollaborationWhitelistEntry' | 'getCollaborationWhitelistEntryById' | 'deleteCollaborationWhitelistEntryById'> & Partial<Pick<CollaborationAllowlistEntriesManager, 'networkSession'>>);
    getCollaborationWhitelistEntries(queryParams?: GetCollaborationWhitelistEntriesQueryParams, headersInput?: GetCollaborationWhitelistEntriesHeadersInput, cancellationToken?: CancellationToken): Promise<CollaborationAllowlistEntries>;
    createCollaborationWhitelistEntry(requestBody: CreateCollaborationWhitelistEntryRequestBody, optionalsInput?: CreateCollaborationWhitelistEntryOptionalsInput): Promise<CollaborationAllowlistEntry>;
    getCollaborationWhitelistEntryById(collaborationWhitelistEntryId: string, optionalsInput?: GetCollaborationWhitelistEntryByIdOptionalsInput): Promise<CollaborationAllowlistEntry>;
    deleteCollaborationWhitelistEntryById(collaborationWhitelistEntryId: string, optionalsInput?: DeleteCollaborationWhitelistEntryByIdOptionalsInput): Promise<undefined>;
}
export interface CollaborationAllowlistEntriesManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
export declare function serializeCreateCollaborationWhitelistEntryRequestBodyDirectionField(val: CreateCollaborationWhitelistEntryRequestBodyDirectionField): SerializedData;
export declare function deserializeCreateCollaborationWhitelistEntryRequestBodyDirectionField(val: SerializedData): CreateCollaborationWhitelistEntryRequestBodyDirectionField;
export declare function serializeCreateCollaborationWhitelistEntryRequestBody(val: CreateCollaborationWhitelistEntryRequestBody): SerializedData;
export declare function deserializeCreateCollaborationWhitelistEntryRequestBody(val: SerializedData): CreateCollaborationWhitelistEntryRequestBody;
