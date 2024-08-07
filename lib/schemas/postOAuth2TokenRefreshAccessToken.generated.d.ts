import { SerializedData } from '../serialization/json.js';
export type PostOAuth2TokenRefreshAccessTokenGrantTypeField = 'refresh_token';
export declare class PostOAuth2TokenRefreshAccessToken {
    readonly grantType: PostOAuth2TokenRefreshAccessTokenGrantTypeField;
    readonly clientId: string;
    readonly clientSecret: string;
    readonly refreshToken: string;
    constructor(fields: Omit<PostOAuth2TokenRefreshAccessToken, 'grantType'> & Partial<Pick<PostOAuth2TokenRefreshAccessToken, 'grantType'>>);
}
export interface PostOAuth2TokenRefreshAccessTokenInput {
    readonly grantType?: PostOAuth2TokenRefreshAccessTokenGrantTypeField;
    readonly clientId: string;
    readonly clientSecret: string;
    readonly refreshToken: string;
}
export declare function serializePostOAuth2TokenRefreshAccessTokenGrantTypeField(val: PostOAuth2TokenRefreshAccessTokenGrantTypeField): SerializedData;
export declare function deserializePostOAuth2TokenRefreshAccessTokenGrantTypeField(val: SerializedData): PostOAuth2TokenRefreshAccessTokenGrantTypeField;
export declare function serializePostOAuth2TokenRefreshAccessToken(val: PostOAuth2TokenRefreshAccessToken): SerializedData;
export declare function deserializePostOAuth2TokenRefreshAccessToken(val: SerializedData): PostOAuth2TokenRefreshAccessToken;
export declare function serializePostOAuth2TokenRefreshAccessTokenInput(val: PostOAuth2TokenRefreshAccessTokenInput): SerializedData;
export declare function deserializePostOAuth2TokenRefreshAccessTokenInput(val: SerializedData): PostOAuth2TokenRefreshAccessTokenInput;
