import { ShieldInformationBarrierReports } from '../schemas/shieldInformationBarrierReports.generated.js';
import { ShieldInformationBarrierReport } from '../schemas/shieldInformationBarrierReport.generated.js';
import { ShieldInformationBarrierReference } from '../schemas/shieldInformationBarrierReference.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { CancellationToken } from '../internal/utils.js';
export declare class GetShieldInformationBarrierReportsOptionals {
    readonly headers: GetShieldInformationBarrierReportsHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetShieldInformationBarrierReportsOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<GetShieldInformationBarrierReportsOptionals, 'headers' | 'cancellationToken'>>);
}
export interface GetShieldInformationBarrierReportsOptionalsInput {
    readonly headers?: GetShieldInformationBarrierReportsHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class CreateShieldInformationBarrierReportOptionals {
    readonly headers: CreateShieldInformationBarrierReportHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<CreateShieldInformationBarrierReportOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<CreateShieldInformationBarrierReportOptionals, 'headers' | 'cancellationToken'>>);
}
export interface CreateShieldInformationBarrierReportOptionalsInput {
    readonly headers?: CreateShieldInformationBarrierReportHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetShieldInformationBarrierReportByIdOptionals {
    readonly headers: GetShieldInformationBarrierReportByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetShieldInformationBarrierReportByIdOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<GetShieldInformationBarrierReportByIdOptionals, 'headers' | 'cancellationToken'>>);
}
export interface GetShieldInformationBarrierReportByIdOptionalsInput {
    readonly headers?: GetShieldInformationBarrierReportByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export interface GetShieldInformationBarrierReportsQueryParams {
    readonly shieldInformationBarrierId: string;
    readonly marker?: string;
    readonly limit?: number;
}
export declare class GetShieldInformationBarrierReportsHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetShieldInformationBarrierReportsHeaders, 'extraHeaders'> & Partial<Pick<GetShieldInformationBarrierReportsHeaders, 'extraHeaders'>>);
}
export interface GetShieldInformationBarrierReportsHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class CreateShieldInformationBarrierReportHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<CreateShieldInformationBarrierReportHeaders, 'extraHeaders'> & Partial<Pick<CreateShieldInformationBarrierReportHeaders, 'extraHeaders'>>);
}
export interface CreateShieldInformationBarrierReportHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class GetShieldInformationBarrierReportByIdHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetShieldInformationBarrierReportByIdHeaders, 'extraHeaders'> & Partial<Pick<GetShieldInformationBarrierReportByIdHeaders, 'extraHeaders'>>);
}
export interface GetShieldInformationBarrierReportByIdHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class ShieldInformationBarrierReportsManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<ShieldInformationBarrierReportsManager, 'networkSession' | 'getShieldInformationBarrierReports' | 'createShieldInformationBarrierReport' | 'getShieldInformationBarrierReportById'> & Partial<Pick<ShieldInformationBarrierReportsManager, 'networkSession'>>);
    getShieldInformationBarrierReports(queryParams: GetShieldInformationBarrierReportsQueryParams, optionalsInput?: GetShieldInformationBarrierReportsOptionalsInput): Promise<ShieldInformationBarrierReports>;
    createShieldInformationBarrierReport(requestBody: ShieldInformationBarrierReference, optionalsInput?: CreateShieldInformationBarrierReportOptionalsInput): Promise<ShieldInformationBarrierReport>;
    getShieldInformationBarrierReportById(shieldInformationBarrierReportId: string, optionalsInput?: GetShieldInformationBarrierReportByIdOptionalsInput): Promise<ShieldInformationBarrierReport>;
}
export interface ShieldInformationBarrierReportsManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
