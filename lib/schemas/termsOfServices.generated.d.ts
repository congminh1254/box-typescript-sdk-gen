import { TermsOfService } from './termsOfService.generated.js';
import { SerializedData } from '../serialization/json.js';
export interface TermsOfServices {
    readonly totalCount?: number;
    readonly entries?: readonly TermsOfService[];
}
export declare function serializeTermsOfServices(val: TermsOfServices): SerializedData;
export declare function deserializeTermsOfServices(val: SerializedData): TermsOfServices;
