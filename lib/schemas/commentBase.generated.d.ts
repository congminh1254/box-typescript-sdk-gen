import { SerializedData } from '../serialization/json.js';
export type CommentBaseTypeField = 'comment';
export interface CommentBase {
    readonly id?: string;
    readonly type?: CommentBaseTypeField;
}
export declare function serializeCommentBaseTypeField(val: CommentBaseTypeField): SerializedData;
export declare function deserializeCommentBaseTypeField(val: SerializedData): CommentBaseTypeField;
export declare function serializeCommentBase(val: CommentBase): SerializedData;
export declare function deserializeCommentBase(val: SerializedData): CommentBase;
