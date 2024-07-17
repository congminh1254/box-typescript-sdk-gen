import { DevicePinner } from '../schemas/devicePinner.generated.js';
import { DevicePinners } from '../schemas/devicePinners.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { CancellationToken } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export declare class GetDevicePinnerByIdOptionals {
    readonly headers: GetDevicePinnerByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetDevicePinnerByIdOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<GetDevicePinnerByIdOptionals, 'headers' | 'cancellationToken'>>);
}
export interface GetDevicePinnerByIdOptionalsInput {
    readonly headers?: GetDevicePinnerByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class DeleteDevicePinnerByIdOptionals {
    readonly headers: DeleteDevicePinnerByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<DeleteDevicePinnerByIdOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<DeleteDevicePinnerByIdOptionals, 'headers' | 'cancellationToken'>>);
}
export interface DeleteDevicePinnerByIdOptionalsInput {
    readonly headers?: DeleteDevicePinnerByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetEnterpriseDevicePinnersOptionals {
    readonly queryParams: GetEnterpriseDevicePinnersQueryParams;
    readonly headers: GetEnterpriseDevicePinnersHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetEnterpriseDevicePinnersOptionals, 'queryParams' | 'headers' | 'cancellationToken'> & Partial<Pick<GetEnterpriseDevicePinnersOptionals, 'queryParams' | 'headers' | 'cancellationToken'>>);
}
export interface GetEnterpriseDevicePinnersOptionalsInput {
    readonly queryParams?: GetEnterpriseDevicePinnersQueryParams;
    readonly headers?: GetEnterpriseDevicePinnersHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetDevicePinnerByIdHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetDevicePinnerByIdHeaders, 'extraHeaders'> & Partial<Pick<GetDevicePinnerByIdHeaders, 'extraHeaders'>>);
}
export interface GetDevicePinnerByIdHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class DeleteDevicePinnerByIdHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<DeleteDevicePinnerByIdHeaders, 'extraHeaders'> & Partial<Pick<DeleteDevicePinnerByIdHeaders, 'extraHeaders'>>);
}
export interface DeleteDevicePinnerByIdHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export type GetEnterpriseDevicePinnersQueryParamsDirectionField = 'ASC' | 'DESC';
export interface GetEnterpriseDevicePinnersQueryParams {
    readonly marker?: string;
    readonly limit?: number;
    readonly direction?: GetEnterpriseDevicePinnersQueryParamsDirectionField;
}
export declare class GetEnterpriseDevicePinnersHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetEnterpriseDevicePinnersHeaders, 'extraHeaders'> & Partial<Pick<GetEnterpriseDevicePinnersHeaders, 'extraHeaders'>>);
}
export interface GetEnterpriseDevicePinnersHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class DevicePinnersManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<DevicePinnersManager, 'networkSession' | 'getDevicePinnerById' | 'deleteDevicePinnerById' | 'getEnterpriseDevicePinners'> & Partial<Pick<DevicePinnersManager, 'networkSession'>>);
    getDevicePinnerById(devicePinnerId: string, optionalsInput?: GetDevicePinnerByIdOptionalsInput): Promise<DevicePinner>;
    deleteDevicePinnerById(devicePinnerId: string, optionalsInput?: DeleteDevicePinnerByIdOptionalsInput): Promise<undefined>;
    getEnterpriseDevicePinners(enterpriseId: string, optionalsInput?: GetEnterpriseDevicePinnersOptionalsInput): Promise<DevicePinners>;
}
export interface DevicePinnersManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
export declare function serializeGetEnterpriseDevicePinnersQueryParamsDirectionField(val: GetEnterpriseDevicePinnersQueryParamsDirectionField): SerializedData;
export declare function deserializeGetEnterpriseDevicePinnersQueryParamsDirectionField(val: SerializedData): GetEnterpriseDevicePinnersQueryParamsDirectionField;
