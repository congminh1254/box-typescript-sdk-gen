import { UserMini } from './userMini.generated.js';
import { GroupMini } from './groupMini.generated.js';
import { SerializedData } from '../serialization/json.js';
export type AppItemEventSourceTypeField = 'app_item';
export declare class AppItemEventSource {
    readonly id: string;
    readonly type: AppItemEventSourceTypeField;
    readonly appItemType: string;
    readonly user?: UserMini;
    readonly group?: GroupMini;
    constructor(fields: Omit<AppItemEventSource, 'type'> & Partial<Pick<AppItemEventSource, 'type'>>);
}
export interface AppItemEventSourceInput {
    readonly id: string;
    readonly type?: AppItemEventSourceTypeField;
    readonly appItemType: string;
    readonly user?: UserMini;
    readonly group?: GroupMini;
}
export declare function serializeAppItemEventSourceTypeField(val: AppItemEventSourceTypeField): SerializedData;
export declare function deserializeAppItemEventSourceTypeField(val: SerializedData): AppItemEventSourceTypeField;
export declare function serializeAppItemEventSource(val: AppItemEventSource): SerializedData;
export declare function deserializeAppItemEventSource(val: SerializedData): AppItemEventSource;
export declare function serializeAppItemEventSourceInput(val: AppItemEventSourceInput): SerializedData;
export declare function deserializeAppItemEventSourceInput(val: SerializedData): AppItemEventSourceInput;
