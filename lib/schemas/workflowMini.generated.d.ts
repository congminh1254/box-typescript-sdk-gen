import { SerializedData } from '../serialization/json.js';
export type WorkflowMiniTypeField = 'workflow';
export interface WorkflowMini {
    readonly id?: string;
    readonly type?: WorkflowMiniTypeField;
    readonly name?: string;
    readonly description?: string;
    readonly isEnabled?: boolean;
}
export declare function serializeWorkflowMiniTypeField(val: WorkflowMiniTypeField): SerializedData;
export declare function deserializeWorkflowMiniTypeField(val: SerializedData): WorkflowMiniTypeField;
export declare function serializeWorkflowMini(val: WorkflowMini): SerializedData;
export declare function deserializeWorkflowMini(val: SerializedData): WorkflowMini;
