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
exports.WorkflowsManager = exports.StartWorkflowHeaders = exports.GetWorkflowsHeaders = exports.StartWorkflowOptionals = exports.GetWorkflowsOptionals = void 0;
exports.serializeStartWorkflowRequestBodyTypeField = serializeStartWorkflowRequestBodyTypeField;
exports.deserializeStartWorkflowRequestBodyTypeField = deserializeStartWorkflowRequestBodyTypeField;
exports.serializeStartWorkflowRequestBodyFlowField = serializeStartWorkflowRequestBodyFlowField;
exports.deserializeStartWorkflowRequestBodyFlowField = deserializeStartWorkflowRequestBodyFlowField;
exports.serializeStartWorkflowRequestBodyFilesTypeField = serializeStartWorkflowRequestBodyFilesTypeField;
exports.deserializeStartWorkflowRequestBodyFilesTypeField = deserializeStartWorkflowRequestBodyFilesTypeField;
exports.serializeStartWorkflowRequestBodyFilesField = serializeStartWorkflowRequestBodyFilesField;
exports.deserializeStartWorkflowRequestBodyFilesField = deserializeStartWorkflowRequestBodyFilesField;
exports.serializeStartWorkflowRequestBodyFolderTypeField = serializeStartWorkflowRequestBodyFolderTypeField;
exports.deserializeStartWorkflowRequestBodyFolderTypeField = deserializeStartWorkflowRequestBodyFolderTypeField;
exports.serializeStartWorkflowRequestBodyFolderField = serializeStartWorkflowRequestBodyFolderField;
exports.deserializeStartWorkflowRequestBodyFolderField = deserializeStartWorkflowRequestBodyFolderField;
exports.serializeStartWorkflowRequestBody = serializeStartWorkflowRequestBody;
exports.deserializeStartWorkflowRequestBody = deserializeStartWorkflowRequestBody;
const workflows_generated_js_1 = require("../schemas/workflows.generated.js");
const outcome_generated_js_1 = require("../schemas/outcome.generated.js");
const outcome_generated_js_2 = require("../schemas/outcome.generated.js");
const network_generated_js_1 = require("../networking/network.generated.js");
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
const fetch_js_1 = require("../networking/fetch.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
const json_js_3 = require("../serialization/json.js");
class GetWorkflowsOptionals {
    constructor(fields) {
        this.headers = new GetWorkflowsHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.GetWorkflowsOptionals = GetWorkflowsOptionals;
class StartWorkflowOptionals {
    constructor(fields) {
        this.headers = new StartWorkflowHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.StartWorkflowOptionals = StartWorkflowOptionals;
class GetWorkflowsHeaders {
    constructor(fields) {
        this.extraHeaders = {};
        if (fields.extraHeaders) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.GetWorkflowsHeaders = GetWorkflowsHeaders;
class StartWorkflowHeaders {
    constructor(fields) {
        this.extraHeaders = {};
        if (fields.extraHeaders) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.StartWorkflowHeaders = StartWorkflowHeaders;
class WorkflowsManager {
    constructor(fields) {
        this.networkSession = new network_generated_js_1.NetworkSession({});
        if (fields.auth) {
            this.auth = fields.auth;
        }
        if (fields.networkSession) {
            this.networkSession = fields.networkSession;
        }
    }
    getWorkflows(queryParams_1) {
        return __awaiter(this, arguments, void 0, function* (queryParams, optionalsInput = {}) {
            const optionals = new GetWorkflowsOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const queryParamsMap = (0, utils_js_1.prepareParams)({
                ['folder_id']: (0, utils_js_2.toString)(queryParams.folderId),
                ['trigger_type']: (0, utils_js_2.toString)(queryParams.triggerType),
                ['limit']: (0, utils_js_2.toString)(queryParams.limit),
                ['marker']: (0, utils_js_2.toString)(queryParams.marker),
            });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = (yield (0, fetch_js_1.fetch)(''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/workflows'), {
                method: 'GET',
                params: queryParamsMap,
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return (0, workflows_generated_js_1.deserializeWorkflows)(response.data);
        });
    }
    startWorkflow(workflowId_1, requestBody_1) {
        return __awaiter(this, arguments, void 0, function* (workflowId, requestBody, optionalsInput = {}) {
            const optionals = new StartWorkflowOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = (yield (0, fetch_js_1.fetch)(''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/workflows/', (0, utils_js_2.toString)(workflowId), '/start'), {
                method: 'POST',
                headers: headersMap,
                data: serializeStartWorkflowRequestBody(requestBody),
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
exports.WorkflowsManager = WorkflowsManager;
function serializeStartWorkflowRequestBodyTypeField(val) {
    return val;
}
function deserializeStartWorkflowRequestBodyTypeField(val) {
    if (val == 'workflow_parameters') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize StartWorkflowRequestBodyTypeField",
    });
}
function serializeStartWorkflowRequestBodyFlowField(val) {
    return {
        ['type']: val.type == void 0 ? void 0 : val.type,
        ['id']: val.id == void 0 ? void 0 : val.id,
    };
}
function deserializeStartWorkflowRequestBodyFlowField(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "StartWorkflowRequestBodyFlowField"',
        });
    }
    if (!(val.type == void 0) && !(0, json_js_1.sdIsString)(val.type)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "type" of type "StartWorkflowRequestBodyFlowField"',
        });
    }
    const type = val.type == void 0 ? void 0 : val.type;
    if (!(val.id == void 0) && !(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "StartWorkflowRequestBodyFlowField"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    return { type: type, id: id };
}
function serializeStartWorkflowRequestBodyFilesTypeField(val) {
    return val;
}
function deserializeStartWorkflowRequestBodyFilesTypeField(val) {
    if (val == 'file') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize StartWorkflowRequestBodyFilesTypeField",
    });
}
function serializeStartWorkflowRequestBodyFilesField(val) {
    return {
        ['type']: val.type == void 0
            ? void 0
            : serializeStartWorkflowRequestBodyFilesTypeField(val.type),
        ['id']: val.id == void 0 ? void 0 : val.id,
    };
}
function deserializeStartWorkflowRequestBodyFilesField(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "StartWorkflowRequestBodyFilesField"',
        });
    }
    const type = val.type == void 0
        ? void 0
        : deserializeStartWorkflowRequestBodyFilesTypeField(val.type);
    if (!(val.id == void 0) && !(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "StartWorkflowRequestBodyFilesField"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    return { type: type, id: id };
}
function serializeStartWorkflowRequestBodyFolderTypeField(val) {
    return val;
}
function deserializeStartWorkflowRequestBodyFolderTypeField(val) {
    if (val == 'folder') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize StartWorkflowRequestBodyFolderTypeField",
    });
}
function serializeStartWorkflowRequestBodyFolderField(val) {
    return {
        ['type']: val.type == void 0
            ? void 0
            : serializeStartWorkflowRequestBodyFolderTypeField(val.type),
        ['id']: val.id == void 0 ? void 0 : val.id,
    };
}
function deserializeStartWorkflowRequestBodyFolderField(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "StartWorkflowRequestBodyFolderField"',
        });
    }
    const type = val.type == void 0
        ? void 0
        : deserializeStartWorkflowRequestBodyFolderTypeField(val.type);
    if (!(val.id == void 0) && !(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "StartWorkflowRequestBodyFolderField"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    return { type: type, id: id };
}
function serializeStartWorkflowRequestBody(val) {
    return {
        ['type']: val.type == void 0
            ? void 0
            : serializeStartWorkflowRequestBodyTypeField(val.type),
        ['flow']: serializeStartWorkflowRequestBodyFlowField(val.flow),
        ['files']: val.files.map(function (item) {
            return serializeStartWorkflowRequestBodyFilesField(item);
        }),
        ['folder']: serializeStartWorkflowRequestBodyFolderField(val.folder),
        ['outcomes']: val.outcomes == void 0
            ? void 0
            : val.outcomes.map(function (item) {
                return (0, outcome_generated_js_1.serializeOutcome)(item);
            }),
    };
}
function deserializeStartWorkflowRequestBody(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "StartWorkflowRequestBody"',
        });
    }
    const type = val.type == void 0
        ? void 0
        : deserializeStartWorkflowRequestBodyTypeField(val.type);
    if (val.flow == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "flow" of type "StartWorkflowRequestBody" to be defined',
        });
    }
    const flow = deserializeStartWorkflowRequestBodyFlowField(val.flow);
    if (val.files == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "files" of type "StartWorkflowRequestBody" to be defined',
        });
    }
    if (!(0, json_js_2.sdIsList)(val.files)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "files" of type "StartWorkflowRequestBody"',
        });
    }
    const files = (0, json_js_2.sdIsList)(val.files)
        ? val.files.map(function (itm) {
            return deserializeStartWorkflowRequestBodyFilesField(itm);
        })
        : [];
    if (val.folder == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "folder" of type "StartWorkflowRequestBody" to be defined',
        });
    }
    const folder = deserializeStartWorkflowRequestBodyFolderField(val.folder);
    if (!(val.outcomes == void 0) && !(0, json_js_2.sdIsList)(val.outcomes)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "outcomes" of type "StartWorkflowRequestBody"',
        });
    }
    const outcomes = val.outcomes == void 0
        ? void 0
        : (0, json_js_2.sdIsList)(val.outcomes)
            ? val.outcomes.map(function (itm) {
                return (0, outcome_generated_js_2.deserializeOutcome)(itm);
            })
            : [];
    return {
        type: type,
        flow: flow,
        files: files,
        folder: folder,
        outcomes: outcomes,
    };
}
//# sourceMappingURL=workflows.generated.js.map