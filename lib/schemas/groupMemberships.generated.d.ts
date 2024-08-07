import { GroupMembership } from './groupMembership.generated.js';
import { SerializedData } from '../serialization/json.js';
export type GroupMembershipsOrderDirectionField = 'ASC' | 'DESC';
export interface GroupMembershipsOrderField {
    readonly by?: string;
    readonly direction?: GroupMembershipsOrderDirectionField;
}
export interface GroupMemberships {
    readonly totalCount?: number;
    readonly limit?: number;
    readonly offset?: number;
    readonly order?: readonly GroupMembershipsOrderField[];
    readonly entries?: readonly GroupMembership[];
}
export declare function serializeGroupMembershipsOrderDirectionField(val: GroupMembershipsOrderDirectionField): SerializedData;
export declare function deserializeGroupMembershipsOrderDirectionField(val: SerializedData): GroupMembershipsOrderDirectionField;
export declare function serializeGroupMembershipsOrderField(val: GroupMembershipsOrderField): SerializedData;
export declare function deserializeGroupMembershipsOrderField(val: SerializedData): GroupMembershipsOrderField;
export declare function serializeGroupMemberships(val: GroupMemberships): SerializedData;
export declare function deserializeGroupMemberships(val: SerializedData): GroupMemberships;
