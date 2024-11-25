import { Collaboration } from './collaboration.generated.js';
import { SerializedData } from '../serialization/json.js';
export type CollaborationsOrderDirectionField = 'ASC' | 'DESC';
export interface CollaborationsOrderField {
    /**
     * The field to order by */
    readonly by?: string;
    /**
     * The direction to order by, either ascending or descending */
    readonly direction?: CollaborationsOrderDirectionField;
    readonly rawData?: SerializedData;
}
export interface Collaborations {
    /**
     * The limit that was used for these entries. This will be the same as the
     * `limit` query parameter unless that value exceeded the maximum value
     * allowed. The maximum value varies by API. */
    readonly limit?: number;
    /**
     * The marker for the start of the next page of results. */
    readonly nextMarker?: string;
    /**
     * The marker for the start of the previous page of results. */
    readonly prevMarker?: string;
    /**
     * One greater than the offset of the last entry in the entire collection.
     * The total number of entries in the collection may be less than
     * `total_count`.
     *
     * This field is only returned for calls that use offset-based pagination.
     * For marker-based paginated APIs, this field will be omitted. */
    readonly totalCount?: number;
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
    readonly order?: readonly CollaborationsOrderField[];
    /**
     * A list of collaborations */
    readonly entries?: readonly Collaboration[];
    readonly rawData?: SerializedData;
}
export declare function serializeCollaborationsOrderDirectionField(val: CollaborationsOrderDirectionField): SerializedData;
export declare function deserializeCollaborationsOrderDirectionField(val: SerializedData): CollaborationsOrderDirectionField;
export declare function serializeCollaborationsOrderField(val: CollaborationsOrderField): SerializedData;
export declare function deserializeCollaborationsOrderField(val: SerializedData): CollaborationsOrderField;
export declare function serializeCollaborations(val: Collaborations): SerializedData;
export declare function deserializeCollaborations(val: SerializedData): Collaborations;
