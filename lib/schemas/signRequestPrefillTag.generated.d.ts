import { Date } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export interface SignRequestPrefillTag {
    readonly documentTagId?: string;
    readonly textValue?: string;
    readonly checkboxValue?: boolean;
    readonly dateValue?: Date;
}
export declare function serializeSignRequestPrefillTag(val: SignRequestPrefillTag): SerializedData;
export declare function deserializeSignRequestPrefillTag(val: SerializedData): SignRequestPrefillTag;
