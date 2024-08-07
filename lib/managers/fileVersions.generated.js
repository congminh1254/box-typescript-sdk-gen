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
exports.FileVersionsManager = exports.PromoteFileVersionHeaders = exports.DeleteFileVersionByIdHeaders = exports.UpdateFileVersionByIdHeaders = exports.GetFileVersionByIdHeaders = exports.GetFileVersionsHeaders = exports.PromoteFileVersionOptionals = exports.DeleteFileVersionByIdOptionals = exports.UpdateFileVersionByIdOptionals = exports.GetFileVersionByIdOptionals = exports.GetFileVersionsOptionals = void 0;
exports.serializeUpdateFileVersionByIdRequestBody = serializeUpdateFileVersionByIdRequestBody;
exports.deserializeUpdateFileVersionByIdRequestBody = deserializeUpdateFileVersionByIdRequestBody;
exports.serializePromoteFileVersionRequestBodyTypeField = serializePromoteFileVersionRequestBodyTypeField;
exports.deserializePromoteFileVersionRequestBodyTypeField = deserializePromoteFileVersionRequestBodyTypeField;
exports.serializePromoteFileVersionRequestBody = serializePromoteFileVersionRequestBody;
exports.deserializePromoteFileVersionRequestBody = deserializePromoteFileVersionRequestBody;
const fileVersions_generated_js_1 = require("../schemas/fileVersions.generated.js");
const fileVersionFull_generated_js_1 = require("../schemas/fileVersionFull.generated.js");
const network_generated_js_1 = require("../networking/network.generated.js");
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
const fetch_js_1 = require("../networking/fetch.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
class GetFileVersionsOptionals {
    constructor(fields) {
        this.queryParams = {};
        this.headers = new GetFileVersionsHeaders({});
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
exports.GetFileVersionsOptionals = GetFileVersionsOptionals;
class GetFileVersionByIdOptionals {
    constructor(fields) {
        this.queryParams = {};
        this.headers = new GetFileVersionByIdHeaders({});
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
exports.GetFileVersionByIdOptionals = GetFileVersionByIdOptionals;
class UpdateFileVersionByIdOptionals {
    constructor(fields) {
        this.requestBody = {};
        this.headers = new UpdateFileVersionByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.requestBody) {
            this.requestBody = fields.requestBody;
        }
        if (fields.headers) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.UpdateFileVersionByIdOptionals = UpdateFileVersionByIdOptionals;
class DeleteFileVersionByIdOptionals {
    constructor(fields) {
        this.headers = new DeleteFileVersionByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.DeleteFileVersionByIdOptionals = DeleteFileVersionByIdOptionals;
class PromoteFileVersionOptionals {
    constructor(fields) {
        this.requestBody = {};
        this.queryParams = {};
        this.headers = new PromoteFileVersionHeaders({});
        this.cancellationToken = void 0;
        if (fields.requestBody) {
            this.requestBody = fields.requestBody;
        }
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
exports.PromoteFileVersionOptionals = PromoteFileVersionOptionals;
class GetFileVersionsHeaders {
    constructor(fields) {
        this.extraHeaders = {};
        if (fields.extraHeaders) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.GetFileVersionsHeaders = GetFileVersionsHeaders;
class GetFileVersionByIdHeaders {
    constructor(fields) {
        this.extraHeaders = {};
        if (fields.extraHeaders) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.GetFileVersionByIdHeaders = GetFileVersionByIdHeaders;
class UpdateFileVersionByIdHeaders {
    constructor(fields) {
        this.extraHeaders = {};
        if (fields.extraHeaders) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.UpdateFileVersionByIdHeaders = UpdateFileVersionByIdHeaders;
class DeleteFileVersionByIdHeaders {
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
exports.DeleteFileVersionByIdHeaders = DeleteFileVersionByIdHeaders;
class PromoteFileVersionHeaders {
    constructor(fields) {
        this.extraHeaders = {};
        if (fields.extraHeaders) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.PromoteFileVersionHeaders = PromoteFileVersionHeaders;
class FileVersionsManager {
    constructor(fields) {
        this.networkSession = new network_generated_js_1.NetworkSession({});
        if (fields.auth) {
            this.auth = fields.auth;
        }
        if (fields.networkSession) {
            this.networkSession = fields.networkSession;
        }
    }
    getFileVersions(fileId_1) {
        return __awaiter(this, arguments, void 0, function* (fileId, optionalsInput = {}) {
            const optionals = new GetFileVersionsOptionals({
                queryParams: optionalsInput.queryParams,
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const queryParams = optionals.queryParams;
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const queryParamsMap = (0, utils_js_1.prepareParams)({
                ['fields']: queryParams.fields
                    ? queryParams.fields.map(utils_js_2.toString).join(',')
                    : undefined,
                ['limit']: (0, utils_js_2.toString)(queryParams.limit),
                ['offset']: (0, utils_js_2.toString)(queryParams.offset),
            });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = (yield (0, fetch_js_1.fetch)(''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/files/', (0, utils_js_2.toString)(fileId), '/versions'), {
                method: 'GET',
                params: queryParamsMap,
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return (0, fileVersions_generated_js_1.deserializeFileVersions)(response.data);
        });
    }
    getFileVersionById(fileId_1, fileVersionId_1) {
        return __awaiter(this, arguments, void 0, function* (fileId, fileVersionId, optionalsInput = {}) {
            const optionals = new GetFileVersionByIdOptionals({
                queryParams: optionalsInput.queryParams,
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const queryParams = optionals.queryParams;
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const queryParamsMap = (0, utils_js_1.prepareParams)({
                ['fields']: queryParams.fields
                    ? queryParams.fields.map(utils_js_2.toString).join(',')
                    : undefined,
            });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = (yield (0, fetch_js_1.fetch)(''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/files/', (0, utils_js_2.toString)(fileId), '/versions/', (0, utils_js_2.toString)(fileVersionId)), {
                method: 'GET',
                params: queryParamsMap,
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return (0, fileVersionFull_generated_js_1.deserializeFileVersionFull)(response.data);
        });
    }
    updateFileVersionById(fileId_1, fileVersionId_1) {
        return __awaiter(this, arguments, void 0, function* (fileId, fileVersionId, optionalsInput = {}) {
            const optionals = new UpdateFileVersionByIdOptionals({
                requestBody: optionalsInput.requestBody,
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const requestBody = optionals.requestBody;
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = (yield (0, fetch_js_1.fetch)(''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/files/', (0, utils_js_2.toString)(fileId), '/versions/', (0, utils_js_2.toString)(fileVersionId)), {
                method: 'PUT',
                headers: headersMap,
                data: serializeUpdateFileVersionByIdRequestBody(requestBody),
                contentType: 'application/json',
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return (0, fileVersionFull_generated_js_1.deserializeFileVersionFull)(response.data);
        });
    }
    deleteFileVersionById(fileId_1, fileVersionId_1) {
        return __awaiter(this, arguments, void 0, function* (fileId, fileVersionId, optionalsInput = {}) {
            const optionals = new DeleteFileVersionByIdOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({ ['if-match']: (0, utils_js_2.toString)(headers.ifMatch) }, headers.extraHeaders));
            const response = (yield (0, fetch_js_1.fetch)(''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/files/', (0, utils_js_2.toString)(fileId), '/versions/', (0, utils_js_2.toString)(fileVersionId)), {
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
    promoteFileVersion(fileId_1) {
        return __awaiter(this, arguments, void 0, function* (fileId, optionalsInput = {}) {
            const optionals = new PromoteFileVersionOptionals({
                requestBody: optionalsInput.requestBody,
                queryParams: optionalsInput.queryParams,
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const requestBody = optionals.requestBody;
            const queryParams = optionals.queryParams;
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const queryParamsMap = (0, utils_js_1.prepareParams)({
                ['fields']: queryParams.fields
                    ? queryParams.fields.map(utils_js_2.toString).join(',')
                    : undefined,
            });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = (yield (0, fetch_js_1.fetch)(''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/files/', (0, utils_js_2.toString)(fileId), '/versions/current'), {
                method: 'POST',
                params: queryParamsMap,
                headers: headersMap,
                data: serializePromoteFileVersionRequestBody(requestBody),
                contentType: 'application/json',
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return (0, fileVersionFull_generated_js_1.deserializeFileVersionFull)(response.data);
        });
    }
}
exports.FileVersionsManager = FileVersionsManager;
function serializeUpdateFileVersionByIdRequestBody(val) {
    return { ['trashed_at']: val.trashedAt == void 0 ? void 0 : val.trashedAt };
}
function deserializeUpdateFileVersionByIdRequestBody(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "UpdateFileVersionByIdRequestBody"',
        });
    }
    if (!(val.trashed_at == void 0) && !(0, json_js_1.sdIsString)(val.trashed_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "trashed_at" of type "UpdateFileVersionByIdRequestBody"',
        });
    }
    const trashedAt = val.trashed_at == void 0 ? void 0 : val.trashed_at;
    return { trashedAt: trashedAt };
}
function serializePromoteFileVersionRequestBodyTypeField(val) {
    return val;
}
function deserializePromoteFileVersionRequestBodyTypeField(val) {
    if (val == 'file_version') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize PromoteFileVersionRequestBodyTypeField",
    });
}
function serializePromoteFileVersionRequestBody(val) {
    return {
        ['id']: val.id == void 0 ? void 0 : val.id,
        ['type']: val.type == void 0
            ? void 0
            : serializePromoteFileVersionRequestBodyTypeField(val.type),
    };
}
function deserializePromoteFileVersionRequestBody(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "PromoteFileVersionRequestBody"',
        });
    }
    if (!(val.id == void 0) && !(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "PromoteFileVersionRequestBody"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    const type = val.type == void 0
        ? void 0
        : deserializePromoteFileVersionRequestBodyTypeField(val.type);
    return { id: id, type: type };
}
//# sourceMappingURL=fileVersions.generated.js.map