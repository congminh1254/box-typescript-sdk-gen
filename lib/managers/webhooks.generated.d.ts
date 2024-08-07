import { Webhooks } from '../schemas/webhooks.generated.js';
import { Webhook } from '../schemas/webhook.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { CancellationToken } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export declare class CreateWebhookOptionals {
    readonly headers: CreateWebhookHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<CreateWebhookOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<CreateWebhookOptionals, 'headers' | 'cancellationToken'>>);
}
export interface CreateWebhookOptionalsInput {
    readonly headers?: CreateWebhookHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetWebhookByIdOptionals {
    readonly headers: GetWebhookByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetWebhookByIdOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<GetWebhookByIdOptionals, 'headers' | 'cancellationToken'>>);
}
export interface GetWebhookByIdOptionalsInput {
    readonly headers?: GetWebhookByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class UpdateWebhookByIdOptionals {
    readonly requestBody: UpdateWebhookByIdRequestBody;
    readonly headers: UpdateWebhookByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<UpdateWebhookByIdOptionals, 'requestBody' | 'headers' | 'cancellationToken'> & Partial<Pick<UpdateWebhookByIdOptionals, 'requestBody' | 'headers' | 'cancellationToken'>>);
}
export interface UpdateWebhookByIdOptionalsInput {
    readonly requestBody?: UpdateWebhookByIdRequestBody;
    readonly headers?: UpdateWebhookByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class DeleteWebhookByIdOptionals {
    readonly headers: DeleteWebhookByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<DeleteWebhookByIdOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<DeleteWebhookByIdOptionals, 'headers' | 'cancellationToken'>>);
}
export interface DeleteWebhookByIdOptionalsInput {
    readonly headers?: DeleteWebhookByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export interface GetWebhooksQueryParams {
    readonly marker?: string;
    readonly limit?: number;
}
export declare class GetWebhooksHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetWebhooksHeaders, 'extraHeaders'> & Partial<Pick<GetWebhooksHeaders, 'extraHeaders'>>);
}
export interface GetWebhooksHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export type CreateWebhookRequestBodyTargetTypeField = 'file' | 'folder';
export interface CreateWebhookRequestBodyTargetField {
    readonly id?: string;
    readonly type?: CreateWebhookRequestBodyTargetTypeField;
}
export type CreateWebhookRequestBodyTriggersField = 'FILE.UPLOADED' | 'FILE.PREVIEWED' | 'FILE.DOWNLOADED' | 'FILE.TRASHED' | 'FILE.DELETED' | 'FILE.RESTORED' | 'FILE.COPIED' | 'FILE.MOVED' | 'FILE.LOCKED' | 'FILE.UNLOCKED' | 'FILE.RENAMED' | 'COMMENT.CREATED' | 'COMMENT.UPDATED' | 'COMMENT.DELETED' | 'TASK_ASSIGNMENT.CREATED' | 'TASK_ASSIGNMENT.UPDATED' | 'METADATA_INSTANCE.CREATED' | 'METADATA_INSTANCE.UPDATED' | 'METADATA_INSTANCE.DELETED' | 'FOLDER.CREATED' | 'FOLDER.RENAMED' | 'FOLDER.DOWNLOADED' | 'FOLDER.RESTORED' | 'FOLDER.DELETED' | 'FOLDER.COPIED' | 'FOLDER.MOVED' | 'FOLDER.TRASHED' | 'WEBHOOK.DELETED' | 'COLLABORATION.CREATED' | 'COLLABORATION.ACCEPTED' | 'COLLABORATION.REJECTED' | 'COLLABORATION.REMOVED' | 'COLLABORATION.UPDATED' | 'SHARED_LINK.DELETED' | 'SHARED_LINK.CREATED' | 'SHARED_LINK.UPDATED' | 'SIGN_REQUEST.COMPLETED' | 'SIGN_REQUEST.DECLINED' | 'SIGN_REQUEST.EXPIRED' | 'SIGN_REQUEST.SIGNER_EMAIL_BOUNCED';
export interface CreateWebhookRequestBody {
    readonly target: CreateWebhookRequestBodyTargetField;
    readonly address: string;
    readonly triggers: readonly CreateWebhookRequestBodyTriggersField[];
}
export declare class CreateWebhookHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<CreateWebhookHeaders, 'extraHeaders'> & Partial<Pick<CreateWebhookHeaders, 'extraHeaders'>>);
}
export interface CreateWebhookHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class GetWebhookByIdHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetWebhookByIdHeaders, 'extraHeaders'> & Partial<Pick<GetWebhookByIdHeaders, 'extraHeaders'>>);
}
export interface GetWebhookByIdHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export type UpdateWebhookByIdRequestBodyTargetTypeField = 'file' | 'folder';
export interface UpdateWebhookByIdRequestBodyTargetField {
    readonly id?: string;
    readonly type?: UpdateWebhookByIdRequestBodyTargetTypeField;
}
export type UpdateWebhookByIdRequestBodyTriggersField = 'FILE.UPLOADED' | 'FILE.PREVIEWED' | 'FILE.DOWNLOADED' | 'FILE.TRASHED' | 'FILE.DELETED' | 'FILE.RESTORED' | 'FILE.COPIED' | 'FILE.MOVED' | 'FILE.LOCKED' | 'FILE.UNLOCKED' | 'FILE.RENAMED' | 'COMMENT.CREATED' | 'COMMENT.UPDATED' | 'COMMENT.DELETED' | 'TASK_ASSIGNMENT.CREATED' | 'TASK_ASSIGNMENT.UPDATED' | 'METADATA_INSTANCE.CREATED' | 'METADATA_INSTANCE.UPDATED' | 'METADATA_INSTANCE.DELETED' | 'FOLDER.CREATED' | 'FOLDER.RENAMED' | 'FOLDER.DOWNLOADED' | 'FOLDER.RESTORED' | 'FOLDER.DELETED' | 'FOLDER.COPIED' | 'FOLDER.MOVED' | 'FOLDER.TRASHED' | 'WEBHOOK.DELETED' | 'COLLABORATION.CREATED' | 'COLLABORATION.ACCEPTED' | 'COLLABORATION.REJECTED' | 'COLLABORATION.REMOVED' | 'COLLABORATION.UPDATED' | 'SHARED_LINK.DELETED' | 'SHARED_LINK.CREATED' | 'SHARED_LINK.UPDATED' | 'SIGN_REQUEST.COMPLETED' | 'SIGN_REQUEST.DECLINED' | 'SIGN_REQUEST.EXPIRED' | 'SIGN_REQUEST.SIGNER_EMAIL_BOUNCED';
export interface UpdateWebhookByIdRequestBody {
    readonly target?: UpdateWebhookByIdRequestBodyTargetField;
    readonly address?: string;
    readonly triggers?: readonly UpdateWebhookByIdRequestBodyTriggersField[];
}
export declare class UpdateWebhookByIdHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<UpdateWebhookByIdHeaders, 'extraHeaders'> & Partial<Pick<UpdateWebhookByIdHeaders, 'extraHeaders'>>);
}
export interface UpdateWebhookByIdHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class DeleteWebhookByIdHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<DeleteWebhookByIdHeaders, 'extraHeaders'> & Partial<Pick<DeleteWebhookByIdHeaders, 'extraHeaders'>>);
}
export interface DeleteWebhookByIdHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class WebhooksManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<WebhooksManager, 'networkSession' | 'getWebhooks' | 'createWebhook' | 'getWebhookById' | 'updateWebhookById' | 'deleteWebhookById'> & Partial<Pick<WebhooksManager, 'networkSession'>>);
    getWebhooks(queryParams?: GetWebhooksQueryParams, headersInput?: GetWebhooksHeadersInput, cancellationToken?: CancellationToken): Promise<Webhooks>;
    createWebhook(requestBody: CreateWebhookRequestBody, optionalsInput?: CreateWebhookOptionalsInput): Promise<Webhook>;
    getWebhookById(webhookId: string, optionalsInput?: GetWebhookByIdOptionalsInput): Promise<Webhook>;
    updateWebhookById(webhookId: string, optionalsInput?: UpdateWebhookByIdOptionalsInput): Promise<Webhook>;
    deleteWebhookById(webhookId: string, optionalsInput?: DeleteWebhookByIdOptionalsInput): Promise<undefined>;
}
export interface WebhooksManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
export declare function serializeCreateWebhookRequestBodyTargetTypeField(val: CreateWebhookRequestBodyTargetTypeField): SerializedData;
export declare function deserializeCreateWebhookRequestBodyTargetTypeField(val: SerializedData): CreateWebhookRequestBodyTargetTypeField;
export declare function serializeCreateWebhookRequestBodyTargetField(val: CreateWebhookRequestBodyTargetField): SerializedData;
export declare function deserializeCreateWebhookRequestBodyTargetField(val: SerializedData): CreateWebhookRequestBodyTargetField;
export declare function serializeCreateWebhookRequestBodyTriggersField(val: CreateWebhookRequestBodyTriggersField): SerializedData;
export declare function deserializeCreateWebhookRequestBodyTriggersField(val: SerializedData): CreateWebhookRequestBodyTriggersField;
export declare function serializeCreateWebhookRequestBody(val: CreateWebhookRequestBody): SerializedData;
export declare function deserializeCreateWebhookRequestBody(val: SerializedData): CreateWebhookRequestBody;
export declare function serializeUpdateWebhookByIdRequestBodyTargetTypeField(val: UpdateWebhookByIdRequestBodyTargetTypeField): SerializedData;
export declare function deserializeUpdateWebhookByIdRequestBodyTargetTypeField(val: SerializedData): UpdateWebhookByIdRequestBodyTargetTypeField;
export declare function serializeUpdateWebhookByIdRequestBodyTargetField(val: UpdateWebhookByIdRequestBodyTargetField): SerializedData;
export declare function deserializeUpdateWebhookByIdRequestBodyTargetField(val: SerializedData): UpdateWebhookByIdRequestBodyTargetField;
export declare function serializeUpdateWebhookByIdRequestBodyTriggersField(val: UpdateWebhookByIdRequestBodyTriggersField): SerializedData;
export declare function deserializeUpdateWebhookByIdRequestBodyTriggersField(val: SerializedData): UpdateWebhookByIdRequestBodyTriggersField;
export declare function serializeUpdateWebhookByIdRequestBody(val: UpdateWebhookByIdRequestBody): SerializedData;
export declare function deserializeUpdateWebhookByIdRequestBody(val: SerializedData): UpdateWebhookByIdRequestBody;
