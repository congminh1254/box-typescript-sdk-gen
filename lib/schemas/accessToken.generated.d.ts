import { FileOrFolderScope } from './fileOrFolderScope.generated.js';
import { SerializedData } from '../serialization/json.js';
export type AccessTokenTokenTypeField = 'bearer';
export type AccessTokenIssuedTokenTypeField = 'urn:ietf:params:oauth:token-type:access_token';
export interface AccessToken {
    readonly accessToken?: string;
    readonly expiresIn?: number;
    readonly tokenType?: AccessTokenTokenTypeField;
    readonly restrictedTo?: readonly FileOrFolderScope[];
    readonly refreshToken?: string;
    readonly issuedTokenType?: AccessTokenIssuedTokenTypeField;
}
export declare function serializeAccessTokenTokenTypeField(val: AccessTokenTokenTypeField): SerializedData;
export declare function deserializeAccessTokenTokenTypeField(val: SerializedData): AccessTokenTokenTypeField;
export declare function serializeAccessTokenIssuedTokenTypeField(val: AccessTokenIssuedTokenTypeField): SerializedData;
export declare function deserializeAccessTokenIssuedTokenTypeField(val: SerializedData): AccessTokenIssuedTokenTypeField;
export declare function serializeAccessToken(val: AccessToken): SerializedData;
export declare function deserializeAccessToken(val: SerializedData): AccessToken;
