"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShieldInformationBarrierSegmentsManager = exports.CreateShieldInformationBarrierSegmentHeaders = exports.GetShieldInformationBarrierSegmentsHeaders = exports.DeleteShieldInformationBarrierSegmentByIdHeaders = exports.UpdateShieldInformationBarrierSegmentByIdHeaders = exports.GetShieldInformationBarrierSegmentByIdHeaders = exports.CreateShieldInformationBarrierSegmentOptionals = exports.GetShieldInformationBarrierSegmentsOptionals = exports.DeleteShieldInformationBarrierSegmentByIdOptionals = exports.UpdateShieldInformationBarrierSegmentByIdOptionals = exports.GetShieldInformationBarrierSegmentByIdOptionals = void 0;
exports.serializeUpdateShieldInformationBarrierSegmentByIdRequestBody = serializeUpdateShieldInformationBarrierSegmentByIdRequestBody;
exports.deserializeUpdateShieldInformationBarrierSegmentByIdRequestBody = deserializeUpdateShieldInformationBarrierSegmentByIdRequestBody;
exports.serializeCreateShieldInformationBarrierSegmentRequestBody = serializeCreateShieldInformationBarrierSegmentRequestBody;
exports.deserializeCreateShieldInformationBarrierSegmentRequestBody = deserializeCreateShieldInformationBarrierSegmentRequestBody;
const shieldInformationBarrierSegment_generated_js_1 = require("../schemas/shieldInformationBarrierSegment.generated.js");
const shieldInformationBarrierSegments_generated_js_1 = require("../schemas/shieldInformationBarrierSegments.generated.js");
const shieldInformationBarrierBase_generated_js_1 = require("../schemas/shieldInformationBarrierBase.generated.js");
const shieldInformationBarrierBase_generated_js_2 = require("../schemas/shieldInformationBarrierBase.generated.js");
const network_generated_js_1 = require("../networking/network.generated.js");
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
const fetch_js_1 = require("../networking/fetch.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
class GetShieldInformationBarrierSegmentByIdOptionals {
    constructor(fields) {
        this.headers = new GetShieldInformationBarrierSegmentByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.GetShieldInformationBarrierSegmentByIdOptionals = GetShieldInformationBarrierSegmentByIdOptionals;
class UpdateShieldInformationBarrierSegmentByIdOptionals {
    constructor(fields) {
        this.requestBody = {};
        this.headers = new UpdateShieldInformationBarrierSegmentByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.requestBody) {
            this.requestBody = fields.requestBody;
        }
        if (fields.headers) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.UpdateShieldInformationBarrierSegmentByIdOptionals = UpdateShieldInformationBarrierSegmentByIdOptionals;
class DeleteShieldInformationBarrierSegmentByIdOptionals {
    constructor(fields) {
        this.headers = new DeleteShieldInformationBarrierSegmentByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.DeleteShieldInformationBarrierSegmentByIdOptionals = DeleteShieldInformationBarrierSegmentByIdOptionals;
class GetShieldInformationBarrierSegmentsOptionals {
    constructor(fields) {
        this.headers = new GetShieldInformationBarrierSegmentsHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.GetShieldInformationBarrierSegmentsOptionals = GetShieldInformationBarrierSegmentsOptionals;
class CreateShieldInformationBarrierSegmentOptionals {
    constructor(fields) {
        this.headers = new CreateShieldInformationBarrierSegmentHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.CreateShieldInformationBarrierSegmentOptionals = CreateShieldInformationBarrierSegmentOptionals;
class GetShieldInformationBarrierSegmentByIdHeaders {
    constructor(fields) {
        this.extraHeaders = {};
        if (fields.extraHeaders) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.GetShieldInformationBarrierSegmentByIdHeaders = GetShieldInformationBarrierSegmentByIdHeaders;
class UpdateShieldInformationBarrierSegmentByIdHeaders {
    constructor(fields) {
        this.extraHeaders = {};
        if (fields.extraHeaders) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.UpdateShieldInformationBarrierSegmentByIdHeaders = UpdateShieldInformationBarrierSegmentByIdHeaders;
class DeleteShieldInformationBarrierSegmentByIdHeaders {
    constructor(fields) {
        this.extraHeaders = {};
        if (fields.extraHeaders) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.DeleteShieldInformationBarrierSegmentByIdHeaders = DeleteShieldInformationBarrierSegmentByIdHeaders;
class GetShieldInformationBarrierSegmentsHeaders {
    constructor(fields) {
        this.extraHeaders = {};
        if (fields.extraHeaders) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.GetShieldInformationBarrierSegmentsHeaders = GetShieldInformationBarrierSegmentsHeaders;
class CreateShieldInformationBarrierSegmentHeaders {
    constructor(fields) {
        this.extraHeaders = {};
        if (fields.extraHeaders) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.CreateShieldInformationBarrierSegmentHeaders = CreateShieldInformationBarrierSegmentHeaders;
class ShieldInformationBarrierSegmentsManager {
    constructor(fields) {
        this.networkSession = new network_generated_js_1.NetworkSession({});
        if (fields.auth) {
            this.auth = fields.auth;
        }
        if (fields.networkSession) {
            this.networkSession = fields.networkSession;
        }
    }
    getShieldInformationBarrierSegmentById(shieldInformationBarrierSegmentId_1) {
        return __awaiter(this, arguments, void 0, function* (shieldInformationBarrierSegmentId, optionalsInput = {}) {
            const optionals = new GetShieldInformationBarrierSegmentByIdOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = (yield (0, fetch_js_1.fetch)(''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/shield_information_barrier_segments/', (0, utils_js_2.toString)(shieldInformationBarrierSegmentId)), {
                method: 'GET',
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return (0, shieldInformationBarrierSegment_generated_js_1.deserializeShieldInformationBarrierSegment)(response.data);
        });
    }
    updateShieldInformationBarrierSegmentById(shieldInformationBarrierSegmentId_1) {
        return __awaiter(this, arguments, void 0, function* (shieldInformationBarrierSegmentId, optionalsInput = {}) {
            const optionals = new UpdateShieldInformationBarrierSegmentByIdOptionals({
                requestBody: optionalsInput.requestBody,
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const requestBody = optionals.requestBody;
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = (yield (0, fetch_js_1.fetch)(''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/shield_information_barrier_segments/', (0, utils_js_2.toString)(shieldInformationBarrierSegmentId)), {
                method: 'PUT',
                headers: headersMap,
                data: serializeUpdateShieldInformationBarrierSegmentByIdRequestBody(requestBody),
                contentType: 'application/json',
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return (0, shieldInformationBarrierSegment_generated_js_1.deserializeShieldInformationBarrierSegment)(response.data);
        });
    }
    deleteShieldInformationBarrierSegmentById(shieldInformationBarrierSegmentId_1) {
        return __awaiter(this, arguments, void 0, function* (shieldInformationBarrierSegmentId, optionalsInput = {}) {
            const optionals = new DeleteShieldInformationBarrierSegmentByIdOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = (yield (0, fetch_js_1.fetch)(''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/shield_information_barrier_segments/', (0, utils_js_2.toString)(shieldInformationBarrierSegmentId)), {
                method: 'DELETE',
                headers: headersMap,
                responseFormat: void 0,
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return void 0;
        });
    }
    getShieldInformationBarrierSegments(queryParams_1) {
        return __awaiter(this, arguments, void 0, function* (queryParams, optionalsInput = {}) {
            const optionals = new GetShieldInformationBarrierSegmentsOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const queryParamsMap = (0, utils_js_1.prepareParams)({
                ['shield_information_barrier_id']: (0, utils_js_2.toString)(queryParams.shieldInformationBarrierId),
                ['marker']: (0, utils_js_2.toString)(queryParams.marker),
                ['limit']: (0, utils_js_2.toString)(queryParams.limit),
            });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = (yield (0, fetch_js_1.fetch)(''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/shield_information_barrier_segments'), {
                method: 'GET',
                params: queryParamsMap,
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return (0, shieldInformationBarrierSegments_generated_js_1.deserializeShieldInformationBarrierSegments)(response.data);
        });
    }
    createShieldInformationBarrierSegment(requestBody_1) {
        return __awaiter(this, arguments, void 0, function* (requestBody, optionalsInput = {}) {
            const optionals = new CreateShieldInformationBarrierSegmentOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = (yield (0, fetch_js_1.fetch)(''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/shield_information_barrier_segments'), {
                method: 'POST',
                headers: headersMap,
                data: serializeCreateShieldInformationBarrierSegmentRequestBody(requestBody),
                contentType: 'application/json',
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return (0, shieldInformationBarrierSegment_generated_js_1.deserializeShieldInformationBarrierSegment)(response.data);
        });
    }
}
exports.ShieldInformationBarrierSegmentsManager = ShieldInformationBarrierSegmentsManager;
function serializeUpdateShieldInformationBarrierSegmentByIdRequestBody(val) {
    return {
        ['name']: val.name == void 0 ? void 0 : val.name,
        ['description']: val.description == void 0 ? void 0 : val.description,
    };
}
function deserializeUpdateShieldInformationBarrierSegmentByIdRequestBody(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "UpdateShieldInformationBarrierSegmentByIdRequestBody"',
        });
    }
    if (!(val.name == void 0) && !(0, json_js_1.sdIsString)(val.name)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "name" of type "UpdateShieldInformationBarrierSegmentByIdRequestBody"',
        });
    }
    const name = val.name == void 0 ? void 0 : val.name;
    if (!(val.description == void 0) && !(0, json_js_1.sdIsString)(val.description)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "description" of type "UpdateShieldInformationBarrierSegmentByIdRequestBody"',
        });
    }
    const description = val.description == void 0 ? void 0 : val.description;
    return {
        name: name,
        description: description,
    };
}
function serializeCreateShieldInformationBarrierSegmentRequestBody(val) {
    return {
        ['shield_information_barrier']: (0, shieldInformationBarrierBase_generated_js_1.serializeShieldInformationBarrierBase)(val.shieldInformationBarrier),
        ['name']: val.name,
        ['description']: val.description == void 0 ? void 0 : val.description,
    };
}
function deserializeCreateShieldInformationBarrierSegmentRequestBody(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "CreateShieldInformationBarrierSegmentRequestBody"',
        });
    }
    if (val.shield_information_barrier == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "shield_information_barrier" of type "CreateShieldInformationBarrierSegmentRequestBody" to be defined',
        });
    }
    const shieldInformationBarrier = (0, shieldInformationBarrierBase_generated_js_2.deserializeShieldInformationBarrierBase)(val.shield_information_barrier);
    if (val.name == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "name" of type "CreateShieldInformationBarrierSegmentRequestBody" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.name)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "name" of type "CreateShieldInformationBarrierSegmentRequestBody"',
        });
    }
    const name = val.name;
    if (!(val.description == void 0) && !(0, json_js_1.sdIsString)(val.description)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "description" of type "CreateShieldInformationBarrierSegmentRequestBody"',
        });
    }
    const description = val.description == void 0 ? void 0 : val.description;
    return {
        shieldInformationBarrier: shieldInformationBarrier,
        name: name,
        description: description,
    };
}
//# sourceMappingURL=shieldInformationBarrierSegments.generated.js.map