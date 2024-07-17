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
exports.WebLinksManager = exports.DeleteWebLinkByIdHeaders = exports.UpdateWebLinkByIdHeaders = exports.GetWebLinkByIdHeaders = exports.CreateWebLinkHeaders = exports.DeleteWebLinkByIdOptionals = exports.UpdateWebLinkByIdOptionals = exports.GetWebLinkByIdOptionals = exports.CreateWebLinkOptionals = void 0;
exports.serializeCreateWebLinkRequestBodyParentField = serializeCreateWebLinkRequestBodyParentField;
exports.deserializeCreateWebLinkRequestBodyParentField = deserializeCreateWebLinkRequestBodyParentField;
exports.serializeCreateWebLinkRequestBody = serializeCreateWebLinkRequestBody;
exports.deserializeCreateWebLinkRequestBody = deserializeCreateWebLinkRequestBody;
exports.serializeUpdateWebLinkByIdRequestBodyParentField = serializeUpdateWebLinkByIdRequestBodyParentField;
exports.deserializeUpdateWebLinkByIdRequestBodyParentField = deserializeUpdateWebLinkByIdRequestBodyParentField;
exports.serializeUpdateWebLinkByIdRequestBodySharedLinkAccessField = serializeUpdateWebLinkByIdRequestBodySharedLinkAccessField;
exports.deserializeUpdateWebLinkByIdRequestBodySharedLinkAccessField = deserializeUpdateWebLinkByIdRequestBodySharedLinkAccessField;
exports.serializeUpdateWebLinkByIdRequestBodySharedLinkField = serializeUpdateWebLinkByIdRequestBodySharedLinkField;
exports.deserializeUpdateWebLinkByIdRequestBodySharedLinkField = deserializeUpdateWebLinkByIdRequestBodySharedLinkField;
exports.serializeUpdateWebLinkByIdRequestBody = serializeUpdateWebLinkByIdRequestBody;
exports.deserializeUpdateWebLinkByIdRequestBody = deserializeUpdateWebLinkByIdRequestBody;
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
class CreateWebLinkOptionals {
    constructor(fields) {
        this.headers = new CreateWebLinkHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.CreateWebLinkOptionals = CreateWebLinkOptionals;
class GetWebLinkByIdOptionals {
    constructor(fields) {
        this.headers = new GetWebLinkByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.GetWebLinkByIdOptionals = GetWebLinkByIdOptionals;
class UpdateWebLinkByIdOptionals {
    constructor(fields) {
        this.requestBody = {};
        this.headers = new UpdateWebLinkByIdHeaders({});
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
exports.UpdateWebLinkByIdOptionals = UpdateWebLinkByIdOptionals;
class DeleteWebLinkByIdOptionals {
    constructor(fields) {
        this.headers = new DeleteWebLinkByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.DeleteWebLinkByIdOptionals = DeleteWebLinkByIdOptionals;
class CreateWebLinkHeaders {
    constructor(fields) {
        this.extraHeaders = {};
        if (fields.extraHeaders) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.CreateWebLinkHeaders = CreateWebLinkHeaders;
class GetWebLinkByIdHeaders {
    constructor(fields) {
        this.extraHeaders = {};
        if (fields.boxapi) {
            this.boxapi = fields.boxapi;
        }
        if (fields.extraHeaders) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.GetWebLinkByIdHeaders = GetWebLinkByIdHeaders;
class UpdateWebLinkByIdHeaders {
    constructor(fields) {
        this.extraHeaders = {};
        if (fields.extraHeaders) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.UpdateWebLinkByIdHeaders = UpdateWebLinkByIdHeaders;
class DeleteWebLinkByIdHeaders {
    constructor(fields) {
        this.extraHeaders = {};
        if (fields.extraHeaders) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.DeleteWebLinkByIdHeaders = DeleteWebLinkByIdHeaders;
class WebLinksManager {
    constructor(fields) {
        this.networkSession = new network_generated_js_1.NetworkSession({});
        if (fields.auth) {
            this.auth = fields.auth;
        }
        if (fields.networkSession) {
            this.networkSession = fields.networkSession;
        }
    }
    createWebLink(requestBody_1) {
        return __awaiter(this, arguments, void 0, function* (requestBody, optionalsInput = {}) {
            const optionals = new CreateWebLinkOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_3.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = (yield (0, fetch_js_1.fetch)(''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/web_links'), {
                method: 'POST',
                headers: headersMap,
                data: serializeCreateWebLinkRequestBody(requestBody),
                contentType: 'application/json',
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return (0, webLink_generated_js_1.deserializeWebLink)(response.data);
        });
    }
    getWebLinkById(webLinkId_1) {
        return __awaiter(this, arguments, void 0, function* (webLinkId, optionalsInput = {}) {
            const optionals = new GetWebLinkByIdOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_3.prepareParams)(Object.assign({ ['boxapi']: (0, utils_js_4.toString)(headers.boxapi) }, headers.extraHeaders));
            const response = (yield (0, fetch_js_1.fetch)(''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/web_links/', (0, utils_js_4.toString)(webLinkId)), {
                method: 'GET',
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return (0, webLink_generated_js_1.deserializeWebLink)(response.data);
        });
    }
    updateWebLinkById(webLinkId_1) {
        return __awaiter(this, arguments, void 0, function* (webLinkId, optionalsInput = {}) {
            const optionals = new UpdateWebLinkByIdOptionals({
                requestBody: optionalsInput.requestBody,
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const requestBody = optionals.requestBody;
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_3.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = (yield (0, fetch_js_1.fetch)(''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/web_links/', (0, utils_js_4.toString)(webLinkId)), {
                method: 'PUT',
                headers: headersMap,
                data: serializeUpdateWebLinkByIdRequestBody(requestBody),
                contentType: 'application/json',
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return (0, webLink_generated_js_1.deserializeWebLink)(response.data);
        });
    }
    deleteWebLinkById(webLinkId_1) {
        return __awaiter(this, arguments, void 0, function* (webLinkId, optionalsInput = {}) {
            const optionals = new DeleteWebLinkByIdOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_3.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = (yield (0, fetch_js_1.fetch)(''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/web_links/', (0, utils_js_4.toString)(webLinkId)), {
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
exports.WebLinksManager = WebLinksManager;
function serializeCreateWebLinkRequestBodyParentField(val) {
    return { ['id']: val.id };
}
function deserializeCreateWebLinkRequestBodyParentField(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "CreateWebLinkRequestBodyParentField"',
        });
    }
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "CreateWebLinkRequestBodyParentField" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "CreateWebLinkRequestBodyParentField"',
        });
    }
    const id = val.id;
    return { id: id };
}
function serializeCreateWebLinkRequestBody(val) {
    return {
        ['url']: val.url,
        ['parent']: serializeCreateWebLinkRequestBodyParentField(val.parent),
        ['name']: val.name == void 0 ? void 0 : val.name,
        ['description']: val.description == void 0 ? void 0 : val.description,
    };
}
function deserializeCreateWebLinkRequestBody(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "CreateWebLinkRequestBody"',
        });
    }
    if (val.url == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "url" of type "CreateWebLinkRequestBody" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.url)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "url" of type "CreateWebLinkRequestBody"',
        });
    }
    const url = val.url;
    if (val.parent == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "parent" of type "CreateWebLinkRequestBody" to be defined',
        });
    }
    const parent = deserializeCreateWebLinkRequestBodyParentField(val.parent);
    if (!(val.name == void 0) && !(0, json_js_1.sdIsString)(val.name)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "name" of type "CreateWebLinkRequestBody"',
        });
    }
    const name = val.name == void 0 ? void 0 : val.name;
    if (!(val.description == void 0) && !(0, json_js_1.sdIsString)(val.description)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "description" of type "CreateWebLinkRequestBody"',
        });
    }
    const description = val.description == void 0 ? void 0 : val.description;
    return {
        url: url,
        parent: parent,
        name: name,
        description: description,
    };
}
function serializeUpdateWebLinkByIdRequestBodyParentField(val) {
    return { ['id']: val.id == void 0 ? void 0 : val.id };
}
function deserializeUpdateWebLinkByIdRequestBodyParentField(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "UpdateWebLinkByIdRequestBodyParentField"',
        });
    }
    if (!(val.id == void 0) && !(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "UpdateWebLinkByIdRequestBodyParentField"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    return { id: id };
}
function serializeUpdateWebLinkByIdRequestBodySharedLinkAccessField(val) {
    return val;
}
function deserializeUpdateWebLinkByIdRequestBodySharedLinkAccessField(val) {
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
        message: "Can't deserialize UpdateWebLinkByIdRequestBodySharedLinkAccessField",
    });
}
function serializeUpdateWebLinkByIdRequestBodySharedLinkField(val) {
    return {
        ['access']: val.access == void 0
            ? void 0
            : serializeUpdateWebLinkByIdRequestBodySharedLinkAccessField(val.access),
        ['password']: val.password == void 0 ? void 0 : val.password,
        ['vanity_name']: val.vanityName == void 0 ? void 0 : val.vanityName,
        ['unshared_at']: val.unsharedAt == void 0 ? void 0 : (0, utils_js_1.serializeDateTime)(val.unsharedAt),
    };
}
function deserializeUpdateWebLinkByIdRequestBodySharedLinkField(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "UpdateWebLinkByIdRequestBodySharedLinkField"',
        });
    }
    const access = val.access == void 0
        ? void 0
        : deserializeUpdateWebLinkByIdRequestBodySharedLinkAccessField(val.access);
    if (!(val.password == void 0) && !(0, json_js_1.sdIsString)(val.password)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "password" of type "UpdateWebLinkByIdRequestBodySharedLinkField"',
        });
    }
    const password = val.password == void 0 ? void 0 : val.password;
    if (!(val.vanity_name == void 0) && !(0, json_js_1.sdIsString)(val.vanity_name)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "vanity_name" of type "UpdateWebLinkByIdRequestBodySharedLinkField"',
        });
    }
    const vanityName = val.vanity_name == void 0 ? void 0 : val.vanity_name;
    if (!(val.unshared_at == void 0) && !(0, json_js_1.sdIsString)(val.unshared_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "unshared_at" of type "UpdateWebLinkByIdRequestBodySharedLinkField"',
        });
    }
    const unsharedAt = val.unshared_at == void 0 ? void 0 : (0, utils_js_2.deserializeDateTime)(val.unshared_at);
    return {
        access: access,
        password: password,
        vanityName: vanityName,
        unsharedAt: unsharedAt,
    };
}
function serializeUpdateWebLinkByIdRequestBody(val) {
    return {
        ['url']: val.url == void 0 ? void 0 : val.url,
        ['parent']: val.parent == void 0
            ? void 0
            : serializeUpdateWebLinkByIdRequestBodyParentField(val.parent),
        ['name']: val.name == void 0 ? void 0 : val.name,
        ['description']: val.description == void 0 ? void 0 : val.description,
        ['shared_link']: val.sharedLink == void 0
            ? void 0
            : serializeUpdateWebLinkByIdRequestBodySharedLinkField(val.sharedLink),
    };
}
function deserializeUpdateWebLinkByIdRequestBody(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "UpdateWebLinkByIdRequestBody"',
        });
    }
    if (!(val.url == void 0) && !(0, json_js_1.sdIsString)(val.url)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "url" of type "UpdateWebLinkByIdRequestBody"',
        });
    }
    const url = val.url == void 0 ? void 0 : val.url;
    const parent = val.parent == void 0
        ? void 0
        : deserializeUpdateWebLinkByIdRequestBodyParentField(val.parent);
    if (!(val.name == void 0) && !(0, json_js_1.sdIsString)(val.name)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "name" of type "UpdateWebLinkByIdRequestBody"',
        });
    }
    const name = val.name == void 0 ? void 0 : val.name;
    if (!(val.description == void 0) && !(0, json_js_1.sdIsString)(val.description)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "description" of type "UpdateWebLinkByIdRequestBody"',
        });
    }
    const description = val.description == void 0 ? void 0 : val.description;
    const sharedLink = val.shared_link == void 0
        ? void 0
        : deserializeUpdateWebLinkByIdRequestBodySharedLinkField(val.shared_link);
    return {
        url: url,
        parent: parent,
        name: name,
        description: description,
        sharedLink: sharedLink,
    };
}
//# sourceMappingURL=webLinks.generated.js.map