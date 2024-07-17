import { Invite } from '../schemas/invite.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { CancellationToken } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export declare class CreateInviteOptionals {
    readonly queryParams: CreateInviteQueryParams;
    readonly headers: CreateInviteHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<CreateInviteOptionals, 'queryParams' | 'headers' | 'cancellationToken'> & Partial<Pick<CreateInviteOptionals, 'queryParams' | 'headers' | 'cancellationToken'>>);
}
export interface CreateInviteOptionalsInput {
    readonly queryParams?: CreateInviteQueryParams;
    readonly headers?: CreateInviteHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetInviteByIdOptionals {
    readonly queryParams: GetInviteByIdQueryParams;
    readonly headers: GetInviteByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetInviteByIdOptionals, 'queryParams' | 'headers' | 'cancellationToken'> & Partial<Pick<GetInviteByIdOptionals, 'queryParams' | 'headers' | 'cancellationToken'>>);
}
export interface GetInviteByIdOptionalsInput {
    readonly queryParams?: GetInviteByIdQueryParams;
    readonly headers?: GetInviteByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export interface CreateInviteRequestBodyEnterpriseField {
    readonly id: string;
}
export interface CreateInviteRequestBodyActionableByField {
    readonly login?: string;
}
export interface CreateInviteRequestBody {
    readonly enterprise: CreateInviteRequestBodyEnterpriseField;
    readonly actionableBy: CreateInviteRequestBodyActionableByField;
}
export interface CreateInviteQueryParams {
    readonly fields?: readonly string[];
}
export declare class CreateInviteHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<CreateInviteHeaders, 'extraHeaders'> & Partial<Pick<CreateInviteHeaders, 'extraHeaders'>>);
}
export interface CreateInviteHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export interface GetInviteByIdQueryParams {
    readonly fields?: readonly string[];
}
export declare class GetInviteByIdHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetInviteByIdHeaders, 'extraHeaders'> & Partial<Pick<GetInviteByIdHeaders, 'extraHeaders'>>);
}
export interface GetInviteByIdHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class InvitesManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<InvitesManager, 'networkSession' | 'createInvite' | 'getInviteById'> & Partial<Pick<InvitesManager, 'networkSession'>>);
    createInvite(requestBody: CreateInviteRequestBody, optionalsInput?: CreateInviteOptionalsInput): Promise<Invite>;
    getInviteById(inviteId: string, optionalsInput?: GetInviteByIdOptionalsInput): Promise<Invite>;
}
export interface InvitesManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
export declare function serializeCreateInviteRequestBodyEnterpriseField(val: CreateInviteRequestBodyEnterpriseField): SerializedData;
export declare function deserializeCreateInviteRequestBodyEnterpriseField(val: SerializedData): CreateInviteRequestBodyEnterpriseField;
export declare function serializeCreateInviteRequestBodyActionableByField(val: CreateInviteRequestBodyActionableByField): SerializedData;
export declare function deserializeCreateInviteRequestBodyActionableByField(val: SerializedData): CreateInviteRequestBodyActionableByField;
export declare function serializeCreateInviteRequestBody(val: CreateInviteRequestBody): SerializedData;
export declare function deserializeCreateInviteRequestBody(val: SerializedData): CreateInviteRequestBody;
