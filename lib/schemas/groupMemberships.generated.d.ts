import { GroupMembership } from './groupMembership.generated.js';
import { SerializedData } from '../serialization/json.js';
export type GroupMembershipsOrderDirectionField = 'ASC' | 'DESC' | string;
export interface GroupMembershipsOrderField {
    /**
     * The field to order by */
    readonly by?: string;
    /**
     * The direction to order by, either ascending or descending */
    readonly direction?: GroupMembershipsOrderDirectionField;
    readonly rawData?: SerializedData;
}
export interface GroupMemberships {
    /**
     * One greater than the offset of the last entry in the entire collection.
     * The total number of entries in the collection may be less than
     * `total_count`.
     *
     * This field is only returned for calls that use offset-based pagination.
     * For marker-based paginated APIs, this field will be omitted. */
    readonly totalCount?: number;
    /**
     * The limit that was used for these entries. This will be the same as the
     * `limit` query parameter unless that value exceeded the maximum value
     * allowed. The maximum value varies by API. */
    readonly limit?: number;
    /**
     * The 0-based offset of the first entry in this set. This will be the same
     * as the `offset` query parameter.
     *
     * This field is only returned for calls that use offset-based pagination.
     * For marker-based paginated APIs, this field will be omitted. */
    readonly offset?: number;
    /**
     * The order by which items are returned.
     *
     * This field is only returned for calls that use offset-based pagination.
     * For marker-based paginated APIs, this field will be omitted. */
    readonly order?: readonly GroupMembershipsOrderField[];
    /**
     * A list of group memberships */
    readonly entries?: readonly GroupMembership[];
    readonly rawData?: SerializedData;
}
export declare function serializeGroupMembershipsOrderDirectionField(val: GroupMembershipsOrderDirectionField): SerializedData;
export declare function deserializeGroupMembershipsOrderDirectionField(val: SerializedData): GroupMembershipsOrderDirectionField;
export declare function serializeGroupMembershipsOrderField(val: GroupMembershipsOrderField): SerializedData;
export declare function deserializeGroupMembershipsOrderField(val: SerializedData): GroupMembershipsOrderField;
export declare function serializeGroupMemberships(val: GroupMemberships): SerializedData;
export declare function deserializeGroupMemberships(val: SerializedData): GroupMemberships;
//# sourceMappingURL=groupMemberships.generated.d.ts.map