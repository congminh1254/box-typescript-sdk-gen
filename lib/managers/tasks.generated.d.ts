import { Tasks } from '../schemas/tasks.generated.js';
import { Task } from '../schemas/task.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { CancellationToken } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
import { DateTime } from '../internal/utils.js';
export declare class GetFileTasksOptionals {
    readonly headers: GetFileTasksHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetFileTasksOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<GetFileTasksOptionals, 'headers' | 'cancellationToken'>>);
}
export interface GetFileTasksOptionalsInput {
    readonly headers?: GetFileTasksHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class CreateTaskOptionals {
    readonly headers: CreateTaskHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<CreateTaskOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<CreateTaskOptionals, 'headers' | 'cancellationToken'>>);
}
export interface CreateTaskOptionalsInput {
    readonly headers?: CreateTaskHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetTaskByIdOptionals {
    readonly headers: GetTaskByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetTaskByIdOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<GetTaskByIdOptionals, 'headers' | 'cancellationToken'>>);
}
export interface GetTaskByIdOptionalsInput {
    readonly headers?: GetTaskByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class UpdateTaskByIdOptionals {
    readonly requestBody: UpdateTaskByIdRequestBody;
    readonly headers: UpdateTaskByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<UpdateTaskByIdOptionals, 'requestBody' | 'headers' | 'cancellationToken'> & Partial<Pick<UpdateTaskByIdOptionals, 'requestBody' | 'headers' | 'cancellationToken'>>);
}
export interface UpdateTaskByIdOptionalsInput {
    readonly requestBody?: UpdateTaskByIdRequestBody;
    readonly headers?: UpdateTaskByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class DeleteTaskByIdOptionals {
    readonly headers: DeleteTaskByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<DeleteTaskByIdOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<DeleteTaskByIdOptionals, 'headers' | 'cancellationToken'>>);
}
export interface DeleteTaskByIdOptionalsInput {
    readonly headers?: DeleteTaskByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetFileTasksHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetFileTasksHeaders, 'extraHeaders'> & Partial<Pick<GetFileTasksHeaders, 'extraHeaders'>>);
}
export interface GetFileTasksHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export type CreateTaskRequestBodyItemTypeField = 'file';
export interface CreateTaskRequestBodyItemField {
    readonly id?: string;
    readonly type?: CreateTaskRequestBodyItemTypeField;
}
export type CreateTaskRequestBodyActionField = 'review' | 'complete';
export type CreateTaskRequestBodyCompletionRuleField = 'all_assignees' | 'any_assignee';
export interface CreateTaskRequestBody {
    readonly item: CreateTaskRequestBodyItemField;
    readonly action?: CreateTaskRequestBodyActionField;
    readonly message?: string;
    readonly dueAt?: DateTime;
    readonly completionRule?: CreateTaskRequestBodyCompletionRuleField;
}
export declare class CreateTaskHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<CreateTaskHeaders, 'extraHeaders'> & Partial<Pick<CreateTaskHeaders, 'extraHeaders'>>);
}
export interface CreateTaskHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class GetTaskByIdHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetTaskByIdHeaders, 'extraHeaders'> & Partial<Pick<GetTaskByIdHeaders, 'extraHeaders'>>);
}
export interface GetTaskByIdHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export type UpdateTaskByIdRequestBodyActionField = 'review' | 'complete';
export type UpdateTaskByIdRequestBodyCompletionRuleField = 'all_assignees' | 'any_assignee';
export interface UpdateTaskByIdRequestBody {
    readonly action?: UpdateTaskByIdRequestBodyActionField;
    readonly message?: string;
    readonly dueAt?: DateTime;
    readonly completionRule?: UpdateTaskByIdRequestBodyCompletionRuleField;
}
export declare class UpdateTaskByIdHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<UpdateTaskByIdHeaders, 'extraHeaders'> & Partial<Pick<UpdateTaskByIdHeaders, 'extraHeaders'>>);
}
export interface UpdateTaskByIdHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class DeleteTaskByIdHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<DeleteTaskByIdHeaders, 'extraHeaders'> & Partial<Pick<DeleteTaskByIdHeaders, 'extraHeaders'>>);
}
export interface DeleteTaskByIdHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class TasksManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<TasksManager, 'networkSession' | 'getFileTasks' | 'createTask' | 'getTaskById' | 'updateTaskById' | 'deleteTaskById'> & Partial<Pick<TasksManager, 'networkSession'>>);
    getFileTasks(fileId: string, optionalsInput?: GetFileTasksOptionalsInput): Promise<Tasks>;
    createTask(requestBody: CreateTaskRequestBody, optionalsInput?: CreateTaskOptionalsInput): Promise<Task>;
    getTaskById(taskId: string, optionalsInput?: GetTaskByIdOptionalsInput): Promise<Task>;
    updateTaskById(taskId: string, optionalsInput?: UpdateTaskByIdOptionalsInput): Promise<Task>;
    deleteTaskById(taskId: string, optionalsInput?: DeleteTaskByIdOptionalsInput): Promise<undefined>;
}
export interface TasksManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
export declare function serializeCreateTaskRequestBodyItemTypeField(val: CreateTaskRequestBodyItemTypeField): SerializedData;
export declare function deserializeCreateTaskRequestBodyItemTypeField(val: SerializedData): CreateTaskRequestBodyItemTypeField;
export declare function serializeCreateTaskRequestBodyItemField(val: CreateTaskRequestBodyItemField): SerializedData;
export declare function deserializeCreateTaskRequestBodyItemField(val: SerializedData): CreateTaskRequestBodyItemField;
export declare function serializeCreateTaskRequestBodyActionField(val: CreateTaskRequestBodyActionField): SerializedData;
export declare function deserializeCreateTaskRequestBodyActionField(val: SerializedData): CreateTaskRequestBodyActionField;
export declare function serializeCreateTaskRequestBodyCompletionRuleField(val: CreateTaskRequestBodyCompletionRuleField): SerializedData;
export declare function deserializeCreateTaskRequestBodyCompletionRuleField(val: SerializedData): CreateTaskRequestBodyCompletionRuleField;
export declare function serializeCreateTaskRequestBody(val: CreateTaskRequestBody): SerializedData;
export declare function deserializeCreateTaskRequestBody(val: SerializedData): CreateTaskRequestBody;
export declare function serializeUpdateTaskByIdRequestBodyActionField(val: UpdateTaskByIdRequestBodyActionField): SerializedData;
export declare function deserializeUpdateTaskByIdRequestBodyActionField(val: SerializedData): UpdateTaskByIdRequestBodyActionField;
export declare function serializeUpdateTaskByIdRequestBodyCompletionRuleField(val: UpdateTaskByIdRequestBodyCompletionRuleField): SerializedData;
export declare function deserializeUpdateTaskByIdRequestBodyCompletionRuleField(val: SerializedData): UpdateTaskByIdRequestBodyCompletionRuleField;
export declare function serializeUpdateTaskByIdRequestBody(val: UpdateTaskByIdRequestBody): SerializedData;
export declare function deserializeUpdateTaskByIdRequestBody(val: SerializedData): UpdateTaskByIdRequestBody;
