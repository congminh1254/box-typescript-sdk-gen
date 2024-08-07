import { RetentionPolicyMini } from './retentionPolicyMini.generated.js';
import { UserMini } from './userMini.generated.js';
import { DateTime } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export type RetentionPolicyAssignmentTypeField = 'retention_policy_assignment';
export type RetentionPolicyAssignmentAssignedToTypeField = 'folder' | 'enterprise' | 'metadata_template';
export interface RetentionPolicyAssignmentAssignedToField {
    readonly id?: string;
    readonly type?: RetentionPolicyAssignmentAssignedToTypeField;
}
export interface RetentionPolicyAssignmentFilterFieldsField {
    readonly field?: string;
    readonly value?: string;
}
export declare class RetentionPolicyAssignment {
    readonly id: string;
    readonly type: RetentionPolicyAssignmentTypeField;
    readonly retentionPolicy?: RetentionPolicyMini;
    readonly assignedTo?: RetentionPolicyAssignmentAssignedToField;
    readonly filterFields?: readonly RetentionPolicyAssignmentFilterFieldsField[];
    readonly assignedBy?: UserMini;
    readonly assignedAt?: DateTime;
    readonly startDateField?: string;
    constructor(fields: Omit<RetentionPolicyAssignment, 'type'> & Partial<Pick<RetentionPolicyAssignment, 'type'>>);
}
export interface RetentionPolicyAssignmentInput {
    readonly id: string;
    readonly type?: RetentionPolicyAssignmentTypeField;
    readonly retentionPolicy?: RetentionPolicyMini;
    readonly assignedTo?: RetentionPolicyAssignmentAssignedToField;
    readonly filterFields?: readonly RetentionPolicyAssignmentFilterFieldsField[];
    readonly assignedBy?: UserMini;
    readonly assignedAt?: DateTime;
    readonly startDateField?: string;
}
export declare function serializeRetentionPolicyAssignmentTypeField(val: RetentionPolicyAssignmentTypeField): SerializedData;
export declare function deserializeRetentionPolicyAssignmentTypeField(val: SerializedData): RetentionPolicyAssignmentTypeField;
export declare function serializeRetentionPolicyAssignmentAssignedToTypeField(val: RetentionPolicyAssignmentAssignedToTypeField): SerializedData;
export declare function deserializeRetentionPolicyAssignmentAssignedToTypeField(val: SerializedData): RetentionPolicyAssignmentAssignedToTypeField;
export declare function serializeRetentionPolicyAssignmentAssignedToField(val: RetentionPolicyAssignmentAssignedToField): SerializedData;
export declare function deserializeRetentionPolicyAssignmentAssignedToField(val: SerializedData): RetentionPolicyAssignmentAssignedToField;
export declare function serializeRetentionPolicyAssignmentFilterFieldsField(val: RetentionPolicyAssignmentFilterFieldsField): SerializedData;
export declare function deserializeRetentionPolicyAssignmentFilterFieldsField(val: SerializedData): RetentionPolicyAssignmentFilterFieldsField;
export declare function serializeRetentionPolicyAssignment(val: RetentionPolicyAssignment): SerializedData;
export declare function deserializeRetentionPolicyAssignment(val: SerializedData): RetentionPolicyAssignment;
export declare function serializeRetentionPolicyAssignmentInput(val: RetentionPolicyAssignmentInput): SerializedData;
export declare function deserializeRetentionPolicyAssignmentInput(val: SerializedData): RetentionPolicyAssignmentInput;
