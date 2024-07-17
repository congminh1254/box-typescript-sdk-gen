import { AccessToken } from '../schemas/accessToken.generated.js';
export interface TokenStorage {
    store(token: AccessToken): Promise<undefined>;
    get(): Promise<undefined | AccessToken>;
    clear(): Promise<undefined>;
}
export declare class InMemoryTokenStorage implements TokenStorage {
    token?: AccessToken;
    constructor(fields: Omit<InMemoryTokenStorage, 'token' | 'store' | 'get' | 'clear'> & Partial<Pick<InMemoryTokenStorage, 'token'>>);
    store(token: AccessToken): Promise<undefined>;
    get(): Promise<undefined | AccessToken>;
    clear(): Promise<undefined>;
}
