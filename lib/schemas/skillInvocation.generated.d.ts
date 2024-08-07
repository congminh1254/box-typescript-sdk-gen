import { FileOrFolder } from './fileOrFolder.generated.js';
import { Event } from './event.generated.js';
import { DateTime } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export type SkillInvocationTypeField = 'skill_invocation';
export type SkillInvocationSkillTypeField = 'skill';
export interface SkillInvocationSkillField {
    readonly id?: string;
    readonly type?: SkillInvocationSkillTypeField;
    readonly name?: string;
    readonly apiKey?: string;
}
export type SkillInvocationTokenReadTokenTypeField = 'bearer';
export interface SkillInvocationTokenReadField {
    readonly accessToken?: string;
    readonly expiresIn?: number;
    readonly tokenType?: SkillInvocationTokenReadTokenTypeField;
    readonly restrictedTo?: string;
}
export type SkillInvocationTokenWriteTokenTypeField = 'bearer';
export interface SkillInvocationTokenWriteField {
    readonly accessToken?: string;
    readonly expiresIn?: number;
    readonly tokenType?: SkillInvocationTokenWriteTokenTypeField;
    readonly restrictedTo?: string;
}
export interface SkillInvocationTokenField {
    readonly read?: SkillInvocationTokenReadField;
    readonly write?: SkillInvocationTokenWriteField;
}
export type SkillInvocationStatusStateField = 'invoked' | 'processing' | 'success' | 'transient_failure' | 'permanent_failure';
export interface SkillInvocationStatusField {
    readonly state?: SkillInvocationStatusStateField;
    readonly message?: string;
    readonly errorCode?: string;
    readonly additionalInfo?: string;
}
export type SkillInvocationEnterpriseTypeField = 'enterprise';
export interface SkillInvocationEnterpriseField {
    readonly id?: string;
    readonly type?: SkillInvocationEnterpriseTypeField;
    readonly name?: string;
}
export interface SkillInvocation {
    readonly type?: SkillInvocationTypeField;
    readonly id?: string;
    readonly skill?: SkillInvocationSkillField;
    readonly token?: SkillInvocationTokenField;
    readonly status?: SkillInvocationStatusField;
    readonly createdAt?: DateTime;
    readonly trigger?: string;
    readonly enterprise?: SkillInvocationEnterpriseField;
    readonly source?: FileOrFolder;
    readonly event?: Event;
}
export declare function serializeSkillInvocationTypeField(val: SkillInvocationTypeField): SerializedData;
export declare function deserializeSkillInvocationTypeField(val: SerializedData): SkillInvocationTypeField;
export declare function serializeSkillInvocationSkillTypeField(val: SkillInvocationSkillTypeField): SerializedData;
export declare function deserializeSkillInvocationSkillTypeField(val: SerializedData): SkillInvocationSkillTypeField;
export declare function serializeSkillInvocationSkillField(val: SkillInvocationSkillField): SerializedData;
export declare function deserializeSkillInvocationSkillField(val: SerializedData): SkillInvocationSkillField;
export declare function serializeSkillInvocationTokenReadTokenTypeField(val: SkillInvocationTokenReadTokenTypeField): SerializedData;
export declare function deserializeSkillInvocationTokenReadTokenTypeField(val: SerializedData): SkillInvocationTokenReadTokenTypeField;
export declare function serializeSkillInvocationTokenReadField(val: SkillInvocationTokenReadField): SerializedData;
export declare function deserializeSkillInvocationTokenReadField(val: SerializedData): SkillInvocationTokenReadField;
export declare function serializeSkillInvocationTokenWriteTokenTypeField(val: SkillInvocationTokenWriteTokenTypeField): SerializedData;
export declare function deserializeSkillInvocationTokenWriteTokenTypeField(val: SerializedData): SkillInvocationTokenWriteTokenTypeField;
export declare function serializeSkillInvocationTokenWriteField(val: SkillInvocationTokenWriteField): SerializedData;
export declare function deserializeSkillInvocationTokenWriteField(val: SerializedData): SkillInvocationTokenWriteField;
export declare function serializeSkillInvocationTokenField(val: SkillInvocationTokenField): SerializedData;
export declare function deserializeSkillInvocationTokenField(val: SerializedData): SkillInvocationTokenField;
export declare function serializeSkillInvocationStatusStateField(val: SkillInvocationStatusStateField): SerializedData;
export declare function deserializeSkillInvocationStatusStateField(val: SerializedData): SkillInvocationStatusStateField;
export declare function serializeSkillInvocationStatusField(val: SkillInvocationStatusField): SerializedData;
export declare function deserializeSkillInvocationStatusField(val: SerializedData): SkillInvocationStatusField;
export declare function serializeSkillInvocationEnterpriseTypeField(val: SkillInvocationEnterpriseTypeField): SerializedData;
export declare function deserializeSkillInvocationEnterpriseTypeField(val: SerializedData): SkillInvocationEnterpriseTypeField;
export declare function serializeSkillInvocationEnterpriseField(val: SkillInvocationEnterpriseField): SerializedData;
export declare function deserializeSkillInvocationEnterpriseField(val: SerializedData): SkillInvocationEnterpriseField;
export declare function serializeSkillInvocation(val: SkillInvocation): SerializedData;
export declare function deserializeSkillInvocation(val: SerializedData): SkillInvocation;
