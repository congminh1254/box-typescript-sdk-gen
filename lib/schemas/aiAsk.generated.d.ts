import { SerializedData } from '../serialization/json.js';
export type AiAskModeField = 'multiple_item_qa' | 'single_item_qa';
export type AiAskItemsTypeField = 'file';
export declare class AiAskItemsField {
    readonly id: string;
    readonly type: AiAskItemsTypeField;
    readonly content?: string;
    constructor(fields: Omit<AiAskItemsField, 'type'> & Partial<Pick<AiAskItemsField, 'type'>>);
}
export interface AiAskItemsFieldInput {
    readonly id: string;
    readonly type?: AiAskItemsTypeField;
    readonly content?: string;
}
export interface AiAsk {
    readonly mode: AiAskModeField;
    readonly prompt: string;
    readonly items: readonly AiAskItemsField[];
}
export declare function serializeAiAskModeField(val: AiAskModeField): SerializedData;
export declare function deserializeAiAskModeField(val: SerializedData): AiAskModeField;
export declare function serializeAiAskItemsTypeField(val: AiAskItemsTypeField): SerializedData;
export declare function deserializeAiAskItemsTypeField(val: SerializedData): AiAskItemsTypeField;
export declare function serializeAiAskItemsField(val: AiAskItemsField): SerializedData;
export declare function deserializeAiAskItemsField(val: SerializedData): AiAskItemsField;
export declare function serializeAiAskItemsFieldInput(val: AiAskItemsFieldInput): SerializedData;
export declare function deserializeAiAskItemsFieldInput(val: SerializedData): AiAskItemsFieldInput;
export declare function serializeAiAsk(val: AiAsk): SerializedData;
export declare function deserializeAiAsk(val: SerializedData): AiAsk;
