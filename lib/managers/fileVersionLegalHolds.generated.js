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
exports.FileVersionLegalHoldsManager = exports.GetFileVersionLegalHoldsHeaders = exports.GetFileVersionLegalHoldByIdHeaders = exports.GetFileVersionLegalHoldsOptionals = exports.GetFileVersionLegalHoldByIdOptionals = void 0;
const fileVersionLegalHold_generated_js_1 = require("../schemas/fileVersionLegalHold.generated.js");
const fileVersionLegalHolds_generated_js_1 = require("../schemas/fileVersionLegalHolds.generated.js");
const network_generated_js_1 = require("../networking/network.generated.js");
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
const fetch_js_1 = require("../networking/fetch.js");
class GetFileVersionLegalHoldByIdOptionals {
    constructor(fields) {
        this.headers = new GetFileVersionLegalHoldByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.GetFileVersionLegalHoldByIdOptionals = GetFileVersionLegalHoldByIdOptionals;
class GetFileVersionLegalHoldsOptionals {
    constructor(fields) {
        this.headers = new GetFileVersionLegalHoldsHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.GetFileVersionLegalHoldsOptionals = GetFileVersionLegalHoldsOptionals;
class GetFileVersionLegalHoldByIdHeaders {
    constructor(fields) {
        this.extraHeaders = {};
        if (fields.extraHeaders) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.GetFileVersionLegalHoldByIdHeaders = GetFileVersionLegalHoldByIdHeaders;
class GetFileVersionLegalHoldsHeaders {
    constructor(fields) {
        this.extraHeaders = {};
        if (fields.extraHeaders) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.GetFileVersionLegalHoldsHeaders = GetFileVersionLegalHoldsHeaders;
class FileVersionLegalHoldsManager {
    constructor(fields) {
        this.networkSession = new network_generated_js_1.NetworkSession({});
        if (fields.auth) {
            this.auth = fields.auth;
        }
        if (fields.networkSession) {
            this.networkSession = fields.networkSession;
        }
    }
    getFileVersionLegalHoldById(fileVersionLegalHoldId_1) {
        return __awaiter(this, arguments, void 0, function* (fileVersionLegalHoldId, optionalsInput = {}) {
            const optionals = new GetFileVersionLegalHoldByIdOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = (yield (0, fetch_js_1.fetch)(''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/file_version_legal_holds/', (0, utils_js_2.toString)(fileVersionLegalHoldId)), {
                method: 'GET',
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return (0, fileVersionLegalHold_generated_js_1.deserializeFileVersionLegalHold)(response.data);
        });
    }
    getFileVersionLegalHolds(queryParams_1) {
        return __awaiter(this, arguments, void 0, function* (queryParams, optionalsInput = {}) {
            const optionals = new GetFileVersionLegalHoldsOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const queryParamsMap = (0, utils_js_1.prepareParams)({
                ['policy_id']: (0, utils_js_2.toString)(queryParams.policyId),
                ['marker']: (0, utils_js_2.toString)(queryParams.marker),
                ['limit']: (0, utils_js_2.toString)(queryParams.limit),
            });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = (yield (0, fetch_js_1.fetch)(''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/file_version_legal_holds'), {
                method: 'GET',
                params: queryParamsMap,
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return (0, fileVersionLegalHolds_generated_js_1.deserializeFileVersionLegalHolds)(response.data);
        });
    }
}
exports.FileVersionLegalHoldsManager = FileVersionLegalHoldsManager;
//# sourceMappingURL=fileVersionLegalHolds.generated.js.map