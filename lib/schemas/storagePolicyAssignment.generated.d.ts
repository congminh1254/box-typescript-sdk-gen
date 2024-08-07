import { StoragePolicyMini } from './storagePolicyMini.generated.js';
import { SerializedData } from '../serialization/json.js';
export type StoragePolicyAssignmentTypeField = 'storage_policy_assignment';
export interface StoragePolicyAssignmentAssignedToField {
    readonly id?: string;
    readonly type?: string;
}
export declare class StoragePolicyAssignment {
    readonly id: string;
    readonly type: StoragePolicyAssignmentTypeField;
    readonly storagePolicy?: StoragePolicyMini;
    readonly assignedTo?: StoragePolicyAssignmentAssignedToField;
    constructor(fields: Omit<StoragePolicyAssignment, 'type'> & Partial<Pick<StoragePolicyAssignment, 'type'>>);
}
export interface StoragePolicyAssignmentInput {
    readonly id: string;
    readonly type?: StoragePolicyAssignmentTypeField;
    readonly storagePolicy?: StoragePolicyMini;
    readonly assignedTo?: StoragePolicyAssignmentAssignedToField;
}
export declare function serializeStoragePolicyAssignmentTypeField(val: StoragePolicyAssignmentTypeField): SerializedData;
export declare function deserializeStoragePolicyAssignmentTypeField(val: SerializedData): StoragePolicyAssignmentTypeField;
export declare function serializeStoragePolicyAssignmentAssignedToField(val: StoragePolicyAssignmentAssignedToField): SerializedData;
export declare function deserializeStoragePolicyAssignmentAssignedToField(val: SerializedData): StoragePolicyAssignmentAssignedToField;
export declare function serializeStoragePolicyAssignment(val: StoragePolicyAssignment): SerializedData;
export declare function deserializeStoragePolicyAssignment(val: SerializedData): StoragePolicyAssignment;
export declare function serializeStoragePolicyAssignmentInput(val: StoragePolicyAssignmentInput): SerializedData;
export declare function deserializeStoragePolicyAssignmentInput(val: SerializedData): StoragePolicyAssignmentInput;
