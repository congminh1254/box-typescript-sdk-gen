import { Watermark } from '../schemas/watermark.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { CancellationToken } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export declare class GetFileWatermarkOptionals {
    readonly headers: GetFileWatermarkHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetFileWatermarkOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<GetFileWatermarkOptionals, 'headers' | 'cancellationToken'>>);
}
export interface GetFileWatermarkOptionalsInput {
    readonly headers?: GetFileWatermarkHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class UpdateFileWatermarkOptionals {
    readonly headers: UpdateFileWatermarkHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<UpdateFileWatermarkOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<UpdateFileWatermarkOptionals, 'headers' | 'cancellationToken'>>);
}
export interface UpdateFileWatermarkOptionalsInput {
    readonly headers?: UpdateFileWatermarkHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class DeleteFileWatermarkOptionals {
    readonly headers: DeleteFileWatermarkHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<DeleteFileWatermarkOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<DeleteFileWatermarkOptionals, 'headers' | 'cancellationToken'>>);
}
export interface DeleteFileWatermarkOptionalsInput {
    readonly headers?: DeleteFileWatermarkHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetFileWatermarkHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetFileWatermarkHeaders, 'extraHeaders'> & Partial<Pick<GetFileWatermarkHeaders, 'extraHeaders'>>);
}
export interface GetFileWatermarkHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export type UpdateFileWatermarkRequestBodyWatermarkImprintField = 'default';
export declare class UpdateFileWatermarkRequestBodyWatermarkField {
    readonly imprint: UpdateFileWatermarkRequestBodyWatermarkImprintField;
    constructor(fields: Omit<UpdateFileWatermarkRequestBodyWatermarkField, 'imprint'> & Partial<Pick<UpdateFileWatermarkRequestBodyWatermarkField, 'imprint'>>);
}
export interface UpdateFileWatermarkRequestBodyWatermarkFieldInput {
    readonly imprint?: UpdateFileWatermarkRequestBodyWatermarkImprintField;
}
export interface UpdateFileWatermarkRequestBody {
    readonly watermark: UpdateFileWatermarkRequestBodyWatermarkField;
}
export declare class UpdateFileWatermarkHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<UpdateFileWatermarkHeaders, 'extraHeaders'> & Partial<Pick<UpdateFileWatermarkHeaders, 'extraHeaders'>>);
}
export interface UpdateFileWatermarkHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class DeleteFileWatermarkHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<DeleteFileWatermarkHeaders, 'extraHeaders'> & Partial<Pick<DeleteFileWatermarkHeaders, 'extraHeaders'>>);
}
export interface DeleteFileWatermarkHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class FileWatermarksManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<FileWatermarksManager, 'networkSession' | 'getFileWatermark' | 'updateFileWatermark' | 'deleteFileWatermark'> & Partial<Pick<FileWatermarksManager, 'networkSession'>>);
    getFileWatermark(fileId: string, optionalsInput?: GetFileWatermarkOptionalsInput): Promise<Watermark>;
    updateFileWatermark(fileId: string, requestBody: UpdateFileWatermarkRequestBody, optionalsInput?: UpdateFileWatermarkOptionalsInput): Promise<Watermark>;
    deleteFileWatermark(fileId: string, optionalsInput?: DeleteFileWatermarkOptionalsInput): Promise<undefined>;
}
export interface FileWatermarksManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
export declare function serializeUpdateFileWatermarkRequestBodyWatermarkImprintField(val: UpdateFileWatermarkRequestBodyWatermarkImprintField): SerializedData;
export declare function deserializeUpdateFileWatermarkRequestBodyWatermarkImprintField(val: SerializedData): UpdateFileWatermarkRequestBodyWatermarkImprintField;
export declare function serializeUpdateFileWatermarkRequestBodyWatermarkField(val: UpdateFileWatermarkRequestBodyWatermarkField): SerializedData;
export declare function deserializeUpdateFileWatermarkRequestBodyWatermarkField(val: SerializedData): UpdateFileWatermarkRequestBodyWatermarkField;
export declare function serializeUpdateFileWatermarkRequestBodyWatermarkFieldInput(val: UpdateFileWatermarkRequestBodyWatermarkFieldInput): SerializedData;
export declare function deserializeUpdateFileWatermarkRequestBodyWatermarkFieldInput(val: SerializedData): UpdateFileWatermarkRequestBodyWatermarkFieldInput;
export declare function serializeUpdateFileWatermarkRequestBody(val: UpdateFileWatermarkRequestBody): SerializedData;
export declare function deserializeUpdateFileWatermarkRequestBody(val: SerializedData): UpdateFileWatermarkRequestBody;
