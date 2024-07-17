import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { AccessToken } from '../schemas/accessToken.generated.js';
import { TokenStorage } from './tokenStorage.generated.js';
import { SerializedData } from '../serialization/json.js';
import { JwtAlgorithm } from '../internal/utils.js';
export interface JwtConfigAppSettingsAppAuth {
    readonly publicKeyId: string;
    readonly privateKey: string;
    readonly passphrase: string;
}
export interface JwtConfigAppSettings {
    readonly clientId: string;
    readonly clientSecret: string;
    readonly appAuth: JwtConfigAppSettingsAppAuth;
}
export interface JwtConfigFile {
    readonly enterpriseId?: string;
    readonly userId?: string;
    readonly boxAppSettings: JwtConfigAppSettings;
}
export declare class JwtConfig {
    readonly clientId: string;
    readonly clientSecret: string;
    readonly jwtKeyId: string;
    readonly privateKey: string;
    readonly privateKeyPassphrase: string;
    readonly enterpriseId?: string;
    readonly userId?: string;
    readonly algorithm?: JwtAlgorithm;
    readonly tokenStorage: TokenStorage;
    constructor(fields: Omit<JwtConfig, 'algorithm' | 'tokenStorage' | 'fromConfigJsonString' | 'fromConfigFile'> & Partial<Pick<JwtConfig, 'algorithm' | 'tokenStorage'>>);
    static fromConfigJsonString(configJsonString: string, tokenStorage?: TokenStorage): JwtConfig;
    static fromConfigFile(configFilePath: string, tokenStorage?: TokenStorage): JwtConfig;
}
export interface JwtConfigInput {
    readonly clientId: string;
    readonly clientSecret: string;
    readonly jwtKeyId: string;
    readonly privateKey: string;
    readonly privateKeyPassphrase: string;
    readonly enterpriseId?: string;
    readonly userId?: string;
    readonly algorithm?: undefined | JwtAlgorithm;
    readonly tokenStorage?: TokenStorage;
}
export declare class BoxJwtAuth implements Authentication {
    readonly config: JwtConfig;
    readonly tokenStorage: TokenStorage;
    readonly subjectId?: string;
    readonly subjectType?: string;
    constructor(fields: Omit<BoxJwtAuth, 'tokenStorage' | 'subjectId' | 'subjectType' | 'refreshToken' | 'retrieveToken' | 'retrieveAuthorizationHeader' | 'withUserSubject' | 'withEnterpriseSubject' | 'downscopeToken' | 'revokeToken'>);
    refreshToken(networkSession?: NetworkSession): Promise<AccessToken>;
    retrieveToken(networkSession?: NetworkSession): Promise<AccessToken>;
    retrieveAuthorizationHeader(networkSession?: NetworkSession): Promise<string>;
    withUserSubject(userId: string, tokenStorage?: TokenStorage): BoxJwtAuth;
    withEnterpriseSubject(userId: string, tokenStorage?: TokenStorage): BoxJwtAuth;
    downscopeToken(scopes: readonly string[], resource?: string, sharedLink?: string, networkSession?: NetworkSession): Promise<AccessToken>;
    revokeToken(networkSession?: NetworkSession): Promise<undefined>;
}
export declare function serializeJwtConfigAppSettingsAppAuth(val: JwtConfigAppSettingsAppAuth): SerializedData;
export declare function deserializeJwtConfigAppSettingsAppAuth(val: SerializedData): JwtConfigAppSettingsAppAuth;
export declare function serializeJwtConfigAppSettings(val: JwtConfigAppSettings): SerializedData;
export declare function deserializeJwtConfigAppSettings(val: SerializedData): JwtConfigAppSettings;
export declare function serializeJwtConfigFile(val: JwtConfigFile): SerializedData;
export declare function deserializeJwtConfigFile(val: SerializedData): JwtConfigFile;
