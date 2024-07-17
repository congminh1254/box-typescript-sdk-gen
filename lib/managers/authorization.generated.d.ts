import { PostOAuth2TokenRefreshAccessTokenInput } from '../schemas/postOAuth2TokenRefreshAccessToken.generated.js';
import { AccessToken } from '../schemas/accessToken.generated.js';
import { PostOAuth2Token } from '../schemas/postOAuth2Token.generated.js';
import { PostOAuth2Revoke } from '../schemas/postOAuth2Revoke.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { CancellationToken } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export declare class AuthorizeUserOptionals {
    readonly headers: AuthorizeUserHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<AuthorizeUserOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<AuthorizeUserOptionals, 'headers' | 'cancellationToken'>>);
}
export interface AuthorizeUserOptionalsInput {
    readonly headers?: AuthorizeUserHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class RequestAccessTokenOptionals {
    readonly headers: RequestAccessTokenHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<RequestAccessTokenOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<RequestAccessTokenOptionals, 'headers' | 'cancellationToken'>>);
}
export interface RequestAccessTokenOptionalsInput {
    readonly headers?: RequestAccessTokenHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class RefreshAccessTokenOptionals {
    readonly headers: RefreshAccessTokenHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<RefreshAccessTokenOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<RefreshAccessTokenOptionals, 'headers' | 'cancellationToken'>>);
}
export interface RefreshAccessTokenOptionalsInput {
    readonly headers?: RefreshAccessTokenHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class RevokeAccessTokenOptionals {
    readonly headers: RevokeAccessTokenHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<RevokeAccessTokenOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<RevokeAccessTokenOptionals, 'headers' | 'cancellationToken'>>);
}
export interface RevokeAccessTokenOptionalsInput {
    readonly headers?: RevokeAccessTokenHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export type AuthorizeUserQueryParamsResponseTypeField = 'code';
export interface AuthorizeUserQueryParams {
    readonly responseType: AuthorizeUserQueryParamsResponseTypeField;
    readonly clientId: string;
    readonly redirectUri?: string;
    readonly state?: string;
    readonly scope?: string;
}
export declare class AuthorizeUserHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<AuthorizeUserHeaders, 'extraHeaders'> & Partial<Pick<AuthorizeUserHeaders, 'extraHeaders'>>);
}
export interface AuthorizeUserHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class RequestAccessTokenHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<RequestAccessTokenHeaders, 'extraHeaders'> & Partial<Pick<RequestAccessTokenHeaders, 'extraHeaders'>>);
}
export interface RequestAccessTokenHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class RefreshAccessTokenHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<RefreshAccessTokenHeaders, 'extraHeaders'> & Partial<Pick<RefreshAccessTokenHeaders, 'extraHeaders'>>);
}
export interface RefreshAccessTokenHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class RevokeAccessTokenHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<RevokeAccessTokenHeaders, 'extraHeaders'> & Partial<Pick<RevokeAccessTokenHeaders, 'extraHeaders'>>);
}
export interface RevokeAccessTokenHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class AuthorizationManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<AuthorizationManager, 'networkSession' | 'authorizeUser' | 'requestAccessToken' | 'refreshAccessToken' | 'revokeAccessToken'> & Partial<Pick<AuthorizationManager, 'networkSession'>>);
    authorizeUser(queryParams: AuthorizeUserQueryParams, optionalsInput?: AuthorizeUserOptionalsInput): Promise<undefined>;
    requestAccessToken(requestBody: PostOAuth2Token, optionalsInput?: RequestAccessTokenOptionalsInput): Promise<AccessToken>;
    refreshAccessToken(requestBodyInput: PostOAuth2TokenRefreshAccessTokenInput, optionalsInput?: RefreshAccessTokenOptionalsInput): Promise<AccessToken>;
    revokeAccessToken(requestBody: PostOAuth2Revoke, optionalsInput?: RevokeAccessTokenOptionalsInput): Promise<undefined>;
}
export interface AuthorizationManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
export declare function serializeAuthorizeUserQueryParamsResponseTypeField(val: AuthorizeUserQueryParamsResponseTypeField): SerializedData;
export declare function deserializeAuthorizeUserQueryParamsResponseTypeField(val: SerializedData): AuthorizeUserQueryParamsResponseTypeField;
