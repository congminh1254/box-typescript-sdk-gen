import { SerializedData } from '../serialization/json.js';
export declare class BoxSdkError extends Error {
    readonly message: string;
    readonly timestamp?: string;
    readonly error?: Error;
    readonly name: string;
    constructor(fields: {
        message: string;
        timestamp?: string;
        error?: Error;
        name?: string;
    });
}
export interface RequestInfo {
    readonly method: string;
    readonly url: string;
    readonly queryParams: {
        readonly [key: string]: string;
    };
    readonly headers: {
        readonly [key: string]: string;
    };
    readonly body?: any;
}
export interface ResponseInfo {
    readonly statusCode: number;
    readonly headers: {
        readonly [key: string]: string;
    };
    readonly body?: SerializedData;
    readonly rawBody?: string;
    readonly code?: string;
    readonly contextInfo?: {
        readonly [key: string]: any;
    };
    readonly requestId?: string;
    readonly helpUrl?: string;
}
export declare class BoxApiError extends BoxSdkError {
    readonly requestInfo: RequestInfo;
    readonly responseInfo: ResponseInfo;
    constructor(fields: BoxApiError);
}
