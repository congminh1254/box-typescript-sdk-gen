import { SerializedData } from '../serialization/json.js';
export interface PostOAuth2Revoke {
    readonly clientId?: string;
    readonly clientSecret?: string;
    readonly token?: string;
}
export declare function serializePostOAuth2Revoke(val: PostOAuth2Revoke): SerializedData;
export declare function deserializePostOAuth2Revoke(val: SerializedData): PostOAuth2Revoke;
