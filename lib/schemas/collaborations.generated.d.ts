import { Collaboration } from './collaboration.generated.js';
import { SerializedData } from '../serialization/json.js';
export type CollaborationsOrderDirectionField = 'ASC' | 'DESC';
export interface CollaborationsOrderField {
    readonly by?: string;
    readonly direction?: CollaborationsOrderDirectionField;
}
export interface Collaborations {
    readonly limit?: number;
    readonly nextMarker?: string;
    readonly prevMarker?: string;
    readonly totalCount?: number;
    readonly offset?: number;
    readonly order?: readonly CollaborationsOrderField[];
    readonly entries?: readonly Collaboration[];
}
export declare function serializeCollaborationsOrderDirectionField(val: CollaborationsOrderDirectionField): SerializedData;
export declare function deserializeCollaborationsOrderDirectionField(val: SerializedData): CollaborationsOrderDirectionField;
export declare function serializeCollaborationsOrderField(val: CollaborationsOrderField): SerializedData;
export declare function deserializeCollaborationsOrderField(val: SerializedData): CollaborationsOrderField;
export declare function serializeCollaborations(val: Collaborations): SerializedData;
export declare function deserializeCollaborations(val: SerializedData): Collaborations;
