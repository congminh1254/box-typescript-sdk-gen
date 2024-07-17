import { IntegrationMappingBase } from './integrationMappingBase.generated.js';
import { SerializedData } from '../serialization/json.js';
export type IntegrationMappingMiniPartnerItemTypeField = 'channel';
export type IntegrationMappingMiniBoxItemTypeField = 'folder';
export type IntegrationMappingMini = IntegrationMappingBase & {
    readonly partnerItemId?: string;
    readonly partnerItemType?: IntegrationMappingMiniPartnerItemTypeField;
    readonly boxItemId?: string;
    readonly boxItemType?: IntegrationMappingMiniBoxItemTypeField;
};
export declare function serializeIntegrationMappingMiniPartnerItemTypeField(val: IntegrationMappingMiniPartnerItemTypeField): SerializedData;
export declare function deserializeIntegrationMappingMiniPartnerItemTypeField(val: SerializedData): IntegrationMappingMiniPartnerItemTypeField;
export declare function serializeIntegrationMappingMiniBoxItemTypeField(val: IntegrationMappingMiniBoxItemTypeField): SerializedData;
export declare function deserializeIntegrationMappingMiniBoxItemTypeField(val: SerializedData): IntegrationMappingMiniBoxItemTypeField;
export declare function serializeIntegrationMappingMini(val: IntegrationMappingMini): SerializedData;
export declare function deserializeIntegrationMappingMini(val: SerializedData): IntegrationMappingMini;
