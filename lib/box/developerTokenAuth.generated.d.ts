import { AccessToken } from '../schemas/accessToken.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { TokenStorage } from './tokenStorage.generated.js';
export interface DeveloperTokenConfig {
    readonly clientId?: string;
    readonly clientSecret?: string;
}
export declare class BoxDeveloperTokenAuth implements Authentication {
    readonly token: string;
    readonly config: DeveloperTokenConfig;
    readonly tokenStorage: TokenStorage;
    constructor(fields: Omit<BoxDeveloperTokenAuth, 'tokenStorage' | 'config' | 'retrieveToken' | 'refreshToken' | 'retrieveAuthorizationHeader' | 'revokeToken' | 'downscopeToken'> & Partial<Pick<BoxDeveloperTokenAuth, 'config'>>);
    retrieveToken(networkSession?: NetworkSession): Promise<AccessToken>;
    refreshToken(networkSession?: NetworkSession): Promise<AccessToken>;
    retrieveAuthorizationHeader(networkSession?: NetworkSession): Promise<string>;
    revokeToken(networkSession?: NetworkSession): Promise<undefined>;
    downscopeToken(scopes: readonly string[], resource?: string, sharedLink?: string, networkSession?: NetworkSession): Promise<AccessToken>;
}
