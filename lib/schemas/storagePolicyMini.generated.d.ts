import { SerializedData } from '../serialization/json.js';
export type StoragePolicyMiniTypeField = 'storage_policy';
export declare class StoragePolicyMini {
    readonly id: string;
    readonly type: StoragePolicyMiniTypeField;
    constructor(fields: Omit<StoragePolicyMini, 'type'> & Partial<Pick<StoragePolicyMini, 'type'>>);
}
export interface StoragePolicyMiniInput {
    readonly id: string;
    readonly type?: StoragePolicyMiniTypeField;
}
export declare function serializeStoragePolicyMiniTypeField(val: StoragePolicyMiniTypeField): SerializedData;
export declare function deserializeStoragePolicyMiniTypeField(val: SerializedData): StoragePolicyMiniTypeField;
export declare function serializeStoragePolicyMini(val: StoragePolicyMini): SerializedData;
export declare function deserializeStoragePolicyMini(val: SerializedData): StoragePolicyMini;
export declare function serializeStoragePolicyMiniInput(val: StoragePolicyMiniInput): SerializedData;
export declare function deserializeStoragePolicyMiniInput(val: SerializedData): StoragePolicyMiniInput;
