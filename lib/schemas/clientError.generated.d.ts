import { SerializedData } from '../serialization/json.js';
export type ClientErrorTypeField = 'error';
export type ClientErrorCodeField = 'created' | 'accepted' | 'no_content' | 'redirect' | 'not_modified' | 'bad_request' | 'unauthorized' | 'forbidden' | 'not_found' | 'method_not_allowed' | 'conflict' | 'precondition_failed' | 'too_many_requests' | 'internal_server_error' | 'unavailable' | 'item_name_invalid' | 'insufficient_scope';
export interface ClientErrorContextInfoField {
    readonly message?: string;
}
export interface ClientError {
    readonly type?: ClientErrorTypeField;
    readonly status?: number;
    readonly code?: ClientErrorCodeField;
    readonly message?: string;
    readonly contextInfo?: ClientErrorContextInfoField;
    readonly helpUrl?: string;
    readonly requestId?: string;
}
export declare function serializeClientErrorTypeField(val: ClientErrorTypeField): SerializedData;
export declare function deserializeClientErrorTypeField(val: SerializedData): ClientErrorTypeField;
export declare function serializeClientErrorCodeField(val: ClientErrorCodeField): SerializedData;
export declare function deserializeClientErrorCodeField(val: SerializedData): ClientErrorCodeField;
export declare function serializeClientErrorContextInfoField(val: ClientErrorContextInfoField): SerializedData;
export declare function deserializeClientErrorContextInfoField(val: SerializedData): ClientErrorContextInfoField;
export declare function serializeClientError(val: ClientError): SerializedData;
export declare function deserializeClientError(val: SerializedData): ClientError;
