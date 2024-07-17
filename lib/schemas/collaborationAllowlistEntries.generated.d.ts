import { CollaborationAllowlistEntry } from './collaborationAllowlistEntry.generated.js';
import { SerializedData } from '../serialization/json.js';
export interface CollaborationAllowlistEntries {
    readonly limit?: number;
    readonly nextMarker?: string;
    readonly prevMarker?: string;
    readonly entries?: readonly CollaborationAllowlistEntry[];
}
export declare function serializeCollaborationAllowlistEntries(val: CollaborationAllowlistEntries): SerializedData;
export declare function deserializeCollaborationAllowlistEntries(val: SerializedData): CollaborationAllowlistEntries;
