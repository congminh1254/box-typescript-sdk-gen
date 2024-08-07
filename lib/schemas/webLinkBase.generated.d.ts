import { SerializedData } from '../serialization/json.js';
export type WebLinkBaseTypeField = 'web_link';
export declare class WebLinkBase {
    readonly id: string;
    readonly type: WebLinkBaseTypeField;
    readonly etag?: string;
    constructor(fields: Omit<WebLinkBase, 'type'> & Partial<Pick<WebLinkBase, 'type'>>);
}
export interface WebLinkBaseInput {
    readonly id: string;
    readonly type?: WebLinkBaseTypeField;
    readonly etag?: string;
}
export declare function serializeWebLinkBaseTypeField(val: WebLinkBaseTypeField): SerializedData;
export declare function deserializeWebLinkBaseTypeField(val: SerializedData): WebLinkBaseTypeField;
export declare function serializeWebLinkBase(val: WebLinkBase): SerializedData;
export declare function deserializeWebLinkBase(val: SerializedData): WebLinkBase;
export declare function serializeWebLinkBaseInput(val: WebLinkBaseInput): SerializedData;
export declare function deserializeWebLinkBaseInput(val: SerializedData): WebLinkBaseInput;
