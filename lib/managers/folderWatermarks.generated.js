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
exports.FolderWatermarksManager = exports.DeleteFolderWatermarkHeaders = exports.UpdateFolderWatermarkHeaders = exports.UpdateFolderWatermarkRequestBodyWatermarkField = exports.GetFolderWatermarkHeaders = exports.DeleteFolderWatermarkOptionals = exports.UpdateFolderWatermarkOptionals = exports.GetFolderWatermarkOptionals = void 0;
exports.serializeUpdateFolderWatermarkRequestBodyWatermarkImprintField = serializeUpdateFolderWatermarkRequestBodyWatermarkImprintField;
exports.deserializeUpdateFolderWatermarkRequestBodyWatermarkImprintField = deserializeUpdateFolderWatermarkRequestBodyWatermarkImprintField;
exports.serializeUpdateFolderWatermarkRequestBodyWatermarkField = serializeUpdateFolderWatermarkRequestBodyWatermarkField;
exports.deserializeUpdateFolderWatermarkRequestBodyWatermarkField = deserializeUpdateFolderWatermarkRequestBodyWatermarkField;
exports.serializeUpdateFolderWatermarkRequestBodyWatermarkFieldInput = serializeUpdateFolderWatermarkRequestBodyWatermarkFieldInput;
exports.deserializeUpdateFolderWatermarkRequestBodyWatermarkFieldInput = deserializeUpdateFolderWatermarkRequestBodyWatermarkFieldInput;
exports.serializeUpdateFolderWatermarkRequestBody = serializeUpdateFolderWatermarkRequestBody;
exports.deserializeUpdateFolderWatermarkRequestBody = deserializeUpdateFolderWatermarkRequestBody;
const watermark_generated_js_1 = require("../schemas/watermark.generated.js");
const network_generated_js_1 = require("../networking/network.generated.js");
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
const fetch_js_1 = require("../networking/fetch.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
class GetFolderWatermarkOptionals {
    constructor(fields) {
        this.headers = new GetFolderWatermarkHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.GetFolderWatermarkOptionals = GetFolderWatermarkOptionals;
class UpdateFolderWatermarkOptionals {
    constructor(fields) {
        this.headers = new UpdateFolderWatermarkHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.UpdateFolderWatermarkOptionals = UpdateFolderWatermarkOptionals;
class DeleteFolderWatermarkOptionals {
    constructor(fields) {
        this.headers = new DeleteFolderWatermarkHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.DeleteFolderWatermarkOptionals = DeleteFolderWatermarkOptionals;
class GetFolderWatermarkHeaders {
    constructor(fields) {
        this.extraHeaders = {};
        if (fields.extraHeaders) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.GetFolderWatermarkHeaders = GetFolderWatermarkHeaders;
class UpdateFolderWatermarkRequestBodyWatermarkField {
    constructor(fields) {
        this.imprint = 'default';
        if (fields.imprint) {
            this.imprint = fields.imprint;
        }
    }
}
exports.UpdateFolderWatermarkRequestBodyWatermarkField = UpdateFolderWatermarkRequestBodyWatermarkField;
class UpdateFolderWatermarkHeaders {
    constructor(fields) {
        this.extraHeaders = {};
        if (fields.extraHeaders) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.UpdateFolderWatermarkHeaders = UpdateFolderWatermarkHeaders;
class DeleteFolderWatermarkHeaders {
    constructor(fields) {
        this.extraHeaders = {};
        if (fields.extraHeaders) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.DeleteFolderWatermarkHeaders = DeleteFolderWatermarkHeaders;
class FolderWatermarksManager {
    constructor(fields) {
        this.networkSession = new network_generated_js_1.NetworkSession({});
        if (fields.auth) {
            this.auth = fields.auth;
        }
        if (fields.networkSession) {
            this.networkSession = fields.networkSession;
        }
    }
    getFolderWatermark(folderId_1) {
        return __awaiter(this, arguments, void 0, function* (folderId, optionalsInput = {}) {
            const optionals = new GetFolderWatermarkOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = (yield (0, fetch_js_1.fetch)(''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/folders/', (0, utils_js_2.toString)(folderId), '/watermark'), {
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
    updateFolderWatermark(folderId_1, requestBody_1) {
        return __awaiter(this, arguments, void 0, function* (folderId, requestBody, optionalsInput = {}) {
            const optionals = new UpdateFolderWatermarkOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = (yield (0, fetch_js_1.fetch)(''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/folders/', (0, utils_js_2.toString)(folderId), '/watermark'), {
                method: 'PUT',
                headers: headersMap,
                data: serializeUpdateFolderWatermarkRequestBody(requestBody),
                contentType: 'application/json',
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return (0, watermark_generated_js_1.deserializeWatermark)(response.data);
        });
    }
    deleteFolderWatermark(folderId_1) {
        return __awaiter(this, arguments, void 0, function* (folderId, optionalsInput = {}) {
            const optionals = new DeleteFolderWatermarkOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = (yield (0, fetch_js_1.fetch)(''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/folders/', (0, utils_js_2.toString)(folderId), '/watermark'), {
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
exports.FolderWatermarksManager = FolderWatermarksManager;
function serializeUpdateFolderWatermarkRequestBodyWatermarkImprintField(val) {
    return val;
}
function deserializeUpdateFolderWatermarkRequestBodyWatermarkImprintField(val) {
    if (val == 'default') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize UpdateFolderWatermarkRequestBodyWatermarkImprintField",
    });
}
function serializeUpdateFolderWatermarkRequestBodyWatermarkField(val) {
    return {
        ['imprint']: serializeUpdateFolderWatermarkRequestBodyWatermarkImprintField(val.imprint),
    };
}
function deserializeUpdateFolderWatermarkRequestBodyWatermarkField(val) {
    if (!(0, json_js_1.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "UpdateFolderWatermarkRequestBodyWatermarkField"',
        });
    }
    if (val.imprint == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "imprint" of type "UpdateFolderWatermarkRequestBodyWatermarkField" to be defined',
        });
    }
    const imprint = deserializeUpdateFolderWatermarkRequestBodyWatermarkImprintField(val.imprint);
    return {
        imprint: imprint,
    };
}
function serializeUpdateFolderWatermarkRequestBodyWatermarkFieldInput(val) {
    return {
        ['imprint']: val.imprint == void 0
            ? void 0
            : serializeUpdateFolderWatermarkRequestBodyWatermarkImprintField(val.imprint),
    };
}
function deserializeUpdateFolderWatermarkRequestBodyWatermarkFieldInput(val) {
    if (!(0, json_js_1.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "UpdateFolderWatermarkRequestBodyWatermarkFieldInput"',
        });
    }
    const imprint = val.imprint == void 0
        ? void 0
        : deserializeUpdateFolderWatermarkRequestBodyWatermarkImprintField(val.imprint);
    return {
        imprint: imprint,
    };
}
function serializeUpdateFolderWatermarkRequestBody(val) {
    return {
        ['watermark']: serializeUpdateFolderWatermarkRequestBodyWatermarkField(val.watermark),
    };
}
function deserializeUpdateFolderWatermarkRequestBody(val) {
    if (!(0, json_js_1.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "UpdateFolderWatermarkRequestBody"',
        });
    }
    if (val.watermark == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "watermark" of type "UpdateFolderWatermarkRequestBody" to be defined',
        });
    }
    const watermark = deserializeUpdateFolderWatermarkRequestBodyWatermarkField(val.watermark);
    return { watermark: watermark };
}
//# sourceMappingURL=folderWatermarks.generated.js.map