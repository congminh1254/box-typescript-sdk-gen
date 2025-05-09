"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocGenBatchBaseV2025R0 = void 0;
exports.serializeDocGenBatchBaseV2025R0TypeField = serializeDocGenBatchBaseV2025R0TypeField;
exports.deserializeDocGenBatchBaseV2025R0TypeField = deserializeDocGenBatchBaseV2025R0TypeField;
exports.serializeDocGenBatchBaseV2025R0 = serializeDocGenBatchBaseV2025R0;
exports.deserializeDocGenBatchBaseV2025R0 = deserializeDocGenBatchBaseV2025R0;
exports.serializeDocGenBatchBaseV2025R0Input = serializeDocGenBatchBaseV2025R0Input;
exports.deserializeDocGenBatchBaseV2025R0Input = deserializeDocGenBatchBaseV2025R0Input;
const errors_js_1 = require("../../box/errors.js");
const json_js_1 = require("../../serialization/json.js");
const json_js_2 = require("../../serialization/json.js");
class DocGenBatchBaseV2025R0 {
    constructor(fields) {
        /**
         * `docgen_batch` */
        this.type = 'docgen_batch';
        if (fields.id !== undefined) {
            this.id = fields.id;
        }
        if (fields.type !== undefined) {
            this.type = fields.type;
        }
        if (fields.rawData !== undefined) {
            this.rawData = fields.rawData;
        }
    }
}
exports.DocGenBatchBaseV2025R0 = DocGenBatchBaseV2025R0;
function serializeDocGenBatchBaseV2025R0TypeField(val) {
    return val;
}
function deserializeDocGenBatchBaseV2025R0TypeField(val) {
    if (val == 'docgen_batch') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize DocGenBatchBaseV2025R0TypeField",
    });
}
function serializeDocGenBatchBaseV2025R0(val) {
    return {
        ['id']: val.id,
        ['type']: serializeDocGenBatchBaseV2025R0TypeField(val.type),
    };
}
function deserializeDocGenBatchBaseV2025R0(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "DocGenBatchBaseV2025R0"',
        });
    }
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "DocGenBatchBaseV2025R0" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "DocGenBatchBaseV2025R0"',
        });
    }
    const id = val.id;
    if (val.type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "type" of type "DocGenBatchBaseV2025R0" to be defined',
        });
    }
    const type = deserializeDocGenBatchBaseV2025R0TypeField(val.type);
    return { id: id, type: type };
}
function serializeDocGenBatchBaseV2025R0Input(val) {
    return {
        ['id']: val.id,
        ['type']: val.type == void 0
            ? val.type
            : serializeDocGenBatchBaseV2025R0TypeField(val.type),
    };
}
function deserializeDocGenBatchBaseV2025R0Input(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "DocGenBatchBaseV2025R0Input"',
        });
    }
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "DocGenBatchBaseV2025R0Input" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "DocGenBatchBaseV2025R0Input"',
        });
    }
    const id = val.id;
    const type = val.type == void 0
        ? void 0
        : deserializeDocGenBatchBaseV2025R0TypeField(val.type);
    return { id: id, type: type };
}
//# sourceMappingURL=docGenBatchBaseV2025R0.generated.js.map