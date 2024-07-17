import { Classification } from '../schemas/classification.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { CancellationToken } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export declare class GetClassificationOnFolderOptionals {
    readonly headers: GetClassificationOnFolderHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetClassificationOnFolderOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<GetClassificationOnFolderOptionals, 'headers' | 'cancellationToken'>>);
}
export interface GetClassificationOnFolderOptionalsInput {
    readonly headers?: GetClassificationOnFolderHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class AddClassificationToFolderOptionals {
    readonly requestBody: AddClassificationToFolderRequestBody;
    readonly headers: AddClassificationToFolderHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<AddClassificationToFolderOptionals, 'requestBody' | 'headers' | 'cancellationToken'> & Partial<Pick<AddClassificationToFolderOptionals, 'requestBody' | 'headers' | 'cancellationToken'>>);
}
export interface AddClassificationToFolderOptionalsInput {
    readonly requestBody?: AddClassificationToFolderRequestBody;
    readonly headers?: AddClassificationToFolderHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class UpdateClassificationOnFolderOptionals {
    readonly headers: UpdateClassificationOnFolderHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<UpdateClassificationOnFolderOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<UpdateClassificationOnFolderOptionals, 'headers' | 'cancellationToken'>>);
}
export interface UpdateClassificationOnFolderOptionalsInput {
    readonly headers?: UpdateClassificationOnFolderHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class DeleteClassificationFromFolderOptionals {
    readonly headers: DeleteClassificationFromFolderHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<DeleteClassificationFromFolderOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<DeleteClassificationFromFolderOptionals, 'headers' | 'cancellationToken'>>);
}
export interface DeleteClassificationFromFolderOptionalsInput {
    readonly headers?: DeleteClassificationFromFolderHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetClassificationOnFolderHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetClassificationOnFolderHeaders, 'extraHeaders'> & Partial<Pick<GetClassificationOnFolderHeaders, 'extraHeaders'>>);
}
export interface GetClassificationOnFolderHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export interface AddClassificationToFolderRequestBody {
    readonly boxSecurityClassificationKey?: string;
}
export declare class AddClassificationToFolderHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<AddClassificationToFolderHeaders, 'extraHeaders'> & Partial<Pick<AddClassificationToFolderHeaders, 'extraHeaders'>>);
}
export interface AddClassificationToFolderHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export type UpdateClassificationOnFolderRequestBodyOpField = 'replace';
export type UpdateClassificationOnFolderRequestBodyPathField = '/Box__Security__Classification__Key';
export declare class UpdateClassificationOnFolderRequestBody {
    readonly op: UpdateClassificationOnFolderRequestBodyOpField;
    readonly path: UpdateClassificationOnFolderRequestBodyPathField;
    readonly value: string;
    constructor(fields: Omit<UpdateClassificationOnFolderRequestBody, 'op' | 'path'> & Partial<Pick<UpdateClassificationOnFolderRequestBody, 'op' | 'path'>>);
}
export interface UpdateClassificationOnFolderRequestBodyInput {
    readonly op?: UpdateClassificationOnFolderRequestBodyOpField;
    readonly path?: UpdateClassificationOnFolderRequestBodyPathField;
    readonly value: string;
}
export declare class UpdateClassificationOnFolderHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<UpdateClassificationOnFolderHeaders, 'extraHeaders'> & Partial<Pick<UpdateClassificationOnFolderHeaders, 'extraHeaders'>>);
}
export interface UpdateClassificationOnFolderHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class DeleteClassificationFromFolderHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<DeleteClassificationFromFolderHeaders, 'extraHeaders'> & Partial<Pick<DeleteClassificationFromFolderHeaders, 'extraHeaders'>>);
}
export interface DeleteClassificationFromFolderHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class FolderClassificationsManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<FolderClassificationsManager, 'networkSession' | 'getClassificationOnFolder' | 'addClassificationToFolder' | 'updateClassificationOnFolder' | 'deleteClassificationFromFolder'> & Partial<Pick<FolderClassificationsManager, 'networkSession'>>);
    getClassificationOnFolder(folderId: string, optionalsInput?: GetClassificationOnFolderOptionalsInput): Promise<Classification>;
    addClassificationToFolder(folderId: string, optionalsInput?: AddClassificationToFolderOptionalsInput): Promise<Classification>;
    updateClassificationOnFolder(folderId: string, requestBody: readonly UpdateClassificationOnFolderRequestBody[], optionalsInput?: UpdateClassificationOnFolderOptionalsInput): Promise<Classification>;
    deleteClassificationFromFolder(folderId: string, optionalsInput?: DeleteClassificationFromFolderOptionalsInput): Promise<undefined>;
}
export interface FolderClassificationsManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
export declare function serializeAddClassificationToFolderRequestBody(val: AddClassificationToFolderRequestBody): SerializedData;
export declare function deserializeAddClassificationToFolderRequestBody(val: SerializedData): AddClassificationToFolderRequestBody;
export declare function serializeUpdateClassificationOnFolderRequestBodyOpField(val: UpdateClassificationOnFolderRequestBodyOpField): SerializedData;
export declare function deserializeUpdateClassificationOnFolderRequestBodyOpField(val: SerializedData): UpdateClassificationOnFolderRequestBodyOpField;
export declare function serializeUpdateClassificationOnFolderRequestBodyPathField(val: UpdateClassificationOnFolderRequestBodyPathField): SerializedData;
export declare function deserializeUpdateClassificationOnFolderRequestBodyPathField(val: SerializedData): UpdateClassificationOnFolderRequestBodyPathField;
export declare function serializeUpdateClassificationOnFolderRequestBody(val: UpdateClassificationOnFolderRequestBody): SerializedData;
export declare function deserializeUpdateClassificationOnFolderRequestBody(val: SerializedData): UpdateClassificationOnFolderRequestBody;
export declare function serializeUpdateClassificationOnFolderRequestBodyInput(val: UpdateClassificationOnFolderRequestBodyInput): SerializedData;
export declare function deserializeUpdateClassificationOnFolderRequestBodyInput(val: SerializedData): UpdateClassificationOnFolderRequestBodyInput;
