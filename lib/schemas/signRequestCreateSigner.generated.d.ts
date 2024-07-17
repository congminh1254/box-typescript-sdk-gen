import { SerializedData } from '../serialization/json.js';
export type SignRequestCreateSignerRoleField = 'signer' | 'approver' | 'final_copy_reader';
export interface SignRequestCreateSigner {
    readonly email?: string;
    readonly role?: SignRequestCreateSignerRoleField;
    readonly isInPerson?: boolean;
    readonly order?: number;
    readonly embedUrlExternalUserId?: string;
    readonly redirectUrl?: string;
    readonly declinedRedirectUrl?: string;
    readonly loginRequired?: boolean;
    readonly verificationPhoneNumber?: string;
    readonly password?: string;
    readonly signerGroupId?: string;
    readonly suppressNotifications?: boolean;
}
export declare function serializeSignRequestCreateSignerRoleField(val: SignRequestCreateSignerRoleField): SerializedData;
export declare function deserializeSignRequestCreateSignerRoleField(val: SerializedData): SignRequestCreateSignerRoleField;
export declare function serializeSignRequestCreateSigner(val: SignRequestCreateSigner): SerializedData;
export declare function deserializeSignRequestCreateSigner(val: SerializedData): SignRequestCreateSigner;
