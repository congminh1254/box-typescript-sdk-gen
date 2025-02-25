var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { NetworkSession } from '../networking/network.generated.js';
import { InMemoryTokenStorage } from './tokenStorage.generated.js';
import { jsonToSerializedData } from '../serialization/json.js';
import { getUuid } from '../internal/utils.js';
import { readTextFromFile } from '../internal/utils.js';
import { isBrowser } from '../internal/utils.js';
import { getEpochTimeInSeconds } from '../internal/utils.js';
import { createJwtAssertion } from '../internal/utils.js';
import { AuthorizationManager } from '../managers/authorization.generated.js';
import { BoxSdkError } from './errors.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class JwtConfig {
    constructor(fields) {
        this.algorithm = 'RS256';
        this.tokenStorage = new InMemoryTokenStorage({});
        if (fields.clientId !== undefined) {
            this.clientId = fields.clientId;
        }
        if (fields.clientSecret !== undefined) {
            this.clientSecret = fields.clientSecret;
        }
        if (fields.jwtKeyId !== undefined) {
            this.jwtKeyId = fields.jwtKeyId;
        }
        if (fields.privateKey !== undefined) {
            this.privateKey = fields.privateKey;
        }
        if (fields.privateKeyPassphrase !== undefined) {
            this.privateKeyPassphrase = fields.privateKeyPassphrase;
        }
        if (fields.enterpriseId !== undefined) {
            this.enterpriseId = fields.enterpriseId;
        }
        if (fields.userId !== undefined) {
            this.userId = fields.userId;
        }
        if (fields.algorithm !== undefined) {
            this.algorithm = fields.algorithm;
        }
        if (fields.tokenStorage !== undefined) {
            this.tokenStorage = fields.tokenStorage;
        }
    }
    /**
     * Create an auth instance as defined by a string content of JSON file downloaded from the Box Developer Console.
     * See https://developer.box.com/en/guides/authentication/jwt/ for more information.
     * @param {string} configJsonString String content of JSON file containing the configuration.
     * @param {TokenStorage} tokenStorage Object responsible for storing token. If no custom implementation provided, the token will be stored in memory.g
     * @returns {JwtConfig}
     */
    static fromConfigJsonString(configJsonString, tokenStorage) {
        const configJson = Object.assign(Object.assign({}, deserializeJwtConfigFile(jsonToSerializedData(configJsonString))), { rawData: jsonToSerializedData(configJsonString) });
        const newConfig = !(tokenStorage == void 0)
            ? new JwtConfig({
                clientId: configJson.boxAppSettings.clientId,
                clientSecret: configJson.boxAppSettings.clientSecret,
                enterpriseId: configJson.enterpriseId,
                userId: configJson.userId,
                jwtKeyId: configJson.boxAppSettings.appAuth.publicKeyId,
                privateKey: configJson.boxAppSettings.appAuth.privateKey,
                privateKeyPassphrase: configJson.boxAppSettings.appAuth.passphrase,
                tokenStorage: tokenStorage,
            })
            : new JwtConfig({
                clientId: configJson.boxAppSettings.clientId,
                clientSecret: configJson.boxAppSettings.clientSecret,
                enterpriseId: configJson.enterpriseId,
                userId: configJson.userId,
                jwtKeyId: configJson.boxAppSettings.appAuth.publicKeyId,
                privateKey: configJson.boxAppSettings.appAuth.privateKey,
                privateKeyPassphrase: configJson.boxAppSettings.appAuth.passphrase,
            });
        return newConfig;
    }
    /**
     * Create an auth instance as defined by a JSON file downloaded from the Box Developer Console.
     * See https://developer.box.com/en/guides/authentication/jwt/ for more information.
     * @param {string} configFilePath Path to the JSON file containing the configuration.
     * @param {TokenStorage} tokenStorage Object responsible for storing token. If no custom implementation provided, the token will be stored in memory.
     * @returns {JwtConfig}
     */
    static fromConfigFile(configFilePath, tokenStorage) {
        const configJsonString = readTextFromFile(configFilePath);
        return JwtConfig.fromConfigJsonString(configJsonString, tokenStorage);
    }
}
export class BoxJwtAuth {
    constructor(fields) {
        if (fields.config !== undefined) {
            this.config = fields.config;
        }
        this.tokenStorage = this.config.tokenStorage;
        this.subjectId = !(this.config.enterpriseId == void 0)
            ? this.config.enterpriseId
            : this.config.userId;
        this.subjectType = !(this.config.enterpriseId == void 0)
            ? 'enterprise'
            : 'user';
    }
    /**
     * Get new access token using JWT auth.
     * @param {NetworkSession} networkSession An object to keep network session state
     * @returns {Promise<AccessToken>}
     */
    refreshToken(networkSession) {
        return __awaiter(this, void 0, void 0, function* () {
            if (isBrowser()) {
                throw new BoxSdkError({
                    message: 'JWT auth is not supported in browser environment.',
                });
            }
            const alg = !(this.config.algorithm == void 0)
                ? this.config.algorithm
                : 'RS256';
            const claims = {
                ['exp']: getEpochTimeInSeconds() + 30,
                ['box_sub_type']: this.subjectType,
            };
            const jwtOptions = {
                algorithm: alg,
                audience: 'https://api.box.com/oauth2/token',
                subject: this.subjectId,
                issuer: this.config.clientId,
                jwtid: getUuid(),
                keyid: this.config.jwtKeyId,
            };
            const jwtKey = {
                key: this.config.privateKey,
                passphrase: this.config.privateKeyPassphrase,
            };
            const assertion = yield createJwtAssertion(claims, jwtKey, jwtOptions);
            const authManager = new AuthorizationManager({
                networkSession: !(networkSession == void 0)
                    ? networkSession
                    : new NetworkSession({}),
            });
            const token = yield authManager.requestAccessToken({
                grantType: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
                assertion: assertion,
                clientId: this.config.clientId,
                clientSecret: this.config.clientSecret,
            });
            yield this.tokenStorage.store(token);
            return token;
        });
    }
    /**
     * Get the current access token. If the current access token is expired or not found, this method will attempt to refresh the token.
     * @param {NetworkSession} networkSession An object to keep network session state
     * @returns {Promise<AccessToken>}
     */
    retrieveToken(networkSession) {
        return __awaiter(this, void 0, void 0, function* () {
            const oldToken = yield this.tokenStorage.get();
            if (oldToken == void 0) {
                const newToken = yield this.refreshToken(networkSession);
                return newToken;
            }
            return oldToken;
        });
    }
    /**
     * @param {NetworkSession} networkSession
     * @returns {Promise<string>}
     */
    retrieveAuthorizationHeader(networkSession) {
        return __awaiter(this, void 0, void 0, function* () {
            const token = yield this.retrieveToken(networkSession);
            return ''.concat('Bearer ', token.accessToken);
        });
    }
    /**
     * Create a new BoxJWTAuth instance that uses the provided user ID as the subject of the JWT assertion.
     * May be one of this application's created App User. Depending on the configured User Access Level, may also be any other App User or Managed User in the enterprise.
     * <https://developer.box.com/en/guides/applications/>
     * <https://developer.box.com/en/guides/authentication/select/>
     * @param {string} userId The id of the user to authenticate
     * @param {TokenStorage} tokenStorage Object responsible for storing token in newly created BoxJWTAuth. If no custom implementation provided, the token will be stored in memory.
     * @returns {BoxJwtAuth}
     */
    withUserSubject(userId, tokenStorage = new InMemoryTokenStorage({})) {
        const newConfig = new JwtConfig({
            clientId: this.config.clientId,
            clientSecret: this.config.clientSecret,
            enterpriseId: void 0,
            userId: userId,
            jwtKeyId: this.config.jwtKeyId,
            privateKey: this.config.privateKey,
            privateKeyPassphrase: this.config.privateKeyPassphrase,
            tokenStorage: tokenStorage,
        });
        const newAuth = new BoxJwtAuth({ config: newConfig });
        return newAuth;
    }
    /**
     * Create a new BoxJWTAuth instance that uses the provided enterprise ID as the subject of the JWT assertion.
     * @param {string} enterpriseId The id of the enterprise to authenticate
     * @param {TokenStorage} tokenStorage Object responsible for storing token in newly created BoxJWTAuth. If no custom implementation provided, the token will be stored in memory.
     * @returns {BoxJwtAuth}
     */
    withEnterpriseSubject(enterpriseId, tokenStorage = new InMemoryTokenStorage({})) {
        const newConfig = new JwtConfig({
            clientId: this.config.clientId,
            clientSecret: this.config.clientSecret,
            enterpriseId: enterpriseId,
            userId: void 0,
            jwtKeyId: this.config.jwtKeyId,
            privateKey: this.config.privateKey,
            privateKeyPassphrase: this.config.privateKeyPassphrase,
            tokenStorage: tokenStorage,
        });
        const newAuth = new BoxJwtAuth({ config: newConfig });
        return newAuth;
    }
    /**
     * Downscope access token to the provided scopes. Returning a new access token with the provided scopes, with the original access token unchanged.
     * @param {readonly string[]} scopes The scope(s) to apply to the resulting token.
     * @param {string} resource The file or folder to get a downscoped token for. If None and shared_link None, the resulting token will not be scoped down to just a single item. The resource should be a full URL to an item, e.g. https://api.box.com/2.0/files/123456.
     * @param {string} sharedLink The shared link to get a downscoped token for. If None and item None, the resulting token will not be scoped down to just a single item.
     * @param {NetworkSession} networkSession An object to keep network session state
     * @returns {Promise<AccessToken>}
     */
    downscopeToken(scopes, resource, sharedLink, networkSession) {
        return __awaiter(this, void 0, void 0, function* () {
            const token = yield this.tokenStorage.get();
            if (token == void 0) {
                throw new BoxSdkError({
                    message: 'No access token is available. Make an API call to retrieve a token before calling this method.',
                });
            }
            const authManager = new AuthorizationManager({
                networkSession: !(networkSession == void 0)
                    ? networkSession
                    : new NetworkSession({}),
            });
            const downscopedToken = yield authManager.requestAccessToken({
                grantType: 'urn:ietf:params:oauth:grant-type:token-exchange',
                subjectToken: token.accessToken,
                subjectTokenType: 'urn:ietf:params:oauth:token-type:access_token',
                resource: resource,
                scope: scopes.join(' '),
                boxSharedLink: sharedLink,
            });
            return downscopedToken;
        });
    }
    /**
     * Revoke the current access token and remove it from token storage.
     * @param {NetworkSession} networkSession An object to keep network session state
     * @returns {Promise<undefined>}
     */
    revokeToken(networkSession) {
        return __awaiter(this, void 0, void 0, function* () {
            const oldToken = yield this.tokenStorage.get();
            if (oldToken == void 0) {
                return void 0;
            }
            const authManager = new AuthorizationManager({
                networkSession: !(networkSession == void 0)
                    ? networkSession
                    : new NetworkSession({}),
            });
            yield authManager.revokeAccessToken({
                token: oldToken.accessToken,
                clientId: this.config.clientId,
                clientSecret: this.config.clientSecret,
            });
            yield this.tokenStorage.clear();
            return void 0;
        });
    }
}
export function serializeJwtConfigAppSettingsAppAuth(val) {
    return {
        ['publicKeyID']: val.publicKeyId,
        ['privateKey']: val.privateKey,
        ['passphrase']: val.passphrase,
    };
}
export function deserializeJwtConfigAppSettingsAppAuth(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "JwtConfigAppSettingsAppAuth"',
        });
    }
    if (val.publicKeyID == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "publicKeyID" of type "JwtConfigAppSettingsAppAuth" to be defined',
        });
    }
    if (!sdIsString(val.publicKeyID)) {
        throw new BoxSdkError({
            message: 'Expecting string for "publicKeyID" of type "JwtConfigAppSettingsAppAuth"',
        });
    }
    const publicKeyId = val.publicKeyID;
    if (val.privateKey == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "privateKey" of type "JwtConfigAppSettingsAppAuth" to be defined',
        });
    }
    if (!sdIsString(val.privateKey)) {
        throw new BoxSdkError({
            message: 'Expecting string for "privateKey" of type "JwtConfigAppSettingsAppAuth"',
        });
    }
    const privateKey = val.privateKey;
    if (val.passphrase == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "passphrase" of type "JwtConfigAppSettingsAppAuth" to be defined',
        });
    }
    if (!sdIsString(val.passphrase)) {
        throw new BoxSdkError({
            message: 'Expecting string for "passphrase" of type "JwtConfigAppSettingsAppAuth"',
        });
    }
    const passphrase = val.passphrase;
    return {
        publicKeyId: publicKeyId,
        privateKey: privateKey,
        passphrase: passphrase,
    };
}
export function serializeJwtConfigAppSettings(val) {
    return {
        ['clientID']: val.clientId,
        ['clientSecret']: val.clientSecret,
        ['appAuth']: serializeJwtConfigAppSettingsAppAuth(val.appAuth),
    };
}
export function deserializeJwtConfigAppSettings(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "JwtConfigAppSettings"',
        });
    }
    if (val.clientID == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "clientID" of type "JwtConfigAppSettings" to be defined',
        });
    }
    if (!sdIsString(val.clientID)) {
        throw new BoxSdkError({
            message: 'Expecting string for "clientID" of type "JwtConfigAppSettings"',
        });
    }
    const clientId = val.clientID;
    if (val.clientSecret == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "clientSecret" of type "JwtConfigAppSettings" to be defined',
        });
    }
    if (!sdIsString(val.clientSecret)) {
        throw new BoxSdkError({
            message: 'Expecting string for "clientSecret" of type "JwtConfigAppSettings"',
        });
    }
    const clientSecret = val.clientSecret;
    if (val.appAuth == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "appAuth" of type "JwtConfigAppSettings" to be defined',
        });
    }
    const appAuth = deserializeJwtConfigAppSettingsAppAuth(val.appAuth);
    return {
        clientId: clientId,
        clientSecret: clientSecret,
        appAuth: appAuth,
    };
}
export function serializeJwtConfigFile(val) {
    return {
        ['enterpriseID']: val.enterpriseId,
        ['userID']: val.userId,
        ['boxAppSettings']: serializeJwtConfigAppSettings(val.boxAppSettings),
    };
}
export function deserializeJwtConfigFile(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({ message: 'Expecting a map for "JwtConfigFile"' });
    }
    if (!(val.enterpriseID == void 0) && !sdIsString(val.enterpriseID)) {
        throw new BoxSdkError({
            message: 'Expecting string for "enterpriseID" of type "JwtConfigFile"',
        });
    }
    const enterpriseId = val.enterpriseID == void 0 ? void 0 : val.enterpriseID;
    if (!(val.userID == void 0) && !sdIsString(val.userID)) {
        throw new BoxSdkError({
            message: 'Expecting string for "userID" of type "JwtConfigFile"',
        });
    }
    const userId = val.userID == void 0 ? void 0 : val.userID;
    if (val.boxAppSettings == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "boxAppSettings" of type "JwtConfigFile" to be defined',
        });
    }
    const boxAppSettings = deserializeJwtConfigAppSettings(val.boxAppSettings);
    return {
        enterpriseId: enterpriseId,
        userId: userId,
        boxAppSettings: boxAppSettings,
    };
}
//# sourceMappingURL=jwtAuth.generated.js.map