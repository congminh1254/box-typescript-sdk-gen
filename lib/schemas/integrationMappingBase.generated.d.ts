import { SerializedData } from '../serialization/json.js';
export type IntegrationMappingBaseIntegrationTypeField = 'slack';
export interface IntegrationMappingBase {
    readonly id?: string;
    readonly integrationType?: IntegrationMappingBaseIntegrationTypeField;
}
export declare function serializeIntegrationMappingBaseIntegrationTypeField(val: IntegrationMappingBaseIntegrationTypeField): SerializedData;
export declare function deserializeIntegrationMappingBaseIntegrationTypeField(val: SerializedData): IntegrationMappingBaseIntegrationTypeField;
export declare function serializeIntegrationMappingBase(val: IntegrationMappingBase): SerializedData;
export declare function deserializeIntegrationMappingBase(val: SerializedData): IntegrationMappingBase;
