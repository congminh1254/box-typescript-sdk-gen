import { SignTemplate } from './signTemplate.generated.js';
import { SerializedData } from '../serialization/json.js';
export interface SignTemplates {
    readonly limit?: number;
    readonly nextMarker?: string;
    readonly prevMarker?: string;
    readonly entries?: readonly SignTemplate[];
}
export declare function serializeSignTemplates(val: SignTemplates): SerializedData;
export declare function deserializeSignTemplates(val: SerializedData): SignTemplates;
