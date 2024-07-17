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
exports.TransferManager = exports.TransferOwnedFolderHeaders = exports.TransferOwnedFolderOptionals = void 0;
exports.serializeTransferOwnedFolderRequestBodyOwnedByField = serializeTransferOwnedFolderRequestBodyOwnedByField;
exports.deserializeTransferOwnedFolderRequestBodyOwnedByField = deserializeTransferOwnedFolderRequestBodyOwnedByField;
exports.serializeTransferOwnedFolderRequestBody = serializeTransferOwnedFolderRequestBody;
exports.deserializeTransferOwnedFolderRequestBody = deserializeTransferOwnedFolderRequestBody;
const folderFull_generated_js_1 = require("../schemas/folderFull.generated.js");
const network_generated_js_1 = require("../networking/network.generated.js");
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
const fetch_js_1 = require("../networking/fetch.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
class TransferOwnedFolderOptionals {
    constructor(fields) {
        this.queryParams = {};
        this.headers = new TransferOwnedFolderHeaders({});
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
exports.TransferOwnedFolderOptionals = TransferOwnedFolderOptionals;
class TransferOwnedFolderHeaders {
    constructor(fields) {
        this.extraHeaders = {};
        if (fields.extraHeaders) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.TransferOwnedFolderHeaders = TransferOwnedFolderHeaders;
class TransferManager {
    constructor(fields) {
        this.networkSession = new network_generated_js_1.NetworkSession({});
        if (fields.auth) {
            this.auth = fields.auth;
        }
        if (fields.networkSession) {
            this.networkSession = fields.networkSession;
        }
    }
    transferOwnedFolder(userId_1, requestBody_1) {
        return __awaiter(this, arguments, void 0, function* (userId, requestBody, optionalsInput = {}) {
            const optionals = new TransferOwnedFolderOptionals({
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
                ['notify']: (0, utils_js_2.toString)(queryParams.notify),
            });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = (yield (0, fetch_js_1.fetch)(''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/users/', (0, utils_js_2.toString)(userId), '/folders/0'), {
                method: 'PUT',
                params: queryParamsMap,
                headers: headersMap,
                data: serializeTransferOwnedFolderRequestBody(requestBody),
                contentType: 'application/json',
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return (0, folderFull_generated_js_1.deserializeFolderFull)(response.data);
        });
    }
}
exports.TransferManager = TransferManager;
function serializeTransferOwnedFolderRequestBodyOwnedByField(val) {
    return { ['id']: val.id };
}
function deserializeTransferOwnedFolderRequestBodyOwnedByField(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "TransferOwnedFolderRequestBodyOwnedByField"',
        });
    }
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "TransferOwnedFolderRequestBodyOwnedByField" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "TransferOwnedFolderRequestBodyOwnedByField"',
        });
    }
    const id = val.id;
    return { id: id };
}
function serializeTransferOwnedFolderRequestBody(val) {
    return {
        ['owned_by']: serializeTransferOwnedFolderRequestBodyOwnedByField(val.ownedBy),
    };
}
function deserializeTransferOwnedFolderRequestBody(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "TransferOwnedFolderRequestBody"',
        });
    }
    if (val.owned_by == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "owned_by" of type "TransferOwnedFolderRequestBody" to be defined',
        });
    }
    const ownedBy = deserializeTransferOwnedFolderRequestBodyOwnedByField(val.owned_by);
    return { ownedBy: ownedBy };
}
//# sourceMappingURL=transfer.generated.js.map