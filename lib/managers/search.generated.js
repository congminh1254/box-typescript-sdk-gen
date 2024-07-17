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
exports.SearchManager = exports.SearchForContentHeaders = exports.SearchByMetadataQueryHeaders = exports.SearchByMetadataQueryOptionals = void 0;
exports.serializeSearchForContentQueryParamsScopeField = serializeSearchForContentQueryParamsScopeField;
exports.deserializeSearchForContentQueryParamsScopeField = deserializeSearchForContentQueryParamsScopeField;
exports.serializeSearchForContentQueryParamsContentTypesField = serializeSearchForContentQueryParamsContentTypesField;
exports.deserializeSearchForContentQueryParamsContentTypesField = deserializeSearchForContentQueryParamsContentTypesField;
exports.serializeSearchForContentQueryParamsTypeField = serializeSearchForContentQueryParamsTypeField;
exports.deserializeSearchForContentQueryParamsTypeField = deserializeSearchForContentQueryParamsTypeField;
exports.serializeSearchForContentQueryParamsTrashContentField = serializeSearchForContentQueryParamsTrashContentField;
exports.deserializeSearchForContentQueryParamsTrashContentField = deserializeSearchForContentQueryParamsTrashContentField;
exports.serializeSearchForContentQueryParamsSortField = serializeSearchForContentQueryParamsSortField;
exports.deserializeSearchForContentQueryParamsSortField = deserializeSearchForContentQueryParamsSortField;
exports.serializeSearchForContentQueryParamsDirectionField = serializeSearchForContentQueryParamsDirectionField;
exports.deserializeSearchForContentQueryParamsDirectionField = deserializeSearchForContentQueryParamsDirectionField;
const metadataQueryResults_generated_js_1 = require("../schemas/metadataQueryResults.generated.js");
const metadataQuery_generated_js_1 = require("../schemas/metadataQuery.generated.js");
const searchResultsOrSearchResultsWithSharedLinks_generated_js_1 = require("../schemas/searchResultsOrSearchResultsWithSharedLinks.generated.js");
const metadataFilter_generated_js_1 = require("../schemas/metadataFilter.generated.js");
const network_generated_js_1 = require("../networking/network.generated.js");
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
const fetch_js_1 = require("../networking/fetch.js");
const json_js_1 = require("../serialization/json.js");
const errors_js_1 = require("../box/errors.js");
class SearchByMetadataQueryOptionals {
    constructor(fields) {
        this.headers = new SearchByMetadataQueryHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.SearchByMetadataQueryOptionals = SearchByMetadataQueryOptionals;
class SearchByMetadataQueryHeaders {
    constructor(fields) {
        this.extraHeaders = {};
        if (fields.extraHeaders) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.SearchByMetadataQueryHeaders = SearchByMetadataQueryHeaders;
class SearchForContentHeaders {
    constructor(fields) {
        this.extraHeaders = {};
        if (fields.extraHeaders) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.SearchForContentHeaders = SearchForContentHeaders;
class SearchManager {
    constructor(fields) {
        this.networkSession = new network_generated_js_1.NetworkSession({});
        if (fields.auth) {
            this.auth = fields.auth;
        }
        if (fields.networkSession) {
            this.networkSession = fields.networkSession;
        }
    }
    searchByMetadataQuery(requestBody_1) {
        return __awaiter(this, arguments, void 0, function* (requestBody, optionalsInput = {}) {
            const optionals = new SearchByMetadataQueryOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = (yield (0, fetch_js_1.fetch)(''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/metadata_queries/execute_read'), {
                method: 'POST',
                headers: headersMap,
                data: (0, metadataQuery_generated_js_1.serializeMetadataQuery)(requestBody),
                contentType: 'application/json',
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return (0, metadataQueryResults_generated_js_1.deserializeMetadataQueryResults)(response.data);
        });
    }
    searchForContent() {
        return __awaiter(this, arguments, void 0, function* (queryParams = {}, headersInput = new SearchForContentHeaders({}), cancellationToken) {
            const headers = new SearchForContentHeaders({
                extraHeaders: headersInput.extraHeaders,
            });
            const queryParamsMap = (0, utils_js_1.prepareParams)({
                ['query']: (0, utils_js_2.toString)(queryParams.query),
                ['scope']: (0, utils_js_2.toString)(queryParams.scope),
                ['file_extensions']: queryParams.fileExtensions
                    ? queryParams.fileExtensions.map(utils_js_2.toString).join(',')
                    : undefined,
                ['created_at_range']: queryParams.createdAtRange
                    ? queryParams.createdAtRange.map(utils_js_2.toString).join(',')
                    : undefined,
                ['updated_at_range']: queryParams.updatedAtRange
                    ? queryParams.updatedAtRange.map(utils_js_2.toString).join(',')
                    : undefined,
                ['size_range']: queryParams.sizeRange
                    ? queryParams.sizeRange.map(utils_js_2.toString).join(',')
                    : undefined,
                ['owner_user_ids']: queryParams.ownerUserIds
                    ? queryParams.ownerUserIds.map(utils_js_2.toString).join(',')
                    : undefined,
                ['recent_updater_user_ids']: queryParams.recentUpdaterUserIds
                    ? queryParams.recentUpdaterUserIds.map(utils_js_2.toString).join(',')
                    : undefined,
                ['ancestor_folder_ids']: queryParams.ancestorFolderIds
                    ? queryParams.ancestorFolderIds.map(utils_js_2.toString).join(',')
                    : undefined,
                ['content_types']: queryParams.contentTypes
                    ? queryParams.contentTypes.map(utils_js_2.toString).join(',')
                    : undefined,
                ['type']: (0, utils_js_2.toString)(queryParams.type),
                ['trash_content']: (0, utils_js_2.toString)(queryParams.trashContent),
                ['mdfilters']: queryParams.mdfilters
                    ? (0, json_js_1.sdToJson)(queryParams.mdfilters.map(metadataFilter_generated_js_1.serializeMetadataFilter))
                    : undefined,
                ['sort']: (0, utils_js_2.toString)(queryParams.sort),
                ['direction']: (0, utils_js_2.toString)(queryParams.direction),
                ['limit']: (0, utils_js_2.toString)(queryParams.limit),
                ['include_recent_shared_links']: (0, utils_js_2.toString)(queryParams.includeRecentSharedLinks),
                ['fields']: queryParams.fields
                    ? queryParams.fields.map(utils_js_2.toString).join(',')
                    : undefined,
                ['offset']: (0, utils_js_2.toString)(queryParams.offset),
                ['deleted_user_ids']: queryParams.deletedUserIds
                    ? queryParams.deletedUserIds.map(utils_js_2.toString).join(',')
                    : undefined,
                ['deleted_at_range']: queryParams.deletedAtRange
                    ? queryParams.deletedAtRange.map(utils_js_2.toString).join(',')
                    : undefined,
            });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = (yield (0, fetch_js_1.fetch)(''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/search'), {
                method: 'GET',
                params: queryParamsMap,
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return (0, searchResultsOrSearchResultsWithSharedLinks_generated_js_1.deserializeSearchResultsOrSearchResultsWithSharedLinks)(response.data);
        });
    }
}
exports.SearchManager = SearchManager;
function serializeSearchForContentQueryParamsScopeField(val) {
    return val;
}
function deserializeSearchForContentQueryParamsScopeField(val) {
    if (val == 'user_content') {
        return val;
    }
    if (val == 'enterprise_content') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize SearchForContentQueryParamsScopeField",
    });
}
function serializeSearchForContentQueryParamsContentTypesField(val) {
    return val;
}
function deserializeSearchForContentQueryParamsContentTypesField(val) {
    if (val == 'name') {
        return val;
    }
    if (val == 'description') {
        return val;
    }
    if (val == 'file_content') {
        return val;
    }
    if (val == 'comments') {
        return val;
    }
    if (val == 'tag') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize SearchForContentQueryParamsContentTypesField",
    });
}
function serializeSearchForContentQueryParamsTypeField(val) {
    return val;
}
function deserializeSearchForContentQueryParamsTypeField(val) {
    if (val == 'file') {
        return val;
    }
    if (val == 'folder') {
        return val;
    }
    if (val == 'web_link') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize SearchForContentQueryParamsTypeField",
    });
}
function serializeSearchForContentQueryParamsTrashContentField(val) {
    return val;
}
function deserializeSearchForContentQueryParamsTrashContentField(val) {
    if (val == 'non_trashed_only') {
        return val;
    }
    if (val == 'trashed_only') {
        return val;
    }
    if (val == 'all_items') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize SearchForContentQueryParamsTrashContentField",
    });
}
function serializeSearchForContentQueryParamsSortField(val) {
    return val;
}
function deserializeSearchForContentQueryParamsSortField(val) {
    if (val == 'modified_at') {
        return val;
    }
    if (val == 'relevance') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize SearchForContentQueryParamsSortField",
    });
}
function serializeSearchForContentQueryParamsDirectionField(val) {
    return val;
}
function deserializeSearchForContentQueryParamsDirectionField(val) {
    if (val == 'DESC') {
        return val;
    }
    if (val == 'ASC') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize SearchForContentQueryParamsDirectionField",
    });
}
//# sourceMappingURL=search.generated.js.map