import { EmailAliases } from '../schemas/emailAliases.generated.js';
import { EmailAlias } from '../schemas/emailAlias.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { CancellationToken } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export declare class GetUserEmailAliasesOptionals {
    readonly headers: GetUserEmailAliasesHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetUserEmailAliasesOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<GetUserEmailAliasesOptionals, 'headers' | 'cancellationToken'>>);
}
export interface GetUserEmailAliasesOptionalsInput {
    readonly headers?: GetUserEmailAliasesHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class CreateUserEmailAliasOptionals {
    readonly headers: CreateUserEmailAliasHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<CreateUserEmailAliasOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<CreateUserEmailAliasOptionals, 'headers' | 'cancellationToken'>>);
}
export interface CreateUserEmailAliasOptionalsInput {
    readonly headers?: CreateUserEmailAliasHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class DeleteUserEmailAliasByIdOptionals {
    readonly headers: DeleteUserEmailAliasByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<DeleteUserEmailAliasByIdOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<DeleteUserEmailAliasByIdOptionals, 'headers' | 'cancellationToken'>>);
}
export interface DeleteUserEmailAliasByIdOptionalsInput {
    readonly headers?: DeleteUserEmailAliasByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetUserEmailAliasesHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetUserEmailAliasesHeaders, 'extraHeaders'> & Partial<Pick<GetUserEmailAliasesHeaders, 'extraHeaders'>>);
}
export interface GetUserEmailAliasesHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export interface CreateUserEmailAliasRequestBody {
    readonly email: string;
}
export declare class CreateUserEmailAliasHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<CreateUserEmailAliasHeaders, 'extraHeaders'> & Partial<Pick<CreateUserEmailAliasHeaders, 'extraHeaders'>>);
}
export interface CreateUserEmailAliasHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class DeleteUserEmailAliasByIdHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<DeleteUserEmailAliasByIdHeaders, 'extraHeaders'> & Partial<Pick<DeleteUserEmailAliasByIdHeaders, 'extraHeaders'>>);
}
export interface DeleteUserEmailAliasByIdHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class EmailAliasesManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<EmailAliasesManager, 'networkSession' | 'getUserEmailAliases' | 'createUserEmailAlias' | 'deleteUserEmailAliasById'> & Partial<Pick<EmailAliasesManager, 'networkSession'>>);
    getUserEmailAliases(userId: string, optionalsInput?: GetUserEmailAliasesOptionalsInput): Promise<EmailAliases>;
    createUserEmailAlias(userId: string, requestBody: CreateUserEmailAliasRequestBody, optionalsInput?: CreateUserEmailAliasOptionalsInput): Promise<EmailAlias>;
    deleteUserEmailAliasById(userId: string, emailAliasId: string, optionalsInput?: DeleteUserEmailAliasByIdOptionalsInput): Promise<undefined>;
}
export interface EmailAliasesManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
export declare function serializeCreateUserEmailAliasRequestBody(val: CreateUserEmailAliasRequestBody): SerializedData;
export declare function deserializeCreateUserEmailAliasRequestBody(val: SerializedData): CreateUserEmailAliasRequestBody;
