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
exports.ClassificationsManager = exports.CreateClassificationTemplateHeaders = exports.CreateClassificationTemplateRequestBody = exports.CreateClassificationTemplateRequestBodyFieldsField = exports.UpdateClassificationHeaders = exports.UpdateClassificationRequestBody = exports.AddClassificationHeaders = exports.AddClassificationRequestBody = exports.GetClassificationTemplateHeaders = exports.CreateClassificationTemplateOptionals = exports.UpdateClassificationOptionals = exports.AddClassificationOptionals = void 0;
exports.serializeAddClassificationRequestBodyOpField = serializeAddClassificationRequestBodyOpField;
exports.deserializeAddClassificationRequestBodyOpField = deserializeAddClassificationRequestBodyOpField;
exports.serializeAddClassificationRequestBodyFieldKeyField = serializeAddClassificationRequestBodyFieldKeyField;
exports.deserializeAddClassificationRequestBodyFieldKeyField = deserializeAddClassificationRequestBodyFieldKeyField;
exports.serializeAddClassificationRequestBodyDataStaticConfigClassificationField = serializeAddClassificationRequestBodyDataStaticConfigClassificationField;
exports.deserializeAddClassificationRequestBodyDataStaticConfigClassificationField = deserializeAddClassificationRequestBodyDataStaticConfigClassificationField;
exports.serializeAddClassificationRequestBodyDataStaticConfigField = serializeAddClassificationRequestBodyDataStaticConfigField;
exports.deserializeAddClassificationRequestBodyDataStaticConfigField = deserializeAddClassificationRequestBodyDataStaticConfigField;
exports.serializeAddClassificationRequestBodyDataField = serializeAddClassificationRequestBodyDataField;
exports.deserializeAddClassificationRequestBodyDataField = deserializeAddClassificationRequestBodyDataField;
exports.serializeAddClassificationRequestBody = serializeAddClassificationRequestBody;
exports.deserializeAddClassificationRequestBody = deserializeAddClassificationRequestBody;
exports.serializeAddClassificationRequestBodyInput = serializeAddClassificationRequestBodyInput;
exports.deserializeAddClassificationRequestBodyInput = deserializeAddClassificationRequestBodyInput;
exports.serializeUpdateClassificationRequestBodyOpField = serializeUpdateClassificationRequestBodyOpField;
exports.deserializeUpdateClassificationRequestBodyOpField = deserializeUpdateClassificationRequestBodyOpField;
exports.serializeUpdateClassificationRequestBodyFieldKeyField = serializeUpdateClassificationRequestBodyFieldKeyField;
exports.deserializeUpdateClassificationRequestBodyFieldKeyField = deserializeUpdateClassificationRequestBodyFieldKeyField;
exports.serializeUpdateClassificationRequestBodyDataStaticConfigClassificationField = serializeUpdateClassificationRequestBodyDataStaticConfigClassificationField;
exports.deserializeUpdateClassificationRequestBodyDataStaticConfigClassificationField = deserializeUpdateClassificationRequestBodyDataStaticConfigClassificationField;
exports.serializeUpdateClassificationRequestBodyDataStaticConfigField = serializeUpdateClassificationRequestBodyDataStaticConfigField;
exports.deserializeUpdateClassificationRequestBodyDataStaticConfigField = deserializeUpdateClassificationRequestBodyDataStaticConfigField;
exports.serializeUpdateClassificationRequestBodyDataField = serializeUpdateClassificationRequestBodyDataField;
exports.deserializeUpdateClassificationRequestBodyDataField = deserializeUpdateClassificationRequestBodyDataField;
exports.serializeUpdateClassificationRequestBody = serializeUpdateClassificationRequestBody;
exports.deserializeUpdateClassificationRequestBody = deserializeUpdateClassificationRequestBody;
exports.serializeUpdateClassificationRequestBodyInput = serializeUpdateClassificationRequestBodyInput;
exports.deserializeUpdateClassificationRequestBodyInput = deserializeUpdateClassificationRequestBodyInput;
exports.serializeCreateClassificationTemplateRequestBodyScopeField = serializeCreateClassificationTemplateRequestBodyScopeField;
exports.deserializeCreateClassificationTemplateRequestBodyScopeField = deserializeCreateClassificationTemplateRequestBodyScopeField;
exports.serializeCreateClassificationTemplateRequestBodyTemplateKeyField = serializeCreateClassificationTemplateRequestBodyTemplateKeyField;
exports.deserializeCreateClassificationTemplateRequestBodyTemplateKeyField = deserializeCreateClassificationTemplateRequestBodyTemplateKeyField;
exports.serializeCreateClassificationTemplateRequestBodyDisplayNameField = serializeCreateClassificationTemplateRequestBodyDisplayNameField;
exports.deserializeCreateClassificationTemplateRequestBodyDisplayNameField = deserializeCreateClassificationTemplateRequestBodyDisplayNameField;
exports.serializeCreateClassificationTemplateRequestBodyFieldsTypeField = serializeCreateClassificationTemplateRequestBodyFieldsTypeField;
exports.deserializeCreateClassificationTemplateRequestBodyFieldsTypeField = deserializeCreateClassificationTemplateRequestBodyFieldsTypeField;
exports.serializeCreateClassificationTemplateRequestBodyFieldsKeyField = serializeCreateClassificationTemplateRequestBodyFieldsKeyField;
exports.deserializeCreateClassificationTemplateRequestBodyFieldsKeyField = deserializeCreateClassificationTemplateRequestBodyFieldsKeyField;
exports.serializeCreateClassificationTemplateRequestBodyFieldsDisplayNameField = serializeCreateClassificationTemplateRequestBodyFieldsDisplayNameField;
exports.deserializeCreateClassificationTemplateRequestBodyFieldsDisplayNameField = deserializeCreateClassificationTemplateRequestBodyFieldsDisplayNameField;
exports.serializeCreateClassificationTemplateRequestBodyFieldsOptionsStaticConfigClassificationField = serializeCreateClassificationTemplateRequestBodyFieldsOptionsStaticConfigClassificationField;
exports.deserializeCreateClassificationTemplateRequestBodyFieldsOptionsStaticConfigClassificationField = deserializeCreateClassificationTemplateRequestBodyFieldsOptionsStaticConfigClassificationField;
exports.serializeCreateClassificationTemplateRequestBodyFieldsOptionsStaticConfigField = serializeCreateClassificationTemplateRequestBodyFieldsOptionsStaticConfigField;
exports.deserializeCreateClassificationTemplateRequestBodyFieldsOptionsStaticConfigField = deserializeCreateClassificationTemplateRequestBodyFieldsOptionsStaticConfigField;
exports.serializeCreateClassificationTemplateRequestBodyFieldsOptionsField = serializeCreateClassificationTemplateRequestBodyFieldsOptionsField;
exports.deserializeCreateClassificationTemplateRequestBodyFieldsOptionsField = deserializeCreateClassificationTemplateRequestBodyFieldsOptionsField;
exports.serializeCreateClassificationTemplateRequestBodyFieldsField = serializeCreateClassificationTemplateRequestBodyFieldsField;
exports.deserializeCreateClassificationTemplateRequestBodyFieldsField = deserializeCreateClassificationTemplateRequestBodyFieldsField;
exports.serializeCreateClassificationTemplateRequestBodyFieldsFieldInput = serializeCreateClassificationTemplateRequestBodyFieldsFieldInput;
exports.deserializeCreateClassificationTemplateRequestBodyFieldsFieldInput = deserializeCreateClassificationTemplateRequestBodyFieldsFieldInput;
exports.serializeCreateClassificationTemplateRequestBody = serializeCreateClassificationTemplateRequestBody;
exports.deserializeCreateClassificationTemplateRequestBody = deserializeCreateClassificationTemplateRequestBody;
exports.serializeCreateClassificationTemplateRequestBodyInput = serializeCreateClassificationTemplateRequestBodyInput;
exports.deserializeCreateClassificationTemplateRequestBodyInput = deserializeCreateClassificationTemplateRequestBodyInput;
const classificationTemplate_generated_js_1 = require("../schemas/classificationTemplate.generated.js");
const network_generated_js_1 = require("../networking/network.generated.js");
const utils_js_1 = require("../internal/utils.js");
const fetch_js_1 = require("../networking/fetch.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
const json_js_3 = require("../serialization/json.js");
const json_js_4 = require("../serialization/json.js");
const json_js_5 = require("../serialization/json.js");
class AddClassificationOptionals {
    constructor(fields) {
        this.headers = new AddClassificationHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.AddClassificationOptionals = AddClassificationOptionals;
class UpdateClassificationOptionals {
    constructor(fields) {
        this.headers = new UpdateClassificationHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.UpdateClassificationOptionals = UpdateClassificationOptionals;
class CreateClassificationTemplateOptionals {
    constructor(fields) {
        this.headers = new CreateClassificationTemplateHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.CreateClassificationTemplateOptionals = CreateClassificationTemplateOptionals;
class GetClassificationTemplateHeaders {
    constructor(fields) {
        this.extraHeaders = {};
        if (fields.extraHeaders) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.GetClassificationTemplateHeaders = GetClassificationTemplateHeaders;
class AddClassificationRequestBody {
    constructor(fields) {
        this.op = 'addEnumOption';
        this.fieldKey = 'Box__Security__Classification__Key';
        if (fields.op) {
            this.op = fields.op;
        }
        if (fields.fieldKey) {
            this.fieldKey = fields.fieldKey;
        }
        if (fields.data) {
            this.data = fields.data;
        }
    }
}
exports.AddClassificationRequestBody = AddClassificationRequestBody;
class AddClassificationHeaders {
    constructor(fields) {
        this.extraHeaders = {};
        if (fields.extraHeaders) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.AddClassificationHeaders = AddClassificationHeaders;
class UpdateClassificationRequestBody {
    constructor(fields) {
        this.op = 'editEnumOption';
        this.fieldKey = 'Box__Security__Classification__Key';
        if (fields.op) {
            this.op = fields.op;
        }
        if (fields.fieldKey) {
            this.fieldKey = fields.fieldKey;
        }
        if (fields.enumOptionKey) {
            this.enumOptionKey = fields.enumOptionKey;
        }
        if (fields.data) {
            this.data = fields.data;
        }
    }
}
exports.UpdateClassificationRequestBody = UpdateClassificationRequestBody;
class UpdateClassificationHeaders {
    constructor(fields) {
        this.extraHeaders = {};
        if (fields.extraHeaders) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.UpdateClassificationHeaders = UpdateClassificationHeaders;
class CreateClassificationTemplateRequestBodyFieldsField {
    constructor(fields) {
        this.type = 'enum';
        this.key = 'Box__Security__Classification__Key';
        this.displayName = 'Classification';
        if (fields.type) {
            this.type = fields.type;
        }
        if (fields.key) {
            this.key = fields.key;
        }
        if (fields.displayName) {
            this.displayName = fields.displayName;
        }
        if (fields.hidden) {
            this.hidden = fields.hidden;
        }
        if (fields.options) {
            this.options = fields.options;
        }
    }
}
exports.CreateClassificationTemplateRequestBodyFieldsField = CreateClassificationTemplateRequestBodyFieldsField;
class CreateClassificationTemplateRequestBody {
    constructor(fields) {
        this.scope = 'enterprise';
        this.templateKey = 'securityClassification-6VMVochwUWo';
        this.displayName = 'Classification';
        if (fields.scope) {
            this.scope = fields.scope;
        }
        if (fields.templateKey) {
            this.templateKey = fields.templateKey;
        }
        if (fields.displayName) {
            this.displayName = fields.displayName;
        }
        if (fields.hidden) {
            this.hidden = fields.hidden;
        }
        if (fields.copyInstanceOnItemCopy) {
            this.copyInstanceOnItemCopy = fields.copyInstanceOnItemCopy;
        }
        if (fields.fields) {
            this.fields = fields.fields;
        }
    }
}
exports.CreateClassificationTemplateRequestBody = CreateClassificationTemplateRequestBody;
class CreateClassificationTemplateHeaders {
    constructor(fields) {
        this.extraHeaders = {};
        if (fields.extraHeaders) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.CreateClassificationTemplateHeaders = CreateClassificationTemplateHeaders;
class ClassificationsManager {
    constructor(fields) {
        this.networkSession = new network_generated_js_1.NetworkSession({});
        if (fields.auth) {
            this.auth = fields.auth;
        }
        if (fields.networkSession) {
            this.networkSession = fields.networkSession;
        }
    }
    getClassificationTemplate() {
        return __awaiter(this, arguments, void 0, function* (headersInput = new GetClassificationTemplateHeaders({}), cancellationToken) {
            const headers = new GetClassificationTemplateHeaders({
                extraHeaders: headersInput.extraHeaders,
            });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = (yield (0, fetch_js_1.fetch)(''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/metadata_templates/enterprise/securityClassification-6VMVochwUWo/schema'), {
                method: 'GET',
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return (0, classificationTemplate_generated_js_1.deserializeClassificationTemplate)(response.data);
        });
    }
    addClassification(requestBody_1) {
        return __awaiter(this, arguments, void 0, function* (requestBody, optionalsInput = {}) {
            const optionals = new AddClassificationOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = (yield (0, fetch_js_1.fetch)(''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/metadata_templates/enterprise/securityClassification-6VMVochwUWo/schema#add'), {
                method: 'PUT',
                headers: headersMap,
                data: requestBody.map(serializeAddClassificationRequestBody),
                contentType: 'application/json',
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return (0, classificationTemplate_generated_js_1.deserializeClassificationTemplate)(response.data);
        });
    }
    updateClassification(requestBody_1) {
        return __awaiter(this, arguments, void 0, function* (requestBody, optionalsInput = {}) {
            const optionals = new UpdateClassificationOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = (yield (0, fetch_js_1.fetch)(''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/metadata_templates/enterprise/securityClassification-6VMVochwUWo/schema#update'), {
                method: 'PUT',
                headers: headersMap,
                data: requestBody.map(serializeUpdateClassificationRequestBody),
                contentType: 'application/json-patch+json',
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return (0, classificationTemplate_generated_js_1.deserializeClassificationTemplate)(response.data);
        });
    }
    createClassificationTemplate(requestBodyInput_1) {
        return __awaiter(this, arguments, void 0, function* (requestBodyInput, optionalsInput = {}) {
            const requestBody = new CreateClassificationTemplateRequestBody({
                scope: requestBodyInput.scope,
                templateKey: requestBodyInput.templateKey,
                displayName: requestBodyInput.displayName,
                hidden: requestBodyInput.hidden,
                copyInstanceOnItemCopy: requestBodyInput.copyInstanceOnItemCopy,
                fields: requestBodyInput.fields,
            });
            const optionals = new CreateClassificationTemplateOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = (yield (0, fetch_js_1.fetch)(''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/metadata_templates/schema#classifications'), {
                method: 'POST',
                headers: headersMap,
                data: serializeCreateClassificationTemplateRequestBody(requestBody),
                contentType: 'application/json',
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return (0, classificationTemplate_generated_js_1.deserializeClassificationTemplate)(response.data);
        });
    }
}
exports.ClassificationsManager = ClassificationsManager;
function serializeAddClassificationRequestBodyOpField(val) {
    return val;
}
function deserializeAddClassificationRequestBodyOpField(val) {
    if (val == 'addEnumOption') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize AddClassificationRequestBodyOpField",
    });
}
function serializeAddClassificationRequestBodyFieldKeyField(val) {
    return val;
}
function deserializeAddClassificationRequestBodyFieldKeyField(val) {
    if (val == 'Box__Security__Classification__Key') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize AddClassificationRequestBodyFieldKeyField",
    });
}
function serializeAddClassificationRequestBodyDataStaticConfigClassificationField(val) {
    return {
        ['classificationDefinition']: val.classificationDefinition == void 0
            ? void 0
            : val.classificationDefinition,
        ['colorID']: val.colorId == void 0 ? void 0 : val.colorId,
    };
}
function deserializeAddClassificationRequestBodyDataStaticConfigClassificationField(val) {
    if (!(0, json_js_5.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "AddClassificationRequestBodyDataStaticConfigClassificationField"',
        });
    }
    if (!(val.classificationDefinition == void 0) &&
        !(0, json_js_3.sdIsString)(val.classificationDefinition)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "classificationDefinition" of type "AddClassificationRequestBodyDataStaticConfigClassificationField"',
        });
    }
    const classificationDefinition = val.classificationDefinition == void 0
        ? void 0
        : val.classificationDefinition;
    if (!(val.colorID == void 0) && !(0, json_js_2.sdIsNumber)(val.colorID)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "colorID" of type "AddClassificationRequestBodyDataStaticConfigClassificationField"',
        });
    }
    const colorId = val.colorID == void 0 ? void 0 : val.colorID;
    return {
        classificationDefinition: classificationDefinition,
        colorId: colorId,
    };
}
function serializeAddClassificationRequestBodyDataStaticConfigField(val) {
    return {
        ['classification']: val.classification == void 0
            ? void 0
            : serializeAddClassificationRequestBodyDataStaticConfigClassificationField(val.classification),
    };
}
function deserializeAddClassificationRequestBodyDataStaticConfigField(val) {
    if (!(0, json_js_5.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "AddClassificationRequestBodyDataStaticConfigField"',
        });
    }
    const classification = val.classification == void 0
        ? void 0
        : deserializeAddClassificationRequestBodyDataStaticConfigClassificationField(val.classification);
    return {
        classification: classification,
    };
}
function serializeAddClassificationRequestBodyDataField(val) {
    return {
        ['key']: val.key,
        ['staticConfig']: val.staticConfig == void 0
            ? void 0
            : serializeAddClassificationRequestBodyDataStaticConfigField(val.staticConfig),
    };
}
function deserializeAddClassificationRequestBodyDataField(val) {
    if (!(0, json_js_5.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "AddClassificationRequestBodyDataField"',
        });
    }
    if (val.key == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "key" of type "AddClassificationRequestBodyDataField" to be defined',
        });
    }
    if (!(0, json_js_3.sdIsString)(val.key)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "key" of type "AddClassificationRequestBodyDataField"',
        });
    }
    const key = val.key;
    const staticConfig = val.staticConfig == void 0
        ? void 0
        : deserializeAddClassificationRequestBodyDataStaticConfigField(val.staticConfig);
    return {
        key: key,
        staticConfig: staticConfig,
    };
}
function serializeAddClassificationRequestBody(val) {
    return {
        ['op']: serializeAddClassificationRequestBodyOpField(val.op),
        ['fieldKey']: serializeAddClassificationRequestBodyFieldKeyField(val.fieldKey),
        ['data']: serializeAddClassificationRequestBodyDataField(val.data),
    };
}
function deserializeAddClassificationRequestBody(val) {
    if (!(0, json_js_5.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "AddClassificationRequestBody"',
        });
    }
    if (val.op == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "op" of type "AddClassificationRequestBody" to be defined',
        });
    }
    const op = deserializeAddClassificationRequestBodyOpField(val.op);
    if (val.fieldKey == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "fieldKey" of type "AddClassificationRequestBody" to be defined',
        });
    }
    const fieldKey = deserializeAddClassificationRequestBodyFieldKeyField(val.fieldKey);
    if (val.data == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "data" of type "AddClassificationRequestBody" to be defined',
        });
    }
    const data = deserializeAddClassificationRequestBodyDataField(val.data);
    return {
        op: op,
        fieldKey: fieldKey,
        data: data,
    };
}
function serializeAddClassificationRequestBodyInput(val) {
    return {
        ['op']: val.op == void 0
            ? void 0
            : serializeAddClassificationRequestBodyOpField(val.op),
        ['fieldKey']: val.fieldKey == void 0
            ? void 0
            : serializeAddClassificationRequestBodyFieldKeyField(val.fieldKey),
        ['data']: serializeAddClassificationRequestBodyDataField(val.data),
    };
}
function deserializeAddClassificationRequestBodyInput(val) {
    if (!(0, json_js_5.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "AddClassificationRequestBodyInput"',
        });
    }
    const op = val.op == void 0
        ? void 0
        : deserializeAddClassificationRequestBodyOpField(val.op);
    const fieldKey = val.fieldKey == void 0
        ? void 0
        : deserializeAddClassificationRequestBodyFieldKeyField(val.fieldKey);
    if (val.data == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "data" of type "AddClassificationRequestBodyInput" to be defined',
        });
    }
    const data = deserializeAddClassificationRequestBodyDataField(val.data);
    return {
        op: op,
        fieldKey: fieldKey,
        data: data,
    };
}
function serializeUpdateClassificationRequestBodyOpField(val) {
    return val;
}
function deserializeUpdateClassificationRequestBodyOpField(val) {
    if (val == 'editEnumOption') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize UpdateClassificationRequestBodyOpField",
    });
}
function serializeUpdateClassificationRequestBodyFieldKeyField(val) {
    return val;
}
function deserializeUpdateClassificationRequestBodyFieldKeyField(val) {
    if (val == 'Box__Security__Classification__Key') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize UpdateClassificationRequestBodyFieldKeyField",
    });
}
function serializeUpdateClassificationRequestBodyDataStaticConfigClassificationField(val) {
    return {
        ['classificationDefinition']: val.classificationDefinition == void 0
            ? void 0
            : val.classificationDefinition,
        ['colorID']: val.colorId == void 0 ? void 0 : val.colorId,
    };
}
function deserializeUpdateClassificationRequestBodyDataStaticConfigClassificationField(val) {
    if (!(0, json_js_5.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "UpdateClassificationRequestBodyDataStaticConfigClassificationField"',
        });
    }
    if (!(val.classificationDefinition == void 0) &&
        !(0, json_js_3.sdIsString)(val.classificationDefinition)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "classificationDefinition" of type "UpdateClassificationRequestBodyDataStaticConfigClassificationField"',
        });
    }
    const classificationDefinition = val.classificationDefinition == void 0
        ? void 0
        : val.classificationDefinition;
    if (!(val.colorID == void 0) && !(0, json_js_2.sdIsNumber)(val.colorID)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "colorID" of type "UpdateClassificationRequestBodyDataStaticConfigClassificationField"',
        });
    }
    const colorId = val.colorID == void 0 ? void 0 : val.colorID;
    return {
        classificationDefinition: classificationDefinition,
        colorId: colorId,
    };
}
function serializeUpdateClassificationRequestBodyDataStaticConfigField(val) {
    return {
        ['classification']: val.classification == void 0
            ? void 0
            : serializeUpdateClassificationRequestBodyDataStaticConfigClassificationField(val.classification),
    };
}
function deserializeUpdateClassificationRequestBodyDataStaticConfigField(val) {
    if (!(0, json_js_5.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "UpdateClassificationRequestBodyDataStaticConfigField"',
        });
    }
    const classification = val.classification == void 0
        ? void 0
        : deserializeUpdateClassificationRequestBodyDataStaticConfigClassificationField(val.classification);
    return {
        classification: classification,
    };
}
function serializeUpdateClassificationRequestBodyDataField(val) {
    return {
        ['key']: val.key,
        ['staticConfig']: val.staticConfig == void 0
            ? void 0
            : serializeUpdateClassificationRequestBodyDataStaticConfigField(val.staticConfig),
    };
}
function deserializeUpdateClassificationRequestBodyDataField(val) {
    if (!(0, json_js_5.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "UpdateClassificationRequestBodyDataField"',
        });
    }
    if (val.key == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "key" of type "UpdateClassificationRequestBodyDataField" to be defined',
        });
    }
    if (!(0, json_js_3.sdIsString)(val.key)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "key" of type "UpdateClassificationRequestBodyDataField"',
        });
    }
    const key = val.key;
    const staticConfig = val.staticConfig == void 0
        ? void 0
        : deserializeUpdateClassificationRequestBodyDataStaticConfigField(val.staticConfig);
    return {
        key: key,
        staticConfig: staticConfig,
    };
}
function serializeUpdateClassificationRequestBody(val) {
    return {
        ['op']: serializeUpdateClassificationRequestBodyOpField(val.op),
        ['fieldKey']: serializeUpdateClassificationRequestBodyFieldKeyField(val.fieldKey),
        ['enumOptionKey']: val.enumOptionKey,
        ['data']: serializeUpdateClassificationRequestBodyDataField(val.data),
    };
}
function deserializeUpdateClassificationRequestBody(val) {
    if (!(0, json_js_5.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "UpdateClassificationRequestBody"',
        });
    }
    if (val.op == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "op" of type "UpdateClassificationRequestBody" to be defined',
        });
    }
    const op = deserializeUpdateClassificationRequestBodyOpField(val.op);
    if (val.fieldKey == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "fieldKey" of type "UpdateClassificationRequestBody" to be defined',
        });
    }
    const fieldKey = deserializeUpdateClassificationRequestBodyFieldKeyField(val.fieldKey);
    if (val.enumOptionKey == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "enumOptionKey" of type "UpdateClassificationRequestBody" to be defined',
        });
    }
    if (!(0, json_js_3.sdIsString)(val.enumOptionKey)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "enumOptionKey" of type "UpdateClassificationRequestBody"',
        });
    }
    const enumOptionKey = val.enumOptionKey;
    if (val.data == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "data" of type "UpdateClassificationRequestBody" to be defined',
        });
    }
    const data = deserializeUpdateClassificationRequestBodyDataField(val.data);
    return {
        op: op,
        fieldKey: fieldKey,
        enumOptionKey: enumOptionKey,
        data: data,
    };
}
function serializeUpdateClassificationRequestBodyInput(val) {
    return {
        ['op']: val.op == void 0
            ? void 0
            : serializeUpdateClassificationRequestBodyOpField(val.op),
        ['fieldKey']: val.fieldKey == void 0
            ? void 0
            : serializeUpdateClassificationRequestBodyFieldKeyField(val.fieldKey),
        ['enumOptionKey']: val.enumOptionKey,
        ['data']: serializeUpdateClassificationRequestBodyDataField(val.data),
    };
}
function deserializeUpdateClassificationRequestBodyInput(val) {
    if (!(0, json_js_5.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "UpdateClassificationRequestBodyInput"',
        });
    }
    const op = val.op == void 0
        ? void 0
        : deserializeUpdateClassificationRequestBodyOpField(val.op);
    const fieldKey = val.fieldKey == void 0
        ? void 0
        : deserializeUpdateClassificationRequestBodyFieldKeyField(val.fieldKey);
    if (val.enumOptionKey == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "enumOptionKey" of type "UpdateClassificationRequestBodyInput" to be defined',
        });
    }
    if (!(0, json_js_3.sdIsString)(val.enumOptionKey)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "enumOptionKey" of type "UpdateClassificationRequestBodyInput"',
        });
    }
    const enumOptionKey = val.enumOptionKey;
    if (val.data == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "data" of type "UpdateClassificationRequestBodyInput" to be defined',
        });
    }
    const data = deserializeUpdateClassificationRequestBodyDataField(val.data);
    return {
        op: op,
        fieldKey: fieldKey,
        enumOptionKey: enumOptionKey,
        data: data,
    };
}
function serializeCreateClassificationTemplateRequestBodyScopeField(val) {
    return val;
}
function deserializeCreateClassificationTemplateRequestBodyScopeField(val) {
    if (val == 'enterprise') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize CreateClassificationTemplateRequestBodyScopeField",
    });
}
function serializeCreateClassificationTemplateRequestBodyTemplateKeyField(val) {
    return val;
}
function deserializeCreateClassificationTemplateRequestBodyTemplateKeyField(val) {
    if (val == 'securityClassification-6VMVochwUWo') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize CreateClassificationTemplateRequestBodyTemplateKeyField",
    });
}
function serializeCreateClassificationTemplateRequestBodyDisplayNameField(val) {
    return val;
}
function deserializeCreateClassificationTemplateRequestBodyDisplayNameField(val) {
    if (val == 'Classification') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize CreateClassificationTemplateRequestBodyDisplayNameField",
    });
}
function serializeCreateClassificationTemplateRequestBodyFieldsTypeField(val) {
    return val;
}
function deserializeCreateClassificationTemplateRequestBodyFieldsTypeField(val) {
    if (val == 'enum') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize CreateClassificationTemplateRequestBodyFieldsTypeField",
    });
}
function serializeCreateClassificationTemplateRequestBodyFieldsKeyField(val) {
    return val;
}
function deserializeCreateClassificationTemplateRequestBodyFieldsKeyField(val) {
    if (val == 'Box__Security__Classification__Key') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize CreateClassificationTemplateRequestBodyFieldsKeyField",
    });
}
function serializeCreateClassificationTemplateRequestBodyFieldsDisplayNameField(val) {
    return val;
}
function deserializeCreateClassificationTemplateRequestBodyFieldsDisplayNameField(val) {
    if (val == 'Classification') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize CreateClassificationTemplateRequestBodyFieldsDisplayNameField",
    });
}
function serializeCreateClassificationTemplateRequestBodyFieldsOptionsStaticConfigClassificationField(val) {
    return {
        ['classificationDefinition']: val.classificationDefinition == void 0
            ? void 0
            : val.classificationDefinition,
        ['colorID']: val.colorId == void 0 ? void 0 : val.colorId,
    };
}
function deserializeCreateClassificationTemplateRequestBodyFieldsOptionsStaticConfigClassificationField(val) {
    if (!(0, json_js_5.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "CreateClassificationTemplateRequestBodyFieldsOptionsStaticConfigClassificationField"',
        });
    }
    if (!(val.classificationDefinition == void 0) &&
        !(0, json_js_3.sdIsString)(val.classificationDefinition)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "classificationDefinition" of type "CreateClassificationTemplateRequestBodyFieldsOptionsStaticConfigClassificationField"',
        });
    }
    const classificationDefinition = val.classificationDefinition == void 0
        ? void 0
        : val.classificationDefinition;
    if (!(val.colorID == void 0) && !(0, json_js_2.sdIsNumber)(val.colorID)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "colorID" of type "CreateClassificationTemplateRequestBodyFieldsOptionsStaticConfigClassificationField"',
        });
    }
    const colorId = val.colorID == void 0 ? void 0 : val.colorID;
    return {
        classificationDefinition: classificationDefinition,
        colorId: colorId,
    };
}
function serializeCreateClassificationTemplateRequestBodyFieldsOptionsStaticConfigField(val) {
    return {
        ['classification']: val.classification == void 0
            ? void 0
            : serializeCreateClassificationTemplateRequestBodyFieldsOptionsStaticConfigClassificationField(val.classification),
    };
}
function deserializeCreateClassificationTemplateRequestBodyFieldsOptionsStaticConfigField(val) {
    if (!(0, json_js_5.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "CreateClassificationTemplateRequestBodyFieldsOptionsStaticConfigField"',
        });
    }
    const classification = val.classification == void 0
        ? void 0
        : deserializeCreateClassificationTemplateRequestBodyFieldsOptionsStaticConfigClassificationField(val.classification);
    return {
        classification: classification,
    };
}
function serializeCreateClassificationTemplateRequestBodyFieldsOptionsField(val) {
    return {
        ['key']: val.key,
        ['staticConfig']: val.staticConfig == void 0
            ? void 0
            : serializeCreateClassificationTemplateRequestBodyFieldsOptionsStaticConfigField(val.staticConfig),
    };
}
function deserializeCreateClassificationTemplateRequestBodyFieldsOptionsField(val) {
    if (!(0, json_js_5.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "CreateClassificationTemplateRequestBodyFieldsOptionsField"',
        });
    }
    if (val.key == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "key" of type "CreateClassificationTemplateRequestBodyFieldsOptionsField" to be defined',
        });
    }
    if (!(0, json_js_3.sdIsString)(val.key)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "key" of type "CreateClassificationTemplateRequestBodyFieldsOptionsField"',
        });
    }
    const key = val.key;
    const staticConfig = val.staticConfig == void 0
        ? void 0
        : deserializeCreateClassificationTemplateRequestBodyFieldsOptionsStaticConfigField(val.staticConfig);
    return {
        key: key,
        staticConfig: staticConfig,
    };
}
function serializeCreateClassificationTemplateRequestBodyFieldsField(val) {
    return {
        ['type']: serializeCreateClassificationTemplateRequestBodyFieldsTypeField(val.type),
        ['key']: serializeCreateClassificationTemplateRequestBodyFieldsKeyField(val.key),
        ['displayName']: serializeCreateClassificationTemplateRequestBodyFieldsDisplayNameField(val.displayName),
        ['hidden']: val.hidden == void 0 ? void 0 : val.hidden,
        ['options']: val.options.map(function (item) {
            return serializeCreateClassificationTemplateRequestBodyFieldsOptionsField(item);
        }),
    };
}
function deserializeCreateClassificationTemplateRequestBodyFieldsField(val) {
    if (!(0, json_js_5.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "CreateClassificationTemplateRequestBodyFieldsField"',
        });
    }
    if (val.type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "type" of type "CreateClassificationTemplateRequestBodyFieldsField" to be defined',
        });
    }
    const type = deserializeCreateClassificationTemplateRequestBodyFieldsTypeField(val.type);
    if (val.key == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "key" of type "CreateClassificationTemplateRequestBodyFieldsField" to be defined',
        });
    }
    const key = deserializeCreateClassificationTemplateRequestBodyFieldsKeyField(val.key);
    if (val.displayName == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "displayName" of type "CreateClassificationTemplateRequestBodyFieldsField" to be defined',
        });
    }
    const displayName = deserializeCreateClassificationTemplateRequestBodyFieldsDisplayNameField(val.displayName);
    if (!(val.hidden == void 0) && !(0, json_js_1.sdIsBoolean)(val.hidden)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "hidden" of type "CreateClassificationTemplateRequestBodyFieldsField"',
        });
    }
    const hidden = val.hidden == void 0 ? void 0 : val.hidden;
    if (val.options == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "options" of type "CreateClassificationTemplateRequestBodyFieldsField" to be defined',
        });
    }
    if (!(0, json_js_4.sdIsList)(val.options)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "options" of type "CreateClassificationTemplateRequestBodyFieldsField"',
        });
    }
    const options = (0, json_js_4.sdIsList)(val.options)
        ? val.options.map(function (itm) {
            return deserializeCreateClassificationTemplateRequestBodyFieldsOptionsField(itm);
        })
        : [];
    return {
        type: type,
        key: key,
        displayName: displayName,
        hidden: hidden,
        options: options,
    };
}
function serializeCreateClassificationTemplateRequestBodyFieldsFieldInput(val) {
    return {
        ['type']: val.type == void 0
            ? void 0
            : serializeCreateClassificationTemplateRequestBodyFieldsTypeField(val.type),
        ['key']: val.key == void 0
            ? void 0
            : serializeCreateClassificationTemplateRequestBodyFieldsKeyField(val.key),
        ['displayName']: val.displayName == void 0
            ? void 0
            : serializeCreateClassificationTemplateRequestBodyFieldsDisplayNameField(val.displayName),
        ['hidden']: val.hidden == void 0 ? void 0 : val.hidden,
        ['options']: val.options.map(function (item) {
            return serializeCreateClassificationTemplateRequestBodyFieldsOptionsField(item);
        }),
    };
}
function deserializeCreateClassificationTemplateRequestBodyFieldsFieldInput(val) {
    if (!(0, json_js_5.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "CreateClassificationTemplateRequestBodyFieldsFieldInput"',
        });
    }
    const type = val.type == void 0
        ? void 0
        : deserializeCreateClassificationTemplateRequestBodyFieldsTypeField(val.type);
    const key = val.key == void 0
        ? void 0
        : deserializeCreateClassificationTemplateRequestBodyFieldsKeyField(val.key);
    const displayName = val.displayName == void 0
        ? void 0
        : deserializeCreateClassificationTemplateRequestBodyFieldsDisplayNameField(val.displayName);
    if (!(val.hidden == void 0) && !(0, json_js_1.sdIsBoolean)(val.hidden)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "hidden" of type "CreateClassificationTemplateRequestBodyFieldsFieldInput"',
        });
    }
    const hidden = val.hidden == void 0 ? void 0 : val.hidden;
    if (val.options == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "options" of type "CreateClassificationTemplateRequestBodyFieldsFieldInput" to be defined',
        });
    }
    if (!(0, json_js_4.sdIsList)(val.options)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "options" of type "CreateClassificationTemplateRequestBodyFieldsFieldInput"',
        });
    }
    const options = (0, json_js_4.sdIsList)(val.options)
        ? val.options.map(function (itm) {
            return deserializeCreateClassificationTemplateRequestBodyFieldsOptionsField(itm);
        })
        : [];
    return {
        type: type,
        key: key,
        displayName: displayName,
        hidden: hidden,
        options: options,
    };
}
function serializeCreateClassificationTemplateRequestBody(val) {
    return {
        ['scope']: serializeCreateClassificationTemplateRequestBodyScopeField(val.scope),
        ['templateKey']: serializeCreateClassificationTemplateRequestBodyTemplateKeyField(val.templateKey),
        ['displayName']: serializeCreateClassificationTemplateRequestBodyDisplayNameField(val.displayName),
        ['hidden']: val.hidden == void 0 ? void 0 : val.hidden,
        ['copyInstanceOnItemCopy']: val.copyInstanceOnItemCopy == void 0
            ? void 0
            : val.copyInstanceOnItemCopy,
        ['fields']: val.fields.map(function (item) {
            return serializeCreateClassificationTemplateRequestBodyFieldsField(item);
        }),
    };
}
function deserializeCreateClassificationTemplateRequestBody(val) {
    if (!(0, json_js_5.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "CreateClassificationTemplateRequestBody"',
        });
    }
    if (val.scope == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "scope" of type "CreateClassificationTemplateRequestBody" to be defined',
        });
    }
    const scope = deserializeCreateClassificationTemplateRequestBodyScopeField(val.scope);
    if (val.templateKey == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "templateKey" of type "CreateClassificationTemplateRequestBody" to be defined',
        });
    }
    const templateKey = deserializeCreateClassificationTemplateRequestBodyTemplateKeyField(val.templateKey);
    if (val.displayName == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "displayName" of type "CreateClassificationTemplateRequestBody" to be defined',
        });
    }
    const displayName = deserializeCreateClassificationTemplateRequestBodyDisplayNameField(val.displayName);
    if (!(val.hidden == void 0) && !(0, json_js_1.sdIsBoolean)(val.hidden)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "hidden" of type "CreateClassificationTemplateRequestBody"',
        });
    }
    const hidden = val.hidden == void 0 ? void 0 : val.hidden;
    if (!(val.copyInstanceOnItemCopy == void 0) &&
        !(0, json_js_1.sdIsBoolean)(val.copyInstanceOnItemCopy)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "copyInstanceOnItemCopy" of type "CreateClassificationTemplateRequestBody"',
        });
    }
    const copyInstanceOnItemCopy = val.copyInstanceOnItemCopy == void 0 ? void 0 : val.copyInstanceOnItemCopy;
    if (val.fields == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "fields" of type "CreateClassificationTemplateRequestBody" to be defined',
        });
    }
    if (!(0, json_js_4.sdIsList)(val.fields)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "fields" of type "CreateClassificationTemplateRequestBody"',
        });
    }
    const fields = (0, json_js_4.sdIsList)(val.fields)
        ? val.fields.map(function (itm) {
            return deserializeCreateClassificationTemplateRequestBodyFieldsField(itm);
        })
        : [];
    return {
        scope: scope,
        templateKey: templateKey,
        displayName: displayName,
        hidden: hidden,
        copyInstanceOnItemCopy: copyInstanceOnItemCopy,
        fields: fields,
    };
}
function serializeCreateClassificationTemplateRequestBodyInput(val) {
    return {
        ['scope']: val.scope == void 0
            ? void 0
            : serializeCreateClassificationTemplateRequestBodyScopeField(val.scope),
        ['templateKey']: val.templateKey == void 0
            ? void 0
            : serializeCreateClassificationTemplateRequestBodyTemplateKeyField(val.templateKey),
        ['displayName']: val.displayName == void 0
            ? void 0
            : serializeCreateClassificationTemplateRequestBodyDisplayNameField(val.displayName),
        ['hidden']: val.hidden == void 0 ? void 0 : val.hidden,
        ['copyInstanceOnItemCopy']: val.copyInstanceOnItemCopy == void 0
            ? void 0
            : val.copyInstanceOnItemCopy,
        ['fields']: val.fields.map(function (item) {
            return serializeCreateClassificationTemplateRequestBodyFieldsField(item);
        }),
    };
}
function deserializeCreateClassificationTemplateRequestBodyInput(val) {
    if (!(0, json_js_5.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "CreateClassificationTemplateRequestBodyInput"',
        });
    }
    const scope = val.scope == void 0
        ? void 0
        : deserializeCreateClassificationTemplateRequestBodyScopeField(val.scope);
    const templateKey = val.templateKey == void 0
        ? void 0
        : deserializeCreateClassificationTemplateRequestBodyTemplateKeyField(val.templateKey);
    const displayName = val.displayName == void 0
        ? void 0
        : deserializeCreateClassificationTemplateRequestBodyDisplayNameField(val.displayName);
    if (!(val.hidden == void 0) && !(0, json_js_1.sdIsBoolean)(val.hidden)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "hidden" of type "CreateClassificationTemplateRequestBodyInput"',
        });
    }
    const hidden = val.hidden == void 0 ? void 0 : val.hidden;
    if (!(val.copyInstanceOnItemCopy == void 0) &&
        !(0, json_js_1.sdIsBoolean)(val.copyInstanceOnItemCopy)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "copyInstanceOnItemCopy" of type "CreateClassificationTemplateRequestBodyInput"',
        });
    }
    const copyInstanceOnItemCopy = val.copyInstanceOnItemCopy == void 0 ? void 0 : val.copyInstanceOnItemCopy;
    if (val.fields == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "fields" of type "CreateClassificationTemplateRequestBodyInput" to be defined',
        });
    }
    if (!(0, json_js_4.sdIsList)(val.fields)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "fields" of type "CreateClassificationTemplateRequestBodyInput"',
        });
    }
    const fields = (0, json_js_4.sdIsList)(val.fields)
        ? val.fields.map(function (itm) {
            return deserializeCreateClassificationTemplateRequestBodyFieldsField(itm);
        })
        : [];
    return {
        scope: scope,
        templateKey: templateKey,
        displayName: displayName,
        hidden: hidden,
        copyInstanceOnItemCopy: copyInstanceOnItemCopy,
        fields: fields,
    };
}
//# sourceMappingURL=classifications.generated.js.map