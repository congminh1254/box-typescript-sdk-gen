import { SerializedData } from '../serialization/json.js';
export interface UserAvatarPicUrlsField {
    readonly small?: string;
    readonly large?: string;
    readonly preview?: string;
}
export interface UserAvatar {
    readonly picUrls?: UserAvatarPicUrlsField;
}
export declare function serializeUserAvatarPicUrlsField(val: UserAvatarPicUrlsField): SerializedData;
export declare function deserializeUserAvatarPicUrlsField(val: SerializedData): UserAvatarPicUrlsField;
export declare function serializeUserAvatar(val: UserAvatar): SerializedData;
export declare function deserializeUserAvatar(val: SerializedData): UserAvatar;
