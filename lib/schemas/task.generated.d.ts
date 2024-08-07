import { FileMini } from './fileMini.generated.js';
import { TaskAssignments } from './taskAssignments.generated.js';
import { UserMini } from './userMini.generated.js';
import { DateTime } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export type TaskTypeField = 'task';
export type TaskActionField = 'review' | 'complete';
export type TaskCompletionRuleField = 'all_assignees' | 'any_assignee';
export interface Task {
    readonly id?: string;
    readonly type?: TaskTypeField;
    readonly item?: FileMini;
    readonly dueAt?: DateTime;
    readonly action?: TaskActionField;
    readonly message?: string;
    readonly taskAssignmentCollection?: TaskAssignments;
    readonly isCompleted?: boolean;
    readonly createdBy?: UserMini;
    readonly createdAt?: DateTime;
    readonly completionRule?: TaskCompletionRuleField;
}
export declare function serializeTaskTypeField(val: TaskTypeField): SerializedData;
export declare function deserializeTaskTypeField(val: SerializedData): TaskTypeField;
export declare function serializeTaskActionField(val: TaskActionField): SerializedData;
export declare function deserializeTaskActionField(val: SerializedData): TaskActionField;
export declare function serializeTaskCompletionRuleField(val: TaskCompletionRuleField): SerializedData;
export declare function deserializeTaskCompletionRuleField(val: SerializedData): TaskCompletionRuleField;
export declare function serializeTask(val: Task): SerializedData;
export declare function deserializeTask(val: SerializedData): Task;
