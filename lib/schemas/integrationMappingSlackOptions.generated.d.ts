import { SerializedData } from '../serialization/json.js';
export interface IntegrationMappingSlackOptions {
    readonly isAccessManagementDisabled?: boolean;
}
export declare function serializeIntegrationMappingSlackOptions(val: IntegrationMappingSlackOptions): SerializedData;
export declare function deserializeIntegrationMappingSlackOptions(val: SerializedData): IntegrationMappingSlackOptions;
