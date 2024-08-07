import { LegalHoldPolicies } from '../schemas/legalHoldPolicies.generated.js';
import { LegalHoldPolicy } from '../schemas/legalHoldPolicy.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { CancellationToken } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
import { DateTime } from '../internal/utils.js';
export declare class CreateLegalHoldPolicyOptionals {
    readonly headers: CreateLegalHoldPolicyHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<CreateLegalHoldPolicyOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<CreateLegalHoldPolicyOptionals, 'headers' | 'cancellationToken'>>);
}
export interface CreateLegalHoldPolicyOptionalsInput {
    readonly headers?: CreateLegalHoldPolicyHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetLegalHoldPolicyByIdOptionals {
    readonly headers: GetLegalHoldPolicyByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetLegalHoldPolicyByIdOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<GetLegalHoldPolicyByIdOptionals, 'headers' | 'cancellationToken'>>);
}
export interface GetLegalHoldPolicyByIdOptionalsInput {
    readonly headers?: GetLegalHoldPolicyByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class UpdateLegalHoldPolicyByIdOptionals {
    readonly requestBody: UpdateLegalHoldPolicyByIdRequestBody;
    readonly headers: UpdateLegalHoldPolicyByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<UpdateLegalHoldPolicyByIdOptionals, 'requestBody' | 'headers' | 'cancellationToken'> & Partial<Pick<UpdateLegalHoldPolicyByIdOptionals, 'requestBody' | 'headers' | 'cancellationToken'>>);
}
export interface UpdateLegalHoldPolicyByIdOptionalsInput {
    readonly requestBody?: UpdateLegalHoldPolicyByIdRequestBody;
    readonly headers?: UpdateLegalHoldPolicyByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class DeleteLegalHoldPolicyByIdOptionals {
    readonly headers: DeleteLegalHoldPolicyByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<DeleteLegalHoldPolicyByIdOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<DeleteLegalHoldPolicyByIdOptionals, 'headers' | 'cancellationToken'>>);
}
export interface DeleteLegalHoldPolicyByIdOptionalsInput {
    readonly headers?: DeleteLegalHoldPolicyByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export interface GetLegalHoldPoliciesQueryParams {
    readonly policyName?: string;
    readonly fields?: readonly string[];
    readonly marker?: string;
    readonly limit?: number;
}
export declare class GetLegalHoldPoliciesHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetLegalHoldPoliciesHeaders, 'extraHeaders'> & Partial<Pick<GetLegalHoldPoliciesHeaders, 'extraHeaders'>>);
}
export interface GetLegalHoldPoliciesHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export interface CreateLegalHoldPolicyRequestBody {
    readonly policyName: string;
    readonly description?: string;
    readonly filterStartedAt?: DateTime;
    readonly filterEndedAt?: DateTime;
    readonly isOngoing?: boolean;
}
export declare class CreateLegalHoldPolicyHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<CreateLegalHoldPolicyHeaders, 'extraHeaders'> & Partial<Pick<CreateLegalHoldPolicyHeaders, 'extraHeaders'>>);
}
export interface CreateLegalHoldPolicyHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class GetLegalHoldPolicyByIdHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetLegalHoldPolicyByIdHeaders, 'extraHeaders'> & Partial<Pick<GetLegalHoldPolicyByIdHeaders, 'extraHeaders'>>);
}
export interface GetLegalHoldPolicyByIdHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export interface UpdateLegalHoldPolicyByIdRequestBody {
    readonly policyName?: string;
    readonly description?: string;
    readonly releaseNotes?: string;
}
export declare class UpdateLegalHoldPolicyByIdHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<UpdateLegalHoldPolicyByIdHeaders, 'extraHeaders'> & Partial<Pick<UpdateLegalHoldPolicyByIdHeaders, 'extraHeaders'>>);
}
export interface UpdateLegalHoldPolicyByIdHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class DeleteLegalHoldPolicyByIdHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<DeleteLegalHoldPolicyByIdHeaders, 'extraHeaders'> & Partial<Pick<DeleteLegalHoldPolicyByIdHeaders, 'extraHeaders'>>);
}
export interface DeleteLegalHoldPolicyByIdHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class LegalHoldPoliciesManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<LegalHoldPoliciesManager, 'networkSession' | 'getLegalHoldPolicies' | 'createLegalHoldPolicy' | 'getLegalHoldPolicyById' | 'updateLegalHoldPolicyById' | 'deleteLegalHoldPolicyById'> & Partial<Pick<LegalHoldPoliciesManager, 'networkSession'>>);
    getLegalHoldPolicies(queryParams?: GetLegalHoldPoliciesQueryParams, headersInput?: GetLegalHoldPoliciesHeadersInput, cancellationToken?: CancellationToken): Promise<LegalHoldPolicies>;
    createLegalHoldPolicy(requestBody: CreateLegalHoldPolicyRequestBody, optionalsInput?: CreateLegalHoldPolicyOptionalsInput): Promise<LegalHoldPolicy>;
    getLegalHoldPolicyById(legalHoldPolicyId: string, optionalsInput?: GetLegalHoldPolicyByIdOptionalsInput): Promise<LegalHoldPolicy>;
    updateLegalHoldPolicyById(legalHoldPolicyId: string, optionalsInput?: UpdateLegalHoldPolicyByIdOptionalsInput): Promise<LegalHoldPolicy>;
    deleteLegalHoldPolicyById(legalHoldPolicyId: string, optionalsInput?: DeleteLegalHoldPolicyByIdOptionalsInput): Promise<undefined>;
}
export interface LegalHoldPoliciesManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
export declare function serializeCreateLegalHoldPolicyRequestBody(val: CreateLegalHoldPolicyRequestBody): SerializedData;
export declare function deserializeCreateLegalHoldPolicyRequestBody(val: SerializedData): CreateLegalHoldPolicyRequestBody;
export declare function serializeUpdateLegalHoldPolicyByIdRequestBody(val: UpdateLegalHoldPolicyByIdRequestBody): SerializedData;
export declare function deserializeUpdateLegalHoldPolicyByIdRequestBody(val: SerializedData): UpdateLegalHoldPolicyByIdRequestBody;
