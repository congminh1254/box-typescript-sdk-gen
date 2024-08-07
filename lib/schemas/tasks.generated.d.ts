import { Task } from './task.generated.js';
import { SerializedData } from '../serialization/json.js';
export interface Tasks {
    readonly totalCount?: number;
    readonly entries?: readonly Task[];
}
export declare function serializeTasks(val: Tasks): SerializedData;
export declare function deserializeTasks(val: SerializedData): Tasks;
