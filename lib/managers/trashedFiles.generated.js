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
exports.TrashedFilesManager = exports.DeleteTrashedFileByIdHeaders = exports.GetTrashedFileByIdHeaders = exports.RestoreFileFromTrashHeaders = exports.DeleteTrashedFileByIdOptionals = exports.GetTrashedFileByIdOptionals = exports.RestoreFileFromTrashOptionals = void 0;
exports.serializeRestoreFileFromTrashRequestBodyParentField = serializeRestoreFileFromTrashRequestBodyParentField;
exports.deserializeRestoreFileFromTrashRequestBodyParentField = deserializeRestoreFileFromTrashRequestBodyParentField;
exports.serializeRestoreFileFromTrashRequestBody = serializeRestoreFileFromTrashRequestBody;
exports.deserializeRestoreFileFromTrashRequestBody = deserializeRestoreFileFromTrashRequestBody;
const trashFileRestored_generated_js_1 = require("../schemas/trashFileRestored.generated.js");
const trashFile_generated_js_1 = require("../schemas/trashFile.generated.js");
const network_generated_js_1 = require("../networking/network.generated.js");
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
const fetch_js_1 = require("../networking/fetch.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
class RestoreFileFromTrashOptionals {
    constructor(fields) {
        this.requestBody = {};
        this.queryParams = {};
        this.headers = new RestoreFileFromTrashHeaders({});
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
exports.RestoreFileFromTrashOptionals = RestoreFileFromTrashOptionals;
class GetTrashedFileByIdOptionals {
    constructor(fields) {
        this.queryParams = {};
        this.headers = new GetTrashedFileByIdHeaders({});
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
exports.GetTrashedFileByIdOptionals = GetTrashedFileByIdOptionals;
class DeleteTrashedFileByIdOptionals {
    constructor(fields) {
        this.headers = new DeleteTrashedFileByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.DeleteTrashedFileByIdOptionals = DeleteTrashedFileByIdOptionals;
class RestoreFileFromTrashHeaders {
    constructor(fields) {
        this.extraHeaders = {};
        if (fields.extraHeaders) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.RestoreFileFromTrashHeaders = RestoreFileFromTrashHeaders;
class GetTrashedFileByIdHeaders {
    constructor(fields) {
        this.extraHeaders = {};
        if (fields.extraHeaders) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.GetTrashedFileByIdHeaders = GetTrashedFileByIdHeaders;
class DeleteTrashedFileByIdHeaders {
    constructor(fields) {
        this.extraHeaders = {};
        if (fields.extraHeaders) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.DeleteTrashedFileByIdHeaders = DeleteTrashedFileByIdHeaders;
class TrashedFilesManager {
    constructor(fields) {
        this.networkSession = new network_generated_js_1.NetworkSession({});
        if (fields.auth) {
            this.auth = fields.auth;
        }
        if (fields.networkSession) {
            this.networkSession = fields.networkSession;
        }
    }
    restoreFileFromTrash(fileId_1) {
        return __awaiter(this, arguments, void 0, function* (fileId, optionalsInput = {}) {
            const optionals = new RestoreFileFromTrashOptionals({
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
            const response = (yield (0, fetch_js_1.fetch)(''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/files/', (0, utils_js_2.toString)(fileId)), {
                method: 'POST',
                params: queryParamsMap,
                headers: headersMap,
                data: serializeRestoreFileFromTrashRequestBody(requestBody),
                contentType: 'application/json',
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return (0, trashFileRestored_generated_js_1.deserializeTrashFileRestored)(response.data);
        });
    }
    getTrashedFileById(fileId_1) {
        return __awaiter(this, arguments, void 0, function* (fileId, optionalsInput = {}) {
            const optionals = new GetTrashedFileByIdOptionals({
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
            const response = (yield (0, fetch_js_1.fetch)(''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/files/', (0, utils_js_2.toString)(fileId), '/trash'), {
                method: 'GET',
                params: queryParamsMap,
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return (0, trashFile_generated_js_1.deserializeTrashFile)(response.data);
        });
    }
    deleteTrashedFileById(fileId_1) {
        return __awaiter(this, arguments, void 0, function* (fileId, optionalsInput = {}) {
            const optionals = new DeleteTrashedFileByIdOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = (yield (0, fetch_js_1.fetch)(''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/files/', (0, utils_js_2.toString)(fileId), '/trash'), {
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
exports.TrashedFilesManager = TrashedFilesManager;
function serializeRestoreFileFromTrashRequestBodyParentField(val) {
    return { ['id']: val.id == void 0 ? void 0 : val.id };
}
function deserializeRestoreFileFromTrashRequestBodyParentField(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "RestoreFileFromTrashRequestBodyParentField"',
        });
    }
    if (!(val.id == void 0) && !(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "RestoreFileFromTrashRequestBodyParentField"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    return { id: id };
}
function serializeRestoreFileFromTrashRequestBody(val) {
    return {
        ['name']: val.name == void 0 ? void 0 : val.name,
        ['parent']: val.parent == void 0
            ? void 0
            : serializeRestoreFileFromTrashRequestBodyParentField(val.parent),
    };
}
function deserializeRestoreFileFromTrashRequestBody(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "RestoreFileFromTrashRequestBody"',
        });
    }
    if (!(val.name == void 0) && !(0, json_js_1.sdIsString)(val.name)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "name" of type "RestoreFileFromTrashRequestBody"',
        });
    }
    const name = val.name == void 0 ? void 0 : val.name;
    const parent = val.parent == void 0
        ? void 0
        : deserializeRestoreFileFromTrashRequestBodyParentField(val.parent);
    return {
        name: name,
        parent: parent,
    };
}
//# sourceMappingURL=trashedFiles.generated.js.map