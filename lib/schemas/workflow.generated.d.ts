import { WorkflowMini } from './workflowMini.generated.js';
import { UserBase } from './userBase.generated.js';
import { DateTime } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export type WorkflowFlowsTypeField = 'flow';
export type WorkflowFlowsTriggerTypeField = 'trigger';
export type WorkflowFlowsTriggerTriggerTypeField = 'WORKFLOW_MANUAL_START';
export type WorkflowFlowsTriggerScopeTypeField = 'trigger_scope';
export type WorkflowFlowsTriggerScopeObjectTypeField = 'folder';
export interface WorkflowFlowsTriggerScopeObjectField {
    readonly type?: WorkflowFlowsTriggerScopeObjectTypeField;
    readonly id?: string;
}
export interface WorkflowFlowsTriggerScopeField {
    readonly type?: WorkflowFlowsTriggerScopeTypeField;
    readonly ref?: string;
    readonly object?: WorkflowFlowsTriggerScopeObjectField;
}
export interface WorkflowFlowsTriggerField {
    readonly type?: WorkflowFlowsTriggerTypeField;
    readonly triggerType?: WorkflowFlowsTriggerTriggerTypeField;
    readonly scope?: readonly WorkflowFlowsTriggerScopeField[];
}
export type WorkflowFlowsOutcomesTypeField = 'outcome';
export type WorkflowFlowsOutcomesActionTypeField = 'add_metadata' | 'assign_task' | 'copy_file' | 'copy_folder' | 'create_folder' | 'delete_file' | 'delete_folder' | 'lock_file' | 'move_file' | 'move_folder' | 'remove_watermark_file' | 'rename_folder' | 'restore_folder' | 'share_file' | 'share_folder' | 'unlock_file' | 'upload_file' | 'wait_for_task' | 'watermark_file' | 'go_back_to_step' | 'apply_file_classification' | 'apply_folder_classification' | 'send_notification';
export type WorkflowFlowsOutcomesIfRejectedTypeField = 'outcome';
export type WorkflowFlowsOutcomesIfRejectedActionTypeField = 'add_metadata' | 'assign_task' | 'copy_file' | 'copy_folder' | 'create_folder' | 'delete_file' | 'delete_folder' | 'lock_file' | 'move_file' | 'move_folder' | 'remove_watermark_file' | 'rename_folder' | 'restore_folder' | 'share_file' | 'share_folder' | 'unlock_file' | 'upload_file' | 'wait_for_task' | 'watermark_file' | 'go_back_to_step' | 'apply_file_classification' | 'apply_folder_classification' | 'send_notification';
export interface WorkflowFlowsOutcomesIfRejectedField {
    readonly id?: string;
    readonly type?: WorkflowFlowsOutcomesIfRejectedTypeField;
    readonly name?: string;
    readonly actionType?: WorkflowFlowsOutcomesIfRejectedActionTypeField;
}
export interface WorkflowFlowsOutcomesField {
    readonly id?: string;
    readonly type?: WorkflowFlowsOutcomesTypeField;
    readonly name?: string;
    readonly actionType?: WorkflowFlowsOutcomesActionTypeField;
    readonly ifRejected?: readonly WorkflowFlowsOutcomesIfRejectedField[];
}
export interface WorkflowFlowsField {
    readonly id?: string;
    readonly type?: WorkflowFlowsTypeField;
    readonly trigger?: WorkflowFlowsTriggerField;
    readonly outcomes?: readonly WorkflowFlowsOutcomesField[];
    readonly createdAt?: DateTime;
    readonly createdBy?: UserBase;
}
export type Workflow = WorkflowMini & {
    readonly flows?: readonly WorkflowFlowsField[];
};
export declare function serializeWorkflowFlowsTypeField(val: WorkflowFlowsTypeField): SerializedData;
export declare function deserializeWorkflowFlowsTypeField(val: SerializedData): WorkflowFlowsTypeField;
export declare function serializeWorkflowFlowsTriggerTypeField(val: WorkflowFlowsTriggerTypeField): SerializedData;
export declare function deserializeWorkflowFlowsTriggerTypeField(val: SerializedData): WorkflowFlowsTriggerTypeField;
export declare function serializeWorkflowFlowsTriggerTriggerTypeField(val: WorkflowFlowsTriggerTriggerTypeField): SerializedData;
export declare function deserializeWorkflowFlowsTriggerTriggerTypeField(val: SerializedData): WorkflowFlowsTriggerTriggerTypeField;
export declare function serializeWorkflowFlowsTriggerScopeTypeField(val: WorkflowFlowsTriggerScopeTypeField): SerializedData;
export declare function deserializeWorkflowFlowsTriggerScopeTypeField(val: SerializedData): WorkflowFlowsTriggerScopeTypeField;
export declare function serializeWorkflowFlowsTriggerScopeObjectTypeField(val: WorkflowFlowsTriggerScopeObjectTypeField): SerializedData;
export declare function deserializeWorkflowFlowsTriggerScopeObjectTypeField(val: SerializedData): WorkflowFlowsTriggerScopeObjectTypeField;
export declare function serializeWorkflowFlowsTriggerScopeObjectField(val: WorkflowFlowsTriggerScopeObjectField): SerializedData;
export declare function deserializeWorkflowFlowsTriggerScopeObjectField(val: SerializedData): WorkflowFlowsTriggerScopeObjectField;
export declare function serializeWorkflowFlowsTriggerScopeField(val: WorkflowFlowsTriggerScopeField): SerializedData;
export declare function deserializeWorkflowFlowsTriggerScopeField(val: SerializedData): WorkflowFlowsTriggerScopeField;
export declare function serializeWorkflowFlowsTriggerField(val: WorkflowFlowsTriggerField): SerializedData;
export declare function deserializeWorkflowFlowsTriggerField(val: SerializedData): WorkflowFlowsTriggerField;
export declare function serializeWorkflowFlowsOutcomesTypeField(val: WorkflowFlowsOutcomesTypeField): SerializedData;
export declare function deserializeWorkflowFlowsOutcomesTypeField(val: SerializedData): WorkflowFlowsOutcomesTypeField;
export declare function serializeWorkflowFlowsOutcomesActionTypeField(val: WorkflowFlowsOutcomesActionTypeField): SerializedData;
export declare function deserializeWorkflowFlowsOutcomesActionTypeField(val: SerializedData): WorkflowFlowsOutcomesActionTypeField;
export declare function serializeWorkflowFlowsOutcomesIfRejectedTypeField(val: WorkflowFlowsOutcomesIfRejectedTypeField): SerializedData;
export declare function deserializeWorkflowFlowsOutcomesIfRejectedTypeField(val: SerializedData): WorkflowFlowsOutcomesIfRejectedTypeField;
export declare function serializeWorkflowFlowsOutcomesIfRejectedActionTypeField(val: WorkflowFlowsOutcomesIfRejectedActionTypeField): SerializedData;
export declare function deserializeWorkflowFlowsOutcomesIfRejectedActionTypeField(val: SerializedData): WorkflowFlowsOutcomesIfRejectedActionTypeField;
export declare function serializeWorkflowFlowsOutcomesIfRejectedField(val: WorkflowFlowsOutcomesIfRejectedField): SerializedData;
export declare function deserializeWorkflowFlowsOutcomesIfRejectedField(val: SerializedData): WorkflowFlowsOutcomesIfRejectedField;
export declare function serializeWorkflowFlowsOutcomesField(val: WorkflowFlowsOutcomesField): SerializedData;
export declare function deserializeWorkflowFlowsOutcomesField(val: SerializedData): WorkflowFlowsOutcomesField;
export declare function serializeWorkflowFlowsField(val: WorkflowFlowsField): SerializedData;
export declare function deserializeWorkflowFlowsField(val: SerializedData): WorkflowFlowsField;
export declare function serializeWorkflow(val: Workflow): SerializedData;
export declare function deserializeWorkflow(val: SerializedData): Workflow;
