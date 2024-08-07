import { SkillCardsMetadata } from '../schemas/skillCardsMetadata.generated.js';
import { KeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard } from '../schemas/keywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { CancellationToken } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export declare class GetBoxSkillCardsOnFileOptionals {
    readonly headers: GetBoxSkillCardsOnFileHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetBoxSkillCardsOnFileOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<GetBoxSkillCardsOnFileOptionals, 'headers' | 'cancellationToken'>>);
}
export interface GetBoxSkillCardsOnFileOptionalsInput {
    readonly headers?: GetBoxSkillCardsOnFileHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class CreateBoxSkillCardsOnFileOptionals {
    readonly headers: CreateBoxSkillCardsOnFileHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<CreateBoxSkillCardsOnFileOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<CreateBoxSkillCardsOnFileOptionals, 'headers' | 'cancellationToken'>>);
}
export interface CreateBoxSkillCardsOnFileOptionalsInput {
    readonly headers?: CreateBoxSkillCardsOnFileHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class UpdateBoxSkillCardsOnFileOptionals {
    readonly headers: UpdateBoxSkillCardsOnFileHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<UpdateBoxSkillCardsOnFileOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<UpdateBoxSkillCardsOnFileOptionals, 'headers' | 'cancellationToken'>>);
}
export interface UpdateBoxSkillCardsOnFileOptionalsInput {
    readonly headers?: UpdateBoxSkillCardsOnFileHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class DeleteBoxSkillCardsFromFileOptionals {
    readonly headers: DeleteBoxSkillCardsFromFileHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<DeleteBoxSkillCardsFromFileOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<DeleteBoxSkillCardsFromFileOptionals, 'headers' | 'cancellationToken'>>);
}
export interface DeleteBoxSkillCardsFromFileOptionalsInput {
    readonly headers?: DeleteBoxSkillCardsFromFileHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class UpdateAllSkillCardsOnFileOptionals {
    readonly headers: UpdateAllSkillCardsOnFileHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<UpdateAllSkillCardsOnFileOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<UpdateAllSkillCardsOnFileOptionals, 'headers' | 'cancellationToken'>>);
}
export interface UpdateAllSkillCardsOnFileOptionalsInput {
    readonly headers?: UpdateAllSkillCardsOnFileHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetBoxSkillCardsOnFileHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetBoxSkillCardsOnFileHeaders, 'extraHeaders'> & Partial<Pick<GetBoxSkillCardsOnFileHeaders, 'extraHeaders'>>);
}
export interface GetBoxSkillCardsOnFileHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export interface CreateBoxSkillCardsOnFileRequestBody {
    readonly cards: readonly KeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard[];
}
export declare class CreateBoxSkillCardsOnFileHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<CreateBoxSkillCardsOnFileHeaders, 'extraHeaders'> & Partial<Pick<CreateBoxSkillCardsOnFileHeaders, 'extraHeaders'>>);
}
export interface CreateBoxSkillCardsOnFileHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export type UpdateBoxSkillCardsOnFileRequestBodyOpField = 'replace';
export interface UpdateBoxSkillCardsOnFileRequestBody {
    readonly op?: UpdateBoxSkillCardsOnFileRequestBodyOpField;
    readonly path?: string;
    readonly value?: KeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard;
}
export declare class UpdateBoxSkillCardsOnFileHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<UpdateBoxSkillCardsOnFileHeaders, 'extraHeaders'> & Partial<Pick<UpdateBoxSkillCardsOnFileHeaders, 'extraHeaders'>>);
}
export interface UpdateBoxSkillCardsOnFileHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class DeleteBoxSkillCardsFromFileHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<DeleteBoxSkillCardsFromFileHeaders, 'extraHeaders'> & Partial<Pick<DeleteBoxSkillCardsFromFileHeaders, 'extraHeaders'>>);
}
export interface DeleteBoxSkillCardsFromFileHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export type UpdateAllSkillCardsOnFileRequestBodyStatusField = 'invoked' | 'processing' | 'success' | 'transient_failure' | 'permanent_failure';
export interface UpdateAllSkillCardsOnFileRequestBodyMetadataField {
    readonly cards?: readonly KeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard[];
}
export type UpdateAllSkillCardsOnFileRequestBodyFileTypeField = 'file';
export interface UpdateAllSkillCardsOnFileRequestBodyFileField {
    readonly type?: UpdateAllSkillCardsOnFileRequestBodyFileTypeField;
    readonly id?: string;
}
export type UpdateAllSkillCardsOnFileRequestBodyFileVersionTypeField = 'file_version';
export interface UpdateAllSkillCardsOnFileRequestBodyFileVersionField {
    readonly type?: UpdateAllSkillCardsOnFileRequestBodyFileVersionTypeField;
    readonly id?: string;
}
export interface UpdateAllSkillCardsOnFileRequestBodyUsageField {
    readonly unit?: string;
    readonly value?: number;
}
export interface UpdateAllSkillCardsOnFileRequestBody {
    readonly status: UpdateAllSkillCardsOnFileRequestBodyStatusField;
    readonly metadata: UpdateAllSkillCardsOnFileRequestBodyMetadataField;
    readonly file: UpdateAllSkillCardsOnFileRequestBodyFileField;
    readonly fileVersion?: UpdateAllSkillCardsOnFileRequestBodyFileVersionField;
    readonly usage?: UpdateAllSkillCardsOnFileRequestBodyUsageField;
}
export declare class UpdateAllSkillCardsOnFileHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<UpdateAllSkillCardsOnFileHeaders, 'extraHeaders'> & Partial<Pick<UpdateAllSkillCardsOnFileHeaders, 'extraHeaders'>>);
}
export interface UpdateAllSkillCardsOnFileHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class SkillsManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<SkillsManager, 'networkSession' | 'getBoxSkillCardsOnFile' | 'createBoxSkillCardsOnFile' | 'updateBoxSkillCardsOnFile' | 'deleteBoxSkillCardsFromFile' | 'updateAllSkillCardsOnFile'> & Partial<Pick<SkillsManager, 'networkSession'>>);
    getBoxSkillCardsOnFile(fileId: string, optionalsInput?: GetBoxSkillCardsOnFileOptionalsInput): Promise<SkillCardsMetadata>;
    createBoxSkillCardsOnFile(fileId: string, requestBody: CreateBoxSkillCardsOnFileRequestBody, optionalsInput?: CreateBoxSkillCardsOnFileOptionalsInput): Promise<SkillCardsMetadata>;
    updateBoxSkillCardsOnFile(fileId: string, requestBody: readonly UpdateBoxSkillCardsOnFileRequestBody[], optionalsInput?: UpdateBoxSkillCardsOnFileOptionalsInput): Promise<SkillCardsMetadata>;
    deleteBoxSkillCardsFromFile(fileId: string, optionalsInput?: DeleteBoxSkillCardsFromFileOptionalsInput): Promise<undefined>;
    updateAllSkillCardsOnFile(skillId: string, requestBody: UpdateAllSkillCardsOnFileRequestBody, optionalsInput?: UpdateAllSkillCardsOnFileOptionalsInput): Promise<undefined>;
}
export interface SkillsManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
export declare function serializeCreateBoxSkillCardsOnFileRequestBody(val: CreateBoxSkillCardsOnFileRequestBody): SerializedData;
export declare function deserializeCreateBoxSkillCardsOnFileRequestBody(val: SerializedData): CreateBoxSkillCardsOnFileRequestBody;
export declare function serializeUpdateBoxSkillCardsOnFileRequestBodyOpField(val: UpdateBoxSkillCardsOnFileRequestBodyOpField): SerializedData;
export declare function deserializeUpdateBoxSkillCardsOnFileRequestBodyOpField(val: SerializedData): UpdateBoxSkillCardsOnFileRequestBodyOpField;
export declare function serializeUpdateBoxSkillCardsOnFileRequestBody(val: UpdateBoxSkillCardsOnFileRequestBody): SerializedData;
export declare function deserializeUpdateBoxSkillCardsOnFileRequestBody(val: SerializedData): UpdateBoxSkillCardsOnFileRequestBody;
export declare function serializeUpdateAllSkillCardsOnFileRequestBodyStatusField(val: UpdateAllSkillCardsOnFileRequestBodyStatusField): SerializedData;
export declare function deserializeUpdateAllSkillCardsOnFileRequestBodyStatusField(val: SerializedData): UpdateAllSkillCardsOnFileRequestBodyStatusField;
export declare function serializeUpdateAllSkillCardsOnFileRequestBodyMetadataField(val: UpdateAllSkillCardsOnFileRequestBodyMetadataField): SerializedData;
export declare function deserializeUpdateAllSkillCardsOnFileRequestBodyMetadataField(val: SerializedData): UpdateAllSkillCardsOnFileRequestBodyMetadataField;
export declare function serializeUpdateAllSkillCardsOnFileRequestBodyFileTypeField(val: UpdateAllSkillCardsOnFileRequestBodyFileTypeField): SerializedData;
export declare function deserializeUpdateAllSkillCardsOnFileRequestBodyFileTypeField(val: SerializedData): UpdateAllSkillCardsOnFileRequestBodyFileTypeField;
export declare function serializeUpdateAllSkillCardsOnFileRequestBodyFileField(val: UpdateAllSkillCardsOnFileRequestBodyFileField): SerializedData;
export declare function deserializeUpdateAllSkillCardsOnFileRequestBodyFileField(val: SerializedData): UpdateAllSkillCardsOnFileRequestBodyFileField;
export declare function serializeUpdateAllSkillCardsOnFileRequestBodyFileVersionTypeField(val: UpdateAllSkillCardsOnFileRequestBodyFileVersionTypeField): SerializedData;
export declare function deserializeUpdateAllSkillCardsOnFileRequestBodyFileVersionTypeField(val: SerializedData): UpdateAllSkillCardsOnFileRequestBodyFileVersionTypeField;
export declare function serializeUpdateAllSkillCardsOnFileRequestBodyFileVersionField(val: UpdateAllSkillCardsOnFileRequestBodyFileVersionField): SerializedData;
export declare function deserializeUpdateAllSkillCardsOnFileRequestBodyFileVersionField(val: SerializedData): UpdateAllSkillCardsOnFileRequestBodyFileVersionField;
export declare function serializeUpdateAllSkillCardsOnFileRequestBodyUsageField(val: UpdateAllSkillCardsOnFileRequestBodyUsageField): SerializedData;
export declare function deserializeUpdateAllSkillCardsOnFileRequestBodyUsageField(val: SerializedData): UpdateAllSkillCardsOnFileRequestBodyUsageField;
export declare function serializeUpdateAllSkillCardsOnFileRequestBody(val: UpdateAllSkillCardsOnFileRequestBody): SerializedData;
export declare function deserializeUpdateAllSkillCardsOnFileRequestBody(val: SerializedData): UpdateAllSkillCardsOnFileRequestBody;
