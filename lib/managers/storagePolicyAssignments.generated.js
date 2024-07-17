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
exports.StoragePolicyAssignmentsManager = exports.DeleteStoragePolicyAssignmentByIdHeaders = exports.UpdateStoragePolicyAssignmentByIdHeaders = exports.UpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyField = exports.GetStoragePolicyAssignmentByIdHeaders = exports.CreateStoragePolicyAssignmentHeaders = exports.CreateStoragePolicyAssignmentRequestBodyStoragePolicyField = exports.GetStoragePolicyAssignmentsHeaders = exports.DeleteStoragePolicyAssignmentByIdOptionals = exports.UpdateStoragePolicyAssignmentByIdOptionals = exports.GetStoragePolicyAssignmentByIdOptionals = exports.CreateStoragePolicyAssignmentOptionals = exports.GetStoragePolicyAssignmentsOptionals = void 0;
exports.serializeGetStoragePolicyAssignmentsQueryParamsResolvedForTypeField = serializeGetStoragePolicyAssignmentsQueryParamsResolvedForTypeField;
exports.deserializeGetStoragePolicyAssignmentsQueryParamsResolvedForTypeField = deserializeGetStoragePolicyAssignmentsQueryParamsResolvedForTypeField;
exports.serializeCreateStoragePolicyAssignmentRequestBodyStoragePolicyTypeField = serializeCreateStoragePolicyAssignmentRequestBodyStoragePolicyTypeField;
exports.deserializeCreateStoragePolicyAssignmentRequestBodyStoragePolicyTypeField = deserializeCreateStoragePolicyAssignmentRequestBodyStoragePolicyTypeField;
exports.serializeCreateStoragePolicyAssignmentRequestBodyStoragePolicyField = serializeCreateStoragePolicyAssignmentRequestBodyStoragePolicyField;
exports.deserializeCreateStoragePolicyAssignmentRequestBodyStoragePolicyField = deserializeCreateStoragePolicyAssignmentRequestBodyStoragePolicyField;
exports.serializeCreateStoragePolicyAssignmentRequestBodyStoragePolicyFieldInput = serializeCreateStoragePolicyAssignmentRequestBodyStoragePolicyFieldInput;
exports.deserializeCreateStoragePolicyAssignmentRequestBodyStoragePolicyFieldInput = deserializeCreateStoragePolicyAssignmentRequestBodyStoragePolicyFieldInput;
exports.serializeCreateStoragePolicyAssignmentRequestBodyAssignedToTypeField = serializeCreateStoragePolicyAssignmentRequestBodyAssignedToTypeField;
exports.deserializeCreateStoragePolicyAssignmentRequestBodyAssignedToTypeField = deserializeCreateStoragePolicyAssignmentRequestBodyAssignedToTypeField;
exports.serializeCreateStoragePolicyAssignmentRequestBodyAssignedToField = serializeCreateStoragePolicyAssignmentRequestBodyAssignedToField;
exports.deserializeCreateStoragePolicyAssignmentRequestBodyAssignedToField = deserializeCreateStoragePolicyAssignmentRequestBodyAssignedToField;
exports.serializeCreateStoragePolicyAssignmentRequestBody = serializeCreateStoragePolicyAssignmentRequestBody;
exports.deserializeCreateStoragePolicyAssignmentRequestBody = deserializeCreateStoragePolicyAssignmentRequestBody;
exports.serializeUpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyTypeField = serializeUpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyTypeField;
exports.deserializeUpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyTypeField = deserializeUpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyTypeField;
exports.serializeUpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyField = serializeUpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyField;
exports.deserializeUpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyField = deserializeUpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyField;
exports.serializeUpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyFieldInput = serializeUpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyFieldInput;
exports.deserializeUpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyFieldInput = deserializeUpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyFieldInput;
exports.serializeUpdateStoragePolicyAssignmentByIdRequestBody = serializeUpdateStoragePolicyAssignmentByIdRequestBody;
exports.deserializeUpdateStoragePolicyAssignmentByIdRequestBody = deserializeUpdateStoragePolicyAssignmentByIdRequestBody;
const storagePolicyAssignments_generated_js_1 = require("../schemas/storagePolicyAssignments.generated.js");
const storagePolicyAssignment_generated_js_1 = require("../schemas/storagePolicyAssignment.generated.js");
const network_generated_js_1 = require("../networking/network.generated.js");
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
const fetch_js_1 = require("../networking/fetch.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
class GetStoragePolicyAssignmentsOptionals {
    constructor(fields) {
        this.headers = new GetStoragePolicyAssignmentsHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.GetStoragePolicyAssignmentsOptionals = GetStoragePolicyAssignmentsOptionals;
class CreateStoragePolicyAssignmentOptionals {
    constructor(fields) {
        this.headers = new CreateStoragePolicyAssignmentHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.CreateStoragePolicyAssignmentOptionals = CreateStoragePolicyAssignmentOptionals;
class GetStoragePolicyAssignmentByIdOptionals {
    constructor(fields) {
        this.headers = new GetStoragePolicyAssignmentByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.GetStoragePolicyAssignmentByIdOptionals = GetStoragePolicyAssignmentByIdOptionals;
class UpdateStoragePolicyAssignmentByIdOptionals {
    constructor(fields) {
        this.headers = new UpdateStoragePolicyAssignmentByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.UpdateStoragePolicyAssignmentByIdOptionals = UpdateStoragePolicyAssignmentByIdOptionals;
class DeleteStoragePolicyAssignmentByIdOptionals {
    constructor(fields) {
        this.headers = new DeleteStoragePolicyAssignmentByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.DeleteStoragePolicyAssignmentByIdOptionals = DeleteStoragePolicyAssignmentByIdOptionals;
class GetStoragePolicyAssignmentsHeaders {
    constructor(fields) {
        this.extraHeaders = {};
        if (fields.extraHeaders) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.GetStoragePolicyAssignmentsHeaders = GetStoragePolicyAssignmentsHeaders;
class CreateStoragePolicyAssignmentRequestBodyStoragePolicyField {
    constructor(fields) {
        this.type = 'storage_policy';
        if (fields.type) {
            this.type = fields.type;
        }
        if (fields.id) {
            this.id = fields.id;
        }
    }
}
exports.CreateStoragePolicyAssignmentRequestBodyStoragePolicyField = CreateStoragePolicyAssignmentRequestBodyStoragePolicyField;
class CreateStoragePolicyAssignmentHeaders {
    constructor(fields) {
        this.extraHeaders = {};
        if (fields.extraHeaders) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.CreateStoragePolicyAssignmentHeaders = CreateStoragePolicyAssignmentHeaders;
class GetStoragePolicyAssignmentByIdHeaders {
    constructor(fields) {
        this.extraHeaders = {};
        if (fields.extraHeaders) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.GetStoragePolicyAssignmentByIdHeaders = GetStoragePolicyAssignmentByIdHeaders;
class UpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyField {
    constructor(fields) {
        this.type = 'storage_policy';
        if (fields.type) {
            this.type = fields.type;
        }
        if (fields.id) {
            this.id = fields.id;
        }
    }
}
exports.UpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyField = UpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyField;
class UpdateStoragePolicyAssignmentByIdHeaders {
    constructor(fields) {
        this.extraHeaders = {};
        if (fields.extraHeaders) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.UpdateStoragePolicyAssignmentByIdHeaders = UpdateStoragePolicyAssignmentByIdHeaders;
class DeleteStoragePolicyAssignmentByIdHeaders {
    constructor(fields) {
        this.extraHeaders = {};
        if (fields.extraHeaders) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.DeleteStoragePolicyAssignmentByIdHeaders = DeleteStoragePolicyAssignmentByIdHeaders;
class StoragePolicyAssignmentsManager {
    constructor(fields) {
        this.networkSession = new network_generated_js_1.NetworkSession({});
        if (fields.auth) {
            this.auth = fields.auth;
        }
        if (fields.networkSession) {
            this.networkSession = fields.networkSession;
        }
    }
    getStoragePolicyAssignments(queryParams_1) {
        return __awaiter(this, arguments, void 0, function* (queryParams, optionalsInput = {}) {
            const optionals = new GetStoragePolicyAssignmentsOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const queryParamsMap = (0, utils_js_1.prepareParams)({
                ['marker']: (0, utils_js_2.toString)(queryParams.marker),
                ['resolved_for_type']: (0, utils_js_2.toString)(queryParams.resolvedForType),
                ['resolved_for_id']: (0, utils_js_2.toString)(queryParams.resolvedForId),
            });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = (yield (0, fetch_js_1.fetch)(''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/storage_policy_assignments'), {
                method: 'GET',
                params: queryParamsMap,
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return (0, storagePolicyAssignments_generated_js_1.deserializeStoragePolicyAssignments)(response.data);
        });
    }
    createStoragePolicyAssignment(requestBody_1) {
        return __awaiter(this, arguments, void 0, function* (requestBody, optionalsInput = {}) {
            const optionals = new CreateStoragePolicyAssignmentOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = (yield (0, fetch_js_1.fetch)(''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/storage_policy_assignments'), {
                method: 'POST',
                headers: headersMap,
                data: serializeCreateStoragePolicyAssignmentRequestBody(requestBody),
                contentType: 'application/json',
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return (0, storagePolicyAssignment_generated_js_1.deserializeStoragePolicyAssignment)(response.data);
        });
    }
    getStoragePolicyAssignmentById(storagePolicyAssignmentId_1) {
        return __awaiter(this, arguments, void 0, function* (storagePolicyAssignmentId, optionalsInput = {}) {
            const optionals = new GetStoragePolicyAssignmentByIdOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = (yield (0, fetch_js_1.fetch)(''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/storage_policy_assignments/', (0, utils_js_2.toString)(storagePolicyAssignmentId)), {
                method: 'GET',
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return (0, storagePolicyAssignment_generated_js_1.deserializeStoragePolicyAssignment)(response.data);
        });
    }
    updateStoragePolicyAssignmentById(storagePolicyAssignmentId_1, requestBody_1) {
        return __awaiter(this, arguments, void 0, function* (storagePolicyAssignmentId, requestBody, optionalsInput = {}) {
            const optionals = new UpdateStoragePolicyAssignmentByIdOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = (yield (0, fetch_js_1.fetch)(''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/storage_policy_assignments/', (0, utils_js_2.toString)(storagePolicyAssignmentId)), {
                method: 'PUT',
                headers: headersMap,
                data: serializeUpdateStoragePolicyAssignmentByIdRequestBody(requestBody),
                contentType: 'application/json',
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return (0, storagePolicyAssignment_generated_js_1.deserializeStoragePolicyAssignment)(response.data);
        });
    }
    deleteStoragePolicyAssignmentById(storagePolicyAssignmentId_1) {
        return __awaiter(this, arguments, void 0, function* (storagePolicyAssignmentId, optionalsInput = {}) {
            const optionals = new DeleteStoragePolicyAssignmentByIdOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = (yield (0, fetch_js_1.fetch)(''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/storage_policy_assignments/', (0, utils_js_2.toString)(storagePolicyAssignmentId)), {
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
exports.StoragePolicyAssignmentsManager = StoragePolicyAssignmentsManager;
function serializeGetStoragePolicyAssignmentsQueryParamsResolvedForTypeField(val) {
    return val;
}
function deserializeGetStoragePolicyAssignmentsQueryParamsResolvedForTypeField(val) {
    if (val == 'user') {
        return val;
    }
    if (val == 'enterprise') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize GetStoragePolicyAssignmentsQueryParamsResolvedForTypeField",
    });
}
function serializeCreateStoragePolicyAssignmentRequestBodyStoragePolicyTypeField(val) {
    return val;
}
function deserializeCreateStoragePolicyAssignmentRequestBodyStoragePolicyTypeField(val) {
    if (val == 'storage_policy') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize CreateStoragePolicyAssignmentRequestBodyStoragePolicyTypeField",
    });
}
function serializeCreateStoragePolicyAssignmentRequestBodyStoragePolicyField(val) {
    return {
        ['type']: serializeCreateStoragePolicyAssignmentRequestBodyStoragePolicyTypeField(val.type),
        ['id']: val.id,
    };
}
function deserializeCreateStoragePolicyAssignmentRequestBodyStoragePolicyField(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "CreateStoragePolicyAssignmentRequestBodyStoragePolicyField"',
        });
    }
    if (val.type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "type" of type "CreateStoragePolicyAssignmentRequestBodyStoragePolicyField" to be defined',
        });
    }
    const type = deserializeCreateStoragePolicyAssignmentRequestBodyStoragePolicyTypeField(val.type);
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "CreateStoragePolicyAssignmentRequestBodyStoragePolicyField" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "CreateStoragePolicyAssignmentRequestBodyStoragePolicyField"',
        });
    }
    const id = val.id;
    return {
        type: type,
        id: id,
    };
}
function serializeCreateStoragePolicyAssignmentRequestBodyStoragePolicyFieldInput(val) {
    return {
        ['type']: val.type == void 0
            ? void 0
            : serializeCreateStoragePolicyAssignmentRequestBodyStoragePolicyTypeField(val.type),
        ['id']: val.id,
    };
}
function deserializeCreateStoragePolicyAssignmentRequestBodyStoragePolicyFieldInput(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "CreateStoragePolicyAssignmentRequestBodyStoragePolicyFieldInput"',
        });
    }
    const type = val.type == void 0
        ? void 0
        : deserializeCreateStoragePolicyAssignmentRequestBodyStoragePolicyTypeField(val.type);
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "CreateStoragePolicyAssignmentRequestBodyStoragePolicyFieldInput" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "CreateStoragePolicyAssignmentRequestBodyStoragePolicyFieldInput"',
        });
    }
    const id = val.id;
    return {
        type: type,
        id: id,
    };
}
function serializeCreateStoragePolicyAssignmentRequestBodyAssignedToTypeField(val) {
    return val;
}
function deserializeCreateStoragePolicyAssignmentRequestBodyAssignedToTypeField(val) {
    if (val == 'user') {
        return val;
    }
    if (val == 'enterprise') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize CreateStoragePolicyAssignmentRequestBodyAssignedToTypeField",
    });
}
function serializeCreateStoragePolicyAssignmentRequestBodyAssignedToField(val) {
    return {
        ['type']: serializeCreateStoragePolicyAssignmentRequestBodyAssignedToTypeField(val.type),
        ['id']: val.id,
    };
}
function deserializeCreateStoragePolicyAssignmentRequestBodyAssignedToField(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "CreateStoragePolicyAssignmentRequestBodyAssignedToField"',
        });
    }
    if (val.type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "type" of type "CreateStoragePolicyAssignmentRequestBodyAssignedToField" to be defined',
        });
    }
    const type = deserializeCreateStoragePolicyAssignmentRequestBodyAssignedToTypeField(val.type);
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "CreateStoragePolicyAssignmentRequestBodyAssignedToField" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "CreateStoragePolicyAssignmentRequestBodyAssignedToField"',
        });
    }
    const id = val.id;
    return {
        type: type,
        id: id,
    };
}
function serializeCreateStoragePolicyAssignmentRequestBody(val) {
    return {
        ['storage_policy']: serializeCreateStoragePolicyAssignmentRequestBodyStoragePolicyField(val.storagePolicy),
        ['assigned_to']: serializeCreateStoragePolicyAssignmentRequestBodyAssignedToField(val.assignedTo),
    };
}
function deserializeCreateStoragePolicyAssignmentRequestBody(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "CreateStoragePolicyAssignmentRequestBody"',
        });
    }
    if (val.storage_policy == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "storage_policy" of type "CreateStoragePolicyAssignmentRequestBody" to be defined',
        });
    }
    const storagePolicy = deserializeCreateStoragePolicyAssignmentRequestBodyStoragePolicyField(val.storage_policy);
    if (val.assigned_to == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "assigned_to" of type "CreateStoragePolicyAssignmentRequestBody" to be defined',
        });
    }
    const assignedTo = deserializeCreateStoragePolicyAssignmentRequestBodyAssignedToField(val.assigned_to);
    return {
        storagePolicy: storagePolicy,
        assignedTo: assignedTo,
    };
}
function serializeUpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyTypeField(val) {
    return val;
}
function deserializeUpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyTypeField(val) {
    if (val == 'storage_policy') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize UpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyTypeField",
    });
}
function serializeUpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyField(val) {
    return {
        ['type']: serializeUpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyTypeField(val.type),
        ['id']: val.id,
    };
}
function deserializeUpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyField(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "UpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyField"',
        });
    }
    if (val.type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "type" of type "UpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyField" to be defined',
        });
    }
    const type = deserializeUpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyTypeField(val.type);
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "UpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyField" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "UpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyField"',
        });
    }
    const id = val.id;
    return {
        type: type,
        id: id,
    };
}
function serializeUpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyFieldInput(val) {
    return {
        ['type']: val.type == void 0
            ? void 0
            : serializeUpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyTypeField(val.type),
        ['id']: val.id,
    };
}
function deserializeUpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyFieldInput(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "UpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyFieldInput"',
        });
    }
    const type = val.type == void 0
        ? void 0
        : deserializeUpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyTypeField(val.type);
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "UpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyFieldInput" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "UpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyFieldInput"',
        });
    }
    const id = val.id;
    return {
        type: type,
        id: id,
    };
}
function serializeUpdateStoragePolicyAssignmentByIdRequestBody(val) {
    return {
        ['storage_policy']: serializeUpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyField(val.storagePolicy),
    };
}
function deserializeUpdateStoragePolicyAssignmentByIdRequestBody(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "UpdateStoragePolicyAssignmentByIdRequestBody"',
        });
    }
    if (val.storage_policy == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "storage_policy" of type "UpdateStoragePolicyAssignmentByIdRequestBody" to be defined',
        });
    }
    const storagePolicy = deserializeUpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyField(val.storage_policy);
    return {
        storagePolicy: storagePolicy,
    };
}
//# sourceMappingURL=storagePolicyAssignments.generated.js.map