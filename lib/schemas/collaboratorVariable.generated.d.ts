import { SerializedData } from '../serialization/json.js';
export type CollaboratorVariableTypeField = 'variable';
export type CollaboratorVariableVariableTypeField = 'user_list';
export type CollaboratorVariableVariableValueTypeField = 'user';
export declare class CollaboratorVariableVariableValueField {
    readonly type: CollaboratorVariableVariableValueTypeField;
    readonly id: string;
    constructor(fields: Omit<CollaboratorVariableVariableValueField, 'type'> & Partial<Pick<CollaboratorVariableVariableValueField, 'type'>>);
}
export interface CollaboratorVariableVariableValueFieldInput {
    readonly type?: CollaboratorVariableVariableValueTypeField;
    readonly id: string;
}
export declare class CollaboratorVariable {
    readonly type: CollaboratorVariableTypeField;
    readonly variableType: CollaboratorVariableVariableTypeField;
    readonly variableValue: readonly CollaboratorVariableVariableValueField[];
    constructor(fields: Omit<CollaboratorVariable, 'type' | 'variableType'> & Partial<Pick<CollaboratorVariable, 'type' | 'variableType'>>);
}
export interface CollaboratorVariableInput {
    readonly type?: CollaboratorVariableTypeField;
    readonly variableType?: CollaboratorVariableVariableTypeField;
    readonly variableValue: readonly CollaboratorVariableVariableValueField[];
}
export declare function serializeCollaboratorVariableTypeField(val: CollaboratorVariableTypeField): SerializedData;
export declare function deserializeCollaboratorVariableTypeField(val: SerializedData): CollaboratorVariableTypeField;
export declare function serializeCollaboratorVariableVariableTypeField(val: CollaboratorVariableVariableTypeField): SerializedData;
export declare function deserializeCollaboratorVariableVariableTypeField(val: SerializedData): CollaboratorVariableVariableTypeField;
export declare function serializeCollaboratorVariableVariableValueTypeField(val: CollaboratorVariableVariableValueTypeField): SerializedData;
export declare function deserializeCollaboratorVariableVariableValueTypeField(val: SerializedData): CollaboratorVariableVariableValueTypeField;
export declare function serializeCollaboratorVariableVariableValueField(val: CollaboratorVariableVariableValueField): SerializedData;
export declare function deserializeCollaboratorVariableVariableValueField(val: SerializedData): CollaboratorVariableVariableValueField;
export declare function serializeCollaboratorVariableVariableValueFieldInput(val: CollaboratorVariableVariableValueFieldInput): SerializedData;
export declare function deserializeCollaboratorVariableVariableValueFieldInput(val: SerializedData): CollaboratorVariableVariableValueFieldInput;
export declare function serializeCollaboratorVariable(val: CollaboratorVariable): SerializedData;
export declare function deserializeCollaboratorVariable(val: SerializedData): CollaboratorVariable;
export declare function serializeCollaboratorVariableInput(val: CollaboratorVariableInput): SerializedData;
export declare function deserializeCollaboratorVariableInput(val: SerializedData): CollaboratorVariableInput;
