import { ClassificationTemplate } from '../schemas/classificationTemplate.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { CancellationToken } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export declare class AddClassificationOptionals {
    readonly headers: AddClassificationHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<AddClassificationOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<AddClassificationOptionals, 'headers' | 'cancellationToken'>>);
}
export interface AddClassificationOptionalsInput {
    readonly headers?: AddClassificationHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class UpdateClassificationOptionals {
    readonly headers: UpdateClassificationHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<UpdateClassificationOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<UpdateClassificationOptionals, 'headers' | 'cancellationToken'>>);
}
export interface UpdateClassificationOptionalsInput {
    readonly headers?: UpdateClassificationHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class CreateClassificationTemplateOptionals {
    readonly headers: CreateClassificationTemplateHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<CreateClassificationTemplateOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<CreateClassificationTemplateOptionals, 'headers' | 'cancellationToken'>>);
}
export interface CreateClassificationTemplateOptionalsInput {
    readonly headers?: CreateClassificationTemplateHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetClassificationTemplateHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetClassificationTemplateHeaders, 'extraHeaders'> & Partial<Pick<GetClassificationTemplateHeaders, 'extraHeaders'>>);
}
export interface GetClassificationTemplateHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export type AddClassificationRequestBodyOpField = 'addEnumOption';
export type AddClassificationRequestBodyFieldKeyField = 'Box__Security__Classification__Key';
export interface AddClassificationRequestBodyDataStaticConfigClassificationField {
    readonly classificationDefinition?: string;
    readonly colorId?: number;
}
export interface AddClassificationRequestBodyDataStaticConfigField {
    readonly classification?: AddClassificationRequestBodyDataStaticConfigClassificationField;
}
export interface AddClassificationRequestBodyDataField {
    readonly key: string;
    readonly staticConfig?: AddClassificationRequestBodyDataStaticConfigField;
}
export declare class AddClassificationRequestBody {
    readonly op: AddClassificationRequestBodyOpField;
    readonly fieldKey: AddClassificationRequestBodyFieldKeyField;
    readonly data: AddClassificationRequestBodyDataField;
    constructor(fields: Omit<AddClassificationRequestBody, 'op' | 'fieldKey'> & Partial<Pick<AddClassificationRequestBody, 'op' | 'fieldKey'>>);
}
export interface AddClassificationRequestBodyInput {
    readonly op?: AddClassificationRequestBodyOpField;
    readonly fieldKey?: AddClassificationRequestBodyFieldKeyField;
    readonly data: AddClassificationRequestBodyDataField;
}
export declare class AddClassificationHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<AddClassificationHeaders, 'extraHeaders'> & Partial<Pick<AddClassificationHeaders, 'extraHeaders'>>);
}
export interface AddClassificationHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export type UpdateClassificationRequestBodyOpField = 'editEnumOption';
export type UpdateClassificationRequestBodyFieldKeyField = 'Box__Security__Classification__Key';
export interface UpdateClassificationRequestBodyDataStaticConfigClassificationField {
    readonly classificationDefinition?: string;
    readonly colorId?: number;
}
export interface UpdateClassificationRequestBodyDataStaticConfigField {
    readonly classification?: UpdateClassificationRequestBodyDataStaticConfigClassificationField;
}
export interface UpdateClassificationRequestBodyDataField {
    readonly key: string;
    readonly staticConfig?: UpdateClassificationRequestBodyDataStaticConfigField;
}
export declare class UpdateClassificationRequestBody {
    readonly op: UpdateClassificationRequestBodyOpField;
    readonly fieldKey: UpdateClassificationRequestBodyFieldKeyField;
    readonly enumOptionKey: string;
    readonly data: UpdateClassificationRequestBodyDataField;
    constructor(fields: Omit<UpdateClassificationRequestBody, 'op' | 'fieldKey'> & Partial<Pick<UpdateClassificationRequestBody, 'op' | 'fieldKey'>>);
}
export interface UpdateClassificationRequestBodyInput {
    readonly op?: UpdateClassificationRequestBodyOpField;
    readonly fieldKey?: UpdateClassificationRequestBodyFieldKeyField;
    readonly enumOptionKey: string;
    readonly data: UpdateClassificationRequestBodyDataField;
}
export declare class UpdateClassificationHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<UpdateClassificationHeaders, 'extraHeaders'> & Partial<Pick<UpdateClassificationHeaders, 'extraHeaders'>>);
}
export interface UpdateClassificationHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export type CreateClassificationTemplateRequestBodyScopeField = 'enterprise';
export type CreateClassificationTemplateRequestBodyTemplateKeyField = 'securityClassification-6VMVochwUWo';
export type CreateClassificationTemplateRequestBodyDisplayNameField = 'Classification';
export type CreateClassificationTemplateRequestBodyFieldsTypeField = 'enum';
export type CreateClassificationTemplateRequestBodyFieldsKeyField = 'Box__Security__Classification__Key';
export type CreateClassificationTemplateRequestBodyFieldsDisplayNameField = 'Classification';
export interface CreateClassificationTemplateRequestBodyFieldsOptionsStaticConfigClassificationField {
    readonly classificationDefinition?: string;
    readonly colorId?: number;
}
export interface CreateClassificationTemplateRequestBodyFieldsOptionsStaticConfigField {
    readonly classification?: CreateClassificationTemplateRequestBodyFieldsOptionsStaticConfigClassificationField;
}
export interface CreateClassificationTemplateRequestBodyFieldsOptionsField {
    readonly key: string;
    readonly staticConfig?: CreateClassificationTemplateRequestBodyFieldsOptionsStaticConfigField;
}
export declare class CreateClassificationTemplateRequestBodyFieldsField {
    readonly type: CreateClassificationTemplateRequestBodyFieldsTypeField;
    readonly key: CreateClassificationTemplateRequestBodyFieldsKeyField;
    readonly displayName: CreateClassificationTemplateRequestBodyFieldsDisplayNameField;
    readonly hidden?: boolean;
    readonly options: readonly CreateClassificationTemplateRequestBodyFieldsOptionsField[];
    constructor(fields: Omit<CreateClassificationTemplateRequestBodyFieldsField, 'type' | 'key' | 'displayName'> & Partial<Pick<CreateClassificationTemplateRequestBodyFieldsField, 'type' | 'key' | 'displayName'>>);
}
export interface CreateClassificationTemplateRequestBodyFieldsFieldInput {
    readonly type?: CreateClassificationTemplateRequestBodyFieldsTypeField;
    readonly key?: CreateClassificationTemplateRequestBodyFieldsKeyField;
    readonly displayName?: CreateClassificationTemplateRequestBodyFieldsDisplayNameField;
    readonly hidden?: boolean;
    readonly options: readonly CreateClassificationTemplateRequestBodyFieldsOptionsField[];
}
export declare class CreateClassificationTemplateRequestBody {
    readonly scope: CreateClassificationTemplateRequestBodyScopeField;
    readonly templateKey: CreateClassificationTemplateRequestBodyTemplateKeyField;
    readonly displayName: CreateClassificationTemplateRequestBodyDisplayNameField;
    readonly hidden?: boolean;
    readonly copyInstanceOnItemCopy?: boolean;
    readonly fields: readonly CreateClassificationTemplateRequestBodyFieldsField[];
    constructor(fields: Omit<CreateClassificationTemplateRequestBody, 'scope' | 'templateKey' | 'displayName'> & Partial<Pick<CreateClassificationTemplateRequestBody, 'scope' | 'templateKey' | 'displayName'>>);
}
export interface CreateClassificationTemplateRequestBodyInput {
    readonly scope?: CreateClassificationTemplateRequestBodyScopeField;
    readonly templateKey?: CreateClassificationTemplateRequestBodyTemplateKeyField;
    readonly displayName?: CreateClassificationTemplateRequestBodyDisplayNameField;
    readonly hidden?: boolean;
    readonly copyInstanceOnItemCopy?: boolean;
    readonly fields: readonly CreateClassificationTemplateRequestBodyFieldsField[];
}
export declare class CreateClassificationTemplateHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<CreateClassificationTemplateHeaders, 'extraHeaders'> & Partial<Pick<CreateClassificationTemplateHeaders, 'extraHeaders'>>);
}
export interface CreateClassificationTemplateHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class ClassificationsManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<ClassificationsManager, 'networkSession' | 'getClassificationTemplate' | 'addClassification' | 'updateClassification' | 'createClassificationTemplate'> & Partial<Pick<ClassificationsManager, 'networkSession'>>);
    getClassificationTemplate(headersInput?: GetClassificationTemplateHeadersInput, cancellationToken?: CancellationToken): Promise<ClassificationTemplate>;
    addClassification(requestBody: readonly AddClassificationRequestBody[], optionalsInput?: AddClassificationOptionalsInput): Promise<ClassificationTemplate>;
    updateClassification(requestBody: readonly UpdateClassificationRequestBody[], optionalsInput?: UpdateClassificationOptionalsInput): Promise<ClassificationTemplate>;
    createClassificationTemplate(requestBodyInput: CreateClassificationTemplateRequestBodyInput, optionalsInput?: CreateClassificationTemplateOptionalsInput): Promise<ClassificationTemplate>;
}
export interface ClassificationsManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
export declare function serializeAddClassificationRequestBodyOpField(val: AddClassificationRequestBodyOpField): SerializedData;
export declare function deserializeAddClassificationRequestBodyOpField(val: SerializedData): AddClassificationRequestBodyOpField;
export declare function serializeAddClassificationRequestBodyFieldKeyField(val: AddClassificationRequestBodyFieldKeyField): SerializedData;
export declare function deserializeAddClassificationRequestBodyFieldKeyField(val: SerializedData): AddClassificationRequestBodyFieldKeyField;
export declare function serializeAddClassificationRequestBodyDataStaticConfigClassificationField(val: AddClassificationRequestBodyDataStaticConfigClassificationField): SerializedData;
export declare function deserializeAddClassificationRequestBodyDataStaticConfigClassificationField(val: SerializedData): AddClassificationRequestBodyDataStaticConfigClassificationField;
export declare function serializeAddClassificationRequestBodyDataStaticConfigField(val: AddClassificationRequestBodyDataStaticConfigField): SerializedData;
export declare function deserializeAddClassificationRequestBodyDataStaticConfigField(val: SerializedData): AddClassificationRequestBodyDataStaticConfigField;
export declare function serializeAddClassificationRequestBodyDataField(val: AddClassificationRequestBodyDataField): SerializedData;
export declare function deserializeAddClassificationRequestBodyDataField(val: SerializedData): AddClassificationRequestBodyDataField;
export declare function serializeAddClassificationRequestBody(val: AddClassificationRequestBody): SerializedData;
export declare function deserializeAddClassificationRequestBody(val: SerializedData): AddClassificationRequestBody;
export declare function serializeAddClassificationRequestBodyInput(val: AddClassificationRequestBodyInput): SerializedData;
export declare function deserializeAddClassificationRequestBodyInput(val: SerializedData): AddClassificationRequestBodyInput;
export declare function serializeUpdateClassificationRequestBodyOpField(val: UpdateClassificationRequestBodyOpField): SerializedData;
export declare function deserializeUpdateClassificationRequestBodyOpField(val: SerializedData): UpdateClassificationRequestBodyOpField;
export declare function serializeUpdateClassificationRequestBodyFieldKeyField(val: UpdateClassificationRequestBodyFieldKeyField): SerializedData;
export declare function deserializeUpdateClassificationRequestBodyFieldKeyField(val: SerializedData): UpdateClassificationRequestBodyFieldKeyField;
export declare function serializeUpdateClassificationRequestBodyDataStaticConfigClassificationField(val: UpdateClassificationRequestBodyDataStaticConfigClassificationField): SerializedData;
export declare function deserializeUpdateClassificationRequestBodyDataStaticConfigClassificationField(val: SerializedData): UpdateClassificationRequestBodyDataStaticConfigClassificationField;
export declare function serializeUpdateClassificationRequestBodyDataStaticConfigField(val: UpdateClassificationRequestBodyDataStaticConfigField): SerializedData;
export declare function deserializeUpdateClassificationRequestBodyDataStaticConfigField(val: SerializedData): UpdateClassificationRequestBodyDataStaticConfigField;
export declare function serializeUpdateClassificationRequestBodyDataField(val: UpdateClassificationRequestBodyDataField): SerializedData;
export declare function deserializeUpdateClassificationRequestBodyDataField(val: SerializedData): UpdateClassificationRequestBodyDataField;
export declare function serializeUpdateClassificationRequestBody(val: UpdateClassificationRequestBody): SerializedData;
export declare function deserializeUpdateClassificationRequestBody(val: SerializedData): UpdateClassificationRequestBody;
export declare function serializeUpdateClassificationRequestBodyInput(val: UpdateClassificationRequestBodyInput): SerializedData;
export declare function deserializeUpdateClassificationRequestBodyInput(val: SerializedData): UpdateClassificationRequestBodyInput;
export declare function serializeCreateClassificationTemplateRequestBodyScopeField(val: CreateClassificationTemplateRequestBodyScopeField): SerializedData;
export declare function deserializeCreateClassificationTemplateRequestBodyScopeField(val: SerializedData): CreateClassificationTemplateRequestBodyScopeField;
export declare function serializeCreateClassificationTemplateRequestBodyTemplateKeyField(val: CreateClassificationTemplateRequestBodyTemplateKeyField): SerializedData;
export declare function deserializeCreateClassificationTemplateRequestBodyTemplateKeyField(val: SerializedData): CreateClassificationTemplateRequestBodyTemplateKeyField;
export declare function serializeCreateClassificationTemplateRequestBodyDisplayNameField(val: CreateClassificationTemplateRequestBodyDisplayNameField): SerializedData;
export declare function deserializeCreateClassificationTemplateRequestBodyDisplayNameField(val: SerializedData): CreateClassificationTemplateRequestBodyDisplayNameField;
export declare function serializeCreateClassificationTemplateRequestBodyFieldsTypeField(val: CreateClassificationTemplateRequestBodyFieldsTypeField): SerializedData;
export declare function deserializeCreateClassificationTemplateRequestBodyFieldsTypeField(val: SerializedData): CreateClassificationTemplateRequestBodyFieldsTypeField;
export declare function serializeCreateClassificationTemplateRequestBodyFieldsKeyField(val: CreateClassificationTemplateRequestBodyFieldsKeyField): SerializedData;
export declare function deserializeCreateClassificationTemplateRequestBodyFieldsKeyField(val: SerializedData): CreateClassificationTemplateRequestBodyFieldsKeyField;
export declare function serializeCreateClassificationTemplateRequestBodyFieldsDisplayNameField(val: CreateClassificationTemplateRequestBodyFieldsDisplayNameField): SerializedData;
export declare function deserializeCreateClassificationTemplateRequestBodyFieldsDisplayNameField(val: SerializedData): CreateClassificationTemplateRequestBodyFieldsDisplayNameField;
export declare function serializeCreateClassificationTemplateRequestBodyFieldsOptionsStaticConfigClassificationField(val: CreateClassificationTemplateRequestBodyFieldsOptionsStaticConfigClassificationField): SerializedData;
export declare function deserializeCreateClassificationTemplateRequestBodyFieldsOptionsStaticConfigClassificationField(val: SerializedData): CreateClassificationTemplateRequestBodyFieldsOptionsStaticConfigClassificationField;
export declare function serializeCreateClassificationTemplateRequestBodyFieldsOptionsStaticConfigField(val: CreateClassificationTemplateRequestBodyFieldsOptionsStaticConfigField): SerializedData;
export declare function deserializeCreateClassificationTemplateRequestBodyFieldsOptionsStaticConfigField(val: SerializedData): CreateClassificationTemplateRequestBodyFieldsOptionsStaticConfigField;
export declare function serializeCreateClassificationTemplateRequestBodyFieldsOptionsField(val: CreateClassificationTemplateRequestBodyFieldsOptionsField): SerializedData;
export declare function deserializeCreateClassificationTemplateRequestBodyFieldsOptionsField(val: SerializedData): CreateClassificationTemplateRequestBodyFieldsOptionsField;
export declare function serializeCreateClassificationTemplateRequestBodyFieldsField(val: CreateClassificationTemplateRequestBodyFieldsField): SerializedData;
export declare function deserializeCreateClassificationTemplateRequestBodyFieldsField(val: SerializedData): CreateClassificationTemplateRequestBodyFieldsField;
export declare function serializeCreateClassificationTemplateRequestBodyFieldsFieldInput(val: CreateClassificationTemplateRequestBodyFieldsFieldInput): SerializedData;
export declare function deserializeCreateClassificationTemplateRequestBodyFieldsFieldInput(val: SerializedData): CreateClassificationTemplateRequestBodyFieldsFieldInput;
export declare function serializeCreateClassificationTemplateRequestBody(val: CreateClassificationTemplateRequestBody): SerializedData;
export declare function deserializeCreateClassificationTemplateRequestBody(val: SerializedData): CreateClassificationTemplateRequestBody;
export declare function serializeCreateClassificationTemplateRequestBodyInput(val: CreateClassificationTemplateRequestBodyInput): SerializedData;
export declare function deserializeCreateClassificationTemplateRequestBodyInput(val: SerializedData): CreateClassificationTemplateRequestBodyInput;
