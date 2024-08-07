import { FileMini } from './fileMini.generated.js';
import { UserMini } from './userMini.generated.js';
import { DateTime } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export type TaskAssignmentTypeField = 'task_assignment';
export type TaskAssignmentResolutionStateField = 'completed' | 'incomplete' | 'approved' | 'rejected';
export interface TaskAssignment {
    readonly id?: string;
    readonly type?: TaskAssignmentTypeField;
    readonly item?: FileMini;
    readonly assignedTo?: UserMini;
    readonly message?: string;
    readonly completedAt?: DateTime;
    readonly assignedAt?: DateTime;
    readonly remindedAt?: DateTime;
    readonly resolutionState?: TaskAssignmentResolutionStateField;
    readonly assignedBy?: UserMini;
}
export declare function serializeTaskAssignmentTypeField(val: TaskAssignmentTypeField): SerializedData;
export declare function deserializeTaskAssignmentTypeField(val: SerializedData): TaskAssignmentTypeField;
export declare function serializeTaskAssignmentResolutionStateField(val: TaskAssignmentResolutionStateField): SerializedData;
export declare function deserializeTaskAssignmentResolutionStateField(val: SerializedData): TaskAssignmentResolutionStateField;
export declare function serializeTaskAssignment(val: TaskAssignment): SerializedData;
export declare function deserializeTaskAssignment(val: SerializedData): TaskAssignment;
