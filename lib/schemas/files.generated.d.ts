import { FileFull } from './fileFull.generated.js';
import { SerializedData } from '../serialization/json.js';
export interface Files {
    readonly totalCount?: number;
    readonly entries?: readonly FileFull[];
}
export declare function serializeFiles(val: Files): SerializedData;
export declare function deserializeFiles(val: SerializedData): Files;
