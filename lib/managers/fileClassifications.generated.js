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
exports.FileClassificationsManager = exports.DeleteClassificationFromFileHeaders = exports.UpdateClassificationOnFileHeaders = exports.UpdateClassificationOnFileRequestBody = exports.AddClassificationToFileHeaders = exports.GetClassificationOnFileHeaders = exports.DeleteClassificationFromFileOptionals = exports.UpdateClassificationOnFileOptionals = exports.AddClassificationToFileOptionals = exports.GetClassificationOnFileOptionals = void 0;
exports.serializeAddClassificationToFileRequestBody = serializeAddClassificationToFileRequestBody;
exports.deserializeAddClassificationToFileRequestBody = deserializeAddClassificationToFileRequestBody;
exports.serializeUpdateClassificationOnFileRequestBodyOpField = serializeUpdateClassificationOnFileRequestBodyOpField;
exports.deserializeUpdateClassificationOnFileRequestBodyOpField = deserializeUpdateClassificationOnFileRequestBodyOpField;
exports.serializeUpdateClassificationOnFileRequestBodyPathField = serializeUpdateClassificationOnFileRequestBodyPathField;
exports.deserializeUpdateClassificationOnFileRequestBodyPathField = deserializeUpdateClassificationOnFileRequestBodyPathField;
exports.serializeUpdateClassificationOnFileRequestBody = serializeUpdateClassificationOnFileRequestBody;
exports.deserializeUpdateClassificationOnFileRequestBody = deserializeUpdateClassificationOnFileRequestBody;
exports.serializeUpdateClassificationOnFileRequestBodyInput = serializeUpdateClassificationOnFileRequestBodyInput;
exports.deserializeUpdateClassificationOnFileRequestBodyInput = deserializeUpdateClassificationOnFileRequestBodyInput;
const classification_generated_js_1 = require("../schemas/classification.generated.js");
const network_generated_js_1 = require("../networking/network.generated.js");
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
const fetch_js_1 = require("../networking/fetch.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
class GetClassificationOnFileOptionals {
    constructor(fields) {
        this.headers = new GetClassificationOnFileHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.GetClassificationOnFileOptionals = GetClassificationOnFileOptionals;
class AddClassificationToFileOptionals {
    constructor(fields) {
        this.requestBody = {};
        this.headers = new AddClassificationToFileHeaders({});
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
exports.AddClassificationToFileOptionals = AddClassificationToFileOptionals;
class UpdateClassificationOnFileOptionals {
    constructor(fields) {
        this.headers = new UpdateClassificationOnFileHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.UpdateClassificationOnFileOptionals = UpdateClassificationOnFileOptionals;
class DeleteClassificationFromFileOptionals {
    constructor(fields) {
        this.headers = new DeleteClassificationFromFileHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.DeleteClassificationFromFileOptionals = DeleteClassificationFromFileOptionals;
class GetClassificationOnFileHeaders {
    constructor(fields) {
        this.extraHeaders = {};
        if (fields.extraHeaders) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.GetClassificationOnFileHeaders = GetClassificationOnFileHeaders;
class AddClassificationToFileHeaders {
    constructor(fields) {
        this.extraHeaders = {};
        if (fields.extraHeaders) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.AddClassificationToFileHeaders = AddClassificationToFileHeaders;
class UpdateClassificationOnFileRequestBody {
    constructor(fields) {
        this.op = 'replace';
        this.path = '/Box__Security__Classification__Key';
        if (fields.op) {
            this.op = fields.op;
        }
        if (fields.path) {
            this.path = fields.path;
        }
        if (fields.value) {
            this.value = fields.value;
        }
    }
}
exports.UpdateClassificationOnFileRequestBody = UpdateClassificationOnFileRequestBody;
class UpdateClassificationOnFileHeaders {
    constructor(fields) {
        this.extraHeaders = {};
        if (fields.extraHeaders) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.UpdateClassificationOnFileHeaders = UpdateClassificationOnFileHeaders;
class DeleteClassificationFromFileHeaders {
    constructor(fields) {
        this.extraHeaders = {};
        if (fields.extraHeaders) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.DeleteClassificationFromFileHeaders = DeleteClassificationFromFileHeaders;
class FileClassificationsManager {
    constructor(fields) {
        this.networkSession = new network_generated_js_1.NetworkSession({});
        if (fields.auth) {
            this.auth = fields.auth;
        }
        if (fields.networkSession) {
            this.networkSession = fields.networkSession;
        }
    }
    getClassificationOnFile(fileId_1) {
        return __awaiter(this, arguments, void 0, function* (fileId, optionalsInput = {}) {
            const optionals = new GetClassificationOnFileOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = (yield (0, fetch_js_1.fetch)(''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/files/', (0, utils_js_2.toString)(fileId), '/metadata/enterprise/securityClassification-6VMVochwUWo'), {
                method: 'GET',
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return (0, classification_generated_js_1.deserializeClassification)(response.data);
        });
    }
    addClassificationToFile(fileId_1) {
        return __awaiter(this, arguments, void 0, function* (fileId, optionalsInput = {}) {
            const optionals = new AddClassificationToFileOptionals({
                requestBody: optionalsInput.requestBody,
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const requestBody = optionals.requestBody;
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = (yield (0, fetch_js_1.fetch)(''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/files/', (0, utils_js_2.toString)(fileId), '/metadata/enterprise/securityClassification-6VMVochwUWo'), {
                method: 'POST',
                headers: headersMap,
                data: serializeAddClassificationToFileRequestBody(requestBody),
                contentType: 'application/json',
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return (0, classification_generated_js_1.deserializeClassification)(response.data);
        });
    }
    updateClassificationOnFile(fileId_1, requestBody_1) {
        return __awaiter(this, arguments, void 0, function* (fileId, requestBody, optionalsInput = {}) {
            const optionals = new UpdateClassificationOnFileOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = (yield (0, fetch_js_1.fetch)(''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/files/', (0, utils_js_2.toString)(fileId), '/metadata/enterprise/securityClassification-6VMVochwUWo'), {
                method: 'PUT',
                headers: headersMap,
                data: requestBody.map(serializeUpdateClassificationOnFileRequestBody),
                contentType: 'application/json-patch+json',
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return (0, classification_generated_js_1.deserializeClassification)(response.data);
        });
    }
    deleteClassificationFromFile(fileId_1) {
        return __awaiter(this, arguments, void 0, function* (fileId, optionalsInput = {}) {
            const optionals = new DeleteClassificationFromFileOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = (yield (0, fetch_js_1.fetch)(''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/files/', (0, utils_js_2.toString)(fileId), '/metadata/enterprise/securityClassification-6VMVochwUWo'), {
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
exports.FileClassificationsManager = FileClassificationsManager;
function serializeAddClassificationToFileRequestBody(val) {
    return {
        ['Box__Security__Classification__Key']: val.boxSecurityClassificationKey == void 0
            ? void 0
            : val.boxSecurityClassificationKey,
    };
}
function deserializeAddClassificationToFileRequestBody(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "AddClassificationToFileRequestBody"',
        });
    }
    if (!(val.Box__Security__Classification__Key == void 0) &&
        !(0, json_js_1.sdIsString)(val.Box__Security__Classification__Key)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "Box__Security__Classification__Key" of type "AddClassificationToFileRequestBody"',
        });
    }
    const boxSecurityClassificationKey = val.Box__Security__Classification__Key == void 0
        ? void 0
        : val.Box__Security__Classification__Key;
    return {
        boxSecurityClassificationKey: boxSecurityClassificationKey,
    };
}
function serializeUpdateClassificationOnFileRequestBodyOpField(val) {
    return val;
}
function deserializeUpdateClassificationOnFileRequestBodyOpField(val) {
    if (val == 'replace') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize UpdateClassificationOnFileRequestBodyOpField",
    });
}
function serializeUpdateClassificationOnFileRequestBodyPathField(val) {
    return val;
}
function deserializeUpdateClassificationOnFileRequestBodyPathField(val) {
    if (val == '/Box__Security__Classification__Key') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize UpdateClassificationOnFileRequestBodyPathField",
    });
}
function serializeUpdateClassificationOnFileRequestBody(val) {
    return {
        ['op']: serializeUpdateClassificationOnFileRequestBodyOpField(val.op),
        ['path']: serializeUpdateClassificationOnFileRequestBodyPathField(val.path),
        ['value']: val.value,
    };
}
function deserializeUpdateClassificationOnFileRequestBody(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "UpdateClassificationOnFileRequestBody"',
        });
    }
    if (val.op == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "op" of type "UpdateClassificationOnFileRequestBody" to be defined',
        });
    }
    const op = deserializeUpdateClassificationOnFileRequestBodyOpField(val.op);
    if (val.path == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "path" of type "UpdateClassificationOnFileRequestBody" to be defined',
        });
    }
    const path = deserializeUpdateClassificationOnFileRequestBodyPathField(val.path);
    if (val.value == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "value" of type "UpdateClassificationOnFileRequestBody" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.value)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "value" of type "UpdateClassificationOnFileRequestBody"',
        });
    }
    const value = val.value;
    return {
        op: op,
        path: path,
        value: value,
    };
}
function serializeUpdateClassificationOnFileRequestBodyInput(val) {
    return {
        ['op']: val.op == void 0
            ? void 0
            : serializeUpdateClassificationOnFileRequestBodyOpField(val.op),
        ['path']: val.path == void 0
            ? void 0
            : serializeUpdateClassificationOnFileRequestBodyPathField(val.path),
        ['value']: val.value,
    };
}
function deserializeUpdateClassificationOnFileRequestBodyInput(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "UpdateClassificationOnFileRequestBodyInput"',
        });
    }
    const op = val.op == void 0
        ? void 0
        : deserializeUpdateClassificationOnFileRequestBodyOpField(val.op);
    const path = val.path == void 0
        ? void 0
        : deserializeUpdateClassificationOnFileRequestBodyPathField(val.path);
    if (val.value == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "value" of type "UpdateClassificationOnFileRequestBodyInput" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.value)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "value" of type "UpdateClassificationOnFileRequestBodyInput"',
        });
    }
    const value = val.value;
    return {
        op: op,
        path: path,
        value: value,
    };
}
//# sourceMappingURL=fileClassifications.generated.js.map