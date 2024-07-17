import { CollaborationAllowlistExemptTarget } from './collaborationAllowlistExemptTarget.generated.js';
import { SerializedData } from '../serialization/json.js';
export interface CollaborationAllowlistExemptTargets {
    readonly limit?: number;
    readonly nextMarker?: string;
    readonly prevMarker?: string;
    readonly entries?: readonly CollaborationAllowlistExemptTarget[];
}
export declare function serializeCollaborationAllowlistExemptTargets(val: CollaborationAllowlistExemptTargets): SerializedData;
export declare function deserializeCollaborationAllowlistExemptTargets(val: SerializedData): CollaborationAllowlistExemptTargets;
