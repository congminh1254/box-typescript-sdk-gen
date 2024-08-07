import { Watermark } from '../schemas/watermark.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { CancellationToken } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export declare class GetFolderWatermarkOptionals {
    readonly headers: GetFolderWatermarkHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetFolderWatermarkOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<GetFolderWatermarkOptionals, 'headers' | 'cancellationToken'>>);
}
export interface GetFolderWatermarkOptionalsInput {
    readonly headers?: GetFolderWatermarkHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class UpdateFolderWatermarkOptionals {
    readonly headers: UpdateFolderWatermarkHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<UpdateFolderWatermarkOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<UpdateFolderWatermarkOptionals, 'headers' | 'cancellationToken'>>);
}
export interface UpdateFolderWatermarkOptionalsInput {
    readonly headers?: UpdateFolderWatermarkHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class DeleteFolderWatermarkOptionals {
    readonly headers: DeleteFolderWatermarkHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<DeleteFolderWatermarkOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<DeleteFolderWatermarkOptionals, 'headers' | 'cancellationToken'>>);
}
export interface DeleteFolderWatermarkOptionalsInput {
    readonly headers?: DeleteFolderWatermarkHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetFolderWatermarkHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetFolderWatermarkHeaders, 'extraHeaders'> & Partial<Pick<GetFolderWatermarkHeaders, 'extraHeaders'>>);
}
export interface GetFolderWatermarkHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export type UpdateFolderWatermarkRequestBodyWatermarkImprintField = 'default';
export declare class UpdateFolderWatermarkRequestBodyWatermarkField {
    readonly imprint: UpdateFolderWatermarkRequestBodyWatermarkImprintField;
    constructor(fields: Omit<UpdateFolderWatermarkRequestBodyWatermarkField, 'imprint'> & Partial<Pick<UpdateFolderWatermarkRequestBodyWatermarkField, 'imprint'>>);
}
export interface UpdateFolderWatermarkRequestBodyWatermarkFieldInput {
    readonly imprint?: UpdateFolderWatermarkRequestBodyWatermarkImprintField;
}
export interface UpdateFolderWatermarkRequestBody {
    readonly watermark: UpdateFolderWatermarkRequestBodyWatermarkField;
}
export declare class UpdateFolderWatermarkHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<UpdateFolderWatermarkHeaders, 'extraHeaders'> & Partial<Pick<UpdateFolderWatermarkHeaders, 'extraHeaders'>>);
}
export interface UpdateFolderWatermarkHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class DeleteFolderWatermarkHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<DeleteFolderWatermarkHeaders, 'extraHeaders'> & Partial<Pick<DeleteFolderWatermarkHeaders, 'extraHeaders'>>);
}
export interface DeleteFolderWatermarkHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class FolderWatermarksManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<FolderWatermarksManager, 'networkSession' | 'getFolderWatermark' | 'updateFolderWatermark' | 'deleteFolderWatermark'> & Partial<Pick<FolderWatermarksManager, 'networkSession'>>);
    getFolderWatermark(folderId: string, optionalsInput?: GetFolderWatermarkOptionalsInput): Promise<Watermark>;
    updateFolderWatermark(folderId: string, requestBody: UpdateFolderWatermarkRequestBody, optionalsInput?: UpdateFolderWatermarkOptionalsInput): Promise<Watermark>;
    deleteFolderWatermark(folderId: string, optionalsInput?: DeleteFolderWatermarkOptionalsInput): Promise<undefined>;
}
export interface FolderWatermarksManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
export declare function serializeUpdateFolderWatermarkRequestBodyWatermarkImprintField(val: UpdateFolderWatermarkRequestBodyWatermarkImprintField): SerializedData;
export declare function deserializeUpdateFolderWatermarkRequestBodyWatermarkImprintField(val: SerializedData): UpdateFolderWatermarkRequestBodyWatermarkImprintField;
export declare function serializeUpdateFolderWatermarkRequestBodyWatermarkField(val: UpdateFolderWatermarkRequestBodyWatermarkField): SerializedData;
export declare function deserializeUpdateFolderWatermarkRequestBodyWatermarkField(val: SerializedData): UpdateFolderWatermarkRequestBodyWatermarkField;
export declare function serializeUpdateFolderWatermarkRequestBodyWatermarkFieldInput(val: UpdateFolderWatermarkRequestBodyWatermarkFieldInput): SerializedData;
export declare function deserializeUpdateFolderWatermarkRequestBodyWatermarkFieldInput(val: SerializedData): UpdateFolderWatermarkRequestBodyWatermarkFieldInput;
export declare function serializeUpdateFolderWatermarkRequestBody(val: UpdateFolderWatermarkRequestBody): SerializedData;
export declare function deserializeUpdateFolderWatermarkRequestBody(val: SerializedData): UpdateFolderWatermarkRequestBody;
