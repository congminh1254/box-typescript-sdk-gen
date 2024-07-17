import { SerializedData } from '../serialization/json.js';
export type EmailAliasTypeField = 'email_alias';
export interface EmailAlias {
    readonly id?: string;
    readonly type?: EmailAliasTypeField;
    readonly email?: string;
    readonly isConfirmed?: boolean;
}
export declare function serializeEmailAliasTypeField(val: EmailAliasTypeField): SerializedData;
export declare function deserializeEmailAliasTypeField(val: SerializedData): EmailAliasTypeField;
export declare function serializeEmailAlias(val: EmailAlias): SerializedData;
export declare function deserializeEmailAlias(val: SerializedData): EmailAlias;
