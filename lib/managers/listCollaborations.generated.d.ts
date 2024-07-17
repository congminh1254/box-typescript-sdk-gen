import { Collaborations } from '../schemas/collaborations.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { CancellationToken } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export declare class GetFileCollaborationsOptionals {
    readonly queryParams: GetFileCollaborationsQueryParams;
    readonly headers: GetFileCollaborationsHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetFileCollaborationsOptionals, 'queryParams' | 'headers' | 'cancellationToken'> & Partial<Pick<GetFileCollaborationsOptionals, 'queryParams' | 'headers' | 'cancellationToken'>>);
}
export interface GetFileCollaborationsOptionalsInput {
    readonly queryParams?: GetFileCollaborationsQueryParams;
    readonly headers?: GetFileCollaborationsHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetFolderCollaborationsOptionals {
    readonly queryParams: GetFolderCollaborationsQueryParams;
    readonly headers: GetFolderCollaborationsHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetFolderCollaborationsOptionals, 'queryParams' | 'headers' | 'cancellationToken'> & Partial<Pick<GetFolderCollaborationsOptionals, 'queryParams' | 'headers' | 'cancellationToken'>>);
}
export interface GetFolderCollaborationsOptionalsInput {
    readonly queryParams?: GetFolderCollaborationsQueryParams;
    readonly headers?: GetFolderCollaborationsHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetCollaborationsOptionals {
    readonly headers: GetCollaborationsHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetCollaborationsOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<GetCollaborationsOptionals, 'headers' | 'cancellationToken'>>);
}
export interface GetCollaborationsOptionalsInput {
    readonly headers?: GetCollaborationsHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetGroupCollaborationsOptionals {
    readonly queryParams: GetGroupCollaborationsQueryParams;
    readonly headers: GetGroupCollaborationsHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetGroupCollaborationsOptionals, 'queryParams' | 'headers' | 'cancellationToken'> & Partial<Pick<GetGroupCollaborationsOptionals, 'queryParams' | 'headers' | 'cancellationToken'>>);
}
export interface GetGroupCollaborationsOptionalsInput {
    readonly queryParams?: GetGroupCollaborationsQueryParams;
    readonly headers?: GetGroupCollaborationsHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export interface GetFileCollaborationsQueryParams {
    readonly fields?: readonly string[];
    readonly limit?: number;
    readonly marker?: string;
}
export declare class GetFileCollaborationsHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetFileCollaborationsHeaders, 'extraHeaders'> & Partial<Pick<GetFileCollaborationsHeaders, 'extraHeaders'>>);
}
export interface GetFileCollaborationsHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export interface GetFolderCollaborationsQueryParams {
    readonly fields?: readonly string[];
}
export declare class GetFolderCollaborationsHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetFolderCollaborationsHeaders, 'extraHeaders'> & Partial<Pick<GetFolderCollaborationsHeaders, 'extraHeaders'>>);
}
export interface GetFolderCollaborationsHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export type GetCollaborationsQueryParamsStatusField = 'pending';
export interface GetCollaborationsQueryParams {
    readonly status: GetCollaborationsQueryParamsStatusField;
    readonly fields?: readonly string[];
    readonly offset?: number;
    readonly limit?: number;
}
export declare class GetCollaborationsHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetCollaborationsHeaders, 'extraHeaders'> & Partial<Pick<GetCollaborationsHeaders, 'extraHeaders'>>);
}
export interface GetCollaborationsHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export interface GetGroupCollaborationsQueryParams {
    readonly limit?: number;
    readonly offset?: number;
}
export declare class GetGroupCollaborationsHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetGroupCollaborationsHeaders, 'extraHeaders'> & Partial<Pick<GetGroupCollaborationsHeaders, 'extraHeaders'>>);
}
export interface GetGroupCollaborationsHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class ListCollaborationsManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<ListCollaborationsManager, 'networkSession' | 'getFileCollaborations' | 'getFolderCollaborations' | 'getCollaborations' | 'getGroupCollaborations'> & Partial<Pick<ListCollaborationsManager, 'networkSession'>>);
    getFileCollaborations(fileId: string, optionalsInput?: GetFileCollaborationsOptionalsInput): Promise<Collaborations>;
    getFolderCollaborations(folderId: string, optionalsInput?: GetFolderCollaborationsOptionalsInput): Promise<Collaborations>;
    getCollaborations(queryParams: GetCollaborationsQueryParams, optionalsInput?: GetCollaborationsOptionalsInput): Promise<Collaborations>;
    getGroupCollaborations(groupId: string, optionalsInput?: GetGroupCollaborationsOptionalsInput): Promise<Collaborations>;
}
export interface ListCollaborationsManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
export declare function serializeGetCollaborationsQueryParamsStatusField(val: GetCollaborationsQueryParamsStatusField): SerializedData;
export declare function deserializeGetCollaborationsQueryParamsStatusField(val: SerializedData): GetCollaborationsQueryParamsStatusField;
