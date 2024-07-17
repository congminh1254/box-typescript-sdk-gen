"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeIntegrationMappingBaseIntegrationTypeField = serializeIntegrationMappingBaseIntegrationTypeField;
exports.deserializeIntegrationMappingBaseIntegrationTypeField = deserializeIntegrationMappingBaseIntegrationTypeField;
exports.serializeIntegrationMappingBase = serializeIntegrationMappingBase;
exports.deserializeIntegrationMappingBase = deserializeIntegrationMappingBase;
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
function serializeIntegrationMappingBaseIntegrationTypeField(val) {
    return val;
}
function deserializeIntegrationMappingBaseIntegrationTypeField(val) {
    if (val == 'slack') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize IntegrationMappingBaseIntegrationTypeField",
    });
}
function serializeIntegrationMappingBase(val) {
    return {
        ['id']: val.id == void 0 ? void 0 : val.id,
        ['integration_type']: val.integrationType == void 0
            ? void 0
            : serializeIntegrationMappingBaseIntegrationTypeField(val.integrationType),
    };
}
function deserializeIntegrationMappingBase(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "IntegrationMappingBase"',
        });
    }
    if (!(val.id == void 0) && !(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "IntegrationMappingBase"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    const integrationType = val.integration_type == void 0
        ? void 0
        : deserializeIntegrationMappingBaseIntegrationTypeField(val.integration_type);
    return {
        id: id,
        integrationType: integrationType,
    };
}
//# sourceMappingURL=integrationMappingBase.generated.js.map