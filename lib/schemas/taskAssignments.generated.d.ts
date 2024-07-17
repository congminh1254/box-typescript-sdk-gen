import { TaskAssignment } from './taskAssignment.generated.js';
import { SerializedData } from '../serialization/json.js';
export interface TaskAssignments {
    readonly totalCount?: number;
    readonly entries?: readonly TaskAssignment[];
}
export declare function serializeTaskAssignments(val: TaskAssignments): SerializedData;
export declare function deserializeTaskAssignments(val: SerializedData): TaskAssignments;
