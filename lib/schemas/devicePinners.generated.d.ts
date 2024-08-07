import { DevicePinner } from './devicePinner.generated.js';
import { SerializedData } from '../serialization/json.js';
export type DevicePinnersOrderByField = 'id';
export type DevicePinnersOrderDirectionField = 'asc' | 'desc';
export interface DevicePinnersOrderField {
    readonly by?: DevicePinnersOrderByField;
    readonly direction?: DevicePinnersOrderDirectionField;
}
export interface DevicePinners {
    readonly entries?: readonly DevicePinner[];
    readonly limit?: number;
    readonly nextMarker?: number;
    readonly order?: readonly DevicePinnersOrderField[];
}
export declare function serializeDevicePinnersOrderByField(val: DevicePinnersOrderByField): SerializedData;
export declare function deserializeDevicePinnersOrderByField(val: SerializedData): DevicePinnersOrderByField;
export declare function serializeDevicePinnersOrderDirectionField(val: DevicePinnersOrderDirectionField): SerializedData;
export declare function deserializeDevicePinnersOrderDirectionField(val: SerializedData): DevicePinnersOrderDirectionField;
export declare function serializeDevicePinnersOrderField(val: DevicePinnersOrderField): SerializedData;
export declare function deserializeDevicePinnersOrderField(val: SerializedData): DevicePinnersOrderField;
export declare function serializeDevicePinners(val: DevicePinners): SerializedData;
export declare function deserializeDevicePinners(val: SerializedData): DevicePinners;
