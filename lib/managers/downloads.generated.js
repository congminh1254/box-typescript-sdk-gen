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
exports.DownloadsManager = exports.DownloadFileHeaders = exports.DownloadFileOptionals = void 0;
const network_generated_js_1 = require("../networking/network.generated.js");
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
const fetch_js_1 = require("../networking/fetch.js");
class DownloadFileOptionals {
    constructor(fields) {
        this.queryParams = {};
        this.headers = new DownloadFileHeaders({});
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
exports.DownloadFileOptionals = DownloadFileOptionals;
class DownloadFileHeaders {
    constructor(fields) {
        this.extraHeaders = {};
        if (fields.range) {
            this.range = fields.range;
        }
        if (fields.boxapi) {
            this.boxapi = fields.boxapi;
        }
        if (fields.extraHeaders) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.DownloadFileHeaders = DownloadFileHeaders;
class DownloadsManager {
    constructor(fields) {
        this.networkSession = new network_generated_js_1.NetworkSession({});
        if (fields.auth) {
            this.auth = fields.auth;
        }
        if (fields.networkSession) {
            this.networkSession = fields.networkSession;
        }
    }
    downloadFile(fileId_1) {
        return __awaiter(this, arguments, void 0, function* (fileId, optionalsInput = {}) {
            const optionals = new DownloadFileOptionals({
                queryParams: optionalsInput.queryParams,
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const queryParams = optionals.queryParams;
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const queryParamsMap = (0, utils_js_1.prepareParams)({
                ['version']: (0, utils_js_2.toString)(queryParams.version),
                ['access_token']: (0, utils_js_2.toString)(queryParams.accessToken),
            });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({
                ['range']: (0, utils_js_2.toString)(headers.range),
                ['boxapi']: (0, utils_js_2.toString)(headers.boxapi),
            }, headers.extraHeaders));
            const response = (yield (0, fetch_js_1.fetch)(''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/files/', (0, utils_js_2.toString)(fileId), '/content'), {
                method: 'GET',
                params: queryParamsMap,
                headers: headersMap,
                responseFormat: 'binary',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return response.content;
        });
    }
}
exports.DownloadsManager = DownloadsManager;
//# sourceMappingURL=downloads.generated.js.map