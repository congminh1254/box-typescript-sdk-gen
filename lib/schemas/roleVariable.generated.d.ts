import { SerializedData } from '../serialization/json.js';
export type RoleVariableTypeField = 'variable';
export type RoleVariableVariableTypeField = 'collaborator_role';
export type RoleVariableVariableValueField = 'editor' | 'viewer' | 'previewer' | 'uploader' | 'previewer uploader' | 'viewer uploader' | 'co-owner';
export declare class RoleVariable {
    readonly type: RoleVariableTypeField;
    readonly variableType: RoleVariableVariableTypeField;
    readonly variableValue: RoleVariableVariableValueField;
    constructor(fields: Omit<RoleVariable, 'type' | 'variableType'> & Partial<Pick<RoleVariable, 'type' | 'variableType'>>);
}
export interface RoleVariableInput {
    readonly type?: RoleVariableTypeField;
    readonly variableType?: RoleVariableVariableTypeField;
    readonly variableValue: RoleVariableVariableValueField;
}
export declare function serializeRoleVariableTypeField(val: RoleVariableTypeField): SerializedData;
export declare function deserializeRoleVariableTypeField(val: SerializedData): RoleVariableTypeField;
export declare function serializeRoleVariableVariableTypeField(val: RoleVariableVariableTypeField): SerializedData;
export declare function deserializeRoleVariableVariableTypeField(val: SerializedData): RoleVariableVariableTypeField;
export declare function serializeRoleVariableVariableValueField(val: RoleVariableVariableValueField): SerializedData;
export declare function deserializeRoleVariableVariableValueField(val: SerializedData): RoleVariableVariableValueField;
export declare function serializeRoleVariable(val: RoleVariable): SerializedData;
export declare function deserializeRoleVariable(val: SerializedData): RoleVariable;
export declare function serializeRoleVariableInput(val: RoleVariableInput): SerializedData;
export declare function deserializeRoleVariableInput(val: SerializedData): RoleVariableInput;
