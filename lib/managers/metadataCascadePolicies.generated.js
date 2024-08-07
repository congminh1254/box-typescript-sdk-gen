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
exports.MetadataCascadePoliciesManager = exports.ApplyMetadataCascadePolicyHeaders = exports.DeleteMetadataCascadePolicyByIdHeaders = exports.GetMetadataCascadePolicyByIdHeaders = exports.CreateMetadataCascadePolicyHeaders = exports.GetMetadataCascadePoliciesHeaders = exports.ApplyMetadataCascadePolicyOptionals = exports.DeleteMetadataCascadePolicyByIdOptionals = exports.GetMetadataCascadePolicyByIdOptionals = exports.CreateMetadataCascadePolicyOptionals = exports.GetMetadataCascadePoliciesOptionals = void 0;
exports.serializeCreateMetadataCascadePolicyRequestBodyScopeField = serializeCreateMetadataCascadePolicyRequestBodyScopeField;
exports.deserializeCreateMetadataCascadePolicyRequestBodyScopeField = deserializeCreateMetadataCascadePolicyRequestBodyScopeField;
exports.serializeCreateMetadataCascadePolicyRequestBody = serializeCreateMetadataCascadePolicyRequestBody;
exports.deserializeCreateMetadataCascadePolicyRequestBody = deserializeCreateMetadataCascadePolicyRequestBody;
exports.serializeApplyMetadataCascadePolicyRequestBodyConflictResolutionField = serializeApplyMetadataCascadePolicyRequestBodyConflictResolutionField;
exports.deserializeApplyMetadataCascadePolicyRequestBodyConflictResolutionField = deserializeApplyMetadataCascadePolicyRequestBodyConflictResolutionField;
exports.serializeApplyMetadataCascadePolicyRequestBody = serializeApplyMetadataCascadePolicyRequestBody;
exports.deserializeApplyMetadataCascadePolicyRequestBody = deserializeApplyMetadataCascadePolicyRequestBody;
const metadataCascadePolicies_generated_js_1 = require("../schemas/metadataCascadePolicies.generated.js");
const metadataCascadePolicy_generated_js_1 = require("../schemas/metadataCascadePolicy.generated.js");
const network_generated_js_1 = require("../networking/network.generated.js");
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
const fetch_js_1 = require("../networking/fetch.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
class GetMetadataCascadePoliciesOptionals {
    constructor(fields) {
        this.headers = new GetMetadataCascadePoliciesHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.GetMetadataCascadePoliciesOptionals = GetMetadataCascadePoliciesOptionals;
class CreateMetadataCascadePolicyOptionals {
    constructor(fields) {
        this.headers = new CreateMetadataCascadePolicyHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.CreateMetadataCascadePolicyOptionals = CreateMetadataCascadePolicyOptionals;
class GetMetadataCascadePolicyByIdOptionals {
    constructor(fields) {
        this.headers = new GetMetadataCascadePolicyByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.GetMetadataCascadePolicyByIdOptionals = GetMetadataCascadePolicyByIdOptionals;
class DeleteMetadataCascadePolicyByIdOptionals {
    constructor(fields) {
        this.headers = new DeleteMetadataCascadePolicyByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.DeleteMetadataCascadePolicyByIdOptionals = DeleteMetadataCascadePolicyByIdOptionals;
class ApplyMetadataCascadePolicyOptionals {
    constructor(fields) {
        this.headers = new ApplyMetadataCascadePolicyHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.ApplyMetadataCascadePolicyOptionals = ApplyMetadataCascadePolicyOptionals;
class GetMetadataCascadePoliciesHeaders {
    constructor(fields) {
        this.extraHeaders = {};
        if (fields.extraHeaders) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.GetMetadataCascadePoliciesHeaders = GetMetadataCascadePoliciesHeaders;
class CreateMetadataCascadePolicyHeaders {
    constructor(fields) {
        this.extraHeaders = {};
        if (fields.extraHeaders) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.CreateMetadataCascadePolicyHeaders = CreateMetadataCascadePolicyHeaders;
class GetMetadataCascadePolicyByIdHeaders {
    constructor(fields) {
        this.extraHeaders = {};
        if (fields.extraHeaders) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.GetMetadataCascadePolicyByIdHeaders = GetMetadataCascadePolicyByIdHeaders;
class DeleteMetadataCascadePolicyByIdHeaders {
    constructor(fields) {
        this.extraHeaders = {};
        if (fields.extraHeaders) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.DeleteMetadataCascadePolicyByIdHeaders = DeleteMetadataCascadePolicyByIdHeaders;
class ApplyMetadataCascadePolicyHeaders {
    constructor(fields) {
        this.extraHeaders = {};
        if (fields.extraHeaders) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.ApplyMetadataCascadePolicyHeaders = ApplyMetadataCascadePolicyHeaders;
class MetadataCascadePoliciesManager {
    constructor(fields) {
        this.networkSession = new network_generated_js_1.NetworkSession({});
        if (fields.auth) {
            this.auth = fields.auth;
        }
        if (fields.networkSession) {
            this.networkSession = fields.networkSession;
        }
    }
    getMetadataCascadePolicies(queryParams_1) {
        return __awaiter(this, arguments, void 0, function* (queryParams, optionalsInput = {}) {
            const optionals = new GetMetadataCascadePoliciesOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const queryParamsMap = (0, utils_js_1.prepareParams)({
                ['folder_id']: (0, utils_js_2.toString)(queryParams.folderId),
                ['owner_enterprise_id']: (0, utils_js_2.toString)(queryParams.ownerEnterpriseId),
                ['marker']: (0, utils_js_2.toString)(queryParams.marker),
                ['offset']: (0, utils_js_2.toString)(queryParams.offset),
            });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = (yield (0, fetch_js_1.fetch)(''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/metadata_cascade_policies'), {
                method: 'GET',
                params: queryParamsMap,
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return (0, metadataCascadePolicies_generated_js_1.deserializeMetadataCascadePolicies)(response.data);
        });
    }
    createMetadataCascadePolicy(requestBody_1) {
        return __awaiter(this, arguments, void 0, function* (requestBody, optionalsInput = {}) {
            const optionals = new CreateMetadataCascadePolicyOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = (yield (0, fetch_js_1.fetch)(''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/metadata_cascade_policies'), {
                method: 'POST',
                headers: headersMap,
                data: serializeCreateMetadataCascadePolicyRequestBody(requestBody),
                contentType: 'application/json',
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return (0, metadataCascadePolicy_generated_js_1.deserializeMetadataCascadePolicy)(response.data);
        });
    }
    getMetadataCascadePolicyById(metadataCascadePolicyId_1) {
        return __awaiter(this, arguments, void 0, function* (metadataCascadePolicyId, optionalsInput = {}) {
            const optionals = new GetMetadataCascadePolicyByIdOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = (yield (0, fetch_js_1.fetch)(''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/metadata_cascade_policies/', (0, utils_js_2.toString)(metadataCascadePolicyId)), {
                method: 'GET',
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return (0, metadataCascadePolicy_generated_js_1.deserializeMetadataCascadePolicy)(response.data);
        });
    }
    deleteMetadataCascadePolicyById(metadataCascadePolicyId_1) {
        return __awaiter(this, arguments, void 0, function* (metadataCascadePolicyId, optionalsInput = {}) {
            const optionals = new DeleteMetadataCascadePolicyByIdOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = (yield (0, fetch_js_1.fetch)(''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/metadata_cascade_policies/', (0, utils_js_2.toString)(metadataCascadePolicyId)), {
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
    applyMetadataCascadePolicy(metadataCascadePolicyId_1, requestBody_1) {
        return __awaiter(this, arguments, void 0, function* (metadataCascadePolicyId, requestBody, optionalsInput = {}) {
            const optionals = new ApplyMetadataCascadePolicyOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = (yield (0, fetch_js_1.fetch)(''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/metadata_cascade_policies/', (0, utils_js_2.toString)(metadataCascadePolicyId), '/apply'), {
                method: 'POST',
                headers: headersMap,
                data: serializeApplyMetadataCascadePolicyRequestBody(requestBody),
                contentType: 'application/json',
                responseFormat: void 0,
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return void 0;
        });
    }
}
exports.MetadataCascadePoliciesManager = MetadataCascadePoliciesManager;
function serializeCreateMetadataCascadePolicyRequestBodyScopeField(val) {
    return val;
}
function deserializeCreateMetadataCascadePolicyRequestBodyScopeField(val) {
    if (val == 'global') {
        return val;
    }
    if (val == 'enterprise') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize CreateMetadataCascadePolicyRequestBodyScopeField",
    });
}
function serializeCreateMetadataCascadePolicyRequestBody(val) {
    return {
        ['folder_id']: val.folderId,
        ['scope']: serializeCreateMetadataCascadePolicyRequestBodyScopeField(val.scope),
        ['templateKey']: val.templateKey,
    };
}
function deserializeCreateMetadataCascadePolicyRequestBody(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "CreateMetadataCascadePolicyRequestBody"',
        });
    }
    if (val.folder_id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "folder_id" of type "CreateMetadataCascadePolicyRequestBody" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.folder_id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "folder_id" of type "CreateMetadataCascadePolicyRequestBody"',
        });
    }
    const folderId = val.folder_id;
    if (val.scope == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "scope" of type "CreateMetadataCascadePolicyRequestBody" to be defined',
        });
    }
    const scope = deserializeCreateMetadataCascadePolicyRequestBodyScopeField(val.scope);
    if (val.templateKey == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "templateKey" of type "CreateMetadataCascadePolicyRequestBody" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.templateKey)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "templateKey" of type "CreateMetadataCascadePolicyRequestBody"',
        });
    }
    const templateKey = val.templateKey;
    return {
        folderId: folderId,
        scope: scope,
        templateKey: templateKey,
    };
}
function serializeApplyMetadataCascadePolicyRequestBodyConflictResolutionField(val) {
    return val;
}
function deserializeApplyMetadataCascadePolicyRequestBodyConflictResolutionField(val) {
    if (val == 'none') {
        return val;
    }
    if (val == 'overwrite') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize ApplyMetadataCascadePolicyRequestBodyConflictResolutionField",
    });
}
function serializeApplyMetadataCascadePolicyRequestBody(val) {
    return {
        ['conflict_resolution']: serializeApplyMetadataCascadePolicyRequestBodyConflictResolutionField(val.conflictResolution),
    };
}
function deserializeApplyMetadataCascadePolicyRequestBody(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "ApplyMetadataCascadePolicyRequestBody"',
        });
    }
    if (val.conflict_resolution == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "conflict_resolution" of type "ApplyMetadataCascadePolicyRequestBody" to be defined',
        });
    }
    const conflictResolution = deserializeApplyMetadataCascadePolicyRequestBodyConflictResolutionField(val.conflict_resolution);
    return {
        conflictResolution: conflictResolution,
    };
}
//# sourceMappingURL=metadataCascadePolicies.generated.js.map