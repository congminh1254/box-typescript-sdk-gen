import { TaskAssignments } from '../schemas/taskAssignments.generated.js';
import { TaskAssignment } from '../schemas/taskAssignment.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { CancellationToken } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export declare class GetTaskAssignmentsOptionals {
    readonly headers: GetTaskAssignmentsHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetTaskAssignmentsOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<GetTaskAssignmentsOptionals, 'headers' | 'cancellationToken'>>);
}
export interface GetTaskAssignmentsOptionalsInput {
    readonly headers?: GetTaskAssignmentsHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class CreateTaskAssignmentOptionals {
    readonly headers: CreateTaskAssignmentHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<CreateTaskAssignmentOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<CreateTaskAssignmentOptionals, 'headers' | 'cancellationToken'>>);
}
export interface CreateTaskAssignmentOptionalsInput {
    readonly headers?: CreateTaskAssignmentHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetTaskAssignmentByIdOptionals {
    readonly headers: GetTaskAssignmentByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetTaskAssignmentByIdOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<GetTaskAssignmentByIdOptionals, 'headers' | 'cancellationToken'>>);
}
export interface GetTaskAssignmentByIdOptionalsInput {
    readonly headers?: GetTaskAssignmentByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class UpdateTaskAssignmentByIdOptionals {
    readonly requestBody: UpdateTaskAssignmentByIdRequestBody;
    readonly headers: UpdateTaskAssignmentByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<UpdateTaskAssignmentByIdOptionals, 'requestBody' | 'headers' | 'cancellationToken'> & Partial<Pick<UpdateTaskAssignmentByIdOptionals, 'requestBody' | 'headers' | 'cancellationToken'>>);
}
export interface UpdateTaskAssignmentByIdOptionalsInput {
    readonly requestBody?: UpdateTaskAssignmentByIdRequestBody;
    readonly headers?: UpdateTaskAssignmentByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class DeleteTaskAssignmentByIdOptionals {
    readonly headers: DeleteTaskAssignmentByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<DeleteTaskAssignmentByIdOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<DeleteTaskAssignmentByIdOptionals, 'headers' | 'cancellationToken'>>);
}
export interface DeleteTaskAssignmentByIdOptionalsInput {
    readonly headers?: DeleteTaskAssignmentByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetTaskAssignmentsHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetTaskAssignmentsHeaders, 'extraHeaders'> & Partial<Pick<GetTaskAssignmentsHeaders, 'extraHeaders'>>);
}
export interface GetTaskAssignmentsHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export type CreateTaskAssignmentRequestBodyTaskTypeField = 'task';
export declare class CreateTaskAssignmentRequestBodyTaskField {
    readonly id: string;
    readonly type: CreateTaskAssignmentRequestBodyTaskTypeField;
    constructor(fields: Omit<CreateTaskAssignmentRequestBodyTaskField, 'type'> & Partial<Pick<CreateTaskAssignmentRequestBodyTaskField, 'type'>>);
}
export interface CreateTaskAssignmentRequestBodyTaskFieldInput {
    readonly id: string;
    readonly type?: CreateTaskAssignmentRequestBodyTaskTypeField;
}
export interface CreateTaskAssignmentRequestBodyAssignToField {
    readonly id?: string;
    readonly login?: string;
}
export interface CreateTaskAssignmentRequestBody {
    readonly task: CreateTaskAssignmentRequestBodyTaskField;
    readonly assignTo: CreateTaskAssignmentRequestBodyAssignToField;
}
export declare class CreateTaskAssignmentHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<CreateTaskAssignmentHeaders, 'extraHeaders'> & Partial<Pick<CreateTaskAssignmentHeaders, 'extraHeaders'>>);
}
export interface CreateTaskAssignmentHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class GetTaskAssignmentByIdHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetTaskAssignmentByIdHeaders, 'extraHeaders'> & Partial<Pick<GetTaskAssignmentByIdHeaders, 'extraHeaders'>>);
}
export interface GetTaskAssignmentByIdHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export type UpdateTaskAssignmentByIdRequestBodyResolutionStateField = 'completed' | 'incomplete' | 'approved' | 'rejected';
export interface UpdateTaskAssignmentByIdRequestBody {
    readonly message?: string;
    readonly resolutionState?: UpdateTaskAssignmentByIdRequestBodyResolutionStateField;
}
export declare class UpdateTaskAssignmentByIdHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<UpdateTaskAssignmentByIdHeaders, 'extraHeaders'> & Partial<Pick<UpdateTaskAssignmentByIdHeaders, 'extraHeaders'>>);
}
export interface UpdateTaskAssignmentByIdHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class DeleteTaskAssignmentByIdHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<DeleteTaskAssignmentByIdHeaders, 'extraHeaders'> & Partial<Pick<DeleteTaskAssignmentByIdHeaders, 'extraHeaders'>>);
}
export interface DeleteTaskAssignmentByIdHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class TaskAssignmentsManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<TaskAssignmentsManager, 'networkSession' | 'getTaskAssignments' | 'createTaskAssignment' | 'getTaskAssignmentById' | 'updateTaskAssignmentById' | 'deleteTaskAssignmentById'> & Partial<Pick<TaskAssignmentsManager, 'networkSession'>>);
    getTaskAssignments(taskId: string, optionalsInput?: GetTaskAssignmentsOptionalsInput): Promise<TaskAssignments>;
    createTaskAssignment(requestBody: CreateTaskAssignmentRequestBody, optionalsInput?: CreateTaskAssignmentOptionalsInput): Promise<TaskAssignment>;
    getTaskAssignmentById(taskAssignmentId: string, optionalsInput?: GetTaskAssignmentByIdOptionalsInput): Promise<TaskAssignment>;
    updateTaskAssignmentById(taskAssignmentId: string, optionalsInput?: UpdateTaskAssignmentByIdOptionalsInput): Promise<TaskAssignment>;
    deleteTaskAssignmentById(taskAssignmentId: string, optionalsInput?: DeleteTaskAssignmentByIdOptionalsInput): Promise<undefined>;
}
export interface TaskAssignmentsManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
export declare function serializeCreateTaskAssignmentRequestBodyTaskTypeField(val: CreateTaskAssignmentRequestBodyTaskTypeField): SerializedData;
export declare function deserializeCreateTaskAssignmentRequestBodyTaskTypeField(val: SerializedData): CreateTaskAssignmentRequestBodyTaskTypeField;
export declare function serializeCreateTaskAssignmentRequestBodyTaskField(val: CreateTaskAssignmentRequestBodyTaskField): SerializedData;
export declare function deserializeCreateTaskAssignmentRequestBodyTaskField(val: SerializedData): CreateTaskAssignmentRequestBodyTaskField;
export declare function serializeCreateTaskAssignmentRequestBodyTaskFieldInput(val: CreateTaskAssignmentRequestBodyTaskFieldInput): SerializedData;
export declare function deserializeCreateTaskAssignmentRequestBodyTaskFieldInput(val: SerializedData): CreateTaskAssignmentRequestBodyTaskFieldInput;
export declare function serializeCreateTaskAssignmentRequestBodyAssignToField(val: CreateTaskAssignmentRequestBodyAssignToField): SerializedData;
export declare function deserializeCreateTaskAssignmentRequestBodyAssignToField(val: SerializedData): CreateTaskAssignmentRequestBodyAssignToField;
export declare function serializeCreateTaskAssignmentRequestBody(val: CreateTaskAssignmentRequestBody): SerializedData;
export declare function deserializeCreateTaskAssignmentRequestBody(val: SerializedData): CreateTaskAssignmentRequestBody;
export declare function serializeUpdateTaskAssignmentByIdRequestBodyResolutionStateField(val: UpdateTaskAssignmentByIdRequestBodyResolutionStateField): SerializedData;
export declare function deserializeUpdateTaskAssignmentByIdRequestBodyResolutionStateField(val: SerializedData): UpdateTaskAssignmentByIdRequestBodyResolutionStateField;
export declare function serializeUpdateTaskAssignmentByIdRequestBody(val: UpdateTaskAssignmentByIdRequestBody): SerializedData;
export declare function deserializeUpdateTaskAssignmentByIdRequestBody(val: SerializedData): UpdateTaskAssignmentByIdRequestBody;
