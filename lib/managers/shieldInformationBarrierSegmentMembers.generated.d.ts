import { ShieldInformationBarrierSegmentMember } from '../schemas/shieldInformationBarrierSegmentMember.generated.js';
import { ShieldInformationBarrierSegmentMembers } from '../schemas/shieldInformationBarrierSegmentMembers.generated.js';
import { ShieldInformationBarrierBase } from '../schemas/shieldInformationBarrierBase.generated.js';
import { UserBase } from '../schemas/userBase.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { CancellationToken } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export declare class GetShieldInformationBarrierSegmentMemberByIdOptionals {
    readonly headers: GetShieldInformationBarrierSegmentMemberByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetShieldInformationBarrierSegmentMemberByIdOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<GetShieldInformationBarrierSegmentMemberByIdOptionals, 'headers' | 'cancellationToken'>>);
}
export interface GetShieldInformationBarrierSegmentMemberByIdOptionalsInput {
    readonly headers?: GetShieldInformationBarrierSegmentMemberByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class DeleteShieldInformationBarrierSegmentMemberByIdOptionals {
    readonly headers: DeleteShieldInformationBarrierSegmentMemberByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<DeleteShieldInformationBarrierSegmentMemberByIdOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<DeleteShieldInformationBarrierSegmentMemberByIdOptionals, 'headers' | 'cancellationToken'>>);
}
export interface DeleteShieldInformationBarrierSegmentMemberByIdOptionalsInput {
    readonly headers?: DeleteShieldInformationBarrierSegmentMemberByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetShieldInformationBarrierSegmentMembersOptionals {
    readonly headers: GetShieldInformationBarrierSegmentMembersHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetShieldInformationBarrierSegmentMembersOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<GetShieldInformationBarrierSegmentMembersOptionals, 'headers' | 'cancellationToken'>>);
}
export interface GetShieldInformationBarrierSegmentMembersOptionalsInput {
    readonly headers?: GetShieldInformationBarrierSegmentMembersHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class CreateShieldInformationBarrierSegmentMemberOptionals {
    readonly headers: CreateShieldInformationBarrierSegmentMemberHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<CreateShieldInformationBarrierSegmentMemberOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<CreateShieldInformationBarrierSegmentMemberOptionals, 'headers' | 'cancellationToken'>>);
}
export interface CreateShieldInformationBarrierSegmentMemberOptionalsInput {
    readonly headers?: CreateShieldInformationBarrierSegmentMemberHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetShieldInformationBarrierSegmentMemberByIdHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetShieldInformationBarrierSegmentMemberByIdHeaders, 'extraHeaders'> & Partial<Pick<GetShieldInformationBarrierSegmentMemberByIdHeaders, 'extraHeaders'>>);
}
export interface GetShieldInformationBarrierSegmentMemberByIdHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class DeleteShieldInformationBarrierSegmentMemberByIdHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<DeleteShieldInformationBarrierSegmentMemberByIdHeaders, 'extraHeaders'> & Partial<Pick<DeleteShieldInformationBarrierSegmentMemberByIdHeaders, 'extraHeaders'>>);
}
export interface DeleteShieldInformationBarrierSegmentMemberByIdHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export interface GetShieldInformationBarrierSegmentMembersQueryParams {
    readonly shieldInformationBarrierSegmentId: string;
    readonly marker?: string;
    readonly limit?: number;
}
export declare class GetShieldInformationBarrierSegmentMembersHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetShieldInformationBarrierSegmentMembersHeaders, 'extraHeaders'> & Partial<Pick<GetShieldInformationBarrierSegmentMembersHeaders, 'extraHeaders'>>);
}
export interface GetShieldInformationBarrierSegmentMembersHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export type CreateShieldInformationBarrierSegmentMemberRequestBodyTypeField = 'shield_information_barrier_segment_member';
export type CreateShieldInformationBarrierSegmentMemberRequestBodyShieldInformationBarrierSegmentTypeField = 'shield_information_barrier_segment';
export interface CreateShieldInformationBarrierSegmentMemberRequestBodyShieldInformationBarrierSegmentField {
    readonly id?: string;
    readonly type?: CreateShieldInformationBarrierSegmentMemberRequestBodyShieldInformationBarrierSegmentTypeField;
}
export interface CreateShieldInformationBarrierSegmentMemberRequestBody {
    readonly type?: CreateShieldInformationBarrierSegmentMemberRequestBodyTypeField;
    readonly shieldInformationBarrier?: ShieldInformationBarrierBase;
    readonly shieldInformationBarrierSegment: CreateShieldInformationBarrierSegmentMemberRequestBodyShieldInformationBarrierSegmentField;
    readonly user: UserBase;
}
export declare class CreateShieldInformationBarrierSegmentMemberHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<CreateShieldInformationBarrierSegmentMemberHeaders, 'extraHeaders'> & Partial<Pick<CreateShieldInformationBarrierSegmentMemberHeaders, 'extraHeaders'>>);
}
export interface CreateShieldInformationBarrierSegmentMemberHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class ShieldInformationBarrierSegmentMembersManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<ShieldInformationBarrierSegmentMembersManager, 'networkSession' | 'getShieldInformationBarrierSegmentMemberById' | 'deleteShieldInformationBarrierSegmentMemberById' | 'getShieldInformationBarrierSegmentMembers' | 'createShieldInformationBarrierSegmentMember'> & Partial<Pick<ShieldInformationBarrierSegmentMembersManager, 'networkSession'>>);
    getShieldInformationBarrierSegmentMemberById(shieldInformationBarrierSegmentMemberId: string, optionalsInput?: GetShieldInformationBarrierSegmentMemberByIdOptionalsInput): Promise<ShieldInformationBarrierSegmentMember>;
    deleteShieldInformationBarrierSegmentMemberById(shieldInformationBarrierSegmentMemberId: string, optionalsInput?: DeleteShieldInformationBarrierSegmentMemberByIdOptionalsInput): Promise<undefined>;
    getShieldInformationBarrierSegmentMembers(queryParams: GetShieldInformationBarrierSegmentMembersQueryParams, optionalsInput?: GetShieldInformationBarrierSegmentMembersOptionalsInput): Promise<ShieldInformationBarrierSegmentMembers>;
    createShieldInformationBarrierSegmentMember(requestBody: CreateShieldInformationBarrierSegmentMemberRequestBody, optionalsInput?: CreateShieldInformationBarrierSegmentMemberOptionalsInput): Promise<ShieldInformationBarrierSegmentMember>;
}
export interface ShieldInformationBarrierSegmentMembersManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
export declare function serializeCreateShieldInformationBarrierSegmentMemberRequestBodyTypeField(val: CreateShieldInformationBarrierSegmentMemberRequestBodyTypeField): SerializedData;
export declare function deserializeCreateShieldInformationBarrierSegmentMemberRequestBodyTypeField(val: SerializedData): CreateShieldInformationBarrierSegmentMemberRequestBodyTypeField;
export declare function serializeCreateShieldInformationBarrierSegmentMemberRequestBodyShieldInformationBarrierSegmentTypeField(val: CreateShieldInformationBarrierSegmentMemberRequestBodyShieldInformationBarrierSegmentTypeField): SerializedData;
export declare function deserializeCreateShieldInformationBarrierSegmentMemberRequestBodyShieldInformationBarrierSegmentTypeField(val: SerializedData): CreateShieldInformationBarrierSegmentMemberRequestBodyShieldInformationBarrierSegmentTypeField;
export declare function serializeCreateShieldInformationBarrierSegmentMemberRequestBodyShieldInformationBarrierSegmentField(val: CreateShieldInformationBarrierSegmentMemberRequestBodyShieldInformationBarrierSegmentField): SerializedData;
export declare function deserializeCreateShieldInformationBarrierSegmentMemberRequestBodyShieldInformationBarrierSegmentField(val: SerializedData): CreateShieldInformationBarrierSegmentMemberRequestBodyShieldInformationBarrierSegmentField;
export declare function serializeCreateShieldInformationBarrierSegmentMemberRequestBody(val: CreateShieldInformationBarrierSegmentMemberRequestBody): SerializedData;
export declare function deserializeCreateShieldInformationBarrierSegmentMemberRequestBody(val: SerializedData): CreateShieldInformationBarrierSegmentMemberRequestBody;
