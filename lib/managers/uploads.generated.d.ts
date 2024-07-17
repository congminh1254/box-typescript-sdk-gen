import { Files } from '../schemas/files.generated.js';
import { UploadUrl } from '../schemas/uploadUrl.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { ByteStream } from '../internal/utils.js';
import { CancellationToken } from '../internal/utils.js';
import { DateTime } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export declare class UploadFileVersionOptionals {
    readonly queryParams: UploadFileVersionQueryParams;
    readonly headers: UploadFileVersionHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<UploadFileVersionOptionals, 'queryParams' | 'headers' | 'cancellationToken'> & Partial<Pick<UploadFileVersionOptionals, 'queryParams' | 'headers' | 'cancellationToken'>>);
}
export interface UploadFileVersionOptionalsInput {
    readonly queryParams?: UploadFileVersionQueryParams;
    readonly headers?: UploadFileVersionHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class UploadFileOptionals {
    readonly queryParams: UploadFileQueryParams;
    readonly headers: UploadFileHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<UploadFileOptionals, 'queryParams' | 'headers' | 'cancellationToken'> & Partial<Pick<UploadFileOptionals, 'queryParams' | 'headers' | 'cancellationToken'>>);
}
export interface UploadFileOptionalsInput {
    readonly queryParams?: UploadFileQueryParams;
    readonly headers?: UploadFileHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export interface UploadFileVersionRequestBodyAttributesField {
    readonly name: string;
    readonly contentModifiedAt?: DateTime;
}
export interface UploadFileVersionRequestBody {
    readonly attributes: UploadFileVersionRequestBodyAttributesField;
    readonly file: ByteStream;
    readonly fileFileName?: string;
    readonly fileContentType?: string;
}
export interface UploadFileVersionQueryParams {
    readonly fields?: readonly string[];
}
export declare class UploadFileVersionHeaders {
    readonly ifMatch?: string;
    readonly contentMd5?: string;
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<UploadFileVersionHeaders, 'extraHeaders'> & Partial<Pick<UploadFileVersionHeaders, 'extraHeaders'>>);
}
export interface UploadFileVersionHeadersInput {
    readonly ifMatch?: string;
    readonly contentMd5?: string;
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export interface UploadFileRequestBodyAttributesParentField {
    readonly id: string;
}
export interface UploadFileRequestBodyAttributesField {
    readonly name: string;
    readonly parent: UploadFileRequestBodyAttributesParentField;
    readonly contentCreatedAt?: DateTime;
    readonly contentModifiedAt?: DateTime;
}
export interface UploadFileRequestBody {
    readonly attributes: UploadFileRequestBodyAttributesField;
    readonly file: ByteStream;
    readonly fileFileName?: string;
    readonly fileContentType?: string;
}
export interface UploadFileQueryParams {
    readonly fields?: readonly string[];
}
export declare class UploadFileHeaders {
    readonly contentMd5?: string;
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<UploadFileHeaders, 'extraHeaders'> & Partial<Pick<UploadFileHeaders, 'extraHeaders'>>);
}
export interface UploadFileHeadersInput {
    readonly contentMd5?: string;
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export interface PreflightFileUploadCheckRequestBodyParentField {
    readonly id?: string;
}
export interface PreflightFileUploadCheckRequestBody {
    readonly name?: string;
    readonly size?: number;
    readonly parent?: PreflightFileUploadCheckRequestBodyParentField;
}
export declare class PreflightFileUploadCheckHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<PreflightFileUploadCheckHeaders, 'extraHeaders'> & Partial<Pick<PreflightFileUploadCheckHeaders, 'extraHeaders'>>);
}
export interface PreflightFileUploadCheckHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class UploadsManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<UploadsManager, 'networkSession' | 'uploadFileVersion' | 'uploadFile' | 'preflightFileUploadCheck'> & Partial<Pick<UploadsManager, 'networkSession'>>);
    uploadFileVersion(fileId: string, requestBody: UploadFileVersionRequestBody, optionalsInput?: UploadFileVersionOptionalsInput): Promise<Files>;
    uploadFile(requestBody: UploadFileRequestBody, optionalsInput?: UploadFileOptionalsInput): Promise<Files>;
    preflightFileUploadCheck(requestBody?: PreflightFileUploadCheckRequestBody, headersInput?: PreflightFileUploadCheckHeadersInput, cancellationToken?: CancellationToken): Promise<UploadUrl>;
}
export interface UploadsManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
export declare function serializeUploadFileVersionRequestBodyAttributesField(val: UploadFileVersionRequestBodyAttributesField): SerializedData;
export declare function deserializeUploadFileVersionRequestBodyAttributesField(val: SerializedData): UploadFileVersionRequestBodyAttributesField;
export declare function serializeUploadFileRequestBodyAttributesParentField(val: UploadFileRequestBodyAttributesParentField): SerializedData;
export declare function deserializeUploadFileRequestBodyAttributesParentField(val: SerializedData): UploadFileRequestBodyAttributesParentField;
export declare function serializeUploadFileRequestBodyAttributesField(val: UploadFileRequestBodyAttributesField): SerializedData;
export declare function deserializeUploadFileRequestBodyAttributesField(val: SerializedData): UploadFileRequestBodyAttributesField;
export declare function serializePreflightFileUploadCheckRequestBodyParentField(val: PreflightFileUploadCheckRequestBodyParentField): SerializedData;
export declare function deserializePreflightFileUploadCheckRequestBodyParentField(val: SerializedData): PreflightFileUploadCheckRequestBodyParentField;
export declare function serializePreflightFileUploadCheckRequestBody(val: PreflightFileUploadCheckRequestBody): SerializedData;
export declare function deserializePreflightFileUploadCheckRequestBody(val: SerializedData): PreflightFileUploadCheckRequestBody;
