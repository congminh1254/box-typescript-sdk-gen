import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { AccessToken } from '../schemas/accessToken.generated.js';
import { TokenStorage } from './tokenStorage.generated.js';
export declare class OAuthConfig {
    readonly clientId: string;
    readonly clientSecret: string;
    readonly tokenStorage: TokenStorage;
    constructor(fields: Omit<OAuthConfig, 'tokenStorage'> & Partial<Pick<OAuthConfig, 'tokenStorage'>>);
}
export interface OAuthConfigInput {
    readonly clientId: string;
    readonly clientSecret: string;
    readonly tokenStorage?: TokenStorage;
}
export interface GetAuthorizeUrlOptions {
    readonly clientId?: string;
    readonly redirectUri?: string;
    readonly responseType?: string;
    readonly state?: string;
    readonly scope?: string;
}
export declare class BoxOAuth implements Authentication {
    readonly config: OAuthConfig;
    readonly tokenStorage: TokenStorage;
    constructor(fields: Omit<BoxOAuth, 'tokenStorage' | 'getAuthorizeUrl' | 'getTokensAuthorizationCodeGrant' | 'retrieveToken' | 'refreshToken' | 'retrieveAuthorizationHeader' | 'revokeToken' | 'downscopeToken'>);
    getAuthorizeUrl(options?: GetAuthorizeUrlOptions): string;
    getTokensAuthorizationCodeGrant(authorizationCode: string, networkSession?: NetworkSession): Promise<AccessToken>;
    retrieveToken(networkSession?: NetworkSession): Promise<AccessToken>;
    refreshToken(networkSession?: NetworkSession): Promise<AccessToken>;
    retrieveAuthorizationHeader(networkSession?: NetworkSession): Promise<string>;
    revokeToken(networkSession?: NetworkSession): Promise<undefined>;
    downscopeToken(scopes: readonly string[], resource?: string, sharedLink?: string, networkSession?: NetworkSession): Promise<AccessToken>;
}
