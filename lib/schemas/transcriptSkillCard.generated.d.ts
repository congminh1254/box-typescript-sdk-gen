import { DateTime } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export type TranscriptSkillCardTypeField = 'skill_card';
export type TranscriptSkillCardSkillCardTypeField = 'transcript';
export interface TranscriptSkillCardSkillCardTitleField {
    readonly code?: string;
    readonly message: string;
}
export type TranscriptSkillCardSkillTypeField = 'service';
export declare class TranscriptSkillCardSkillField {
    readonly type: TranscriptSkillCardSkillTypeField;
    readonly id: string;
    constructor(fields: Omit<TranscriptSkillCardSkillField, 'type'> & Partial<Pick<TranscriptSkillCardSkillField, 'type'>>);
}
export interface TranscriptSkillCardSkillFieldInput {
    readonly type?: TranscriptSkillCardSkillTypeField;
    readonly id: string;
}
export type TranscriptSkillCardInvocationTypeField = 'skill_invocation';
export declare class TranscriptSkillCardInvocationField {
    readonly type: TranscriptSkillCardInvocationTypeField;
    readonly id: string;
    constructor(fields: Omit<TranscriptSkillCardInvocationField, 'type'> & Partial<Pick<TranscriptSkillCardInvocationField, 'type'>>);
}
export interface TranscriptSkillCardInvocationFieldInput {
    readonly type?: TranscriptSkillCardInvocationTypeField;
    readonly id: string;
}
export interface TranscriptSkillCardEntriesAppearsField {
    readonly start?: number;
}
export interface TranscriptSkillCardEntriesField {
    readonly text?: string;
    readonly appears?: readonly TranscriptSkillCardEntriesAppearsField[];
}
export declare class TranscriptSkillCard {
    readonly createdAt?: DateTime;
    readonly type: TranscriptSkillCardTypeField;
    readonly skillCardType: TranscriptSkillCardSkillCardTypeField;
    readonly skillCardTitle?: TranscriptSkillCardSkillCardTitleField;
    readonly skill: TranscriptSkillCardSkillField;
    readonly invocation: TranscriptSkillCardInvocationField;
    readonly duration?: number;
    readonly entries: readonly TranscriptSkillCardEntriesField[];
    constructor(fields: Omit<TranscriptSkillCard, 'type' | 'skillCardType'> & Partial<Pick<TranscriptSkillCard, 'type' | 'skillCardType'>>);
}
export interface TranscriptSkillCardInput {
    readonly createdAt?: DateTime;
    readonly type?: TranscriptSkillCardTypeField;
    readonly skillCardType?: TranscriptSkillCardSkillCardTypeField;
    readonly skillCardTitle?: TranscriptSkillCardSkillCardTitleField;
    readonly skill: TranscriptSkillCardSkillField;
    readonly invocation: TranscriptSkillCardInvocationField;
    readonly duration?: number;
    readonly entries: readonly TranscriptSkillCardEntriesField[];
}
export declare function serializeTranscriptSkillCardTypeField(val: TranscriptSkillCardTypeField): SerializedData;
export declare function deserializeTranscriptSkillCardTypeField(val: SerializedData): TranscriptSkillCardTypeField;
export declare function serializeTranscriptSkillCardSkillCardTypeField(val: TranscriptSkillCardSkillCardTypeField): SerializedData;
export declare function deserializeTranscriptSkillCardSkillCardTypeField(val: SerializedData): TranscriptSkillCardSkillCardTypeField;
export declare function serializeTranscriptSkillCardSkillCardTitleField(val: TranscriptSkillCardSkillCardTitleField): SerializedData;
export declare function deserializeTranscriptSkillCardSkillCardTitleField(val: SerializedData): TranscriptSkillCardSkillCardTitleField;
export declare function serializeTranscriptSkillCardSkillTypeField(val: TranscriptSkillCardSkillTypeField): SerializedData;
export declare function deserializeTranscriptSkillCardSkillTypeField(val: SerializedData): TranscriptSkillCardSkillTypeField;
export declare function serializeTranscriptSkillCardSkillField(val: TranscriptSkillCardSkillField): SerializedData;
export declare function deserializeTranscriptSkillCardSkillField(val: SerializedData): TranscriptSkillCardSkillField;
export declare function serializeTranscriptSkillCardSkillFieldInput(val: TranscriptSkillCardSkillFieldInput): SerializedData;
export declare function deserializeTranscriptSkillCardSkillFieldInput(val: SerializedData): TranscriptSkillCardSkillFieldInput;
export declare function serializeTranscriptSkillCardInvocationTypeField(val: TranscriptSkillCardInvocationTypeField): SerializedData;
export declare function deserializeTranscriptSkillCardInvocationTypeField(val: SerializedData): TranscriptSkillCardInvocationTypeField;
export declare function serializeTranscriptSkillCardInvocationField(val: TranscriptSkillCardInvocationField): SerializedData;
export declare function deserializeTranscriptSkillCardInvocationField(val: SerializedData): TranscriptSkillCardInvocationField;
export declare function serializeTranscriptSkillCardInvocationFieldInput(val: TranscriptSkillCardInvocationFieldInput): SerializedData;
export declare function deserializeTranscriptSkillCardInvocationFieldInput(val: SerializedData): TranscriptSkillCardInvocationFieldInput;
export declare function serializeTranscriptSkillCardEntriesAppearsField(val: TranscriptSkillCardEntriesAppearsField): SerializedData;
export declare function deserializeTranscriptSkillCardEntriesAppearsField(val: SerializedData): TranscriptSkillCardEntriesAppearsField;
export declare function serializeTranscriptSkillCardEntriesField(val: TranscriptSkillCardEntriesField): SerializedData;
export declare function deserializeTranscriptSkillCardEntriesField(val: SerializedData): TranscriptSkillCardEntriesField;
export declare function serializeTranscriptSkillCard(val: TranscriptSkillCard): SerializedData;
export declare function deserializeTranscriptSkillCard(val: SerializedData): TranscriptSkillCard;
export declare function serializeTranscriptSkillCardInput(val: TranscriptSkillCardInput): SerializedData;
export declare function deserializeTranscriptSkillCardInput(val: SerializedData): TranscriptSkillCardInput;
