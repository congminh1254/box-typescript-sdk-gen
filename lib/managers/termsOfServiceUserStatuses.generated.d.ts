import { TermsOfServiceUserStatuses } from '../schemas/termsOfServiceUserStatuses.generated.js';
import { TermsOfServiceUserStatus } from '../schemas/termsOfServiceUserStatus.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { CancellationToken } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export declare class GetTermsOfServiceUserStatusesOptionals {
    readonly headers: GetTermsOfServiceUserStatusesHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetTermsOfServiceUserStatusesOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<GetTermsOfServiceUserStatusesOptionals, 'headers' | 'cancellationToken'>>);
}
export interface GetTermsOfServiceUserStatusesOptionalsInput {
    readonly headers?: GetTermsOfServiceUserStatusesHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class CreateTermsOfServiceStatusForUserOptionals {
    readonly headers: CreateTermsOfServiceStatusForUserHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<CreateTermsOfServiceStatusForUserOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<CreateTermsOfServiceStatusForUserOptionals, 'headers' | 'cancellationToken'>>);
}
export interface CreateTermsOfServiceStatusForUserOptionalsInput {
    readonly headers?: CreateTermsOfServiceStatusForUserHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class UpdateTermsOfServiceStatusForUserByIdOptionals {
    readonly headers: UpdateTermsOfServiceStatusForUserByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<UpdateTermsOfServiceStatusForUserByIdOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<UpdateTermsOfServiceStatusForUserByIdOptionals, 'headers' | 'cancellationToken'>>);
}
export interface UpdateTermsOfServiceStatusForUserByIdOptionalsInput {
    readonly headers?: UpdateTermsOfServiceStatusForUserByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export interface GetTermsOfServiceUserStatusesQueryParams {
    readonly tosId: string;
    readonly userId?: string;
}
export declare class GetTermsOfServiceUserStatusesHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetTermsOfServiceUserStatusesHeaders, 'extraHeaders'> & Partial<Pick<GetTermsOfServiceUserStatusesHeaders, 'extraHeaders'>>);
}
export interface GetTermsOfServiceUserStatusesHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export type CreateTermsOfServiceStatusForUserRequestBodyTosTypeField = 'terms_of_service';
export declare class CreateTermsOfServiceStatusForUserRequestBodyTosField {
    readonly type: CreateTermsOfServiceStatusForUserRequestBodyTosTypeField;
    readonly id: string;
    constructor(fields: Omit<CreateTermsOfServiceStatusForUserRequestBodyTosField, 'type'> & Partial<Pick<CreateTermsOfServiceStatusForUserRequestBodyTosField, 'type'>>);
}
export interface CreateTermsOfServiceStatusForUserRequestBodyTosFieldInput {
    readonly type?: CreateTermsOfServiceStatusForUserRequestBodyTosTypeField;
    readonly id: string;
}
export type CreateTermsOfServiceStatusForUserRequestBodyUserTypeField = 'user';
export declare class CreateTermsOfServiceStatusForUserRequestBodyUserField {
    readonly type: CreateTermsOfServiceStatusForUserRequestBodyUserTypeField;
    readonly id: string;
    constructor(fields: Omit<CreateTermsOfServiceStatusForUserRequestBodyUserField, 'type'> & Partial<Pick<CreateTermsOfServiceStatusForUserRequestBodyUserField, 'type'>>);
}
export interface CreateTermsOfServiceStatusForUserRequestBodyUserFieldInput {
    readonly type?: CreateTermsOfServiceStatusForUserRequestBodyUserTypeField;
    readonly id: string;
}
export interface CreateTermsOfServiceStatusForUserRequestBody {
    readonly tos: CreateTermsOfServiceStatusForUserRequestBodyTosField;
    readonly user: CreateTermsOfServiceStatusForUserRequestBodyUserField;
    readonly isAccepted: boolean;
}
export declare class CreateTermsOfServiceStatusForUserHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<CreateTermsOfServiceStatusForUserHeaders, 'extraHeaders'> & Partial<Pick<CreateTermsOfServiceStatusForUserHeaders, 'extraHeaders'>>);
}
export interface CreateTermsOfServiceStatusForUserHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export interface UpdateTermsOfServiceStatusForUserByIdRequestBody {
    readonly isAccepted: boolean;
}
export declare class UpdateTermsOfServiceStatusForUserByIdHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<UpdateTermsOfServiceStatusForUserByIdHeaders, 'extraHeaders'> & Partial<Pick<UpdateTermsOfServiceStatusForUserByIdHeaders, 'extraHeaders'>>);
}
export interface UpdateTermsOfServiceStatusForUserByIdHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class TermsOfServiceUserStatusesManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<TermsOfServiceUserStatusesManager, 'networkSession' | 'getTermsOfServiceUserStatuses' | 'createTermsOfServiceStatusForUser' | 'updateTermsOfServiceStatusForUserById'> & Partial<Pick<TermsOfServiceUserStatusesManager, 'networkSession'>>);
    getTermsOfServiceUserStatuses(queryParams: GetTermsOfServiceUserStatusesQueryParams, optionalsInput?: GetTermsOfServiceUserStatusesOptionalsInput): Promise<TermsOfServiceUserStatuses>;
    createTermsOfServiceStatusForUser(requestBody: CreateTermsOfServiceStatusForUserRequestBody, optionalsInput?: CreateTermsOfServiceStatusForUserOptionalsInput): Promise<TermsOfServiceUserStatus>;
    updateTermsOfServiceStatusForUserById(termsOfServiceUserStatusId: string, requestBody: UpdateTermsOfServiceStatusForUserByIdRequestBody, optionalsInput?: UpdateTermsOfServiceStatusForUserByIdOptionalsInput): Promise<TermsOfServiceUserStatus>;
}
export interface TermsOfServiceUserStatusesManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
export declare function serializeCreateTermsOfServiceStatusForUserRequestBodyTosTypeField(val: CreateTermsOfServiceStatusForUserRequestBodyTosTypeField): SerializedData;
export declare function deserializeCreateTermsOfServiceStatusForUserRequestBodyTosTypeField(val: SerializedData): CreateTermsOfServiceStatusForUserRequestBodyTosTypeField;
export declare function serializeCreateTermsOfServiceStatusForUserRequestBodyTosField(val: CreateTermsOfServiceStatusForUserRequestBodyTosField): SerializedData;
export declare function deserializeCreateTermsOfServiceStatusForUserRequestBodyTosField(val: SerializedData): CreateTermsOfServiceStatusForUserRequestBodyTosField;
export declare function serializeCreateTermsOfServiceStatusForUserRequestBodyTosFieldInput(val: CreateTermsOfServiceStatusForUserRequestBodyTosFieldInput): SerializedData;
export declare function deserializeCreateTermsOfServiceStatusForUserRequestBodyTosFieldInput(val: SerializedData): CreateTermsOfServiceStatusForUserRequestBodyTosFieldInput;
export declare function serializeCreateTermsOfServiceStatusForUserRequestBodyUserTypeField(val: CreateTermsOfServiceStatusForUserRequestBodyUserTypeField): SerializedData;
export declare function deserializeCreateTermsOfServiceStatusForUserRequestBodyUserTypeField(val: SerializedData): CreateTermsOfServiceStatusForUserRequestBodyUserTypeField;
export declare function serializeCreateTermsOfServiceStatusForUserRequestBodyUserField(val: CreateTermsOfServiceStatusForUserRequestBodyUserField): SerializedData;
export declare function deserializeCreateTermsOfServiceStatusForUserRequestBodyUserField(val: SerializedData): CreateTermsOfServiceStatusForUserRequestBodyUserField;
export declare function serializeCreateTermsOfServiceStatusForUserRequestBodyUserFieldInput(val: CreateTermsOfServiceStatusForUserRequestBodyUserFieldInput): SerializedData;
export declare function deserializeCreateTermsOfServiceStatusForUserRequestBodyUserFieldInput(val: SerializedData): CreateTermsOfServiceStatusForUserRequestBodyUserFieldInput;
export declare function serializeCreateTermsOfServiceStatusForUserRequestBody(val: CreateTermsOfServiceStatusForUserRequestBody): SerializedData;
export declare function deserializeCreateTermsOfServiceStatusForUserRequestBody(val: SerializedData): CreateTermsOfServiceStatusForUserRequestBody;
export declare function serializeUpdateTermsOfServiceStatusForUserByIdRequestBody(val: UpdateTermsOfServiceStatusForUserByIdRequestBody): SerializedData;
export declare function deserializeUpdateTermsOfServiceStatusForUserByIdRequestBody(val: SerializedData): UpdateTermsOfServiceStatusForUserByIdRequestBody;
