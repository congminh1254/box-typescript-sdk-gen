import { Events } from '../schemas/events.generated.js';
import { RealtimeServers } from '../schemas/realtimeServers.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { CancellationToken } from '../internal/utils.js';
import { DateTime } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export type GetEventsQueryParamsStreamTypeField = 'all' | 'changes' | 'sync' | 'admin_logs' | 'admin_logs_streaming';
export type GetEventsQueryParamsEventTypeField = 'ACCESS_GRANTED' | 'ACCESS_REVOKED' | 'ADD_DEVICE_ASSOCIATION' | 'ADD_LOGIN_ACTIVITY_DEVICE' | 'ADMIN_LOGIN' | 'APPLICATION_CREATED' | 'APPLICATION_PUBLIC_KEY_ADDED' | 'APPLICATION_PUBLIC_KEY_DELETED' | 'CHANGE_ADMIN_ROLE' | 'CHANGE_FOLDER_PERMISSION' | 'COLLABORATION_ACCEPT' | 'COLLABORATION_EXPIRATION' | 'COLLABORATION_INVITE' | 'COLLABORATION_REMOVE' | 'COLLABORATION_ROLE_CHANGE' | 'COMMENT_CREATE' | 'COMMENT_DELETE' | 'CONTENT_WORKFLOW_ABNORMAL_DOWNLOAD_ACTIVITY' | 'CONTENT_WORKFLOW_AUTOMATION_ADD' | 'CONTENT_WORKFLOW_AUTOMATION_DELETE' | 'CONTENT_WORKFLOW_POLICY_ADD' | 'CONTENT_WORKFLOW_SHARING_POLICY_VIOLATION' | 'CONTENT_WORKFLOW_UPLOAD_POLICY_VIOLATION' | 'COPY' | 'DATA_RETENTION_CREATE_RETENTION' | 'DATA_RETENTION_REMOVE_RETENTION' | 'DELETE' | 'DELETE_USER' | 'DEVICE_TRUST_CHECK_FAILED' | 'DOWNLOAD' | 'EDIT' | 'EDIT_USER' | 'EMAIL_ALIAS_CONFIRM' | 'EMAIL_ALIAS_REMOVE' | 'ENTERPRISE_APP_AUTHORIZATION_UPDATE' | 'EXTERNAL_COLLAB_SECURITY_SETTINGS' | 'FAILED_LOGIN' | 'FILE_MARKED_MALICIOUS' | 'FILE_WATERMARKED_DOWNLOAD' | 'GROUP_ADD_ITEM' | 'GROUP_ADD_USER' | 'GROUP_CREATION' | 'GROUP_DELETION' | 'GROUP_EDITED' | 'GROUP_REMOVE_ITEM' | 'GROUP_REMOVE_USER' | 'ITEM_EMAIL_SEND' | 'ITEM_MODIFY' | 'ITEM_OPEN' | 'ITEM_SHARED_UPDATE' | 'ITEM_SYNC' | 'ITEM_UNSYNC' | 'LEGAL_HOLD_ASSIGNMENT_CREATE' | 'LEGAL_HOLD_ASSIGNMENT_DELETE' | 'LEGAL_HOLD_POLICY_CREATE' | 'LEGAL_HOLD_POLICY_DELETE' | 'LEGAL_HOLD_POLICY_UPDATE' | 'LOCK' | 'LOGIN' | 'METADATA_INSTANCE_CREATE' | 'METADATA_INSTANCE_DELETE' | 'METADATA_INSTANCE_UPDATE' | 'METADATA_TEMPLATE_CREATE' | 'METADATA_TEMPLATE_DELETE' | 'METADATA_TEMPLATE_UPDATE' | 'MOVE' | 'NEW_USER' | 'OAUTH2_ACCESS_TOKEN_REVOKE' | 'PREVIEW' | 'REMOVE_DEVICE_ASSOCIATION' | 'REMOVE_LOGIN_ACTIVITY_DEVICE' | 'RENAME' | 'RETENTION_POLICY_ASSIGNMENT_ADD' | 'SHARE' | 'SHARED_LINK_SEND' | 'SHARE_EXPIRATION' | 'SHIELD_ALERT' | 'SHIELD_EXTERNAL_COLLAB_ACCESS_BLOCKED' | 'SHIELD_EXTERNAL_COLLAB_ACCESS_BLOCKED_MISSING_JUSTIFICATION' | 'SHIELD_EXTERNAL_COLLAB_INVITE_BLOCKED' | 'SHIELD_EXTERNAL_COLLAB_INVITE_BLOCKED_MISSING_JUSTIFICATION' | 'SHIELD_JUSTIFICATION_APPROVAL' | 'SHIELD_SHARED_LINK_ACCESS_BLOCKED' | 'SHIELD_SHARED_LINK_STATUS_RESTRICTED_ON_CREATE' | 'SHIELD_SHARED_LINK_STATUS_RESTRICTED_ON_UPDATE' | 'SIGN_DOCUMENT_ASSIGNED' | 'SIGN_DOCUMENT_CANCELLED' | 'SIGN_DOCUMENT_COMPLETED' | 'SIGN_DOCUMENT_CONVERTED' | 'SIGN_DOCUMENT_CREATED' | 'SIGN_DOCUMENT_DECLINED' | 'SIGN_DOCUMENT_EXPIRED' | 'SIGN_DOCUMENT_SIGNED' | 'SIGN_DOCUMENT_VIEWED_BY_SIGNED' | 'SIGNER_DOWNLOADED' | 'SIGNER_FORWARDED' | 'STORAGE_EXPIRATION' | 'TASK_ASSIGNMENT_CREATE' | 'TASK_ASSIGNMENT_DELETE' | 'TASK_ASSIGNMENT_UPDATE' | 'TASK_CREATE' | 'TASK_UPDATE' | 'TERMS_OF_SERVICE_ACCEPT' | 'TERMS_OF_SERVICE_REJECT' | 'UNDELETE' | 'UNLOCK' | 'UNSHARE' | 'UPDATE_COLLABORATION_EXPIRATION' | 'UPDATE_SHARE_EXPIRATION' | 'UPLOAD' | 'USER_AUTHENTICATE_OAUTH2_ACCESS_TOKEN_CREATE' | 'WATERMARK_LABEL_CREATE' | 'WATERMARK_LABEL_DELETE' | string;
export interface GetEventsQueryParams {
    readonly streamType?: GetEventsQueryParamsStreamTypeField;
    readonly streamPosition?: string;
    readonly limit?: number;
    readonly eventType?: readonly GetEventsQueryParamsEventTypeField[];
    readonly createdAfter?: DateTime;
    readonly createdBefore?: DateTime;
}
export declare class GetEventsHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetEventsHeaders, 'extraHeaders'> & Partial<Pick<GetEventsHeaders, 'extraHeaders'>>);
}
export interface GetEventsHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class GetEventsWithLongPollingHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetEventsWithLongPollingHeaders, 'extraHeaders'> & Partial<Pick<GetEventsWithLongPollingHeaders, 'extraHeaders'>>);
}
export interface GetEventsWithLongPollingHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class EventsManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<EventsManager, 'networkSession' | 'getEvents' | 'getEventsWithLongPolling'> & Partial<Pick<EventsManager, 'networkSession'>>);
    getEvents(queryParams?: GetEventsQueryParams, headersInput?: GetEventsHeadersInput, cancellationToken?: CancellationToken): Promise<Events>;
    getEventsWithLongPolling(headersInput?: GetEventsWithLongPollingHeadersInput, cancellationToken?: CancellationToken): Promise<RealtimeServers>;
}
export interface EventsManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
export declare function serializeGetEventsQueryParamsStreamTypeField(val: GetEventsQueryParamsStreamTypeField): SerializedData;
export declare function deserializeGetEventsQueryParamsStreamTypeField(val: SerializedData): GetEventsQueryParamsStreamTypeField;
export declare function serializeGetEventsQueryParamsEventTypeField(val: GetEventsQueryParamsEventTypeField): SerializedData;
export declare function deserializeGetEventsQueryParamsEventTypeField(val: SerializedData): GetEventsQueryParamsEventTypeField;
