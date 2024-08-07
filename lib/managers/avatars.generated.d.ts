import { UserAvatar } from '../schemas/userAvatar.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { ByteStream } from '../internal/utils.js';
import { CancellationToken } from '../internal/utils.js';
export declare class GetUserAvatarOptionals {
    readonly headers: GetUserAvatarHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetUserAvatarOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<GetUserAvatarOptionals, 'headers' | 'cancellationToken'>>);
}
export interface GetUserAvatarOptionalsInput {
    readonly headers?: GetUserAvatarHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class CreateUserAvatarOptionals {
    readonly headers: CreateUserAvatarHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<CreateUserAvatarOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<CreateUserAvatarOptionals, 'headers' | 'cancellationToken'>>);
}
export interface CreateUserAvatarOptionalsInput {
    readonly headers?: CreateUserAvatarHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class DeleteUserAvatarOptionals {
    readonly headers: DeleteUserAvatarHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<DeleteUserAvatarOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<DeleteUserAvatarOptionals, 'headers' | 'cancellationToken'>>);
}
export interface DeleteUserAvatarOptionalsInput {
    readonly headers?: DeleteUserAvatarHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetUserAvatarHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetUserAvatarHeaders, 'extraHeaders'> & Partial<Pick<GetUserAvatarHeaders, 'extraHeaders'>>);
}
export interface GetUserAvatarHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export interface CreateUserAvatarRequestBody {
    readonly pic: ByteStream;
    readonly picFileName?: string;
    readonly picContentType?: string;
}
export declare class CreateUserAvatarHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<CreateUserAvatarHeaders, 'extraHeaders'> & Partial<Pick<CreateUserAvatarHeaders, 'extraHeaders'>>);
}
export interface CreateUserAvatarHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class DeleteUserAvatarHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<DeleteUserAvatarHeaders, 'extraHeaders'> & Partial<Pick<DeleteUserAvatarHeaders, 'extraHeaders'>>);
}
export interface DeleteUserAvatarHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class AvatarsManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<AvatarsManager, 'networkSession' | 'getUserAvatar' | 'createUserAvatar' | 'deleteUserAvatar'> & Partial<Pick<AvatarsManager, 'networkSession'>>);
    getUserAvatar(userId: string, optionalsInput?: GetUserAvatarOptionalsInput): Promise<ByteStream>;
    createUserAvatar(userId: string, requestBody: CreateUserAvatarRequestBody, optionalsInput?: CreateUserAvatarOptionalsInput): Promise<UserAvatar>;
    deleteUserAvatar(userId: string, optionalsInput?: DeleteUserAvatarOptionalsInput): Promise<undefined>;
}
export interface AvatarsManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
