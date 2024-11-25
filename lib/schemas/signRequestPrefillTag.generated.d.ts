import { Date } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export interface SignRequestPrefillTag {
    /**
     * This references the ID of a specific tag contained in a file of the signature request. */
    readonly documentTagId?: string;
    /**
     * Text prefill value */
    readonly textValue?: string;
    /**
     * Checkbox prefill value */
    readonly checkboxValue?: boolean;
    /**
     * Date prefill value */
    readonly dateValue?: Date;
    readonly rawData?: SerializedData;
}
export declare function serializeSignRequestPrefillTag(val: SignRequestPrefillTag): SerializedData;
export declare function deserializeSignRequestPrefillTag(val: SerializedData): SignRequestPrefillTag;
