var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { deserializeSessionTerminationMessage } from '../schemas/sessionTerminationMessage.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { NetworkSession } from '../networking/network.generated.js';
import { FetchOptions } from '../networking/fetchOptions.generated.js';
import { prepareParams } from '../internal/utils.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class TerminateUsersSessionsOptionals {
    constructor(fields) {
        this.headers = new TerminateUsersSessionsHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class TerminateGroupsSessionsOptionals {
    constructor(fields) {
        this.headers = new TerminateGroupsSessionsHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class TerminateUsersSessionsHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class TerminateGroupsSessionsHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class SessionTerminationManager {
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
     * Validates the roles and permissions of the user,
     * and creates asynchronous jobs
     * to terminate the user's sessions.
     * Returns the status for the POST request.
     * @param {TerminateUsersSessionsRequestBody} requestBody Request body of terminateUsersSessions method
     * @param {TerminateUsersSessionsOptionalsInput} optionalsInput
     * @returns {Promise<SessionTerminationMessage>}
     */
    terminateUsersSessions(requestBody_1) {
        return __awaiter(this, arguments, void 0, function* (requestBody, optionalsInput = {}) {
            const optionals = new TerminateUsersSessionsOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = prepareParams(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/users/terminate_sessions'),
                method: 'POST',
                headers: headersMap,
                data: serializeTerminateUsersSessionsRequestBody(requestBody),
                contentType: 'application/json',
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, deserializeSessionTerminationMessage(response.data)), { rawData: response.data });
        });
    }
    /**
     * Validates the roles and permissions of the group,
     * and creates asynchronous jobs
     * to terminate the group's sessions.
     * Returns the status for the POST request.
     * @param {TerminateGroupsSessionsRequestBody} requestBody Request body of terminateGroupsSessions method
     * @param {TerminateGroupsSessionsOptionalsInput} optionalsInput
     * @returns {Promise<SessionTerminationMessage>}
     */
    terminateGroupsSessions(requestBody_1) {
        return __awaiter(this, arguments, void 0, function* (requestBody, optionalsInput = {}) {
            const optionals = new TerminateGroupsSessionsOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = prepareParams(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/groups/terminate_sessions'),
                method: 'POST',
                headers: headersMap,
                data: serializeTerminateGroupsSessionsRequestBody(requestBody),
                contentType: 'application/json',
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, deserializeSessionTerminationMessage(response.data)), { rawData: response.data });
        });
    }
}
export function serializeTerminateUsersSessionsRequestBody(val) {
    return {
        ['user_ids']: val.userIds.map(function (item) {
            return item;
        }),
        ['user_logins']: val.userLogins.map(function (item) {
            return item;
        }),
    };
}
export function deserializeTerminateUsersSessionsRequestBody(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "TerminateUsersSessionsRequestBody"',
        });
    }
    if (val.user_ids == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "user_ids" of type "TerminateUsersSessionsRequestBody" to be defined',
        });
    }
    if (!sdIsList(val.user_ids)) {
        throw new BoxSdkError({
            message: 'Expecting array for "user_ids" of type "TerminateUsersSessionsRequestBody"',
        });
    }
    const userIds = sdIsList(val.user_ids)
        ? val.user_ids.map(function (itm) {
            if (!sdIsString(itm)) {
                throw new BoxSdkError({
                    message: 'Expecting string for "TerminateUsersSessionsRequestBody"',
                });
            }
            return itm;
        })
        : [];
    if (val.user_logins == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "user_logins" of type "TerminateUsersSessionsRequestBody" to be defined',
        });
    }
    if (!sdIsList(val.user_logins)) {
        throw new BoxSdkError({
            message: 'Expecting array for "user_logins" of type "TerminateUsersSessionsRequestBody"',
        });
    }
    const userLogins = sdIsList(val.user_logins)
        ? val.user_logins.map(function (itm) {
            if (!sdIsString(itm)) {
                throw new BoxSdkError({
                    message: 'Expecting string for "TerminateUsersSessionsRequestBody"',
                });
            }
            return itm;
        })
        : [];
    return {
        userIds: userIds,
        userLogins: userLogins,
    };
}
export function serializeTerminateGroupsSessionsRequestBody(val) {
    return {
        ['group_ids']: val.groupIds.map(function (item) {
            return item;
        }),
    };
}
export function deserializeTerminateGroupsSessionsRequestBody(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "TerminateGroupsSessionsRequestBody"',
        });
    }
    if (val.group_ids == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "group_ids" of type "TerminateGroupsSessionsRequestBody" to be defined',
        });
    }
    if (!sdIsList(val.group_ids)) {
        throw new BoxSdkError({
            message: 'Expecting array for "group_ids" of type "TerminateGroupsSessionsRequestBody"',
        });
    }
    const groupIds = sdIsList(val.group_ids)
        ? val.group_ids.map(function (itm) {
            if (!sdIsString(itm)) {
                throw new BoxSdkError({
                    message: 'Expecting string for "TerminateGroupsSessionsRequestBody"',
                });
            }
            return itm;
        })
        : [];
    return { groupIds: groupIds };
}
//# sourceMappingURL=sessionTermination.generated.js.map