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
exports.SharedLinksWebLinksManager = exports.RemoveSharedLinkFromWebLinkHeaders = exports.UpdateSharedLinkOnWebLinkHeaders = exports.AddShareLinkToWebLinkHeaders = exports.GetSharedLinkForWebLinkHeaders = exports.FindWebLinkForSharedLinkHeaders = exports.RemoveSharedLinkFromWebLinkOptionals = exports.UpdateSharedLinkOnWebLinkOptionals = exports.AddShareLinkToWebLinkOptionals = exports.GetSharedLinkForWebLinkOptionals = exports.FindWebLinkForSharedLinkOptionals = void 0;
exports.serializeAddShareLinkToWebLinkRequestBodySharedLinkAccessField = serializeAddShareLinkToWebLinkRequestBodySharedLinkAccessField;
exports.deserializeAddShareLinkToWebLinkRequestBodySharedLinkAccessField = deserializeAddShareLinkToWebLinkRequestBodySharedLinkAccessField;
exports.serializeAddShareLinkToWebLinkRequestBodySharedLinkPermissionsField = serializeAddShareLinkToWebLinkRequestBodySharedLinkPermissionsField;
exports.deserializeAddShareLinkToWebLinkRequestBodySharedLinkPermissionsField = deserializeAddShareLinkToWebLinkRequestBodySharedLinkPermissionsField;
exports.serializeAddShareLinkToWebLinkRequestBodySharedLinkField = serializeAddShareLinkToWebLinkRequestBodySharedLinkField;
exports.deserializeAddShareLinkToWebLinkRequestBodySharedLinkField = deserializeAddShareLinkToWebLinkRequestBodySharedLinkField;
exports.serializeAddShareLinkToWebLinkRequestBody = serializeAddShareLinkToWebLinkRequestBody;
exports.deserializeAddShareLinkToWebLinkRequestBody = deserializeAddShareLinkToWebLinkRequestBody;
exports.serializeUpdateSharedLinkOnWebLinkRequestBodySharedLinkAccessField = serializeUpdateSharedLinkOnWebLinkRequestBodySharedLinkAccessField;
exports.deserializeUpdateSharedLinkOnWebLinkRequestBodySharedLinkAccessField = deserializeUpdateSharedLinkOnWebLinkRequestBodySharedLinkAccessField;
exports.serializeUpdateSharedLinkOnWebLinkRequestBodySharedLinkPermissionsField = serializeUpdateSharedLinkOnWebLinkRequestBodySharedLinkPermissionsField;
exports.deserializeUpdateSharedLinkOnWebLinkRequestBodySharedLinkPermissionsField = deserializeUpdateSharedLinkOnWebLinkRequestBodySharedLinkPermissionsField;
exports.serializeUpdateSharedLinkOnWebLinkRequestBodySharedLinkField = serializeUpdateSharedLinkOnWebLinkRequestBodySharedLinkField;
exports.deserializeUpdateSharedLinkOnWebLinkRequestBodySharedLinkField = deserializeUpdateSharedLinkOnWebLinkRequestBodySharedLinkField;
exports.serializeUpdateSharedLinkOnWebLinkRequestBody = serializeUpdateSharedLinkOnWebLinkRequestBody;
exports.deserializeUpdateSharedLinkOnWebLinkRequestBody = deserializeUpdateSharedLinkOnWebLinkRequestBody;
exports.serializeRemoveSharedLinkFromWebLinkRequestBodySharedLinkField = serializeRemoveSharedLinkFromWebLinkRequestBodySharedLinkField;
exports.deserializeRemoveSharedLinkFromWebLinkRequestBodySharedLinkField = deserializeRemoveSharedLinkFromWebLinkRequestBodySharedLinkField;
exports.serializeRemoveSharedLinkFromWebLinkRequestBody = serializeRemoveSharedLinkFromWebLinkRequestBody;
exports.deserializeRemoveSharedLinkFromWebLinkRequestBody = deserializeRemoveSharedLinkFromWebLinkRequestBody;
const webLink_generated_js_1 = require("../schemas/webLink.generated.js");
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
const network_generated_js_1 = require("../networking/network.generated.js");
const utils_js_3 = require("../internal/utils.js");
const utils_js_4 = require("../internal/utils.js");
const fetch_js_1 = require("../networking/fetch.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
const json_js_3 = require("../serialization/json.js");
class FindWebLinkForSharedLinkOptionals {
    constructor(fields) {
        this.cancellationToken = void 0;
        if (fields.cancellationToken) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.FindWebLinkForSharedLinkOptionals = FindWebLinkForSharedLinkOptionals;
class GetSharedLinkForWebLinkOptionals {
    constructor(fields) {
        this.headers = new GetSharedLinkForWebLinkHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.GetSharedLinkForWebLinkOptionals = GetSharedLinkForWebLinkOptionals;
class AddShareLinkToWebLinkOptionals {
    constructor(fields) {
        this.headers = new AddShareLinkToWebLinkHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.AddShareLinkToWebLinkOptionals = AddShareLinkToWebLinkOptionals;
class UpdateSharedLinkOnWebLinkOptionals {
    constructor(fields) {
        this.headers = new UpdateSharedLinkOnWebLinkHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.UpdateSharedLinkOnWebLinkOptionals = UpdateSharedLinkOnWebLinkOptionals;
class RemoveSharedLinkFromWebLinkOptionals {
    constructor(fields) {
        this.headers = new RemoveSharedLinkFromWebLinkHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.RemoveSharedLinkFromWebLinkOptionals = RemoveSharedLinkFromWebLinkOptionals;
class FindWebLinkForSharedLinkHeaders {
    constructor(fields) {
        this.extraHeaders = {};
        if (fields.ifNoneMatch) {
            this.ifNoneMatch = fields.ifNoneMatch;
        }
        if (fields.boxapi) {
            this.boxapi = fields.boxapi;
        }
        if (fields.extraHeaders) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.FindWebLinkForSharedLinkHeaders = FindWebLinkForSharedLinkHeaders;
class GetSharedLinkForWebLinkHeaders {
    constructor(fields) {
        this.extraHeaders = {};
        if (fields.extraHeaders) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.GetSharedLinkForWebLinkHeaders = GetSharedLinkForWebLinkHeaders;
class AddShareLinkToWebLinkHeaders {
    constructor(fields) {
        this.extraHeaders = {};
        if (fields.extraHeaders) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.AddShareLinkToWebLinkHeaders = AddShareLinkToWebLinkHeaders;
class UpdateSharedLinkOnWebLinkHeaders {
    constructor(fields) {
        this.extraHeaders = {};
        if (fields.extraHeaders) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.UpdateSharedLinkOnWebLinkHeaders = UpdateSharedLinkOnWebLinkHeaders;
class RemoveSharedLinkFromWebLinkHeaders {
    constructor(fields) {
        this.extraHeaders = {};
        if (fields.extraHeaders) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.RemoveSharedLinkFromWebLinkHeaders = RemoveSharedLinkFromWebLinkHeaders;
class SharedLinksWebLinksManager {
    constructor(fields) {
        this.networkSession = new network_generated_js_1.NetworkSession({});
        if (fields.auth) {
            this.auth = fields.auth;
        }
        if (fields.networkSession) {
            this.networkSession = fields.networkSession;
        }
    }
    findWebLinkForSharedLink() {
        return __awaiter(this, arguments, void 0, function* (queryParams = {}, headersInput, optionalsInput = {}) {
            const headers = new FindWebLinkForSharedLinkHeaders({
                ifNoneMatch: headersInput.ifNoneMatch,
                boxapi: headersInput.boxapi,
                extraHeaders: headersInput.extraHeaders,
            });
            const optionals = new FindWebLinkForSharedLinkOptionals({
                cancellationToken: optionalsInput.cancellationToken,
            });
            const cancellationToken = optionals.cancellationToken;
            const queryParamsMap = (0, utils_js_3.prepareParams)({
                ['fields']: queryParams.fields
                    ? queryParams.fields.map(utils_js_4.toString).join(',')
                    : undefined,
            });
            const headersMap = (0, utils_js_3.prepareParams)(Object.assign({
                ['if-none-match']: (0, utils_js_4.toString)(headers.ifNoneMatch),
                ['boxapi']: (0, utils_js_4.toString)(headers.boxapi),
            }, headers.extraHeaders));
            const response = (yield (0, fetch_js_1.fetch)(''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/shared_items#web_links'), {
                method: 'GET',
                params: queryParamsMap,
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return (0, webLink_generated_js_1.deserializeWebLink)(response.data);
        });
    }
    getSharedLinkForWebLink(webLinkId_1, queryParams_1) {
        return __awaiter(this, arguments, void 0, function* (webLinkId, queryParams, optionalsInput = {}) {
            const optionals = new GetSharedLinkForWebLinkOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const queryParamsMap = (0, utils_js_3.prepareParams)({ ['fields']: (0, utils_js_4.toString)(queryParams.fields) });
            const headersMap = (0, utils_js_3.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = (yield (0, fetch_js_1.fetch)(''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/web_links/', (0, utils_js_4.toString)(webLinkId), '#get_shared_link'), {
                method: 'GET',
                params: queryParamsMap,
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return (0, webLink_generated_js_1.deserializeWebLink)(response.data);
        });
    }
    addShareLinkToWebLink(webLinkId_1) {
        return __awaiter(this, arguments, void 0, function* (webLinkId, requestBody = {}, queryParams, optionalsInput = {}) {
            const optionals = new AddShareLinkToWebLinkOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const queryParamsMap = (0, utils_js_3.prepareParams)({ ['fields']: (0, utils_js_4.toString)(queryParams.fields) });
            const headersMap = (0, utils_js_3.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = (yield (0, fetch_js_1.fetch)(''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/web_links/', (0, utils_js_4.toString)(webLinkId), '#add_shared_link'), {
                method: 'PUT',
                params: queryParamsMap,
                headers: headersMap,
                data: serializeAddShareLinkToWebLinkRequestBody(requestBody),
                contentType: 'application/json',
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return (0, webLink_generated_js_1.deserializeWebLink)(response.data);
        });
    }
    updateSharedLinkOnWebLink(webLinkId_1) {
        return __awaiter(this, arguments, void 0, function* (webLinkId, requestBody = {}, queryParams, optionalsInput = {}) {
            const optionals = new UpdateSharedLinkOnWebLinkOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const queryParamsMap = (0, utils_js_3.prepareParams)({ ['fields']: (0, utils_js_4.toString)(queryParams.fields) });
            const headersMap = (0, utils_js_3.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = (yield (0, fetch_js_1.fetch)(''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/web_links/', (0, utils_js_4.toString)(webLinkId), '#update_shared_link'), {
                method: 'PUT',
                params: queryParamsMap,
                headers: headersMap,
                data: serializeUpdateSharedLinkOnWebLinkRequestBody(requestBody),
                contentType: 'application/json',
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return (0, webLink_generated_js_1.deserializeWebLink)(response.data);
        });
    }
    removeSharedLinkFromWebLink(webLinkId_1) {
        return __awaiter(this, arguments, void 0, function* (webLinkId, requestBody = {}, queryParams, optionalsInput = {}) {
            const optionals = new RemoveSharedLinkFromWebLinkOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const queryParamsMap = (0, utils_js_3.prepareParams)({ ['fields']: (0, utils_js_4.toString)(queryParams.fields) });
            const headersMap = (0, utils_js_3.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = (yield (0, fetch_js_1.fetch)(''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/web_links/', (0, utils_js_4.toString)(webLinkId), '#remove_shared_link'), {
                method: 'PUT',
                params: queryParamsMap,
                headers: headersMap,
                data: serializeRemoveSharedLinkFromWebLinkRequestBody(requestBody),
                contentType: 'application/json',
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return (0, webLink_generated_js_1.deserializeWebLink)(response.data);
        });
    }
}
exports.SharedLinksWebLinksManager = SharedLinksWebLinksManager;
function serializeAddShareLinkToWebLinkRequestBodySharedLinkAccessField(val) {
    return val;
}
function deserializeAddShareLinkToWebLinkRequestBodySharedLinkAccessField(val) {
    if (val == 'open') {
        return val;
    }
    if (val == 'company') {
        return val;
    }
    if (val == 'collaborators') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize AddShareLinkToWebLinkRequestBodySharedLinkAccessField",
    });
}
function serializeAddShareLinkToWebLinkRequestBodySharedLinkPermissionsField(val) {
    return {
        ['can_download']: val.canDownload == void 0 ? void 0 : val.canDownload,
        ['can_preview']: val.canPreview == void 0 ? void 0 : val.canPreview,
        ['can_edit']: val.canEdit == void 0 ? void 0 : val.canEdit,
    };
}
function deserializeAddShareLinkToWebLinkRequestBodySharedLinkPermissionsField(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "AddShareLinkToWebLinkRequestBodySharedLinkPermissionsField"',
        });
    }
    if (!(val.can_download == void 0) && !(0, json_js_1.sdIsBoolean)(val.can_download)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "can_download" of type "AddShareLinkToWebLinkRequestBodySharedLinkPermissionsField"',
        });
    }
    const canDownload = val.can_download == void 0 ? void 0 : val.can_download;
    if (!(val.can_preview == void 0) && !(0, json_js_1.sdIsBoolean)(val.can_preview)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "can_preview" of type "AddShareLinkToWebLinkRequestBodySharedLinkPermissionsField"',
        });
    }
    const canPreview = val.can_preview == void 0 ? void 0 : val.can_preview;
    if (!(val.can_edit == void 0) && !(0, json_js_1.sdIsBoolean)(val.can_edit)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "can_edit" of type "AddShareLinkToWebLinkRequestBodySharedLinkPermissionsField"',
        });
    }
    const canEdit = val.can_edit == void 0 ? void 0 : val.can_edit;
    return {
        canDownload: canDownload,
        canPreview: canPreview,
        canEdit: canEdit,
    };
}
function serializeAddShareLinkToWebLinkRequestBodySharedLinkField(val) {
    return {
        ['access']: val.access == void 0
            ? void 0
            : serializeAddShareLinkToWebLinkRequestBodySharedLinkAccessField(val.access),
        ['password']: val.password == void 0 ? void 0 : val.password,
        ['vanity_name']: val.vanityName == void 0 ? void 0 : val.vanityName,
        ['unshared_at']: val.unsharedAt == void 0 ? void 0 : (0, utils_js_1.serializeDateTime)(val.unsharedAt),
        ['permissions']: val.permissions == void 0
            ? void 0
            : serializeAddShareLinkToWebLinkRequestBodySharedLinkPermissionsField(val.permissions),
    };
}
function deserializeAddShareLinkToWebLinkRequestBodySharedLinkField(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "AddShareLinkToWebLinkRequestBodySharedLinkField"',
        });
    }
    const access = val.access == void 0
        ? void 0
        : deserializeAddShareLinkToWebLinkRequestBodySharedLinkAccessField(val.access);
    if (!(val.password == void 0) && !(0, json_js_2.sdIsString)(val.password)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "password" of type "AddShareLinkToWebLinkRequestBodySharedLinkField"',
        });
    }
    const password = val.password == void 0 ? void 0 : val.password;
    if (!(val.vanity_name == void 0) && !(0, json_js_2.sdIsString)(val.vanity_name)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "vanity_name" of type "AddShareLinkToWebLinkRequestBodySharedLinkField"',
        });
    }
    const vanityName = val.vanity_name == void 0 ? void 0 : val.vanity_name;
    if (!(val.unshared_at == void 0) && !(0, json_js_2.sdIsString)(val.unshared_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "unshared_at" of type "AddShareLinkToWebLinkRequestBodySharedLinkField"',
        });
    }
    const unsharedAt = val.unshared_at == void 0 ? void 0 : (0, utils_js_2.deserializeDateTime)(val.unshared_at);
    const permissions = val.permissions == void 0
        ? void 0
        : deserializeAddShareLinkToWebLinkRequestBodySharedLinkPermissionsField(val.permissions);
    return {
        access: access,
        password: password,
        vanityName: vanityName,
        unsharedAt: unsharedAt,
        permissions: permissions,
    };
}
function serializeAddShareLinkToWebLinkRequestBody(val) {
    return {
        ['shared_link']: val.sharedLink == void 0
            ? void 0
            : serializeAddShareLinkToWebLinkRequestBodySharedLinkField(val.sharedLink),
    };
}
function deserializeAddShareLinkToWebLinkRequestBody(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "AddShareLinkToWebLinkRequestBody"',
        });
    }
    const sharedLink = val.shared_link == void 0
        ? void 0
        : deserializeAddShareLinkToWebLinkRequestBodySharedLinkField(val.shared_link);
    return { sharedLink: sharedLink };
}
function serializeUpdateSharedLinkOnWebLinkRequestBodySharedLinkAccessField(val) {
    return val;
}
function deserializeUpdateSharedLinkOnWebLinkRequestBodySharedLinkAccessField(val) {
    if (val == 'open') {
        return val;
    }
    if (val == 'company') {
        return val;
    }
    if (val == 'collaborators') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize UpdateSharedLinkOnWebLinkRequestBodySharedLinkAccessField",
    });
}
function serializeUpdateSharedLinkOnWebLinkRequestBodySharedLinkPermissionsField(val) {
    return {
        ['can_download']: val.canDownload == void 0 ? void 0 : val.canDownload,
        ['can_preview']: val.canPreview == void 0 ? void 0 : val.canPreview,
        ['can_edit']: val.canEdit == void 0 ? void 0 : val.canEdit,
    };
}
function deserializeUpdateSharedLinkOnWebLinkRequestBodySharedLinkPermissionsField(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "UpdateSharedLinkOnWebLinkRequestBodySharedLinkPermissionsField"',
        });
    }
    if (!(val.can_download == void 0) && !(0, json_js_1.sdIsBoolean)(val.can_download)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "can_download" of type "UpdateSharedLinkOnWebLinkRequestBodySharedLinkPermissionsField"',
        });
    }
    const canDownload = val.can_download == void 0 ? void 0 : val.can_download;
    if (!(val.can_preview == void 0) && !(0, json_js_1.sdIsBoolean)(val.can_preview)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "can_preview" of type "UpdateSharedLinkOnWebLinkRequestBodySharedLinkPermissionsField"',
        });
    }
    const canPreview = val.can_preview == void 0 ? void 0 : val.can_preview;
    if (!(val.can_edit == void 0) && !(0, json_js_1.sdIsBoolean)(val.can_edit)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "can_edit" of type "UpdateSharedLinkOnWebLinkRequestBodySharedLinkPermissionsField"',
        });
    }
    const canEdit = val.can_edit == void 0 ? void 0 : val.can_edit;
    return {
        canDownload: canDownload,
        canPreview: canPreview,
        canEdit: canEdit,
    };
}
function serializeUpdateSharedLinkOnWebLinkRequestBodySharedLinkField(val) {
    return {
        ['access']: val.access == void 0
            ? void 0
            : serializeUpdateSharedLinkOnWebLinkRequestBodySharedLinkAccessField(val.access),
        ['password']: val.password == void 0 ? void 0 : val.password,
        ['vanity_name']: val.vanityName == void 0 ? void 0 : val.vanityName,
        ['unshared_at']: val.unsharedAt == void 0 ? void 0 : (0, utils_js_1.serializeDateTime)(val.unsharedAt),
        ['permissions']: val.permissions == void 0
            ? void 0
            : serializeUpdateSharedLinkOnWebLinkRequestBodySharedLinkPermissionsField(val.permissions),
    };
}
function deserializeUpdateSharedLinkOnWebLinkRequestBodySharedLinkField(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "UpdateSharedLinkOnWebLinkRequestBodySharedLinkField"',
        });
    }
    const access = val.access == void 0
        ? void 0
        : deserializeUpdateSharedLinkOnWebLinkRequestBodySharedLinkAccessField(val.access);
    if (!(val.password == void 0) && !(0, json_js_2.sdIsString)(val.password)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "password" of type "UpdateSharedLinkOnWebLinkRequestBodySharedLinkField"',
        });
    }
    const password = val.password == void 0 ? void 0 : val.password;
    if (!(val.vanity_name == void 0) && !(0, json_js_2.sdIsString)(val.vanity_name)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "vanity_name" of type "UpdateSharedLinkOnWebLinkRequestBodySharedLinkField"',
        });
    }
    const vanityName = val.vanity_name == void 0 ? void 0 : val.vanity_name;
    if (!(val.unshared_at == void 0) && !(0, json_js_2.sdIsString)(val.unshared_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "unshared_at" of type "UpdateSharedLinkOnWebLinkRequestBodySharedLinkField"',
        });
    }
    const unsharedAt = val.unshared_at == void 0 ? void 0 : (0, utils_js_2.deserializeDateTime)(val.unshared_at);
    const permissions = val.permissions == void 0
        ? void 0
        : deserializeUpdateSharedLinkOnWebLinkRequestBodySharedLinkPermissionsField(val.permissions);
    return {
        access: access,
        password: password,
        vanityName: vanityName,
        unsharedAt: unsharedAt,
        permissions: permissions,
    };
}
function serializeUpdateSharedLinkOnWebLinkRequestBody(val) {
    return {
        ['shared_link']: val.sharedLink == void 0
            ? void 0
            : serializeUpdateSharedLinkOnWebLinkRequestBodySharedLinkField(val.sharedLink),
    };
}
function deserializeUpdateSharedLinkOnWebLinkRequestBody(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "UpdateSharedLinkOnWebLinkRequestBody"',
        });
    }
    const sharedLink = val.shared_link == void 0
        ? void 0
        : deserializeUpdateSharedLinkOnWebLinkRequestBodySharedLinkField(val.shared_link);
    return {
        sharedLink: sharedLink,
    };
}
function serializeRemoveSharedLinkFromWebLinkRequestBodySharedLinkField(val) {
    return {};
}
function deserializeRemoveSharedLinkFromWebLinkRequestBodySharedLinkField(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "RemoveSharedLinkFromWebLinkRequestBodySharedLinkField"',
        });
    }
    return {};
}
function serializeRemoveSharedLinkFromWebLinkRequestBody(val) {
    return {
        ['shared_link']: val.sharedLink == void 0
            ? void 0
            : serializeRemoveSharedLinkFromWebLinkRequestBodySharedLinkField(val.sharedLink),
    };
}
function deserializeRemoveSharedLinkFromWebLinkRequestBody(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "RemoveSharedLinkFromWebLinkRequestBody"',
        });
    }
    const sharedLink = val.shared_link == void 0
        ? void 0
        : deserializeRemoveSharedLinkFromWebLinkRequestBodySharedLinkField(val.shared_link);
    return {
        sharedLink: sharedLink,
    };
}
//# sourceMappingURL=sharedLinksWebLinks.generated.js.map