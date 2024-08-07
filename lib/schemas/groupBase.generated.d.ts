import { SerializedData } from '../serialization/json.js';
export type GroupBaseTypeField = 'group';
export declare class GroupBase {
    readonly id: string;
    readonly type: GroupBaseTypeField;
    constructor(fields: Omit<GroupBase, 'type'> & Partial<Pick<GroupBase, 'type'>>);
}
export interface GroupBaseInput {
    readonly id: string;
    readonly type?: GroupBaseTypeField;
}
export declare function serializeGroupBaseTypeField(val: GroupBaseTypeField): SerializedData;
export declare function deserializeGroupBaseTypeField(val: SerializedData): GroupBaseTypeField;
export declare function serializeGroupBase(val: GroupBase): SerializedData;
export declare function deserializeGroupBase(val: SerializedData): GroupBase;
export declare function serializeGroupBaseInput(val: GroupBaseInput): SerializedData;
export declare function deserializeGroupBaseInput(val: SerializedData): GroupBaseInput;
