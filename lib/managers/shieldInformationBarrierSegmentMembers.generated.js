var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { deserializeShieldInformationBarrierSegmentMember } from '../schemas/shieldInformationBarrierSegmentMember.generated.js';
import { deserializeShieldInformationBarrierSegmentMembers } from '../schemas/shieldInformationBarrierSegmentMembers.generated.js';
import { serializeShieldInformationBarrierBase } from '../schemas/shieldInformationBarrierBase.generated.js';
import { deserializeShieldInformationBarrierBase } from '../schemas/shieldInformationBarrierBase.generated.js';
import { serializeUserBase } from '../schemas/userBase.generated.js';
import { deserializeUserBase } from '../schemas/userBase.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { NetworkSession } from '../networking/network.generated.js';
import { FetchOptions } from '../networking/fetchOptions.generated.js';
import { prepareParams } from '../internal/utils.js';
import { toString } from '../internal/utils.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class GetShieldInformationBarrierSegmentMemberByIdOptionals {
    constructor(fields) {
        this.headers = new GetShieldInformationBarrierSegmentMemberByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class DeleteShieldInformationBarrierSegmentMemberByIdOptionals {
    constructor(fields) {
        this.headers = new DeleteShieldInformationBarrierSegmentMemberByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class GetShieldInformationBarrierSegmentMembersOptionals {
    constructor(fields) {
        this.headers = new GetShieldInformationBarrierSegmentMembersHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class CreateShieldInformationBarrierSegmentMemberOptionals {
    constructor(fields) {
        this.headers = new CreateShieldInformationBarrierSegmentMemberHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class GetShieldInformationBarrierSegmentMemberByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class DeleteShieldInformationBarrierSegmentMemberByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class GetShieldInformationBarrierSegmentMembersHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class CreateShieldInformationBarrierSegmentMemberHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class ShieldInformationBarrierSegmentMembersManager {
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
       * Retrieves a shield information barrier
       * segment member by its ID.
       * @param {string} shieldInformationBarrierSegmentMemberId The ID of the shield information barrier segment Member.
      Example: "7815"
       * @param {GetShieldInformationBarrierSegmentMemberByIdOptionalsInput} optionalsInput
       * @returns {Promise<ShieldInformationBarrierSegmentMember>}
       */
    getShieldInformationBarrierSegmentMemberById(shieldInformationBarrierSegmentMemberId_1) {
        return __awaiter(this, arguments, void 0, function* (shieldInformationBarrierSegmentMemberId, optionalsInput = {}) {
            const optionals = new GetShieldInformationBarrierSegmentMemberByIdOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = prepareParams(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/shield_information_barrier_segment_members/', toString(shieldInformationBarrierSegmentMemberId)),
                method: 'GET',
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, deserializeShieldInformationBarrierSegmentMember(response.data)), { rawData: response.data });
        });
    }
    /**
       * Deletes a shield information barrier
       * segment member based on provided ID.
       * @param {string} shieldInformationBarrierSegmentMemberId The ID of the shield information barrier segment Member.
      Example: "7815"
       * @param {DeleteShieldInformationBarrierSegmentMemberByIdOptionalsInput} optionalsInput
       * @returns {Promise<undefined>}
       */
    deleteShieldInformationBarrierSegmentMemberById(shieldInformationBarrierSegmentMemberId_1) {
        return __awaiter(this, arguments, void 0, function* (shieldInformationBarrierSegmentMemberId, optionalsInput = {}) {
            const optionals = new DeleteShieldInformationBarrierSegmentMemberByIdOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = prepareParams(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/shield_information_barrier_segment_members/', toString(shieldInformationBarrierSegmentMemberId)),
                method: 'DELETE',
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
     * Lists shield information barrier segment members
     * based on provided segment IDs.
     * @param {GetShieldInformationBarrierSegmentMembersQueryParams} queryParams Query parameters of getShieldInformationBarrierSegmentMembers method
     * @param {GetShieldInformationBarrierSegmentMembersOptionalsInput} optionalsInput
     * @returns {Promise<ShieldInformationBarrierSegmentMembers>}
     */
    getShieldInformationBarrierSegmentMembers(queryParams_1) {
        return __awaiter(this, arguments, void 0, function* (queryParams, optionalsInput = {}) {
            const optionals = new GetShieldInformationBarrierSegmentMembersOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const queryParamsMap = prepareParams({
                ['shield_information_barrier_segment_id']: toString(queryParams.shieldInformationBarrierSegmentId),
                ['marker']: toString(queryParams.marker),
                ['limit']: toString(queryParams.limit),
            });
            const headersMap = prepareParams(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/shield_information_barrier_segment_members'),
                method: 'GET',
                params: queryParamsMap,
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, deserializeShieldInformationBarrierSegmentMembers(response.data)), { rawData: response.data });
        });
    }
    /**
     * Creates a new shield information barrier segment member.
     * @param {CreateShieldInformationBarrierSegmentMemberRequestBody} requestBody Request body of createShieldInformationBarrierSegmentMember method
     * @param {CreateShieldInformationBarrierSegmentMemberOptionalsInput} optionalsInput
     * @returns {Promise<ShieldInformationBarrierSegmentMember>}
     */
    createShieldInformationBarrierSegmentMember(requestBody_1) {
        return __awaiter(this, arguments, void 0, function* (requestBody, optionalsInput = {}) {
            const optionals = new CreateShieldInformationBarrierSegmentMemberOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = prepareParams(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/shield_information_barrier_segment_members'),
                method: 'POST',
                headers: headersMap,
                data: serializeCreateShieldInformationBarrierSegmentMemberRequestBody(requestBody),
                contentType: 'application/json',
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, deserializeShieldInformationBarrierSegmentMember(response.data)), { rawData: response.data });
        });
    }
}
export function serializeCreateShieldInformationBarrierSegmentMemberRequestBodyTypeField(val) {
    return val;
}
export function deserializeCreateShieldInformationBarrierSegmentMemberRequestBodyTypeField(val) {
    if (val == 'shield_information_barrier_segment_member') {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize CreateShieldInformationBarrierSegmentMemberRequestBodyTypeField",
    });
}
export function serializeCreateShieldInformationBarrierSegmentMemberRequestBodyShieldInformationBarrierSegmentTypeField(val) {
    return val;
}
export function deserializeCreateShieldInformationBarrierSegmentMemberRequestBodyShieldInformationBarrierSegmentTypeField(val) {
    if (val == 'shield_information_barrier_segment') {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize CreateShieldInformationBarrierSegmentMemberRequestBodyShieldInformationBarrierSegmentTypeField",
    });
}
export function serializeCreateShieldInformationBarrierSegmentMemberRequestBodyShieldInformationBarrierSegmentField(val) {
    return {
        ['id']: val.id,
        ['type']: val.type == void 0
            ? val.type
            : serializeCreateShieldInformationBarrierSegmentMemberRequestBodyShieldInformationBarrierSegmentTypeField(val.type),
    };
}
export function deserializeCreateShieldInformationBarrierSegmentMemberRequestBodyShieldInformationBarrierSegmentField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "CreateShieldInformationBarrierSegmentMemberRequestBodyShieldInformationBarrierSegmentField"',
        });
    }
    if (!(val.id == void 0) && !sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "CreateShieldInformationBarrierSegmentMemberRequestBodyShieldInformationBarrierSegmentField"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    const type = val.type == void 0
        ? void 0
        : deserializeCreateShieldInformationBarrierSegmentMemberRequestBodyShieldInformationBarrierSegmentTypeField(val.type);
    return {
        id: id,
        type: type,
    };
}
export function serializeCreateShieldInformationBarrierSegmentMemberRequestBody(val) {
    return {
        ['type']: val.type == void 0
            ? val.type
            : serializeCreateShieldInformationBarrierSegmentMemberRequestBodyTypeField(val.type),
        ['shield_information_barrier']: val.shieldInformationBarrier == void 0
            ? val.shieldInformationBarrier
            : serializeShieldInformationBarrierBase(val.shieldInformationBarrier),
        ['shield_information_barrier_segment']: serializeCreateShieldInformationBarrierSegmentMemberRequestBodyShieldInformationBarrierSegmentField(val.shieldInformationBarrierSegment),
        ['user']: serializeUserBase(val.user),
    };
}
export function deserializeCreateShieldInformationBarrierSegmentMemberRequestBody(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "CreateShieldInformationBarrierSegmentMemberRequestBody"',
        });
    }
    const type = val.type == void 0
        ? void 0
        : deserializeCreateShieldInformationBarrierSegmentMemberRequestBodyTypeField(val.type);
    const shieldInformationBarrier = val.shield_information_barrier == void 0
        ? void 0
        : deserializeShieldInformationBarrierBase(val.shield_information_barrier);
    if (val.shield_information_barrier_segment == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "shield_information_barrier_segment" of type "CreateShieldInformationBarrierSegmentMemberRequestBody" to be defined',
        });
    }
    const shieldInformationBarrierSegment = deserializeCreateShieldInformationBarrierSegmentMemberRequestBodyShieldInformationBarrierSegmentField(val.shield_information_barrier_segment);
    if (val.user == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "user" of type "CreateShieldInformationBarrierSegmentMemberRequestBody" to be defined',
        });
    }
    const user = deserializeUserBase(val.user);
    return {
        type: type,
        shieldInformationBarrier: shieldInformationBarrier,
        shieldInformationBarrierSegment: shieldInformationBarrierSegment,
        user: user,
    };
}
//# sourceMappingURL=shieldInformationBarrierSegmentMembers.generated.js.map