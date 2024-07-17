import { CommentBase } from './commentBase.generated.js';
import { UserMini } from './userMini.generated.js';
import { DateTime } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export interface CommentItemField {
    readonly id?: string;
    readonly type?: string;
}
export type Comment = CommentBase & {
    readonly isReplyComment?: boolean;
    readonly message?: string;
    readonly createdBy?: UserMini;
    readonly createdAt?: DateTime;
    readonly modifiedAt?: DateTime;
    readonly item?: CommentItemField;
};
export declare function serializeCommentItemField(val: CommentItemField): SerializedData;
export declare function deserializeCommentItemField(val: SerializedData): CommentItemField;
export declare function serializeComment(val: Comment): SerializedData;
export declare function deserializeComment(val: SerializedData): Comment;
