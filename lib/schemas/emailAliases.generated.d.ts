import { EmailAlias } from './emailAlias.generated.js';
import { SerializedData } from '../serialization/json.js';
export interface EmailAliases {
    readonly totalCount?: number;
    readonly entries?: readonly EmailAlias[];
}
export declare function serializeEmailAliases(val: EmailAliases): SerializedData;
export declare function deserializeEmailAliases(val: SerializedData): EmailAliases;
