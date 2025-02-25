var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { decodeBase64 } from '../internal/utils.js';
import { getEnvVar } from '../internal/utils.js';
import { getUuid } from '../internal/utils.js';
import { generateByteStream } from '../internal/utils.js';
import { BoxClient } from '../client.generated.js';
import { BoxCcgAuth } from '../box/ccgAuth.generated.js';
import { CcgConfig } from '../box/ccgAuth.generated.js';
import { BoxDeveloperTokenAuth } from '../box/developerTokenAuth.generated.js';
import { BoxOAuth } from '../box/oauth.generated.js';
import { OAuthConfig } from '../box/oauth.generated.js';
import { InMemoryTokenStorage } from '../box/tokenStorage.generated.js';
import { BoxJwtAuth } from '../box/jwtAuth.generated.js';
import { JwtConfig } from '../box/jwtAuth.generated.js';
export function getAccessToken() {
    return __awaiter(this, void 0, void 0, function* () {
        const userId = getEnvVar('USER_ID');
        const enterpriseId = getEnvVar('ENTERPRISE_ID');
        const ccgConfig = new CcgConfig({
            clientId: getEnvVar('CLIENT_ID'),
            clientSecret: getEnvVar('CLIENT_SECRET'),
            enterpriseId: enterpriseId,
            userId: userId,
        });
        const auth = new BoxCcgAuth({ config: ccgConfig });
        const authUser = auth.withUserSubject(userId);
        return yield authUser.retrieveToken();
    });
}
test('test_jwt_auth', function test_jwt_auth() {
    return __awaiter(this, void 0, void 0, function* () {
        const userId = getEnvVar('USER_ID');
        const enterpriseId = getEnvVar('ENTERPRISE_ID');
        const jwtConfig = JwtConfig.fromConfigJsonString(decodeBase64(getEnvVar('JWT_CONFIG_BASE_64')));
        const auth = new BoxJwtAuth({ config: jwtConfig });
        const userAuth = auth.withUserSubject(userId);
        const userClient = new BoxClient({ auth: userAuth });
        const currentUser = yield userClient.users.getUserMe();
        if (!(currentUser.id == userId)) {
            throw new Error('Assertion failed');
        }
        const enterpriseAuth = auth.withEnterpriseSubject(enterpriseId);
        const enterpriseClient = new BoxClient({ auth: enterpriseAuth });
        const newUser = yield enterpriseClient.users.getUserMe({
            fields: ['enterprise'],
        });
        if (!!(newUser.enterprise == void 0)) {
            throw new Error('Assertion failed');
        }
        if (!(newUser.enterprise.id == enterpriseId)) {
            throw new Error('Assertion failed');
        }
        if (!!(newUser.id == userId)) {
            throw new Error('Assertion failed');
        }
    });
});
test('test_jwt_auth_downscope', function test_jwt_auth_downscope() {
    return __awaiter(this, void 0, void 0, function* () {
        const jwtConfig = JwtConfig.fromConfigJsonString(decodeBase64(getEnvVar('JWT_CONFIG_BASE_64')));
        const auth = new BoxJwtAuth({ config: jwtConfig });
        const parentClient = new BoxClient({ auth: auth });
        const uploadedFiles = yield parentClient.uploads.uploadFile({
            attributes: {
                name: getUuid(),
                parent: { id: '0' },
            },
            file: generateByteStream(1024 * 1024),
        });
        const file = uploadedFiles.entries[0];
        const resourcePath = ''.concat('https://api.box.com/2.0/files/', file.id);
        const downscopedToken = yield auth.downscopeToken(['item_rename', 'item_preview'], resourcePath);
        if (!!(downscopedToken.accessToken == void 0)) {
            throw new Error('Assertion failed');
        }
        const downscopedClient = new BoxClient({
            auth: new BoxDeveloperTokenAuth({ token: downscopedToken.accessToken }),
        });
        yield downscopedClient.files.updateFileById(file.id, {
            requestBody: { name: getUuid() },
        });
        yield expect(() => __awaiter(this, void 0, void 0, function* () {
            yield downscopedClient.files.deleteFileById(file.id);
        })).rejects.toThrow();
        yield parentClient.files.deleteFileById(file.id);
    });
});
test('test_jwt_auth_revoke', function test_jwt_auth_revoke() {
    return __awaiter(this, void 0, void 0, function* () {
        const jwtConfig = JwtConfig.fromConfigJsonString(decodeBase64(getEnvVar('JWT_CONFIG_BASE_64')));
        const auth = new BoxJwtAuth({ config: jwtConfig });
        const tokenFromStorageBeforeRevoke = yield auth.retrieveToken();
        if (!!(tokenFromStorageBeforeRevoke == void 0)) {
            throw new Error('Assertion failed');
        }
        yield auth.revokeToken();
        const tokenFromStorageAfterRevoke = yield auth.retrieveToken();
        if (!!(tokenFromStorageBeforeRevoke.accessToken ==
            tokenFromStorageAfterRevoke.accessToken)) {
            throw new Error('Assertion failed');
        }
    });
});
test('test_oauth_auth_authorizeUrl', function test_oauth_auth_authorizeUrl() {
    const config = new OAuthConfig({
        clientId: 'OAUTH_CLIENT_ID',
        clientSecret: 'OAUTH_CLIENT_SECRET',
    });
    const auth = new BoxOAuth({ config: config });
    const authUrl = auth.getAuthorizeUrl();
    if (!(authUrl ==
        'https://account.box.com/api/oauth2/authorize?client_id=OAUTH_CLIENT_ID&response_type=code' ||
        authUrl ==
            'https://account.box.com/api/oauth2/authorize?response_type=code&client_id=OAUTH_CLIENT_ID')) {
        throw new Error('Assertion failed');
    }
});
test('test_ccg_auth', function test_ccg_auth() {
    return __awaiter(this, void 0, void 0, function* () {
        const userId = getEnvVar('USER_ID');
        const enterpriseId = getEnvVar('ENTERPRISE_ID');
        const ccgConfig = new CcgConfig({
            clientId: getEnvVar('CLIENT_ID'),
            clientSecret: getEnvVar('CLIENT_SECRET'),
            enterpriseId: enterpriseId,
            userId: userId,
        });
        const auth = new BoxCcgAuth({ config: ccgConfig });
        const userAuth = auth.withUserSubject(userId);
        const userClient = new BoxClient({ auth: userAuth });
        const currentUser = yield userClient.users.getUserMe();
        if (!(currentUser.id == userId)) {
            throw new Error('Assertion failed');
        }
        const enterpriseAuth = auth.withEnterpriseSubject(enterpriseId);
        const enterpriseClient = new BoxClient({ auth: enterpriseAuth });
        const newUser = yield enterpriseClient.users.getUserMe({
            fields: ['enterprise'],
        });
        if (!!(newUser.enterprise == void 0)) {
            throw new Error('Assertion failed');
        }
        if (!(newUser.enterprise.id == enterpriseId)) {
            throw new Error('Assertion failed');
        }
        if (!!(newUser.id == userId)) {
            throw new Error('Assertion failed');
        }
    });
});
test('test_ccg_auth_downscope', function test_ccg_auth_downscope() {
    return __awaiter(this, void 0, void 0, function* () {
        const ccgConfig = new CcgConfig({
            clientId: getEnvVar('CLIENT_ID'),
            clientSecret: getEnvVar('CLIENT_SECRET'),
            userId: getEnvVar('USER_ID'),
        });
        const auth = new BoxCcgAuth({ config: ccgConfig });
        const parentClient = new BoxClient({ auth: auth });
        const folder = yield parentClient.folders.createFolder({
            name: getUuid(),
            parent: { id: '0' },
        });
        const resourcePath = ''.concat('https://api.box.com/2.0/folders/', folder.id);
        const downscopedToken = yield auth.downscopeToken(['item_rename', 'item_preview'], resourcePath);
        if (!!(downscopedToken.accessToken == void 0)) {
            throw new Error('Assertion failed');
        }
        const downscopedClient = new BoxClient({
            auth: new BoxDeveloperTokenAuth({ token: downscopedToken.accessToken }),
        });
        yield downscopedClient.folders.updateFolderById(folder.id, {
            requestBody: { name: getUuid() },
        });
        yield expect(() => __awaiter(this, void 0, void 0, function* () {
            yield downscopedClient.folders.deleteFolderById(folder.id);
        })).rejects.toThrow();
        yield parentClient.folders.deleteFolderById(folder.id);
    });
});
test('test_ccg_auth_revoke', function test_ccg_auth_revoke() {
    return __awaiter(this, void 0, void 0, function* () {
        const ccgConfig = new CcgConfig({
            clientId: getEnvVar('CLIENT_ID'),
            clientSecret: getEnvVar('CLIENT_SECRET'),
            userId: getEnvVar('USER_ID'),
        });
        const auth = new BoxCcgAuth({ config: ccgConfig });
        const tokenFromStorageBeforeRevoke = yield auth.retrieveToken();
        if (!!(tokenFromStorageBeforeRevoke == void 0)) {
            throw new Error('Assertion failed');
        }
        yield auth.revokeToken();
        const tokenFromStorageAfterRevoke = yield auth.retrieveToken();
        if (!!(tokenFromStorageBeforeRevoke.accessToken ==
            tokenFromStorageAfterRevoke.accessToken)) {
            throw new Error('Assertion failed');
        }
    });
});
test('test_developer_token_auth_revoke', function test_developer_token_auth_revoke() {
    return __awaiter(this, void 0, void 0, function* () {
        const developerTokenConfig = {
            clientId: getEnvVar('CLIENT_ID'),
            clientSecret: getEnvVar('CLIENT_SECRET'),
        };
        const token = yield getAccessToken();
        const auth = new BoxDeveloperTokenAuth({
            token: token.accessToken,
            config: developerTokenConfig,
        });
        const tokenFromStorageBeforeRevoke = yield auth.retrieveToken();
        if (!!(tokenFromStorageBeforeRevoke == void 0)) {
            throw new Error('Assertion failed');
        }
        yield auth.revokeToken();
        yield expect(() => __awaiter(this, void 0, void 0, function* () {
            yield auth.retrieveToken();
        })).rejects.toThrow();
    });
});
test('test_developer_token_auth_downscope', function test_developer_token_auth_downscope() {
    return __awaiter(this, void 0, void 0, function* () {
        const developerTokenConfig = {
            clientId: getEnvVar('CLIENT_ID'),
            clientSecret: getEnvVar('CLIENT_SECRET'),
        };
        const token = yield getAccessToken();
        const auth = new BoxDeveloperTokenAuth({
            token: token.accessToken,
            config: developerTokenConfig,
        });
        const parentClient = new BoxClient({ auth: auth });
        const folder = yield parentClient.folders.createFolder({
            name: getUuid(),
            parent: { id: '0' },
        });
        const resourcePath = ''.concat('https://api.box.com/2.0/folders/', folder.id);
        const downscopedToken = yield auth.downscopeToken(['item_rename', 'item_preview'], resourcePath);
        if (!!(downscopedToken.accessToken == void 0)) {
            throw new Error('Assertion failed');
        }
        const downscopedClient = new BoxClient({
            auth: new BoxDeveloperTokenAuth({ token: downscopedToken.accessToken }),
        });
        yield downscopedClient.folders.updateFolderById(folder.id, {
            requestBody: { name: getUuid() },
        });
        yield expect(() => __awaiter(this, void 0, void 0, function* () {
            yield downscopedClient.folders.deleteFolderById(folder.id);
        })).rejects.toThrow();
        yield parentClient.folders.deleteFolderById(folder.id);
    });
});
test('test_developer_token_auth', function test_developer_token_auth() {
    return __awaiter(this, void 0, void 0, function* () {
        const userId = getEnvVar('USER_ID');
        const token = yield getAccessToken();
        const devAuth = new BoxDeveloperTokenAuth({
            token: token.accessToken,
        });
        const client = new BoxClient({ auth: devAuth });
        const currentUser = yield client.users.getUserMe();
        if (!(currentUser.id == userId)) {
            throw new Error('Assertion failed');
        }
    });
});
test('test_oauth_auth_revoke', function test_oauth_auth_revoke() {
    return __awaiter(this, void 0, void 0, function* () {
        const token = yield getAccessToken();
        const tokenStorage = new InMemoryTokenStorage({
            token: token,
        });
        const config = new OAuthConfig({
            clientId: getEnvVar('CLIENT_ID'),
            clientSecret: getEnvVar('CLIENT_SECRET'),
            tokenStorage: tokenStorage,
        });
        const auth = new BoxOAuth({ config: config });
        const client = new BoxClient({ auth: auth });
        yield client.users.getUserMe();
        yield auth.revokeToken();
        yield expect(() => __awaiter(this, void 0, void 0, function* () {
            yield client.users.getUserMe();
        })).rejects.toThrow();
    });
});
test('test_oauth_auth_downscope', function test_oauth_auth_downscope() {
    return __awaiter(this, void 0, void 0, function* () {
        const token = yield getAccessToken();
        const tokenStorage = new InMemoryTokenStorage({
            token: token,
        });
        const config = new OAuthConfig({
            clientId: getEnvVar('CLIENT_ID'),
            clientSecret: getEnvVar('CLIENT_SECRET'),
            tokenStorage: tokenStorage,
        });
        const auth = new BoxOAuth({ config: config });
        const parentClient = new BoxClient({ auth: auth });
        const uploadedFiles = yield parentClient.uploads.uploadFile({
            attributes: {
                name: getUuid(),
                parent: { id: '0' },
            },
            file: generateByteStream(1024 * 1024),
        });
        const file = uploadedFiles.entries[0];
        const resourcePath = ''.concat('https://api.box.com/2.0/files/', file.id);
        const downscopedToken = yield auth.downscopeToken(['item_rename', 'item_preview'], resourcePath);
        if (!!(downscopedToken.accessToken == void 0)) {
            throw new Error('Assertion failed');
        }
        const downscopedClient = new BoxClient({
            auth: new BoxDeveloperTokenAuth({ token: downscopedToken.accessToken }),
        });
        yield downscopedClient.files.updateFileById(file.id, {
            requestBody: { name: getUuid() },
        });
        yield expect(() => __awaiter(this, void 0, void 0, function* () {
            yield downscopedClient.files.deleteFileById(file.id);
        })).rejects.toThrow();
        yield parentClient.files.deleteFileById(file.id);
    });
});
//# sourceMappingURL=auth.generated.test.js.map