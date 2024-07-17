import { ClientError } from './clientError.generated.js';
import { FileConflict } from './fileConflict.generated.js';
import { SerializedData } from '../serialization/json.js';
export interface ConflictErrorContextInfoField {
    readonly conflicts?: readonly FileConflict[];
}
export type ConflictError = ClientError & {};
export declare function serializeConflictErrorContextInfoField(val: ConflictErrorContextInfoField): SerializedData;
export declare function deserializeConflictErrorContextInfoField(val: SerializedData): ConflictErrorContextInfoField;
export declare function serializeConflictError(val: ConflictError): SerializedData;
export declare function deserializeConflictError(val: SerializedData): ConflictError;
