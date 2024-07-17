import { ShieldInformationBarrierSegmentRestriction } from '../schemas/shieldInformationBarrierSegmentRestriction.generated.js';
import { ShieldInformationBarrierSegmentRestrictions } from '../schemas/shieldInformationBarrierSegmentRestrictions.generated.js';
import { ShieldInformationBarrierBase } from '../schemas/shieldInformationBarrierBase.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { CancellationToken } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export declare class GetShieldInformationBarrierSegmentRestrictionByIdOptionals {
    readonly headers: GetShieldInformationBarrierSegmentRestrictionByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetShieldInformationBarrierSegmentRestrictionByIdOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<GetShieldInformationBarrierSegmentRestrictionByIdOptionals, 'headers' | 'cancellationToken'>>);
}
export interface GetShieldInformationBarrierSegmentRestrictionByIdOptionalsInput {
    readonly headers?: GetShieldInformationBarrierSegmentRestrictionByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class DeleteShieldInformationBarrierSegmentRestrictionByIdOptionals {
    readonly headers: DeleteShieldInformationBarrierSegmentRestrictionByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<DeleteShieldInformationBarrierSegmentRestrictionByIdOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<DeleteShieldInformationBarrierSegmentRestrictionByIdOptionals, 'headers' | 'cancellationToken'>>);
}
export interface DeleteShieldInformationBarrierSegmentRestrictionByIdOptionalsInput {
    readonly headers?: DeleteShieldInformationBarrierSegmentRestrictionByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetShieldInformationBarrierSegmentRestrictionsOptionals {
    readonly headers: GetShieldInformationBarrierSegmentRestrictionsHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetShieldInformationBarrierSegmentRestrictionsOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<GetShieldInformationBarrierSegmentRestrictionsOptionals, 'headers' | 'cancellationToken'>>);
}
export interface GetShieldInformationBarrierSegmentRestrictionsOptionalsInput {
    readonly headers?: GetShieldInformationBarrierSegmentRestrictionsHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class CreateShieldInformationBarrierSegmentRestrictionOptionals {
    readonly headers: CreateShieldInformationBarrierSegmentRestrictionHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<CreateShieldInformationBarrierSegmentRestrictionOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<CreateShieldInformationBarrierSegmentRestrictionOptionals, 'headers' | 'cancellationToken'>>);
}
export interface CreateShieldInformationBarrierSegmentRestrictionOptionalsInput {
    readonly headers?: CreateShieldInformationBarrierSegmentRestrictionHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetShieldInformationBarrierSegmentRestrictionByIdHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetShieldInformationBarrierSegmentRestrictionByIdHeaders, 'extraHeaders'> & Partial<Pick<GetShieldInformationBarrierSegmentRestrictionByIdHeaders, 'extraHeaders'>>);
}
export interface GetShieldInformationBarrierSegmentRestrictionByIdHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class DeleteShieldInformationBarrierSegmentRestrictionByIdHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<DeleteShieldInformationBarrierSegmentRestrictionByIdHeaders, 'extraHeaders'> & Partial<Pick<DeleteShieldInformationBarrierSegmentRestrictionByIdHeaders, 'extraHeaders'>>);
}
export interface DeleteShieldInformationBarrierSegmentRestrictionByIdHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export interface GetShieldInformationBarrierSegmentRestrictionsQueryParams {
    readonly shieldInformationBarrierSegmentId: string;
    readonly marker?: string;
    readonly limit?: number;
}
export declare class GetShieldInformationBarrierSegmentRestrictionsHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetShieldInformationBarrierSegmentRestrictionsHeaders, 'extraHeaders'> & Partial<Pick<GetShieldInformationBarrierSegmentRestrictionsHeaders, 'extraHeaders'>>);
}
export interface GetShieldInformationBarrierSegmentRestrictionsHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export type CreateShieldInformationBarrierSegmentRestrictionRequestBodyTypeField = 'shield_information_barrier_segment_restriction';
export type CreateShieldInformationBarrierSegmentRestrictionRequestBodyShieldInformationBarrierSegmentTypeField = 'shield_information_barrier_segment';
export interface CreateShieldInformationBarrierSegmentRestrictionRequestBodyShieldInformationBarrierSegmentField {
    readonly id?: string;
    readonly type?: CreateShieldInformationBarrierSegmentRestrictionRequestBodyShieldInformationBarrierSegmentTypeField;
}
export type CreateShieldInformationBarrierSegmentRestrictionRequestBodyRestrictedSegmentTypeField = 'shield_information_barrier_segment';
export interface CreateShieldInformationBarrierSegmentRestrictionRequestBodyRestrictedSegmentField {
    readonly id?: string;
    readonly type?: CreateShieldInformationBarrierSegmentRestrictionRequestBodyRestrictedSegmentTypeField;
}
export declare class CreateShieldInformationBarrierSegmentRestrictionRequestBody {
    readonly type: CreateShieldInformationBarrierSegmentRestrictionRequestBodyTypeField;
    readonly shieldInformationBarrier?: ShieldInformationBarrierBase;
    readonly shieldInformationBarrierSegment: CreateShieldInformationBarrierSegmentRestrictionRequestBodyShieldInformationBarrierSegmentField;
    readonly restrictedSegment: CreateShieldInformationBarrierSegmentRestrictionRequestBodyRestrictedSegmentField;
    constructor(fields: Omit<CreateShieldInformationBarrierSegmentRestrictionRequestBody, 'type'> & Partial<Pick<CreateShieldInformationBarrierSegmentRestrictionRequestBody, 'type'>>);
}
export interface CreateShieldInformationBarrierSegmentRestrictionRequestBodyInput {
    readonly type?: CreateShieldInformationBarrierSegmentRestrictionRequestBodyTypeField;
    readonly shieldInformationBarrier?: ShieldInformationBarrierBase;
    readonly shieldInformationBarrierSegment: CreateShieldInformationBarrierSegmentRestrictionRequestBodyShieldInformationBarrierSegmentField;
    readonly restrictedSegment: CreateShieldInformationBarrierSegmentRestrictionRequestBodyRestrictedSegmentField;
}
export declare class CreateShieldInformationBarrierSegmentRestrictionHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<CreateShieldInformationBarrierSegmentRestrictionHeaders, 'extraHeaders'> & Partial<Pick<CreateShieldInformationBarrierSegmentRestrictionHeaders, 'extraHeaders'>>);
}
export interface CreateShieldInformationBarrierSegmentRestrictionHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class ShieldInformationBarrierSegmentRestrictionsManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<ShieldInformationBarrierSegmentRestrictionsManager, 'networkSession' | 'getShieldInformationBarrierSegmentRestrictionById' | 'deleteShieldInformationBarrierSegmentRestrictionById' | 'getShieldInformationBarrierSegmentRestrictions' | 'createShieldInformationBarrierSegmentRestriction'> & Partial<Pick<ShieldInformationBarrierSegmentRestrictionsManager, 'networkSession'>>);
    getShieldInformationBarrierSegmentRestrictionById(shieldInformationBarrierSegmentRestrictionId: string, optionalsInput?: GetShieldInformationBarrierSegmentRestrictionByIdOptionalsInput): Promise<ShieldInformationBarrierSegmentRestriction>;
    deleteShieldInformationBarrierSegmentRestrictionById(shieldInformationBarrierSegmentRestrictionId: string, optionalsInput?: DeleteShieldInformationBarrierSegmentRestrictionByIdOptionalsInput): Promise<undefined>;
    getShieldInformationBarrierSegmentRestrictions(queryParams: GetShieldInformationBarrierSegmentRestrictionsQueryParams, optionalsInput?: GetShieldInformationBarrierSegmentRestrictionsOptionalsInput): Promise<ShieldInformationBarrierSegmentRestrictions>;
    createShieldInformationBarrierSegmentRestriction(requestBodyInput: CreateShieldInformationBarrierSegmentRestrictionRequestBodyInput, optionalsInput?: CreateShieldInformationBarrierSegmentRestrictionOptionalsInput): Promise<ShieldInformationBarrierSegmentRestriction>;
}
export interface ShieldInformationBarrierSegmentRestrictionsManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
export declare function serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyTypeField(val: CreateShieldInformationBarrierSegmentRestrictionRequestBodyTypeField): SerializedData;
export declare function deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyTypeField(val: SerializedData): CreateShieldInformationBarrierSegmentRestrictionRequestBodyTypeField;
export declare function serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyShieldInformationBarrierSegmentTypeField(val: CreateShieldInformationBarrierSegmentRestrictionRequestBodyShieldInformationBarrierSegmentTypeField): SerializedData;
export declare function deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyShieldInformationBarrierSegmentTypeField(val: SerializedData): CreateShieldInformationBarrierSegmentRestrictionRequestBodyShieldInformationBarrierSegmentTypeField;
export declare function serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyShieldInformationBarrierSegmentField(val: CreateShieldInformationBarrierSegmentRestrictionRequestBodyShieldInformationBarrierSegmentField): SerializedData;
export declare function deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyShieldInformationBarrierSegmentField(val: SerializedData): CreateShieldInformationBarrierSegmentRestrictionRequestBodyShieldInformationBarrierSegmentField;
export declare function serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyRestrictedSegmentTypeField(val: CreateShieldInformationBarrierSegmentRestrictionRequestBodyRestrictedSegmentTypeField): SerializedData;
export declare function deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyRestrictedSegmentTypeField(val: SerializedData): CreateShieldInformationBarrierSegmentRestrictionRequestBodyRestrictedSegmentTypeField;
export declare function serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyRestrictedSegmentField(val: CreateShieldInformationBarrierSegmentRestrictionRequestBodyRestrictedSegmentField): SerializedData;
export declare function deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyRestrictedSegmentField(val: SerializedData): CreateShieldInformationBarrierSegmentRestrictionRequestBodyRestrictedSegmentField;
export declare function serializeCreateShieldInformationBarrierSegmentRestrictionRequestBody(val: CreateShieldInformationBarrierSegmentRestrictionRequestBody): SerializedData;
export declare function deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBody(val: SerializedData): CreateShieldInformationBarrierSegmentRestrictionRequestBody;
export declare function serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyInput(val: CreateShieldInformationBarrierSegmentRestrictionRequestBodyInput): SerializedData;
export declare function deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyInput(val: SerializedData): CreateShieldInformationBarrierSegmentRestrictionRequestBodyInput;
