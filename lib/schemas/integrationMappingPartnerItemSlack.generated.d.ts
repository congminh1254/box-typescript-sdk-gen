import { SerializedData } from '../serialization/json.js';
export type IntegrationMappingPartnerItemSlackTypeField = 'channel';
export declare class IntegrationMappingPartnerItemSlack {
    readonly type: IntegrationMappingPartnerItemSlackTypeField;
    readonly id: string;
    readonly slackWorkspaceId?: string;
    readonly slackOrgId?: string;
    constructor(fields: Omit<IntegrationMappingPartnerItemSlack, 'type'> & Partial<Pick<IntegrationMappingPartnerItemSlack, 'type'>>);
}
export interface IntegrationMappingPartnerItemSlackInput {
    readonly type?: IntegrationMappingPartnerItemSlackTypeField;
    readonly id: string;
    readonly slackWorkspaceId?: string;
    readonly slackOrgId?: string;
}
export declare function serializeIntegrationMappingPartnerItemSlackTypeField(val: IntegrationMappingPartnerItemSlackTypeField): SerializedData;
export declare function deserializeIntegrationMappingPartnerItemSlackTypeField(val: SerializedData): IntegrationMappingPartnerItemSlackTypeField;
export declare function serializeIntegrationMappingPartnerItemSlack(val: IntegrationMappingPartnerItemSlack): SerializedData;
export declare function deserializeIntegrationMappingPartnerItemSlack(val: SerializedData): IntegrationMappingPartnerItemSlack;
export declare function serializeIntegrationMappingPartnerItemSlackInput(val: IntegrationMappingPartnerItemSlackInput): SerializedData;
export declare function deserializeIntegrationMappingPartnerItemSlackInput(val: SerializedData): IntegrationMappingPartnerItemSlackInput;
