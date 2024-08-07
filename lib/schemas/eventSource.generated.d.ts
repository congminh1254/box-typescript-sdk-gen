import { FolderMini } from './folderMini.generated.js';
import { UserMini } from './userMini.generated.js';
import { SerializedData } from '../serialization/json.js';
export type EventSourceItemTypeField = 'file' | 'folder';
export interface EventSourceClassificationField {
    readonly name?: string;
}
export interface EventSource {
    readonly itemType: EventSourceItemTypeField;
    readonly itemId: string;
    readonly itemName: string;
    readonly classification?: EventSourceClassificationField;
    readonly parent?: FolderMini;
    readonly ownedBy?: UserMini;
}
export declare function serializeEventSourceItemTypeField(val: EventSourceItemTypeField): SerializedData;
export declare function deserializeEventSourceItemTypeField(val: SerializedData): EventSourceItemTypeField;
export declare function serializeEventSourceClassificationField(val: EventSourceClassificationField): SerializedData;
export declare function deserializeEventSourceClassificationField(val: SerializedData): EventSourceClassificationField;
export declare function serializeEventSource(val: EventSource): SerializedData;
export declare function deserializeEventSource(val: SerializedData): EventSource;
