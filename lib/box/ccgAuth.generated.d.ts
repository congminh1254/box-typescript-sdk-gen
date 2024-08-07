import { AccessToken } from '../schemas/accessToken.generated.js';
import { PostOAuth2TokenBoxSubjectTypeField } from '../schemas/postOAuth2Token.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { TokenStorage } from './tokenStorage.generated.js';
export declare class CcgConfig {
    readonly clientId: string;
    readonly clientSecret: string;
    readonly enterpriseId?: string;
    readonly userId?: string;
    readonly tokenStorage: TokenStorage;
    constructor(fields: Omit<CcgConfig, 'tokenStorage'> & Partial<Pick<CcgConfig, 'tokenStorage'>>);
}
export interface CcgConfigInput {
    readonly clientId: string;
    readonly clientSecret: string;
    readonly enterpriseId?: string;
    readonly userId?: string;
    readonly tokenStorage?: TokenStorage;
}
export declare class BoxCcgAuth implements Authentication {
    readonly config: CcgConfig;
    readonly tokenStorage: TokenStorage;
    readonly subjectId?: string;
    readonly subjectType?: PostOAuth2TokenBoxSubjectTypeField;
    constructor(fields: Omit<BoxCcgAuth, 'tokenStorage' | 'subjectId' | 'subjectType' | 'refreshToken' | 'retrieveToken' | 'retrieveAuthorizationHeader' | 'withUserSubject' | 'withEnterpriseSubject' | 'downscopeToken' | 'revokeToken'>);
    refreshToken(networkSession?: NetworkSession): Promise<AccessToken>;
    retrieveToken(networkSession?: NetworkSession): Promise<AccessToken>;
    retrieveAuthorizationHeader(networkSession?: NetworkSession): Promise<string>;
    withUserSubject(userId: string, tokenStorage?: TokenStorage): BoxCcgAuth;
    withEnterpriseSubject(enterpriseId: string, tokenStorage?: TokenStorage): BoxCcgAuth;
    downscopeToken(scopes: readonly string[], resource?: string, sharedLink?: string, networkSession?: NetworkSession): Promise<AccessToken>;
    revokeToken(networkSession?: NetworkSession): Promise<undefined>;
}
