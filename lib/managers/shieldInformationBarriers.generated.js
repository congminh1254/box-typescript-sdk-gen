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
exports.ShieldInformationBarriersManager = exports.CreateShieldInformationBarrierHeaders = exports.GetShieldInformationBarriersHeaders = exports.UpdateShieldInformationBarrierStatusHeaders = exports.GetShieldInformationBarrierByIdHeaders = exports.CreateShieldInformationBarrierOptionals = exports.UpdateShieldInformationBarrierStatusOptionals = exports.GetShieldInformationBarrierByIdOptionals = void 0;
exports.serializeUpdateShieldInformationBarrierStatusRequestBodyStatusField = serializeUpdateShieldInformationBarrierStatusRequestBodyStatusField;
exports.deserializeUpdateShieldInformationBarrierStatusRequestBodyStatusField = deserializeUpdateShieldInformationBarrierStatusRequestBodyStatusField;
exports.serializeUpdateShieldInformationBarrierStatusRequestBody = serializeUpdateShieldInformationBarrierStatusRequestBody;
exports.deserializeUpdateShieldInformationBarrierStatusRequestBody = deserializeUpdateShieldInformationBarrierStatusRequestBody;
exports.serializeCreateShieldInformationBarrierRequestBody = serializeCreateShieldInformationBarrierRequestBody;
exports.deserializeCreateShieldInformationBarrierRequestBody = deserializeCreateShieldInformationBarrierRequestBody;
const shieldInformationBarrier_generated_js_1 = require("../schemas/shieldInformationBarrier.generated.js");
const shieldInformationBarriers_generated_js_1 = require("../schemas/shieldInformationBarriers.generated.js");
const enterpriseBase_generated_js_1 = require("../schemas/enterpriseBase.generated.js");
const enterpriseBase_generated_js_2 = require("../schemas/enterpriseBase.generated.js");
const network_generated_js_1 = require("../networking/network.generated.js");
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
const fetch_js_1 = require("../networking/fetch.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
class GetShieldInformationBarrierByIdOptionals {
    constructor(fields) {
        this.headers = new GetShieldInformationBarrierByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.GetShieldInformationBarrierByIdOptionals = GetShieldInformationBarrierByIdOptionals;
class UpdateShieldInformationBarrierStatusOptionals {
    constructor(fields) {
        this.headers = new UpdateShieldInformationBarrierStatusHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.UpdateShieldInformationBarrierStatusOptionals = UpdateShieldInformationBarrierStatusOptionals;
class CreateShieldInformationBarrierOptionals {
    constructor(fields) {
        this.headers = new CreateShieldInformationBarrierHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.CreateShieldInformationBarrierOptionals = CreateShieldInformationBarrierOptionals;
class GetShieldInformationBarrierByIdHeaders {
    constructor(fields) {
        this.extraHeaders = {};
        if (fields.extraHeaders) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.GetShieldInformationBarrierByIdHeaders = GetShieldInformationBarrierByIdHeaders;
class UpdateShieldInformationBarrierStatusHeaders {
    constructor(fields) {
        this.extraHeaders = {};
        if (fields.extraHeaders) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.UpdateShieldInformationBarrierStatusHeaders = UpdateShieldInformationBarrierStatusHeaders;
class GetShieldInformationBarriersHeaders {
    constructor(fields) {
        this.extraHeaders = {};
        if (fields.extraHeaders) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.GetShieldInformationBarriersHeaders = GetShieldInformationBarriersHeaders;
class CreateShieldInformationBarrierHeaders {
    constructor(fields) {
        this.extraHeaders = {};
        if (fields.extraHeaders) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.CreateShieldInformationBarrierHeaders = CreateShieldInformationBarrierHeaders;
class ShieldInformationBarriersManager {
    constructor(fields) {
        this.networkSession = new network_generated_js_1.NetworkSession({});
        if (fields.auth) {
            this.auth = fields.auth;
        }
        if (fields.networkSession) {
            this.networkSession = fields.networkSession;
        }
    }
    getShieldInformationBarrierById(shieldInformationBarrierId_1) {
        return __awaiter(this, arguments, void 0, function* (shieldInformationBarrierId, optionalsInput = {}) {
            const optionals = new GetShieldInformationBarrierByIdOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = (yield (0, fetch_js_1.fetch)(''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/shield_information_barriers/', (0, utils_js_2.toString)(shieldInformationBarrierId)), {
                method: 'GET',
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return (0, shieldInformationBarrier_generated_js_1.deserializeShieldInformationBarrier)(response.data);
        });
    }
    updateShieldInformationBarrierStatus(requestBody_1) {
        return __awaiter(this, arguments, void 0, function* (requestBody, optionalsInput = {}) {
            const optionals = new UpdateShieldInformationBarrierStatusOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = (yield (0, fetch_js_1.fetch)(''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/shield_information_barriers/change_status'), {
                method: 'POST',
                headers: headersMap,
                data: serializeUpdateShieldInformationBarrierStatusRequestBody(requestBody),
                contentType: 'application/json',
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return (0, shieldInformationBarrier_generated_js_1.deserializeShieldInformationBarrier)(response.data);
        });
    }
    getShieldInformationBarriers() {
        return __awaiter(this, arguments, void 0, function* (queryParams = {}, headersInput = new GetShieldInformationBarriersHeaders({}), cancellationToken) {
            const headers = new GetShieldInformationBarriersHeaders({
                extraHeaders: headersInput.extraHeaders,
            });
            const queryParamsMap = (0, utils_js_1.prepareParams)({
                ['marker']: (0, utils_js_2.toString)(queryParams.marker),
                ['limit']: (0, utils_js_2.toString)(queryParams.limit),
            });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = (yield (0, fetch_js_1.fetch)(''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/shield_information_barriers'), {
                method: 'GET',
                params: queryParamsMap,
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return (0, shieldInformationBarriers_generated_js_1.deserializeShieldInformationBarriers)(response.data);
        });
    }
    createShieldInformationBarrier(requestBody_1) {
        return __awaiter(this, arguments, void 0, function* (requestBody, optionalsInput = {}) {
            const optionals = new CreateShieldInformationBarrierOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = (yield (0, fetch_js_1.fetch)(''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/shield_information_barriers'), {
                method: 'POST',
                headers: headersMap,
                data: serializeCreateShieldInformationBarrierRequestBody(requestBody),
                contentType: 'application/json',
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return (0, shieldInformationBarrier_generated_js_1.deserializeShieldInformationBarrier)(response.data);
        });
    }
}
exports.ShieldInformationBarriersManager = ShieldInformationBarriersManager;
function serializeUpdateShieldInformationBarrierStatusRequestBodyStatusField(val) {
    return val;
}
function deserializeUpdateShieldInformationBarrierStatusRequestBodyStatusField(val) {
    if (val == 'pending') {
        return val;
    }
    if (val == 'disabled') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize UpdateShieldInformationBarrierStatusRequestBodyStatusField",
    });
}
function serializeUpdateShieldInformationBarrierStatusRequestBody(val) {
    return {
        ['id']: val.id,
        ['status']: serializeUpdateShieldInformationBarrierStatusRequestBodyStatusField(val.status),
    };
}
function deserializeUpdateShieldInformationBarrierStatusRequestBody(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "UpdateShieldInformationBarrierStatusRequestBody"',
        });
    }
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "UpdateShieldInformationBarrierStatusRequestBody" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "UpdateShieldInformationBarrierStatusRequestBody"',
        });
    }
    const id = val.id;
    if (val.status == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "status" of type "UpdateShieldInformationBarrierStatusRequestBody" to be defined',
        });
    }
    const status = deserializeUpdateShieldInformationBarrierStatusRequestBodyStatusField(val.status);
    return {
        id: id,
        status: status,
    };
}
function serializeCreateShieldInformationBarrierRequestBody(val) {
    return { ['enterprise']: (0, enterpriseBase_generated_js_1.serializeEnterpriseBase)(val.enterprise) };
}
function deserializeCreateShieldInformationBarrierRequestBody(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "CreateShieldInformationBarrierRequestBody"',
        });
    }
    if (val.enterprise == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "enterprise" of type "CreateShieldInformationBarrierRequestBody" to be defined',
        });
    }
    const enterprise = (0, enterpriseBase_generated_js_2.deserializeEnterpriseBase)(val.enterprise);
    return {
        enterprise: enterprise,
    };
}
//# sourceMappingURL=shieldInformationBarriers.generated.js.map