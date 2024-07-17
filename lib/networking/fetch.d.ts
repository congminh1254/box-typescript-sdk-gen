import { ByteStream, CancellationToken } from '../internal/utils';
import { SerializedData } from '../serialization/json';
import { Authentication } from './auth.generated';
import { NetworkSession } from './network.generated';
export declare const userAgentHeader: string;
export declare const xBoxUaHeader: string;
export interface MultipartItem {
    readonly partName: string;
    readonly data?: SerializedData;
    readonly fileStream?: ByteStream;
    readonly fileName?: string;
    readonly contentType?: string;
}
export interface FetchOptions {
    /**
     * A string to set request's method (GET, POST, etc.). Defaults to GET.
     */
    readonly method?: string;
    /**
     * [key1, value1, key2, value2, ...]
     */
    readonly headers?: {
        [key: string]: string;
    };
    /**
     * query params
     * [key1, value1, key2, value2, ...]
     */
    readonly params?: {
        [key: string]: string;
    };
    /**
     * Request body data
     */
    readonly data?: SerializedData;
    /**
     * Stream of a file
     */
    readonly fileStream?: ByteStream;
    /**
     * Parts of multipart data
     */
    readonly multipartData?: MultipartItem[];
    /**
     * Request body content type
     */
    readonly contentType?: string;
    /**
     * Expected format of the response: 'json', 'binary' or undefined
     */
    readonly responseFormat?: string;
    /**
     * Auth object
     */
    readonly auth?: Authentication;
    /**
     *
     */
    readonly networkSession?: NetworkSession;
    /**
     * Token used for request cancellation
     */
    readonly cancellationToken?: CancellationToken;
}
export interface FetchResponse {
    /**
     * The status code of the response. (This will be 200 for a success).
     */
    readonly status: number;
    /**
     * Response body data
     */
    readonly data: SerializedData;
    /**
     * Binary array buffer of response body
     */
    readonly content: ByteStream;
    readonly headers: {
        [key: string]: string;
    };
}
export declare function fetch(resource: string, options: FetchOptions & {
    /** @private */
    numRetries?: number;
}): Promise<FetchResponse>;
