import { TemplateSignerInput } from './templateSignerInput.generated.js';
import { SerializedData } from '../serialization/json.js';
export type TemplateSignerRoleField = 'signer' | 'approver' | 'final_copy_reader';
export interface TemplateSigner {
    readonly inputs?: readonly TemplateSignerInput[];
    readonly email?: string;
    readonly role?: TemplateSignerRoleField;
    readonly isInPerson?: boolean;
    readonly order?: number;
    readonly signerGroupId?: string;
}
export declare function serializeTemplateSignerRoleField(val: TemplateSignerRoleField): SerializedData;
export declare function deserializeTemplateSignerRoleField(val: SerializedData): TemplateSignerRoleField;
export declare function serializeTemplateSigner(val: TemplateSigner): SerializedData;
export declare function deserializeTemplateSigner(val: SerializedData): TemplateSigner;
