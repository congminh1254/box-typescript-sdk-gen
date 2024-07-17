import { SerializedData } from '../serialization/json.js';
export type MetadataCascadePolicyTypeField = 'metadata_cascade_policy';
export type MetadataCascadePolicyOwnerEnterpriseTypeField = 'enterprise';
export interface MetadataCascadePolicyOwnerEnterpriseField {
    readonly type?: MetadataCascadePolicyOwnerEnterpriseTypeField;
    readonly id?: string;
}
export type MetadataCascadePolicyParentTypeField = 'folder';
export interface MetadataCascadePolicyParentField {
    readonly type?: MetadataCascadePolicyParentTypeField;
    readonly id?: string;
}
export declare class MetadataCascadePolicy {
    readonly id: string;
    readonly type: MetadataCascadePolicyTypeField;
    readonly ownerEnterprise?: MetadataCascadePolicyOwnerEnterpriseField;
    readonly parent?: MetadataCascadePolicyParentField;
    readonly scope?: string;
    readonly templateKey?: string;
    constructor(fields: Omit<MetadataCascadePolicy, 'type'> & Partial<Pick<MetadataCascadePolicy, 'type'>>);
}
export interface MetadataCascadePolicyInput {
    readonly id: string;
    readonly type?: MetadataCascadePolicyTypeField;
    readonly ownerEnterprise?: MetadataCascadePolicyOwnerEnterpriseField;
    readonly parent?: MetadataCascadePolicyParentField;
    readonly scope?: string;
    readonly templateKey?: string;
}
export declare function serializeMetadataCascadePolicyTypeField(val: MetadataCascadePolicyTypeField): SerializedData;
export declare function deserializeMetadataCascadePolicyTypeField(val: SerializedData): MetadataCascadePolicyTypeField;
export declare function serializeMetadataCascadePolicyOwnerEnterpriseTypeField(val: MetadataCascadePolicyOwnerEnterpriseTypeField): SerializedData;
export declare function deserializeMetadataCascadePolicyOwnerEnterpriseTypeField(val: SerializedData): MetadataCascadePolicyOwnerEnterpriseTypeField;
export declare function serializeMetadataCascadePolicyOwnerEnterpriseField(val: MetadataCascadePolicyOwnerEnterpriseField): SerializedData;
export declare function deserializeMetadataCascadePolicyOwnerEnterpriseField(val: SerializedData): MetadataCascadePolicyOwnerEnterpriseField;
export declare function serializeMetadataCascadePolicyParentTypeField(val: MetadataCascadePolicyParentTypeField): SerializedData;
export declare function deserializeMetadataCascadePolicyParentTypeField(val: SerializedData): MetadataCascadePolicyParentTypeField;
export declare function serializeMetadataCascadePolicyParentField(val: MetadataCascadePolicyParentField): SerializedData;
export declare function deserializeMetadataCascadePolicyParentField(val: SerializedData): MetadataCascadePolicyParentField;
export declare function serializeMetadataCascadePolicy(val: MetadataCascadePolicy): SerializedData;
export declare function deserializeMetadataCascadePolicy(val: SerializedData): MetadataCascadePolicy;
export declare function serializeMetadataCascadePolicyInput(val: MetadataCascadePolicyInput): SerializedData;
export declare function deserializeMetadataCascadePolicyInput(val: SerializedData): MetadataCascadePolicyInput;
