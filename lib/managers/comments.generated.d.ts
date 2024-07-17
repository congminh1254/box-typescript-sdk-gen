import { Comments } from '../schemas/comments.generated.js';
import { CommentFull } from '../schemas/commentFull.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { CancellationToken } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export declare class GetFileCommentsOptionals {
    readonly queryParams: GetFileCommentsQueryParams;
    readonly headers: GetFileCommentsHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetFileCommentsOptionals, 'queryParams' | 'headers' | 'cancellationToken'> & Partial<Pick<GetFileCommentsOptionals, 'queryParams' | 'headers' | 'cancellationToken'>>);
}
export interface GetFileCommentsOptionalsInput {
    readonly queryParams?: GetFileCommentsQueryParams;
    readonly headers?: GetFileCommentsHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetCommentByIdOptionals {
    readonly queryParams: GetCommentByIdQueryParams;
    readonly headers: GetCommentByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetCommentByIdOptionals, 'queryParams' | 'headers' | 'cancellationToken'> & Partial<Pick<GetCommentByIdOptionals, 'queryParams' | 'headers' | 'cancellationToken'>>);
}
export interface GetCommentByIdOptionalsInput {
    readonly queryParams?: GetCommentByIdQueryParams;
    readonly headers?: GetCommentByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class UpdateCommentByIdOptionals {
    readonly requestBody: UpdateCommentByIdRequestBody;
    readonly queryParams: UpdateCommentByIdQueryParams;
    readonly headers: UpdateCommentByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<UpdateCommentByIdOptionals, 'requestBody' | 'queryParams' | 'headers' | 'cancellationToken'> & Partial<Pick<UpdateCommentByIdOptionals, 'requestBody' | 'queryParams' | 'headers' | 'cancellationToken'>>);
}
export interface UpdateCommentByIdOptionalsInput {
    readonly requestBody?: UpdateCommentByIdRequestBody;
    readonly queryParams?: UpdateCommentByIdQueryParams;
    readonly headers?: UpdateCommentByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class DeleteCommentByIdOptionals {
    readonly headers: DeleteCommentByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<DeleteCommentByIdOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<DeleteCommentByIdOptionals, 'headers' | 'cancellationToken'>>);
}
export interface DeleteCommentByIdOptionalsInput {
    readonly headers?: DeleteCommentByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class CreateCommentOptionals {
    readonly queryParams: CreateCommentQueryParams;
    readonly headers: CreateCommentHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<CreateCommentOptionals, 'queryParams' | 'headers' | 'cancellationToken'> & Partial<Pick<CreateCommentOptionals, 'queryParams' | 'headers' | 'cancellationToken'>>);
}
export interface CreateCommentOptionalsInput {
    readonly queryParams?: CreateCommentQueryParams;
    readonly headers?: CreateCommentHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export interface GetFileCommentsQueryParams {
    readonly fields?: readonly string[];
    readonly limit?: number;
    readonly offset?: number;
}
export declare class GetFileCommentsHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetFileCommentsHeaders, 'extraHeaders'> & Partial<Pick<GetFileCommentsHeaders, 'extraHeaders'>>);
}
export interface GetFileCommentsHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export interface GetCommentByIdQueryParams {
    readonly fields?: readonly string[];
}
export declare class GetCommentByIdHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetCommentByIdHeaders, 'extraHeaders'> & Partial<Pick<GetCommentByIdHeaders, 'extraHeaders'>>);
}
export interface GetCommentByIdHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export interface UpdateCommentByIdRequestBody {
    readonly message?: string;
}
export interface UpdateCommentByIdQueryParams {
    readonly fields?: readonly string[];
}
export declare class UpdateCommentByIdHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<UpdateCommentByIdHeaders, 'extraHeaders'> & Partial<Pick<UpdateCommentByIdHeaders, 'extraHeaders'>>);
}
export interface UpdateCommentByIdHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class DeleteCommentByIdHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<DeleteCommentByIdHeaders, 'extraHeaders'> & Partial<Pick<DeleteCommentByIdHeaders, 'extraHeaders'>>);
}
export interface DeleteCommentByIdHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export type CreateCommentRequestBodyItemTypeField = 'file' | 'comment';
export interface CreateCommentRequestBodyItemField {
    readonly id: string;
    readonly type: CreateCommentRequestBodyItemTypeField;
}
export interface CreateCommentRequestBody {
    readonly message: string;
    readonly taggedMessage?: string;
    readonly item: CreateCommentRequestBodyItemField;
}
export interface CreateCommentQueryParams {
    readonly fields?: readonly string[];
}
export declare class CreateCommentHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<CreateCommentHeaders, 'extraHeaders'> & Partial<Pick<CreateCommentHeaders, 'extraHeaders'>>);
}
export interface CreateCommentHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class CommentsManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<CommentsManager, 'networkSession' | 'getFileComments' | 'getCommentById' | 'updateCommentById' | 'deleteCommentById' | 'createComment'> & Partial<Pick<CommentsManager, 'networkSession'>>);
    getFileComments(fileId: string, optionalsInput?: GetFileCommentsOptionalsInput): Promise<Comments>;
    getCommentById(commentId: string, optionalsInput?: GetCommentByIdOptionalsInput): Promise<CommentFull>;
    updateCommentById(commentId: string, optionalsInput?: UpdateCommentByIdOptionalsInput): Promise<CommentFull>;
    deleteCommentById(commentId: string, optionalsInput?: DeleteCommentByIdOptionalsInput): Promise<undefined>;
    createComment(requestBody: CreateCommentRequestBody, optionalsInput?: CreateCommentOptionalsInput): Promise<CommentFull>;
}
export interface CommentsManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
export declare function serializeUpdateCommentByIdRequestBody(val: UpdateCommentByIdRequestBody): SerializedData;
export declare function deserializeUpdateCommentByIdRequestBody(val: SerializedData): UpdateCommentByIdRequestBody;
export declare function serializeCreateCommentRequestBodyItemTypeField(val: CreateCommentRequestBodyItemTypeField): SerializedData;
export declare function deserializeCreateCommentRequestBodyItemTypeField(val: SerializedData): CreateCommentRequestBodyItemTypeField;
export declare function serializeCreateCommentRequestBodyItemField(val: CreateCommentRequestBodyItemField): SerializedData;
export declare function deserializeCreateCommentRequestBodyItemField(val: SerializedData): CreateCommentRequestBodyItemField;
export declare function serializeCreateCommentRequestBody(val: CreateCommentRequestBody): SerializedData;
export declare function deserializeCreateCommentRequestBody(val: SerializedData): CreateCommentRequestBody;
