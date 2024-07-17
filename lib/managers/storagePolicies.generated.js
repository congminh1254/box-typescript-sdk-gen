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
exports.StoragePoliciesManager = exports.GetStoragePolicyByIdHeaders = exports.GetStoragePoliciesHeaders = exports.GetStoragePolicyByIdOptionals = void 0;
const storagePolicies_generated_js_1 = require("../schemas/storagePolicies.generated.js");
const storagePolicy_generated_js_1 = require("../schemas/storagePolicy.generated.js");
const network_generated_js_1 = require("../networking/network.generated.js");
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
const fetch_js_1 = require("../networking/fetch.js");
class GetStoragePolicyByIdOptionals {
    constructor(fields) {
        this.headers = new GetStoragePolicyByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.GetStoragePolicyByIdOptionals = GetStoragePolicyByIdOptionals;
class GetStoragePoliciesHeaders {
    constructor(fields) {
        this.extraHeaders = {};
        if (fields.extraHeaders) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.GetStoragePoliciesHeaders = GetStoragePoliciesHeaders;
class GetStoragePolicyByIdHeaders {
    constructor(fields) {
        this.extraHeaders = {};
        if (fields.extraHeaders) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.GetStoragePolicyByIdHeaders = GetStoragePolicyByIdHeaders;
class StoragePoliciesManager {
    constructor(fields) {
        this.networkSession = new network_generated_js_1.NetworkSession({});
        if (fields.auth) {
            this.auth = fields.auth;
        }
        if (fields.networkSession) {
            this.networkSession = fields.networkSession;
        }
    }
    getStoragePolicies() {
        return __awaiter(this, arguments, void 0, function* (queryParams = {}, headersInput = new GetStoragePoliciesHeaders({}), cancellationToken) {
            const headers = new GetStoragePoliciesHeaders({
                extraHeaders: headersInput.extraHeaders,
            });
            const queryParamsMap = (0, utils_js_1.prepareParams)({
                ['fields']: queryParams.fields
                    ? queryParams.fields.map(utils_js_2.toString).join(',')
                    : undefined,
                ['marker']: (0, utils_js_2.toString)(queryParams.marker),
                ['limit']: (0, utils_js_2.toString)(queryParams.limit),
            });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = (yield (0, fetch_js_1.fetch)(''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/storage_policies'), {
                method: 'GET',
                params: queryParamsMap,
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return (0, storagePolicies_generated_js_1.deserializeStoragePolicies)(response.data);
        });
    }
    getStoragePolicyById(storagePolicyId_1) {
        return __awaiter(this, arguments, void 0, function* (storagePolicyId, optionalsInput = {}) {
            const optionals = new GetStoragePolicyByIdOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = (yield (0, fetch_js_1.fetch)(''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/storage_policies/', (0, utils_js_2.toString)(storagePolicyId)), {
                method: 'GET',
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return (0, storagePolicy_generated_js_1.deserializeStoragePolicy)(response.data);
        });
    }
}
exports.StoragePoliciesManager = StoragePoliciesManager;
//# sourceMappingURL=storagePolicies.generated.js.map