import { Buffer } from 'buffer';
import { Readable } from 'stream';
import { default as FormData } from 'form-data';
import util from 'util';
export { Buffer, Readable as ByteStream, FormData, util as utilLib };
export type AgentOptions = any;
export type Agent = any;
export type HashName = 'sha1';
export type DigestHashType = 'base64';
export declare class Hash {
    #private;
    algorithm: HashName;
    constructor({ algorithm }: {
        algorithm: HashName;
    });
    updateHash(data: Buffer): Promise<void>;
    digestHash(encoding?: DigestHashType): Promise<string>;
}
export declare function generateByteBuffer(size: number): Buffer;
export declare function generateReadableStreamFromFile(file: any, chunkSize?: number): ReadableStream;
export declare function generateByteStreamFromBuffer(buffer: Buffer | ArrayBuffer): Readable;
export declare function decodeBase64ByteStream(data: string): Readable;
export declare function stringToByteStream(data: string): Readable;
export declare function readByteStream(byteStream: Readable): Promise<Buffer>;
export declare function iterateChunks(stream: Readable, chunkSize: number, fileSize: number): AsyncGenerator<Readable>;
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
 * Create web agent from proxy agent options.
 */
export declare function createAgent(options?: AgentOptions, proxyConfig?: any): Agent;
/**
 * Stringify JSON with escaped multibyte Unicode characters to ensure computed signatures match PHP's default behavior
 *
 * @param {Object} body - The parsed JSON object
 * @returns {string} - Stringified JSON with escaped multibyte Unicode characters
 * @private
 */
export declare function jsonStringifyWithEscapedUnicode(body: string): string;
/**
 * Compute the message signature
 * @see {@Link https://developer.box.com/en/guides/webhooks/handle/setup-signatures/}
 *
 * @param {string} body - The request body of the webhook message
 * @param {Object} headers - The request headers of the webhook message
 * @param {string} signatureKey - The signature to verify the message with
 * @returns {?string} - The message signature (or null, if it can't be computed)
 * @private
 */
export declare function computeWebhookSignature(body: string, headers: {
    [key: string]: string;
}, signatureKey: string): Promise<string | null>;
export declare function random(min: number, max: number): number;
export declare function calculateMD5Hash(data: string | Buffer): Promise<string>;
//# sourceMappingURL=utilsNode.d.ts.map