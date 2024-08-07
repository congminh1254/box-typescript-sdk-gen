import { CollaboratorVariable } from './collaboratorVariable.generated.js';
import { CompletionRuleVariable } from './completionRuleVariable.generated.js';
import { RoleVariable } from './roleVariable.generated.js';
import { SerializedData } from '../serialization/json.js';
export interface Outcome {
    readonly id: string;
    readonly collaborators?: CollaboratorVariable;
    readonly completionRule?: CompletionRuleVariable;
    readonly fileCollaboratorRole?: RoleVariable;
    readonly taskCollaborators?: CollaboratorVariable;
    readonly role?: RoleVariable;
}
export declare function serializeOutcome(val: Outcome): SerializedData;
export declare function deserializeOutcome(val: SerializedData): Outcome;
