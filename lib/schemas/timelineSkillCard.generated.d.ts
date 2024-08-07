import { DateTime } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export type TimelineSkillCardTypeField = 'skill_card';
export type TimelineSkillCardSkillCardTypeField = 'timeline';
export interface TimelineSkillCardSkillCardTitleField {
    readonly code?: string;
    readonly message: string;
}
export type TimelineSkillCardSkillTypeField = 'service';
export declare class TimelineSkillCardSkillField {
    readonly type: TimelineSkillCardSkillTypeField;
    readonly id: string;
    constructor(fields: Omit<TimelineSkillCardSkillField, 'type'> & Partial<Pick<TimelineSkillCardSkillField, 'type'>>);
}
export interface TimelineSkillCardSkillFieldInput {
    readonly type?: TimelineSkillCardSkillTypeField;
    readonly id: string;
}
export type TimelineSkillCardInvocationTypeField = 'skill_invocation';
export declare class TimelineSkillCardInvocationField {
    readonly type: TimelineSkillCardInvocationTypeField;
    readonly id: string;
    constructor(fields: Omit<TimelineSkillCardInvocationField, 'type'> & Partial<Pick<TimelineSkillCardInvocationField, 'type'>>);
}
export interface TimelineSkillCardInvocationFieldInput {
    readonly type?: TimelineSkillCardInvocationTypeField;
    readonly id: string;
}
export interface TimelineSkillCardEntriesAppearsField {
    readonly start?: number;
    readonly end?: number;
}
export interface TimelineSkillCardEntriesField {
    readonly text?: string;
    readonly appears?: readonly TimelineSkillCardEntriesAppearsField[];
    readonly imageUrl?: string;
}
export declare class TimelineSkillCard {
    readonly createdAt?: DateTime;
    readonly type: TimelineSkillCardTypeField;
    readonly skillCardType: TimelineSkillCardSkillCardTypeField;
    readonly skillCardTitle?: TimelineSkillCardSkillCardTitleField;
    readonly skill: TimelineSkillCardSkillField;
    readonly invocation: TimelineSkillCardInvocationField;
    readonly duration?: number;
    readonly entries: readonly TimelineSkillCardEntriesField[];
    constructor(fields: Omit<TimelineSkillCard, 'type' | 'skillCardType'> & Partial<Pick<TimelineSkillCard, 'type' | 'skillCardType'>>);
}
export interface TimelineSkillCardInput {
    readonly createdAt?: DateTime;
    readonly type?: TimelineSkillCardTypeField;
    readonly skillCardType?: TimelineSkillCardSkillCardTypeField;
    readonly skillCardTitle?: TimelineSkillCardSkillCardTitleField;
    readonly skill: TimelineSkillCardSkillField;
    readonly invocation: TimelineSkillCardInvocationField;
    readonly duration?: number;
    readonly entries: readonly TimelineSkillCardEntriesField[];
}
export declare function serializeTimelineSkillCardTypeField(val: TimelineSkillCardTypeField): SerializedData;
export declare function deserializeTimelineSkillCardTypeField(val: SerializedData): TimelineSkillCardTypeField;
export declare function serializeTimelineSkillCardSkillCardTypeField(val: TimelineSkillCardSkillCardTypeField): SerializedData;
export declare function deserializeTimelineSkillCardSkillCardTypeField(val: SerializedData): TimelineSkillCardSkillCardTypeField;
export declare function serializeTimelineSkillCardSkillCardTitleField(val: TimelineSkillCardSkillCardTitleField): SerializedData;
export declare function deserializeTimelineSkillCardSkillCardTitleField(val: SerializedData): TimelineSkillCardSkillCardTitleField;
export declare function serializeTimelineSkillCardSkillTypeField(val: TimelineSkillCardSkillTypeField): SerializedData;
export declare function deserializeTimelineSkillCardSkillTypeField(val: SerializedData): TimelineSkillCardSkillTypeField;
export declare function serializeTimelineSkillCardSkillField(val: TimelineSkillCardSkillField): SerializedData;
export declare function deserializeTimelineSkillCardSkillField(val: SerializedData): TimelineSkillCardSkillField;
export declare function serializeTimelineSkillCardSkillFieldInput(val: TimelineSkillCardSkillFieldInput): SerializedData;
export declare function deserializeTimelineSkillCardSkillFieldInput(val: SerializedData): TimelineSkillCardSkillFieldInput;
export declare function serializeTimelineSkillCardInvocationTypeField(val: TimelineSkillCardInvocationTypeField): SerializedData;
export declare function deserializeTimelineSkillCardInvocationTypeField(val: SerializedData): TimelineSkillCardInvocationTypeField;
export declare function serializeTimelineSkillCardInvocationField(val: TimelineSkillCardInvocationField): SerializedData;
export declare function deserializeTimelineSkillCardInvocationField(val: SerializedData): TimelineSkillCardInvocationField;
export declare function serializeTimelineSkillCardInvocationFieldInput(val: TimelineSkillCardInvocationFieldInput): SerializedData;
export declare function deserializeTimelineSkillCardInvocationFieldInput(val: SerializedData): TimelineSkillCardInvocationFieldInput;
export declare function serializeTimelineSkillCardEntriesAppearsField(val: TimelineSkillCardEntriesAppearsField): SerializedData;
export declare function deserializeTimelineSkillCardEntriesAppearsField(val: SerializedData): TimelineSkillCardEntriesAppearsField;
export declare function serializeTimelineSkillCardEntriesField(val: TimelineSkillCardEntriesField): SerializedData;
export declare function deserializeTimelineSkillCardEntriesField(val: SerializedData): TimelineSkillCardEntriesField;
export declare function serializeTimelineSkillCard(val: TimelineSkillCard): SerializedData;
export declare function deserializeTimelineSkillCard(val: SerializedData): TimelineSkillCard;
export declare function serializeTimelineSkillCardInput(val: TimelineSkillCardInput): SerializedData;
export declare function deserializeTimelineSkillCardInput(val: SerializedData): TimelineSkillCardInput;
