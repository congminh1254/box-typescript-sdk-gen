var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { deserializeAccessToken } from '../schemas/accessToken.generated.js';
import { serializePostOAuth2Token } from '../schemas/postOAuth2Token.generated.js';
import { serializePostOAuth2TokenRefreshAccessToken } from '../schemas/postOAuth2TokenRefreshAccessToken.generated.js';
import { serializePostOAuth2Revoke } from '../schemas/postOAuth2Revoke.generated.js';
import { PostOAuth2TokenRefreshAccessToken } from '../schemas/postOAuth2TokenRefreshAccessToken.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { NetworkSession } from '../networking/network.generated.js';
import { FetchOptions } from '../networking/fetchOptions.generated.js';
import { prepareParams } from '../internal/utils.js';
import { toString } from '../internal/utils.js';
import { sdIsString } from '../serialization/json.js';
export class AuthorizeUserOptionals {
    constructor(fields) {
        this.headers = new AuthorizeUserHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class RequestAccessTokenOptionals {
    constructor(fields) {
        this.headers = new RequestAccessTokenHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class RefreshAccessTokenOptionals {
    constructor(fields) {
        this.headers = new RefreshAccessTokenHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class RevokeAccessTokenOptionals {
    constructor(fields) {
        this.headers = new RevokeAccessTokenHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class AuthorizeUserHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class RequestAccessTokenHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class RefreshAccessTokenHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class RevokeAccessTokenHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class AuthorizationManager {
    constructor(fields) {
        this.networkSession = new NetworkSession({});
        if (fields.auth !== undefined) {
            this.auth = fields.auth;
        }
        if (fields.networkSession !== undefined) {
            this.networkSession = fields.networkSession;
        }
    }
    /**
     * Authorize a user by sending them through the [Box](https://box.com)
     * website and request their permission to act on their behalf.
     *
     * This is the first step when authenticating a user using
     * OAuth 2.0. To request a user's authorization to use the Box APIs
     * on their behalf you will need to send a user to the URL with this
     * format.
     * @param {AuthorizeUserQueryParams} queryParams Query parameters of authorizeUser method
     * @param {AuthorizeUserOptionalsInput} optionalsInput
     * @returns {Promise<undefined>}
     */
    authorizeUser(queryParams_1) {
        return __awaiter(this, arguments, void 0, function* (queryParams, optionalsInput = {}) {
            const optionals = new AuthorizeUserOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const queryParamsMap = prepareParams({
                ['response_type']: toString(queryParams.responseType),
                ['client_id']: toString(queryParams.clientId),
                ['redirect_uri']: toString(queryParams.redirectUri),
                ['state']: toString(queryParams.state),
                ['scope']: toString(queryParams.scope),
            });
            const headersMap = prepareParams(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.oauth2Url, '/authorize'),
                method: 'GET',
                params: queryParamsMap,
                headers: headersMap,
                responseFormat: 'no_content',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return void 0;
        });
    }
    /**
     * Request an Access Token using either a client-side obtained OAuth 2.0
     * authorization code or a server-side JWT assertion.
     *
     * An Access Token is a string that enables Box to verify that a
     * request belongs to an authorized session. In the normal order of
     * operations you will begin by requesting authentication from the
     * [authorize](#get-authorize) endpoint and Box will send you an
     * authorization code.
     *
     * You will then send this code to this endpoint to exchange it for
     * an Access Token. The returned Access Token can then be used to to make
     * Box API calls.
     * @param {PostOAuth2Token} requestBody Request body of requestAccessToken method
     * @param {RequestAccessTokenOptionalsInput} optionalsInput
     * @returns {Promise<AccessToken>}
     */
    requestAccessToken(requestBody_1) {
        return __awaiter(this, arguments, void 0, function* (requestBody, optionalsInput = {}) {
            const optionals = new RequestAccessTokenOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = prepareParams(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/oauth2/token'),
                method: 'POST',
                headers: headersMap,
                data: serializePostOAuth2Token(requestBody),
                contentType: 'application/x-www-form-urlencoded',
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, deserializeAccessToken(response.data)), { rawData: response.data });
        });
    }
    /**
     * Refresh an Access Token using its client ID, secret, and refresh token.
     * @param {PostOAuth2TokenRefreshAccessTokenInput} requestBodyInput Request body of refreshAccessToken method
     * @param {RefreshAccessTokenOptionalsInput} optionalsInput
     * @returns {Promise<AccessToken>}
     */
    refreshAccessToken(requestBodyInput_1) {
        return __awaiter(this, arguments, void 0, function* (requestBodyInput, optionalsInput = {}) {
            const requestBody = new PostOAuth2TokenRefreshAccessToken({
                grantType: requestBodyInput.grantType,
                clientId: requestBodyInput.clientId,
                clientSecret: requestBodyInput.clientSecret,
                refreshToken: requestBodyInput.refreshToken,
            });
            const optionals = new RefreshAccessTokenOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = prepareParams(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/oauth2/token#refresh'),
                method: 'POST',
                headers: headersMap,
                data: serializePostOAuth2TokenRefreshAccessToken(requestBody),
                contentType: 'application/x-www-form-urlencoded',
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, deserializeAccessToken(response.data)), { rawData: response.data });
        });
    }
    /**
     * Revoke an active Access Token, effectively logging a user out
     * that has been previously authenticated.
     * @param {PostOAuth2Revoke} requestBody Request body of revokeAccessToken method
     * @param {RevokeAccessTokenOptionalsInput} optionalsInput
     * @returns {Promise<undefined>}
     */
    revokeAccessToken(requestBody_1) {
        return __awaiter(this, arguments, void 0, function* (requestBody, optionalsInput = {}) {
            const optionals = new RevokeAccessTokenOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = prepareParams(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/oauth2/revoke'),
                method: 'POST',
                headers: headersMap,
                data: serializePostOAuth2Revoke(requestBody),
                contentType: 'application/x-www-form-urlencoded',
                responseFormat: 'no_content',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return void 0;
        });
    }
}
export function serializeAuthorizeUserQueryParamsResponseTypeField(val) {
    return val;
}
export function deserializeAuthorizeUserQueryParamsResponseTypeField(val) {
    if (val == 'code') {
        return val;
    }
    if (sdIsString(val)) {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize AuthorizeUserQueryParamsResponseTypeField",
    });
}
//# sourceMappingURL=authorization.generated.js.map