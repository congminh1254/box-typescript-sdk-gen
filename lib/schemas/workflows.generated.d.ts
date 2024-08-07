import { Workflow } from './workflow.generated.js';
import { SerializedData } from '../serialization/json.js';
export interface Workflows {
    readonly limit?: number;
    readonly nextMarker?: string;
    readonly prevMarker?: string;
    readonly entries?: readonly Workflow[];
}
export declare function serializeWorkflows(val: Workflows): SerializedData;
export declare function deserializeWorkflows(val: SerializedData): Workflows;
