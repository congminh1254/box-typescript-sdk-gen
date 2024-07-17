"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntegrationMapping = void 0;
exports.serializeIntegrationMappingTypeField = serializeIntegrationMappingTypeField;
exports.deserializeIntegrationMappingTypeField = deserializeIntegrationMappingTypeField;
exports.serializeIntegrationMapping = serializeIntegrationMapping;
exports.deserializeIntegrationMapping = deserializeIntegrationMapping;
const integrationMappingBase_generated_js_1 = require("./integrationMappingBase.generated.js");
const integrationMappingBase_generated_js_2 = require("./integrationMappingBase.generated.js");
const integrationMappingPartnerItemSlack_generated_js_1 = require("./integrationMappingPartnerItemSlack.generated.js");
const integrationMappingPartnerItemSlack_generated_js_2 = require("./integrationMappingPartnerItemSlack.generated.js");
const folderMini_generated_js_1 = require("./folderMini.generated.js");
const folderMini_generated_js_2 = require("./folderMini.generated.js");
const integrationMappingSlackOptions_generated_js_1 = require("./integrationMappingSlackOptions.generated.js");
const integrationMappingSlackOptions_generated_js_2 = require("./integrationMappingSlackOptions.generated.js");
const userIntegrationMappings_generated_js_1 = require("./userIntegrationMappings.generated.js");
const userIntegrationMappings_generated_js_2 = require("./userIntegrationMappings.generated.js");
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
const json_js_3 = require("../serialization/json.js");
class IntegrationMapping {
    constructor(fields) {
        this.type = 'integration_mapping';
        if (fields.id) {
            this.id = fields.id;
        }
        if (fields.integrationType) {
            this.integrationType = fields.integrationType;
        }
        if (fields.type) {
            this.type = fields.type;
        }
        if (fields.partnerItem) {
            this.partnerItem = fields.partnerItem;
        }
        if (fields.boxItem) {
            this.boxItem = fields.boxItem;
        }
        if (fields.isManuallyCreated) {
            this.isManuallyCreated = fields.isManuallyCreated;
        }
        if (fields.options) {
            this.options = fields.options;
        }
        if (fields.createdBy) {
            this.createdBy = fields.createdBy;
        }
        if (fields.modifiedBy) {
            this.modifiedBy = fields.modifiedBy;
        }
        if (fields.createdAt) {
            this.createdAt = fields.createdAt;
        }
        if (fields.modifiedAt) {
            this.modifiedAt = fields.modifiedAt;
        }
    }
}
exports.IntegrationMapping = IntegrationMapping;
function serializeIntegrationMappingTypeField(val) {
    return val;
}
function deserializeIntegrationMappingTypeField(val) {
    if (val == 'integration_mapping') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize IntegrationMappingTypeField",
    });
}
function serializeIntegrationMapping(val) {
    const base = (0, integrationMappingBase_generated_js_2.serializeIntegrationMappingBase)(val);
    if (!(0, json_js_3.sdIsMap)(base)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "IntegrationMapping"',
        });
    }
    return Object.assign(Object.assign({}, base), {
        ['type']: serializeIntegrationMappingTypeField(val.type),
        ['partner_item']: (0, integrationMappingPartnerItemSlack_generated_js_1.serializeIntegrationMappingPartnerItemSlack)(val.partnerItem),
        ['box_item']: (0, folderMini_generated_js_1.serializeFolderMini)(val.boxItem),
        ['is_manually_created']: val.isManuallyCreated == void 0 ? void 0 : val.isManuallyCreated,
        ['options']: val.options == void 0
            ? void 0
            : (0, integrationMappingSlackOptions_generated_js_1.serializeIntegrationMappingSlackOptions)(val.options),
        ['created_by']: val.createdBy == void 0
            ? void 0
            : (0, userIntegrationMappings_generated_js_1.serializeUserIntegrationMappings)(val.createdBy),
        ['modified_by']: val.modifiedBy == void 0
            ? void 0
            : (0, userIntegrationMappings_generated_js_1.serializeUserIntegrationMappings)(val.modifiedBy),
        ['created_at']: val.createdAt == void 0 ? void 0 : (0, utils_js_1.serializeDateTime)(val.createdAt),
        ['modified_at']: val.modifiedAt == void 0 ? void 0 : (0, utils_js_1.serializeDateTime)(val.modifiedAt),
    });
}
function deserializeIntegrationMapping(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "IntegrationMapping"',
        });
    }
    if (val.type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "type" of type "IntegrationMapping" to be defined',
        });
    }
    const type = deserializeIntegrationMappingTypeField(val.type);
    if (val.partner_item == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "partner_item" of type "IntegrationMapping" to be defined',
        });
    }
    const partnerItem = (0, integrationMappingPartnerItemSlack_generated_js_2.deserializeIntegrationMappingPartnerItemSlack)(val.partner_item);
    if (val.box_item == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "box_item" of type "IntegrationMapping" to be defined',
        });
    }
    const boxItem = (0, folderMini_generated_js_2.deserializeFolderMini)(val.box_item);
    if (!(val.is_manually_created == void 0) &&
        !(0, json_js_1.sdIsBoolean)(val.is_manually_created)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "is_manually_created" of type "IntegrationMapping"',
        });
    }
    const isManuallyCreated = val.is_manually_created == void 0 ? void 0 : val.is_manually_created;
    const options = val.options == void 0
        ? void 0
        : (0, integrationMappingSlackOptions_generated_js_2.deserializeIntegrationMappingSlackOptions)(val.options);
    const createdBy = val.created_by == void 0
        ? void 0
        : (0, userIntegrationMappings_generated_js_2.deserializeUserIntegrationMappings)(val.created_by);
    const modifiedBy = val.modified_by == void 0
        ? void 0
        : (0, userIntegrationMappings_generated_js_2.deserializeUserIntegrationMappings)(val.modified_by);
    if (!(val.created_at == void 0) && !(0, json_js_2.sdIsString)(val.created_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "created_at" of type "IntegrationMapping"',
        });
    }
    const createdAt = val.created_at == void 0 ? void 0 : (0, utils_js_2.deserializeDateTime)(val.created_at);
    if (!(val.modified_at == void 0) && !(0, json_js_2.sdIsString)(val.modified_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "modified_at" of type "IntegrationMapping"',
        });
    }
    const modifiedAt = val.modified_at == void 0 ? void 0 : (0, utils_js_2.deserializeDateTime)(val.modified_at);
    if (!(val.id == void 0) && !(0, json_js_2.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "IntegrationMapping"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    const integrationType = val.integration_type == void 0
        ? void 0
        : (0, integrationMappingBase_generated_js_1.deserializeIntegrationMappingBaseIntegrationTypeField)(val.integration_type);
    return {
        type: type,
        partnerItem: partnerItem,
        boxItem: boxItem,
        isManuallyCreated: isManuallyCreated,
        options: options,
        createdBy: createdBy,
        modifiedBy: modifiedBy,
        createdAt: createdAt,
        modifiedAt: modifiedAt,
        id: id,
        integrationType: integrationType,
    };
}
//# sourceMappingURL=integrationMapping.generated.js.map