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
exports.FileVersionRetentionsManager = exports.GetFileVersionRetentionByIdHeaders = exports.GetFileVersionRetentionsHeaders = exports.GetFileVersionRetentionByIdOptionals = void 0;
exports.serializeGetFileVersionRetentionsQueryParamsDispositionActionField = serializeGetFileVersionRetentionsQueryParamsDispositionActionField;
exports.deserializeGetFileVersionRetentionsQueryParamsDispositionActionField = deserializeGetFileVersionRetentionsQueryParamsDispositionActionField;
const fileVersionRetentions_generated_js_1 = require("../schemas/fileVersionRetentions.generated.js");
const fileVersionRetention_generated_js_1 = require("../schemas/fileVersionRetention.generated.js");
const network_generated_js_1 = require("../networking/network.generated.js");
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
const fetch_js_1 = require("../networking/fetch.js");
const errors_js_1 = require("../box/errors.js");
class GetFileVersionRetentionByIdOptionals {
    constructor(fields) {
        this.headers = new GetFileVersionRetentionByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.GetFileVersionRetentionByIdOptionals = GetFileVersionRetentionByIdOptionals;
class GetFileVersionRetentionsHeaders {
    constructor(fields) {
        this.extraHeaders = {};
        if (fields.extraHeaders) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.GetFileVersionRetentionsHeaders = GetFileVersionRetentionsHeaders;
class GetFileVersionRetentionByIdHeaders {
    constructor(fields) {
        this.extraHeaders = {};
        if (fields.extraHeaders) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.GetFileVersionRetentionByIdHeaders = GetFileVersionRetentionByIdHeaders;
class FileVersionRetentionsManager {
    constructor(fields) {
        this.networkSession = new network_generated_js_1.NetworkSession({});
        if (fields.auth) {
            this.auth = fields.auth;
        }
        if (fields.networkSession) {
            this.networkSession = fields.networkSession;
        }
    }
    getFileVersionRetentions() {
        return __awaiter(this, arguments, void 0, function* (queryParams = {}, headersInput = new GetFileVersionRetentionsHeaders({}), cancellationToken) {
            const headers = new GetFileVersionRetentionsHeaders({
                extraHeaders: headersInput.extraHeaders,
            });
            const queryParamsMap = (0, utils_js_1.prepareParams)({
                ['file_id']: (0, utils_js_2.toString)(queryParams.fileId),
                ['file_version_id']: (0, utils_js_2.toString)(queryParams.fileVersionId),
                ['policy_id']: (0, utils_js_2.toString)(queryParams.policyId),
                ['disposition_action']: (0, utils_js_2.toString)(queryParams.dispositionAction),
                ['disposition_before']: (0, utils_js_2.toString)(queryParams.dispositionBefore),
                ['disposition_after']: (0, utils_js_2.toString)(queryParams.dispositionAfter),
                ['limit']: (0, utils_js_2.toString)(queryParams.limit),
                ['marker']: (0, utils_js_2.toString)(queryParams.marker),
            });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = (yield (0, fetch_js_1.fetch)(''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/file_version_retentions'), {
                method: 'GET',
                params: queryParamsMap,
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return (0, fileVersionRetentions_generated_js_1.deserializeFileVersionRetentions)(response.data);
        });
    }
    getFileVersionRetentionById(fileVersionRetentionId_1) {
        return __awaiter(this, arguments, void 0, function* (fileVersionRetentionId, optionalsInput = {}) {
            const optionals = new GetFileVersionRetentionByIdOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = (yield (0, fetch_js_1.fetch)(''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/file_version_retentions/', (0, utils_js_2.toString)(fileVersionRetentionId)), {
                method: 'GET',
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return (0, fileVersionRetention_generated_js_1.deserializeFileVersionRetention)(response.data);
        });
    }
}
exports.FileVersionRetentionsManager = FileVersionRetentionsManager;
function serializeGetFileVersionRetentionsQueryParamsDispositionActionField(val) {
    return val;
}
function deserializeGetFileVersionRetentionsQueryParamsDispositionActionField(val) {
    if (val == 'permanently_delete') {
        return val;
    }
    if (val == 'remove_retention') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize GetFileVersionRetentionsQueryParamsDispositionActionField",
    });
}
//# sourceMappingURL=fileVersionRetentions.generated.js.map