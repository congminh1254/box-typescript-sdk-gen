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
exports.ZipDownloadsManager = exports.DownloadZipHeaders = exports.GetZipDownloadStatusHeaders = exports.GetZipDownloadContentHeaders = exports.CreateZipDownloadHeaders = exports.DownloadZipOptionals = exports.GetZipDownloadStatusOptionals = exports.GetZipDownloadContentOptionals = exports.CreateZipDownloadOptionals = void 0;
const zipDownload_generated_js_1 = require("../schemas/zipDownload.generated.js");
const zipDownloadRequest_generated_js_1 = require("../schemas/zipDownloadRequest.generated.js");
const zipDownloadStatus_generated_js_1 = require("../schemas/zipDownloadStatus.generated.js");
const network_generated_js_1 = require("../networking/network.generated.js");
const utils_js_1 = require("../internal/utils.js");
const fetch_js_1 = require("../networking/fetch.js");
class CreateZipDownloadOptionals {
    constructor(fields) {
        this.headers = new CreateZipDownloadHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.CreateZipDownloadOptionals = CreateZipDownloadOptionals;
class GetZipDownloadContentOptionals {
    constructor(fields) {
        this.headers = new GetZipDownloadContentHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.GetZipDownloadContentOptionals = GetZipDownloadContentOptionals;
class GetZipDownloadStatusOptionals {
    constructor(fields) {
        this.headers = new GetZipDownloadStatusHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.GetZipDownloadStatusOptionals = GetZipDownloadStatusOptionals;
class DownloadZipOptionals {
    constructor(fields) {
        this.headers = new DownloadZipHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.DownloadZipOptionals = DownloadZipOptionals;
class CreateZipDownloadHeaders {
    constructor(fields) {
        this.extraHeaders = {};
        if (fields.extraHeaders) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.CreateZipDownloadHeaders = CreateZipDownloadHeaders;
class GetZipDownloadContentHeaders {
    constructor(fields) {
        this.extraHeaders = {};
        if (fields.extraHeaders) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.GetZipDownloadContentHeaders = GetZipDownloadContentHeaders;
class GetZipDownloadStatusHeaders {
    constructor(fields) {
        this.extraHeaders = {};
        if (fields.extraHeaders) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.GetZipDownloadStatusHeaders = GetZipDownloadStatusHeaders;
class DownloadZipHeaders {
    constructor(fields) {
        this.extraHeaders = {};
        if (fields.extraHeaders) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.DownloadZipHeaders = DownloadZipHeaders;
class ZipDownloadsManager {
    constructor(fields) {
        this.networkSession = new network_generated_js_1.NetworkSession({});
        if (fields.auth) {
            this.auth = fields.auth;
        }
        if (fields.networkSession) {
            this.networkSession = fields.networkSession;
        }
    }
    createZipDownload(requestBody_1) {
        return __awaiter(this, arguments, void 0, function* (requestBody, optionalsInput = {}) {
            const optionals = new CreateZipDownloadOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = (yield (0, fetch_js_1.fetch)(''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/zip_downloads'), {
                method: 'POST',
                headers: headersMap,
                data: (0, zipDownloadRequest_generated_js_1.serializeZipDownloadRequest)(requestBody),
                contentType: 'application/json',
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return (0, zipDownload_generated_js_1.deserializeZipDownload)(response.data);
        });
    }
    getZipDownloadContent(downloadUrl_1) {
        return __awaiter(this, arguments, void 0, function* (downloadUrl, optionalsInput = {}) {
            const optionals = new GetZipDownloadContentOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = (yield (0, fetch_js_1.fetch)(downloadUrl, {
                method: 'GET',
                headers: headersMap,
                responseFormat: 'binary',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return response.content;
        });
    }
    getZipDownloadStatus(statusUrl_1) {
        return __awaiter(this, arguments, void 0, function* (statusUrl, optionalsInput = {}) {
            const optionals = new GetZipDownloadStatusOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = (yield (0, fetch_js_1.fetch)(statusUrl, {
                method: 'GET',
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return (0, zipDownloadStatus_generated_js_1.deserializeZipDownloadStatus)(response.data);
        });
    }
    downloadZip(requestBody_1) {
        return __awaiter(this, arguments, void 0, function* (requestBody, optionalsInput = {}) {
            const optionals = new DownloadZipOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const zipDownloadSession = yield this.createZipDownload({
                items: requestBody.items,
                downloadFileName: requestBody.downloadFileName,
            }, {
                headers: new CreateZipDownloadHeaders({
                    extraHeaders: headers.extraHeaders,
                }),
                cancellationToken: cancellationToken,
            });
            return yield this.getZipDownloadContent(zipDownloadSession.downloadUrl, {
                headers: new GetZipDownloadContentHeaders({
                    extraHeaders: headers.extraHeaders,
                }),
                cancellationToken: cancellationToken,
            });
        });
    }
}
exports.ZipDownloadsManager = ZipDownloadsManager;
//# sourceMappingURL=zipDownloads.generated.js.map