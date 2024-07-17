import { SerializedData } from '../serialization/json.js';
export type WebhookMiniTypeField = 'webhook';
export type WebhookMiniTargetTypeField = 'file' | 'folder';
export interface WebhookMiniTargetField {
    readonly id?: string;
    readonly type?: WebhookMiniTargetTypeField;
}
export interface WebhookMini {
    readonly id?: string;
    readonly type?: WebhookMiniTypeField;
    readonly target?: WebhookMiniTargetField;
}
export declare function serializeWebhookMiniTypeField(val: WebhookMiniTypeField): SerializedData;
export declare function deserializeWebhookMiniTypeField(val: SerializedData): WebhookMiniTypeField;
export declare function serializeWebhookMiniTargetTypeField(val: WebhookMiniTargetTypeField): SerializedData;
export declare function deserializeWebhookMiniTargetTypeField(val: SerializedData): WebhookMiniTargetTypeField;
export declare function serializeWebhookMiniTargetField(val: WebhookMiniTargetField): SerializedData;
export declare function deserializeWebhookMiniTargetField(val: SerializedData): WebhookMiniTargetField;
export declare function serializeWebhookMini(val: WebhookMini): SerializedData;
export declare function deserializeWebhookMini(val: SerializedData): WebhookMini;
