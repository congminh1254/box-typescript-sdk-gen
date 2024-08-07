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
exports.EventsManager = exports.GetEventsWithLongPollingHeaders = exports.GetEventsHeaders = void 0;
exports.serializeGetEventsQueryParamsStreamTypeField = serializeGetEventsQueryParamsStreamTypeField;
exports.deserializeGetEventsQueryParamsStreamTypeField = deserializeGetEventsQueryParamsStreamTypeField;
exports.serializeGetEventsQueryParamsEventTypeField = serializeGetEventsQueryParamsEventTypeField;
exports.deserializeGetEventsQueryParamsEventTypeField = deserializeGetEventsQueryParamsEventTypeField;
const events_generated_js_1 = require("../schemas/events.generated.js");
const realtimeServers_generated_js_1 = require("../schemas/realtimeServers.generated.js");
const utils_js_1 = require("../internal/utils.js");
const network_generated_js_1 = require("../networking/network.generated.js");
const utils_js_2 = require("../internal/utils.js");
const utils_js_3 = require("../internal/utils.js");
const fetch_js_1 = require("../networking/fetch.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
class GetEventsHeaders {
    constructor(fields) {
        this.extraHeaders = {};
        if (fields.extraHeaders) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.GetEventsHeaders = GetEventsHeaders;
class GetEventsWithLongPollingHeaders {
    constructor(fields) {
        this.extraHeaders = {};
        if (fields.extraHeaders) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.GetEventsWithLongPollingHeaders = GetEventsWithLongPollingHeaders;
class EventsManager {
    constructor(fields) {
        this.networkSession = new network_generated_js_1.NetworkSession({});
        if (fields.auth) {
            this.auth = fields.auth;
        }
        if (fields.networkSession) {
            this.networkSession = fields.networkSession;
        }
    }
    getEvents() {
        return __awaiter(this, arguments, void 0, function* (queryParams = {}, headersInput = new GetEventsHeaders({}), cancellationToken) {
            const headers = new GetEventsHeaders({
                extraHeaders: headersInput.extraHeaders,
            });
            const queryParamsMap = (0, utils_js_2.prepareParams)({
                ['stream_type']: (0, utils_js_3.toString)(queryParams.streamType),
                ['stream_position']: (0, utils_js_3.toString)(queryParams.streamPosition),
                ['limit']: (0, utils_js_3.toString)(queryParams.limit),
                ['event_type']: queryParams.eventType
                    ? queryParams.eventType.map(utils_js_3.toString).join(',')
                    : undefined,
                ['created_after']: queryParams.createdAfter
                    ? (0, utils_js_1.serializeDateTime)(queryParams.createdAfter)
                    : undefined,
                ['created_before']: queryParams.createdBefore
                    ? (0, utils_js_1.serializeDateTime)(queryParams.createdBefore)
                    : undefined,
            });
            const headersMap = (0, utils_js_2.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = (yield (0, fetch_js_1.fetch)(''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/events'), {
                method: 'GET',
                params: queryParamsMap,
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return (0, events_generated_js_1.deserializeEvents)(response.data);
        });
    }
    getEventsWithLongPolling() {
        return __awaiter(this, arguments, void 0, function* (headersInput = new GetEventsWithLongPollingHeaders({}), cancellationToken) {
            const headers = new GetEventsWithLongPollingHeaders({
                extraHeaders: headersInput.extraHeaders,
            });
            const headersMap = (0, utils_js_2.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = (yield (0, fetch_js_1.fetch)(''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/events'), {
                method: 'OPTIONS',
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return (0, realtimeServers_generated_js_1.deserializeRealtimeServers)(response.data);
        });
    }
}
exports.EventsManager = EventsManager;
function serializeGetEventsQueryParamsStreamTypeField(val) {
    return val;
}
function deserializeGetEventsQueryParamsStreamTypeField(val) {
    if (val == 'all') {
        return val;
    }
    if (val == 'changes') {
        return val;
    }
    if (val == 'sync') {
        return val;
    }
    if (val == 'admin_logs') {
        return val;
    }
    if (val == 'admin_logs_streaming') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize GetEventsQueryParamsStreamTypeField",
    });
}
function serializeGetEventsQueryParamsEventTypeField(val) {
    return val;
}
function deserializeGetEventsQueryParamsEventTypeField(val) {
    if (val == 'ACCESS_GRANTED') {
        return val;
    }
    if (val == 'ACCESS_REVOKED') {
        return val;
    }
    if (val == 'ADD_DEVICE_ASSOCIATION') {
        return val;
    }
    if (val == 'ADD_LOGIN_ACTIVITY_DEVICE') {
        return val;
    }
    if (val == 'ADMIN_LOGIN') {
        return val;
    }
    if (val == 'APPLICATION_CREATED') {
        return val;
    }
    if (val == 'APPLICATION_PUBLIC_KEY_ADDED') {
        return val;
    }
    if (val == 'APPLICATION_PUBLIC_KEY_DELETED') {
        return val;
    }
    if (val == 'CHANGE_ADMIN_ROLE') {
        return val;
    }
    if (val == 'CHANGE_FOLDER_PERMISSION') {
        return val;
    }
    if (val == 'COLLABORATION_ACCEPT') {
        return val;
    }
    if (val == 'COLLABORATION_EXPIRATION') {
        return val;
    }
    if (val == 'COLLABORATION_INVITE') {
        return val;
    }
    if (val == 'COLLABORATION_REMOVE') {
        return val;
    }
    if (val == 'COLLABORATION_ROLE_CHANGE') {
        return val;
    }
    if (val == 'COMMENT_CREATE') {
        return val;
    }
    if (val == 'COMMENT_DELETE') {
        return val;
    }
    if (val == 'CONTENT_WORKFLOW_ABNORMAL_DOWNLOAD_ACTIVITY') {
        return val;
    }
    if (val == 'CONTENT_WORKFLOW_AUTOMATION_ADD') {
        return val;
    }
    if (val == 'CONTENT_WORKFLOW_AUTOMATION_DELETE') {
        return val;
    }
    if (val == 'CONTENT_WORKFLOW_POLICY_ADD') {
        return val;
    }
    if (val == 'CONTENT_WORKFLOW_SHARING_POLICY_VIOLATION') {
        return val;
    }
    if (val == 'CONTENT_WORKFLOW_UPLOAD_POLICY_VIOLATION') {
        return val;
    }
    if (val == 'COPY') {
        return val;
    }
    if (val == 'DATA_RETENTION_CREATE_RETENTION') {
        return val;
    }
    if (val == 'DATA_RETENTION_REMOVE_RETENTION') {
        return val;
    }
    if (val == 'DELETE') {
        return val;
    }
    if (val == 'DELETE_USER') {
        return val;
    }
    if (val == 'DEVICE_TRUST_CHECK_FAILED') {
        return val;
    }
    if (val == 'DOWNLOAD') {
        return val;
    }
    if (val == 'EDIT') {
        return val;
    }
    if (val == 'EDIT_USER') {
        return val;
    }
    if (val == 'EMAIL_ALIAS_CONFIRM') {
        return val;
    }
    if (val == 'EMAIL_ALIAS_REMOVE') {
        return val;
    }
    if (val == 'ENTERPRISE_APP_AUTHORIZATION_UPDATE') {
        return val;
    }
    if (val == 'EXTERNAL_COLLAB_SECURITY_SETTINGS') {
        return val;
    }
    if (val == 'FAILED_LOGIN') {
        return val;
    }
    if (val == 'FILE_MARKED_MALICIOUS') {
        return val;
    }
    if (val == 'FILE_WATERMARKED_DOWNLOAD') {
        return val;
    }
    if (val == 'GROUP_ADD_ITEM') {
        return val;
    }
    if (val == 'GROUP_ADD_USER') {
        return val;
    }
    if (val == 'GROUP_CREATION') {
        return val;
    }
    if (val == 'GROUP_DELETION') {
        return val;
    }
    if (val == 'GROUP_EDITED') {
        return val;
    }
    if (val == 'GROUP_REMOVE_ITEM') {
        return val;
    }
    if (val == 'GROUP_REMOVE_USER') {
        return val;
    }
    if (val == 'ITEM_EMAIL_SEND') {
        return val;
    }
    if (val == 'ITEM_MODIFY') {
        return val;
    }
    if (val == 'ITEM_OPEN') {
        return val;
    }
    if (val == 'ITEM_SHARED_UPDATE') {
        return val;
    }
    if (val == 'ITEM_SYNC') {
        return val;
    }
    if (val == 'ITEM_UNSYNC') {
        return val;
    }
    if (val == 'LEGAL_HOLD_ASSIGNMENT_CREATE') {
        return val;
    }
    if (val == 'LEGAL_HOLD_ASSIGNMENT_DELETE') {
        return val;
    }
    if (val == 'LEGAL_HOLD_POLICY_CREATE') {
        return val;
    }
    if (val == 'LEGAL_HOLD_POLICY_DELETE') {
        return val;
    }
    if (val == 'LEGAL_HOLD_POLICY_UPDATE') {
        return val;
    }
    if (val == 'LOCK') {
        return val;
    }
    if (val == 'LOGIN') {
        return val;
    }
    if (val == 'METADATA_INSTANCE_CREATE') {
        return val;
    }
    if (val == 'METADATA_INSTANCE_DELETE') {
        return val;
    }
    if (val == 'METADATA_INSTANCE_UPDATE') {
        return val;
    }
    if (val == 'METADATA_TEMPLATE_CREATE') {
        return val;
    }
    if (val == 'METADATA_TEMPLATE_DELETE') {
        return val;
    }
    if (val == 'METADATA_TEMPLATE_UPDATE') {
        return val;
    }
    if (val == 'MOVE') {
        return val;
    }
    if (val == 'NEW_USER') {
        return val;
    }
    if (val == 'OAUTH2_ACCESS_TOKEN_REVOKE') {
        return val;
    }
    if (val == 'PREVIEW') {
        return val;
    }
    if (val == 'REMOVE_DEVICE_ASSOCIATION') {
        return val;
    }
    if (val == 'REMOVE_LOGIN_ACTIVITY_DEVICE') {
        return val;
    }
    if (val == 'RENAME') {
        return val;
    }
    if (val == 'RETENTION_POLICY_ASSIGNMENT_ADD') {
        return val;
    }
    if (val == 'SHARE') {
        return val;
    }
    if (val == 'SHARED_LINK_SEND') {
        return val;
    }
    if (val == 'SHARE_EXPIRATION') {
        return val;
    }
    if (val == 'SHIELD_ALERT') {
        return val;
    }
    if (val == 'SHIELD_EXTERNAL_COLLAB_ACCESS_BLOCKED') {
        return val;
    }
    if (val == 'SHIELD_EXTERNAL_COLLAB_ACCESS_BLOCKED_MISSING_JUSTIFICATION') {
        return val;
    }
    if (val == 'SHIELD_EXTERNAL_COLLAB_INVITE_BLOCKED') {
        return val;
    }
    if (val == 'SHIELD_EXTERNAL_COLLAB_INVITE_BLOCKED_MISSING_JUSTIFICATION') {
        return val;
    }
    if (val == 'SHIELD_JUSTIFICATION_APPROVAL') {
        return val;
    }
    if (val == 'SHIELD_SHARED_LINK_ACCESS_BLOCKED') {
        return val;
    }
    if (val == 'SHIELD_SHARED_LINK_STATUS_RESTRICTED_ON_CREATE') {
        return val;
    }
    if (val == 'SHIELD_SHARED_LINK_STATUS_RESTRICTED_ON_UPDATE') {
        return val;
    }
    if (val == 'SIGN_DOCUMENT_ASSIGNED') {
        return val;
    }
    if (val == 'SIGN_DOCUMENT_CANCELLED') {
        return val;
    }
    if (val == 'SIGN_DOCUMENT_COMPLETED') {
        return val;
    }
    if (val == 'SIGN_DOCUMENT_CONVERTED') {
        return val;
    }
    if (val == 'SIGN_DOCUMENT_CREATED') {
        return val;
    }
    if (val == 'SIGN_DOCUMENT_DECLINED') {
        return val;
    }
    if (val == 'SIGN_DOCUMENT_EXPIRED') {
        return val;
    }
    if (val == 'SIGN_DOCUMENT_SIGNED') {
        return val;
    }
    if (val == 'SIGN_DOCUMENT_VIEWED_BY_SIGNED') {
        return val;
    }
    if (val == 'SIGNER_DOWNLOADED') {
        return val;
    }
    if (val == 'SIGNER_FORWARDED') {
        return val;
    }
    if (val == 'STORAGE_EXPIRATION') {
        return val;
    }
    if (val == 'TASK_ASSIGNMENT_CREATE') {
        return val;
    }
    if (val == 'TASK_ASSIGNMENT_DELETE') {
        return val;
    }
    if (val == 'TASK_ASSIGNMENT_UPDATE') {
        return val;
    }
    if (val == 'TASK_CREATE') {
        return val;
    }
    if (val == 'TASK_UPDATE') {
        return val;
    }
    if (val == 'TERMS_OF_SERVICE_ACCEPT') {
        return val;
    }
    if (val == 'TERMS_OF_SERVICE_REJECT') {
        return val;
    }
    if (val == 'UNDELETE') {
        return val;
    }
    if (val == 'UNLOCK') {
        return val;
    }
    if (val == 'UNSHARE') {
        return val;
    }
    if (val == 'UPDATE_COLLABORATION_EXPIRATION') {
        return val;
    }
    if (val == 'UPDATE_SHARE_EXPIRATION') {
        return val;
    }
    if (val == 'UPLOAD') {
        return val;
    }
    if (val == 'USER_AUTHENTICATE_OAUTH2_ACCESS_TOKEN_CREATE') {
        return val;
    }
    if (val == 'WATERMARK_LABEL_CREATE') {
        return val;
    }
    if (val == 'WATERMARK_LABEL_DELETE') {
        return val;
    }
    if ((0, json_js_1.sdIsString)(val)) {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize GetEventsQueryParamsEventTypeField",
    });
}
//# sourceMappingURL=events.generated.js.map