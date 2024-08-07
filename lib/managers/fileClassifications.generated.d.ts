import { Classification } from '../schemas/classification.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { CancellationToken } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export declare class GetClassificationOnFileOptionals {
    readonly headers: GetClassificationOnFileHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetClassificationOnFileOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<GetClassificationOnFileOptionals, 'headers' | 'cancellationToken'>>);
}
export interface GetClassificationOnFileOptionalsInput {
    readonly headers?: GetClassificationOnFileHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class AddClassificationToFileOptionals {
    readonly requestBody: AddClassificationToFileRequestBody;
    readonly headers: AddClassificationToFileHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<AddClassificationToFileOptionals, 'requestBody' | 'headers' | 'cancellationToken'> & Partial<Pick<AddClassificationToFileOptionals, 'requestBody' | 'headers' | 'cancellationToken'>>);
}
export interface AddClassificationToFileOptionalsInput {
    readonly requestBody?: AddClassificationToFileRequestBody;
    readonly headers?: AddClassificationToFileHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class UpdateClassificationOnFileOptionals {
    readonly headers: UpdateClassificationOnFileHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<UpdateClassificationOnFileOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<UpdateClassificationOnFileOptionals, 'headers' | 'cancellationToken'>>);
}
export interface UpdateClassificationOnFileOptionalsInput {
    readonly headers?: UpdateClassificationOnFileHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class DeleteClassificationFromFileOptionals {
    readonly headers: DeleteClassificationFromFileHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<DeleteClassificationFromFileOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<DeleteClassificationFromFileOptionals, 'headers' | 'cancellationToken'>>);
}
export interface DeleteClassificationFromFileOptionalsInput {
    readonly headers?: DeleteClassificationFromFileHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetClassificationOnFileHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetClassificationOnFileHeaders, 'extraHeaders'> & Partial<Pick<GetClassificationOnFileHeaders, 'extraHeaders'>>);
}
export interface GetClassificationOnFileHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export interface AddClassificationToFileRequestBody {
    readonly boxSecurityClassificationKey?: string;
}
export declare class AddClassificationToFileHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<AddClassificationToFileHeaders, 'extraHeaders'> & Partial<Pick<AddClassificationToFileHeaders, 'extraHeaders'>>);
}
export interface AddClassificationToFileHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export type UpdateClassificationOnFileRequestBodyOpField = 'replace';
export type UpdateClassificationOnFileRequestBodyPathField = '/Box__Security__Classification__Key';
export declare class UpdateClassificationOnFileRequestBody {
    readonly op: UpdateClassificationOnFileRequestBodyOpField;
    readonly path: UpdateClassificationOnFileRequestBodyPathField;
    readonly value: string;
    constructor(fields: Omit<UpdateClassificationOnFileRequestBody, 'op' | 'path'> & Partial<Pick<UpdateClassificationOnFileRequestBody, 'op' | 'path'>>);
}
export interface UpdateClassificationOnFileRequestBodyInput {
    readonly op?: UpdateClassificationOnFileRequestBodyOpField;
    readonly path?: UpdateClassificationOnFileRequestBodyPathField;
    readonly value: string;
}
export declare class UpdateClassificationOnFileHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<UpdateClassificationOnFileHeaders, 'extraHeaders'> & Partial<Pick<UpdateClassificationOnFileHeaders, 'extraHeaders'>>);
}
export interface UpdateClassificationOnFileHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class DeleteClassificationFromFileHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<DeleteClassificationFromFileHeaders, 'extraHeaders'> & Partial<Pick<DeleteClassificationFromFileHeaders, 'extraHeaders'>>);
}
export interface DeleteClassificationFromFileHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class FileClassificationsManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<FileClassificationsManager, 'networkSession' | 'getClassificationOnFile' | 'addClassificationToFile' | 'updateClassificationOnFile' | 'deleteClassificationFromFile'> & Partial<Pick<FileClassificationsManager, 'networkSession'>>);
    getClassificationOnFile(fileId: string, optionalsInput?: GetClassificationOnFileOptionalsInput): Promise<Classification>;
    addClassificationToFile(fileId: string, optionalsInput?: AddClassificationToFileOptionalsInput): Promise<Classification>;
    updateClassificationOnFile(fileId: string, requestBody: readonly UpdateClassificationOnFileRequestBody[], optionalsInput?: UpdateClassificationOnFileOptionalsInput): Promise<Classification>;
    deleteClassificationFromFile(fileId: string, optionalsInput?: DeleteClassificationFromFileOptionalsInput): Promise<undefined>;
}
export interface FileClassificationsManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
export declare function serializeAddClassificationToFileRequestBody(val: AddClassificationToFileRequestBody): SerializedData;
export declare function deserializeAddClassificationToFileRequestBody(val: SerializedData): AddClassificationToFileRequestBody;
export declare function serializeUpdateClassificationOnFileRequestBodyOpField(val: UpdateClassificationOnFileRequestBodyOpField): SerializedData;
export declare function deserializeUpdateClassificationOnFileRequestBodyOpField(val: SerializedData): UpdateClassificationOnFileRequestBodyOpField;
export declare function serializeUpdateClassificationOnFileRequestBodyPathField(val: UpdateClassificationOnFileRequestBodyPathField): SerializedData;
export declare function deserializeUpdateClassificationOnFileRequestBodyPathField(val: SerializedData): UpdateClassificationOnFileRequestBodyPathField;
export declare function serializeUpdateClassificationOnFileRequestBody(val: UpdateClassificationOnFileRequestBody): SerializedData;
export declare function deserializeUpdateClassificationOnFileRequestBody(val: SerializedData): UpdateClassificationOnFileRequestBody;
export declare function serializeUpdateClassificationOnFileRequestBodyInput(val: UpdateClassificationOnFileRequestBodyInput): SerializedData;
export declare function deserializeUpdateClassificationOnFileRequestBodyInput(val: SerializedData): UpdateClassificationOnFileRequestBodyInput;
