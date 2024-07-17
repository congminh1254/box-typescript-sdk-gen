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
exports.FileRequestsManager = exports.CreateFileRequestCopyHeaders = exports.DeleteFileRequestByIdHeaders = exports.UpdateFileRequestByIdHeaders = exports.GetFileRequestByIdHeaders = exports.CreateFileRequestCopyOptionals = exports.DeleteFileRequestByIdOptionals = exports.UpdateFileRequestByIdOptionals = exports.GetFileRequestByIdOptionals = void 0;
const fileRequest_generated_js_1 = require("../schemas/fileRequest.generated.js");
const fileRequestUpdateRequest_generated_js_1 = require("../schemas/fileRequestUpdateRequest.generated.js");
const fileRequestCopyRequest_generated_js_1 = require("../schemas/fileRequestCopyRequest.generated.js");
const network_generated_js_1 = require("../networking/network.generated.js");
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
const fetch_js_1 = require("../networking/fetch.js");
class GetFileRequestByIdOptionals {
    constructor(fields) {
        this.headers = new GetFileRequestByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.GetFileRequestByIdOptionals = GetFileRequestByIdOptionals;
class UpdateFileRequestByIdOptionals {
    constructor(fields) {
        this.headers = new UpdateFileRequestByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.UpdateFileRequestByIdOptionals = UpdateFileRequestByIdOptionals;
class DeleteFileRequestByIdOptionals {
    constructor(fields) {
        this.headers = new DeleteFileRequestByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.DeleteFileRequestByIdOptionals = DeleteFileRequestByIdOptionals;
class CreateFileRequestCopyOptionals {
    constructor(fields) {
        this.headers = new CreateFileRequestCopyHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.CreateFileRequestCopyOptionals = CreateFileRequestCopyOptionals;
class GetFileRequestByIdHeaders {
    constructor(fields) {
        this.extraHeaders = {};
        if (fields.extraHeaders) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.GetFileRequestByIdHeaders = GetFileRequestByIdHeaders;
class UpdateFileRequestByIdHeaders {
    constructor(fields) {
        this.extraHeaders = {};
        if (fields.ifMatch) {
            this.ifMatch = fields.ifMatch;
        }
        if (fields.extraHeaders) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.UpdateFileRequestByIdHeaders = UpdateFileRequestByIdHeaders;
class DeleteFileRequestByIdHeaders {
    constructor(fields) {
        this.extraHeaders = {};
        if (fields.extraHeaders) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.DeleteFileRequestByIdHeaders = DeleteFileRequestByIdHeaders;
class CreateFileRequestCopyHeaders {
    constructor(fields) {
        this.extraHeaders = {};
        if (fields.extraHeaders) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.CreateFileRequestCopyHeaders = CreateFileRequestCopyHeaders;
class FileRequestsManager {
    constructor(fields) {
        this.networkSession = new network_generated_js_1.NetworkSession({});
        if (fields.auth) {
            this.auth = fields.auth;
        }
        if (fields.networkSession) {
            this.networkSession = fields.networkSession;
        }
    }
    getFileRequestById(fileRequestId_1) {
        return __awaiter(this, arguments, void 0, function* (fileRequestId, optionalsInput = {}) {
            const optionals = new GetFileRequestByIdOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = (yield (0, fetch_js_1.fetch)(''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/file_requests/', (0, utils_js_2.toString)(fileRequestId)), {
                method: 'GET',
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return (0, fileRequest_generated_js_1.deserializeFileRequest)(response.data);
        });
    }
    updateFileRequestById(fileRequestId_1, requestBody_1) {
        return __awaiter(this, arguments, void 0, function* (fileRequestId, requestBody, optionalsInput = {}) {
            const optionals = new UpdateFileRequestByIdOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({ ['if-match']: (0, utils_js_2.toString)(headers.ifMatch) }, headers.extraHeaders));
            const response = (yield (0, fetch_js_1.fetch)(''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/file_requests/', (0, utils_js_2.toString)(fileRequestId)), {
                method: 'PUT',
                headers: headersMap,
                data: (0, fileRequestUpdateRequest_generated_js_1.serializeFileRequestUpdateRequest)(requestBody),
                contentType: 'application/json',
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return (0, fileRequest_generated_js_1.deserializeFileRequest)(response.data);
        });
    }
    deleteFileRequestById(fileRequestId_1) {
        return __awaiter(this, arguments, void 0, function* (fileRequestId, optionalsInput = {}) {
            const optionals = new DeleteFileRequestByIdOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = (yield (0, fetch_js_1.fetch)(''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/file_requests/', (0, utils_js_2.toString)(fileRequestId)), {
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
    createFileRequestCopy(fileRequestId_1, requestBody_1) {
        return __awaiter(this, arguments, void 0, function* (fileRequestId, requestBody, optionalsInput = {}) {
            const optionals = new CreateFileRequestCopyOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = (yield (0, fetch_js_1.fetch)(''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/file_requests/', (0, utils_js_2.toString)(fileRequestId), '/copy'), {
                method: 'POST',
                headers: headersMap,
                data: (0, fileRequestCopyRequest_generated_js_1.serializeFileRequestCopyRequest)(requestBody),
                contentType: 'application/json',
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return (0, fileRequest_generated_js_1.deserializeFileRequest)(response.data);
        });
    }
}
exports.FileRequestsManager = FileRequestsManager;
//# sourceMappingURL=fileRequests.generated.js.map