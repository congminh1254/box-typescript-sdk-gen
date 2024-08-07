import { CollaborationAllowlistExemptTargets } from '../schemas/collaborationAllowlistExemptTargets.generated.js';
import { CollaborationAllowlistExemptTarget } from '../schemas/collaborationAllowlistExemptTarget.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { CancellationToken } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export declare class CreateCollaborationWhitelistExemptTargetOptionals {
    readonly headers: CreateCollaborationWhitelistExemptTargetHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<CreateCollaborationWhitelistExemptTargetOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<CreateCollaborationWhitelistExemptTargetOptionals, 'headers' | 'cancellationToken'>>);
}
export interface CreateCollaborationWhitelistExemptTargetOptionalsInput {
    readonly headers?: CreateCollaborationWhitelistExemptTargetHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetCollaborationWhitelistExemptTargetByIdOptionals {
    readonly headers: GetCollaborationWhitelistExemptTargetByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetCollaborationWhitelistExemptTargetByIdOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<GetCollaborationWhitelistExemptTargetByIdOptionals, 'headers' | 'cancellationToken'>>);
}
export interface GetCollaborationWhitelistExemptTargetByIdOptionalsInput {
    readonly headers?: GetCollaborationWhitelistExemptTargetByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class DeleteCollaborationWhitelistExemptTargetByIdOptionals {
    readonly headers: DeleteCollaborationWhitelistExemptTargetByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<DeleteCollaborationWhitelistExemptTargetByIdOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<DeleteCollaborationWhitelistExemptTargetByIdOptionals, 'headers' | 'cancellationToken'>>);
}
export interface DeleteCollaborationWhitelistExemptTargetByIdOptionalsInput {
    readonly headers?: DeleteCollaborationWhitelistExemptTargetByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export interface GetCollaborationWhitelistExemptTargetsQueryParams {
    readonly marker?: string;
    readonly limit?: number;
}
export declare class GetCollaborationWhitelistExemptTargetsHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetCollaborationWhitelistExemptTargetsHeaders, 'extraHeaders'> & Partial<Pick<GetCollaborationWhitelistExemptTargetsHeaders, 'extraHeaders'>>);
}
export interface GetCollaborationWhitelistExemptTargetsHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export interface CreateCollaborationWhitelistExemptTargetRequestBodyUserField {
    readonly id: string;
}
export interface CreateCollaborationWhitelistExemptTargetRequestBody {
    readonly user: CreateCollaborationWhitelistExemptTargetRequestBodyUserField;
}
export declare class CreateCollaborationWhitelistExemptTargetHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<CreateCollaborationWhitelistExemptTargetHeaders, 'extraHeaders'> & Partial<Pick<CreateCollaborationWhitelistExemptTargetHeaders, 'extraHeaders'>>);
}
export interface CreateCollaborationWhitelistExemptTargetHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class GetCollaborationWhitelistExemptTargetByIdHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetCollaborationWhitelistExemptTargetByIdHeaders, 'extraHeaders'> & Partial<Pick<GetCollaborationWhitelistExemptTargetByIdHeaders, 'extraHeaders'>>);
}
export interface GetCollaborationWhitelistExemptTargetByIdHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class DeleteCollaborationWhitelistExemptTargetByIdHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<DeleteCollaborationWhitelistExemptTargetByIdHeaders, 'extraHeaders'> & Partial<Pick<DeleteCollaborationWhitelistExemptTargetByIdHeaders, 'extraHeaders'>>);
}
export interface DeleteCollaborationWhitelistExemptTargetByIdHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class CollaborationAllowlistExemptTargetsManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<CollaborationAllowlistExemptTargetsManager, 'networkSession' | 'getCollaborationWhitelistExemptTargets' | 'createCollaborationWhitelistExemptTarget' | 'getCollaborationWhitelistExemptTargetById' | 'deleteCollaborationWhitelistExemptTargetById'> & Partial<Pick<CollaborationAllowlistExemptTargetsManager, 'networkSession'>>);
    getCollaborationWhitelistExemptTargets(queryParams?: GetCollaborationWhitelistExemptTargetsQueryParams, headersInput?: GetCollaborationWhitelistExemptTargetsHeadersInput, cancellationToken?: CancellationToken): Promise<CollaborationAllowlistExemptTargets>;
    createCollaborationWhitelistExemptTarget(requestBody: CreateCollaborationWhitelistExemptTargetRequestBody, optionalsInput?: CreateCollaborationWhitelistExemptTargetOptionalsInput): Promise<CollaborationAllowlistExemptTarget>;
    getCollaborationWhitelistExemptTargetById(collaborationWhitelistExemptTargetId: string, optionalsInput?: GetCollaborationWhitelistExemptTargetByIdOptionalsInput): Promise<CollaborationAllowlistExemptTarget>;
    deleteCollaborationWhitelistExemptTargetById(collaborationWhitelistExemptTargetId: string, optionalsInput?: DeleteCollaborationWhitelistExemptTargetByIdOptionalsInput): Promise<undefined>;
}
export interface CollaborationAllowlistExemptTargetsManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
export declare function serializeCreateCollaborationWhitelistExemptTargetRequestBodyUserField(val: CreateCollaborationWhitelistExemptTargetRequestBodyUserField): SerializedData;
export declare function deserializeCreateCollaborationWhitelistExemptTargetRequestBodyUserField(val: SerializedData): CreateCollaborationWhitelistExemptTargetRequestBodyUserField;
export declare function serializeCreateCollaborationWhitelistExemptTargetRequestBody(val: CreateCollaborationWhitelistExemptTargetRequestBody): SerializedData;
export declare function deserializeCreateCollaborationWhitelistExemptTargetRequestBody(val: SerializedData): CreateCollaborationWhitelistExemptTargetRequestBody;
