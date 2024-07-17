import { SerializedData } from '../serialization/json.js';
export type UserBaseTypeField = 'user';
export declare class UserBase {
    readonly id: string;
    readonly type: UserBaseTypeField;
    constructor(fields: Omit<UserBase, 'type'> & Partial<Pick<UserBase, 'type'>>);
}
export interface UserBaseInput {
    readonly id: string;
    readonly type?: UserBaseTypeField;
}
export declare function serializeUserBaseTypeField(val: UserBaseTypeField): SerializedData;
export declare function deserializeUserBaseTypeField(val: SerializedData): UserBaseTypeField;
export declare function serializeUserBase(val: UserBase): SerializedData;
export declare function deserializeUserBase(val: SerializedData): UserBase;
export declare function serializeUserBaseInput(val: UserBaseInput): SerializedData;
export declare function deserializeUserBaseInput(val: SerializedData): UserBaseInput;
