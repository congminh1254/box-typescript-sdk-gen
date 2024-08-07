import { UserMini } from './userMini.generated.js';
import { GroupMini } from './groupMini.generated.js';
import { DateTime } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export type GroupMembershipTypeField = 'group_membership';
export type GroupMembershipRoleField = 'member' | 'admin';
export interface GroupMembership {
    readonly id?: string;
    readonly type?: GroupMembershipTypeField;
    readonly user?: UserMini;
    readonly group?: GroupMini;
    readonly role?: GroupMembershipRoleField;
    readonly createdAt?: DateTime;
    readonly modifiedAt?: DateTime;
}
export declare function serializeGroupMembershipTypeField(val: GroupMembershipTypeField): SerializedData;
export declare function deserializeGroupMembershipTypeField(val: SerializedData): GroupMembershipTypeField;
export declare function serializeGroupMembershipRoleField(val: GroupMembershipRoleField): SerializedData;
export declare function deserializeGroupMembershipRoleField(val: SerializedData): GroupMembershipRoleField;
export declare function serializeGroupMembership(val: GroupMembership): SerializedData;
export declare function deserializeGroupMembership(val: SerializedData): GroupMembership;
