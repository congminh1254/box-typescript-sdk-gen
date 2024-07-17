"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeIntegrationMappingMiniPartnerItemTypeField = serializeIntegrationMappingMiniPartnerItemTypeField;
exports.deserializeIntegrationMappingMiniPartnerItemTypeField = deserializeIntegrationMappingMiniPartnerItemTypeField;
exports.serializeIntegrationMappingMiniBoxItemTypeField = serializeIntegrationMappingMiniBoxItemTypeField;
exports.deserializeIntegrationMappingMiniBoxItemTypeField = deserializeIntegrationMappingMiniBoxItemTypeField;
exports.serializeIntegrationMappingMini = serializeIntegrationMappingMini;
exports.deserializeIntegrationMappingMini = deserializeIntegrationMappingMini;
const integrationMappingBase_generated_js_1 = require("./integrationMappingBase.generated.js");
const integrationMappingBase_generated_js_2 = require("./integrationMappingBase.generated.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
function serializeIntegrationMappingMiniPartnerItemTypeField(val) {
    return val;
}
function deserializeIntegrationMappingMiniPartnerItemTypeField(val) {
    if (val == 'channel') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize IntegrationMappingMiniPartnerItemTypeField",
    });
}
function serializeIntegrationMappingMiniBoxItemTypeField(val) {
    return val;
}
function deserializeIntegrationMappingMiniBoxItemTypeField(val) {
    if (val == 'folder') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize IntegrationMappingMiniBoxItemTypeField",
    });
}
function serializeIntegrationMappingMini(val) {
    const base = (0, integrationMappingBase_generated_js_2.serializeIntegrationMappingBase)(val);
    if (!(0, json_js_2.sdIsMap)(base)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "IntegrationMappingMini"',
        });
    }
    return Object.assign(Object.assign({}, base), {
        ['partner_item_id']: val.partnerItemId == void 0 ? void 0 : val.partnerItemId,
        ['partner_item_type']: val.partnerItemType == void 0
            ? void 0
            : serializeIntegrationMappingMiniPartnerItemTypeField(val.partnerItemType),
        ['box_item_id']: val.boxItemId == void 0 ? void 0 : val.boxItemId,
        ['box_item_type']: val.boxItemType == void 0
            ? void 0
            : serializeIntegrationMappingMiniBoxItemTypeField(val.boxItemType),
    });
}
function deserializeIntegrationMappingMini(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "IntegrationMappingMini"',
        });
    }
    if (!(val.partner_item_id == void 0) && !(0, json_js_1.sdIsString)(val.partner_item_id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "partner_item_id" of type "IntegrationMappingMini"',
        });
    }
    const partnerItemId = val.partner_item_id == void 0 ? void 0 : val.partner_item_id;
    const partnerItemType = val.partner_item_type == void 0
        ? void 0
        : deserializeIntegrationMappingMiniPartnerItemTypeField(val.partner_item_type);
    if (!(val.box_item_id == void 0) && !(0, json_js_1.sdIsString)(val.box_item_id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "box_item_id" of type "IntegrationMappingMini"',
        });
    }
    const boxItemId = val.box_item_id == void 0 ? void 0 : val.box_item_id;
    const boxItemType = val.box_item_type == void 0
        ? void 0
        : deserializeIntegrationMappingMiniBoxItemTypeField(val.box_item_type);
    if (!(val.id == void 0) && !(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "IntegrationMappingMini"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    const integrationType = val.integration_type == void 0
        ? void 0
        : (0, integrationMappingBase_generated_js_1.deserializeIntegrationMappingBaseIntegrationTypeField)(val.integration_type);
    return {
        partnerItemId: partnerItemId,
        partnerItemType: partnerItemType,
        boxItemId: boxItemId,
        boxItemType: boxItemType,
        id: id,
        integrationType: integrationType,
    };
}
//# sourceMappingURL=integrationMappingMini.generated.js.map