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
exports.DevicePinnersManager = exports.GetEnterpriseDevicePinnersHeaders = exports.DeleteDevicePinnerByIdHeaders = exports.GetDevicePinnerByIdHeaders = exports.GetEnterpriseDevicePinnersOptionals = exports.DeleteDevicePinnerByIdOptionals = exports.GetDevicePinnerByIdOptionals = void 0;
exports.serializeGetEnterpriseDevicePinnersQueryParamsDirectionField = serializeGetEnterpriseDevicePinnersQueryParamsDirectionField;
exports.deserializeGetEnterpriseDevicePinnersQueryParamsDirectionField = deserializeGetEnterpriseDevicePinnersQueryParamsDirectionField;
const devicePinner_generated_js_1 = require("../schemas/devicePinner.generated.js");
const devicePinners_generated_js_1 = require("../schemas/devicePinners.generated.js");
const network_generated_js_1 = require("../networking/network.generated.js");
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
const fetch_js_1 = require("../networking/fetch.js");
const errors_js_1 = require("../box/errors.js");
class GetDevicePinnerByIdOptionals {
    constructor(fields) {
        this.headers = new GetDevicePinnerByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.GetDevicePinnerByIdOptionals = GetDevicePinnerByIdOptionals;
class DeleteDevicePinnerByIdOptionals {
    constructor(fields) {
        this.headers = new DeleteDevicePinnerByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.DeleteDevicePinnerByIdOptionals = DeleteDevicePinnerByIdOptionals;
class GetEnterpriseDevicePinnersOptionals {
    constructor(fields) {
        this.queryParams = {};
        this.headers = new GetEnterpriseDevicePinnersHeaders({});
        this.cancellationToken = void 0;
        if (fields.queryParams) {
            this.queryParams = fields.queryParams;
        }
        if (fields.headers) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.GetEnterpriseDevicePinnersOptionals = GetEnterpriseDevicePinnersOptionals;
class GetDevicePinnerByIdHeaders {
    constructor(fields) {
        this.extraHeaders = {};
        if (fields.extraHeaders) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.GetDevicePinnerByIdHeaders = GetDevicePinnerByIdHeaders;
class DeleteDevicePinnerByIdHeaders {
    constructor(fields) {
        this.extraHeaders = {};
        if (fields.extraHeaders) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.DeleteDevicePinnerByIdHeaders = DeleteDevicePinnerByIdHeaders;
class GetEnterpriseDevicePinnersHeaders {
    constructor(fields) {
        this.extraHeaders = {};
        if (fields.extraHeaders) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.GetEnterpriseDevicePinnersHeaders = GetEnterpriseDevicePinnersHeaders;
class DevicePinnersManager {
    constructor(fields) {
        this.networkSession = new network_generated_js_1.NetworkSession({});
        if (fields.auth) {
            this.auth = fields.auth;
        }
        if (fields.networkSession) {
            this.networkSession = fields.networkSession;
        }
    }
    getDevicePinnerById(devicePinnerId_1) {
        return __awaiter(this, arguments, void 0, function* (devicePinnerId, optionalsInput = {}) {
            const optionals = new GetDevicePinnerByIdOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = (yield (0, fetch_js_1.fetch)(''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/device_pinners/', (0, utils_js_2.toString)(devicePinnerId)), {
                method: 'GET',
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return (0, devicePinner_generated_js_1.deserializeDevicePinner)(response.data);
        });
    }
    deleteDevicePinnerById(devicePinnerId_1) {
        return __awaiter(this, arguments, void 0, function* (devicePinnerId, optionalsInput = {}) {
            const optionals = new DeleteDevicePinnerByIdOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = (yield (0, fetch_js_1.fetch)(''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/device_pinners/', (0, utils_js_2.toString)(devicePinnerId)), {
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
    getEnterpriseDevicePinners(enterpriseId_1) {
        return __awaiter(this, arguments, void 0, function* (enterpriseId, optionalsInput = {}) {
            const optionals = new GetEnterpriseDevicePinnersOptionals({
                queryParams: optionalsInput.queryParams,
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const queryParams = optionals.queryParams;
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const queryParamsMap = (0, utils_js_1.prepareParams)({
                ['marker']: (0, utils_js_2.toString)(queryParams.marker),
                ['limit']: (0, utils_js_2.toString)(queryParams.limit),
                ['direction']: (0, utils_js_2.toString)(queryParams.direction),
            });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = (yield (0, fetch_js_1.fetch)(''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/enterprises/', (0, utils_js_2.toString)(enterpriseId), '/device_pinners'), {
                method: 'GET',
                params: queryParamsMap,
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return (0, devicePinners_generated_js_1.deserializeDevicePinners)(response.data);
        });
    }
}
exports.DevicePinnersManager = DevicePinnersManager;
function serializeGetEnterpriseDevicePinnersQueryParamsDirectionField(val) {
    return val;
}
function deserializeGetEnterpriseDevicePinnersQueryParamsDirectionField(val) {
    if (val == 'ASC') {
        return val;
    }
    if (val == 'DESC') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize GetEnterpriseDevicePinnersQueryParamsDirectionField",
    });
}
//# sourceMappingURL=devicePinners.generated.js.map