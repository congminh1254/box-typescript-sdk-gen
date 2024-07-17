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
exports.TrashedItemsManager = exports.GetTrashedItemsHeaders = void 0;
exports.serializeGetTrashedItemsQueryParamsDirectionField = serializeGetTrashedItemsQueryParamsDirectionField;
exports.deserializeGetTrashedItemsQueryParamsDirectionField = deserializeGetTrashedItemsQueryParamsDirectionField;
exports.serializeGetTrashedItemsQueryParamsSortField = serializeGetTrashedItemsQueryParamsSortField;
exports.deserializeGetTrashedItemsQueryParamsSortField = deserializeGetTrashedItemsQueryParamsSortField;
const items_generated_js_1 = require("../schemas/items.generated.js");
const network_generated_js_1 = require("../networking/network.generated.js");
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
const fetch_js_1 = require("../networking/fetch.js");
const errors_js_1 = require("../box/errors.js");
class GetTrashedItemsHeaders {
    constructor(fields) {
        this.extraHeaders = {};
        if (fields.extraHeaders) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.GetTrashedItemsHeaders = GetTrashedItemsHeaders;
class TrashedItemsManager {
    constructor(fields) {
        this.networkSession = new network_generated_js_1.NetworkSession({});
        if (fields.auth) {
            this.auth = fields.auth;
        }
        if (fields.networkSession) {
            this.networkSession = fields.networkSession;
        }
    }
    getTrashedItems() {
        return __awaiter(this, arguments, void 0, function* (queryParams = {}, headersInput = new GetTrashedItemsHeaders({}), cancellationToken) {
            const headers = new GetTrashedItemsHeaders({
                extraHeaders: headersInput.extraHeaders,
            });
            const queryParamsMap = (0, utils_js_1.prepareParams)({
                ['fields']: queryParams.fields
                    ? queryParams.fields.map(utils_js_2.toString).join(',')
                    : undefined,
                ['limit']: (0, utils_js_2.toString)(queryParams.limit),
                ['offset']: (0, utils_js_2.toString)(queryParams.offset),
                ['usemarker']: (0, utils_js_2.toString)(queryParams.usemarker),
                ['marker']: (0, utils_js_2.toString)(queryParams.marker),
                ['direction']: (0, utils_js_2.toString)(queryParams.direction),
                ['sort']: (0, utils_js_2.toString)(queryParams.sort),
            });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = (yield (0, fetch_js_1.fetch)(''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/folders/trash/items'), {
                method: 'GET',
                params: queryParamsMap,
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return (0, items_generated_js_1.deserializeItems)(response.data);
        });
    }
}
exports.TrashedItemsManager = TrashedItemsManager;
function serializeGetTrashedItemsQueryParamsDirectionField(val) {
    return val;
}
function deserializeGetTrashedItemsQueryParamsDirectionField(val) {
    if (val == 'ASC') {
        return val;
    }
    if (val == 'DESC') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize GetTrashedItemsQueryParamsDirectionField",
    });
}
function serializeGetTrashedItemsQueryParamsSortField(val) {
    return val;
}
function deserializeGetTrashedItemsQueryParamsSortField(val) {
    if (val == 'name') {
        return val;
    }
    if (val == 'date') {
        return val;
    }
    if (val == 'size') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize GetTrashedItemsQueryParamsSortField",
    });
}
//# sourceMappingURL=trashedItems.generated.js.map