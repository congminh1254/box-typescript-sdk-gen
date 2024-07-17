import { IntegrationMappingBaseIntegrationTypeField } from './integrationMappingBase.generated.js';
import { IntegrationMappingBase } from './integrationMappingBase.generated.js';
import { IntegrationMappingPartnerItemSlack } from './integrationMappingPartnerItemSlack.generated.js';
import { FolderMini } from './folderMini.generated.js';
import { IntegrationMappingSlackOptions } from './integrationMappingSlackOptions.generated.js';
import { UserIntegrationMappings } from './userIntegrationMappings.generated.js';
import { DateTime } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export type IntegrationMappingTypeField = 'integration_mapping';
export declare class IntegrationMapping implements IntegrationMappingBase {
    readonly id?: string;
    readonly integrationType?: IntegrationMappingBaseIntegrationTypeField;
    readonly type: IntegrationMappingTypeField;
    readonly partnerItem: IntegrationMappingPartnerItemSlack;
    readonly boxItem: FolderMini;
    readonly isManuallyCreated?: boolean;
    readonly options?: IntegrationMappingSlackOptions;
    readonly createdBy?: UserIntegrationMappings;
    readonly modifiedBy?: UserIntegrationMappings;
    readonly createdAt?: DateTime;
    readonly modifiedAt?: DateTime;
    constructor(fields: Omit<IntegrationMapping, 'type'> & Partial<Pick<IntegrationMapping, 'type'>>);
}
export declare function serializeIntegrationMappingTypeField(val: IntegrationMappingTypeField): SerializedData;
export declare function deserializeIntegrationMappingTypeField(val: SerializedData): IntegrationMappingTypeField;
export declare function serializeIntegrationMapping(val: IntegrationMapping): SerializedData;
export declare function deserializeIntegrationMapping(val: SerializedData): IntegrationMapping;
