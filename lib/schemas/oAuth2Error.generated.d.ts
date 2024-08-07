import { SerializedData } from '../serialization/json.js';
export interface OAuth2Error {
    readonly error?: string;
    readonly errorDescription?: string;
}
export declare function serializeOAuth2Error(val: OAuth2Error): SerializedData;
export declare function deserializeOAuth2Error(val: SerializedData): OAuth2Error;
