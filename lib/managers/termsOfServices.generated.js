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
exports.TermsOfServicesManager = exports.UpdateTermsOfServiceByIdHeaders = exports.GetTermsOfServiceByIdHeaders = exports.CreateTermsOfServiceHeaders = exports.GetTermsOfServiceHeaders = exports.UpdateTermsOfServiceByIdOptionals = exports.GetTermsOfServiceByIdOptionals = exports.CreateTermsOfServiceOptionals = void 0;
exports.serializeGetTermsOfServiceQueryParamsTosTypeField = serializeGetTermsOfServiceQueryParamsTosTypeField;
exports.deserializeGetTermsOfServiceQueryParamsTosTypeField = deserializeGetTermsOfServiceQueryParamsTosTypeField;
exports.serializeCreateTermsOfServiceRequestBodyStatusField = serializeCreateTermsOfServiceRequestBodyStatusField;
exports.deserializeCreateTermsOfServiceRequestBodyStatusField = deserializeCreateTermsOfServiceRequestBodyStatusField;
exports.serializeCreateTermsOfServiceRequestBodyTosTypeField = serializeCreateTermsOfServiceRequestBodyTosTypeField;
exports.deserializeCreateTermsOfServiceRequestBodyTosTypeField = deserializeCreateTermsOfServiceRequestBodyTosTypeField;
exports.serializeCreateTermsOfServiceRequestBody = serializeCreateTermsOfServiceRequestBody;
exports.deserializeCreateTermsOfServiceRequestBody = deserializeCreateTermsOfServiceRequestBody;
exports.serializeUpdateTermsOfServiceByIdRequestBodyStatusField = serializeUpdateTermsOfServiceByIdRequestBodyStatusField;
exports.deserializeUpdateTermsOfServiceByIdRequestBodyStatusField = deserializeUpdateTermsOfServiceByIdRequestBodyStatusField;
exports.serializeUpdateTermsOfServiceByIdRequestBody = serializeUpdateTermsOfServiceByIdRequestBody;
exports.deserializeUpdateTermsOfServiceByIdRequestBody = deserializeUpdateTermsOfServiceByIdRequestBody;
const termsOfServices_generated_js_1 = require("../schemas/termsOfServices.generated.js");
const termsOfService_generated_js_1 = require("../schemas/termsOfService.generated.js");
const network_generated_js_1 = require("../networking/network.generated.js");
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
const fetch_js_1 = require("../networking/fetch.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
class CreateTermsOfServiceOptionals {
    constructor(fields) {
        this.headers = new CreateTermsOfServiceHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.CreateTermsOfServiceOptionals = CreateTermsOfServiceOptionals;
class GetTermsOfServiceByIdOptionals {
    constructor(fields) {
        this.headers = new GetTermsOfServiceByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.GetTermsOfServiceByIdOptionals = GetTermsOfServiceByIdOptionals;
class UpdateTermsOfServiceByIdOptionals {
    constructor(fields) {
        this.headers = new UpdateTermsOfServiceByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.UpdateTermsOfServiceByIdOptionals = UpdateTermsOfServiceByIdOptionals;
class GetTermsOfServiceHeaders {
    constructor(fields) {
        this.extraHeaders = {};
        if (fields.extraHeaders) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.GetTermsOfServiceHeaders = GetTermsOfServiceHeaders;
class CreateTermsOfServiceHeaders {
    constructor(fields) {
        this.extraHeaders = {};
        if (fields.extraHeaders) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.CreateTermsOfServiceHeaders = CreateTermsOfServiceHeaders;
class GetTermsOfServiceByIdHeaders {
    constructor(fields) {
        this.extraHeaders = {};
        if (fields.extraHeaders) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.GetTermsOfServiceByIdHeaders = GetTermsOfServiceByIdHeaders;
class UpdateTermsOfServiceByIdHeaders {
    constructor(fields) {
        this.extraHeaders = {};
        if (fields.extraHeaders) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.UpdateTermsOfServiceByIdHeaders = UpdateTermsOfServiceByIdHeaders;
class TermsOfServicesManager {
    constructor(fields) {
        this.networkSession = new network_generated_js_1.NetworkSession({});
        if (fields.auth) {
            this.auth = fields.auth;
        }
        if (fields.networkSession) {
            this.networkSession = fields.networkSession;
        }
    }
    getTermsOfService() {
        return __awaiter(this, arguments, void 0, function* (queryParams = {}, headersInput = new GetTermsOfServiceHeaders({}), cancellationToken) {
            const headers = new GetTermsOfServiceHeaders({
                extraHeaders: headersInput.extraHeaders,
            });
            const queryParamsMap = (0, utils_js_1.prepareParams)({
                ['tos_type']: (0, utils_js_2.toString)(queryParams.tosType),
            });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = (yield (0, fetch_js_1.fetch)(''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/terms_of_services'), {
                method: 'GET',
                params: queryParamsMap,
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return (0, termsOfServices_generated_js_1.deserializeTermsOfServices)(response.data);
        });
    }
    createTermsOfService(requestBody_1) {
        return __awaiter(this, arguments, void 0, function* (requestBody, optionalsInput = {}) {
            const optionals = new CreateTermsOfServiceOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = (yield (0, fetch_js_1.fetch)(''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/terms_of_services'), {
                method: 'POST',
                headers: headersMap,
                data: serializeCreateTermsOfServiceRequestBody(requestBody),
                contentType: 'application/json',
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return (0, termsOfService_generated_js_1.deserializeTermsOfService)(response.data);
        });
    }
    getTermsOfServiceById(termsOfServiceId_1) {
        return __awaiter(this, arguments, void 0, function* (termsOfServiceId, optionalsInput = {}) {
            const optionals = new GetTermsOfServiceByIdOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = (yield (0, fetch_js_1.fetch)(''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/terms_of_services/', (0, utils_js_2.toString)(termsOfServiceId)), {
                method: 'GET',
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return (0, termsOfService_generated_js_1.deserializeTermsOfService)(response.data);
        });
    }
    updateTermsOfServiceById(termsOfServiceId_1, requestBody_1) {
        return __awaiter(this, arguments, void 0, function* (termsOfServiceId, requestBody, optionalsInput = {}) {
            const optionals = new UpdateTermsOfServiceByIdOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = (yield (0, fetch_js_1.fetch)(''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/terms_of_services/', (0, utils_js_2.toString)(termsOfServiceId)), {
                method: 'PUT',
                headers: headersMap,
                data: serializeUpdateTermsOfServiceByIdRequestBody(requestBody),
                contentType: 'application/json',
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return (0, termsOfService_generated_js_1.deserializeTermsOfService)(response.data);
        });
    }
}
exports.TermsOfServicesManager = TermsOfServicesManager;
function serializeGetTermsOfServiceQueryParamsTosTypeField(val) {
    return val;
}
function deserializeGetTermsOfServiceQueryParamsTosTypeField(val) {
    if (val == 'external') {
        return val;
    }
    if (val == 'managed') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize GetTermsOfServiceQueryParamsTosTypeField",
    });
}
function serializeCreateTermsOfServiceRequestBodyStatusField(val) {
    return val;
}
function deserializeCreateTermsOfServiceRequestBodyStatusField(val) {
    if (val == 'enabled') {
        return val;
    }
    if (val == 'disabled') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize CreateTermsOfServiceRequestBodyStatusField",
    });
}
function serializeCreateTermsOfServiceRequestBodyTosTypeField(val) {
    return val;
}
function deserializeCreateTermsOfServiceRequestBodyTosTypeField(val) {
    if (val == 'external') {
        return val;
    }
    if (val == 'managed') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize CreateTermsOfServiceRequestBodyTosTypeField",
    });
}
function serializeCreateTermsOfServiceRequestBody(val) {
    return {
        ['status']: serializeCreateTermsOfServiceRequestBodyStatusField(val.status),
        ['tos_type']: val.tosType == void 0
            ? void 0
            : serializeCreateTermsOfServiceRequestBodyTosTypeField(val.tosType),
        ['text']: val.text,
    };
}
function deserializeCreateTermsOfServiceRequestBody(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "CreateTermsOfServiceRequestBody"',
        });
    }
    if (val.status == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "status" of type "CreateTermsOfServiceRequestBody" to be defined',
        });
    }
    const status = deserializeCreateTermsOfServiceRequestBodyStatusField(val.status);
    const tosType = val.tos_type == void 0
        ? void 0
        : deserializeCreateTermsOfServiceRequestBodyTosTypeField(val.tos_type);
    if (val.text == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "text" of type "CreateTermsOfServiceRequestBody" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.text)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "text" of type "CreateTermsOfServiceRequestBody"',
        });
    }
    const text = val.text;
    return {
        status: status,
        tosType: tosType,
        text: text,
    };
}
function serializeUpdateTermsOfServiceByIdRequestBodyStatusField(val) {
    return val;
}
function deserializeUpdateTermsOfServiceByIdRequestBodyStatusField(val) {
    if (val == 'enabled') {
        return val;
    }
    if (val == 'disabled') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize UpdateTermsOfServiceByIdRequestBodyStatusField",
    });
}
function serializeUpdateTermsOfServiceByIdRequestBody(val) {
    return {
        ['status']: serializeUpdateTermsOfServiceByIdRequestBodyStatusField(val.status),
        ['text']: val.text,
    };
}
function deserializeUpdateTermsOfServiceByIdRequestBody(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "UpdateTermsOfServiceByIdRequestBody"',
        });
    }
    if (val.status == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "status" of type "UpdateTermsOfServiceByIdRequestBody" to be defined',
        });
    }
    const status = deserializeUpdateTermsOfServiceByIdRequestBodyStatusField(val.status);
    if (val.text == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "text" of type "UpdateTermsOfServiceByIdRequestBody" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.text)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "text" of type "UpdateTermsOfServiceByIdRequestBody"',
        });
    }
    const text = val.text;
    return {
        status: status,
        text: text,
    };
}
//# sourceMappingURL=termsOfServices.generated.js.map