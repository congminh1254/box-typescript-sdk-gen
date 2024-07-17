import { ShieldInformationBarrier } from '../schemas/shieldInformationBarrier.generated.js';
import { ShieldInformationBarriers } from '../schemas/shieldInformationBarriers.generated.js';
import { EnterpriseBase } from '../schemas/enterpriseBase.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { CancellationToken } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export declare class GetShieldInformationBarrierByIdOptionals {
    readonly headers: GetShieldInformationBarrierByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetShieldInformationBarrierByIdOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<GetShieldInformationBarrierByIdOptionals, 'headers' | 'cancellationToken'>>);
}
export interface GetShieldInformationBarrierByIdOptionalsInput {
    readonly headers?: GetShieldInformationBarrierByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class UpdateShieldInformationBarrierStatusOptionals {
    readonly headers: UpdateShieldInformationBarrierStatusHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<UpdateShieldInformationBarrierStatusOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<UpdateShieldInformationBarrierStatusOptionals, 'headers' | 'cancellationToken'>>);
}
export interface UpdateShieldInformationBarrierStatusOptionalsInput {
    readonly headers?: UpdateShieldInformationBarrierStatusHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class CreateShieldInformationBarrierOptionals {
    readonly headers: CreateShieldInformationBarrierHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<CreateShieldInformationBarrierOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<CreateShieldInformationBarrierOptionals, 'headers' | 'cancellationToken'>>);
}
export interface CreateShieldInformationBarrierOptionalsInput {
    readonly headers?: CreateShieldInformationBarrierHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetShieldInformationBarrierByIdHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetShieldInformationBarrierByIdHeaders, 'extraHeaders'> & Partial<Pick<GetShieldInformationBarrierByIdHeaders, 'extraHeaders'>>);
}
export interface GetShieldInformationBarrierByIdHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export type UpdateShieldInformationBarrierStatusRequestBodyStatusField = 'pending' | 'disabled';
export interface UpdateShieldInformationBarrierStatusRequestBody {
    readonly id: string;
    readonly status: UpdateShieldInformationBarrierStatusRequestBodyStatusField;
}
export declare class UpdateShieldInformationBarrierStatusHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<UpdateShieldInformationBarrierStatusHeaders, 'extraHeaders'> & Partial<Pick<UpdateShieldInformationBarrierStatusHeaders, 'extraHeaders'>>);
}
export interface UpdateShieldInformationBarrierStatusHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export interface GetShieldInformationBarriersQueryParams {
    readonly marker?: string;
    readonly limit?: number;
}
export declare class GetShieldInformationBarriersHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetShieldInformationBarriersHeaders, 'extraHeaders'> & Partial<Pick<GetShieldInformationBarriersHeaders, 'extraHeaders'>>);
}
export interface GetShieldInformationBarriersHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export interface CreateShieldInformationBarrierRequestBody {
    readonly enterprise: EnterpriseBase;
}
export declare class CreateShieldInformationBarrierHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<CreateShieldInformationBarrierHeaders, 'extraHeaders'> & Partial<Pick<CreateShieldInformationBarrierHeaders, 'extraHeaders'>>);
}
export interface CreateShieldInformationBarrierHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class ShieldInformationBarriersManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<ShieldInformationBarriersManager, 'networkSession' | 'getShieldInformationBarrierById' | 'updateShieldInformationBarrierStatus' | 'getShieldInformationBarriers' | 'createShieldInformationBarrier'> & Partial<Pick<ShieldInformationBarriersManager, 'networkSession'>>);
    getShieldInformationBarrierById(shieldInformationBarrierId: string, optionalsInput?: GetShieldInformationBarrierByIdOptionalsInput): Promise<ShieldInformationBarrier>;
    updateShieldInformationBarrierStatus(requestBody: UpdateShieldInformationBarrierStatusRequestBody, optionalsInput?: UpdateShieldInformationBarrierStatusOptionalsInput): Promise<ShieldInformationBarrier>;
    getShieldInformationBarriers(queryParams?: GetShieldInformationBarriersQueryParams, headersInput?: GetShieldInformationBarriersHeadersInput, cancellationToken?: CancellationToken): Promise<ShieldInformationBarriers>;
    createShieldInformationBarrier(requestBody: CreateShieldInformationBarrierRequestBody, optionalsInput?: CreateShieldInformationBarrierOptionalsInput): Promise<ShieldInformationBarrier>;
}
export interface ShieldInformationBarriersManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
export declare function serializeUpdateShieldInformationBarrierStatusRequestBodyStatusField(val: UpdateShieldInformationBarrierStatusRequestBodyStatusField): SerializedData;
export declare function deserializeUpdateShieldInformationBarrierStatusRequestBodyStatusField(val: SerializedData): UpdateShieldInformationBarrierStatusRequestBodyStatusField;
export declare function serializeUpdateShieldInformationBarrierStatusRequestBody(val: UpdateShieldInformationBarrierStatusRequestBody): SerializedData;
export declare function deserializeUpdateShieldInformationBarrierStatusRequestBody(val: SerializedData): UpdateShieldInformationBarrierStatusRequestBody;
export declare function serializeCreateShieldInformationBarrierRequestBody(val: CreateShieldInformationBarrierRequestBody): SerializedData;
export declare function deserializeCreateShieldInformationBarrierRequestBody(val: SerializedData): CreateShieldInformationBarrierRequestBody;
