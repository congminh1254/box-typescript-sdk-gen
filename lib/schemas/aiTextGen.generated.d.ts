import { DateTime } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export type AiTextGenItemsTypeField = 'file';
export interface AiTextGenItemsField {
    readonly id?: string;
    readonly type?: AiTextGenItemsTypeField;
    readonly content?: string;
}
export interface AiTextGenDialogueHistoryField {
    readonly prompt?: string;
    readonly answer?: string;
    readonly createdAt?: DateTime;
}
export interface AiTextGen {
    readonly prompt: string;
    readonly items: readonly AiTextGenItemsField[];
    readonly dialogueHistory?: readonly AiTextGenDialogueHistoryField[];
}
export declare function serializeAiTextGenItemsTypeField(val: AiTextGenItemsTypeField): SerializedData;
export declare function deserializeAiTextGenItemsTypeField(val: SerializedData): AiTextGenItemsTypeField;
export declare function serializeAiTextGenItemsField(val: AiTextGenItemsField): SerializedData;
export declare function deserializeAiTextGenItemsField(val: SerializedData): AiTextGenItemsField;
export declare function serializeAiTextGenDialogueHistoryField(val: AiTextGenDialogueHistoryField): SerializedData;
export declare function deserializeAiTextGenDialogueHistoryField(val: SerializedData): AiTextGenDialogueHistoryField;
export declare function serializeAiTextGen(val: AiTextGen): SerializedData;
export declare function deserializeAiTextGen(val: SerializedData): AiTextGen;
