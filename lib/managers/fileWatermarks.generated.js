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
exports.FileWatermarksManager = exports.DeleteFileWatermarkHeaders = exports.UpdateFileWatermarkHeaders = exports.UpdateFileWatermarkRequestBodyWatermarkField = exports.GetFileWatermarkHeaders = exports.DeleteFileWatermarkOptionals = exports.UpdateFileWatermarkOptionals = exports.GetFileWatermarkOptionals = void 0;
exports.serializeUpdateFileWatermarkRequestBodyWatermarkImprintField = serializeUpdateFileWatermarkRequestBodyWatermarkImprintField;
exports.deserializeUpdateFileWatermarkRequestBodyWatermarkImprintField = deserializeUpdateFileWatermarkRequestBodyWatermarkImprintField;
exports.serializeUpdateFileWatermarkRequestBodyWatermarkField = serializeUpdateFileWatermarkRequestBodyWatermarkField;
exports.deserializeUpdateFileWatermarkRequestBodyWatermarkField = deserializeUpdateFileWatermarkRequestBodyWatermarkField;
exports.serializeUpdateFileWatermarkRequestBodyWatermarkFieldInput = serializeUpdateFileWatermarkRequestBodyWatermarkFieldInput;
exports.deserializeUpdateFileWatermarkRequestBodyWatermarkFieldInput = deserializeUpdateFileWatermarkRequestBodyWatermarkFieldInput;
exports.serializeUpdateFileWatermarkRequestBody = serializeUpdateFileWatermarkRequestBody;
exports.deserializeUpdateFileWatermarkRequestBody = deserializeUpdateFileWatermarkRequestBody;
const watermark_generated_js_1 = require("../schemas/watermark.generated.js");
const network_generated_js_1 = require("../networking/network.generated.js");
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
const fetch_js_1 = require("../networking/fetch.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
class GetFileWatermarkOptionals {
    constructor(fields) {
        this.headers = new GetFileWatermarkHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.GetFileWatermarkOptionals = GetFileWatermarkOptionals;
class UpdateFileWatermarkOptionals {
    constructor(fields) {
        this.headers = new UpdateFileWatermarkHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.UpdateFileWatermarkOptionals = UpdateFileWatermarkOptionals;
class DeleteFileWatermarkOptionals {
    constructor(fields) {
        this.headers = new DeleteFileWatermarkHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.DeleteFileWatermarkOptionals = DeleteFileWatermarkOptionals;
class GetFileWatermarkHeaders {
    constructor(fields) {
        this.extraHeaders = {};
        if (fields.extraHeaders) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.GetFileWatermarkHeaders = GetFileWatermarkHeaders;
class UpdateFileWatermarkRequestBodyWatermarkField {
    constructor(fields) {
        this.imprint = 'default';
        if (fields.imprint) {
            this.imprint = fields.imprint;
        }
    }
}
exports.UpdateFileWatermarkRequestBodyWatermarkField = UpdateFileWatermarkRequestBodyWatermarkField;
class UpdateFileWatermarkHeaders {
    constructor(fields) {
        this.extraHeaders = {};
        if (fields.extraHeaders) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.UpdateFileWatermarkHeaders = UpdateFileWatermarkHeaders;
class DeleteFileWatermarkHeaders {
    constructor(fields) {
        this.extraHeaders = {};
        if (fields.extraHeaders) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.DeleteFileWatermarkHeaders = DeleteFileWatermarkHeaders;
class FileWatermarksManager {
    constructor(fields) {
        this.networkSession = new network_generated_js_1.NetworkSession({});
        if (fields.auth) {
            this.auth = fields.auth;
        }
        if (fields.networkSession) {
            this.networkSession = fields.networkSession;
        }
    }
    getFileWatermark(fileId_1) {
        return __awaiter(this, arguments, void 0, function* (fileId, optionalsInput = {}) {
            const optionals = new GetFileWatermarkOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = (yield (0, fetch_js_1.fetch)(''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/files/', (0, utils_js_2.toString)(fileId), '/watermark'), {
                method: 'GET',
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return (0, watermark_generated_js_1.deserializeWatermark)(response.data);
        });
    }
    updateFileWatermark(fileId_1, requestBody_1) {
        return __awaiter(this, arguments, void 0, function* (fileId, requestBody, optionalsInput = {}) {
            const optionals = new UpdateFileWatermarkOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = (yield (0, fetch_js_1.fetch)(''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/files/', (0, utils_js_2.toString)(fileId), '/watermark'), {
                method: 'PUT',
                headers: headersMap,
                data: serializeUpdateFileWatermarkRequestBody(requestBody),
                contentType: 'application/json',
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return (0, watermark_generated_js_1.deserializeWatermark)(response.data);
        });
    }
    deleteFileWatermark(fileId_1) {
        return __awaiter(this, arguments, void 0, function* (fileId, optionalsInput = {}) {
            const optionals = new DeleteFileWatermarkOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = (yield (0, fetch_js_1.fetch)(''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/files/', (0, utils_js_2.toString)(fileId), '/watermark'), {
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
}
exports.FileWatermarksManager = FileWatermarksManager;
function serializeUpdateFileWatermarkRequestBodyWatermarkImprintField(val) {
    return val;
}
function deserializeUpdateFileWatermarkRequestBodyWatermarkImprintField(val) {
    if (val == 'default') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize UpdateFileWatermarkRequestBodyWatermarkImprintField",
    });
}
function serializeUpdateFileWatermarkRequestBodyWatermarkField(val) {
    return {
        ['imprint']: serializeUpdateFileWatermarkRequestBodyWatermarkImprintField(val.imprint),
    };
}
function deserializeUpdateFileWatermarkRequestBodyWatermarkField(val) {
    if (!(0, json_js_1.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "UpdateFileWatermarkRequestBodyWatermarkField"',
        });
    }
    if (val.imprint == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "imprint" of type "UpdateFileWatermarkRequestBodyWatermarkField" to be defined',
        });
    }
    const imprint = deserializeUpdateFileWatermarkRequestBodyWatermarkImprintField(val.imprint);
    return {
        imprint: imprint,
    };
}
function serializeUpdateFileWatermarkRequestBodyWatermarkFieldInput(val) {
    return {
        ['imprint']: val.imprint == void 0
            ? void 0
            : serializeUpdateFileWatermarkRequestBodyWatermarkImprintField(val.imprint),
    };
}
function deserializeUpdateFileWatermarkRequestBodyWatermarkFieldInput(val) {
    if (!(0, json_js_1.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "UpdateFileWatermarkRequestBodyWatermarkFieldInput"',
        });
    }
    const imprint = val.imprint == void 0
        ? void 0
        : deserializeUpdateFileWatermarkRequestBodyWatermarkImprintField(val.imprint);
    return {
        imprint: imprint,
    };
}
function serializeUpdateFileWatermarkRequestBody(val) {
    return {
        ['watermark']: serializeUpdateFileWatermarkRequestBodyWatermarkField(val.watermark),
    };
}
function deserializeUpdateFileWatermarkRequestBody(val) {
    if (!(0, json_js_1.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "UpdateFileWatermarkRequestBody"',
        });
    }
    if (val.watermark == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "watermark" of type "UpdateFileWatermarkRequestBody" to be defined',
        });
    }
    const watermark = deserializeUpdateFileWatermarkRequestBodyWatermarkField(val.watermark);
    return { watermark: watermark };
}
//# sourceMappingURL=fileWatermarks.generated.js.map