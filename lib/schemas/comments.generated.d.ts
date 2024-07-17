import { CommentFull } from './commentFull.generated.js';
import { SerializedData } from '../serialization/json.js';
export type CommentsOrderDirectionField = 'ASC' | 'DESC';
export interface CommentsOrderField {
    readonly by?: string;
    readonly direction?: CommentsOrderDirectionField;
}
export interface Comments {
    readonly totalCount?: number;
    readonly limit?: number;
    readonly offset?: number;
    readonly order?: readonly CommentsOrderField[];
    readonly entries?: readonly CommentFull[];
}
export declare function serializeCommentsOrderDirectionField(val: CommentsOrderDirectionField): SerializedData;
export declare function deserializeCommentsOrderDirectionField(val: SerializedData): CommentsOrderDirectionField;
export declare function serializeCommentsOrderField(val: CommentsOrderField): SerializedData;
export declare function deserializeCommentsOrderField(val: SerializedData): CommentsOrderField;
export declare function serializeComments(val: Comments): SerializedData;
export declare function deserializeComments(val: SerializedData): Comments;
