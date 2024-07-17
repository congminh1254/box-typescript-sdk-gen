import { SessionTerminationMessage } from '../schemas/sessionTerminationMessage.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { CancellationToken } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export declare class TerminateUsersSessionsOptionals {
    readonly headers: TerminateUsersSessionsHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<TerminateUsersSessionsOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<TerminateUsersSessionsOptionals, 'headers' | 'cancellationToken'>>);
}
export interface TerminateUsersSessionsOptionalsInput {
    readonly headers?: TerminateUsersSessionsHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class TerminateGroupsSessionsOptionals {
    readonly headers: TerminateGroupsSessionsHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<TerminateGroupsSessionsOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<TerminateGroupsSessionsOptionals, 'headers' | 'cancellationToken'>>);
}
export interface TerminateGroupsSessionsOptionalsInput {
    readonly headers?: TerminateGroupsSessionsHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export interface TerminateUsersSessionsRequestBody {
    readonly userIds: readonly string[];
    readonly userLogins: readonly string[];
}
export declare class TerminateUsersSessionsHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<TerminateUsersSessionsHeaders, 'extraHeaders'> & Partial<Pick<TerminateUsersSessionsHeaders, 'extraHeaders'>>);
}
export interface TerminateUsersSessionsHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export interface TerminateGroupsSessionsRequestBody {
    readonly groupIds: readonly string[];
}
export declare class TerminateGroupsSessionsHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<TerminateGroupsSessionsHeaders, 'extraHeaders'> & Partial<Pick<TerminateGroupsSessionsHeaders, 'extraHeaders'>>);
}
export interface TerminateGroupsSessionsHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class SessionTerminationManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<SessionTerminationManager, 'networkSession' | 'terminateUsersSessions' | 'terminateGroupsSessions'> & Partial<Pick<SessionTerminationManager, 'networkSession'>>);
    terminateUsersSessions(requestBody: TerminateUsersSessionsRequestBody, optionalsInput?: TerminateUsersSessionsOptionalsInput): Promise<SessionTerminationMessage>;
    terminateGroupsSessions(requestBody: TerminateGroupsSessionsRequestBody, optionalsInput?: TerminateGroupsSessionsOptionalsInput): Promise<SessionTerminationMessage>;
}
export interface SessionTerminationManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
export declare function serializeTerminateUsersSessionsRequestBody(val: TerminateUsersSessionsRequestBody): SerializedData;
export declare function deserializeTerminateUsersSessionsRequestBody(val: SerializedData): TerminateUsersSessionsRequestBody;
export declare function serializeTerminateGroupsSessionsRequestBody(val: TerminateGroupsSessionsRequestBody): SerializedData;
export declare function deserializeTerminateGroupsSessionsRequestBody(val: SerializedData): TerminateGroupsSessionsRequestBody;
