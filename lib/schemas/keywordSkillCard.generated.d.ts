import { DateTime } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export type KeywordSkillCardTypeField = 'skill_card';
export type KeywordSkillCardSkillCardTypeField = 'keyword';
export interface KeywordSkillCardSkillCardTitleField {
    readonly code?: string;
    readonly message: string;
}
export type KeywordSkillCardSkillTypeField = 'service';
export declare class KeywordSkillCardSkillField {
    readonly type: KeywordSkillCardSkillTypeField;
    readonly id: string;
    constructor(fields: Omit<KeywordSkillCardSkillField, 'type'> & Partial<Pick<KeywordSkillCardSkillField, 'type'>>);
}
export interface KeywordSkillCardSkillFieldInput {
    readonly type?: KeywordSkillCardSkillTypeField;
    readonly id: string;
}
export type KeywordSkillCardInvocationTypeField = 'skill_invocation';
export declare class KeywordSkillCardInvocationField {
    readonly type: KeywordSkillCardInvocationTypeField;
    readonly id: string;
    constructor(fields: Omit<KeywordSkillCardInvocationField, 'type'> & Partial<Pick<KeywordSkillCardInvocationField, 'type'>>);
}
export interface KeywordSkillCardInvocationFieldInput {
    readonly type?: KeywordSkillCardInvocationTypeField;
    readonly id: string;
}
export interface KeywordSkillCardEntriesField {
    readonly text?: string;
}
export declare class KeywordSkillCard {
    readonly createdAt?: DateTime;
    readonly type: KeywordSkillCardTypeField;
    readonly skillCardType: KeywordSkillCardSkillCardTypeField;
    readonly skillCardTitle?: KeywordSkillCardSkillCardTitleField;
    readonly skill: KeywordSkillCardSkillField;
    readonly invocation: KeywordSkillCardInvocationField;
    readonly entries: readonly KeywordSkillCardEntriesField[];
    constructor(fields: Omit<KeywordSkillCard, 'type' | 'skillCardType'> & Partial<Pick<KeywordSkillCard, 'type' | 'skillCardType'>>);
}
export interface KeywordSkillCardInput {
    readonly createdAt?: DateTime;
    readonly type?: KeywordSkillCardTypeField;
    readonly skillCardType?: KeywordSkillCardSkillCardTypeField;
    readonly skillCardTitle?: KeywordSkillCardSkillCardTitleField;
    readonly skill: KeywordSkillCardSkillField;
    readonly invocation: KeywordSkillCardInvocationField;
    readonly entries: readonly KeywordSkillCardEntriesField[];
}
export declare function serializeKeywordSkillCardTypeField(val: KeywordSkillCardTypeField): SerializedData;
export declare function deserializeKeywordSkillCardTypeField(val: SerializedData): KeywordSkillCardTypeField;
export declare function serializeKeywordSkillCardSkillCardTypeField(val: KeywordSkillCardSkillCardTypeField): SerializedData;
export declare function deserializeKeywordSkillCardSkillCardTypeField(val: SerializedData): KeywordSkillCardSkillCardTypeField;
export declare function serializeKeywordSkillCardSkillCardTitleField(val: KeywordSkillCardSkillCardTitleField): SerializedData;
export declare function deserializeKeywordSkillCardSkillCardTitleField(val: SerializedData): KeywordSkillCardSkillCardTitleField;
export declare function serializeKeywordSkillCardSkillTypeField(val: KeywordSkillCardSkillTypeField): SerializedData;
export declare function deserializeKeywordSkillCardSkillTypeField(val: SerializedData): KeywordSkillCardSkillTypeField;
export declare function serializeKeywordSkillCardSkillField(val: KeywordSkillCardSkillField): SerializedData;
export declare function deserializeKeywordSkillCardSkillField(val: SerializedData): KeywordSkillCardSkillField;
export declare function serializeKeywordSkillCardSkillFieldInput(val: KeywordSkillCardSkillFieldInput): SerializedData;
export declare function deserializeKeywordSkillCardSkillFieldInput(val: SerializedData): KeywordSkillCardSkillFieldInput;
export declare function serializeKeywordSkillCardInvocationTypeField(val: KeywordSkillCardInvocationTypeField): SerializedData;
export declare function deserializeKeywordSkillCardInvocationTypeField(val: SerializedData): KeywordSkillCardInvocationTypeField;
export declare function serializeKeywordSkillCardInvocationField(val: KeywordSkillCardInvocationField): SerializedData;
export declare function deserializeKeywordSkillCardInvocationField(val: SerializedData): KeywordSkillCardInvocationField;
export declare function serializeKeywordSkillCardInvocationFieldInput(val: KeywordSkillCardInvocationFieldInput): SerializedData;
export declare function deserializeKeywordSkillCardInvocationFieldInput(val: SerializedData): KeywordSkillCardInvocationFieldInput;
export declare function serializeKeywordSkillCardEntriesField(val: KeywordSkillCardEntriesField): SerializedData;
export declare function deserializeKeywordSkillCardEntriesField(val: SerializedData): KeywordSkillCardEntriesField;
export declare function serializeKeywordSkillCard(val: KeywordSkillCard): SerializedData;
export declare function deserializeKeywordSkillCard(val: SerializedData): KeywordSkillCard;
export declare function serializeKeywordSkillCardInput(val: KeywordSkillCardInput): SerializedData;
export declare function deserializeKeywordSkillCardInput(val: SerializedData): KeywordSkillCardInput;
