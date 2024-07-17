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
exports.FileMetadataManager = exports.DeleteFileMetadataByIdHeaders = exports.UpdateFileMetadataByIdHeaders = exports.CreateFileMetadataByIdHeaders = exports.GetFileMetadataByIdHeaders = exports.GetFileMetadataHeaders = exports.DeleteFileMetadataByIdOptionals = exports.UpdateFileMetadataByIdOptionals = exports.CreateFileMetadataByIdOptionals = exports.GetFileMetadataByIdOptionals = exports.GetFileMetadataOptionals = void 0;
exports.serializeGetFileMetadataByIdScope = serializeGetFileMetadataByIdScope;
exports.deserializeGetFileMetadataByIdScope = deserializeGetFileMetadataByIdScope;
exports.serializeCreateFileMetadataByIdScope = serializeCreateFileMetadataByIdScope;
exports.deserializeCreateFileMetadataByIdScope = deserializeCreateFileMetadataByIdScope;
exports.serializeCreateFileMetadataByIdRequestBody = serializeCreateFileMetadataByIdRequestBody;
exports.deserializeCreateFileMetadataByIdRequestBody = deserializeCreateFileMetadataByIdRequestBody;
exports.serializeUpdateFileMetadataByIdScope = serializeUpdateFileMetadataByIdScope;
exports.deserializeUpdateFileMetadataByIdScope = deserializeUpdateFileMetadataByIdScope;
exports.serializeUpdateFileMetadataByIdRequestBodyOpField = serializeUpdateFileMetadataByIdRequestBodyOpField;
exports.deserializeUpdateFileMetadataByIdRequestBodyOpField = deserializeUpdateFileMetadataByIdRequestBodyOpField;
exports.serializeUpdateFileMetadataByIdRequestBody = serializeUpdateFileMetadataByIdRequestBody;
exports.deserializeUpdateFileMetadataByIdRequestBody = deserializeUpdateFileMetadataByIdRequestBody;
exports.serializeDeleteFileMetadataByIdScope = serializeDeleteFileMetadataByIdScope;
exports.deserializeDeleteFileMetadataByIdScope = deserializeDeleteFileMetadataByIdScope;
const metadatas_generated_js_1 = require("../schemas/metadatas.generated.js");
const metadataFull_generated_js_1 = require("../schemas/metadataFull.generated.js");
const network_generated_js_1 = require("../networking/network.generated.js");
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
const fetch_js_1 = require("../networking/fetch.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
class GetFileMetadataOptionals {
    constructor(fields) {
        this.headers = new GetFileMetadataHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.GetFileMetadataOptionals = GetFileMetadataOptionals;
class GetFileMetadataByIdOptionals {
    constructor(fields) {
        this.headers = new GetFileMetadataByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.GetFileMetadataByIdOptionals = GetFileMetadataByIdOptionals;
class CreateFileMetadataByIdOptionals {
    constructor(fields) {
        this.headers = new CreateFileMetadataByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.CreateFileMetadataByIdOptionals = CreateFileMetadataByIdOptionals;
class UpdateFileMetadataByIdOptionals {
    constructor(fields) {
        this.headers = new UpdateFileMetadataByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.UpdateFileMetadataByIdOptionals = UpdateFileMetadataByIdOptionals;
class DeleteFileMetadataByIdOptionals {
    constructor(fields) {
        this.headers = new DeleteFileMetadataByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.DeleteFileMetadataByIdOptionals = DeleteFileMetadataByIdOptionals;
class GetFileMetadataHeaders {
    constructor(fields) {
        this.extraHeaders = {};
        if (fields.extraHeaders) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.GetFileMetadataHeaders = GetFileMetadataHeaders;
class GetFileMetadataByIdHeaders {
    constructor(fields) {
        this.extraHeaders = {};
        if (fields.extraHeaders) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.GetFileMetadataByIdHeaders = GetFileMetadataByIdHeaders;
class CreateFileMetadataByIdHeaders {
    constructor(fields) {
        this.extraHeaders = {};
        if (fields.extraHeaders) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.CreateFileMetadataByIdHeaders = CreateFileMetadataByIdHeaders;
class UpdateFileMetadataByIdHeaders {
    constructor(fields) {
        this.extraHeaders = {};
        if (fields.extraHeaders) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.UpdateFileMetadataByIdHeaders = UpdateFileMetadataByIdHeaders;
class DeleteFileMetadataByIdHeaders {
    constructor(fields) {
        this.extraHeaders = {};
        if (fields.extraHeaders) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.DeleteFileMetadataByIdHeaders = DeleteFileMetadataByIdHeaders;
class FileMetadataManager {
    constructor(fields) {
        this.networkSession = new network_generated_js_1.NetworkSession({});
        if (fields.auth) {
            this.auth = fields.auth;
        }
        if (fields.networkSession) {
            this.networkSession = fields.networkSession;
        }
    }
    getFileMetadata(fileId_1) {
        return __awaiter(this, arguments, void 0, function* (fileId, optionalsInput = {}) {
            const optionals = new GetFileMetadataOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = (yield (0, fetch_js_1.fetch)(''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/files/', (0, utils_js_2.toString)(fileId), '/metadata'), {
                method: 'GET',
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return (0, metadatas_generated_js_1.deserializeMetadatas)(response.data);
        });
    }
    getFileMetadataById(fileId_1, scope_1, templateKey_1) {
        return __awaiter(this, arguments, void 0, function* (fileId, scope, templateKey, optionalsInput = {}) {
            const optionals = new GetFileMetadataByIdOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = (yield (0, fetch_js_1.fetch)(''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/files/', (0, utils_js_2.toString)(fileId), '/metadata/', (0, utils_js_2.toString)(scope), '/', (0, utils_js_2.toString)(templateKey)), {
                method: 'GET',
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return (0, metadataFull_generated_js_1.deserializeMetadataFull)(response.data);
        });
    }
    createFileMetadataById(fileId_1, scope_1, templateKey_1, requestBody_1) {
        return __awaiter(this, arguments, void 0, function* (fileId, scope, templateKey, requestBody, optionalsInput = {}) {
            const optionals = new CreateFileMetadataByIdOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = (yield (0, fetch_js_1.fetch)(''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/files/', (0, utils_js_2.toString)(fileId), '/metadata/', (0, utils_js_2.toString)(scope), '/', (0, utils_js_2.toString)(templateKey)), {
                method: 'POST',
                headers: headersMap,
                data: serializeCreateFileMetadataByIdRequestBody(requestBody),
                contentType: 'application/json',
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return (0, metadataFull_generated_js_1.deserializeMetadataFull)(response.data);
        });
    }
    updateFileMetadataById(fileId_1, scope_1, templateKey_1, requestBody_1) {
        return __awaiter(this, arguments, void 0, function* (fileId, scope, templateKey, requestBody, optionalsInput = {}) {
            const optionals = new UpdateFileMetadataByIdOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = (yield (0, fetch_js_1.fetch)(''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/files/', (0, utils_js_2.toString)(fileId), '/metadata/', (0, utils_js_2.toString)(scope), '/', (0, utils_js_2.toString)(templateKey)), {
                method: 'PUT',
                headers: headersMap,
                data: requestBody.map(serializeUpdateFileMetadataByIdRequestBody),
                contentType: 'application/json-patch+json',
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return (0, metadataFull_generated_js_1.deserializeMetadataFull)(response.data);
        });
    }
    deleteFileMetadataById(fileId_1, scope_1, templateKey_1) {
        return __awaiter(this, arguments, void 0, function* (fileId, scope, templateKey, optionalsInput = {}) {
            const optionals = new DeleteFileMetadataByIdOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = (yield (0, fetch_js_1.fetch)(''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/files/', (0, utils_js_2.toString)(fileId), '/metadata/', (0, utils_js_2.toString)(scope), '/', (0, utils_js_2.toString)(templateKey)), {
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
exports.FileMetadataManager = FileMetadataManager;
function serializeGetFileMetadataByIdScope(val) {
    return val;
}
function deserializeGetFileMetadataByIdScope(val) {
    if (val == 'global') {
        return val;
    }
    if (val == 'enterprise') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize GetFileMetadataByIdScope",
    });
}
function serializeCreateFileMetadataByIdScope(val) {
    return val;
}
function deserializeCreateFileMetadataByIdScope(val) {
    if (val == 'global') {
        return val;
    }
    if (val == 'enterprise') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize CreateFileMetadataByIdScope",
    });
}
function serializeCreateFileMetadataByIdRequestBody(val) {
    return Object.fromEntries(Object.entries(val).map(([k, v]) => [
        k,
        (function (v) {
            return v;
        })(v),
    ]));
}
function deserializeCreateFileMetadataByIdRequestBody(val) {
    return (0, json_js_2.sdIsMap)(val)
        ? Object.fromEntries(Object.entries(val).map(([k, v]) => [
            k,
            (function (v) {
                return v;
            })(v),
        ]))
        : {};
}
function serializeUpdateFileMetadataByIdScope(val) {
    return val;
}
function deserializeUpdateFileMetadataByIdScope(val) {
    if (val == 'global') {
        return val;
    }
    if (val == 'enterprise') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize UpdateFileMetadataByIdScope",
    });
}
function serializeUpdateFileMetadataByIdRequestBodyOpField(val) {
    return val;
}
function deserializeUpdateFileMetadataByIdRequestBodyOpField(val) {
    if (val == 'add') {
        return val;
    }
    if (val == 'replace') {
        return val;
    }
    if (val == 'remove') {
        return val;
    }
    if (val == 'test') {
        return val;
    }
    if (val == 'move') {
        return val;
    }
    if (val == 'copy') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize UpdateFileMetadataByIdRequestBodyOpField",
    });
}
function serializeUpdateFileMetadataByIdRequestBody(val) {
    return {
        ['op']: val.op == void 0
            ? void 0
            : serializeUpdateFileMetadataByIdRequestBodyOpField(val.op),
        ['path']: val.path == void 0 ? void 0 : val.path,
        ['value']: val.value == void 0 ? void 0 : val.value,
        ['from']: val.from == void 0 ? void 0 : val.from,
    };
}
function deserializeUpdateFileMetadataByIdRequestBody(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "UpdateFileMetadataByIdRequestBody"',
        });
    }
    const op = val.op == void 0
        ? void 0
        : deserializeUpdateFileMetadataByIdRequestBodyOpField(val.op);
    if (!(val.path == void 0) && !(0, json_js_1.sdIsString)(val.path)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "path" of type "UpdateFileMetadataByIdRequestBody"',
        });
    }
    const path = val.path == void 0 ? void 0 : val.path;
    if (!(val.value == void 0) && !(0, json_js_1.sdIsString)(val.value)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "value" of type "UpdateFileMetadataByIdRequestBody"',
        });
    }
    const value = val.value == void 0 ? void 0 : val.value;
    if (!(val.from == void 0) && !(0, json_js_1.sdIsString)(val.from)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "from" of type "UpdateFileMetadataByIdRequestBody"',
        });
    }
    const from = val.from == void 0 ? void 0 : val.from;
    return {
        op: op,
        path: path,
        value: value,
        from: from,
    };
}
function serializeDeleteFileMetadataByIdScope(val) {
    return val;
}
function deserializeDeleteFileMetadataByIdScope(val) {
    if (val == 'global') {
        return val;
    }
    if (val == 'enterprise') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize DeleteFileMetadataByIdScope",
    });
}
//# sourceMappingURL=fileMetadata.generated.js.map