import { PostOAuth2TokenGrantTypeField } from '../schemas/postOAuth2Token.generated.js';
import { PostOAuth2TokenSubjectTokenTypeField } from '../schemas/postOAuth2Token.generated.js';
import { AccessToken } from '../schemas/accessToken.generated.js';
import { PostOAuth2TokenBoxSubjectTypeField } from '../schemas/postOAuth2Token.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { TokenStorage } from './tokenStorage.generated.js';
import { InMemoryTokenStorage } from './tokenStorage.generated.js';
import { AuthorizationManager } from '../managers/authorization.generated.js';
import { BoxSdkError } from './errors.js';
import { PostOAuth2Token } from '../schemas/postOAuth2Token.generated.js';
import { PostOAuth2Revoke } from '../schemas/postOAuth2Revoke.generated.js';
export class CcgConfig {
  readonly clientId!: string;
  readonly clientSecret!: string;
  readonly enterpriseId?: string;
  readonly userId?: string;
  readonly tokenStorage: TokenStorage = new InMemoryTokenStorage({});
  constructor(
    fields: Omit<CcgConfig, 'tokenStorage'> &
      Partial<Pick<CcgConfig, 'tokenStorage'>>
  ) {
    if (fields.clientId) {
      this.clientId = fields.clientId;
    }
    if (fields.clientSecret) {
      this.clientSecret = fields.clientSecret;
    }
    if (fields.enterpriseId) {
      this.enterpriseId = fields.enterpriseId;
    }
    if (fields.userId) {
      this.userId = fields.userId;
    }
    if (fields.tokenStorage) {
      this.tokenStorage = fields.tokenStorage;
    }
  }
}
export interface CcgConfigInput {
  readonly clientId: string;
  readonly clientSecret: string;
  readonly enterpriseId?: string;
  readonly userId?: string;
  readonly tokenStorage?: TokenStorage;
}
export class BoxCcgAuth implements Authentication {
  readonly config!: CcgConfig;
  readonly tokenStorage: TokenStorage;
  readonly subjectId?: string;
  readonly subjectType?: PostOAuth2TokenBoxSubjectTypeField;
  constructor(
    fields: Omit<
      BoxCcgAuth,
      | 'tokenStorage'
      | 'subjectId'
      | 'subjectType'
      | 'refreshToken'
      | 'retrieveToken'
      | 'retrieveAuthorizationHeader'
      | 'withUserSubject'
      | 'withEnterpriseSubject'
      | 'downscopeToken'
      | 'revokeToken'
    >
  ) {
    if (fields.config) {
      this.config = fields.config;
    }
    this.tokenStorage = this.config.tokenStorage;
    this.subjectId = !(this.config.userId == void 0)
      ? this.config.userId
      : this.config.enterpriseId;
    this.subjectType = !(this.config.userId == void 0)
      ? ('user' as PostOAuth2TokenBoxSubjectTypeField)
      : ('enterprise' as PostOAuth2TokenBoxSubjectTypeField);
  }
  async refreshToken(networkSession?: NetworkSession): Promise<AccessToken> {
    const authManager: AuthorizationManager = new AuthorizationManager({
      networkSession: !(networkSession == void 0)
        ? networkSession!
        : new NetworkSession({}),
    });
    const token: AccessToken = await authManager.requestAccessToken({
      grantType: 'client_credentials' as PostOAuth2TokenGrantTypeField,
      clientId: this.config.clientId,
      clientSecret: this.config.clientSecret,
      boxSubjectType: this.subjectType,
      boxSubjectId: this.subjectId,
    } satisfies PostOAuth2Token);
    await this.tokenStorage.store(token);
    return token;
  }
  async retrieveToken(networkSession?: NetworkSession): Promise<AccessToken> {
    const oldToken: undefined | AccessToken = await this.tokenStorage.get();
    if (oldToken == void 0) {
      const newToken: AccessToken = await this.refreshToken(networkSession);
      return newToken;
    }
    return oldToken!;
  }
  async retrieveAuthorizationHeader(
    networkSession?: NetworkSession
  ): Promise<string> {
    const token: AccessToken = await this.retrieveToken(networkSession);
    return ''.concat('Bearer ', token.accessToken!) as string;
  }
  withUserSubject(
    userId: string,
    tokenStorage: TokenStorage = new InMemoryTokenStorage({})
  ): BoxCcgAuth {
    const newConfig: CcgConfig = new CcgConfig({
      clientId: this.config.clientId,
      clientSecret: this.config.clientSecret,
      enterpriseId: this.config.enterpriseId,
      userId: userId,
      tokenStorage: tokenStorage,
    });
    return new BoxCcgAuth({ config: newConfig });
  }
  withEnterpriseSubject(
    enterpriseId: string,
    tokenStorage: TokenStorage = new InMemoryTokenStorage({})
  ): BoxCcgAuth {
    const newConfig: CcgConfig = new CcgConfig({
      clientId: this.config.clientId,
      clientSecret: this.config.clientSecret,
      enterpriseId: enterpriseId,
      userId: void 0,
      tokenStorage: tokenStorage,
    });
    return new BoxCcgAuth({ config: newConfig });
  }
  async downscopeToken(
    scopes: readonly string[],
    resource?: string,
    sharedLink?: string,
    networkSession?: NetworkSession
  ): Promise<AccessToken> {
    const token: undefined | AccessToken = await this.tokenStorage.get();
    if (token == void 0) {
      throw new BoxSdkError({
        message:
          'No access token is available. Make an API call to retrieve a token before calling this method.',
      });
    }
    const authManager: AuthorizationManager = new AuthorizationManager({
      networkSession: !(networkSession == void 0)
        ? networkSession!
        : new NetworkSession({}),
    });
    const downscopedToken: AccessToken = await authManager.requestAccessToken({
      grantType:
        'urn:ietf:params:oauth:grant-type:token-exchange' as PostOAuth2TokenGrantTypeField,
      subjectToken: token!.accessToken,
      subjectTokenType:
        'urn:ietf:params:oauth:token-type:access_token' as PostOAuth2TokenSubjectTokenTypeField,
      scope: scopes.join(' ') as string,
      resource: resource,
      boxSharedLink: sharedLink,
    } satisfies PostOAuth2Token);
    return downscopedToken;
  }
  async revokeToken(networkSession?: NetworkSession): Promise<undefined> {
    const oldToken: undefined | AccessToken = await this.tokenStorage.get();
    if (oldToken == void 0) {
      return void 0;
    }
    const authManager: AuthorizationManager = new AuthorizationManager({
      networkSession: !(networkSession == void 0)
        ? networkSession!
        : new NetworkSession({}),
    });
    await authManager.revokeAccessToken({
      clientId: this.config.clientId,
      clientSecret: this.config.clientSecret,
      token: oldToken!.accessToken,
    } satisfies PostOAuth2Revoke);
    await this.tokenStorage.clear();
    return void 0;
  }
}
