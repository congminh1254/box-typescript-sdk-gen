import { Comment } from './comment.generated.js';
import { SerializedData } from '../serialization/json.js';
export type CommentFull = Comment & {
    readonly taggedMessage?: string;
};
export declare function serializeCommentFull(val: CommentFull): SerializedData;
export declare function deserializeCommentFull(val: SerializedData): CommentFull;
