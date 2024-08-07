import { Buffer } from 'buffer';
import type { Readable } from 'stream';
export declare function isBrowser(): false | Crypto;
export declare function getUuid(): string;
export declare function decodeBase64(value: string): string;
export declare function hexToBase64(data: string): string;
export { Buffer, Readable as ByteStream };
export type { CancellationToken };
export type Iterator<T = any> = AsyncIterator<T>;
export type AgentOptions = any;
export type Agent = any;
declare class DateWrapper {
    readonly value: Date;
    constructor(value: Date);
}
declare class DateTimeWrapper {
    readonly value: Date;
    constructor(value: Date);
}
export { DateWrapper as Date, DateTimeWrapper as DateTime };
export declare function dateFromString(value: string): DateWrapper;
export declare function dateToString(date: DateWrapper): string;
export declare function dateTimeFromString(value: string): DateTimeWrapper;
export declare function dateTimeToString(dateTime: DateTimeWrapper): string;
export { dateToString as serializeDate, dateFromString as deserializeDate, dateTimeToString as serializeDateTime, dateTimeFromString as deserializeDateTime, };
export declare function hexStrToBase64(hex: string): string;
export type HashName = 'sha1';
export declare class Hash {
    #private;
    algorithm: HashName;
    constructor({ algorithm }: {
        algorithm: HashName;
    });
    updateHash(data: Buffer): void;
    digestHash(encoding: 'base64'): Promise<string>;
}
export declare function getEnvVar(name: string): string;
export declare function generateByteBuffer(size: number): Buffer;
export declare function generateByteStreamFromBuffer(buffer: Buffer | ArrayBuffer): Readable;
export declare function generateByteStream(size: number): Readable;
export declare function bufferEquals(buffer1: Buffer, buffer2: Buffer): boolean;
export declare function bufferLength(buffer: Buffer): number;
export declare function decodeBase64ByteStream(data: string): Readable;
export declare function readByteStream(byteStream: Readable): Promise<Buffer>;
export declare function iterateChunks(stream: Readable, chunkSize: number, fileSize: number): Iterator<Readable>;
export declare function reduceIterator<T, U>(iterator: Iterator<T>, reducer: (accumulator: U, current: T) => Promise<U>, initialValue: U): Promise<U>;
export declare function prepareParams(map: {
    readonly [key: string]: undefined | string;
}): {
    readonly [key: string]: string;
};
export declare function toString(value: any): string;
type CancellationToken = AbortSignal;
/**
 * Creates a cancellation token that will be cancelled after a given delay in ms.
 *
 * @param {number} delay Delay in ms.
 * @returns {CancellationToken} Cancellation token.
 */
export declare function createTokenAndCancelAfter(delay: number): CancellationToken;
export type JwtKey = {
    key: string;
    passphrase: string;
};
export type JwtAlgorithm = 'HS256' | 'HS384' | 'HS512' | 'RS256' | 'RS384' | 'RS512' | 'ES256' | 'ES384' | 'ES512' | 'PS256' | 'PS384' | 'PS512' | 'none';
export type JwtSignOptions = {
    algorithm?: JwtAlgorithm;
    keyid?: string | undefined;
    expiresIn?: string | number | undefined;
    notBefore?: string | number | undefined;
    audience?: string | string[] | undefined;
    subject?: string | undefined;
    issuer?: string | undefined;
    jwtid?: string | undefined;
};
/**
 * Creates a JWT assertion.
 *
 * @param claims
 * @param key
 * @param options
 * @returns
 */
export declare function createJwtAssertion(claims: {
    readonly [key: string]: any;
}, key: JwtKey, options: JwtSignOptions): Promise<string>;
/**
 * Reads a text file and returns its content.
 */
export declare function readTextFromFile(filepath: string): string;
/**
 * Get current epoch time in seconds.
 */
export declare function getEpochTimeInSeconds(): number;
/**
 * Create web agent from proxy agent options.
 */
export declare function createAgent(options?: AgentOptions): Agent;
