import { TermsOfServiceUserStatus } from './termsOfServiceUserStatus.generated.js';
import { SerializedData } from '../serialization/json.js';
export interface TermsOfServiceUserStatuses {
    readonly totalCount?: number;
    readonly entries?: readonly TermsOfServiceUserStatus[];
}
export declare function serializeTermsOfServiceUserStatuses(val: TermsOfServiceUserStatuses): SerializedData;
export declare function deserializeTermsOfServiceUserStatuses(val: SerializedData): TermsOfServiceUserStatuses;
