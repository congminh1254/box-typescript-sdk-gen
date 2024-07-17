import { TermsOfServiceBase } from './termsOfServiceBase.generated.js';
import { UserMini } from './userMini.generated.js';
import { DateTime } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export type TermsOfServiceUserStatusTypeField = 'terms_of_service_user_status';
export declare class TermsOfServiceUserStatus {
    readonly id: string;
    readonly type: TermsOfServiceUserStatusTypeField;
    readonly tos?: TermsOfServiceBase;
    readonly user?: UserMini;
    readonly isAccepted?: boolean;
    readonly createdAt?: DateTime;
    readonly modifiedAt?: DateTime;
    constructor(fields: Omit<TermsOfServiceUserStatus, 'type'> & Partial<Pick<TermsOfServiceUserStatus, 'type'>>);
}
export interface TermsOfServiceUserStatusInput {
    readonly id: string;
    readonly type?: TermsOfServiceUserStatusTypeField;
    readonly tos?: TermsOfServiceBase;
    readonly user?: UserMini;
    readonly isAccepted?: boolean;
    readonly createdAt?: DateTime;
    readonly modifiedAt?: DateTime;
}
export declare function serializeTermsOfServiceUserStatusTypeField(val: TermsOfServiceUserStatusTypeField): SerializedData;
export declare function deserializeTermsOfServiceUserStatusTypeField(val: SerializedData): TermsOfServiceUserStatusTypeField;
export declare function serializeTermsOfServiceUserStatus(val: TermsOfServiceUserStatus): SerializedData;
export declare function deserializeTermsOfServiceUserStatus(val: SerializedData): TermsOfServiceUserStatus;
export declare function serializeTermsOfServiceUserStatusInput(val: TermsOfServiceUserStatusInput): SerializedData;
export declare function deserializeTermsOfServiceUserStatusInput(val: SerializedData): TermsOfServiceUserStatusInput;
