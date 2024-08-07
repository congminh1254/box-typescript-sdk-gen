import { SerializedData } from '../serialization/json.js';
export type TrackingCodeTypeField = 'tracking_code';
export interface TrackingCode {
    readonly type?: TrackingCodeTypeField;
    readonly name?: string;
    readonly value?: string;
}
export declare function serializeTrackingCodeTypeField(val: TrackingCodeTypeField): SerializedData;
export declare function deserializeTrackingCodeTypeField(val: SerializedData): TrackingCodeTypeField;
export declare function serializeTrackingCode(val: TrackingCode): SerializedData;
export declare function deserializeTrackingCode(val: SerializedData): TrackingCode;
