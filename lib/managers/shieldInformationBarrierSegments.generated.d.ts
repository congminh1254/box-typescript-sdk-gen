import { ShieldInformationBarrierSegment } from '../schemas/shieldInformationBarrierSegment.generated.js';
import { ShieldInformationBarrierSegments } from '../schemas/shieldInformationBarrierSegments.generated.js';
import { ShieldInformationBarrierBase } from '../schemas/shieldInformationBarrierBase.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { CancellationToken } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export declare class GetShieldInformationBarrierSegmentByIdOptionals {
    readonly headers: GetShieldInformationBarrierSegmentByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetShieldInformationBarrierSegmentByIdOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<GetShieldInformationBarrierSegmentByIdOptionals, 'headers' | 'cancellationToken'>>);
}
export interface GetShieldInformationBarrierSegmentByIdOptionalsInput {
    readonly headers?: GetShieldInformationBarrierSegmentByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class UpdateShieldInformationBarrierSegmentByIdOptionals {
    readonly requestBody: UpdateShieldInformationBarrierSegmentByIdRequestBody;
    readonly headers: UpdateShieldInformationBarrierSegmentByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<UpdateShieldInformationBarrierSegmentByIdOptionals, 'requestBody' | 'headers' | 'cancellationToken'> & Partial<Pick<UpdateShieldInformationBarrierSegmentByIdOptionals, 'requestBody' | 'headers' | 'cancellationToken'>>);
}
export interface UpdateShieldInformationBarrierSegmentByIdOptionalsInput {
    readonly requestBody?: UpdateShieldInformationBarrierSegmentByIdRequestBody;
    readonly headers?: UpdateShieldInformationBarrierSegmentByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class DeleteShieldInformationBarrierSegmentByIdOptionals {
    readonly headers: DeleteShieldInformationBarrierSegmentByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<DeleteShieldInformationBarrierSegmentByIdOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<DeleteShieldInformationBarrierSegmentByIdOptionals, 'headers' | 'cancellationToken'>>);
}
export interface DeleteShieldInformationBarrierSegmentByIdOptionalsInput {
    readonly headers?: DeleteShieldInformationBarrierSegmentByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetShieldInformationBarrierSegmentsOptionals {
    readonly headers: GetShieldInformationBarrierSegmentsHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetShieldInformationBarrierSegmentsOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<GetShieldInformationBarrierSegmentsOptionals, 'headers' | 'cancellationToken'>>);
}
export interface GetShieldInformationBarrierSegmentsOptionalsInput {
    readonly headers?: GetShieldInformationBarrierSegmentsHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class CreateShieldInformationBarrierSegmentOptionals {
    readonly headers: CreateShieldInformationBarrierSegmentHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<CreateShieldInformationBarrierSegmentOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<CreateShieldInformationBarrierSegmentOptionals, 'headers' | 'cancellationToken'>>);
}
export interface CreateShieldInformationBarrierSegmentOptionalsInput {
    readonly headers?: CreateShieldInformationBarrierSegmentHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetShieldInformationBarrierSegmentByIdHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetShieldInformationBarrierSegmentByIdHeaders, 'extraHeaders'> & Partial<Pick<GetShieldInformationBarrierSegmentByIdHeaders, 'extraHeaders'>>);
}
export interface GetShieldInformationBarrierSegmentByIdHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export interface UpdateShieldInformationBarrierSegmentByIdRequestBody {
    readonly name?: string;
    readonly description?: string;
}
export declare class UpdateShieldInformationBarrierSegmentByIdHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<UpdateShieldInformationBarrierSegmentByIdHeaders, 'extraHeaders'> & Partial<Pick<UpdateShieldInformationBarrierSegmentByIdHeaders, 'extraHeaders'>>);
}
export interface UpdateShieldInformationBarrierSegmentByIdHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class DeleteShieldInformationBarrierSegmentByIdHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<DeleteShieldInformationBarrierSegmentByIdHeaders, 'extraHeaders'> & Partial<Pick<DeleteShieldInformationBarrierSegmentByIdHeaders, 'extraHeaders'>>);
}
export interface DeleteShieldInformationBarrierSegmentByIdHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export interface GetShieldInformationBarrierSegmentsQueryParams {
    readonly shieldInformationBarrierId: string;
    readonly marker?: string;
    readonly limit?: number;
}
export declare class GetShieldInformationBarrierSegmentsHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetShieldInformationBarrierSegmentsHeaders, 'extraHeaders'> & Partial<Pick<GetShieldInformationBarrierSegmentsHeaders, 'extraHeaders'>>);
}
export interface GetShieldInformationBarrierSegmentsHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export interface CreateShieldInformationBarrierSegmentRequestBody {
    readonly shieldInformationBarrier: ShieldInformationBarrierBase;
    readonly name: string;
    readonly description?: string;
}
export declare class CreateShieldInformationBarrierSegmentHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<CreateShieldInformationBarrierSegmentHeaders, 'extraHeaders'> & Partial<Pick<CreateShieldInformationBarrierSegmentHeaders, 'extraHeaders'>>);
}
export interface CreateShieldInformationBarrierSegmentHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class ShieldInformationBarrierSegmentsManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<ShieldInformationBarrierSegmentsManager, 'networkSession' | 'getShieldInformationBarrierSegmentById' | 'updateShieldInformationBarrierSegmentById' | 'deleteShieldInformationBarrierSegmentById' | 'getShieldInformationBarrierSegments' | 'createShieldInformationBarrierSegment'> & Partial<Pick<ShieldInformationBarrierSegmentsManager, 'networkSession'>>);
    getShieldInformationBarrierSegmentById(shieldInformationBarrierSegmentId: string, optionalsInput?: GetShieldInformationBarrierSegmentByIdOptionalsInput): Promise<ShieldInformationBarrierSegment>;
    updateShieldInformationBarrierSegmentById(shieldInformationBarrierSegmentId: string, optionalsInput?: UpdateShieldInformationBarrierSegmentByIdOptionalsInput): Promise<ShieldInformationBarrierSegment>;
    deleteShieldInformationBarrierSegmentById(shieldInformationBarrierSegmentId: string, optionalsInput?: DeleteShieldInformationBarrierSegmentByIdOptionalsInput): Promise<undefined>;
    getShieldInformationBarrierSegments(queryParams: GetShieldInformationBarrierSegmentsQueryParams, optionalsInput?: GetShieldInformationBarrierSegmentsOptionalsInput): Promise<ShieldInformationBarrierSegments>;
    createShieldInformationBarrierSegment(requestBody: CreateShieldInformationBarrierSegmentRequestBody, optionalsInput?: CreateShieldInformationBarrierSegmentOptionalsInput): Promise<ShieldInformationBarrierSegment>;
}
export interface ShieldInformationBarrierSegmentsManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
export declare function serializeUpdateShieldInformationBarrierSegmentByIdRequestBody(val: UpdateShieldInformationBarrierSegmentByIdRequestBody): SerializedData;
export declare function deserializeUpdateShieldInformationBarrierSegmentByIdRequestBody(val: SerializedData): UpdateShieldInformationBarrierSegmentByIdRequestBody;
export declare function serializeCreateShieldInformationBarrierSegmentRequestBody(val: CreateShieldInformationBarrierSegmentRequestBody): SerializedData;
export declare function deserializeCreateShieldInformationBarrierSegmentRequestBody(val: SerializedData): CreateShieldInformationBarrierSegmentRequestBody;
