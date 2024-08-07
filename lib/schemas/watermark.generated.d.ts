import { DateTime } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export interface WatermarkWatermarkField {
    readonly createdAt?: DateTime;
    readonly modifiedAt?: DateTime;
}
export interface Watermark {
    readonly watermark?: WatermarkWatermarkField;
}
export declare function serializeWatermarkWatermarkField(val: WatermarkWatermarkField): SerializedData;
export declare function deserializeWatermarkWatermarkField(val: SerializedData): WatermarkWatermarkField;
export declare function serializeWatermark(val: Watermark): SerializedData;
export declare function deserializeWatermark(val: SerializedData): Watermark;
