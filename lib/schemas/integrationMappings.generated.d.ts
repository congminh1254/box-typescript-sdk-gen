import { IntegrationMapping } from './integrationMapping.generated.js';
import { SerializedData } from '../serialization/json.js';
export interface IntegrationMappings {
    readonly limit?: number;
    readonly nextMarker?: string;
    readonly entries?: readonly IntegrationMapping[];
}
export declare function serializeIntegrationMappings(val: IntegrationMappings): SerializedData;
export declare function deserializeIntegrationMappings(val: SerializedData): IntegrationMappings;
