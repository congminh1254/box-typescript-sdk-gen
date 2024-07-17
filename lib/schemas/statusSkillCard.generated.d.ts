import { DateTime } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export type StatusSkillCardTypeField = 'skill_card';
export type StatusSkillCardSkillCardTypeField = 'status';
export interface StatusSkillCardSkillCardTitleField {
    readonly code?: string;
    readonly message: string;
}
export type StatusSkillCardStatusCodeField = 'invoked' | 'processing' | 'success' | 'transient_failure' | 'permanent_failure';
export interface StatusSkillCardStatusField {
    readonly code: StatusSkillCardStatusCodeField;
    readonly message?: string;
}
export type StatusSkillCardSkillTypeField = 'service';
export declare class StatusSkillCardSkillField {
    readonly type: StatusSkillCardSkillTypeField;
    readonly id: string;
    constructor(fields: Omit<StatusSkillCardSkillField, 'type'> & Partial<Pick<StatusSkillCardSkillField, 'type'>>);
}
export interface StatusSkillCardSkillFieldInput {
    readonly type?: StatusSkillCardSkillTypeField;
    readonly id: string;
}
export type StatusSkillCardInvocationTypeField = 'skill_invocation';
export declare class StatusSkillCardInvocationField {
    readonly type: StatusSkillCardInvocationTypeField;
    readonly id: string;
    constructor(fields: Omit<StatusSkillCardInvocationField, 'type'> & Partial<Pick<StatusSkillCardInvocationField, 'type'>>);
}
export interface StatusSkillCardInvocationFieldInput {
    readonly type?: StatusSkillCardInvocationTypeField;
    readonly id: string;
}
export declare class StatusSkillCard {
    readonly createdAt?: DateTime;
    readonly type: StatusSkillCardTypeField;
    readonly skillCardType: StatusSkillCardSkillCardTypeField;
    readonly skillCardTitle?: StatusSkillCardSkillCardTitleField;
    readonly status: StatusSkillCardStatusField;
    readonly skill: StatusSkillCardSkillField;
    readonly invocation: StatusSkillCardInvocationField;
    constructor(fields: Omit<StatusSkillCard, 'type' | 'skillCardType'> & Partial<Pick<StatusSkillCard, 'type' | 'skillCardType'>>);
}
export interface StatusSkillCardInput {
    readonly createdAt?: DateTime;
    readonly type?: StatusSkillCardTypeField;
    readonly skillCardType?: StatusSkillCardSkillCardTypeField;
    readonly skillCardTitle?: StatusSkillCardSkillCardTitleField;
    readonly status: StatusSkillCardStatusField;
    readonly skill: StatusSkillCardSkillField;
    readonly invocation: StatusSkillCardInvocationField;
}
export declare function serializeStatusSkillCardTypeField(val: StatusSkillCardTypeField): SerializedData;
export declare function deserializeStatusSkillCardTypeField(val: SerializedData): StatusSkillCardTypeField;
export declare function serializeStatusSkillCardSkillCardTypeField(val: StatusSkillCardSkillCardTypeField): SerializedData;
export declare function deserializeStatusSkillCardSkillCardTypeField(val: SerializedData): StatusSkillCardSkillCardTypeField;
export declare function serializeStatusSkillCardSkillCardTitleField(val: StatusSkillCardSkillCardTitleField): SerializedData;
export declare function deserializeStatusSkillCardSkillCardTitleField(val: SerializedData): StatusSkillCardSkillCardTitleField;
export declare function serializeStatusSkillCardStatusCodeField(val: StatusSkillCardStatusCodeField): SerializedData;
export declare function deserializeStatusSkillCardStatusCodeField(val: SerializedData): StatusSkillCardStatusCodeField;
export declare function serializeStatusSkillCardStatusField(val: StatusSkillCardStatusField): SerializedData;
export declare function deserializeStatusSkillCardStatusField(val: SerializedData): StatusSkillCardStatusField;
export declare function serializeStatusSkillCardSkillTypeField(val: StatusSkillCardSkillTypeField): SerializedData;
export declare function deserializeStatusSkillCardSkillTypeField(val: SerializedData): StatusSkillCardSkillTypeField;
export declare function serializeStatusSkillCardSkillField(val: StatusSkillCardSkillField): SerializedData;
export declare function deserializeStatusSkillCardSkillField(val: SerializedData): StatusSkillCardSkillField;
export declare function serializeStatusSkillCardSkillFieldInput(val: StatusSkillCardSkillFieldInput): SerializedData;
export declare function deserializeStatusSkillCardSkillFieldInput(val: SerializedData): StatusSkillCardSkillFieldInput;
export declare function serializeStatusSkillCardInvocationTypeField(val: StatusSkillCardInvocationTypeField): SerializedData;
export declare function deserializeStatusSkillCardInvocationTypeField(val: SerializedData): StatusSkillCardInvocationTypeField;
export declare function serializeStatusSkillCardInvocationField(val: StatusSkillCardInvocationField): SerializedData;
export declare function deserializeStatusSkillCardInvocationField(val: SerializedData): StatusSkillCardInvocationField;
export declare function serializeStatusSkillCardInvocationFieldInput(val: StatusSkillCardInvocationFieldInput): SerializedData;
export declare function deserializeStatusSkillCardInvocationFieldInput(val: SerializedData): StatusSkillCardInvocationFieldInput;
export declare function serializeStatusSkillCard(val: StatusSkillCard): SerializedData;
export declare function deserializeStatusSkillCard(val: SerializedData): StatusSkillCard;
export declare function serializeStatusSkillCardInput(val: StatusSkillCardInput): SerializedData;
export declare function deserializeStatusSkillCardInput(val: SerializedData): StatusSkillCardInput;
