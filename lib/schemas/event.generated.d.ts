import { UserMini } from './userMini.generated.js';
import { AppItemEventSourceOrEventSourceOrFileOrFolderOrGenericSourceOrUser } from './appItemEventSourceOrEventSourceOrFileOrFolderOrGenericSourceOrUser.generated.js';
import { DateTime } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export type EventEventTypeField = 'ACCESS_GRANTED' | 'ACCESS_REVOKED' | 'ADD_DEVICE_ASSOCIATION' | 'ADD_LOGIN_ACTIVITY_DEVICE' | 'ADMIN_LOGIN' | 'APPLICATION_CREATED' | 'APPLICATION_PUBLIC_KEY_ADDED' | 'APPLICATION_PUBLIC_KEY_DELETED' | 'CHANGE_ADMIN_ROLE' | 'CHANGE_FOLDER_PERMISSION' | 'COLLABORATION_ACCEPT' | 'COLLABORATION_EXPIRATION' | 'COLLABORATION_INVITE' | 'COLLABORATION_REMOVE' | 'COLLABORATION_ROLE_CHANGE' | 'COLLAB_ADD_COLLABORATOR' | 'COLLAB_INVITE_COLLABORATOR' | 'COLLAB_REMOVE_COLLABORATOR' | 'COLLAB_ROLE_CHANGE' | 'COMMENT_CREATE' | 'COMMENT_DELETE' | 'CONTENT_ACCESS' | 'CONTENT_WORKFLOW_ABNORMAL_DOWNLOAD_ACTIVITY' | 'CONTENT_WORKFLOW_AUTOMATION_ADD' | 'CONTENT_WORKFLOW_AUTOMATION_DELETE' | 'CONTENT_WORKFLOW_POLICY_ADD' | 'CONTENT_WORKFLOW_SHARING_POLICY_VIOLATION' | 'CONTENT_WORKFLOW_UPLOAD_POLICY_VIOLATION' | 'COPY' | 'DATA_RETENTION_CREATE_RETENTION' | 'DATA_RETENTION_REMOVE_RETENTION' | 'DELETE' | 'DELETE_USER' | 'DEVICE_TRUST_CHECK_FAILED' | 'DOWNLOAD' | 'EDIT' | 'EDIT_USER' | 'EDR_CROWDSTRIKE_DEVICE_DETECTED' | 'EDR_CROWDSTRIKE_NO_BOX_TOOLS' | 'EDR_CROWDSTRIKE_BOX_TOOLS_OUTDATED' | 'EDR_CROWDSTRIKE_DRIVE_OUTDATED' | 'EDR_CROWDSTRIKE_ACCESS_ALLOWED_NO_CROWDSTRIKE_DEVICE' | 'EDR_CROWDSTRIKE_ACCESS_REVOKED' | 'EMAIL_ALIAS_CONFIRM' | 'EMAIL_ALIAS_REMOVE' | 'ENABLE_TWO_FACTOR_AUTH' | 'ENTERPRISE_APP_AUTHORIZATION_UPDATE' | 'FAILED_LOGIN' | 'FILE_MARKED_MALICIOUS' | 'FILE_WATERMARKED_DOWNLOAD' | 'GROUP_ADD_ITEM' | 'GROUP_ADD_USER' | 'GROUP_CREATION' | 'GROUP_DELETION' | 'GROUP_EDITED' | 'GROUP_REMOVE_ITEM' | 'GROUP_REMOVE_USER' | 'ITEM_COPY' | 'ITEM_CREATE' | 'ITEM_DOWNLOAD' | 'ITEM_EMAIL_SEND' | 'ITEM_MAKE_CURRENT_VERSION' | 'ITEM_MODIFY' | 'ITEM_MOVE' | 'ITEM_OPEN' | 'ITEM_PREVIEW' | 'ITEM_RENAME' | 'ITEM_SHARED' | 'ITEM_SHARED_CREATE' | 'ITEM_SHARED_UNSHARE' | 'ITEM_SHARED_UPDATE' | 'ITEM_SYNC' | 'ITEM_TRASH' | 'ITEM_UNDELETE_VIA_TRASH' | 'ITEM_UNSYNC' | 'ITEM_UPLOAD' | 'LEGAL_HOLD_ASSIGNMENT_CREATE' | 'LEGAL_HOLD_ASSIGNMENT_DELETE' | 'LEGAL_HOLD_POLICY_CREATE' | 'LEGAL_HOLD_POLICY_DELETE' | 'LEGAL_HOLD_POLICY_UPDATE' | 'LOCK' | 'LOCK_CREATE' | 'LOCK_DESTROY' | 'LOGIN' | 'MASTER_INVITE_ACCEPT' | 'MASTER_INVITE_REJECT' | 'METADATA_INSTANCE_CREATE' | 'METADATA_INSTANCE_DELETE' | 'METADATA_INSTANCE_UPDATE' | 'METADATA_TEMPLATE_CREATE' | 'METADATA_TEMPLATE_DELETE' | 'METADATA_TEMPLATE_UPDATE' | 'MOVE' | 'NEW_USER' | 'PREVIEW' | 'REMOVE_DEVICE_ASSOCIATION' | 'REMOVE_LOGIN_ACTIVITY_DEVICE' | 'RENAME' | 'RETENTION_POLICY_ASSIGNMENT_ADD' | 'SHARE' | 'SHARED_LINK_SEND' | 'SHARE_EXPIRATION' | 'SHIELD_ALERT' | 'SHIELD_EXTERNAL_COLLAB_ACCESS_BLOCKED' | 'SHIELD_EXTERNAL_COLLAB_ACCESS_BLOCKED_MISSING_JUSTIFICATION' | 'SHIELD_EXTERNAL_COLLAB_INVITE_BLOCKED' | 'SHIELD_EXTERNAL_COLLAB_INVITE_BLOCKED_MISSING_JUSTIFICATION' | 'SHIELD_JUSTIFICATION_APPROVAL' | 'SHIELD_SHARED_LINK_ACCESS_BLOCKED' | 'SHIELD_SHARED_LINK_STATUS_RESTRICTED_ON_CREATE' | 'SHIELD_SHARED_LINK_STATUS_RESTRICTED_ON_UPDATE' | 'SIGN_DOCUMENT_ASSIGNED' | 'SIGN_DOCUMENT_CANCELLED' | 'SIGN_DOCUMENT_COMPLETED' | 'SIGN_DOCUMENT_CONVERTED' | 'SIGN_DOCUMENT_CREATED' | 'SIGN_DOCUMENT_DECLINED' | 'SIGN_DOCUMENT_EXPIRED' | 'SIGN_DOCUMENT_SIGNED' | 'SIGN_DOCUMENT_VIEWED_BY_SIGNED' | 'SIGNER_DOWNLOADED' | 'SIGNER_FORWARDED' | 'STORAGE_EXPIRATION' | 'TAG_ITEM_CREATE' | 'TASK_ASSIGNMENT_CREATE' | 'TASK_ASSIGNMENT_DELETE' | 'TASK_ASSIGNMENT_UPDATE' | 'TASK_CREATE' | 'TASK_UPDATE' | 'TERMS_OF_SERVICE_ACCEPT' | 'TERMS_OF_SERVICE_REJECT' | 'UNDELETE' | 'UNLOCK' | 'UNSHARE' | 'UPDATE_COLLABORATION_EXPIRATION' | 'UPDATE_SHARE_EXPIRATION' | 'UPLOAD' | 'USER_AUTHENTICATE_OAUTH2_ACCESS_TOKEN_CREATE' | 'WATERMARK_LABEL_CREATE' | 'WATERMARK_LABEL_DELETE' | string;
export interface EventAdditionalDetailsField {
    readonly rawData?: SerializedData;
}
export interface Event {
    /**
     * `event` */
    readonly type?: string;
    /**
     * When the event object was created */
    readonly createdAt?: DateTime;
    /**
     * When the event object was recorded in database */
    readonly recordedAt?: DateTime;
    /**
     * The ID of the event object. You can use this to detect duplicate events */
    readonly eventId?: string;
    readonly createdBy?: UserMini;
    readonly eventType?: EventEventTypeField;
    /**
     * The session of the user that performed the action. Not all events will
     * populate this attribute. */
    readonly sessionId?: string;
    readonly source?: AppItemEventSourceOrEventSourceOrFileOrFolderOrGenericSourceOrUser;
    /**
     * This object provides additional information about the event if available.
     *
     * This can include how a user performed an event as well as additional
     * information to correlate an event to external KeySafe logs. Not all events
     * have an `additional_details` object.  This object is only available in the
     * Enterprise Events. */
    readonly additionalDetails?: EventAdditionalDetailsField;
    readonly rawData?: SerializedData;
}
export declare function serializeEventEventTypeField(val: EventEventTypeField): SerializedData;
export declare function deserializeEventEventTypeField(val: SerializedData): EventEventTypeField;
export declare function serializeEventAdditionalDetailsField(val: EventAdditionalDetailsField): SerializedData;
export declare function deserializeEventAdditionalDetailsField(val: SerializedData): EventAdditionalDetailsField;
export declare function serializeEvent(val: Event): SerializedData;
export declare function deserializeEvent(val: SerializedData): Event;
//# sourceMappingURL=event.generated.d.ts.map