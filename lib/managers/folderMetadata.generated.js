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
exports.FolderMetadataManager = exports.DeleteFolderMetadataByIdHeaders = exports.UpdateFolderMetadataByIdHeaders = exports.CreateFolderMetadataByIdHeaders = exports.GetFolderMetadataByIdHeaders = exports.GetFolderMetadataHeaders = exports.DeleteFolderMetadataByIdOptionals = exports.UpdateFolderMetadataByIdOptionals = exports.CreateFolderMetadataByIdOptionals = exports.GetFolderMetadataByIdOptionals = exports.GetFolderMetadataOptionals = void 0;
exports.serializeGetFolderMetadataByIdScope = serializeGetFolderMetadataByIdScope;
exports.deserializeGetFolderMetadataByIdScope = deserializeGetFolderMetadataByIdScope;
exports.serializeCreateFolderMetadataByIdScope = serializeCreateFolderMetadataByIdScope;
exports.deserializeCreateFolderMetadataByIdScope = deserializeCreateFolderMetadataByIdScope;
exports.serializeCreateFolderMetadataByIdRequestBody = serializeCreateFolderMetadataByIdRequestBody;
exports.deserializeCreateFolderMetadataByIdRequestBody = deserializeCreateFolderMetadataByIdRequestBody;
exports.serializeUpdateFolderMetadataByIdScope = serializeUpdateFolderMetadataByIdScope;
exports.deserializeUpdateFolderMetadataByIdScope = deserializeUpdateFolderMetadataByIdScope;
exports.serializeUpdateFolderMetadataByIdRequestBodyOpField = serializeUpdateFolderMetadataByIdRequestBodyOpField;
exports.deserializeUpdateFolderMetadataByIdRequestBodyOpField = deserializeUpdateFolderMetadataByIdRequestBodyOpField;
exports.serializeUpdateFolderMetadataByIdRequestBody = serializeUpdateFolderMetadataByIdRequestBody;
exports.deserializeUpdateFolderMetadataByIdRequestBody = deserializeUpdateFolderMetadataByIdRequestBody;
exports.serializeDeleteFolderMetadataByIdScope = serializeDeleteFolderMetadataByIdScope;
exports.deserializeDeleteFolderMetadataByIdScope = deserializeDeleteFolderMetadataByIdScope;
const metadatas_generated_js_1 = require("../schemas/metadatas.generated.js");
const metadataFull_generated_js_1 = require("../schemas/metadataFull.generated.js");
const network_generated_js_1 = require("../networking/network.generated.js");
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
const fetch_js_1 = require("../networking/fetch.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
class GetFolderMetadataOptionals {
    constructor(fields) {
        this.headers = new GetFolderMetadataHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.GetFolderMetadataOptionals = GetFolderMetadataOptionals;
class GetFolderMetadataByIdOptionals {
    constructor(fields) {
        this.headers = new GetFolderMetadataByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.GetFolderMetadataByIdOptionals = GetFolderMetadataByIdOptionals;
class CreateFolderMetadataByIdOptionals {
    constructor(fields) {
        this.headers = new CreateFolderMetadataByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.CreateFolderMetadataByIdOptionals = CreateFolderMetadataByIdOptionals;
class UpdateFolderMetadataByIdOptionals {
    constructor(fields) {
        this.headers = new UpdateFolderMetadataByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.UpdateFolderMetadataByIdOptionals = UpdateFolderMetadataByIdOptionals;
class DeleteFolderMetadataByIdOptionals {
    constructor(fields) {
        this.headers = new DeleteFolderMetadataByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.DeleteFolderMetadataByIdOptionals = DeleteFolderMetadataByIdOptionals;
class GetFolderMetadataHeaders {
    constructor(fields) {
        this.extraHeaders = {};
        if (fields.extraHeaders) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.GetFolderMetadataHeaders = GetFolderMetadataHeaders;
class GetFolderMetadataByIdHeaders {
    constructor(fields) {
        this.extraHeaders = {};
        if (fields.extraHeaders) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.GetFolderMetadataByIdHeaders = GetFolderMetadataByIdHeaders;
class CreateFolderMetadataByIdHeaders {
    constructor(fields) {
        this.extraHeaders = {};
        if (fields.extraHeaders) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.CreateFolderMetadataByIdHeaders = CreateFolderMetadataByIdHeaders;
class UpdateFolderMetadataByIdHeaders {
    constructor(fields) {
        this.extraHeaders = {};
        if (fields.extraHeaders) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.UpdateFolderMetadataByIdHeaders = UpdateFolderMetadataByIdHeaders;
class DeleteFolderMetadataByIdHeaders {
    constructor(fields) {
        this.extraHeaders = {};
        if (fields.extraHeaders) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.DeleteFolderMetadataByIdHeaders = DeleteFolderMetadataByIdHeaders;
class FolderMetadataManager {
    constructor(fields) {
        this.networkSession = new network_generated_js_1.NetworkSession({});
        if (fields.auth) {
            this.auth = fields.auth;
        }
        if (fields.networkSession) {
            this.networkSession = fields.networkSession;
        }
    }
    getFolderMetadata(folderId_1) {
        return __awaiter(this, arguments, void 0, function* (folderId, optionalsInput = {}) {
            const optionals = new GetFolderMetadataOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = (yield (0, fetch_js_1.fetch)(''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/folders/', (0, utils_js_2.toString)(folderId), '/metadata'), {
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
    getFolderMetadataById(folderId_1, scope_1, templateKey_1) {
        return __awaiter(this, arguments, void 0, function* (folderId, scope, templateKey, optionalsInput = {}) {
            const optionals = new GetFolderMetadataByIdOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = (yield (0, fetch_js_1.fetch)(''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/folders/', (0, utils_js_2.toString)(folderId), '/metadata/', (0, utils_js_2.toString)(scope), '/', (0, utils_js_2.toString)(templateKey)), {
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
    createFolderMetadataById(folderId_1, scope_1, templateKey_1, requestBody_1) {
        return __awaiter(this, arguments, void 0, function* (folderId, scope, templateKey, requestBody, optionalsInput = {}) {
            const optionals = new CreateFolderMetadataByIdOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = (yield (0, fetch_js_1.fetch)(''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/folders/', (0, utils_js_2.toString)(folderId), '/metadata/', (0, utils_js_2.toString)(scope), '/', (0, utils_js_2.toString)(templateKey)), {
                method: 'POST',
                headers: headersMap,
                data: serializeCreateFolderMetadataByIdRequestBody(requestBody),
                contentType: 'application/json',
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return (0, metadataFull_generated_js_1.deserializeMetadataFull)(response.data);
        });
    }
    updateFolderMetadataById(folderId_1, scope_1, templateKey_1, requestBody_1) {
        return __awaiter(this, arguments, void 0, function* (folderId, scope, templateKey, requestBody, optionalsInput = {}) {
            const optionals = new UpdateFolderMetadataByIdOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = (yield (0, fetch_js_1.fetch)(''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/folders/', (0, utils_js_2.toString)(folderId), '/metadata/', (0, utils_js_2.toString)(scope), '/', (0, utils_js_2.toString)(templateKey)), {
                method: 'PUT',
                headers: headersMap,
                data: requestBody.map(serializeUpdateFolderMetadataByIdRequestBody),
                contentType: 'application/json-patch+json',
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return (0, metadataFull_generated_js_1.deserializeMetadataFull)(response.data);
        });
    }
    deleteFolderMetadataById(folderId_1, scope_1, templateKey_1) {
        return __awaiter(this, arguments, void 0, function* (folderId, scope, templateKey, optionalsInput = {}) {
            const optionals = new DeleteFolderMetadataByIdOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = (yield (0, fetch_js_1.fetch)(''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/folders/', (0, utils_js_2.toString)(folderId), '/metadata/', (0, utils_js_2.toString)(scope), '/', (0, utils_js_2.toString)(templateKey)), {
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
exports.FolderMetadataManager = FolderMetadataManager;
function serializeGetFolderMetadataByIdScope(val) {
    return val;
}
function deserializeGetFolderMetadataByIdScope(val) {
    if (val == 'global') {
        return val;
    }
    if (val == 'enterprise') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize GetFolderMetadataByIdScope",
    });
}
function serializeCreateFolderMetadataByIdScope(val) {
    return val;
}
function deserializeCreateFolderMetadataByIdScope(val) {
    if (val == 'global') {
        return val;
    }
    if (val == 'enterprise') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize CreateFolderMetadataByIdScope",
    });
}
function serializeCreateFolderMetadataByIdRequestBody(val) {
    return Object.fromEntries(Object.entries(val).map(([k, v]) => [
        k,
        (function (v) {
            return v;
        })(v),
    ]));
}
function deserializeCreateFolderMetadataByIdRequestBody(val) {
    return (0, json_js_2.sdIsMap)(val)
        ? Object.fromEntries(Object.entries(val).map(([k, v]) => [
            k,
            (function (v) {
                return v;
            })(v),
        ]))
        : {};
}
function serializeUpdateFolderMetadataByIdScope(val) {
    return val;
}
function deserializeUpdateFolderMetadataByIdScope(val) {
    if (val == 'global') {
        return val;
    }
    if (val == 'enterprise') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize UpdateFolderMetadataByIdScope",
    });
}
function serializeUpdateFolderMetadataByIdRequestBodyOpField(val) {
    return val;
}
function deserializeUpdateFolderMetadataByIdRequestBodyOpField(val) {
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
        message: "Can't deserialize UpdateFolderMetadataByIdRequestBodyOpField",
    });
}
function serializeUpdateFolderMetadataByIdRequestBody(val) {
    return {
        ['op']: val.op == void 0
            ? void 0
            : serializeUpdateFolderMetadataByIdRequestBodyOpField(val.op),
        ['path']: val.path == void 0 ? void 0 : val.path,
        ['value']: val.value == void 0 ? void 0 : val.value,
        ['from']: val.from == void 0 ? void 0 : val.from,
    };
}
function deserializeUpdateFolderMetadataByIdRequestBody(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "UpdateFolderMetadataByIdRequestBody"',
        });
    }
    const op = val.op == void 0
        ? void 0
        : deserializeUpdateFolderMetadataByIdRequestBodyOpField(val.op);
    if (!(val.path == void 0) && !(0, json_js_1.sdIsString)(val.path)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "path" of type "UpdateFolderMetadataByIdRequestBody"',
        });
    }
    const path = val.path == void 0 ? void 0 : val.path;
    if (!(val.value == void 0) && !(0, json_js_1.sdIsString)(val.value)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "value" of type "UpdateFolderMetadataByIdRequestBody"',
        });
    }
    const value = val.value == void 0 ? void 0 : val.value;
    if (!(val.from == void 0) && !(0, json_js_1.sdIsString)(val.from)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "from" of type "UpdateFolderMetadataByIdRequestBody"',
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
function serializeDeleteFolderMetadataByIdScope(val) {
    return val;
}
function deserializeDeleteFolderMetadataByIdScope(val) {
    if (val == 'global') {
        return val;
    }
    if (val == 'enterprise') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize DeleteFolderMetadataByIdScope",
    });
}
//# sourceMappingURL=folderMetadata.generated.js.map