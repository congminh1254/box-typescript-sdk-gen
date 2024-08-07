import { WebhookMini } from './webhookMini.generated.js';
import { SerializedData } from '../serialization/json.js';
export interface Webhooks {
    readonly limit?: number;
    readonly nextMarker?: string;
    readonly prevMarker?: string;
    readonly entries?: readonly WebhookMini[];
}
export declare function serializeWebhooks(val: Webhooks): SerializedData;
export declare function deserializeWebhooks(val: SerializedData): Webhooks;
