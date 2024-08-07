import { SignRequestPrefillTag } from './signRequestPrefillTag.generated.js';
import { SerializedData } from '../serialization/json.js';
export interface SignRequestBase {
    readonly isDocumentPreparationNeeded?: boolean;
    readonly redirectUrl?: string;
    readonly declinedRedirectUrl?: string;
    readonly areTextSignaturesEnabled?: boolean;
    readonly emailSubject?: string;
    readonly emailMessage?: string;
    readonly areRemindersEnabled?: boolean;
    readonly name?: string;
    readonly prefillTags?: readonly SignRequestPrefillTag[];
    readonly daysValid?: number;
    readonly externalId?: string;
    readonly isPhoneVerificationRequiredToView?: boolean;
    readonly templateId?: string;
    readonly externalSystemName?: string;
}
export declare function serializeSignRequestBase(val: SignRequestBase): SerializedData;
export declare function deserializeSignRequestBase(val: SerializedData): SignRequestBase;
