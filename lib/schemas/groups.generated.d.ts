import { GroupFull } from './groupFull.generated.js';
import { SerializedData } from '../serialization/json.js';
export type GroupsOrderDirectionField = 'ASC' | 'DESC';
export interface GroupsOrderField {
    readonly by?: string;
    readonly direction?: GroupsOrderDirectionField;
}
export interface Groups {
    readonly totalCount?: number;
    readonly limit?: number;
    readonly offset?: number;
    readonly order?: readonly GroupsOrderField[];
    readonly entries?: readonly GroupFull[];
}
export declare function serializeGroupsOrderDirectionField(val: GroupsOrderDirectionField): SerializedData;
export declare function deserializeGroupsOrderDirectionField(val: SerializedData): GroupsOrderDirectionField;
export declare function serializeGroupsOrderField(val: GroupsOrderField): SerializedData;
export declare function deserializeGroupsOrderField(val: SerializedData): GroupsOrderField;
export declare function serializeGroups(val: Groups): SerializedData;
export declare function deserializeGroups(val: SerializedData): Groups;
