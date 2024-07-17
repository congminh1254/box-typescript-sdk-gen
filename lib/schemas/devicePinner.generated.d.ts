import { UserMini } from './userMini.generated.js';
import { SerializedData } from '../serialization/json.js';
export type DevicePinnerTypeField = 'device_pinner';
export interface DevicePinner {
    readonly id?: string;
    readonly type?: DevicePinnerTypeField;
    readonly ownedBy?: UserMini;
    readonly productName?: string;
}
export declare function serializeDevicePinnerTypeField(val: DevicePinnerTypeField): SerializedData;
export declare function deserializeDevicePinnerTypeField(val: SerializedData): DevicePinnerTypeField;
export declare function serializeDevicePinner(val: DevicePinner): SerializedData;
export declare function deserializeDevicePinner(val: SerializedData): DevicePinner;
