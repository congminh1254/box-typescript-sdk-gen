import { UserMini } from './userMini.generated.js';
import { DateTime } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export type InviteTypeField = 'invite';
export type InviteInvitedToTypeField = 'enterprise';
export interface InviteInvitedToField {
    readonly id?: string;
    readonly type?: InviteInvitedToTypeField;
    readonly name?: string;
}
export declare class Invite {
    readonly id: string;
    readonly type: InviteTypeField;
    readonly invitedTo?: InviteInvitedToField;
    readonly actionableBy?: UserMini;
    readonly invitedBy?: UserMini;
    readonly status?: string;
    readonly createdAt?: DateTime;
    readonly modifiedAt?: DateTime;
    constructor(fields: Omit<Invite, 'type'> & Partial<Pick<Invite, 'type'>>);
}
export interface InviteInput {
    readonly id: string;
    readonly type?: InviteTypeField;
    readonly invitedTo?: InviteInvitedToField;
    readonly actionableBy?: UserMini;
    readonly invitedBy?: UserMini;
    readonly status?: string;
    readonly createdAt?: DateTime;
    readonly modifiedAt?: DateTime;
}
export declare function serializeInviteTypeField(val: InviteTypeField): SerializedData;
export declare function deserializeInviteTypeField(val: SerializedData): InviteTypeField;
export declare function serializeInviteInvitedToTypeField(val: InviteInvitedToTypeField): SerializedData;
export declare function deserializeInviteInvitedToTypeField(val: SerializedData): InviteInvitedToTypeField;
export declare function serializeInviteInvitedToField(val: InviteInvitedToField): SerializedData;
export declare function deserializeInviteInvitedToField(val: SerializedData): InviteInvitedToField;
export declare function serializeInvite(val: Invite): SerializedData;
export declare function deserializeInvite(val: SerializedData): Invite;
export declare function serializeInviteInput(val: InviteInput): SerializedData;
export declare function deserializeInviteInput(val: SerializedData): InviteInput;
