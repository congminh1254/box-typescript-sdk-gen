import { Workflows } from '../schemas/workflows.generated.js';
import { Outcome } from '../schemas/outcome.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { CancellationToken } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export declare class GetWorkflowsOptionals {
    readonly headers: GetWorkflowsHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetWorkflowsOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<GetWorkflowsOptionals, 'headers' | 'cancellationToken'>>);
}
export interface GetWorkflowsOptionalsInput {
    readonly headers?: GetWorkflowsHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class StartWorkflowOptionals {
    readonly headers: StartWorkflowHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<StartWorkflowOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<StartWorkflowOptionals, 'headers' | 'cancellationToken'>>);
}
export interface StartWorkflowOptionalsInput {
    readonly headers?: StartWorkflowHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export interface GetWorkflowsQueryParams {
    readonly folderId: string;
    readonly triggerType?: string;
    readonly limit?: number;
    readonly marker?: string;
}
export declare class GetWorkflowsHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetWorkflowsHeaders, 'extraHeaders'> & Partial<Pick<GetWorkflowsHeaders, 'extraHeaders'>>);
}
export interface GetWorkflowsHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export type StartWorkflowRequestBodyTypeField = 'workflow_parameters';
export interface StartWorkflowRequestBodyFlowField {
    readonly type?: string;
    readonly id?: string;
}
export type StartWorkflowRequestBodyFilesTypeField = 'file';
export interface StartWorkflowRequestBodyFilesField {
    readonly type?: StartWorkflowRequestBodyFilesTypeField;
    readonly id?: string;
}
export type StartWorkflowRequestBodyFolderTypeField = 'folder';
export interface StartWorkflowRequestBodyFolderField {
    readonly type?: StartWorkflowRequestBodyFolderTypeField;
    readonly id?: string;
}
export interface StartWorkflowRequestBody {
    readonly type?: StartWorkflowRequestBodyTypeField;
    readonly flow: StartWorkflowRequestBodyFlowField;
    readonly files: readonly StartWorkflowRequestBodyFilesField[];
    readonly folder: StartWorkflowRequestBodyFolderField;
    readonly outcomes?: readonly Outcome[];
}
export declare class StartWorkflowHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<StartWorkflowHeaders, 'extraHeaders'> & Partial<Pick<StartWorkflowHeaders, 'extraHeaders'>>);
}
export interface StartWorkflowHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class WorkflowsManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<WorkflowsManager, 'networkSession' | 'getWorkflows' | 'startWorkflow'> & Partial<Pick<WorkflowsManager, 'networkSession'>>);
    getWorkflows(queryParams: GetWorkflowsQueryParams, optionalsInput?: GetWorkflowsOptionalsInput): Promise<Workflows>;
    startWorkflow(workflowId: string, requestBody: StartWorkflowRequestBody, optionalsInput?: StartWorkflowOptionalsInput): Promise<undefined>;
}
export interface WorkflowsManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
export declare function serializeStartWorkflowRequestBodyTypeField(val: StartWorkflowRequestBodyTypeField): SerializedData;
export declare function deserializeStartWorkflowRequestBodyTypeField(val: SerializedData): StartWorkflowRequestBodyTypeField;
export declare function serializeStartWorkflowRequestBodyFlowField(val: StartWorkflowRequestBodyFlowField): SerializedData;
export declare function deserializeStartWorkflowRequestBodyFlowField(val: SerializedData): StartWorkflowRequestBodyFlowField;
export declare function serializeStartWorkflowRequestBodyFilesTypeField(val: StartWorkflowRequestBodyFilesTypeField): SerializedData;
export declare function deserializeStartWorkflowRequestBodyFilesTypeField(val: SerializedData): StartWorkflowRequestBodyFilesTypeField;
export declare function serializeStartWorkflowRequestBodyFilesField(val: StartWorkflowRequestBodyFilesField): SerializedData;
export declare function deserializeStartWorkflowRequestBodyFilesField(val: SerializedData): StartWorkflowRequestBodyFilesField;
export declare function serializeStartWorkflowRequestBodyFolderTypeField(val: StartWorkflowRequestBodyFolderTypeField): SerializedData;
export declare function deserializeStartWorkflowRequestBodyFolderTypeField(val: SerializedData): StartWorkflowRequestBodyFolderTypeField;
export declare function serializeStartWorkflowRequestBodyFolderField(val: StartWorkflowRequestBodyFolderField): SerializedData;
export declare function deserializeStartWorkflowRequestBodyFolderField(val: SerializedData): StartWorkflowRequestBodyFolderField;
export declare function serializeStartWorkflowRequestBody(val: StartWorkflowRequestBody): SerializedData;
export declare function deserializeStartWorkflowRequestBody(val: SerializedData): StartWorkflowRequestBody;
