import { SerializedData } from '../serialization/json.js';
export type IntegrationMappingBoxItemSlackTypeField = 'folder';
export declare class IntegrationMappingBoxItemSlack {
    readonly type: IntegrationMappingBoxItemSlackTypeField;
    readonly id: string;
    constructor(fields: Omit<IntegrationMappingBoxItemSlack, 'type'> & Partial<Pick<IntegrationMappingBoxItemSlack, 'type'>>);
}
export interface IntegrationMappingBoxItemSlackInput {
    readonly type?: IntegrationMappingBoxItemSlackTypeField;
    readonly id: string;
}
export declare function serializeIntegrationMappingBoxItemSlackTypeField(val: IntegrationMappingBoxItemSlackTypeField): SerializedData;
export declare function deserializeIntegrationMappingBoxItemSlackTypeField(val: SerializedData): IntegrationMappingBoxItemSlackTypeField;
export declare function serializeIntegrationMappingBoxItemSlack(val: IntegrationMappingBoxItemSlack): SerializedData;
export declare function deserializeIntegrationMappingBoxItemSlack(val: SerializedData): IntegrationMappingBoxItemSlack;
export declare function serializeIntegrationMappingBoxItemSlackInput(val: IntegrationMappingBoxItemSlackInput): SerializedData;
export declare function deserializeIntegrationMappingBoxItemSlackInput(val: SerializedData): IntegrationMappingBoxItemSlackInput;
