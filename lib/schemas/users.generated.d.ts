import { UserFull } from './userFull.generated.js';
import { SerializedData } from '../serialization/json.js';
export type UsersOrderDirectionField = 'ASC' | 'DESC';
export interface UsersOrderField {
    readonly by?: string;
    readonly direction?: UsersOrderDirectionField;
}
export interface Users {
    readonly limit?: number;
    readonly nextMarker?: string;
    readonly prevMarker?: string;
    readonly totalCount?: number;
    readonly offset?: number;
    readonly order?: readonly UsersOrderField[];
    readonly entries?: readonly UserFull[];
}
export declare function serializeUsersOrderDirectionField(val: UsersOrderDirectionField): SerializedData;
export declare function deserializeUsersOrderDirectionField(val: SerializedData): UsersOrderDirectionField;
export declare function serializeUsersOrderField(val: UsersOrderField): SerializedData;
export declare function deserializeUsersOrderField(val: SerializedData): UsersOrderField;
export declare function serializeUsers(val: Users): SerializedData;
export declare function deserializeUsers(val: SerializedData): Users;
